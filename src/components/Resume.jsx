import { FadeIn, SectionTitle } from "./Shared";

export default function Resume() {
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
