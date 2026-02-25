import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ImagePlaceholder from '../components/placeholders/ImagePlaceholder';

// Placeholder demo cards — replace with real video walkthroughs
const DEMOS = [
  {
    id:    'demo-1',
    tag:   'AI Automation System',
    title: '[Client Industry] — AI Automation System',
    desc:  '[Short description of what was built and the problem it solved]',
  },
  {
    id:    'demo-2',
    tag:   'Custom Software',
    title: '[Client Industry] — Custom Software',
    desc:  '[Short description of what was built and the problem it solved]',
  },
  {
    id:    'demo-3',
    tag:   'Lead Generation System',
    title: '[Client Industry] — Lead Generation System',
    desc:  '[Short description of what was built and the problem it solved]',
  },
];

// Placeholder testimonials — replace with real quotes
const TESTIMONIALS = [
  {
    id:    'testimonial-1',
    quote: '[Two sentences maximum. Specific result or transformation. The more concrete the better.]',
    attr:  '— [Name, Role, Company, Location]',
  },
  {
    id:    'testimonial-2',
    quote: '[Two sentences maximum. Specific result or transformation. The more concrete the better.]',
    attr:  '— [Name, Role, Company, Location]',
  },
  {
    id:    'testimonial-3',
    quote: '[Two sentences maximum. Specific result or transformation. The more concrete the better.]',
    attr:  '— [Name, Role, Company, Location]',
  },
];

const DemosPage = () => {
  const demosRef        = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const caseStudiesRef  = useScrollAnimation();
  const ctaRef          = useScrollAnimation();

  return (
    <main>

      {/* Page hero */}
      <section className="page-hero page-hero--light" aria-label="Demos page header">
        <div className="container">
          <span className="label page-hero__label">Demos & Testimonials</span>
          <h1 className="page-hero__headline page-hero__headline--dark">
            See what we've built. Hear from the businesses we've built it for.
          </h1>
          <p className="page-hero__sub page-hero__sub--dark">
            Every system we've delivered started with a conversation. Here's where
            some of those conversations ended up.
          </p>
        </div>
      </section>

      {/* Demos section */}
      <section className="demos-section section" aria-label="Demo walkthroughs">
        <div className="container">
          <div className="demos-intro reveal" ref={demosRef}>
            <h2 className="case-studies-section__headline">
              Watch it in action.
            </h2>
            <p>
              Seeing is faster than explaining. Below are walkthroughs of systems
              we've built — real software, real workflows, built for real businesses.
            </p>
          </div>

          <div className="demos-grid" role="list">
            {DEMOS.map(({ id, tag, title, desc }) => (
              <article key={id} className="demo-card" role="listitem" aria-label={title}>

                {/* Placeholder for video embed / screenshot */}
                <div className="demo-card__screen" aria-hidden="true">
                  <span className="demo-card__screen-label">Video walkthrough</span>
                </div>

                <div className="demo-card__body">
                  <span className="demo-card__tag">{tag}</span>
                  <h3 className="demo-card__title">{title}</h3>
                  <p className="demo-card__desc">{desc}</p>
                  <a href="#" className="demo-card__link" aria-label={`Watch demo: ${title}`}>
                    Watch the demo →
                  </a>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — dark background */}
      <section className="testimonials-section section" aria-label="Client testimonials">
        <div className="container">
          <h2 className="testimonials-section__headline reveal" ref={testimonialsRef}>
            What our clients say.
          </h2>

          <div className="testimonials-grid" role="list">
            {TESTIMONIALS.map(({ id, quote, attr }) => (
              <blockquote
                key={id}
                className="testimonial-card glass-dark"
                role="listitem"
              >
                <p className="testimonial-card__quote">"{quote}"</p>
                <footer className="testimonial-card__attribution">
                  <cite style={{ fontStyle: 'normal' }}>{attr}</cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies — light background */}
      <section className="case-studies-section section" aria-label="Case studies">
        <div className="container reveal" ref={caseStudiesRef}>

          <h2 className="case-studies-section__headline">The full story.</h2>
          <p className="case-studies-section__body">
            Numbers tell part of it. Context tells the rest. Below are deeper
            breakdowns of select projects — the problem, what we built, and what
            changed.
          </p>

          {/* Placeholder case study card */}
          <article className="case-study-card">
            <h3 className="case-study-card__title">
              [Company Type] — [Service Delivered]
            </h3>
            <p className="case-study-card__row">
              <span>The problem:</span> [One line]
            </p>
            <p className="case-study-card__row">
              <span>What we built:</span> [One line]
            </p>
            <p className="case-study-card__row">
              <span>The result:</span> [One line with a number if possible]
            </p>
            <a href="#" className="case-study-card__link">
              Read the full case study →
            </a>
          </article>

        </div>
      </section>

      {/* Page CTA — dark */}
      <section className="demos-page-cta section" aria-label="Get started">
        <div className="container">
          <div className="demos-page-cta__inner reveal" ref={ctaRef}>
            <h2 className="demos-page-cta__headline">
              Want results like these for your business?
            </h2>
            <p className="demos-page-cta__body">
              Every project starts the same way — a straight conversation about what
              you need. No pitch. No pressure.
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

export default DemosPage;
