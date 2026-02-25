import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const SERVICES = [
  {
    id:   'ai-automation',
    name: 'AI Automation Systems',
    body: 'Stop doing manually what a system can do for you.',
    to:   '/services#ai-automation',
  },
  {
    id:   'custom-software',
    name: 'Custom Software',
    body: 'Software that fits your business. Not the other way around.',
    to:   '/services#custom-software',
  },
  {
    id:   'lead-generation',
    name: 'Lead Generation Systems',
    body: 'A steady pipeline of the right people.',
    to:   '/services#lead-generation',
  },
];

const ServicesBlock = () => {
  const ref = useScrollAnimation();

  return (
    <section className="services-block section" aria-label="Services overview">
      <div className="container reveal" ref={ref}>

        <h2 className="services-block__headline">
          What we build.
        </h2>

        {/* Service cards — glass-dark on dark background */}
        <div className="services-block__grid">
          {SERVICES.map(({ id, name, body, to }) => (
            <article
              key={id}
              className="service-card glass-dark"
              aria-label={name}
            >
              <h3 className="service-card__name">{name}</h3>
              <p className="service-card__body">{body}</p>
              <Link to={to} className="service-card__link">
                Learn more →
              </Link>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="services-block__cta-strip">
          <p className="services-block__cta-text">
            Not sure which one you need? We'll figure it out together.
          </p>
          <Link to="/contact" className="btn btn-glass">
            Book a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesBlock;
