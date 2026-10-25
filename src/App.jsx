import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import DemosPage from './pages/DemosPage';
import ContactPage from './pages/ContactPage';
import SeoPage from './pages/SeoPage';
import BlogPage from './pages/BlogPage';

import { PREVIEW_ARTICLE, seoPages, seoPosts } from './seo';

import './styles/globals.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behaviour: 'instant' }); // see note below
  }, [pathname]);

  return null;
}

/** The pages without their router: the browser wraps them in one, the pre-render in another. */
export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/demos" element={<DemosPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* What the SEO team published (src/seo.js), and the template its preview fills in. */}
        {seoPages.map((p) => (
          <Route key={p.path} path={p.path} element={<SeoPage article={p} />} />
        ))}
        {seoPosts.length > 0 ? <Route path="/blog" element={<BlogPage />} /> : null}
        {seoPosts.map((p) => (
          <Route key={p.path} path={p.path} element={<SeoPage article={p} kind="post" />} />
        ))}
        <Route path="/seo-preview/page" element={<SeoPage article={PREVIEW_ARTICLE} />} />
        <Route path="/seo-preview/post" element={<SeoPage article={PREVIEW_ARTICLE} kind="post" />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
