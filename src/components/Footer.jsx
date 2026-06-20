import { me } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <button className="footer-wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Muhammad Umair
          </button>
          <p className="footer-sub t-body-sm">
            Frontend Developer · {me.location}
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {['about', 'skills', 'projects', 'contact'].map((id) => (
            <button key={id} className="footer-link" onClick={() => go(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      <div className="container footer-bottom">
        <p className="t-body-sm">© {year} {me.name}</p>
      </div>
    </footer>
  );
}
 