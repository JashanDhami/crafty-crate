
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-crafty-navy">CraftyCrate</span>
            </Link>
            <p className="mt-4 text-crafty-navy/70 max-w-xs">
              Curated hobby subscription boxes designed to help you discover your next creative passion.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-crafty-navy/5 text-crafty-navy hover:bg-crafty-navy/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-crafty-navy/5 text-crafty-navy hover:bg-crafty-navy/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-crafty-navy/5 text-crafty-navy hover:bg-crafty-navy/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-crafty-navy/5 text-crafty-navy hover:bg-crafty-navy/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-crafty-navy uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Hobby Catalog
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="#" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-crafty-navy uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-crafty-navy uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-crafty-navy/70">
                1234 Creativity Lane
                <br />
                Craftville, CR 98765
              </li>
              <li className="pt-2">
                <a href="mailto:hello@craftycrate.com" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  hello@craftycrate.com
                </a>
              </li>
              <li>
                <a href="tel:+1-234-567-8900" className="text-crafty-navy/70 hover:text-crafty-terracotta transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-crafty-navy/60 text-sm">
            &copy; {new Date().getFullYear()} CraftyCrate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
