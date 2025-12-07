import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Server, BarChart3, Settings, Bell, FileText, BookOpen, Activity } from 'lucide-react'
import { useState } from 'react'

export default function Layout({ children, darkMode, setDarkMode }) {
  const location = useLocation()
  const [notificationCount] = useState(3) // Number of unread notifications

  const navigation = [
    { name: 'Home', path: '/', icon: Activity },
    { name: 'Dashboard', path: '/dashboard', icon: Activity },
    { name: 'Instances', path: '/instances', icon: Server },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Notifications', path: '/notifications', icon: Bell },
    { name: 'Logs', path: '/logs', icon: FileText },
    { name: 'Docs', path: '/docs', icon: BookOpen },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-ec2-navy dark:bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ec2-orange rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">EC2 SleepSaver</h1>
              <p className="text-xs text-gray-400">Auto-Stop Manager</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  isActive
                    ? 'bg-ec2-orange text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {navigation.find(item => item.path === location.pathname)?.name || 'Dashboard'}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Notification Icon */}
              <Link
                to="/notifications"
                className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Bell className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
