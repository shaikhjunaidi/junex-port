# JUNEX — Cinematic Developer Portfolio

A cinematic, editorial, and responsive personal portfolio website engineered for **Shaikh Junaid** using React and Vite.

---

## 🌟 Visual Identity & Art Direction

- **Brand**: JUNEX
- **Design Philosophy**: Cinematic editorial, bold oversized typography, layered atmospheric lighting, and premium minimalism.
- **Color Palette**:
  - Obsidian (`#090909`)
  - Deep Burgundy (`#3D100D`)
  - Dark Ember (`#64180F`)
  - Burnt Orange (`#D94716`)
  - Vivid Orange (`#F45A27`)
  - Warm Highlight (`#FF8A4C`)
- **Typography**:
  - Expressive Display: **Space Grotesk**
  - Crisp Body: **Inter**
  - Code & Badges: **JetBrains Mono**
- **Motion**: Framer Motion entrance transitions, staggered reveals, smooth category filtering, and CSS continuous ticker loop.

---

## 🛠️ Technology Stack

- **Core**: React 19, Vite 8, JavaScript (JSX), Semantic HTML5
- **Styling**: Vanilla Modern CSS3 with CSS Custom Properties design system
- **Motion**: `framer-motion` for entrance & layout animations, CSS keyframes for ambient backlight
- **Icons**: `lucide-react` & bespoke SVG brand icons
- **Forms**: AJAX Formspree submission with real-time feedback
- **Resume Export**: High-fidelity `@media print` A4 layout with instant "Print / Save as PDF"

---

## 📂 Project Architecture

```
junex/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── assets/                 # Reused verified original WebP assets
│   │   ├── meriphoto.webp      # Authentic portrait
│   │   ├── car.webp            # CareerPathAI screenshot
│   │   ├── crop-project.webp   # Crop Recommendation screenshot
│   │   ├── res.webp            # CVForge screenshot
│   │   ├── cvforge-project.webp
│   │   ├── portfolio-project.webp
│   │   └── favicon.webp
│   └── favicon.webp
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header with status badge & mobile drawer
│   │   ├── Hero.jsx            # Cinematic opening with oversized typography & portrait
│   │   ├── Marquee.jsx         # Continuous horizontal animated ticker
│   │   ├── About.jsx           # Editorial biography and core focus areas
│   │   ├── Projects.jsx        # Project gallery with animated layout transitions
│   │   ├── ProjectCard.jsx     # Responsive screenshot cards with feature badges
│   │   ├── ProjectFilters.jsx  # Category filter tabs
│   │   ├── Skills.jsx          # Grouped technical competencies
│   │   ├── Experience.jsx      # Education, simulation, certifications & honors
│   │   ├── ResumeModal.jsx     # Interactive A4 modal with print-to-PDF
│   │   ├── Contact.jsx         # Formspree contact form & direct channels
│   │   ├── Footer.jsx          # Brand footer with back-to-top
│   │   └── SocialIcons.jsx     # Crisp vector social icons
│   ├── data/
│   │   ├── portfolio.js        # Structured personal, education & skills data
│   │   └── projects.js         # Structured project metadata
│   ├── styles/
│   │   ├── globals.css         # CSS variables, typography, reset & print rules
│   │   └── animations.css      # Ambient glow, marquee & outline text keyframes
│   ├── App.jsx                 # Main application view
│   └── main.jsx                # Application root entry
├── index.html                  # SEO metadata, Open Graph & Google Fonts
├── package.json
├── vite.config.js              # Vite base-path configuration for GitHub Pages
└── README.md
```

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will run locally at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

The project is preconfigured to deploy to:
- **Repository**: `https://github.com/shaikhjunaidi/junex-port`
- **Live URL**: `https://shaikhjunaidi.github.io/junex-port/`

### Automated Deployment (GitHub Actions)
1. Initialize Git in this directory (when ready):
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of JUNEX cinematic portfolio"
   ```
2. Link and push to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/shaikhjunaidi/junex-port.git
   git push -u origin main
   ```
3. On GitHub, navigate to **Settings > Pages > Build and deployment**, and set **Source** to **GitHub Actions**.
4. The included workflow `.github/workflows/deploy.yml` will automatically build and publish the site.

---

## 🔒 Source Integrity & Verification

1. **Original Portfolio**: The directory `C:\Users\Junaid\Desktop\portfolio` was strictly inspected in read-only mode and remains **100% untouched**.
2. **Authentic Assets**: Shaikh Junaid's actual portrait (`meriphoto.webp`) and all 4 project screenshots were copied directly without AI modification or placeholder substitutions.
3. **Factual Content**: All educational credentials (BCA @ Sharnbasva University), certifications, competition awards (Mind Marathon Winner), and contact information are preserved with zero fabricated metrics.
