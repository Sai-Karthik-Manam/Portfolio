import { FadeIn, SectionTitle } from "./Shared";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
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
