export default function Projects({PROJECTS}) {
    return (
        <section id="projects">
        <div className="container">
          <h2 className="section-title">Dự án tiêu biểu</h2>
          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <article key={project.title} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="tech-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                    🌐 Live Demo
                  </a>
                  <a href={project.code} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                    💻 Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
}