import { useState } from 'react'
import Card from '../components/Card'
import { Search } from 'lucide-react'

const mockLogs = [
  { id: 1, timestamp: '2024-12-07 14:32:15', level: 'INFO', instance: 'i-0a1b2c3d', message: 'Instance checked - CPU: 2%, Network: 15 KB/s', action: 'Stopped' },
  { id: 2, timestamp: '2024-12-07 14:31:45', level: 'INFO', instance: 'i-4e5f6g7h', message: 'Instance checked - CPU: 45%, Network: 1250 KB/s', action: 'Active' },
  { id: 3, timestamp: '2024-12-07 14:30:22', level: 'WARN', instance: 'i-8i9j0k1l', message: 'Instance idle for 28 minutes', action: 'Monitoring' },
  { id: 4, timestamp: '2024-12-07 14:29:10', level: 'INFO', instance: 'i-2m3n4o5p', message: 'Instance stopped successfully', action: 'Stopped' },
  { id: 5, timestamp: '2024-12-07 14:28:05', level: 'ERROR', instance: 'i-6q7r8s9t', message: 'Failed to fetch metrics from CloudWatch', action: 'Error' },
  { id: 6, timestamp: '2024-12-07 14:27:30', level: 'INFO', instance: 'i-0u1v2w3x', message: 'Instance excluded - Production tag detected', action: 'Skipped' },
]

export default function Logs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilter, setLevelFilter] = useState('ALL')

  const filteredLogs = mockLogs.filter(log => {
    const matchesSearch = log.instance.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = levelFilter === 'ALL' || log.level === levelFilter
    return matchesSearch && matchesLevel
  })

  const getLevelColor = (level) => {
    switch (level) {
      case 'INFO': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'WARN': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'ERROR': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Logs</h1>
        <p className="text-gray-600 dark:text-gray-400">Detailed activity logs and events</p>
      </div>

      <Card className="mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="ALL">All Levels</option>
            <option value="INFO">Info</option>
            <option value="WARN">Warning</option>
            <option value="ERROR">Error</option>
          </select>
        </div>
      </Card>

      <Card>
        <div className="space-y-3">
          {filteredLogs.map((log) => (
            <div key={log.id} className="border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${getLevelColor(log.level)}`}>
                    {log.level}
                  </span>
                  <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{log.instance}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{log.timestamp}</span>
              </div>
              <p className="text-sm text-gray-900 dark:text-white">{log.message}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
