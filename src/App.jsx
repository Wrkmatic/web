import './App.css';
import StickyHeader from './components/StickyHeader';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import SocialProofSection from './components/SocialProofSection';
import DifferentiationSection from './components/DifferentiationSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <SocialProofSection />
        <DifferentiationSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;
