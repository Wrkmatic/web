import { Link } from 'react-router-dom';

/**
 * A page or post the SEO team wrote and Victor approved. Its words were
 * turned into HTML at build by an escape-first renderer
 * (scripts/seo-published.mjs), so no raw HTML from the database gets through.
 */
const SeoPage = ({ article, kind = 'page' }) => (
  <main>
    <section className="page-hero page-hero--light" aria-label="Page header">
      <div className="container">
        <span className="label page-hero__label">{kind === 'post' ? 'Blog' : 'Wrkmatic'}</span>
        <h1 className="page-hero__headline page-hero__headline--dark">{article.title}</h1>
        <p className="page-hero__sub page-hero__sub--dark">{article.description}</p>
      </div>
    </section>

    <section className="section seo-article-section">
      <div className="container">
        <article className="seo-article" dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
      </div>
    </section>

    <section className="services-page-cta section" aria-label="Get started">
      <div className="container">
        <div className="services-page-cta__inner">
          <h2 className="services-page-cta__headline">Want this built for your business?</h2>
          <p className="services-page-cta__body">
            Tell us what takes up your team's time. On the first call we work out what to build, and what it would save.
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

export default SeoPage;
