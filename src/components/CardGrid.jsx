import { FadeIn, SectionTitle } from "./Shared";

export default function CardGrid({ title, id, items, altBg }) {
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
