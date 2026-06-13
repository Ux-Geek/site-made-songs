import './Navbar.css';
import logoIcon from '../assets/Logo Icon.svg';
import appStoreIcon from '../assets/App Store Icon.svg';

export default function Navbar() {
  return (
    <nav className="nav-wrap" aria-label="Main navigation">
      <div className="nav-pill">

        {/* Logo */}
        <div className="nav-logo">
          <img src={logoIcon} alt="" className="nav-logo-icon" aria-hidden="true" />
          <span className="nav-logo-wordmark">Made Songs</span>
        </div>

        {/* Get the App CTA */}
        <a href="#" className="nav-cta" id="nav-get-app" aria-label="Get the Made Songs app">
          <span className="nav-cta-text">Get the App</span>
          <img src={appStoreIcon} alt="" className="nav-cta-icon" aria-hidden="true" />
        </a>

      </div>
    </nav>
  );
}
