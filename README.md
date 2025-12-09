<!-- 🔥 EC2_SleepSaver Landing Header - Orange AWS Theme -->
<h1 align="center">
  <img src="https://capsule-render.vercel.app/api?type=wave&color=FF7F32&height=160&section=header&text=EC2%20SleepSaver&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=50"/>
</h1>

          "I hate forgetting to stop EC2 instances… so I built EC2 SleepSaver."
<h3 align="center" style="color:#FFA559; font-size: 18px;">
🖥️ Auto-Stop Idle EC2 Instances || 🚦 Reduce AWS Costs Automatically || ⚡ Serverless Automation
</h3>

<br/>

<div align="center">

<!-- Tech Badges (Orange Variant) -->
<img src="https://img.shields.io/badge/AWS%20EC2-FF7F32?style=for-the-badge&logo=amazonec2&logoColor=white"/>
<img src="https://img.shields.io/badge/AWS%20Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon%20CloudWatch-FF4F00?style=for-the-badge&logo=amazoncloudwatch&logoColor=white"/>
<img src="https://img.shields.io/badge/EventBridge-F46A25?style=for-the-badge&logo=awseventbridge&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/TailwindCSS-0BA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white"/>

</div>

---

# 🔥 **EC2 SleepSaver — The “Forgot to Stop EC2” Fix**

Developers often start EC2 instances for testing, debugging, or small experiments and forget to stop them later.

This leads to:

- Unnecessary cloud costs

- Wasted company/student credits

- No visibility of idle compute

A single forgotten instance can burn hundreds of dollars monthly.

---

### Solution — EC2 SleepSaver 🌙
A fully serverless automation tool that continuously monitors your EC2 instances and automatically stops them when idle, saving hours of manual checking and preventing unexpected AWS charges.

Built for developers, students, startups, and cloud enthusiasts who want intelligent cost optimization — without effort.

---

# ✨ **Key Features**

### 🖥️ Real-Time EC2 Monitoring 

- Tracks CPU, NetworkIn, and NetworkOut usage

- Detects idle instances based on your thresholds

- Monitors dev, staging, or cost-sensitive environments

### 🛑 Smart Auto-Stop Engine 
- Automatically stops unused instances
- Ensures zero disruption to running workloads
- Exclusion tagging — keep critical instances always running
- Safe protection mode (double-check before stop)

### 🔔 Instant Alerts & Logs 
- Slack / Email notifications
- Alerts when an instance becomes idle
- Alerts when auto-stop gets triggered
- CloudWatch log stream for full transparency

### 🧠 Configurable Intelligence 
- Idle threshold (e.g., CPU < 3% for 20 minutes)
- Adjustable cooldown timer - Works with ANY EC2 instance type
- Supports multiple regions

### 💻 Beautiful Web Dashboard
- Powered by Vite + React + Tailwind
- View live instance status
- See usage graphs
- Manually stop / start instances
- Real-Time refresh
- Light/Dark mode ready
- Smooth animations, clean UI

### ☁️ Serverless & Cost-Free Backend 
- Implemented using AWS Lambda + CloudWatch Events
- No servers to maintain - Ultra low-cost (often ₹0 / month)
---

# 📖 Overview

<div class="flex justify-center">
  <img 
    class="w-[764px] h-[429px]"
    src="https://github.com/user-attachments/assets/1723dcdb-7047-46b9-8b9e-f68974d6e7f4"
    alt="Screenshot"
  />
</div>



EC2 SleepSaver automatically identifies inactive EC2 instances and shuts them down before they generate unnecessary AWS charges.

Perfect for:

- Developers forgetting to stop EC2 after testing

- Students doing AWS labs

- Hackathon/cloud challenge participants

- Freelancers optimizing client bills

- Startups reducing monthly AWS spending

- No more “Why did AWS charge me 1500₹ for a t2.micro??”

---
# ☁️ **Architecture Diagram**

