import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FinalCTASection.css';

export default function FinalCTASection() {
  const [ref, visible] = useScrollAnimation(0.1);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-final" id="contact">
      <div className="cta-final__bg" aria-hidden="true" />
      <div className="cta-final__bg-blob" aria-hidden="true" />

      <div className="container">
        <div
          ref={ref}
          className={`cta-final__inner fade-up${visible ? ' visible' : ''}`}
        >
          <div className="cta-final__badge" aria-hidden="true">
            <span>🚀</span>
          </div>

          <h2 className="cta-final__headline">
            Your Systems Should Work<br className="cta-final__br" />
            Harder Than Your Team Does.
          </h2>

          <p className="cta-final__sub">
            Book a free 30-minute strategy call. We'll review your current setup,
            identify where you're leaking time and money, and show you exactly what
            a custom system would look like for your business —
            no pitch, no pressure.
          </p>

          <div className="cta-final__actions">
            <button
              className="btn btn--filled cta-final__btn"
              onClick={() => scrollTo('contact')}
            >
              Book a Free Strategy Call
            </button>
          </div>

          <p className="cta-final__micro">
            Free consultation &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; No obligation
          </p>

          <p className="cta-final__reassurance">
            Hundreds of hours of operational work reclaimed. Starting with 30 minutes of your time.
          </p>

          {/* Trust row */}
          <div className="cta-final__trust-row">
            {[
              { icon: '🔒', text: 'You own everything' },
              { icon: '⚡', text: 'Live in 4–8 weeks' },
              { icon: '🎯', text: 'Built for your workflow' },
              { icon: '🤝', text: 'Ongoing support' },
            ].map((t) => (
              <div key={t.text} className="cta-final__trust-item">
                <span aria-hidden="true">{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
