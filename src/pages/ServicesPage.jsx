import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

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

/* ── Inline SVG illustrations ── */

const AIAutomationSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" className="service-svg">
    {/* Input nodes (left column) */}
    <rect x="10" y="60" width="72" height="44" rx="7"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.05)" opacity="0.7" />
    <rect x="22" y="75" width="48" height="8" rx="4" fill="#0071E3" opacity="0.35" />
    <rect x="22" y="89" width="36" height="6" rx="3" fill="#0071E3" opacity="0.2" />

    <rect x="10" y="128" width="72" height="44" rx="7"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.05)" opacity="0.7" />
    <rect x="22" y="143" width="48" height="8" rx="4" fill="#0071E3" opacity="0.35" />
    <rect x="22" y="157" width="36" height="6" rx="3" fill="#0071E3" opacity="0.2" />

    <rect x="10" y="196" width="72" height="44" rx="7"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.05)" opacity="0.7" />
    <rect x="22" y="211" width="48" height="8" rx="4" fill="#0071E3" opacity="0.35" />
    <rect x="22" y="225" width="36" height="6" rx="3" fill="#0071E3" opacity="0.2" />

    {/* Arrows: inputs → AI Core */}
    <line x1="82" y1="82" x2="148" y2="148" stroke="#0071E3" strokeWidth="1.25" opacity="0.4" strokeDasharray="4 3" />
    <line x1="82" y1="150" x2="148" y2="150" stroke="#0071E3" strokeWidth="1.25" opacity="0.4" strokeDasharray="4 3" />
    <line x1="82" y1="218" x2="148" y2="152" stroke="#0071E3" strokeWidth="1.25" opacity="0.4" strokeDasharray="4 3" />

    {/* AI Core — central larger node */}
    <rect x="148" y="96" width="104" height="108" rx="10"
      stroke="#0071E3" strokeWidth="2" fill="rgba(0,113,227,0.08)" opacity="0.9" />
    {/* Grid inside AI core */}
    <rect x="164" y="114" width="72" height="72" rx="5"
      stroke="#0071E3" strokeWidth="1" fill="rgba(0,113,227,0.05)" opacity="0.6" />
    <line x1="164" y1="138" x2="236" y2="138" stroke="#0071E3" strokeWidth="0.75" opacity="0.3" />
    <line x1="164" y1="162" x2="236" y2="162" stroke="#0071E3" strokeWidth="0.75" opacity="0.3" />
    <line x1="188" y1="114" x2="188" y2="186" stroke="#0071E3" strokeWidth="0.75" opacity="0.3" />
    <line x1="212" y1="114" x2="212" y2="186" stroke="#0071E3" strokeWidth="0.75" opacity="0.3" />
    {/* Highlight dot */}
    <circle cx="188" cy="138" r="5" fill="#0071E3" opacity="0.55" />

    {/* Arrows: AI Core → outputs */}
    <line x1="252" y1="128" x2="308" y2="88" stroke="#0071E3" strokeWidth="1.25" opacity="0.5" />
    <polygon points="304,82 314,90 303,94" fill="#0071E3" opacity="0.5" />

    <line x1="252" y1="150" x2="308" y2="150" stroke="#0071E3" strokeWidth="1.25" opacity="0.5" />
    <polygon points="305,145 315,150 305,155" fill="#0071E3" opacity="0.5" />

    <line x1="252" y1="172" x2="308" y2="212" stroke="#0071E3" strokeWidth="1.25" opacity="0.5" />
    <polygon points="304,208 314,216 303,220" fill="#0071E3" opacity="0.5" />

    {/* Output nodes (right column) */}
    <rect x="316" y="58" width="72" height="44" rx="7"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.06)" opacity="0.8" />
    <rect x="328" y="73" width="48" height="8" rx="4" fill="#0071E3" opacity="0.4" />
    <rect x="328" y="87" width="36" height="6" rx="3" fill="#0071E3" opacity="0.2" />

    <rect x="316" y="128" width="72" height="44" rx="7"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.06)" opacity="0.8" />
    <rect x="328" y="143" width="48" height="8" rx="4" fill="#0071E3" opacity="0.4" />
    <rect x="328" y="157" width="36" height="6" rx="3" fill="#0071E3" opacity="0.2" />

    <rect x="316" y="198" width="72" height="44" rx="7"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.06)" opacity="0.8" />
    <rect x="328" y="213" width="48" height="8" rx="4" fill="#0071E3" opacity="0.4" />
    <rect x="328" y="227" width="36" height="6" rx="3" fill="#0071E3" opacity="0.2" />
  </svg>
);

const CustomSoftwareSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" className="service-svg">
    {/* Window frame */}
    <rect x="16" y="16" width="368" height="268" rx="9"
      stroke="#0071E3" strokeWidth="1.5" opacity="0.35" />

    {/* Title bar */}
    <rect x="16" y="16" width="368" height="38" rx="9"
      stroke="#0071E3" strokeWidth="1" fill="rgba(0,113,227,0.05)" opacity="0.6" />
    <circle cx="38" cy="35" r="4.5" stroke="#0071E3" strokeWidth="1.5" opacity="0.5" />
    <circle cx="54" cy="35" r="4.5" stroke="#0071E3" strokeWidth="1.5" opacity="0.5" />
    <circle cx="70" cy="35" r="4.5" stroke="#0071E3" strokeWidth="1.5" opacity="0.5" />

    {/* Tab */}
    <rect x="96" y="22" width="64" height="20" rx="4"
      fill="rgba(0,113,227,0.1)" stroke="#0071E3" strokeWidth="1" opacity="0.5" />
    <rect x="168" y="22" width="52" height="20" rx="4"
      stroke="#0071E3" strokeWidth="1" opacity="0.2" />

    {/* Sidebar */}
    <rect x="16" y="54" width="88" height="230"
      stroke="#0071E3" strokeWidth="1" fill="rgba(0,113,227,0.04)" opacity="0.4" />

    {/* Sidebar items */}
    <rect x="28" y="72" width="64" height="9" rx="4.5" fill="#0071E3" opacity="0.4" />
    <rect x="28" y="93" width="54" height="9" rx="4.5" fill="#0071E3" opacity="0.22" />
    <rect x="28" y="114" width="60" height="9" rx="4.5" fill="#0071E3" opacity="0.22" />
    <rect x="28" y="135" width="48" height="9" rx="4.5" fill="#0071E3" opacity="0.18" />
    <line x1="28" y1="162" x2="88" y2="162" stroke="#0071E3" strokeWidth="0.75" opacity="0.15" />
    <rect x="28" y="174" width="52" height="9" rx="4.5" fill="#0071E3" opacity="0.15" />
    <rect x="28" y="195" width="44" height="9" rx="4.5" fill="#0071E3" opacity="0.12" />

    {/* Main content */}
    {/* Top stat row */}
    <rect x="114" y="62" width="78" height="52" rx="6"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.04)" opacity="0.7" />
    <rect x="204" y="62" width="78" height="52" rx="6"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.04)" opacity="0.7" />
    <rect x="294" y="62" width="74" height="52" rx="6"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.04)" opacity="0.7" />
    <rect x="126" y="76" width="40" height="14" rx="3" fill="#0071E3" opacity="0.4" />
    <rect x="216" y="76" width="40" height="14" rx="3" fill="#0071E3" opacity="0.4" />
    <rect x="306" y="76" width="40" height="14" rx="3" fill="#0071E3" opacity="0.4" />
    <rect x="126" y="97" width="54" height="7" rx="3.5" fill="#0071E3" opacity="0.2" />
    <rect x="216" y="97" width="54" height="7" rx="3.5" fill="#0071E3" opacity="0.2" />
    <rect x="306" y="97" width="50" height="7" rx="3.5" fill="#0071E3" opacity="0.2" />

    {/* Table header */}
    <rect x="114" y="126" width="254" height="30" rx="5"
      fill="rgba(0,113,227,0.07)" stroke="#0071E3" strokeWidth="1" opacity="0.5" />
    <rect x="126" y="135" width="50" height="8" rx="4" fill="#0071E3" opacity="0.35" />
    <rect x="210" y="135" width="40" height="8" rx="4" fill="#0071E3" opacity="0.25" />
    <rect x="298" y="135" width="40" height="8" rx="4" fill="#0071E3" opacity="0.25" />

    {/* Table rows */}
    {[166, 192, 218, 244].map((y) => (
      <g key={y}>
        <line x1="114" y1={y} x2="368" y2={y}
          stroke="#0071E3" strokeWidth="0.75" opacity="0.12" />
        <rect x="126" y={y + 7} width="44" height="7" rx="3.5" fill="#0071E3" opacity="0.2" />
        <rect x="210" y={y + 7} width="34" height="7" rx="3.5" fill="#0071E3" opacity="0.15" />
        <rect x="298" y={y + 7} width="40" height="7" rx="3.5" fill="#0071E3" opacity="0.15" />
      </g>
    ))}
  </svg>
);

const LeadGenerationSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" className="service-svg">
    {/* Prospect dots flowing in (top) */}
    {[60, 100, 140, 180, 220, 260, 300, 340].map((x, i) => (
      <circle key={x} cx={x} cy={22} r={5}
        stroke="#0071E3" strokeWidth="1.5" opacity={0.15 + i * 0.03} />
    ))}
    {/* Down arrows from dots */}
    {[80, 140, 200, 260, 320].map((x) => (
      <line key={x} x1={x} y1={30} x2={x} y2={46}
        stroke="#0071E3" strokeWidth="1" opacity="0.2" />
    ))}

    {/* Stage 1 — Awareness (wide) */}
    <polygon points="60,50 340,50 310,110 90,110"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.06)" opacity="0.75" />
    <rect x="160" y="72" width="80" height="9" rx="4.5" fill="#0071E3" opacity="0.35" />
    <rect x="175" y="87" width="50" height="7" rx="3.5" fill="#0071E3" opacity="0.2" />

    {/* Gap line */}
    <line x1="90" y1="114" x2="310" y2="114" stroke="#0071E3" strokeWidth="0.75" opacity="0.15" />

    {/* Stage 2 — Qualification */}
    <polygon points="90,118 310,118 274,178 126,178"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.07)" opacity="0.8" />
    <rect x="158" y="138" width="84" height="9" rx="4.5" fill="#0071E3" opacity="0.35" />
    <rect x="170" y="153" width="60" height="7" rx="3.5" fill="#0071E3" opacity="0.22" />

    {/* Gap line */}
    <line x1="126" y1="182" x2="274" y2="182" stroke="#0071E3" strokeWidth="0.75" opacity="0.15" />

    {/* Stage 3 — Conversion (narrow) */}
    <polygon points="126,186 274,186 240,246 160,246"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.09)" opacity="0.85" />
    <rect x="158" y="204" width="84" height="9" rx="4.5" fill="#0071E3" opacity="0.4" />
    <rect x="170" y="219" width="60" height="7" rx="3.5" fill="#0071E3" opacity="0.25" />

    {/* Arrow at base */}
    <line x1="200" y1="250" x2="200" y2="268"
      stroke="#0071E3" strokeWidth="1.5" opacity="0.5" />
    <polygon points="193,264 200,274 207,264" fill="#0071E3" opacity="0.5" />

    {/* Output badge */}
    <rect x="142" y="276" width="116" height="18" rx="9"
      stroke="#0071E3" strokeWidth="1.5" fill="rgba(0,113,227,0.1)" opacity="0.8" />
    <rect x="166" y="281" width="68" height="8" rx="4" fill="#0071E3" opacity="0.4" />

    {/* Side percentage labels */}
    <rect x="12" y="74" width="38" height="9" rx="4.5" fill="#0071E3" opacity="0.25" />
    <rect x="12" y="140" width="38" height="9" rx="4.5" fill="#0071E3" opacity="0.3" />
    <rect x="12" y="208" width="38" height="9" rx="4.5" fill="#0071E3" opacity="0.35" />
    <line x1="50" y1="78" x2="60" y2="78" stroke="#0071E3" strokeWidth="1" opacity="0.2" strokeDasharray="3 2" />
    <line x1="50" y1="144" x2="90" y2="144" stroke="#0071E3" strokeWidth="1" opacity="0.2" strokeDasharray="3 2" />
    <line x1="50" y1="212" x2="126" y2="212" stroke="#0071E3" strokeWidth="1" opacity="0.2" strokeDasharray="3 2" />
  </svg>
);

const SERVICE_SVGS = {
  'ai-automation':  <AIAutomationSVG />,
  'custom-software': <CustomSoftwareSVG />,
  'lead-generation': <LeadGenerationSVG />,
};

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

          {/* SVG illustration */}
          <div className="service-detail__visual">
            <div className="service-detail__svg-wrap">
              {SERVICE_SVGS[service.id]}
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
