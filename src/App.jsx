/* ============================================================
   APP ROOT
   Sets up React Router. Navbar and Footer wrap every route.
   Add new pages here as <Route> entries.
   ============================================================ */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar      from './components/layout/Navbar';
import Footer      from './components/layout/Footer';

import HomePage    from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage   from './pages/AboutPage';
import DemosPage   from './pages/DemosPage';
import ContactPage from './pages/ContactPage';

import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"        element={<HomePage />}     />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about"   element={<AboutPage />}    />
        <Route path="/demos"   element={<DemosPage />}    />
        <Route path="/contact" element={<ContactPage />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
