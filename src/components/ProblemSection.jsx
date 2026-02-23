import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ProblemSection.css';

const PAIN_POINTS = [
  {
    icon: '💸',
    headline: "You're paying for features you'll never use",
    body: "Off-the-shelf CRMs charge enterprise prices for enterprise problems you don't have. You're funding a roadmap built for someone else.",
  },
  {
    icon: '🔁',
    headline: "Your team is doing work that should be automated",
    body: "Manual data entry, repetitive follow-ups, copy-pasting between apps — hours disappear into tasks a well-built system should handle without thinking.",
  },
  {
    icon: '🧩',
    headline: "Nothing talks to anything else",
    body: "Your CRM doesn't sync with your invoicing. Your forms don't update your pipeline. Your reports live in three different spreadsheets.",
  },
  {
    icon: '📉',
    headline: "You're making decisions on incomplete data",
    body: "When your systems aren't connected, your data isn't reliable. You're flying blind on the metrics that actually drive growth.",
  },
  {
    icon: '🔒',
    headline: "You're locked into platforms you don't own",
    body: "Platform changes, price hikes, and forced migrations happen — and there's nothing you can do. You're a tenant, not an owner.",
  },
  {
    icon: '🐢',
    headline: "Every 'solution' slows your team down",
    body: "New tools require new training. Your team adapts to the software instead of the software adapting to how your team actually works.",
  },
];

export default function ProblemSection() {
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.05);
  const [transitionRef, transitionVisible] = useScrollAnimation(0.2);

  return (
    <section className="problem section" id="problem">
      <div className="container">
        <div
          ref={headingRef}
          className={`problem__heading text-center fade-up${headingVisible ? ' visible' : ''}`}
        >
          <span className="overline">The Real Problem</span>
          <h2 className="problem__h2">
            You've Outgrown Generic Software.<br className="problem__br" />
            But You Can't Afford to Rebuild Everything.
          </h2>
          <p className="problem__intro">
            Most businesses are duct-taping five different platforms together and calling it a system.
            It's slow, expensive, and every tool speaks a different language. Sound familiar?
          </p>
        </div>

        <div
          ref={gridRef}
          className={`problem__grid stagger${gridVisible ? ' visible' : ''}`}
        >
          {PAIN_POINTS.map((p) => (
            <div key={p.headline} className={`problem__card fade-up${gridVisible ? ' visible' : ''}`}>
              <div className="problem__card-icon" aria-hidden="true">{p.icon}</div>
              <h3 className="problem__card-title">{p.headline}</h3>
              <p className="problem__card-body">{p.body}</p>
            </div>
          ))}
        </div>

        <div
          ref={transitionRef}
          className={`problem__transition fade-up${transitionVisible ? ' visible' : ''}`}
        >
          <div className="problem__transition-line" aria-hidden="true" />
          <p className="problem__transition-text">
            There's a better way.<br />
            <strong>One system. Built around your business. Owned by you.</strong>
          </p>
          <div className="problem__transition-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
