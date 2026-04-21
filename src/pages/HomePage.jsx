import HeroSection      from '../components/sections/HeroSection';
import ProblemSection   from '../components/sections/ProblemSection';
import SolutionSection  from '../components/sections/SolutionSection';
import ServicesBlock    from '../components/sections/ServicesBlock';
import ProcessSection   from '../components/sections/ProcessSection';
import CTASection       from '../components/sections/CTASection';

const HomePage = () => (
  <main>
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ServicesBlock />
    <ProcessSection />
    <CTASection />
  </main>
);

export default HomePage;
