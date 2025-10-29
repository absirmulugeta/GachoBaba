
import React from 'react';
import { NEWS_ITEMS_DATA } from '../constants';
import type { NewsItemData } from '../types';

const NewsCard: React.FC<NewsItemData> = ({ image, date, title, excerpt }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{date}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 h-14">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 h-20">{excerpt}</p>
            <a href="#" className="font-semibold text-brand-blue hover:underline">
                Read More &rarr;
            </a>
        </div>
    </div>
);

const NewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Latest News & Updates</h2>
            <p className="text-gray-600 mt-2">Stay informed about what's happening in our community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS_DATA.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
