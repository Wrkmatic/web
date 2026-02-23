import { useState, useEffect } from 'react';
import './StickyHeader.css';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <a href="#" className="header__logo" aria-label="Wrkmatic home">
          <div className="header__logo-mark">
            <span>W</span>
          </div>
          <span className="header__logo-text">Wrkmatic</span>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          <button onClick={() => scrollTo('how-it-works')} className="header__nav-link">How It Works</button>
          <button onClick={() => scrollTo('services')} className="header__nav-link">Services</button>
          <button onClick={() => scrollTo('social-proof')} className="header__nav-link">Results</button>
          <button onClick={() => scrollTo('faq')} className="header__nav-link">FAQ</button>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <button
            className="btn btn--filled header__cta"
            onClick={() => scrollTo('contact')}
          >
            Book a Free Call
          </button>
          <button
            className={`header__menu-toggle${menuOpen ? ' header__menu-toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu${menuOpen ? ' header__mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="header__mobile-nav">
          <button onClick={() => scrollTo('how-it-works')} className="header__mobile-link">How It Works</button>
          <button onClick={() => scrollTo('services')} className="header__mobile-link">Services</button>
          <button onClick={() => scrollTo('social-proof')} className="header__mobile-link">Results</button>
          <button onClick={() => scrollTo('faq')} className="header__mobile-link">FAQ</button>
          <button className="btn btn--filled header__mobile-cta" onClick={() => scrollTo('contact')}>
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </header>
  );
}
