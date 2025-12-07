import Card from '../components/Card'

export default function Docs() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Documentation</h1>
        <p className="text-gray-600 dark:text-gray-400">Learn how EC2 SleepSaver works</p>
      </div>

      <div className="max-w-4xl space-y-6">
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Auto-Stop Works</h2>
          <div className="prose dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              EC2 SleepSaver monitors your EC2 instances in real-time and automatically stops idle instances to save costs.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Fetches all running EC2 instances from your AWS account</li>
              <li>Checks instance tags to determine if auto-stop is enabled</li>
              <li>Retrieves CPU and network metrics from CloudWatch</li>
              <li>Identifies instances with CPU below threshold for specified duration</li>
              <li>Automatically stops idle instances (excluding production)</li>
              <li>Sends notifications via configured channels</li>
              <li>Logs all actions for audit and review</li>
            </ol>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Safety Rules</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-ec2-orange rounded-full mt-2"></div>
              <p>Production instances (tagged Environment:Production) are never stopped</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-ec2-orange rounded-full mt-2"></div>
              <p>Instances must be idle for minimum duration before stopping</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-ec2-orange rounded-full mt-2"></div>
              <p>Dry-run mode available for testing without actual stops</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-ec2-orange rounded-full mt-2"></div>
              <p>Tag-based control allows fine-grained instance management</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Setup Instructions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. AWS Configuration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Configure AWS credentials with EC2 and CloudWatch permissions
              </p>
              <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-x-auto">
                aws configure
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Tag Your Instances</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Add AutoStop:true tag to instances you want to monitor
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Configure Settings</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Set CPU threshold, idle duration, and notification preferences
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Deploy Lambda</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Deploy the Lambda function with CloudWatch Events trigger
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                What happens if I need a stopped instance?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Simply start it manually from AWS Console or CLI. It won't be stopped again until it becomes idle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                How much can I save?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Savings depend on instance types and idle time. Typical users save 30-50% on dev/test environments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Is my data safe?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes! Stopping an instance preserves all data on EBS volumes. It's like shutting down your computer.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
