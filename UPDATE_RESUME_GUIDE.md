# How to Update Your Resume

Follow these simple steps every time you want to update your resume:

## Quick Steps:

1. **Replace the resume file:**
   ```bash
   # Copy your new resume to the public folder with the name 'resume.pdf'
   cp /path/to/your/new-resume.pdf public/resume.pdf
   ```

2. **Commit and push to GitHub:**
   ```bash
   git add public/resume.pdf
   git commit -m "Update resume"
   git push origin main
   ```

3. **Wait 2-5 minutes** for GitHub Actions to automatically rebuild and deploy

4. **Clear browser cache** or open in incognito mode to see the changes

## Important Notes:
- Always name your resume file `resume.pdf` in the public folder
- The website will automatically use whatever file is named `resume.pdf`
- GitHub Actions will handle the build and deployment automatically
- No need to run `npm run build` locally (unless you want to test first)

## Alternative: If you want to keep multiple resume versions:
1. Upload different versions to the `Resume` folder (e.g., `Resume/SDE_Resume_2025.pdf`)
2. Update the code in `src/components/Hero.tsx` (line 114) and `src/components/Navigation.tsx` (lines 61 & 109) to point to the specific file
3. Move the file to the public folder or update the href paths

## Troubleshooting:
- If changes don't appear, check GitHub Actions: https://github.com/KNeerajSai/Neeraj-Portfolio/actions
- Always clear browser cache or use incognito mode
- Make sure the file is named exactly `resume.pdf` (case-sensitive)