import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CardGrid from "./components/CardGrid";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { BackToTop } from "./components/Shared";
import { CERTIFICATIONS, ACHIEVEMENTS, LEADERSHIP } from "./data/portfolioData";

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
        <Experience />
        <Projects />
        <Education />
        <CardGrid id="certifications" title="Certifications" items={CERTIFICATIONS} altBg={false} />
        <CardGrid id="achievements" title="Awards & Achievements" items={ACHIEVEMENTS} altBg />
        <CardGrid id="leadership" title="Leadership" items={LEADERSHIP} altBg={false} />
        <Resume />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Manam Sai Karthik. All rights reserved.</p>
      </footer>
      <BackToTop />
    </>
  );
}
