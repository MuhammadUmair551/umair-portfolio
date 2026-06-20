import { me } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container">

        <div className="hero-status fade-in" style={{ transitionDelay: '80ms' }}>
          {me.available && (
            <span className="hero-status-badge">
              <span className="hero-status-dot" aria-hidden="true" />
              Available for work
            </span>
          )}
        </div>

        <h1 className="hero-name fade-up" style={{ transitionDelay: '160ms' }}>
          {me.name}
        </h1>

        {/* Role + location row */}
        <div className="hero-meta fade-up" style={{ transitionDelay: '220ms' }}>
          <span className="hero-role">{me.role}</span>
          <span className="hero-sep" aria-hidden="true">·</span>
          <span className="hero-location">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
              <path
                d="M6 0C3.24 0 1 2.19 1 4.88 1 8.53 6 13 6 13s5-4.47 5-8.12C11 2.19 8.76 0 6 0zm0 6.6a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46z"
                fill="currentColor"
              />
            </svg>
            {me.location}
          </span>
        </div>

        <p className="hero-intro fade-up" style={{ transitionDelay: '280ms' }}>
          {me.intro}
        </p>

        <div className="hero-actions fade-up" style={{ transitionDelay: '340ms' }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View projects
          </button>
          <a href={`mailto:${me.email}`} className="btn-secondary">
            Get in touch
          </a>
        </div>

        <div className="hero-links fade-in" style={{ transitionDelay: '420ms' }}>
          <a href={me.github} target="_blank" rel="noreferrer" className="hero-ext-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
            </svg>
          </a>
          <a href={me.linkedin} target="_blank" rel="noreferrer" className="hero-ext-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
