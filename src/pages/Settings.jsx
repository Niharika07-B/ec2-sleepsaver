import { useState } from 'react'
import Card from '../components/Card'

export default function Settings() {
  const [settings, setSettings] = useState({
    cpuThreshold: 3,
    idleDuration: 30,
    checkFrequency: 60,
    dryRunMode: false,
    includeTags: 'AutoStop:true',
    excludeTags: 'Environment:Production',
  })

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value })
  }

  const handleSave = () => {
    // Save to localStorage for persistence
    localStorage.setItem('ec2-sleepsaver-settings', JSON.stringify(settings))
    alert('✅ Settings saved successfully! Your rules are now active.')
  }

  // Load settings on mount
  useState(() => {
    const saved = localStorage.getItem('ec2-sleepsaver-settings')
    if (saved) {
      setSettings(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Configure auto-stop rules and behavior</p>
      </div>

      <div className="max-w-3xl space-y-6">
        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Detection Rules</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                CPU Threshold (%)
              </label>
              <input
                type="number"
                value={settings.cpuThreshold}
                onChange={(e) => handleChange('cpuThreshold', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Instances with CPU below this threshold are considered idle
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Idle Duration (minutes)
              </label>
              <input
                type="number"
                value={settings.idleDuration}
                onChange={(e) => handleChange('idleDuration', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                How long an instance must be idle before auto-stopping
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Check Frequency (minutes)
              </label>
              <input
                type="number"
                value={settings.checkFrequency}
                onChange={(e) => handleChange('checkFrequency', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                How often to check instance metrics
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tag Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Include Tags
              </label>
              <input
                type="text"
                value={settings.includeTags}
                onChange={(e) => handleChange('includeTags', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Key:Value"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Exclude Tags
              </label>
              <input
                type="text"
                value={settings.excludeTags}
                onChange={(e) => handleChange('excludeTags', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Key:Value"
              />
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Safety Options</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Dry Run Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test without actually stopping instances
              </p>
            </div>
            <button
              onClick={() => handleChange('dryRunMode', !settings.dryRunMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.dryRunMode ? 'bg-ec2-orange' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.dryRunMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </Card>

        <button
          onClick={handleSave}
          className="w-full px-6 py-3 bg-ec2-orange text-white font-semibold rounded-lg hover:bg-ec2-darkOrange transition-colors"
        >
          Save Settings
        </button>
      </div>
    </div>
  )
}
