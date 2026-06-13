/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/* ─────────────────────────────────────────────────────────────────────────────
   Made Songs — Landing Page
   Matches Figma spec: MacBook Pro 14" – 9
   ───────────────────────────────────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="page">

      {/* ── Navbar pill ────────────────────────────────────────────── */}
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
            {/* Apple icon */}
            <svg className="nav-cta-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ color: '#fff' }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* ── Hero section ───────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">

        {/* Left: headline + CTA */}
        <div className="hero-left">
          <div className="hero-text-block">
            <h1 className="hero-headline">Make a song,<br />gift a song.</h1>

            <a href="#" className="hero-btn" id="hero-get-app" aria-label="Get the Made Songs app">
              <span className="hero-btn-text">Get the app</span>
              <svg className="hero-btn-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ color: '#fff' }}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: iPhone mockup */}
        <div className="hero-right">
          <IPhoneMockup />
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="footer-wrap" aria-label="Footer">
        <div className="footer-main">

          {/* Brand col */}
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

          {/* Links */}
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

        {/* Bottom bar: copyright + socials */}
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
    </div>
  );
}

/* ── Inline iPhone mockup SVG ──────────────────────────────────────────────── */
function IPhoneMockup() {
  return (
    <svg
      className="hero-mockup"
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Phone body */}
      <rect x="1" y="1" width="388" height="842" rx="54" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2"/>
      <rect x="6" y="6" width="378" height="832" rx="50" fill="#0d0d0d"/>

      {/* Screen area */}
      <rect x="14" y="14" width="362" height="816" rx="44" fill="#111"/>

      {/* Dynamic island */}
      <rect x="148" y="26" width="94" height="32" rx="16" fill="#0d0d0d"/>

      {/* App UI – simplified Made Songs screen */}
      {/* Background gradient */}
      <defs>
        <linearGradient id="screenBg" x1="14" y1="14" x2="376" y2="830" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f0f0f"/>
          <stop offset="1" stopColor="#1c1c1e"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#2a2a2a"/>
          <stop offset="1" stopColor="#1a1a1a"/>
        </linearGradient>
        <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#ff0000"/>
          <stop offset="1" stopColor="#ff4444"/>
        </linearGradient>
      </defs>
      <rect x="14" y="14" width="362" height="816" rx="44" fill="url(#screenBg)"/>

      {/* Status bar placeholder */}
      <text x="30" y="58" fontFamily="system-ui" fontSize="13" fill="#888" fontWeight="600">9:41</text>

      {/* Logo in app */}
      <circle cx="340" cy="52" r="16" fill="#FF0000"/>
      <text x="333" y="57" fontFamily="system-ui" fontSize="13" fill="#fff" fontWeight="700">♪</text>

      {/* Main card */}
      <rect x="22" y="80" width="346" height="440" rx="28" fill="url(#cardGrad)"/>

      {/* Waveform decoration */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((i) => {
        const heights = [20,35,55,42,28,60,38,50,24,65,44,30,58,40,22,52,36,62,28,45,32];
        const h = heights[i] ?? 30;
        return (
          <rect
            key={i}
            x={38 + i * 15}
            y={300 - h / 2}
            width="7"
            height={h}
            rx="4"
            fill={i === 10 ? '#FF0000' : '#333'}
          />
        );
      })}

      {/* Song title */}
      <text x="38" y="200" fontFamily="system-ui" fontSize="22" fill="#ffffff" fontWeight="600">Sarah's Birthday</text>
      <text x="38" y="228" fontFamily="system-ui" fontSize="14" fill="#888">Upbeat Indie Pop · 2:34</text>

      {/* Play button */}
      <circle cx="195" cy="375" r="34" fill="#FF0000"/>
      <polygon points="187,360 187,390 215,375" fill="#fff"/>

      {/* Skip controls */}
      <text x="100" y="382" fontFamily="system-ui" fontSize="22" fill="#888">⏮</text>
      <text x="272" y="382" fontFamily="system-ui" fontSize="22" fill="#888">⏭</text>

      {/* Progress bar */}
      <rect x="38" y="330" width="314" height="4" rx="2" fill="#333"/>
      <rect x="38" y="330" width="140" height="4" rx="2" fill="#FF0000"/>
      <circle cx="178" cy="332" r="6" fill="#FF0000"/>

      {/* Gift button */}
      <rect x="38" y="430" width="314" height="52" rx="26" fill="url(#btnGrad)"/>
      <text x="136" y="462" fontFamily="system-ui" fontSize="16" fill="#fff" fontWeight="500">🎁 Gift this song</text>

      {/* Bottom song list */}
      {[
        { title: "Golden Years", sub: "Anniversary" },
        { title: "Wild Hearts", sub: "Adventure" },
        { title: "New Chapter", sub: "Wedding" },
      ].map((s, i) => (
        <g key={i}>
          <rect x="22" y={548 + i * 78} width="346" height="68" rx="18" fill="#1c1c1c"/>
          <circle cx="62" cy={582 + i * 78} r="20" fill="#2a2a2a"/>
          <text x="56" y={587 + i * 78} fontFamily="system-ui" fontSize="16" fill="#FF0000">♪</text>
          <text x="92" y={577 + i * 78} fontFamily="system-ui" fontSize="14" fill="#ffffff" fontWeight="500">{s.title}</text>
          <text x="92" y={595 + i * 78} fontFamily="system-ui" fontSize="12" fill="#888">{s.sub}</text>
        </g>
      ))}

      {/* Home indicator */}
      <rect x="153" y="818" width="84" height="5" rx="2.5" fill="#444"/>
    </svg>
  );
}
