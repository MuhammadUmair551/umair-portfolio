import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">

        <div className="section-header fade-up">
          <p className="t-label">Skills</p>
          <h2 className="skills-heading">
            Technologies I work with
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              key={group.area}
              className="skills-group fade-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <p className="skills-group-label t-label">{group.area}</p>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item} className="skills-item">
                    <span className="skills-item-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
