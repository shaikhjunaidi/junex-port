// Helper to resolve asset URLs with Vite base URL support
const baseUrl = import.meta.env.BASE_URL;
const asset = (filename) => `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}assets/${filename}`;

export const PROJECT_CATEGORIES = [
  'All Projects',
  'Django & Python',
  'Web Development',
];

export const PROJECTS = [
  {
    id: 'careerpath-ai',
    title: 'CareerPathAI',
    subtitle: 'AI Career Counseling & Roadmap Recommendation',
    category: 'Django & Python',
    image: asset('car.webp'),
    shortDescription:
      'An AI-powered career development platform that analyzes user profiles, identifies skill gaps, calculates career readiness scores, and generates personalized learning roadmaps.',
    fullDescription:
      'CareerPathAI empowers students and professionals by providing AI-driven career guidance. By leveraging Groq API and Llama-3 models, it performs in-depth resume parsing and skill-gap analysis, generates actionable multi-stage roadmaps, and features integrated CV building and secure Google OAuth authentication.',
    features: [
      'AI Resume Analysis',
      'Skill-Gap Detection',
      'Personalized Learning Roadmaps',
      'Career Readiness Score',
      'Integrated CV Builder & PDF Export',
      'Google OAuth Authentication',
    ],
    technologies: [
      'Python',
      'Django',
      'Groq API',
      'Llama-3',
      'PostgreSQL',
      'MySQL',
      'Alpine.js',
      'Chart.js',
      'Bootstrap',
    ],
    repositoryUrl: 'https://github.com/shaikhjunaidi/CareerPathAI',
    liveDemoUrl: null, // Verified: No live demo claimed in original source
    featured: true,
    year: '2026',
  },
  {
    id: 'crop-recommendation',
    title: 'Crop Recommendation System',
    subtitle: 'Intelligent Agricultural ML Application',
    category: 'Django & Python',
    image: asset('crop-project.webp'),
    shortDescription:
      'A machine learning-powered web application that recommends optimal crops based on real-time soil nutrients and environmental parameters.',
    fullDescription:
      'Developed to assist farmers and agricultural planners, this application ingests crucial environmental inputs (Nitrogen, Phosphorus, Potassium, temperature, humidity, soil pH, and rainfall) and executes trained scikit-learn models within a Django backend to deliver accurate crop recommendations via an intuitive dashboard.',
    features: [
      'Machine Learning Prediction Engine',
      'Multi-Parameter Soil & Climate Analysis (N, P, K, pH, rainfall)',
      'Responsive Farmer Dashboard',
      'Secure User Authentication',
      'Clean Data Visualization',
    ],
    technologies: [
      'Python',
      'Django',
      'scikit-learn',
      'SQLite / PostgreSQL',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
    repositoryUrl: 'https://github.com/shaikhjunaidi/crop-recommendation-system',
    liveDemoUrl: null, // Verified: No live demo claimed in original source
    featured: true,
    year: '2026',
  },
  {
    id: 'cvforge',
    title: 'CVForge',
    subtitle: 'Professional Interactive Resume Builder',
    category: 'Web Development',
    image: asset('res.webp'),
    secondaryImage: asset('cvforge-project.webp'),
    shortDescription:
      'A sleek browser-based resume builder with editable form fields, synchronized real-time preview, professional styling, and instant PDF generation.',
    fullDescription:
      'CVForge simplifies the resume creation process with modern reactive components. Users can enter comprehensive profile details, education, work experience, projects, skills, and social links, instantly previewing the formatted document with pixel-perfect print and PDF export capabilities.',
    features: [
      'Real-Time Synchronized Preview',
      'High-Fidelity PDF & Print Export',
      'Comprehensive Multi-Section Form',
      'Social Profile & Contact Linking',
      'Responsive Browser-Based UI',
    ],
    technologies: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'PDF Generation',
      'Vercel',
    ],
    repositoryUrl: null, // Verified: No repo URL documented in original source (never fabricated)
    liveDemoUrl: 'https://cvforge-sand.vercel.app/',
    featured: true,
    year: '2026',
  },
  {
    id: 'portfolio-v1',
    title: 'Personal Developer Portfolio',
    subtitle: 'Interactive Glassmorphism Showcase',
    category: 'Web Development',
    image: asset('portfolio-project.webp'),
    shortDescription:
      'The original personal developer portfolio featuring a custom glassmorphism design system, dark/light theme switching, particles interactivity, and Formspree contact handling.',
    fullDescription:
      'Crafted to present skills and achievements with rich visual aesthetics, including particle canvas effects, typing animations, scroll-triggered reveals, and an AJAX-connected contact form.',
    features: [
      'Custom Glassmorphism UI',
      'Dark / Light Theme Persistence',
      'Particles.js Interactive Canvas',
      'Typed.js Dynamic Headlines',
      'AJAX Formspree Contact Integration',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'Bootstrap 5',
      'JavaScript',
      'jQuery',
      'Particles.js',
      'AOS',
    ],
    repositoryUrl: 'https://github.com/shaikhjunaidi/portfolio',
    liveDemoUrl: 'https://shaikhjunaidi.github.io/portfolio/',
    featured: false,
    year: '2026',
  },
];
