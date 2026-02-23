import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './HowItWorksSection.css';

const STEPS = [
  {
    number: '01',
    title: 'Strategy Call',
    description:
      "We understand your business before we write a single line of code. In 30 minutes, we map your current systems, identify your biggest operational gaps, and outline what a custom solution looks like for your specific context.",
    icon: '💬',
    tag: 'Free — 30 minutes',
  },
  {
    number: '02',
    title: 'System Architecture',
    description:
      "We design your system blueprint. Our architects design the full data model, automation logic, and integration map. You review and approve everything before development begins. No surprises.",
    icon: '🗺️',
    tag: 'Full transparency',
  },
  {
    number: '03',
    title: 'Development & AI Integration',
    description:
      "We build it — fast, clean, and connected. Our team develops your CRM, automation workflows, and integrations in rapid sprints. You get progress updates and staging previews throughout.",
    icon: '⚙️',
    tag: 'Rapid sprints',
  },
  {
    number: '04',
    title: 'Launch & Optimisation',
    description:
      "We deploy, train your team, and keep improving. After launch, we monitor performance, gather your feedback, and continuously optimise. Your system gets smarter over time — not stale.",
    icon: '🚀',
    tag: 'Continuous support',
  },
];

export default function HowItWorksSection() {
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [stepsRef, stepsVisible] = useScrollAnimation(0.05);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="how section" id="how-it-works">
      <div className="container">
        <div
          ref={headingRef}
          className={`how__heading text-center fade-up${headingVisible ? ' visible' : ''}`}
        >
          <span className="overline">The Process</span>
          <h2 className="how__h2">
            From First Call to Full Launch —<br className="how__br" />
            Here's Exactly What Happens
          </h2>
          <p className="how__intro">
            We've built this process to be fast, transparent, and completely collaborative.
            You stay in control at every step.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className={`how__steps stagger${stepsVisible ? ' visible' : ''}`}
        >
          {STEPS.map((step, i) => (
            <div key={step.number} className={`how__step fade-up${stepsVisible ? ' visible' : ''}`}>
              {/* Connector line (between steps) */}
              {i < STEPS.length - 1 && (
                <div className="how__connector" aria-hidden="true">
                  <div className="how__connector-line" />
                  <div className="how__connector-dot" />
                </div>
              )}

              <div className="how__step-inner">
                <div className="how__step-header">
                  <div className="how__step-number-wrap">
                    <span className="how__step-num">{step.number}</span>
                  </div>
                  <span className="how__step-tag">{step.tag}</span>
                </div>

                <div className="how__step-icon" aria-hidden="true">{step.icon}</div>

                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under steps */}
        <div
          ref={ctaRef}
          className={`how__cta-wrap text-center fade-up${ctaVisible ? ' visible' : ''}`}
        >
          <button className="btn btn--filled" onClick={() => scrollTo('contact')}>
            Book a Free Strategy Call
          </button>
          <p className="how__cta-micro text-muted text-small">
            Start at Step 1 — completely free.
          </p>
        </div>
      </div>
    </section>
  );
}
