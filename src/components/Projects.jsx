import { projects } from '../data/portfolio';
import './Projects.css';

function ArrowUpRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest     = projects.filter((p) => !p.featured);

  return (
    <section className="projects-section section" id="projects">
      <div className="container">

        <div className="section-header fade-up">
          <p className="t-label">Projects</p>
          <h2 className="projects-heading">
            Things I've built
          </h2>
        </div>

        {featured && (
          <div className="proj-featured fade-up">
            <div className="proj-featured-body">
              <div className="proj-featured-meta">
                <span className="proj-year t-label">{featured.year}</span>
                <span className="proj-featured-tag">Featured</span>
              </div>
              <h3 className="proj-featured-title">{featured.title}</h3>
              <p className="proj-featured-summary t-body-lg">{featured.summary}</p>
              <div className="proj-tech-row">
                {featured.tech.map((t) => (
                  <span key={t} className="proj-tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="proj-featured-links">
              {featured.live && (
                <a href={featured.live} target="_blank" rel="noreferrer" className="proj-link-primary">
                  View site <ArrowUpRight />
                </a>
              )}
              {featured.repo && (
                <a href={featured.repo} target="_blank" rel="noreferrer" className="proj-link-secondary">
                  <GitHubIcon /> Source
                </a>
              )}
            </div>
          </div>
        )}

        <div className="proj-list">
          {rest.map((project, i) => (
            <div
              key={project.id}
              className="proj-row fade-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="proj-row-left">
                <span className="proj-year t-label">{project.year}</span>
                <h3 className="proj-row-title">{project.title}</h3>
              </div>
              <p className="proj-row-summary t-body-sm">{project.summary}</p>
              <div className="proj-row-right">
                <div className="proj-tech-row">
                  {project.tech.map((t) => (
                    <span key={t} className="proj-tech-tag">{t}</span>
                  ))}
                </div>
                <div className="proj-row-links">
                  {project.live
                    ? <a href={project.live} target="_blank" rel="noreferrer" className="proj-icon-link" aria-label="View live site"><ArrowUpRight /></a>
                    : null
                  }
                  {project.repo
                    ? <a href={project.repo} target="_blank" rel="noreferrer" className="proj-icon-link" aria-label="View source"><GitHubIcon /></a>
                    : <span className="proj-wip t-label">In progress</span>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer fade-up">
          <a
            href="https://github.com/muhammadumair551"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <GitHubIcon />
            View all on GitHub
            <ArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  );
}
