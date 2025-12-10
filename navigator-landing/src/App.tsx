import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { ProcessSection } from './sections/ProcessSection';
import { PricingSection } from './sections/PricingSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCTASection } from './sections/FinalCTASection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Система Навигатор. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
