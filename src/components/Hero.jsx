import { FadeIn } from "./Shared";

export default function Hero() {
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
            <p className="hero__tagline">Associate Software Engineer Trainee &nbsp;·&nbsp; Full-Stack Developer</p>
            <div className="hero__body">
              <p>Hi — I'm an Associate Software Engineer Trainee at APTOnline with hands-on experience in .NET Core MVC, SQL Server, and full-stack web development. I'm skilled in building and maintaining web applications, resolving real-world development issues, and collaborating across the stack using ASP.NET, JavaScript, and modern front-end tools.</p>
              <p>I have a strong foundation in object-oriented programming, databases, and backend development, with a Computer Science degree and a track record of delivering practical, working solutions.</p>
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
