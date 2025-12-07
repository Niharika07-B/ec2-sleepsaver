import { ArrowRight, Shield, Zap, Clock, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ec2-orange via-ec2-darkOrange to-ec2-navy text-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-6xl">🌙</span>
            <div>
              <h1 className="text-5xl font-bold mb-2">EC2 SleepSaver</h1>
              <p className="text-2xl opacity-90">Your Automatic Cloud Cost Bodyguard</p>
            </div>
          </div>
          <p className="text-xl mb-8 max-w-3xl leading-relaxed">
            Auto-Stop Idle EC2 Instances to Save Cloud Costs Effortlessly. A fully-automated, intelligent cost-saver for AWS developers & teams.
          </p>
          <div className="flex gap-4">
            <Link
              to="/instances"
              className="flex items-center gap-2 px-8 py-4 bg-white text-ec2-orange font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/docs"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-ec2-orange transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-8 bg-red-50 dark:bg-red-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                The Problem (Crisp & Clear)
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Developers frequently spin up EC2 instances for testing, debugging, or temporary workloads — and then <span className="font-bold text-red-600 dark:text-red-400">forget to stop them</span>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Result?</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Unnecessary bills
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Wasted budget
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Zero visibility
                  </li>
                </ul>
                <p className="text-lg font-bold text-red-600 dark:text-red-400 mt-4">
                  💸 This small mistake can easily cost hundreds of dollars in a month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                💡 Solution: EC2 SleepSaver
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                A smart automation tool that monitors EC2 usage metrics in real-time, identifies idle instances, and auto-stops them safely without affecting production.
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  ✨ It works in the background, saves money, and requires zero manual effort.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-ec2-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Real-Time Monitoring</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tracks CPU & network metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-ec2-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Production Safe</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Never touches prod instances</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-ec2-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Automated</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Set it once, save forever</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="w-12 h-12 bg-ec2-orange rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Real-Time Cost Monitor
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                See exactly how much money you're wasting on idle instances with live counters updating every second.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Smart Alerts
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Get instant notifications when instances go idle with color-coded severity and one-click actions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Auto-Schedule
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Schedule automatic stops for non-work hours. Save 66% of daily costs by stopping instances at night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-ec2-navy text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-ec2-orange mb-2">30-50%</p>
              <p className="text-lg">Cost Savings</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-ec2-orange mb-2">24/7</p>
              <p className="text-lg">Automated Monitoring</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-ec2-orange mb-2">0</p>
              <p className="text-lg">Manual Effort</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-ec2-orange mb-2">100%</p>
              <p className="text-lg">Production Safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-ec2-orange to-ec2-darkOrange text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Stop Wasting Money?
          </h2>
          <p className="text-xl mb-8">
            Start monitoring your EC2 instances and save costs automatically
          </p>
          <Link
            to="/instances"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ec2-orange font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Start Saving Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
