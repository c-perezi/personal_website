import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { featureFlags } from './data/content';

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Thoughts = lazy(() => import('./components/Thoughts'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-navy text-cream min-h-screen font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <Projects />
          {featureFlags.showThoughts && <Thoughts />}
          <Experience />
          <Skills />
          
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
