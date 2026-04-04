# justinbiron.github.io - Electrical Engineering Portfolio

A professional portfolio website showcasing electrical engineering projects to help attract internship opportunities.

## 📁 Project Structure

```
justinbiron.github.io/
├── index.html              # Main portfolio gallery page
├── styles.css              # Main styling for gallery
├── project-detail.css      # Styling for individual project pages
├── README.md               # This file
├── assets/                 # Storage for thumbnail and full-size images
│   ├── project-1-thumbnail.jpg
│   ├── project-1-full.jpg
│   ├── project-2-thumbnail.jpg
│   ├── project-2-full.jpg
│   └── ...
└── projects/               # Individual project pages
    ├── project-template.html
    ├── project-1.html
    ├── project-2.html
    ├── project-3.html
    └── project-4.html
```

## 🚀 Getting Started

### 1. **Update Your Information**

Edit the navigation links in `index.html` and all project pages:
- GitHub URL: Change `https://github.com/justinbiron` to your GitHub profile
- LinkedIn URL: Change `https://linkedin.com/in/justinbiron` to your LinkedIn profile
- Resume: Update the resume link or add a resume file to the repository

### 2. **Add Project Thumbnails**

Place your project thumbnail images (recommended size: **350x280px** or similar 4:3 ratio) in the `assets/` folder:
- `project-1-thumbnail.jpg`
- `project-2-thumbnail.jpg`
- etc.

Update the image paths in `index.html` cards to match your filenames.

### 3. **Customize Project Gallery**

Edit `index.html` to update each project card:
- Update the year (`project-year` class)
- Add project title
- Add project description
- Update linked project pages (currently: `projects/project-1.html`, etc.)

### 4. **Create Project Pages**

For each project, use the `projects/project-template.html` as a reference:
1. Fill in the project title and year
2. Add a featured project image (recommended: high-quality photo or schematic)
3. Add detailed sections:
   - **Overview**: What the project is about
   - **Challenge**: Problems you faced
   - **Solution**: How you solved them
   - **Technical Details**: Components, tools, and technologies used
   - **Results**: Outcomes and lessons learned
   - **Gallery**: Additional project images (optional)

### 5. **Add Full-Size Project Images**

Store full-size project images in the `assets/` folder:
- `project-1-full.jpg`
- `project-1-image-2.jpg`
- `project-2-full.jpg`
- etc.

## 📝 Example Project Structure

For a single project, you'd have:
```
assets/
├── project-1-thumbnail.jpg    # Small image for gallery (350x280px)
└── project-1-full.jpg         # Large featured image for project page

projects/
└── project-1.html             # Individual project page
```

## 🎨 Customization Tips

### Colors
Edit the CSS variables in `styles.css` (lines 8-16):
```css
:root {
    --primary-color: #0066cc;      /* Main blue color */
    --secondary-color: #004499;    /* Darker blue */
    --text-color: #333;             /* Dark text */
    --light-bg: #f8f9fa;            /* Light background */
    /* ... more colors ... */
}
```

### Fonts
The site uses system fonts by default. Change the `font-family` in `styles.css` to use custom fonts from Google Fonts or other sources.

### Layout
- The gallery is **responsive**: 1 column on mobile, 2 on tablets, 3 on desktop
- All pages have a **sticky header** that stays at the top while scrolling
- Images are **optimized** with hover effects and smooth transitions

## 📱 Features

✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **SEO Friendly** - Proper heading structure and meta tags
✅ **Fast Loading** - Optimized CSS with minimal dependencies
✅ **Accessible** - Semantic HTML with good contrast ratios
✅ **Professional** - Modern design with smooth interactions
✅ **Easy to Update** - Simple HTML structure for easy modifications

## 🔗 Hosting

This repository is designed to be hosted on GitHub Pages:
1. Ensure your repository is named `<username>.github.io`
2. Push your changes to the `main` branch
3. Your site will be live at `https://<username>.github.io`

## 💡 Tips for Internship Success

1. **High-Quality Images**: Use clear, well-lit photos of your projects
2. **Detailed Descriptions**: Explain the problem, your solution, and the impact
3. **Technical Depth**: Include specific components, tools, and techniques used
4. **Results & Metrics**: Show what you accomplished (performance gains, functionality, etc.)
5. **Keep It Updated**: Regularly add new projects to showcase your growth
6. **Mobile Friendly**: Test on your phone - many recruiters browse on mobile!

## 📧 Contact

Update the navigation links to direct recruiters to your:
- GitHub (code samples and projects)
- LinkedIn (professional profile)
- Resume (PDF file)
