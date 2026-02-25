import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'About',    to: '/about'    },
  { label: 'Demos',    to: '/demos'    },
  { label: 'Contact',  to: '/contact'  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        role="banner"
      >
        <div className="container navbar__inner">

          {/* Logo */}
          <Link
            to="/"
            className="navbar__logo"
            onClick={closeMenu}
            aria-label="Wrkmatic — home"
          >
            Wrkmatic
          </Link>

          {/* Desktop navigation */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="navbar__cta">
            Book a Call
          </Link>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`navbar__overlay${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          className="navbar__overlay-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ×
        </button>

        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="navbar__overlay-link"
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="btn btn-primary"
          onClick={closeMenu}
        >
          Book a Call
        </Link>
      </div>
    </>
  );
};

export default Navbar;
