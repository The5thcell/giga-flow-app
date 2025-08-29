import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GlobalFootprintSection } from '../components/GlobalFootprintSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <TestimonialsSection />
        <GlobalFootprintSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