![PHOTO-2025-12-07-14-31-33](https://github.com/user-attachments/assets/6fbd497d-25e3-467a-b1c2-1d31e42e4780)

---

# 🧠 **How SleepSaver Works** 

### 1️⃣ CloudWatch Event Runs Every 15 Minutes
```
Triggers the Lambda function based on schedule.
```

### 2️⃣ Lambda Checks Instance Metrics

Uses CloudWatch metrics:
```
- CPUUtilization

- NetworkIn

- NetworkOut
```

### 3️⃣ Compares Usage Against Idle Rules

Example condition:
```
CPU < 3% AND NetworkIn < 1MB AND NetworkOut < 1MB for 20 min
```

### 4️⃣ Sends Notification

Slack/Email alert:
```
"Instance i-0a12bc3d is idle. Stopping in 5 minutes."
```

### 5️⃣ If still idle → Auto-Stop
```
Lambda safely stops the instance using AWS EC2 API.
```

### 6️⃣ Dashboard Displays Real-Time Status

User sees:
```
- Idle / Running

- CPU graph

- Auto-stop logs

- Manual stop/start buttons
```

---
# 🚀 Installation

### Backend (Lambda)
```
cd backend
pip install -r requirements.txt -t .
zip -r function.zip .

```
Upload to Lambda → Attach CloudWatch Schedule
Done ✔

### Frontend (React + Vite)
```
npm install
npm run dev

```

### To deploy on GitHub Pages:
```
npm run build

```
---

# 🛠️ Tech Stack

### <h3> 🖥️ Frontend </h3>

<table style="margin-left:auto; margin-right:auto;">
  <tr>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><strong>React (Vite)</strong></td>
    <td>Fast, modern frontend framework for instant dev experience</td>
  </tr>
  <tr>
    <td><strong>Tailwind CSS</strong></td>
    <td>Utility-first styling for clean and responsive UI</td>
  </tr>
  <tr>
    <td><strong>Axios</strong></td>
    <td>Handles API requests between frontend ↔ backend</td>
  </tr>
  <tr>
    <td><strong>Lucide Icons</strong></td>
    <td>Modern, lightweight UI icon set</td>
  </tr>
  <tr>
    <td><strong>Recharts</strong></td>
    <td>Graphs & analytics visualization</td>
  </tr>
</table>

<h3>🧰 Backend</h3>

<table style="margin-left:auto; margin-right:auto;">
  <tr>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><strong>AWS Lambda</strong></td>
    <td>Serverless backend computing</td>
  </tr>
  <tr>
    <td><strong>boto3</strong></td>
    <td>AWS SDK for EC2, CloudWatch, DynamoDB integrations</td>
  </tr>
  <tr>
    <td><strong>CloudWatch</strong></td>
    <td>Pulls CPU & Network metrics, logging</td>
  </tr>
  <tr>
    <td><strong>EventBridge</strong></td>
    <td>Scheduler to run the auto-stop Lambda hourly</td>
  </tr>
</table>

<h3>🚀 Deployment</h3>

<table style="margin-left:auto; margin-right:auto;">
  <tr>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><strong>GitHub Pages</strong></td>
    <td>Frontend hosting</td>
  </tr>
  <tr>
    <td><strong>GitHub Actions CI/CD</strong></td>
    <td>Auto-build & deploy on push</td>
  </tr>
</table>


---
# 📂 Project Structure
```

ec2-sleepsaver/
│
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions CI/CD for auto-deploy to GitHub Pages
│
├── .kiro/
│   ├── context.json                  # Kiro project context & settings
│   ├── steering.md                   # Kiro instructions (problem → solution guidance)
│   └── memory.json                   # Kiro long-term memory for iterative development
│
├── backend/
│   ├── lambda_autostop.py            # Main Lambda: check idle EC2 + auto-stop logic
│   ├── lambda_notify.py              # Notification Lambda (Slack/Telegram/SES)
│   ├── lambda_reports.py             # Lambda to generate savings/usage logs
│   └── requirements.txt              # boto3 + dependencies
│
├── public/
│   ├── favicon.ico
│   └── index.html                    # Entry HTML (Vite uses this)
│
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx             # Cost & instance statistics homepage
│   │   ├── InstanceTable.jsx         # Live EC2 instance monitor UI
│   │   ├── SavingsCharts.jsx         # Recharts graphs for analytics
│   │   ├── SettingsPanel.jsx         # Thresholds, schedule, tags config
│   │   ├── Notifications.jsx         # Slack, Email, Telegram config UI
│   │   └── Logs.jsx                  # Activity log viewer
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Monitor.jsx
│   │   ├── Analytics.jsx
│   │   ├── Rules.jsx
│   │   └── Support.jsx
│   │
│   ├── assets/
│   │   └── icons/                    # Lucide custom SVGs (if any)
│   │
│   ├── services/
│   │   └── api.js                    # Axios calls to Lambda/API Gateway endpoints
│   │
│   ├── App.jsx                       # Main application root
│   └── main.jsx                      # Vite entry point
│
├── .gitignore
├── README.md                         # Main documentation (banner, features, architecture)
├── deploy-to-github.sh               # Script for manual deployment to GitHub Pages
├── index.html                        # (Optional) fallback HTML for static hosting
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
---

# 📸 Project Screenshots

<p align="center" style="margin-bottom: 40px;">
  <img width="1470" height="796" 
       src="https://github.com/user-attachments/assets/c620a911-e90f-4032-a8fe-d0214bd2c7aa" 
       alt="Screenshot 1" />
</p>

<p align="center" style="margin-bottom: 40px;">
  <img width="1470" height="796" 
       src="https://github.com/user-attachments/assets/cf526ef1-b8a4-43ed-870d-ee66aab5f020" 
       alt="Screenshot 2" />
</p>

<p align="center" style="margin-bottom: 40px;">
  <img width="1470" height="796" 
       src="https://github.com/user-attachments/assets/3f6c9a19-1e4c-402d-9304-229adcc9f948" 
       alt="Screenshot 3" />
</p>

---

# 🎯 Use Cases

### 👨‍💻 Student Labs

Auto-stops EC2 after AWS Academy/cloud courses.

### 💼 Freelancers

Prevent accidental overspending on client projects.

### 🚀 Startups

Reduce cloud bill by shutting unused dev servers.

### 🕹 Hackathon Builders

Perfect for short-term EC2 usage.

### 🧪 QA Teams

Easily manage temporary test servers.


---

# 🌐 Browser Compatibility
<p align="center">

<table>
  <tr>
    <th>🌍 Browser</th>
    <th>🧩 Compatibility</th>
  </tr>
  <tr>
    <td>🌈 <strong>Google Chrome</strong></td>
    <td>🟢 Fully Supported</td>
  </tr>
  <tr>
    <td>🔥 <strong>Mozilla Firefox</strong></td>
    <td>🟢 Fully Supported</td>
  </tr>
  <tr>
    <td>🪟 <strong>Microsoft Edge</strong></td>
    <td>🟢 Fully Supported</td>
  </tr>
  <tr>
    <td>🍏 <strong>Safari</strong></td>
    <td>🟢 Fully Supported</td>
  </tr>
</table>

</p>


---
# 🌐 Live Demo

Visit the live application at: https://niharika07-b.github.io/ec2-sleepsaver/

😂 Is your EC2 secretly burning money while you sleep? Let’s check!

---
# 📝 License

This project is licensed under the ISC License.

---
# 🤝 Credits

Made with 💙 by KIRO AI 💜  🚀 Special thanks to contributors and early testers!!!!

![kiiii](https://github.com/user-attachments/assets/639e753d-6922-44ea-b2ca-aad1e34e2753)

![keee1](https://github.com/user-attachments/assets/224a465c-a5d2-4434-8e84-bf8753f9b7c2)

---
# 🧑‍💻 Connect With Me  

Let's connect and collaborate as Diving in ocean of Knowledge brings nature and Technology together🚀:  

<div align="center"> 
  <a href="mailto:niharika.bandaru5002@gmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a> 
  <a href="https://www.linkedin.com/in/bandaru-niharika/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a> 
  <a href="https://www.instagram.com/___.nihaaaaaa.___/?igsh=MTh2MWV3dDg1NmNicw%3D%3D#">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
  </a> 
  <a href="https://medium.com/@niharika.bandaru5002">
    <img src="https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white"/>
  </a> 
  <a href="https://x.com/NihaNiharika777">
    <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white"/>
  </a> 
</div>  

---
# 💛 Show Some Love 

If you enjoyed this project, please **⭐ star the repo** — it motivates me to build more!

---
<h1 align="center">
  <img src="https://capsule-render.vercel.app/api?type=wave&color=FF7F32&height=160&section=header&animation=fadeIn"/>
</h1>
