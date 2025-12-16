---
inclusion: fileMatch
fileMatchPattern: '**/backend/**'
---

# AWS Lambda Backend Guidelines

## Lambda Function Structure
The backend Lambda function (`backend/lambda_function.py`) handles:
- EC2 instance monitoring via CloudWatch
- Idle detection based on CPU and network metrics
- Automatic instance stopping
- Notification sending

## AWS Services Used
- **EC2**: Instance management
- **CloudWatch**: Metrics collection
- **Lambda**: Serverless execution
- **EventBridge**: Scheduled triggers
- **SNS/SES**: Notifications

## Environment Variables
Required Lambda environment variables:
- `IDLE_THRESHOLD_MINUTES`: Time before considering instance idle
- `CPU_THRESHOLD`: CPU percentage threshold
- `NETWORK_THRESHOLD`: Network bytes threshold
- `DRY_RUN`: Enable/disable actual stopping
- `NOTIFICATION_CHANNELS`: Comma-separated list (slack,email,telegram)

## IAM Permissions Required
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:StopInstances",
        "ec2:DescribeTags",
        "cloudwatch:GetMetricStatistics",
        "sns:Publish",
        "ses:SendEmail"
      ],
      "Resource": "*"
    }
  ]
}
```

## Safety Checks
1. Always check for `Environment:production` tag
2. Verify minimum uptime before stopping
3. Check for `AutoStop:disabled` tag
4. Log all actions for audit trail

## Deployment
Use the provided `backend/deploy.sh` script:
```bash
cd backend
./deploy.sh
```

## Testing
- Use DRY_RUN=true for testing
- Monitor CloudWatch Logs
- Test with non-production instances first
