import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { Power, AlertCircle, CheckCircle, DollarSign } from 'lucide-react'

const mockInstances = [
  { id: 'i-0a1b2c3d', name: 'prod-web-01', cpu: 45, networkIn: 1250, networkOut: 890, state: 'Active', autoStop: false, tags: { Environment: 'Production' } },
  { id: 'i-4e5f6g7h', name: 'dev-server-01', cpu: 2, networkIn: 15, networkOut: 8, state: 'Idle', autoStop: true, tags: { Environment: 'Development' } },
  { id: 'i-8i9j0k1l', name: 'test-instance', cpu: 1, networkIn: 5, networkOut: 3, state: 'Idle', autoStop: true, tags: { Environment: 'Test' } },
  { id: 'i-2m3n4o5p', name: 'staging-web', cpu: 0, networkIn: 0, networkOut: 0, state: 'Stopped', autoStop: true, tags: { Environment: 'Staging' } },
  { id: 'i-6q7r8s9t', name: 'prod-api-01', cpu: 62, networkIn: 2340, networkOut: 1890, state: 'Active', autoStop: false, tags: { Environment: 'Production' } },
  { id: 'i-0u1v2w3x', name: 'demo-app', cpu: 1, networkIn: 12, networkOut: 6, state: 'Idle', autoStop: true, tags: { Environment: 'Demo' } },
]

export default function InstanceMonitor() {
  const [instances, setInstances] = useState(mockInstances)
  const [totalCost, setTotalCost] = useState(0)

  // Calculate real-time cost
  useEffect(() => {
    const interval = setInterval(() => {
      const runningInstances = instances.filter(i => i.state === 'Active' || i.state === 'Idle')
      const cost = runningInstances.length * 0.096 / 3600 // Cost per second
      setTotalCost(prev => prev + cost)
    }, 1000)
    return () => clearInterval(interval)
  }, [instances])

  const handleForceStop = (id) => {
    setInstances(instances.map(inst => 
      inst.id === id ? { ...inst, state: 'Stopped', cpu: 0, networkIn: 0, networkOut: 0 } : inst
    ))
  }

  const handleToggleAutoStop = (id) => {
    setInstances(instances.map(inst => 
      inst.id === id ? { ...inst, autoStop: !inst.autoStop } : inst
    ))
  }

  const getStateColor = (state) => {
    switch (state) {
      case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Idle': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Stopped': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getStateIcon = (state) => {
    switch (state) {
      case 'Active': return <CheckCircle className="w-4 h-4" />
      case 'Idle': return <AlertCircle className="w-4 h-4" />
      case 'Stopped': return <Power className="w-4 h-4" />
      default: return null
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Instance Monitor</h1>
        <p className="text-gray-600 dark:text-gray-400">Real-time monitoring of all EC2 instances</p>
      </div>

      {/* Real-time cost ticker */}
      <div className="mb-6 bg-gradient-to-r from-ec2-orange to-ec2-darkOrange p-6 rounded-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90 mb-1">Current Session Cost (Live)</p>
            <p className="text-4xl font-bold">${totalCost.toFixed(4)}</p>
          </div>
          <DollarSign className="w-16 h-16 opacity-50" />
        </div>
        <p className="text-sm mt-2 opacity-90">
          💡 Tip: Stop idle instances to reduce this number
        </p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Instance ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">CPU %</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Network In</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Network Out</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">State</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Auto-Stop</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {instances.map((instance) => (
                <tr key={instance.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4 text-sm font-mono text-gray-600 dark:text-gray-400">{instance.id}</td>
                  <td className="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">{instance.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{instance.cpu}%</td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{instance.networkIn} KB/s</td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{instance.networkOut} KB/s</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${getStateColor(instance.state)}`}>
                      {getStateIcon(instance.state)}
                      {instance.state}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleToggleAutoStop(instance.id)}
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                        instance.autoStop
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {instance.autoStop ? 'Enabled' : 'Disabled'}
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleForceStop(instance.id)}
                      disabled={instance.state === 'Stopped' || instance.tags.Environment === 'Production'}
                      className="px-3 py-1 text-xs font-semibold rounded bg-ec2-orange text-white hover:bg-ec2-darkOrange disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Force Stop
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
