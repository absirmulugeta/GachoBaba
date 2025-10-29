
import React from 'react';
import { SERVICE_CARDS_DATA } from '../constants';
import type { ServiceCardData } from '../types';

const Card: React.FC<ServiceCardData> = ({ icon, title, description, bgColor, textColor }) => (
  <div className={`p-6 rounded-lg shadow-sm transition-transform transform hover:-translate-y-1 ${bgColor}`}>
    <div className={`mb-4 ${textColor}`}>
      {icon}
    </div>
    <h3 className={`text-xl font-semibold mb-2 ${textColor.replace('text-', 'text-gray-') === textColor ? 'text-gray-800' : textColor }`}>{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);


const ServiceCards: React.FC = () => {
  return (
    <section className="py-16 bg-brand-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICE_CARDS_DATA.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
