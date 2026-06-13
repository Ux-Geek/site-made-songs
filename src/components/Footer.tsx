import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrap" aria-label="Footer">

      {/* ── Top row: brand + nav links ── */}
      <div className="footer-main">

        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <svg className="footer-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="#FF0000"/>
              <path d="M27 14v8.5a3.5 3.5 0 1 1-2-3.163V16l-8 1.6V25a3.5 3.5 0 1 1-2-3.163V13l12-2.4V14z" fill="#fff"/>
            </svg>
            <span className="footer-logo-wordmark">Made Songs</span>
          </div>
          <p className="footer-tagline">
            Made Songs helps you make a song for your special person and gift them.
          </p>
        </div>

        {/* Link columns */}
        <nav className="footer-links" aria-label="Footer links">
          <div className="footer-link-col">
            <a href="#" className="footer-link">Drop a Feedback</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
          <div className="footer-link-col">
            <a href="#" className="footer-link">Terms of Use</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </nav>

      </div>

      {/* ── Bottom bar: copyright + social icons ── */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2026. Made Songs Inc.</p>

        <div className="footer-socials" aria-label="Social links">

          {/* X / Twitter */}
          <a href="#" aria-label="Follow on X" id="social-x">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" aria-label="Follow on Instagram" id="social-instagram">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a href="#" aria-label="Follow on TikTok" id="social-tiktok">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" aria-label="Follow on LinkedIn" id="social-linkedin">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

        </div>
      </div>

    </footer>
  );
}
