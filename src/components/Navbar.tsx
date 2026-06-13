import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-wrap" aria-label="Main navigation">
      <div className="nav-pill">

        {/* Logo */}
        <div className="nav-logo">
          <svg className="nav-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#FF0000"/>
            <path d="M27 14v8.5a3.5 3.5 0 1 1-2-3.163V16l-8 1.6V25a3.5 3.5 0 1 1-2-3.163V13l12-2.4V14z" fill="#fff"/>
          </svg>
          <span className="nav-logo-wordmark">Made Songs</span>
        </div>

        {/* Get the App CTA */}
        <a href="#" className="nav-cta" id="nav-get-app" aria-label="Get the Made Songs app">
          <span className="nav-cta-text">Get the App</span>
          <svg className="nav-cta-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ color: '#fff' }}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </a>

      </div>
    </nav>
  );
}
