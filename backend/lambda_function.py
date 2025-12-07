import boto3
import json
from datetime import datetime, timedelta

ec2 = boto3.client('ec2')
cloudwatch = boto3.client('cloudwatch')
dynamodb = boto3.resource('dynamodb')

# Configuration
CPU_THRESHOLD = 3
IDLE_DURATION_MINUTES = 30
DRY_RUN = False

def lambda_handler(event, context):
    """Main Lambda handler for EC2 SleepSaver"""
    
    stopped_instances = []
    
    # Get all running instances
    instances = get_running_instances()
    
    for instance in instances:
        instance_id = instance['InstanceId']
        tags = {tag['Key']: tag['Value'] for tag in instance.get('Tags', [])}
        
        # Skip if production or auto-stop disabled
        if should_skip_instance(tags):
            continue
        
        # Check if instance is idle
        if is_instance_idle(instance_id):
            stop_instance(instance_id, tags.get('Name', 'Unknown'))
            stopped_instances.append(instance_id)
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            'message': f'Stopped {len(stopped_instances)} instances',
            'instances': stopped_instances
        })
    }

def get_running_instances():
    """Fetch all running EC2 instances"""
    response = ec2.describe_instances(
        Filters=[{'Name': 'instance-state-name', 'Values': ['running']}]
    )
    
    instances = []
    for reservation in response['Reservations']:
        instances.extend(reservation['Instances'])
    
    return instances

def should_skip_instance(tags):
    """Check if instance should be skipped"""
    # Skip production instances
    if tags.get('Environment') == 'Production':
        return True
    
    # Skip if auto-stop is disabled
    if tags.get('AutoStop') == 'false':
        return True
    
    return False

def is_instance_idle(instance_id):
    """Check if instance is idle based on CloudWatch metrics"""
    end_time = datetime.utcnow()
    start_time = end_time - timedelta(minutes=IDLE_DURATION_MINUTES)
    
    # Get CPU utilization
    cpu_response = cloudwatch.get_metric_statistics(
        Namespace='AWS/EC2',
        MetricName='CPUUtilization',
        Dimensions=[{'Name': 'InstanceId', 'Value': instance_id}],
        StartTime=start_time,
        EndTime=end_time,
        Period=300,
        Statistics=['Average']
    )
    
    if not cpu_response['Datapoints']:
        return False
    
    # Check if all datapoints are below threshold
    avg_cpu = sum(dp['Average'] for dp in cpu_response['Datapoints']) / len(cpu_response['Datapoints'])
    
    return avg_cpu < CPU_THRESHOLD

def stop_instance(instance_id, instance_name):
    """Stop an EC2 instance"""
    if DRY_RUN:
        print(f"[DRY RUN] Would stop instance {instance_id} ({instance_name})")
        return
    
    try:
        ec2.stop_instances(InstanceIds=[instance_id])
        log_action(instance_id, instance_name, 'stopped')
        send_notification(instance_id, instance_name)
        print(f"Stopped instance {instance_id} ({instance_name})")
    except Exception as e:
        print(f"Error stopping instance {instance_id}: {str(e)}")

def log_action(instance_id, instance_name, action):
    """Log action to DynamoDB"""
    try:
        table = dynamodb.Table('ec2-sleepsaver-logs')
        table.put_item(
            Item={
                'instance_id': instance_id,
                'timestamp': datetime.utcnow().isoformat(),
                'instance_name': instance_name,
                'action': action,
                'reason': f'CPU < {CPU_THRESHOLD}% for {IDLE_DURATION_MINUTES} min'
            }
        )
    except Exception as e:
        print(f"Error logging action: {str(e)}")

def send_notification(instance_id, instance_name):
    """Send notification (implement Slack/Email/Telegram)"""
    message = f"Instance {instance_id} ({instance_name}) was stopped due to idle activity"
    print(f"Notification: {message}")
    # TODO: Implement actual notification logic
