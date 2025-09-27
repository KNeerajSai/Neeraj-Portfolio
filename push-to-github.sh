#!/bin/bash

# Add GitHub remote (replace YOUR_GITHUB_USERNAME with your actual username)
echo "Adding GitHub remote..."
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/neeraj-portfolio.git

# Verify remote was added
echo "Verifying remote..."
git remote -v

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Your portfolio is now on GitHub!"