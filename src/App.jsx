import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Paradox } from './components/Paradox';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Results } from './components/Results';
import { Author } from './components/Author';
import { ClientStories } from './components/ClientStories';
import { WhyItWorks } from './components/WhyItWorks';
import { Safety } from './components/Safety';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="app">
      <Hero />
      <Problem />
      <Paradox />
      <Solution />
      <HowItWorks />
      <Results />
      <Author />
      <ClientStories />
      <WhyItWorks />
      <Safety />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default App;
