import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './DifferentiationSection.css';

const ROWS = [
  {
    feature: 'Built for your workflows',
    theirs: 'Generic templates only',
    ours: 'Engineered for your exact process',
    theirsBad: true,
  },
  {
    feature: 'Pricing model',
    theirs: 'Per-seat, monthly, forever',
    ours: 'Fixed project investment — you own it',
    theirsBad: true,
  },
  {
    feature: 'Data ownership',
    theirs: 'Platform owns your data',
    ours: 'You own everything, always',
    theirsBad: true,
  },
  {
    feature: 'AI automation',
    theirs: 'Add-on, extra cost, limited',
    ours: 'Built in from day one',
    theirsBad: true,
  },
  {
    feature: 'Integration capability',
    theirs: 'Marketplace plugins only',
    ours: 'Custom API — any system',
    theirsBad: true,
  },
  {
    feature: 'Flexibility to change',
    theirs: 'Constrained by platform limits',
    ours: 'Unlimited — it\'s your codebase',
    theirsBad: true,
  },
  {
    feature: 'Vendor lock-in',
    theirs: 'High',
    ours: 'None',
    theirsBad: true,
  },
  {
    feature: 'Ongoing cost',
    theirs: 'Recurring, increases with growth',
    ours: 'Predictable, scales on your terms',
    theirsBad: true,
  },
  {
    feature: 'Time to value',
    theirs: 'Weeks of setup + configuration',
    ours: 'Delivered fully operational',
    theirsBad: true,
  },
];

export default function DifferentiationSection() {
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [tableRef, tableVisible] = useScrollAnimation(0.05);
  const [posRef, posVisible] = useScrollAnimation(0.2);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="diff section" id="why-wrkmatic">
      <div className="container">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`diff__heading text-center fade-up${headingVisible ? ' visible' : ''}`}
        >
          <span className="overline">Why Wrkmatic</span>
          <h2 className="diff__h2">Built for Your Business. Not Theirs.</h2>
          <p className="diff__intro">
            Off-the-shelf CRM platforms are built to serve millions of businesses.
            That means they're designed for no one in particular.
            Here's what that actually costs you.
          </p>
        </div>

        {/* Comparison table */}
        <div
          ref={tableRef}
          className={`diff__table-wrap fade-up${tableVisible ? ' visible' : ''}`}
        >
          <div className="diff__table" role="table" aria-label="Feature comparison">
            {/* Header */}
            <div className="diff__table-head" role="row">
              <div className="diff__col diff__col--feature" role="columnheader">Feature</div>
              <div className="diff__col diff__col--theirs" role="columnheader">
                <span className="diff__col-label">Off-the-Shelf CRM</span>
                <span className="diff__col-sub">HubSpot, Salesforce, etc.</span>
              </div>
              <div className="diff__col diff__col--ours" role="columnheader">
                <span className="diff__col-label diff__col-label--ours">Wrkmatic</span>
                <span className="diff__col-sub diff__col-sub--ours">Custom-built for you</span>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`diff__table-row${i % 2 === 0 ? ' diff__table-row--alt' : ''}`}
                role="row"
              >
                <div className="diff__col diff__col--feature" role="cell">
                  <span className="diff__feature-name">{row.feature}</span>
                </div>
                <div className="diff__col diff__col--theirs" role="cell">
                  <span className="diff__icon diff__icon--bad" aria-hidden="true">✗</span>
                  <span className="diff__cell-text diff__cell-text--bad">{row.theirs}</span>
                </div>
                <div className="diff__col diff__col--ours" role="cell">
                  <span className="diff__icon diff__icon--good" aria-hidden="true">✓</span>
                  <span className="diff__cell-text diff__cell-text--good">{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Positioning statement */}
        <div
          ref={posRef}
          className={`diff__positioning fade-up${posVisible ? ' visible' : ''}`}
        >
          <div className="diff__pos-card">
            <div className="diff__pos-left" aria-hidden="true">
              <span className="diff__pos-icon">💡</span>
            </div>
            <div className="diff__pos-content">
              <p className="diff__pos-text">
                Off-the-shelf software is a rental.<br />
                <strong>Wrkmatic is an asset.</strong>
              </p>
              <p className="diff__pos-sub">
                You stop paying to use someone else's system and start owning one built for yours.
              </p>
            </div>
            <button
              className="btn btn--filled diff__pos-cta"
              onClick={() => scrollTo('contact')}
            >
              Book a Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
