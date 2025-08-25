export default function HeroSection({DATA}) {
    return (
        <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{DATA.role}</h1>
              <p className="tagline">{DATA.tagline}</p>
              
              <div className="hero-badges">
                <span className="badge">📍 {DATA.location}</span>
                <span className="badge">🌐 <a href={DATA.website} target="_blank" rel="noopener noreferrer">aiscanner.tech</a></span>
                <span className="badge">⚡ Sẵn sàng làm việc</span>
              </div>
            </div>
            <div className="hero-avatar">
              <div className="avatar-card">
                <div className="avatar">H</div>
                <h3>{DATA.name}</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}