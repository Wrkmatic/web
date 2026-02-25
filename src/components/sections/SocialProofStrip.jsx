import useScrollAnimation from '../../hooks/useScrollAnimation';

// Placeholder stats — replace values when real data is available
const STATS = [
  {
    id:    'stat-hours',
    value: '[X] hrs',
    label: 'Hours saved per week — for a client running manual sales reporting',
  },
  {
    id:    'stat-leads',
    value: '[X]%',
    label: 'Increase in qualified leads — within 90 days of system launch',
  },
  {
    id:    'stat-weeks',
    value: '[X] wks',
    label: 'Average build time — from first call to deployment',
  },
];

const SocialProofStrip = () => {
  const ref = useScrollAnimation();

  return (
    <section className="social-proof section" aria-label="Social proof">
      <div className="container reveal" ref={ref}>

        <h2 className="social-proof__headline">
          Real businesses. Real results.
        </h2>

        {/* Stats — glass-dark cards on light background */}
        <div className="social-proof__stats" role="list">
          {STATS.map(({ id, value, label }) => (
            <div key={id} className="stat-card glass-dark" role="listitem">
              <span className="stat-card__value">{value}</span>
              <span className="stat-card__label">{label}</span>
            </div>
          ))}
        </div>

        {/* Testimonial quote — glass-light */}
        <blockquote className="social-proof__quote glass-light">
          <p className="social-proof__quote-text">
            "[Client testimonial — one or two sentences on the transformation they
            experienced.]"
          </p>
          <footer className="social-proof__quote-attribution">
            <cite style={{ fontStyle: 'normal' }}>
              — [Name, Role, Company]
            </cite>
          </footer>
        </blockquote>

        <p className="social-proof__trust">
          Every system we build is custom. Every result is specific to the business
          we built it for.
        </p>

      </div>
    </section>
  );
};

export default SocialProofStrip;
