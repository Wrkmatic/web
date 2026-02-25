import useScrollAnimation from '../hooks/useScrollAnimation';

const STEPS = [
  {
    id:      'step-1',
    number:  '01',
    label:   'You tell us about your business',
    heading: 'You tell us about your business.',
    body:    "Where things are working, where they aren't, and what you're trying to fix or build.",
  },
  {
    id:      'step-2',
    number:  '02',
    label:   'We ask the right questions',
    heading: 'We ask the right questions.',
    body:    'We dig into your processes, your tools and your goals so we actually understand what you need before we suggest anything.',
  },
  {
    id:      'step-3',
    number:  '03',
    label:   'You leave with clarity',
    heading: 'You leave with clarity.',
    body:    "Whether we work together or not, you'll finish the call knowing exactly what needs to change and how to approach it.",
  },
];

const ContactPage = () => {
  const stepsRef = useScrollAnimation();
  const formRef  = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to form service (Formspree, Resend, etc.)
  };

  return (
    <main>

      {/* Page hero */}
      <section className="page-hero page-hero--light" aria-label="Contact page header">
        <div className="container">
          <span className="label page-hero__label">Contact</span>
          <h1 className="page-hero__headline page-hero__headline--dark">
            Let's talk about your business.
          </h1>
          <p className="page-hero__sub page-hero__sub--dark">
            No sales pitch. No obligation. Just a straight conversation about where
            you are, what you need, and whether Wrkmatic can help.
          </p>
        </div>
      </section>

      {/* How the call works */}
      <section className="how-it-works section" aria-label="How the call works">
        <div className="container reveal" ref={stepsRef}>

          <h2 className="how-it-works__headline">
            Here's how the call works.
          </h2>

          <div className="steps" role="list">
            {STEPS.map(({ id, number, label, heading, body }) => (
              <div key={id} className="step" role="listitem">
                <span className="step__number">{number}</span>
                <span className="step__label">{label}</span>
                <h3 className="step__heading">{heading}</h3>
                <p className="step__body">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact form + sidebar */}
      <section
        className="contact-form-section section"
        aria-label="Send us a message"
      >
        <div className="container">
          <div className="contact-layout reveal" ref={formRef}>

            {/* ── Form column ── */}
            <div>
              <h2 className="contact-form-col__heading">
                Send us a message.
              </h2>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="form-field">
                  <label htmlFor="full-name">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email-address">Email Address <span aria-hidden="true">*</span></label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="company-name">Company Name</label>
                  <input
                    id="company-name"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    autoComplete="organization"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service-interest">Service Interest</label>
                  <select id="service-interest" name="service">
                    <option value="">Select a service</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="project-details">Tell us about your project</label>
                  <textarea
                    id="project-details"
                    name="message"
                    rows={5}
                    placeholder="Describe what you're trying to fix or build..."
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="how-heard">How did you hear about us?</label>
                  <select id="how-heard" name="source">
                    <option value="">Select an option</option>
                    <option value="search">Search engine</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                  <p className="contact-form__or" style={{ marginTop: '1rem' }}>
                    Or book directly below.
                  </p>
                </div>
              </form>
            </div>

            {/* ── Sidebar ── */}
            <div className="contact-sidebar">

              {/* Calendly embed placeholder */}
              <div>
                <h3 className="contact-sidebar__heading">
                  Book your free consultation.
                </h3>
                <p className="contact-sidebar__body">
                  Pick a time that works for you. Calls typically run 30 to 45
                  minutes.
                </p>
                {/* Replace this div with your Calendly / Cal.com inline widget */}
                <div
                  className="contact-embed"
                  aria-label="Calendar booking — replace with Calendly embed"
                >
                  [Calendar embed — e.g. Calendly]
                </div>
              </div>

              {/* Contact details */}
              <div>
                <p className="contact-detail__heading">Email</p>
                <p className="contact-detail__value">
                  <a href="mailto:hello@wrkmatic.com">hello@wrkmatic.com</a>
                </p>

                <p className="contact-detail__heading">Based in</p>
                <p className="contact-detail__value">
                  Manchester, UK. Working with businesses across the UK.
                </p>

                <p className="contact-trust">
                  We respond to every enquiry within one business day.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
