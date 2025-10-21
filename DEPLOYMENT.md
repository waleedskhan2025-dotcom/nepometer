# GitHub Pages Deployment Guide

## 🚀 Quick Setup (First Time)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add GitHub Actions CI/CD"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Save and wait 1-2 minutes

### Step 3: View Your Site! 🎉
Your site will be live at:
```
https://<your-username>.github.io/nepometer/
```

## 🔄 How It Works

### Automatic Deployment
Every time you push to the `main` branch:
1. ✅ GitHub Actions runs validation tests
2. ✅ Checks HTML and JavaScript syntax
3. ✅ Deploys to GitHub Pages automatically
4. ✅ Site updates within 1-2 minutes

### Pull Request Checks
When you create a pull request:
1. ✅ Validates your code
2. ✅ Checks file structure
3. ✅ Warns about console.log statements
4. ✅ Ensures quality before merging


## 📊 Workflow Status

Check your deployment status:
1. Go to the **Actions** tab in your GitHub repo
2. See real-time build and deployment progress
3. Click on any workflow run to see detailed logs

## 🛠️ Troubleshooting

### Deployment Not Working?
- Make sure you selected "GitHub Actions" as the source in Settings → Pages
- Check the Actions tab for any errors
- Ensure your branch is named `main` or `master`

### Site Not Updating?
- Clear your browser cache (Ctrl + F5)
- Wait 2-3 minutes after push
- Check Actions tab for deployment status

### Build Failures?
- Check the Actions tab for error logs
- Validate your HTML/JS syntax locally
- Ensure all required files exist (index.html, script.js, styles.css)

## 🎯 Making Changes

### Simple Updates
```bash
# Make your changes
git add .
git commit -m "Update quiz questions"
git push
# Site auto-updates in 1-2 minutes! ✨
```

### Testing Before Deploy
```bash
# Open locally to test
start index.html  # Windows
open index.html   # macOS
```

## 🔐 Workflow Files

- `.github/workflows/deploy.yml` - Main deployment workflow
- `.github/workflows/pr-checks.yml` - Pull request validation

**Don't delete these files!** They power your automatic deployment.
