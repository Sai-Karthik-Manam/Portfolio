import { useState } from "react";
import { FadeIn, SectionTitle } from "./Shared";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const p = PROJECTS[activeTab];

  // Create shorter tab titles for the projects to save space
  const getTabTitle = (title) => {
    if (title.includes("YouTube")) return "YT Summarizer";
    if (title.includes("Breast Cancer")) return "Cancer Prediction";
    if (title.includes("Income Expense")) return "Expense Tracker";
    if (title.includes("Speech-to-Text")) return "Speech-to-Text";
    if (title.includes("Smart Shopping")) return "AR Shopping";
    if (title.includes("Citizen Service")) return "Citizen Portal";
    return title;
  };

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <FadeIn><SectionTitle>Projects</SectionTitle></FadeIn>
        <div className="tabs-container">
          <FadeIn delay={0.1}>
            <div className="tabs-header">
              {PROJECTS.map((proj, i) => (
                <button 
                  key={proj.title} 
                  className={`tab-btn ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {getTabTitle(proj.title)}
                </button>
              ))}
            </div>
          </FadeIn>
          <div className="tabs-content" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <FadeIn key={activeTab}>
              <div className="card project-card" style={{ marginTop: '20px' }}>
                <div className="project-card__emoji">{p.emoji}</div>
                <h3 className="card__title" style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{p.title}</h3>
                <p className="card__tech" style={{ fontSize: '0.85rem' }}>{p.tech}</p>
                <p className="card__desc" style={{ fontSize: '1.05rem', lineHeight: '1.6', marginTop: '16px', marginBottom: '24px' }}>{p.desc}</p>
                <div className="card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn--dark btn--lg">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub Repo
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--green btn--lg">🚀 Live Demo</a>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
