import { useEffect, useRef, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CALENDLY_URL = 'https://calendly.com/wrkmatic';
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgawypr';

const STEPS = [
  {
    id:      'step-1',
    number:  '01',
    heading: 'You tell us about your business.',
    body:    "Where things are working, where they aren't, and what you're trying to fix or build.",
  },
  {
    id:      'step-2',
    number:  '02',
    heading: 'We ask the right questions.',
    body:    'We dig into your processes, your tools and your goals so we actually understand what you need before we suggest anything.',
  },
  {
    id:      'step-3',
    number:  '03',
    heading: 'You leave with clarity.',
    body:    "Whether we work together or not, you'll finish the call knowing exactly what needs to change and how to approach it.",
  },
];

const ContactPage = () => {
  const actionsRef  = useScrollAnimation();
  const stepsRef    = useScrollAnimation();
  const calendlyRef = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  useEffect(() => {
    const init = () => {
      if (!window.Calendly || !calendlyRef.current) return;
      calendlyRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: calendlyRef.current,
      });
    };

    if (window.Calendly) { init(); return; }

    let script = document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener('load', init);
    return () => script.removeEventListener('load', init);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: '' });
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus({ state: 'success', message: "Thanks — we'll be in touch within one business day." });
        e.target.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({
          state: 'error',
          message: data?.errors?.[0]?.message || 'Something went wrong. Please email hello@wrkmatic.com.',
        });
      }
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please email hello@wrkmatic.com.' });
    }
  };

  return (
    <main>

      {/* Combined header + two equal paths */}
      <section className="contact-actions" aria-label="Book a call or send a message">
        <div className="container">

          <div className="contact-actions__intro">
            <span className="label contact-actions__eyebrow">Contact</span>
            <h1 className="contact-actions__title">Get in touch.</h1>
            <p className="contact-actions__lede">
              Two ways to start — book a call or send a message. Either way, no
              pitch, no pressure.
            </p>
          </div>

          <div className="contact-actions__grid reveal" ref={actionsRef}>

            {/* Book a call */}
            <div className="contact-action">
              <span className="label contact-action__label">Book a call</span>
              <h2 className="contact-action__heading">Pick a time.</h2>
              <p className="contact-action__sub">
                Calls run 30–45 minutes. We'll ask about your business, and you'll
                leave with a clear sense of what to do next.
              </p>
              <div
                ref={calendlyRef}
                className="contact-embed"
                aria-label="Book a consultation with Wrkmatic"
              />
              <p className="contact-embed__fallback">
                Widget not loading?{' '}
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Open the booking page →
                </a>
              </p>
            </div>

            {/* Send a message */}
            <div className="contact-action">
              <span className="label contact-action__label">Send a message</span>
              <h2 className="contact-action__heading">Drop us a line.</h2>
              <p className="contact-action__sub">
                Prefer writing? Tell us what you're trying to fix or build and we'll
                reply within one business day.
              </p>
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="form-field">
                  <label htmlFor="full-name">Your name</label>
                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email-address">Email</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="company-name">
                    Company <span className="form-field__optional">(optional)</span>
                  </label>
                  <input
                    id="company-name"
                    name="company"
                    type="text"
                    autoComplete="organization"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="project-details">
                    What are you trying to fix or build?
                  </label>
                  <textarea
                    id="project-details"
                    name="message"
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status.state === 'submitting'}
                  >
                    {status.state === 'submitting' ? 'Sending…' : 'Send message'}
                  </button>
                  {status.state !== 'idle' && status.message && (
                    <p
                      className={`contact-form__status contact-form__status--${status.state}`}
                      role={status.state === 'error' ? 'alert' : 'status'}
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* What to expect on the call */}
      <section className="how-it-works section" aria-label="What to expect on the call">
        <div className="container reveal" ref={stepsRef}>
          <h2 className="how-it-works__headline">What to expect on the call.</h2>
          <div className="steps" role="list">
            {STEPS.map(({ id, number, heading, body }) => (
              <div key={id} className="step" role="listitem">
                <span className="step__number">{number}</span>
                <h3 className="step__heading">{heading}</h3>
                <p className="step__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slim details bar */}
      <section className="contact-details-bar" aria-label="Contact details">
        <div className="container">
          <div className="contact-details-bar__grid">
            <div>
              <p className="contact-detail__heading">Email</p>
              <p className="contact-detail__value">
                <a href="mailto:hello@wrkmatic.com">hello@wrkmatic.com</a>
              </p>
            </div>
            <div>
              <p className="contact-detail__heading">Based in</p>
              <p className="contact-detail__value">
                Manchester, UK — working across the UK.
              </p>
            </div>
            <div>
              <p className="contact-detail__heading">Response time</p>
              <p className="contact-detail__value">Within one business day.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
