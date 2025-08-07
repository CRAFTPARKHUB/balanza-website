# Balanza Website

This repository contains the Balanza website exported from Framer, ready for deployment on GitHub Pages or Netlify.

## 🚀 GitHub Pages Deployment (Recommended)

### Automatic Deployment with GitHub Actions
1. Push your code to a GitHub repository (see instructions below)
2. Go to your repository Settings → Pages
3. Set Source to "GitHub Actions"
4. The site will automatically deploy when you push changes to the main branch
5. Your site will be available at: `https://yourusername.github.io/repository-name`

### Manual GitHub Setup
```bash
# Add all files to git
git add .
git commit -m "Initial commit - Balanza website"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## 🚀 Alternative: Deploy to Netlify

### Option 1: Drag and Drop (Simplest)
1. Compress the entire project folder into a ZIP file
2. Go to [Netlify](https://www.netlify.com/)
3. Sign up or log in to your account
4. Drag and drop the ZIP file onto the Netlify dashboard
5. Your site will be deployed automatically!

### Option 2: Git Repository Deployment (Recommended)
1. Create a new repository on GitHub/GitLab/Bitbucket
2. Push this code to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Balanza website"
   git branch -M main
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```
3. In Netlify, click "New site from Git"
4. Connect your Git provider and select your repository
5. Deploy settings:
   - **Build command:** Leave empty (static site)
   - **Publish directory:** `.` (root directory)
6. Click "Deploy site"

## 📁 Project Structure

```
Balanza SK Web/
├── extraordinary-acknowledge-696942.framer.app/
│   └── sk/
│       └── index.html                 # Main Slovak website
├── framerusercontent.com/             # Framer assets and modules
├── app.framerstatic.com/             # JavaScript modules
├── fonts.gstatic.com/                # Google Fonts
├── api.framer.com/                   # Framer API assets
├── netlify.toml                      # Netlify configuration
├── index.html                        # Root redirect to Slovak version
└── README.md                         # This file
```

## ⚙️ Configuration

The `netlify.toml` file includes:
- **Redirects:** Root `/` redirects to Slovak version
- **Headers:** Security and performance optimizations
- **Caching:** Long-term caching for static assets
- **SPA Support:** Fallback routing for single-page application behavior

## 🌐 Domain Configuration

After deployment:
1. Go to your Netlify site dashboard
2. Click "Domain settings"
3. Add your custom domain
4. Configure DNS settings as instructed by Netlify

## 🔧 Troubleshooting

### Common Issues:
1. **404 errors:** Check that the `netlify.toml` redirects are properly configured
2. **Assets not loading:** Ensure all asset folders are included in the deployment
3. **Fonts not displaying:** Verify that Google Fonts are accessible

### Performance Optimization:
- All static assets (JS, CSS, fonts, images) are cached for 1 year
- Security headers are applied for better protection
- The site is optimized for fast loading

## 📱 Features

- **Responsive Design:** Works on all devices
- **Slovak Localization:** Primary language is Slovak
- **Performance Optimized:** Fast loading with proper caching
- **SEO Ready:** Meta tags and structured data included
- **Security Headers:** Enhanced security configuration

## 🆘 Support

If you encounter any issues during deployment:
1. Check the Netlify build logs for error messages
2. Verify all files are properly uploaded
3. Ensure the `netlify.toml` configuration is correct
4. Contact Netlify support if needed

## 🔄 Updates

To update the website:
1. Export the new version from Framer
2. Replace the contents while keeping `netlify.toml`, `index.html`, and this README
3. If using Git deployment, push the changes to your repository
4. Netlify will automatically redeploy

---

**Website:** Balanza - Wellness & Spa Platform  
**Technology:** Framer Export + Netlify  
**Language:** Slovak (sk-SK)
