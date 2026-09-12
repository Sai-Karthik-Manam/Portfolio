import { FadeIn, SectionTitle } from "./Shared";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn><SectionTitle>Skills</SectionTitle></FadeIn>
        <div className="skills-categories-grid">
          {SKILLS.map((skillGroup, i) => (
            <FadeIn key={skillGroup.category} delay={i * 0.1}>
              <div className="skill-category">
                <h3 className="skill-category-title">{skillGroup.category}</h3>
                <div className="skills-grid">
                  {skillGroup.items.map((s, j) => (
                    <div className="skill-chip" key={s}>{s}</div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
