const baseUrl = import.meta.env.BASE_URL;
const asset = (filename) => `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}assets/${filename}`;

export const PORTFOLIO = {
  personal: {
    name: 'Shaikh Junaid',
    brand: 'JUNEX',
    tagline: 'Python Web Developer · Django Enthusiast · BCA Student',
    headlineWord1: 'SHAIKH',
    headlineWord2: 'JUNAID.',
    location: 'Karnataka, India',
    status: 'Available for internships & collaborations',
    avatar: asset('meriphoto.webp'),
    bio: [
      'I am a Computer Applications student passionate about Python programming and backend web engineering. I specialize in building responsive, secure, and user-centric web applications powered by Python and Django.',
      'Alongside web development, I actively strengthen my algorithmic problem-solving foundations through Data Structures and Algorithms using Python. I believe in writing clean, scalable code and turning real-world problem statements into resilient software solutions.',
    ],
    objective:
      'To build a successful career as a Python Web Developer while mastering Data Structures and Algorithms using Python. Aiming to contribute to innovative software products by writing efficient, scalable, and maintainable code.',
  },

  contact: {
    email: 'me.junaid.in@gmail.com',
    github: 'https://github.com/shaikhjunaidi',
    linkedin: 'https://www.linkedin.com/in/shaikh-junaid-a794a4405/',
    formspreeEndpoint: 'https://formspree.io/f/xvzeykvj',
  },

  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sharnbasva University',
      location: 'Kalaburagi, Karnataka',
      period: '2024 – 2027 (Expected)',
      coursework: [
        'Python Programming',
        'Data Structures & Algorithms',
        'Database Management Systems (DBMS)',
        'Web Technologies',
        'Object-Oriented Programming',
      ],
    },
  ],

  experience: [
    {
      role: 'Data Analytics Job Simulation',
      company: 'Tata Group (Tata iQ) via Forage',
      period: 'July 2026',
      note: 'Verified simulation record from original portfolio source.',
      points: [
        'Completed an intensive job simulation involving AI-powered data analytics and strategic advisory for the Financial Services team at Tata iQ.',
        'Conducted exploratory data analysis (EDA) using GenAI tools to evaluate data quality, isolate risk indicators, and structure insights for predictive modeling.',
        'Proposed and evaluated a predictive framework to assess customer delinquency risk, leveraging GenAI for model logic and scoring criteria.',
        'Architected an AI-driven collections strategy incorporating ethical AI principles, compliance standards, and scalable operational frameworks.',
      ],
    },
  ],

  certifications: [
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      description: 'Comprehensive certification in foundational Python programming, data types, logic, and functions.',
    },
    {
      title: 'Business Analytics with Excel',
      issuer: 'Microsoft × Simplilearn',
      description: 'Applied statistical analysis, data modeling, dashboards, and analytical decision-making.',
    },
  ],

  achievements: [
    {
      title: 'Mind Marathon Winner',
      organization: 'College Technical Fest',
      description: 'First place honors in technical problem solving, logical aptitude, and rapid critical reasoning.',
    },
    {
      title: 'Active Open Source & AI Explorer',
      organization: 'Self-Directed Engineering',
      description: 'Implemented machine learning models in Django and built AI-integrated career counseling platforms.',
    },
  ],

  skills: {
    'Programming Languages': [
      { name: 'Python', level: 'Core' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'Java', level: 'Academic' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
    ],
    'Frameworks & Backend': [
      { name: 'Django', level: 'Core' },
      { name: 'REST APIs', level: 'Core' },
      { name: 'React', level: 'Modern Web' },
      { name: 'Alpine.js', level: 'Lightweight UI' },
      { name: 'Bootstrap 5', level: 'Responsive UI' },
    ],
    'Databases & Storage': [
      { name: 'PostgreSQL', level: 'Relational' },
      { name: 'MySQL', level: 'Relational' },
      { name: 'SQLite', level: 'Development' },
    ],
    'Tools & Deployment': [
      { name: 'Git', level: 'Version Control' },
      { name: 'GitHub', level: 'Collaboration' },
      { name: 'VS Code', level: 'IDE' },
      { name: 'Postman', level: 'API Testing' },
      { name: 'Vercel', level: 'Deployment' },
      { name: 'GitHub Pages', level: 'Deployment' },
    ],
    'Core Engineering Concepts': [
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'Data Structures & Algorithms (DSA)' },
      { name: 'Model-View-Template (MVT/MVC)' },
      { name: 'Responsive Web Design' },
      { name: 'Software Development Life Cycle (SDLC)' },
      { name: 'Database Normalization' },
    ],
  },
};
