
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-neutral min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
