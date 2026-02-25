import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutPage = () => {
  const bodyRef = useScrollAnimation();
  const ctaRef  = useScrollAnimation();

  return (
    <main>

      {/* Page hero — dark background */}
      <section className="page-hero page-hero--dark" aria-label="About page header">
        <div className="container">
          <span className="label label--light page-hero__label">About</span>
          <h1 className="page-hero__headline page-hero__headline--light">
            We got tired of watching good businesses run on bad systems.
          </h1>
          <p className="page-hero__sub page-hero__sub--light">
            So we built Wrkmatic to do something about it.
          </p>
        </div>
      </section>

      {/* Story body — dark background continues */}
      <section className="about-body section" aria-label="Our story">
        <div className="container">
          <div className="about__inner reveal" ref={bodyRef}>

            <div className="about__body">
              <p>
                We're a small team of computer science and cybersecurity graduates
                based in Manchester, specialising in AI and custom software
                development. Between us we've spent years building, breaking and
                securing complex systems — and we kept seeing the same thing in the
                businesses around us.
              </p>
              <p>
                Smart, capable teams held back by software that didn't fit. Manual
                processes nobody had time to fix. Off-the-shelf tools being stretched
                way beyond what they were built for.
              </p>
              <p>
                So we started Wrkmatic to fix that. Not as a consultancy that hands
                you a report and disappears. Not as an agency that sells you a
                template with your logo on it. As a technical partner that sits down
                with you, understands your business properly, and builds exactly what
                it needs.
              </p>
              <p>
                We're based in Manchester but we work with businesses across the UK.
                Every project we take on gets our full attention — because we only
                take on projects we know we can deliver.
              </p>
            </div>

            <p className="about__closing">
              Small team. Serious capability. Built for businesses that want more
              than off-the-shelf.
            </p>

          </div>
        </div>
      </section>

      {/* CTA — bg-mid */}
      <section className="about-cta section" aria-label="Get started">
        <div className="container">
          <div className="about-cta__inner reveal" ref={ctaRef}>
            <h2 className="about-cta__headline">
              Ready to work with a team that actually understands your business?
            </h2>
            <p className="about-cta__sub">
              One conversation is all it takes to figure out whether Wrkmatic
              is the right fit.
            </p>
            <div>
              <Link to="/contact" className="btn btn-glass">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
