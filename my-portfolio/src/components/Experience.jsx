export default function Experience({EXPERIENCE}) {
    return (
        <section id="experience">
        <div className="container">
          <h2 className="section-title">Kinh nghiệm</h2>
          <div className="timeline">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.company} className="timeline-item">
                <div className="timeline-card">
                  <h3 className="job-title">{exp.role} — {exp.company}</h3>
                  <div className="job-period">{exp.period}</div>
                  <ul className="job-bullets">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
