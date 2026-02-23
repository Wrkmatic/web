import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './SocialProofSection.css';

const STATS = [
  { value: '14hrs', label: 'Average time saved per team member', sub: 'per week via automation' },
  { value: '62%',  label: 'Reduction in software licensing costs', sub: 'after replacing off-the-shelf stack' },
  { value: '6wks', label: 'Average time to live system', sub: 'strategy call → full deployment' },
];

const TESTIMONIALS = [
  {
    quote:
      "We were paying for Salesforce, HubSpot, Zapier, and two other tools that barely talked to each other. Wrkmatic replaced the entire stack with one system for less than we were paying monthly. Our pipeline accuracy went from guesswork to real-time.",
    author: 'James M.',
    role: 'Operations Director',
    company: 'B2B Services Firm',
    initial: 'JM',
    color: '#4B4ACF',
  },
  {
    quote:
      "The automation alone saved my team from drowning. Lead routing, follow-ups, internal approvals — it all just happens now. We've onboarded 40% more clients without adding headcount.",
    author: 'Sarah K.',
    role: 'Founder',
    company: 'Growth Agency',
    initial: 'SK',
    color: '#00BFA5',
  },
  {
    quote:
      "I've worked with 'AI consultants' before who delivered dashboards and spreadsheets. Wrkmatic actually built something our team uses every day. The CRM is faster, simpler, and exactly how we work.",
    author: 'David R.',
    role: 'CEO',
    company: 'Professional Services SME',
    initial: 'DR',
    color: '#7C3AED',
  },
];

const CASE_STUDY = {
  client: 'Logistics & Field Service Company',
  size: '35-person team',
  problem: 'Disconnected job scheduling, billing, and client communication across 4 separate tools.',
  solution: 'Custom CRM with automated job dispatch, client updates, invoice generation, and team reporting — all in one system.',
  results: [
    'Manual admin time reduced by 18 hours/week across the team',
    'Invoice-to-payment cycle cut from 14 days to 3 days',
    'Zero data entry errors in first 60 days post-launch',
  ],
};

export default function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.05);
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation(0.05);
  const [caseRef, caseVisible] = useScrollAnimation(0.1);

  const prev = () => setActiveIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  const t = TESTIMONIALS[activeIndex];

  return (
    <section className="proof section" id="social-proof">
      <div className="container">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`proof__heading text-center fade-up${headingVisible ? ' visible' : ''}`}
        >
          <span className="overline">Results</span>
          <h2 className="proof__h2">
            Businesses That Stopped Settling<br className="proof__br" /> for Generic Software
          </h2>
        </div>

        {/* Stat cards */}
        <div
          ref={statsRef}
          className={`proof__stats stagger${statsVisible ? ' visible' : ''}`}
        >
          {STATS.map((s) => (
            <div key={s.label} className={`proof__stat-card card fade-up${statsVisible ? ' visible' : ''}`}>
              <div className="proof__stat-value">{s.value}</div>
              <div className="proof__stat-label">{s.label}</div>
              <div className="proof__stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonial carousel */}
        <div
          ref={testimonialsRef}
          className={`proof__carousel fade-up${testimonialsVisible ? ' visible' : ''}`}
        >
          <div className="proof__testimonial-card card--elevated card" key={activeIndex}>
            {/* Quote marks */}
            <div className="proof__quote-mark" aria-hidden="true">"</div>

            <blockquote className="proof__quote">{t.quote}</blockquote>

            <div className="proof__author">
              <div
                className="proof__author-avatar"
                style={{ background: t.color }}
                aria-hidden="true"
              >
                {t.initial}
              </div>
              <div>
                <div className="proof__author-name">{t.author}</div>
                <div className="proof__author-role">
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="proof__controls">
            <button
              className="proof__nav-btn"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="proof__dots" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  className={`proof__dot${i === activeIndex ? ' proof__dot--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="proof__nav-btn"
              onClick={next}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Case study */}
        <div
          ref={caseRef}
          className={`proof__case card--outlined card fade-up${caseVisible ? ' visible' : ''}`}
        >
          <div className="proof__case-header">
            <span className="overline">Case Study</span>
            <div className="proof__case-meta">
              <strong>{CASE_STUDY.client}</strong>
              <span className="proof__case-size">{CASE_STUDY.size}</span>
            </div>
          </div>

          <div className="proof__case-body">
            <div className="proof__case-col">
              <h4 className="proof__case-label">Problem</h4>
              <p className="proof__case-text">{CASE_STUDY.problem}</p>
            </div>
            <div className="proof__case-divider" aria-hidden="true" />
            <div className="proof__case-col">
              <h4 className="proof__case-label">Solution</h4>
              <p className="proof__case-text">{CASE_STUDY.solution}</p>
            </div>
            <div className="proof__case-divider" aria-hidden="true" />
            <div className="proof__case-col">
              <h4 className="proof__case-label">Results</h4>
              <ul className="proof__case-results">
                {CASE_STUDY.results.map((r) => (
                  <li key={r} className="proof__case-result">
                    <span className="proof__result-check" aria-hidden="true">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
