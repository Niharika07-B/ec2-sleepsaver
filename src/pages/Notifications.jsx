import { useState } from 'react'
import Card from '../components/Card'

export default function Notifications() {
  const [config, setConfig] = useState({
    slackEnabled: true,
    slackWebhook: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL',
    emailEnabled: false,
    emailAddress: '',
    telegramEnabled: false,
    telegramToken: '',
  })

  const handleChange = (field, value) => {
    setConfig({ ...config, [field]: value })
  }

  const handleSave = () => {
    alert('Notification settings saved!')
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Notifications</h1>
        <p className="text-gray-600 dark:text-gray-400">Configure alert channels</p>
      </div>

      <div className="max-w-3xl space-y-6">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Slack</h3>
            <button
              onClick={() => handleChange('slackEnabled', !config.slackEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                config.slackEnabled ? 'bg-ec2-orange' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  config.slackEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          {config.slackEnabled && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Webhook URL
              </label>
              <input
                type="text"
                value={config.slackWebhook}
                onChange={(e) => handleChange('slackWebhook', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          )}
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
            <button
              onClick={() => handleChange('emailEnabled', !config.emailEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                config.emailEnabled ? 'bg-ec2-orange' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  config.emailEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          {config.emailEnabled && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={config.emailAddress}
                onChange={(e) => handleChange('emailAddress', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your@email.com"
              />
            </div>
          )}
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Telegram</h3>
            <button
              onClick={() => handleChange('telegramEnabled', !config.telegramEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                config.telegramEnabled ? 'bg-ec2-orange' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  config.telegramEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          {config.telegramEnabled && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bot Token
              </label>
              <input
                type="text"
                value={config.telegramToken}
                onChange={(e) => handleChange('telegramToken', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="123456:ABC-DEF..."
              />
            </div>
          )}
        </Card>

        <button
          onClick={handleSave}
          className="w-full px-6 py-3 bg-ec2-orange text-white font-semibold rounded-lg hover:bg-ec2-darkOrange transition-colors"
        >
          Save Notification Settings
        </button>
      </div>
    </div>
  )
}
