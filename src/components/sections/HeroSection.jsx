import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="hero" aria-label="Hero">
    <div className="container hero__inner">

      {/* Location badge — glass-light */}
      <div className="hero__badge glass-light hero-animate hero-animate--d1">
        Manchester, UK
      </div>

      {/* Headline — light weight, large, fades up */}
      <h1 className="hero__headline hero-animate hero-animate--d2">
        Built for your business.{' '}
        <br />
        Not someone else's.
      </h1>

      {/* Subheadline — semibold */}
      <p className="hero__subheadline hero-animate hero-animate--d3">
        We build what your business actually needs. Then we automate it.
      </p>

      {/* Supporting line */}
      <p className="hero__supporting hero-animate hero-animate--d3">
        Custom AI systems, tailor-made CRMs and lead generation — designed around
        how you work.
      </p>

      {/* CTA group */}
      <div className="hero__cta-group hero-animate hero-animate--d4">
        <Link to="/contact" className="btn btn-primary">
          Book a Free Consultation
        </Link>
        <p className="hero__trust">
          No templates. No guesswork. Built for you from day one.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll hero-animate hero-animate--d5" aria-hidden="true">
        <span className="hero__scroll-arrow" />
        Scroll
      </div>

    </div>
  </section>
);

export default HeroSection;
