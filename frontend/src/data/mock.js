// Mock data for Ishan Gupta's Portfolio
// This file contains all the content data that will later be integrated with backend

export const personalInfo = {
  name: "Ishan Gupta",
  title: "Aspiring Machine Learning Engineer | Python & Web Developer",
  tagline: "BCA student building real-world projects using Python, Machine Learning, Data Analytics, and modern web technologies.",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "guptaishan506@gmail.com",
  phone: "+91 9910130335",
  github: "https://github.com/IshanGupta-Code",
  linkedin: "https://www.linkedin.com/in/ishangupta6470/",
  linktree: "https://linktr.ee/ishan6470",
  resumeUrl: "/Ishan_Gupta_Resume.pdf"
};

export const aboutData = {
  summary: "I'm a passionate BCA student at Institute of Technology and Science (ITS), affiliated with CCSU University, with a strong interest in Machine Learning, Data Analytics, and Software Development. I believe in learning by doing — building real-world projects that solve genuine problems.",
  highlights: [
    "Currently pursuing Bachelor of Computer Applications (2023-2026)",
    "Hands-on experience with ML models and data analysis pipelines",
    "Strong foundation in Python, SQL, and modern web technologies",
    "Certified in Data Analytics, SQL, and Business Intelligence tools"
  ]
};

export const skillsData = {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "HTML & CSS", level: 85 }
  ],
  "Data & ML": [
    { name: "NumPy", level: 85 },
    { name: "Pandas", level: 90 },
    { name: "Scikit-learn", level: 80 },
    { name: "Matplotlib", level: 85 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Analysis", level: 85 }
  ],
  "Web & Backend": [
    { name: "Flask", level: 75 },
    { name: "REST APIs", level: 70 }
  ],
  "Tools": [
    { name: "Git & GitHub", level: 85 },
    { name: "Power BI", level: 75 },
    { name: "VS Code", level: 90 },
    { name: "Jupyter Notebook", level: 90 }
  ],
  "Core Concepts": [
    { name: "DSA", level: 70 },
    { name: "OOPS", level: 80 },
    { name: "AI / ML Basics", level: 75 }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Boston House Pricing",
    problem: "Predicting house prices is crucial for real estate decisions. Manual estimation is time-consuming and often inaccurate.",
    solution: "Developed a Machine Learning model using Python to predict house prices based on the Boston Housing dataset.",
    features: [
      "Built and deployed a Flask web application for real-time predictions",
      "Interactive user interface for inputting property features",
      "Implemented data preprocessing and model training pipeline"
    ],
    techStack: ["Scikit-learn", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    outcome: "End-to-end ML project showcasing complete development pipeline",
    githubUrl: "https://github.com/IshanGupta-Code/Boston-House-Pricing",
    language: "Jupyter Notebook"
  },
  {
    id: 2,
    title: "Titanic Survival Prediction",
    problem: "Analyzing historical data to understand survival factors and build predictive models for classification problems.",
    solution: "Developed a Titanic survival prediction model using data cleaning, feature engineering, and preprocessing techniques.",
    features: [
      "Implemented K-Nearest Neighbors (KNN) classifier",
      "GridSearchCV for hyperparameter tuning",
      "Performance visualization with confusion matrix and heatmap"
    ],
    techStack: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    outcome: "Improved accuracy through optimized hyperparameter tuning",
    githubUrl: "https://github.com/IshanGupta-Code/KNN-Titanic-Survival",
    language: "Python"
  },
  {
    id: 3,
    title: "Student Performance Prediction",
    problem: "Educational institutions need data-driven insights to predict and improve student outcomes.",
    solution: "Developed a Linear Regression model to predict student exam scores based on weekly study hours.",
    features: [
      "Model evaluation using MAE, MSE, RMSE, and R² metrics",
      "Data visualization through histograms and scatter plots",
      "Regression line visualization for insights"
    ],
    techStack: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    outcome: "Achieved reliable performance insights for academic prediction",
    githubUrl: "https://github.com/IshanGupta-Code/Student-Performance-Prediction",
    language: "Python"
  },
  {
    id: 4,
    title: "NETRAX-AI",
    problem: "Traditional input methods limit accessibility and natural human-computer interaction.",
    solution: "Real-time body tracking and gesture control engine for AI assistants.",
    features: [
      "Body tracking implementation",
      "Gesture recognition system",
      "AI assistant integration capabilities"
    ],
    techStack: ["Python", "Computer Vision", "AI"],
    outcome: "Innovative approach to human-computer interaction",
    githubUrl: "https://github.com/IshanGupta-Code/NETRAX-AI",
    language: "Python"
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "SQL (Basic)",
    organization: "HackerRank",
    date: "June 2025",
    description: "Demonstrates ability to write queries, filters, joins, and basic database operations.",
    icon: "database",
    credentialUrl: "https://www.hackerrank.com/certificates"
  },
  {
    id: 2,
    title: "Power BI Micro Course",
    organization: "Learn More Pro / Skill Course",
    date: "September 2024",
    description: "7-day intensive course covering dashboards, data visualization, and business insights.",
    icon: "barChart",
    credentialUrl: null
  },
  {
    id: 3,
    title: "Excel Bootcamp",
    organization: "LetsUpgrade",
    date: "June 2024",
    description: "Practical Excel skills including formulas, data analysis, and reporting.",
    icon: "table",
    credentialUrl: null
  },
  {
    id: 4,
    title: "Google Sheets Bootcamp",
    organization: "LetsUpgrade (NSDC + GDG MAD)",
    date: "June 2024",
    description: "Spreadsheet automation, data handling, and productivity workflows.",
    icon: "sheet",
    credentialUrl: null
  },
  {
    id: 5,
    title: "Data Analytics Job Simulation",
    organization: "Deloitte Australia (Forage)",
    date: "2024",
    description: "Real-world exposure to data analysis, forensic technology, and business problem solving.",
    icon: "analytics",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates"
  },
  {
    id: 6,
    title: "AI Workshop",
    organization: "IIT Delhi (Techgyan Technologies)",
    date: "2024",
    description: "2-day intensive workshop on Artificial Intelligence concepts and applications.",
    icon: "brain",
    credentialUrl: null
  }
];

export const educationData = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Institute of Technology and Science (ITS)",
  affiliation: "CCSU University",
  duration: "July 2023 - Expected 2026",
  previousEducation: {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Swami Vivekanand Saraswati Vidhya Mandir",
    board: "CBSE Board",
    cgpa: "8.1/10",
    year: "2022-2023"
  }
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
