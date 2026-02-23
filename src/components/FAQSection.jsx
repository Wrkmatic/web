import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FAQSection.css';

const FAQS = [
  {
    q: 'How much does a custom CRM or automation system cost?',
    a: "Every system is scoped uniquely, so we don't publish fixed prices — but our custom solutions typically come in at a fraction of what businesses spend annually on multiple SaaS subscriptions. After your free strategy call, we'll give you a clear, itemised proposal with no hidden costs. Most clients recover their investment within the first 6 months.",
  },
  {
    q: 'How long does it take to build and launch?',
    a: "A core CRM with basic automation typically launches in 4–8 weeks. More complex systems with deep integrations take 8–16 weeks. We work in rapid sprints and give you staging access throughout, so you're never waiting blind.",
  },
  {
    q: 'Do I own the system after it\'s built?',
    a: "Yes — completely. You own the codebase, the database, and every line of automation logic. We hand over full documentation and access credentials at launch. There are no recurring licence fees or dependency on Wrkmatic to run your system.",
  },
  {
    q: 'Can you integrate with the tools we already use?',
    a: "Yes. We integrate with virtually any tool that has an API — including Gmail, Outlook, Xero, QuickBooks, Shopify, Stripe, Slack, WhatsApp, and most major platforms. If you have a tool you rely on, bring it up on the strategy call and we'll confirm compatibility.",
  },
  {
    q: 'What happens if something breaks after launch?',
    a: "We offer ongoing support and maintenance packages for all clients. In the immediate post-launch period, critical issues are resolved within 24 hours. We also provide documentation and training so your team can handle routine changes independently.",
  },
  {
    q: "We're not a tech company — will our team actually be able to use this?",
    a: "Every system we build is designed with your team's actual skill level in mind. We include onboarding sessions, user documentation, and a training walkthrough at launch. Most teams are fully self-sufficient within two weeks.",
  },
  {
    q: "What if our needs change after the system is launched?",
    a: "That's expected — and it's why we build on flexible, modular architecture. Any changes, additions, or new workflows can be scoped and added as your business evolves. You're never locked into a rigid version-one system.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
      <button
        className="faq__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq__question">{q}</span>
        <span className="faq__icon" aria-hidden="true">
          <span className="faq__icon-bar faq__icon-bar--h" />
          <span className="faq__icon-bar faq__icon-bar--v" />
        </span>
      </button>
      <div
        className="faq__content"
        style={{ maxHeight: isOpen ? '400px' : '0' }}
        aria-hidden={!isOpen}
      >
        <p className="faq__answer">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [listRef, listVisible] = useScrollAnimation(0.05);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div
          ref={headingRef}
          className={`faq__heading text-center fade-up${headingVisible ? ' visible' : ''}`}
        >
          <span className="overline">FAQs</span>
          <h2 className="faq__h2">Questions We Hear Before Every Strategy Call</h2>
          <p className="faq__intro">
            Straight answers. No hedging.
          </p>
        </div>

        <div
          ref={listRef}
          className={`faq__list fade-up${listVisible ? ' visible' : ''}`}
        >
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
