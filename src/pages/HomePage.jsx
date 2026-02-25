import HeroSection      from '../components/sections/HeroSection';
import ProblemSection   from '../components/sections/ProblemSection';
import SolutionSection  from '../components/sections/SolutionSection';
import ServicesBlock    from '../components/sections/ServicesBlock';
import SocialProofStrip from '../components/sections/SocialProofStrip';
import ClosingCTA       from '../components/sections/ClosingCTA';

const HomePage = () => (
  <main>
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ServicesBlock />
    <SocialProofStrip />
    <ClosingCTA />
  </main>
);

export default HomePage;
