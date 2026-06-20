import { me } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-header fade-up">
          <p className="t-label">About</p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-heading fade-up">
              Building things<br />
              <span className="about-heading-serif">one project at a time.</span>
            </h2>

            <div className="about-card fade-up">
              <div className="about-card-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <div>
                  <p className="about-card-label t-label">Education</p>
                  <p className="about-card-value">BS Computer Science</p>
                  <p className="about-card-sub t-body-sm">NUML · Karachi</p>
                </div>
              </div>
              <div className="about-card-divider" />
              <div className="about-card-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <p className="about-card-label t-label">Status</p>
                  <p className="about-card-value" style={{ color: 'var(--accent)' }}>
                    Open to freelance
                  </p>
                  <p className="about-card-sub t-body-sm">Landing pages · React apps</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            {me.about.map((para, i) => (
              <p
                key={i}
                className="about-para t-body-lg fade-up"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
