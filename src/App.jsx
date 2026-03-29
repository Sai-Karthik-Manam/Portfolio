import { useState, useEffect, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["about","skills","projects","education","experience","certifications","achievements","resume","contact"];

const SKILLS = ["Python","Flask","HTML","CSS","JavaScript","Git","GitHub","MySQL","MongoDB","Data Analytics","Machine Learning"];

const PROJECTS = [
  {
    title: "YouTube Transcript Summarizer",
    tech: "Python, NLTK, YouTube API",
    desc: "Summarizes YouTube video transcripts using NLP and the YouTube Data API.",
    github: "https://github.com/Sai-Karthik-Manam/YouTube_Transcript_Summarizer",
    live: "https://youtube-transcript-summarizer-i4qj.onrender.com/",
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
    title: "TO BE DONE — Task Manager",
    tech: "Flask",
    desc: "Web application to note daily reminders and tasks efficiently.",
    github: "https://github.com/Sai-Karthik-Manam/TODO-App",
    emoji: "✅",
  },
];

const EDUCATION = [
  { degree: "B.Tech in Computer Science", school: "Sir C R Reddy College of Engineering, Eluru", year: "2022 – 2026" },
  { degree: "Intermediate (MPC)", school: "Sri Prakash Junior College, Payakaraopeta", year: "2020 – 2022" },
  { degree: "SSC", school: "Madhuri Vidyalaya EM High School", year: "2020" },
];

const EXPERIENCE = [
  {
    role: "Artificial Intelligence Intern",
    company: "SkillDzire Technologies Pvt. Ltd",
    duration: "May – June 2024",
    points: [
      "Completed a 6-week internship on core AI concepts — Machine Learning, Deep Learning, Neural Networks.",
      "Developed algorithms like Linear Regression, CNN, RNN, and A* Search.",
      "Practiced optimization, backpropagation, and reinforcement learning.",
      "Built a Tic-Tac-Toe game using Python and Tkinter, applying AI logic and GUI development.",
    ],
    cert: "Internship_Certificates/SkillDzire.jpg",
  },
  {
    role: "Python Development Intern",
    company: "HexaInd",
    duration: "May – July 2025",
    points: [
      "Built a secure courier tracking system using Django, Spring Boot, PostgreSQL, and MongoDB.",
      "Implemented AES encryption, JWT, OAuth 2.0, and TLS/SSL for security.",
      "Conducted vulnerability and penetration testing with Burp Suite and OWASP ZAP.",
    ],
    cert: "Internship_Certificates/HexaInd.jpg",
  },
  {
    role: "Web Development Intern",
    company: "TechSonIx Solutions",
    duration: "May 2025",
    points: [
      "Built a responsive portfolio website using HTML, CSS, and JavaScript.",
      "Used Git/GitHub for version control.",
      "Improved frontend, debugging, and UI/UX design skills.",
    ],
    cert: "Internship_Certificates/Techsonix.jpg",
  },
  {
    role: "Data Analytics Workshop",
    company: "DataValley",
    duration: "1-Week Intensive (2025)",
    points: [
      "Focused on data analysis and visualization using Python, Pandas, Matplotlib, and Excel.",
      "Worked on EDA and data cleaning with real-world datasets.",
      "Gained hands-on experience in statistical analysis and creating insightful visualizations.",
    ],
    cert: "Internship_Certificates/DataValley_Workshop_Certificate.jpg",
  },
];

const CERTIFICATIONS = [
  { title: "Certified in Python Programming", issuer: "HackerRank", cert: "certifications/Python(Basic)_HackerRank.png" },
  { title: "Certified in Python Programming", issuer: "Aajhub", cert: "certifications/Aajhub_python.png" },
  { title: "Certified in Web Development", issuer: "Oneroadmap", cert: "certifications/Full_Stack_Oneroadmap.png" },
  { title: "Certified in Generative AI & ChatGPT", issuer: "Geeks for Geeks", cert: "certifications/Gen_AI.pdf" },
];

const ACHIEVEMENTS = [
  { title: "2nd Place — College Project Expo 2023", sub: "YouTube Transcript Summarizer" },
  { title: "3rd Place — JNTUK University Project Expo 2023", sub: "Enhanced UI & functionality of Summarizer" },
];

const HACKATHONS = [
  { title: "National-Level Hackathon (Web Dev)", sub: "Developed E-Learning Platform with Flask & MongoDB" },
  { title: "ByteVerse 7.0 — NIT Patna", sub: "Participated in a 24-hour innovation challenge", cert: "certifications/ByteVerse_7.0_Hackathon.pdf" },
  { title: "Code for Bharat Season 2", sub: "National-Level Hackathon participant", cert: "certifications/CFB_season2.png" },
  { title: "Adobe Hackathon 2025", sub: "Explored creative software dev solutions", cert: "certifications/Adobe_Hackthon.pdf" },
  { title: "Google Cloud Agentic AI Day 2025", sub: "Hands-on AI and cloud-native challenges", cert: "certifications/Agentic_AI_Hackthon.png" },
];

const PARTICIPATION = [
  { title: "Present You Competition, JNTUK 2025", sub: "Proposed Remote Patient Monitoring Tech" },
  { title: "Various College Tech Fests", sub: "Showcased Summarizer & received feedback" },
  { title: "Pitch On Pitch: Innovation Challenge 2024", sub: "Certificate of Participation" },
];

const LEADERSHIP = [
  { title: "Event Coordinator — Celestra2k25", sub: "Oversaw execution and timelines" },
  { title: "Student Coordinator — Celestra2k24", sub: "Led planning and cross-team collaboration" },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1, ...options });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── Sub-components ──────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function Tag({ label }) {
  return <span className="tag">{label}</span>;
}

