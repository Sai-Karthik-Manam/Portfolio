import { useState } from "react";
import { FadeIn, SectionTitle } from "./Shared";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn><SectionTitle>Skills</SectionTitle></FadeIn>
        <div className="tabs-container">
          <FadeIn delay={0.1}>
            <div className="tabs-header">
              {SKILLS.map((skillGroup, i) => (
                <button 
                  key={skillGroup.category} 
                  className={`tab-btn ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {skillGroup.category}
                </button>
              ))}
            </div>
          </FadeIn>
          <div className="tabs-content">
            <FadeIn key={activeTab}>
              <div className="skills-grid">
                {SKILLS[activeTab].items.map((s) => (
                  <div className="skill-chip" key={s}>{s}</div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
