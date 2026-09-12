import { useState } from "react";
import { FadeIn, SectionTitle } from "./Shared";

export default function Contact() {
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
              <p className="contact-info__desc">I'm open to full-time opportunities, collaborative projects, and interesting conversations about tech and AI.</p>
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
