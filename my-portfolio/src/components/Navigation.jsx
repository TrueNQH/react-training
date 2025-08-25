export default function Navigation({DATA, activeSection, scrolled}) {
    return (
        <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-wrap">
          <a href="#" className="brand">
            <div className="brand-icon">H</div>
            <span>{DATA.name}</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>Giới thiệu</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Kỹ năng</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Dự án</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Kinh nghiệm</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Liên hệ</a></li>
          </ul>
        </div>
      </nav>
    )
}