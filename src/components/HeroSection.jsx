import { useEffect, useRef } from 'react';
import './HeroSection.css';

function MockPipelineCard() {
  const stages = [
    { name: 'New Leads', count: 12, pct: 80, color: '#6766E8' },
    { name: 'Qualified', count: 7,  pct: 58, color: '#4B4ACF' },
    { name: 'Proposal',  count: 4,  pct: 35, color: '#00BFA5' },
    { name: 'Won',       count: 2,  pct: 16, color: '#10B981' },
  ];

  return (
    <div className="mock-card mock-pipeline">
      <div className="mock-card-header">
        <span className="mock-card-title">Pipeline Overview</span>
        <span className="mock-live-badge">
          <span className="mock-live-dot" />
          Live
        </span>
      </div>
      <div className="mock-stages">
        {stages.map((s) => (
          <div key={s.name} className="mock-stage-row">
            <span className="mock-stage-name">{s.name}</span>
            <div className="mock-bar-bg">
              <div className="mock-bar-fill" style={{ width: s.pct + '%', background: s.color }} />
            </div>
            <span className="mock-stage-count">{s.count}</span>
          </div>
        ))}
      </div>
      <div className="mock-card-footer">
        <span className="mock-footer-stat">$124k total pipeline value</span>
      </div>
    </div>
  );
}

function MockAutomationCard() {
  const nodes = ['Lead In', 'Qualify', 'Email', 'CRM'];
  return (
    <div className="mock-card mock-automation">
      <div className="mock-card-header">
        <span className="mock-card-title">Automation</span>
        <span className="mock-status-tag mock-status-running">47 active</span>
      </div>
      <div className="mock-flow-row">
        {nodes.map((n, i) => (
          <div key={n} className="mock-flow-item">
            <div className="mock-flow-node">{n}</div>
            {i < nodes.length - 1 && <div className="mock-flow-arrow">→</div>}
          </div>
        ))}
      </div>
      <p className="mock-sub-stat">Last triggered: 2 min ago</p>
    </div>
  );
}

function MockIntegrationsCard() {
  const integrations = [
    { name: 'Gmail', color: '#EA4335' },
    { name: 'Stripe', color: '#635BFF' },
    { name: 'Xero',   color: '#13B5EA' },
    { name: 'Slack',  color: '#4A154B' },
  ];
  return (
    <div className="mock-card mock-integrations">
      <div className="mock-card-header">
        <span className="mock-card-title">Integrations</span>
      </div>
      {integrations.map((i) => (
        <div key={i.name} className="mock-integration-row">
          <div className="mock-integration-dot" style={{ background: i.color }} />
          <span className="mock-integration-name">{i.name}</span>
          <span className="mock-check">✓ Connected</span>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // trigger entrance immediately
    requestAnimationFrame(() => {
      el.querySelectorAll('.hero-animate').forEach((item, i) => {
        setTimeout(() => item.classList.add('hero-visible'), i * 120);
      });
    });
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__bg-blob" aria-hidden="true" />
      <div className="hero__bg-dots" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left: Copy */}
        <div className="hero__copy">
          <div className="hero-animate hero__chip">
            <span className="hero__chip-dot" />
            AI-Powered Business Systems
          </div>

          <h1 className="hero-animate hero__headline">
            Your Business<br />
            Runs on Broken<br />
            Systems.<br />
            <span className="hero__headline-accent">We Fix That —<br className="hero__headline-br" /> Permanently.</span>
          </h1>

          <p className="hero-animate hero__sub">
            Wrkmatic builds custom CRMs, AI automation workflows, and
            integrated business systems — engineered specifically for your
            operations. No bloated platforms. No generic templates.
            Just systems that actually work.
          </p>

          <p className="hero-animate hero__trust">
            Trusted by forward-thinking SMEs to replace costly off-the-shelf
            tools with intelligent, tailored solutions.
          </p>

          <div className="hero-animate hero__ctas">
            <button className="btn btn--filled hero__cta-primary" onClick={() => scrollTo('contact')}>
              Book a Free Strategy Call
            </button>
            <button className="btn btn--outlined" onClick={() => scrollTo('how-it-works')}>
              See How It Works ↓
            </button>
          </div>

          <p className="hero-animate hero__microcopy">
            No commitment. 30 minutes. Walk away with a clear system roadmap.
          </p>
        </div>

        {/* Right: Mock UI Cards */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__cards">
            <div className="hero-animate hero__card-1">
              <MockPipelineCard />
            </div>
            <div className="hero-animate hero__card-2">
              <MockAutomationCard />
            </div>
            <div className="hero-animate hero__card-3">
              <MockIntegrationsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
