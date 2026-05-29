export const personal = {
  name: "Nikita Mittal",
  tagline: "AI Enthusiast",
  headline: "Data Scientist & AI Engineer",
  bio: "I am a Data Scientist with a deep interest in machine learning systems. I work with AI agents to explore and understand intelligent environments, and I'm actively seeking hands-on experience in real-world AI agent building projects.",
  location: "Haryana, India",
  email: "mittalnikita279@gmail.com",
  linkedin: "https://www.linkedin.com/in/nikitamittal-data/",
  github: "https://github.com/mittalnikita",
};

export const skills = {
  technical: [
    { name: "Python", level: 90 },
    { name: "TensorFlow", level: 75 },
    { name: "PyTorch", level: 70 },
    { name: "Scikit-Learn", level: 85 },
    { name: "Pandas / NumPy", level: 88 },
    { name: "LLMs & RAG", level: 78 },
    { name: "Vector Databases", level: 72 },
    { name: "SQL", level: 80 },
    { name: "React.js", level: 70 },
    { name: "C++", level: 65 },
  ],
  tools: [
    "FastAPI", "Docker", "Hugging Face", "AWS", "GCP",
    "Jupyter", "VS Code", "TypeScript", "API Integration",
  ],
  domains: [
    "Federated Learning", "Time-Series Forecasting", "Recommender Systems",
    "Retrieval Augmented Generation", "Conversational AI", "Data Pipelines",
  ],
};

export const experience = [
  {
    title: "Research Intern",
    company: "Research Organization",
    period: "January 2026 – May 2026",
    bullets: [
      "Built a standardized federated learning framework for decentralized time-series forecasting across Energy, Finance, and Meteorology domains.",
      "Benchmarked MLP, LSTM, and GRU models with FedAvg and FedProx — GRUs achieved near-centralized accuracy while reducing communication costs.",
      "Evaluated the impact of Non-IID data splits and utilized FedProx's proximal term to prevent local model drift across heterogeneous client distributions.",
    ],
  },
  {
    title: "Applied Machine Learning Intern",
    company: "Central University of Haryana",
    period: "September 2025 – November 2025",
    advisor: "Dr. Vipin Kumar",
    bullets: [
      "Designed and implemented an end-to-end time-series ML pipeline for financial scenario simulation and analytics.",
      "Built privacy-aware training workflows using federated learning enabling decentralized experimentation on sensitive datasets.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "NIT Kurukshetra",
    period: "June 2025 – August 2025",
    bullets: [
      "Built scalable SQL-based ingestion and preprocessing pipelines using DuckDB.",
      "Implemented automated data validation, cleaning, and transformation workflows.",
      "Benchmarked embedding-based retrieval models using similarity metrics.",
    ],
  },
];

export const projects = [
  {
    name: "Conversational Assessment Recommendation System",
    description:
      "AI-powered conversational recommendation engine for SHL assessments. Features conversational AI, retrieval orchestration, recruiter-style responses, conversational refinement, and grounded explainability.",
    tech: ["Python", "FastAPI", "RAG", "LLM", "Docker", "NumPy", "Pandas", "Scikit-learn"],
    github: "https://github.com/mittalnikita/shl-conversational-recommender",
    demo: "https://nikitamittal123-shl-conversational-recommender.hf.space/",
    outcome: "Modular agentic architecture with a SAUA model (System-Active, User-Active).",
    featured: true,
    tag: "AI / RAG",
  },
  {
    name: "FedDATS – Federated Learning Algorithm",
    description:
      "Proposing a novel federated learning algorithm maintaining a trade-off between communication efficiency and model performance for Non-IID time-series datasets.",
    tech: ["Python", "Machine Learning", "Statistics", "Federated Learning", "Research"],
    github: "https://github.com/mittalnikita/Federated-Learning",
    demo: null,
    outcome: "Ongoing research — benchmarking communication-efficient aggregation strategies.",
    featured: true,
    tag: "Research",
  },
  {
    name: "Crossdomain Recommender System",
    description:
      "Cross-domain recommendation system linking nutrition and yoga using disease-specific embeddings. Generated synthetic session data with multiple LLMs (DistilGPT, LLaMA, Nous Hermes, Mistral Instruct).",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Embeddings", "Contrastive Learning", "LLMs"],
    github: "https://github.com/Kshitizsikriwal/crossdomain-recommender",
    demo: null,
    outcome: "Evaluated via similarity metrics and mock user sessions across health domains.",
    featured: true,
    tag: "ML / LLMs",
  },
  {
    name: "VideoNest",
    description:
      "A YouTube-powered video browsing application built with React.js and TailwindCSS. Integrates the YouTube API for dynamic, search-driven video fetching.",
    tech: ["React.js", "TailwindCSS", "YouTube API"],
    github: "https://github.com/mittalnikita/VideoNest",
    demo: "https://667ebe3365c13619421cd257--sparkly-cupcake-8ba4d9.netlify.app/",
    outcome: "Functional video search and browsing experience with responsive UI.",
    featured: false,
    tag: "Frontend",
  },
];

export const certifications = [
  {
    title: "IIT Asteroid Venture – NSSC Competition",
    org: "IIT Kharagpur",
    detail: "Studied and visualized asteroid mineral compositions and proposed resource extraction methods.",
    position: "3rd Position",
    icon: "🏆",
  },
  {
    title: "IWMI Innovation Challenge – Circular Bioeconomy",
    org: "IWMI",
    detail: "Developed an application for agricultural waste collection, directly linked to end customers.",
    position: "4th Position",
    icon: "🌱",
  },
  {
    title: "Smart India Hackathon",
    org: "Government of India",
    detail: "National-level hackathon participation certificate.",
    position: "Participant",
    icon: "🇮🇳",
  },
  {
    title: "Google JAM Study – AI Exploration",
    org: "Google",
    detail: "Explored AI concepts and applications through Google's structured study program.",
    position: "Certificate",
    icon: "🤖",
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Central University of Haryana",
  period: "2022 – 2026",
};
