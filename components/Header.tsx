
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                GB
              </div>
              <span className="font-bold text-xl text-gray-800">Gacho Baba</span>
            </a>
          </div>

          <div className="hidden md:block">
            <nav className="flex items-center space-x-6">
              {NAV_LINKS.map((link: NavLink) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-brand-green font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:bg-gray-100 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
