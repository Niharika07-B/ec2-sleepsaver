# 🌙 EC2 SleepSaver - Auto-Stop Idle EC2 Instances

Your Automatic Cloud Cost Bodyguard - Save money by automatically stopping idle EC2 instances.

## 🎯 Problem

Developers spin up EC2 instances for testing and forget to stop them, resulting in unnecessary AWS bills.

## 💡 Solution

EC2 SleepSaver monitors EC2 usage in real-time, identifies idle instances, and auto-stops them safely.

## ⭐ Features

- **Idle Detection**: Monitors CPU & Network metrics via CloudWatch
- **Auto-Stop**: Automatically stops idle dev/test instances
- **Tag-Based Control**: Fine-grained instance management
- **Notifications**: Slack, Email, Telegram alerts
- **Safety First**: Never touches production instances
- **Analytics Dashboard**: Track savings and usage
- **Dry-Run Mode**: Test without stopping instances

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Tech Stack

- React + Vite
- Tailwind CSS
- Recharts
- Lucide Icons
- AWS SDK (boto3 for backend)

## 📊 Dashboard Features

- Real-time instance monitoring
- Cost savings analytics
- Configurable rules
- Activity logs
- Multi-channel notifications

## 🔒 Safety Rules

- Production instances are never stopped
- Minimum uptime checks
- Tag-based exclusions
- Dry-run mode for testing

## 🌐 Live Demo

Visit the live application at: https://niharika07-b.github.io/ec2-sleepsaver/

## 📝 License

MIT
