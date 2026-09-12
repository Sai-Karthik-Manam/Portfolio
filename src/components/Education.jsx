import { FadeIn, SectionTitle } from "./Shared";
import { EDUCATION } from "../data/portfolioData";

export default function Education() {
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
                  {e.cgpa && <span style={{marginLeft: '10px', fontSize: '0.9rem', color: 'var(--muted)'}}>CGPA: {e.cgpa}</span>}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
