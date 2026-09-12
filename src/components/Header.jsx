import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Header({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 100 && y > lastY.current);
      lastY.current = y <= 0 ? 0 : y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? "hdr--scrolled" : ""} ${hidden ? "hdr--hidden" : ""}`}>
      <div className="hdr__brand">
        <span className="hdr__dot" />
        <span className="hdr__name">Manam Sai Karthik</span>
      </div>
      <button className="hdr__burger" onClick={() => setMenuOpen(o => !o)} aria-label="menu">
        <span /><span /><span />
      </button>
      <nav className={`hdr__nav ${menuOpen ? "hdr__nav--open" : ""}`}>
        {NAV_LINKS.map(id => (
          <a key={id} href={`#${id}`} className={`hdr__link ${active === id ? "hdr__link--active" : ""}`}
            onClick={() => setMenuOpen(false)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}
