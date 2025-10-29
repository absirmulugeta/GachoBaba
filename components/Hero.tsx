
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
          Gacho Baba Woreda <br className="hidden md:block" /> Digital Service Portal
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Access services, updates, and community information. Your one-stop destination for all woreda-related matters.
        </p>
        <div className="mt-8">
            <a href="#" className="inline-block bg-brand-green text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg">
                Explore Services
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
