import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import { Analytics } from "@vercel/analytics/react";

// Lazy load sections below the fold
const HowItWorks = lazy(() => import('./components/sections/HowItWorks'));
const Waitlist = lazy(() => import('./sections/Waitlist'));
const Vehicles = lazy(() => import('./components/sections/Vehicles'));
const Vision = lazy(() => import('./components/sections/Vision'));
const Places = lazy(() => import('./components/sections/Places'));
// const Drivers = lazy(() => import('./components/sections/Drivers'));
const Download = lazy(() => import('./components/sections/Download'));
const FAQ = lazy(() => import('./components/sections/FAQ'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy font-body transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
          <Waitlist />
          <Vehicles />
          <Vision />
          <Places />
          <FAQ />
          <Download />
        </Suspense>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
