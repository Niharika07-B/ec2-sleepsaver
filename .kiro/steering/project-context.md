---
inclusion: always
---

# EC2 SleepSaver Project Context

## Project Overview
EC2 SleepSaver is an automatic cloud cost optimization tool that monitors and stops idle EC2 instances to prevent unnecessary AWS charges.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: AWS Lambda (Python)
- **Deployment**: GitHub Pages (frontend), AWS Lambda (backend)

## Key Features
1. Real-time instance monitoring
2. Automatic idle detection and stopping
3. Tag-based instance management
4. Multi-channel notifications (Slack, Email, Telegram)
5. Cost savings analytics dashboard
6. Dry-run mode for testing

## Development Guidelines

### Code Style
- Use functional React components with hooks
- Follow Tailwind CSS utility-first approach
- Keep components modular and reusable
- Use Lucide React for icons

### Component Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── App.jsx        # Main app with routing
└── main.jsx       # Entry point
```

### Safety Rules
- Never modify production-tagged instances
- Always include dry-run mode in new features
- Validate all AWS API calls
- Include proper error handling

## Deployment
- Frontend: GitHub Pages at https://niharika07-b.github.io/ec2-sleepsaver/
- Base URL configured in vite.config.js: `/ec2-sleepsaver/`
- Auto-deploys via GitHub Actions on push to main

## Testing Locally
```bash
npm install
npm run dev
```

## Building for Production
```bash
npm run build
npm run preview  # Test production build locally
```
