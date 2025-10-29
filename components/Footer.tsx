
import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Gacho Baba Woreda</h3>
            <p className="text-gray-400 text-sm">
              Serving the community with dedication and transparency.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link: NavLink) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Address: 123 Main St, Gacho Baba, Ethiopia</li>
              <li>Email: info@gachobaba.gov.et</li>
              <li>Phone: +251 123 456 789</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Gacho Baba Woreda Administration. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
