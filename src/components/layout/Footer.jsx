import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Demos',    to: '/demos'    },
  { label: 'Contact',  to: '/contact'  },
];

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container">
      <div className="footer__grid">

        {/* Brand */}
        <div>
          <Link to="/" className="footer__logo" aria-label="Wrkmatic — home">
            Wrkmatic
          </Link>
          <p className="footer__tagline">
            Built for your business. Not someone else's.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="footer__col-heading">Navigation</p>
          <ul className="footer__links">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="footer__col-heading">Contact</p>
          <p className="footer__contact-row">
            <a href="mailto:hello@wrkmatic.com">hello@wrkmatic.com</a>
          </p>
          <p className="footer__contact-row">Manchester, UK</p>
        </div>

      </div>

      {/* Legal bar */}
      <p className="footer__legal">
        © {new Date().getFullYear()} Wrkmatic. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
