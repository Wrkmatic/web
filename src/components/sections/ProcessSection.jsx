import useScrollAnimation from '../../hooks/useScrollAnimation';

const STEPS = [
  {
    id:      'step-1',
    number:  '01',
    heading: 'Free consultation.',
    body:    "A 30–45 minute call to understand your business, map where it's breaking down, and work out whether we can help. No pitch, no pressure.",
  },
  {
    id:      'step-2',
    number:  '02',
    heading: 'Scoped proposal.',
    body:    'We come back with a fixed scope and a fixed price. One system, one problem, one clear outcome. No hourly billing, no surprises.',
  },
  {
    id:      'step-3',
    number:  '03',
    heading: 'Build and ship.',
    body:    'We build from scratch around your process. You get weekly updates and a working system you can test, tweak, and push back on — not a big-bang reveal at the end.',
  },
  {
    id:      'step-4',
    number:  '04',
    heading: 'Own it outright.',
    body:    "Everything we ship is yours — clean code, full ownership, full documentation. Ongoing support is optional, never locked in.",
  },
];

const ProcessSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="process section" aria-label="How we work">
      <div className="container">
        <div className="process__inner reveal" ref={ref}>

          <div className="process__intro">
            <span className="label process__eyebrow">How we work</span>
            <h2 className="process__headline">
              From first call to launch.
            </h2>
            <p className="process__lede">
              The same four steps for every project. Transparent, scoped, and built
              to move fast without cutting corners.
            </p>
          </div>

          <ol className="process__steps" role="list">
            {STEPS.map(({ id, number, heading, body }) => (
              <li key={id} className="process-step" role="listitem">
                <span className="process-step__number">{number}</span>
                <h3 className="process-step__heading">{heading}</h3>
                <p className="process-step__body">{body}</p>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
