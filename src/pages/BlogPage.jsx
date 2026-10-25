import { Link } from 'react-router-dom';

import { seoPosts } from '../seo';

/** Every post the SEO team has published, newest first. Only built once there is one. */
const BlogPage = () => (
  <main>
    <section className="page-hero page-hero--light" aria-label="Blog header">
      <div className="container">
        <span className="label page-hero__label">Blog</span>
        <h1 className="page-hero__headline page-hero__headline--dark">Notes on automating a business.</h1>
        <p className="page-hero__sub page-hero__sub--dark">
          What we learn building CRMs, AI workflows and integrations for real teams.
        </p>
      </div>
    </section>

    <section className="section seo-article-section">
      <div className="container">
        <ul className="seo-post-list">
          {seoPosts.map((post) => (
            <li key={post.slug}>
              <Link to={post.path} className="seo-post-list__title">
                {post.title}
              </Link>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </main>
);

export default BlogPage;
