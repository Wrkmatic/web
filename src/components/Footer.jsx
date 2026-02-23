import './Footer.css';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand column */}
        <div className="footer__brand">
          <a href="#" className="footer__logo" aria-label="Wrkmatic">
            <div className="footer__logo-mark">W</div>
            <span className="footer__logo-text">Wrkmatic</span>
          </a>
          <p className="footer__tagline">
            Intelligent Systems for Growing Businesses
          </p>
          <p className="footer__desc">
            We build custom CRMs, AI automation workflows, and integrated
            business systems — engineered specifically for your operations.
          </p>
        </div>

        {/* Navigation column */}
        <div className="footer__nav-col">
          <h4 className="footer__col-title">Company</h4>
          <nav className="footer__nav">
            <button onClick={() => scrollTo('services')} className="footer__link">Services</button>
            <button onClick={() => scrollTo('how-it-works')} className="footer__link">How It Works</button>
            <button onClick={() => scrollTo('social-proof')} className="footer__link">Results</button>
            <button onClick={() => scrollTo('why-wrkmatic')} className="footer__link">Why Wrkmatic</button>
            <button onClick={() => scrollTo('faq')} className="footer__link">FAQ</button>
          </nav>
        </div>

        {/* Contact column */}
        <div className="footer__contact-col">
          <h4 className="footer__col-title">Get In Touch</h4>
          <p className="footer__contact-text">
            Ready to build something that actually works?
          </p>
          <button
            className="btn btn--tonal footer__cta"
            onClick={() => scrollTo('contact')}
          >
            Book a Free Strategy Call
          </button>
          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Wrkmatic on LinkedIn"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {YEAR} Wrkmatic. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__legal-sep" aria-hidden="true">·</span>
            <a href="#" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
