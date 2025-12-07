import { useState, useEffect } from 'react'
import { Server, DollarSign, Power, TrendingDown, AlertTriangle, Clock } from 'lucide-react'
import StatCard from '../components/StatCard'
import Card from '../components/Card'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const savingsData = [
  { date: 'Mon', savings: 45 },
  { date: 'Tue', savings: 52 },
  { date: 'Wed', savings: 38 },
  { date: 'Thu', savings: 65 },
  { date: 'Fri', savings: 48 },
  { date: 'Sat', savings: 72 },
  { date: 'Sun', savings: 58 },
]

const instanceData = [
  { name: 'Active', count: 12 },
  { name: 'Idle', count: 5 },
  { name: 'Stopped', count: 23 },
]

const recentActions = [
  { id: 'i-0a1b2c3d', name: 'dev-server-01', action: 'Stopped', time: '5 mins ago', reason: 'CPU < 3% for 32 min' },
  { id: 'i-4e5f6g7h', name: 'test-instance', action: 'Stopped', time: '12 mins ago', reason: 'CPU < 3% for 35 min' },
  { id: 'i-8i9j0k1l', name: 'staging-web', action: 'Stopped', time: '28 mins ago', reason: 'CPU < 3% for 40 min' },
  { id: 'i-2m3n4o5p', name: 'demo-app', action: 'Stopped', time: '1 hour ago', reason: 'CPU < 3% for 31 min' },
]

export default function Dashboard() {
  // PROBLEM 1: Real-time Cost Calculator
  const [costPerHour] = useState(0.096) // t3.medium hourly cost
  const [idleHours, setIdleHours] = useState(0)
  const [wastedCost, setWastedCost] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIdleHours(prev => prev + 0.0167) // Add 1 minute
      setWastedCost(prev => prev + (costPerHour / 60))
    }, 1000) // Update every second for demo
    return () => clearInterval(interval)
  }, [costPerHour])

  // PROBLEM 2: Idle Instance Alert System
  const [alerts, setAlerts] = useState([
    { id: 1, instance: 'dev-server-01', idleTime: 45, severity: 'high' },
    { id: 2, instance: 'test-instance', idleTime: 28, severity: 'medium' },
    { id: 3, instance: 'demo-app', idleTime: 15, severity: 'low' },
  ])

  const handleDismissAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  // PROBLEM 3: Quick Action Scheduler
  const [scheduledActions, setScheduledActions] = useState([
    { id: 1, action: 'Stop all dev instances', time: '18:00', enabled: true },
    { id: 2, action: 'Stop test instances', time: '20:00', enabled: true },
  ])

  const toggleSchedule = (id) => {
    setScheduledActions(scheduledActions.map(item => 
      item.id === id ? { ...item, enabled: !item.enabled } : item
    ))
  }
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor your EC2 instances and cost savings</p>
      </div>

      {/* PROBLEM 1: Real-Time Cost Waste Calculator */}
      <Card className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                💸 Real-Time Cost Waste Monitor
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold">Problem Solved:</span> You can't see money burning in real-time. This shows exactly how much you're wasting RIGHT NOW on idle instances.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Idle Hours</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">{idleHours.toFixed(2)}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Wasted Cost</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">${wastedCost.toFixed(2)}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Projection</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">${(wastedCost * 30).toFixed(0)}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* PROBLEM 2: Smart Alert System */}
      <Card className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            🚨 Idle Instance Alerts
          </h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-semibold">Problem Solved:</span> You forget which instances are running. Get instant alerts when instances go idle.
        </p>
        <div className="space-y-3">
          {alerts.map(alert => (
            <div key={alert.id} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  alert.severity === 'high' ? 'bg-red-500' :
                  alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{alert.instance}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Idle for {alert.idleTime} minutes</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-ec2-orange text-white rounded-lg hover:bg-ec2-darkOrange text-sm font-semibold">
                  Stop Now
                </button>
                <button 
                  onClick={() => handleDismissAlert(alert.id)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-sm font-semibold"
                >
                  Dismiss
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* PROBLEM 3: Auto-Schedule System */}
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            ⏰ Smart Auto-Schedule
          </h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-semibold">Problem Solved:</span> You work 9-5 but instances run 24/7. Schedule automatic stops for non-work hours.
        </p>
        <div className="space-y-3">
          {scheduledActions.map(schedule => (
            <div key={schedule.id} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{schedule.action}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Scheduled at {schedule.time}</p>
                </div>
              </div>
              <button
                onClick={() => toggleSchedule(schedule.id)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  schedule.enabled ? 'bg-ec2-orange' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    schedule.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
          <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
            + Add New Schedule
          </button>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Running Instances"
          value="12"
          subtitle="5 idle detected"
          icon={Server}
          color="blue"
        />
        <StatCard
          title="Stopped Today"
          value="23"
          subtitle="Auto-stopped instances"
          icon={Power}
          color="red"
        />
        <StatCard
          title="Monthly Savings"
          value="$378"
          subtitle="+12% from last month"
          icon={DollarSign}
          color="green"
        />
        <StatCard
          title="Cost Avoided"
          value="$1,245"
          subtitle="Total saved this year"
          icon={TrendingDown}
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Daily Savings (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={savingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Line type="monotone" dataKey="savings" stroke="#FF9900" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Instance Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={instanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Bar dataKey="count" fill="#FF9900" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Actions */}
      <Card>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recent Auto-Stop Actions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Instance ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Action</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Reason</th>
              </tr>
            </thead>
            <tbody>
              {recentActions.map((action) => (
                <tr key={action.id} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4 text-sm font-mono text-gray-600 dark:text-gray-400">{action.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{action.name}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      {action.action}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{action.time}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{action.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
