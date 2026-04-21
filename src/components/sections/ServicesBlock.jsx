import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const SERVICES = [
  {
    id:   'ai-outbound',
    name: 'AI Cold Email & Outbound',
    body: 'Automated outreach that books calls — not spam.',
    to:   '/services#lead-generation',
  },
  {
    id:   'crm-pipeline',
    name: 'CRM & Sales Pipeline',
    body: 'Built around your sales process. Not a template.',
    to:   '/services#custom-software',
  },
  {
    id:   'ai-workflow',
    name: 'AI Workflow Automation',
    body: 'Replace manual admin with systems that run themselves.',
    to:   '/services#ai-automation',
  },
  {
    id:   'client-portals',
    name: 'Custom Portals & Apps',
    body: 'Dashboards and tools that fit how your team actually works.',
    to:   '/services#custom-software',
  },
  {
    id:   'integrations',
    name: 'Integrations & Data Pipelines',
    body: 'Connect the tools you already use. Move data where it needs to go.',
    to:   '/services#ai-automation',
  },
  {
    id:   'lead-nurture',
    name: 'Lead Capture & Nurture',
    body: 'Qualify prospects automatically. Follow up until they convert.',
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
