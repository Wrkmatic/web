import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ImagePlaceholder from '../components/placeholders/ImagePlaceholder';

const SERVICES = [
  {
    id:        'ai-automation',
    label:     'AI Automation Systems',
    headline:  'Cut the manual work. Keep the results.',
    body: [
      `Most businesses are sitting on a goldmine of time they don't know they're
       wasting. Chasing approvals. Re-entering data. Sending the same emails.
       Running reports by hand. None of it needs a human — it just hasn't been
       automated yet.`,
      `We come in, map out exactly where your team's time is going, and build
       systems that handle the repetitive work automatically. Not with a plug-in
       or an off-the-shelf tool — with automation built specifically for how your
       business operates.`,
    ],
    features: [
      'Automated workflows between your tools and teams',
      'AI-powered data processing and reporting',
      'Client onboarding and follow-up sequences',
      'Internal task routing and approvals',
      "Custom integrations between systems that don't talk to each other",
    ],
    bottomLine: 'Your team stops doing the work a system should be doing. They start doing the work only they can do.',
  },
  {
    id:        'custom-software',
    label:     'Custom Software',
    headline:  'Software that fits your business. Not the other way around.',
    body: [
      `Off-the-shelf software is built for the average business. If you've ever
       found yourself saying 'we just work around that bit' or 'we had to change
       our process to fit the tool' — that's the problem.`,
      `We build software from scratch that fits the way your business actually
       runs. Your processes, your data, your team. No unnecessary features bloating
       the system. No missing functionality you have to patch with spreadsheets.
       Just clean, purposeful software that does exactly what you need it to do.`,
    ],
    features: [
      'Custom CRMs built around your sales process',
      'Internal management and operations tools',
      'Client portals and dashboards',
      'Booking, scheduling and workflow systems',
      "Any software your business needs that doesn't exist yet",
    ],
    bottomLine: "If you've been making do with tools that almost work — this is what almost work actually costs you.",
  },
  {
    id:        'lead-generation',
    label:     'Lead Generation Systems',
    headline:  'A steady pipeline of the right people.',
    body: [
      `Lead generation breaks down in one of two ways — either there aren't
       enough leads coming in, or the ones that are coming in aren't worth chasing.
       Both problems cost you time and money.`,
      `We build lead generation systems that fix both. Finding the right prospects,
       qualifying them automatically and delivering them straight into your pipeline
       — so your sales team spends their time on conversations that actually go
       somewhere.`,
      `And because we build it as a system rather than a campaign, it keeps
       working. Not a one-off push that fades out after a month.`,
    ],
    features: [
      'Automated outbound prospecting and outreach',
      'Lead capture and qualification systems',
      'CRM integration so leads land exactly where they should',
      "Follow-up sequences that nurture until they're ready",
      "Reporting so you always know what's working",
    ],
    bottomLine: "Your pipeline should be filling itself. If it isn't, that's what we fix.",
  },
];

const ServiceDetail = ({ service, index }) => {
  const ref = useScrollAnimation();
  const isAlt = index % 2 !== 0;

  return (
    <section
      id={service.id}
      className={`service-detail section ${isAlt ? 'service-detail--alt' : 'service-detail--base'}`}
      aria-label={service.label}
    >
      <div className="container">
        <div className="service-detail__inner reveal" ref={ref}>

          {/* Content */}
          <div className="service-detail__content">
            <span className="label service-detail__label">{service.label}</span>
            <h2 className="service-detail__headline">{service.headline}</h2>

            <div className="service-detail__body">
              {service.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <p className="service-detail__practice-label">
              What this looks like in practice
            </p>
            <ul className="service-detail__features" role="list">
              {service.features.map((f, i) => (
                <li key={i} className="service-detail__feature">{f}</li>
              ))}
            </ul>

            <p className="service-detail__bottom-line">{service.bottomLine}</p>
          </div>

          {/* Visual placeholder */}
          <div className="service-detail__visual">
            <div className="service-detail__image-placeholder">
              <ImagePlaceholder
                id={`service-img-${service.id}`}
                aspectRatio="4/3"
                label={`[${service.label} illustration]`}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const ctaRef = useScrollAnimation();

  return (
    <main>
      {/* Page hero */}
      <section className="page-hero page-hero--light" aria-label="Services page header">
        <div className="container">
          <span className="label page-hero__label">Services</span>
          <h1 className="page-hero__headline page-hero__headline--dark">
            What we build — and how we build it.
          </h1>
          <p className="page-hero__sub page-hero__sub--dark">
            Every project starts with understanding your business. What we build
            after that depends entirely on what you need.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      {SERVICES.map((service, index) => (
        <ServiceDetail key={service.id} service={service} index={index} />
      ))}

      {/* Page CTA */}
      <section className="services-page-cta section" aria-label="Get started">
        <div className="container">
          <div className="services-page-cta__inner reveal" ref={ctaRef}>
            <h2 className="services-page-cta__headline">
              Not sure which service fits your situation?
            </h2>
            <p className="services-page-cta__body">
              Most clients come to us knowing something is broken but not knowing
              exactly what to build. That's what the first call is for.
            </p>
            <div>
              <Link to="/contact" className="btn btn-glass">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
