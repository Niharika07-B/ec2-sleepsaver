import Card from '../components/Card'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const monthlyData = [
  { month: 'Jan', savings: 245 },
  { month: 'Feb', savings: 312 },
  { month: 'Mar', savings: 289 },
  { month: 'Apr', savings: 378 },
]

const instanceCostData = [
  { name: 'prod-web-01', cost: 145 },
  { name: 'prod-api-01', cost: 198 },
  { name: 'dev-server-01', cost: 45 },
  { name: 'test-instance', cost: 32 },
  { name: 'staging-web', cost: 67 },
]

const idleDistribution = [
  { name: '0-10 min', value: 15 },
  { name: '10-30 min', value: 35 },
  { name: '30-60 min', value: 28 },
  { name: '60+ min', value: 22 },
]

const COLORS = ['#FF9900', '#EC7211', '#232F3E', '#6B7280']

export default function SavingsAnalytics() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Savings Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Detailed cost analysis and savings insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Monthly Savings Trend</h3>
          <div className="space-y-4">
            {monthlyData.map((item) => (
              <div key={item.month}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.month}</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">${item.savings}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-ec2-orange h-2 rounded-full"
                    style={{ width: `${(item.savings / 400) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Idle Time Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={idleDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {idleDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Most Expensive Instances</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Instance Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Monthly Cost</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Potential Savings</th>
              </tr>
            </thead>
            <tbody>
              {instanceCostData.map((instance) => (
                <tr key={instance.name} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">{instance.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">${instance.cost}</td>
                  <td className="py-3 px-4 text-sm text-green-600 dark:text-green-400">${Math.round(instance.cost * 0.3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
