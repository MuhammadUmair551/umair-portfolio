import { useState, useEffect } from 'react';
import { me } from '../data/portfolio';
import './Navbar.css';

const LINKS = [
  { label: 'About',    id: 'about'    },
  { label: 'Skills',   id: 'skills'   },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`nav-header ${scrolled ? 'nav-header--bordered' : ''}`}>
        <div className="container nav-inner">
          <button className="nav-wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Muhammad Umair
          </button>

          <nav className="nav-links" aria-label="Primary navigation">
            {LINKS.map(({ label, id }) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          <a href={`mailto:${me.email}`} className="nav-cta">
            Get in touch
          </a>

          <button
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`nav-toggle-icon ${menuOpen ? 'nav-toggle-icon--open' : ''}`}>
              <span /><span />
            </span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="container mobile-nav-inner">
          <nav className="mobile-nav-links">
            {LINKS.map(({ label, id }, i) => (
              <button
                key={id}
                className="mobile-nav-link"
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </nav>
          <a href={`mailto:${me.email}`} className="mobile-nav-email" onClick={() => setMenuOpen(false)}>
            {me.email}
          </a>
        </div>
      </div>
    </>
  );
}
