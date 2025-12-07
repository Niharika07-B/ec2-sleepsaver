#!/bin/bash

echo "🚀 Deploying EC2 SleepSaver to GitHub..."

# Check if repository exists on GitHub
echo "📋 Step 1: Checking GitHub repository..."
echo "Please ensure you've created the repository at:"
echo "https://github.com/Niharika07-B/ec2-sleepsaver"
echo ""
read -p "Have you created the repository? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "❌ Please create the repository first at https://github.com/new"
    echo "Repository name: ec2-sleepsaver"
    echo "Don't initialize with README (we already have files)"
    exit 1
fi

# Push to GitHub
echo ""
echo "📤 Step 2: Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Go to: https://github.com/Niharika07-B/ec2-sleepsaver/settings/pages"
    echo "2. Under 'Build and deployment':"
    echo "   - Source: Select 'GitHub Actions'"
    echo "3. Wait 2-3 minutes for deployment"
    echo ""
    echo "🌐 Your site will be live at:"
    echo "https://niharika07-b.github.io/ec2-sleepsaver/"
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "1. Repository doesn't exist - create it at https://github.com/new"
    echo "2. Authentication required - you may need to:"
    echo "   - Use a Personal Access Token instead of password"
    echo "   - Configure SSH keys"
    echo ""
    echo "For help, visit: https://docs.github.com/en/authentication"
fi
