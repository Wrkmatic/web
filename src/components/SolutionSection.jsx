import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './SolutionSection.css';

const PILLARS = [
  {
    id: 'crm',
    tab: 'Custom CRM',
    headline: 'A CRM That Works Exactly the Way You Do',
    bullets: [
      'Built around your sales process — not a generic pipeline template',
      'Tracks every customer interaction, deal stage, and follow-up automatically',
      'Surfaces the right data to the right person at the right moment',
      'Scales as your team grows without paying for seats you don\'t use',
      'You own the code. You own the data. Always.',
    ],
    outcome: 'Stop adapting to software. Your CRM should adapt to you.',
    icon: '🗂️',
    visual: [
      { label: 'Leads', value: '124', trend: '+18%', up: true },
      { label: 'Pipeline', value: '$284k', trend: '+34%', up: true },
      { label: 'Win Rate', value: '68%', trend: '+12%', up: true },
      { label: 'Avg Deal', value: '23d', trend: '-4d', up: true },
    ],
  },
  {
    id: 'automation',
    tab: 'AI Automation',
    headline: 'Let AI Handle the Work Your Team Shouldn\'t Be Doing',
    bullets: [
      'Automated lead capture, qualification, and routing — zero manual input',
      'Smart follow-up sequences triggered by real behaviour, not just time delays',
      'Internal approval workflows, task assignments, and notifications — all connected',
      'AI-powered data enrichment and deduplication across your entire system',
      'Saves 10–20 hours per team member, per week — from day one',
    ],
    outcome: 'Your team focuses on growth. The system handles everything else.',
    icon: '⚡',
    visual: [
      { label: 'Workflows', value: '47', trend: 'active', up: true },
      { label: 'Time Saved', value: '14h', trend: 'per week', up: true },
      { label: 'Error Rate', value: '0.2%', trend: '-98%', up: true },
      { label: 'Automations', value: '1.2k', trend: 'this month', up: true },
    ],
  },
  {
    id: 'integration',
    tab: 'System Integration',
    headline: 'Connect Every Tool Your Business Relies On',
    bullets: [
      'Seamless integration with existing tools: email, accounting, project management, e-commerce',
      'Custom APIs and webhooks that make every system talk to every other system',
      'Unified data layer so your reports are always accurate and real-time',
      'Web development that integrates directly into your operational backend',
      'One dashboard. Every business signal. Zero data silos.',
    ],
    outcome: 'Stop switching tabs. Start running a connected business.',
    icon: '🔗',
    visual: [
      { label: 'Integrations', value: '12', trend: 'connected', up: true },
      { label: 'Data Sync', value: '100%', trend: 'real-time', up: true },
      { label: 'API Calls', value: '4.8k', trend: 'daily', up: true },
      { label: 'Data Silos', value: '0', trend: 'eliminated', up: true },
    ],
  },
];

function PillarVisual({ visual }) {
  return (
    <div className="solution__visual">
      <div className="solution__stat-grid">
        {visual.map((s) => (
          <div key={s.label} className="solution__stat-card">
            <div className="solution__stat-value">{s.value}</div>
            <div className="solution__stat-label">{s.label}</div>
            <div className={`solution__stat-trend${s.up ? ' solution__stat-trend--up' : ''}`}>
              {s.trend}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SolutionSection() {
  const [active, setActive] = useState(0);
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [contentRef, contentVisible] = useScrollAnimation(0.05);

  const pillar = PILLARS[active];

  return (
    <section className="solution section" id="services">
      <div className="container">
        <div
          ref={headingRef}
          className={`solution__heading text-center fade-up${headingVisible ? ' visible' : ''}`}
        >
          <span className="overline">What We Build</span>
          <h2 className="solution__h2">
            One Intelligent System.<br />Three Core Capabilities.
          </h2>
          <p className="solution__intro">
            Wrkmatic doesn't bolt on AI as an afterthought. We architect your entire
            operational system from the ground up — then make it intelligent.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="solution__tabs" role="tablist" aria-label="Service pillars">
          {PILLARS.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`solution-panel-${p.id}`}
              className={`solution__tab${active === i ? ' solution__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="solution__tab-icon" aria-hidden="true">{p.icon}</span>
              <span>{p.tab}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          ref={contentRef}
          id={`solution-panel-${pillar.id}`}
          role="tabpanel"
          className={`solution__panel fade-up${contentVisible ? ' visible' : ''}`}
          key={active}
        >
          <div className="solution__panel-copy">
            <h3 className="solution__panel-headline">{pillar.headline}</h3>
            <ul className="solution__bullets">
              {pillar.bullets.map((b) => (
                <li key={b} className="solution__bullet">
                  <span className="solution__bullet-mark" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="solution__outcome">
              <span className="solution__outcome-bar" aria-hidden="true" />
              <p className="solution__outcome-text">{pillar.outcome}</p>
            </div>
          </div>

          <PillarVisual visual={pillar.visual} />
        </div>
      </div>
    </section>
  );
}
