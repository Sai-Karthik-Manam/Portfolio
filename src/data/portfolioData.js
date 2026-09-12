export const NAV_LINKS = ["about","skills","experience","projects","education","certifications","achievements","resume","contact"];

export const SKILLS = [
  { category: "Programming Languages", items: ["Python", "SQL"] },
  { category: "Frameworks", items: [".NET Core MVC", "Entity Framework", "ADO.NET", "React", "Bootstrap"] },
  { category: "Web Technologies", items: ["HTML5", "CSS", "JavaScript", "jQuery", "AJAX"] },
  { category: "Databases", items: ["MySQL", "SQL Server (SSMS)"] },
  { category: "Python Libraries & Tech", items: ["NLTK", "MediaPipe", "ONNX", "rembg"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "Postman"] },
];

export const EXPERIENCE = [
  {
    role: "Associate Software Engineer Trainee",
    company: "APTOnline",
    duration: "Sept 2026 - Present",
    points: [
      "Develop and maintain web application features using .NET Core MVC, ADO.NET, and Entity Framework, working across the full stack from database (SSMS) to UI.",
      "Build and enhance front-end functionality using JavaScript, jQuery, AJAX, React, and Bootstrap for responsive, user-facing screens.",
      "Identify, troubleshoot, and resolve real-world application issues, collaborating with the team to deliver reliable, production-ready solutions."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "APTOnline",
    duration: "May 2026 - Aug 2026",
    points: [
      "Assisted in developing and testing features within a .NET Core MVC application, gaining hands-on exposure to enterprise-level development practices.",
      "Worked with SQL Server (SSMS) for querying and supporting backend data operations.",
      "Converted to a full-time Associate Software Engineer Trainee role at the end of the internship based on performance."
    ],
  }
];

export const PROJECTS = [
  {
    title: "Income Expense Tracker",
    tech: "React, Node.js, Express, MongoDB, Tailwind CSS",
    desc: "A full-stack web application to track daily income and expenses. Features intuitive dashboard visualizations and secure user authentication.",
    github: "https://github.com/Sai-Karthik-Manam/Income-Expense-Tracker",
    live: "",
    emoji: "💰",
  },
  {
    title: "Citizen Service Portal",
    tech: "ASP.NET MVC, C#, .NET, SQL Server, Dapper, Bootstrap, jQuery, JavaScript",
    desc: "Developed and enhanced a web-based Citizen Service Portal for online citizen registration, service requests, document uploads, and application tracking with role-based authentication.",
    github: "", 
    live: "",
    emoji: "🏛️",
  },
  {
    title: "YouTube Transcript Summarizer",
    tech: "Python, NLTK, YouTube API",
    desc: "Summarizes YouTube video transcripts using NLP and the YouTube Data API.",
    github: "https://github.com/Sai-Karthik-Manam/YouTube_Transcript_Summarizer",
    live: "https://you-tube-transcript-summarizer-xi.vercel.app/",
    emoji: "🎬",
  },
  {
    title: "Breast Cancer Prediction",
    tech: "Python, Flask, Scikit-learn, Pandas, Joblib, HTML, CSS",
    desc: "ML-powered web app for early breast cancer detection using clinical data and a Random Forest model, with real-time and batch input support.",
    github: "https://github.com/Sai-Karthik-Manam/Breast_Cancer_prediction",
    emoji: "🧬",
  },
  {
    title: "Real-Time Speech-to-Text",
    tech: "Python, SpeechRecognition, pyttsx3",
    desc: "Live speech-to-text with offline TTS feedback using Google's Speech API.",
    github: "https://github.com/Sai-Karthik-Manam/Speech-to-Text-Recognition",
    emoji: "🎙️",
  },
  {
    title: "AI-Based Augmented Reality Smart Shopping Assistant",
    tech: "Django, Python, MediaPipe, JavaScript, HTML, CSS, SQLite, ONNX, rembg",
    desc: "A real-time AR virtual try-on system using MediaPipe Pose detection.",
    github: "https://github.com/Sai-Karthik-Manam/Live-Lens",
    emoji: "🛍️",
  },
];

export const EDUCATION = [
  { degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering", school: "Sir C. R. Reddy College of Engineering", year: "2022 – 2026", cgpa: "8.13" },
  { degree: "Intermediate (MPC)", school: "Sri Prakash Jr. College", year: "2020 – 2022" },
];

export const CERTIFICATIONS = [
  { title: "Python Programming Certification", issuer: "HackerRank" },
  { title: "SQL Basics Certification", issuer: "HackerRank" },
  { title: "E-Commerce Certification", issuer: "Flipkart Grid (2024)" },
];

export const ACHIEVEMENTS = [
  { title: "2nd Place — College Project Expo 2023", sub: "YouTube Transcript Summarizer" },
  { title: "3rd Place — JNTUK Project Expo 2023", sub: "Enhanced UI & functionality of Summarizer" },
];

export const LEADERSHIP = [
  { title: "Student Coordinator — Celestra2k24", sub: "Led planning and cross-team collaboration" },
  { title: "Event Coordinator — Celestra2k25", sub: "Oversaw execution and timelines" },
];
