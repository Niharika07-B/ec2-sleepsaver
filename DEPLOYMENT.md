# 🚀 Deploy EC2 SleepSaver to GitHub Pages

## Quick Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Create a GitHub Repository**
   ```bash
   cd ec2-sleepsaver
   git init
   git add .
   git commit -m "Initial commit: EC2 SleepSaver"
   ```

2. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it: `ec2-sleepsaver`
   - Don't initialize with README (we already have files)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ec2-sleepsaver.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - The workflow will automatically deploy on every push to main

5. **Access Your Site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/ec2-sleepsaver/`
   - Wait 2-3 minutes for the first deployment

### Option 2: Manual Deployment with gh-pages

1. **Install gh-pages**
   ```bash
   cd ec2-sleepsaver
   npm install --save-dev gh-pages
   ```

2. **Build and Deploy**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to repository settings → Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" and "/ (root)"
   - Save

4. **Access Your Site**
   - Live at: `https://YOUR_USERNAME.github.io/ec2-sleepsaver/`

## Important Notes

### Base URL Configuration
The `vite.config.js` is already configured with:
```javascript
base: '/ec2-sleepsaver/'
```

If you want to use a custom domain or deploy to root:
- For custom domain: Change `base: '/'`
- For root deployment: Change `base: '/'`

### Custom Domain (Optional)

1. **Add CNAME file**
   ```bash
   echo "your-domain.com" > ec2-sleepsaver/public/CNAME
   ```

2. **Configure DNS**
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Update vite.config.js**
   ```javascript
   base: '/'
   ```

## Troubleshooting

### Blank Page After Deployment
- Check if `base` in `vite.config.js` matches your repository name
- Ensure GitHub Pages is enabled in repository settings

### 404 Errors on Routes
- GitHub Pages doesn't support client-side routing by default
- The app uses hash routing which works with GitHub Pages

### Build Fails
- Check Node version (requires 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

## Verify Deployment

After deployment, test these features:
- ✅ Homepage loads correctly
- ✅ Navigation works (all pages)
- ✅ Dark/Light mode toggle
- ✅ Real-time cost counters
- ✅ Interactive alerts and schedules
- ✅ Charts and graphs display

## Update Deployment

To update your live site:
```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

The GitHub Action will automatically rebuild and deploy.

---

**Your EC2 SleepSaver will be live at:**
`https://YOUR_USERNAME.github.io/ec2-sleepsaver/`

Replace `YOUR_USERNAME` with your actual GitHub username.
