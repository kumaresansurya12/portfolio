# Personal Portfolio Website - Suryakumar K

Welcome to your new personal portfolio website! This project is built with HTML, CSS, and JavaScript, designed to be professional, responsive, and easy to customize.

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── README.md           # Instructions
└── assets/
    ├── css/
    │   └── style.css   # Main stylesheet (Dark Engineering Theme)
    ├── js/
    │   └── script.js   # Interactivity (Scroll animations, Mobile menu)
    ├── images/         # Place your images here
    └── documents/      # Place your PDF files here
```

## Setup Instructions

### 1. Add Your Files
To make the website fully functional, you need to add your personal files to the `assets` folders:

- **Profile Picture**: 
  - Place your photo in `assets/images/` and name it `profile.jpg`.
  - Alternatively, update `index.html` line ~83 to point to your image filename.

- **Resume**:
  - Place your resume PDF in `assets/documents/` and name it `resume.pdf`.

- **Certificates**:
  - Place your certificate PDFs in `assets/documents/` and name them:
    - `cswa_cert.pdf` (for CSWA)
    - `additive_cert.pdf` (for Additive Manufacturing)
  - If you have different filenames, update the `href` attributes in the Certifications section of `index.html`.

### 2. Customization
- **Text Content**: Open `index.html` in any text editor to update your bio, experience details, or add new projects.
- **Colors**: Open `assets/css/style.css` and modify the variables at the top (`:root`) to change the color scheme.

### 3. Hosting on GitHub Pages
1. Create a new repository on GitHub (e.g., `my-portfolio`).
2. Upload all these files and folders to the repository.
3. Go to **Settings** > **Pages**.
4. Under **Source**, select `main` branch and `/ (root)` folder.
5. Click **Save**. Your site will be live at `https://yourusername.github.io/my-portfolio/`.

## Features
- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Dark Mode**: Professional engineering aesthetics.
- **Animations**: Smooth fade-in effects on scroll.
- **Interactive**: Mobile-friendly navigation menu.