function SectionTitle({ children }) {
  return (
    <div className="section-title-wrap">
      <h2 className="section-title">{children}</h2>
      <div className="section-line" />
    </div>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────
function Header({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 100 && y > lastY.current);
      lastY.current = y <= 0 ? 0 : y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? "hdr--scrolled" : ""} ${hidden ? "hdr--hidden" : ""}`}>
      <div className="hdr__brand">
        <span className="hdr__dot" />
        <span className="hdr__name">Manam Sai Karthik</span>
      </div>
      <button className="hdr__burger" onClick={() => setMenuOpen(o => !o)} aria-label="menu">
        <span /><span /><span />
      </button>
      <nav className={`hdr__nav ${menuOpen ? "hdr__nav--open" : ""}`}>
        {NAV_LINKS.map(id => (
          <a key={id} href={`#${id}`} className={`hdr__link ${active === id ? "hdr__link--active" : ""}`}
            onClick={() => setMenuOpen(false)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <FadeIn delay={0.1}>
          <div className="hero__avatar-ring">
            <img src="Personal_Info/Manam_Sai_Karthik.jpg" alt="Manam Sai Karthik" className="hero__avatar" />
          </div>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div className="hero__text">
            <p className="hero__greeting">Hello, I'm</p>
            <h1 className="hero__name">Manam Sai Karthik</h1>
            <p className="hero__tagline">Computer Science Student &nbsp;·&nbsp; AI/ML Enthusiast &nbsp;·&nbsp; Full-Stack Developer</p>
            <div className="hero__body">
              <p>Hi — I'm a Computer Science undergraduate passionate about building real-world tech solutions. I work with Python, Java, C++, SQL, and front-end tools like HTML, CSS, and JavaScript. I've developed applications like a YouTube transcript summarizer and speech-to-text tools, and I'm skilled in AI/ML concepts through hands-on internships and projects.</p>
              <p>I enjoy working on innovative ideas, collaborating with teams, and continuously learning. Currently seeking opportunities in software development, AI/ML, or full-stack web development.</p>
              <p className="hero__cta-text">Let's connect and build something impactful!</p>
            </div>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">Get In Touch</a>
              <a href="#projects" className="btn btn--outline">View Projects</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn><SectionTitle>Skills</SectionTitle></FadeIn>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <FadeIn key={s} delay={i * 0.05}>
              <div className="skill-chip">{s}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <FadeIn><SectionTitle>Projects</SectionTitle></FadeIn>
        <div className="cards-grid">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="card project-card">
                <div className="project-card__emoji">{p.emoji}</div>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__tech">{p.tech}</p>
                <p className="card__desc">{p.desc}</p>
                <div className="card__links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn--dark btn--sm">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--green btn--sm">🚀 Live</a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <FadeIn><SectionTitle>Education</SectionTitle></FadeIn>
        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <FadeIn key={e.degree} delay={i * 0.1}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-body">
                  <h3 className="timeline-title">{e.degree}</h3>
                  <p className="timeline-sub">{e.school}</p>
                  <span className="timeline-year">{e.year}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <FadeIn><SectionTitle>Experience</SectionTitle></FadeIn>
        <div className="exp-list">
          {EXPERIENCE.map((e, i) => (
            <FadeIn key={e.role + e.company} delay={i * 0.08}>
              <div className="exp-card">
                <div className="exp-card__head">
                  <div>
                    <h3 className="exp-card__role">{e.role}</h3>
                    <p className="exp-card__company">{e.company} &mdash; <span>{e.duration}</span></p>
                  </div>
                  {e.cert && (
                    <a href={e.cert} target="_blank" rel="noreferrer" className="cert-badge">View Cert ↗</a>
                  )}
                </div>
                <ul className="exp-card__list">
                  {e.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardGrid({ title, id, items, altBg }) {
  return (
    <section id={id} className={`section ${altBg ? "section--alt" : ""}`}>
      <div className="container">
        <FadeIn><SectionTitle>{title}</SectionTitle></FadeIn>
        <div className="cards-grid">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <div className="card small-card">
                <p className="small-card__title">{item.title}</p>
                {item.sub && <span className="small-card__sub">{item.sub}</span>}
                {(item.issuer || item.cert) && (
                  <div className="small-card__footer">
                    {item.issuer && <span className="small-card__issuer">Issued by: {item.issuer}</span>}
                    {item.cert && (
                      <a href={item.cert} target="_blank" rel="noreferrer" className="cert-link">View Certificate ↗</a>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container resume-inner">
        <FadeIn>
          <SectionTitle>Resume</SectionTitle>
          <p className="resume-text">Download my latest resume to learn more about my experience and skills.</p>
          <a href="Personal_Info/Manam_Sai_Karthik_Resume.pdf" download className="btn btn--primary btn--lg">
            ⬇️ Download Resume (PDF)
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending…");
    setStatusType("sending");
    if (window.emailjs) {
      window.emailjs.sendForm("Karthik's_service_id", "karthik's_template_id", e.target)
        .then(() => {
          setStatus("✅ Message sent! I'll get back to you soon.");
          setStatusType("success");
          e.target.reset();
          setTimeout(() => setStatus(""), 5000);
        }, () => {
          setStatus("❌ Failed to send. Please email me directly.");
          setStatusType("error");
          setTimeout(() => setStatus(""), 5000);
        });
    } else {
      setStatus("⚠️ Email service not loaded. Please try emailing me directly.");
      setStatusType("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact-inner">
        <FadeIn><SectionTitle>Contact</SectionTitle></FadeIn>
        <div className="contact-grid">
          <FadeIn delay={0.1} className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required className="form-input" />
              <input type="email" name="email" placeholder="Your Email" required className="form-input" />
              <input type="text" name="title" placeholder="Subject" required className="form-input" />
              <textarea name="message" placeholder="Your Message" rows={5} required className="form-input form-textarea" />
              <button type="submit" className="btn btn--primary btn--full">Send Message</button>
              {status && <p className={`form-status form-status--${statusType}`}>{status}</p>}
            </form>
          </FadeIn>
          <FadeIn delay={0.2} className="contact-info-wrap">
            <div className="contact-info">
              <h3 className="contact-info__title">Let's connect</h3>
              <p className="contact-info__desc">I'm open to internship opportunities, collaborative projects, and interesting conversations about tech and AI.</p>
              <div className="contact-links">
                <a href="mailto:manam.saikarthik@gmail.com" className="contact-link" target="_blank" rel="noreferrer">
                  <span className="contact-link__icon">📧</span>
                  <span>manam.saikarthik@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/sai-karthik-manam" className="contact-link" target="_blank" rel="noreferrer">
                  <span className="contact-link__icon">🔗</span>
                  <span>linkedin.com/in/sai-karthik-manam</span>
                </a>
                <a href="https://github.com/Sai-Karthik-Manam" className="contact-link" target="_blank" rel="noreferrer">
                  <span className="contact-link__icon">💻</span>
                  <span>github.com/Sai-Karthik-Manam</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button className={`btt ${show ? "btt--show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
      ↑
    </button>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.35 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header active={active} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <CardGrid id="certifications" title="Certifications" items={CERTIFICATIONS} altBg={false} />
        <CardGrid id="achievements" title="Awards & Achievements" items={ACHIEVEMENTS} altBg />
        <CardGrid id="hackathons" title="Hackathons" items={HACKATHONS} altBg={false} />
        <CardGrid id="participation" title="Participation" items={PARTICIPATION} altBg />
        <CardGrid id="leadership" title="Leadership" items={LEADERSHIP} altBg={false} />
        <Resume />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2025 Manam Sai Karthik. All rights reserved.</p>
      </footer>
      <BackToTop />
    </>
  );
}
