
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const NavLinks = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Hobby Catalog' },
  { href: '/subscription', label: 'Subscription' },
  { href: '/community', label: 'Community' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-4 md:px-8",
        scrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-2xl font-bold text-crafty-navy transition-transform duration-300 hover:scale-105"
        >
          <span className="text-shimmer">CraftyCrate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-200",
                isActive(link.href)
                  ? "text-crafty-terracotta font-semibold"
                  : "text-crafty-navy hover:text-crafty-terracotta underline-animation"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-transparent border border-crafty-navy text-crafty-navy hover:bg-crafty-navy/5 rounded-full"
          >
            Sign In
          </Link>
          <Link
            to="/subscription"
            className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-crafty-terracotta text-white hover:bg-crafty-terracotta/90 rounded-full"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-crafty-navy p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "py-2 text-base font-medium transition-colors",
                  isActive(link.href)
                    ? "text-crafty-terracotta font-semibold"
                    : "text-crafty-navy hover:text-crafty-terracotta"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100">
              <Link
                to="/login"
                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-transparent border border-crafty-navy text-crafty-navy hover:bg-crafty-navy/5 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/subscription"
                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-crafty-terracotta text-white hover:bg-crafty-terracotta/90 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
