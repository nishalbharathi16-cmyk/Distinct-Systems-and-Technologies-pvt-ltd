import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/company';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer upon route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Subtle header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white shadow-subtle border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Logo className="h-10 sm:h-12" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
              {COMPANY_INFO.navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-[#17365D] bg-[#F2F5F7] font-semibold'
                        : 'text-[#263442] hover:text-[#17365D] hover:bg-[#F2F5F7]/70'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action CTA Button */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#267C78] text-white hover:bg-[#1e6662] transition-colors duration-150 shadow-sm"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#267C78] text-white hover:bg-[#1e6662]"
              >
                <span>Contact</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-[#263442] hover:text-[#17365D] hover:bg-[#F2F5F7] focus:outline-none focus:ring-2 focus:ring-[#267C78]"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 xl:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-2xl xl:hidden transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <Logo className="h-9" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-slate-500 hover:text-[#17365D] hover:bg-[#F2F5F7]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {COMPANY_INFO.navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#17365D] bg-[#F2F5F7] font-semibold border-l-4 border-[#267C78]'
                    : 'text-[#263442] hover:text-[#17365D] hover:bg-[#F2F5F7]/70'
                }`
              }
            >
              <span>{item.name}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NavLink>
          ))}
        </nav>

        <div className="p-5 border-t border-slate-100 bg-[#F2F5F7]/50 space-y-3">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-semibold bg-[#267C78] text-white hover:bg-[#1e6662] transition-colors shadow-sm"
          >
            <span>Initiate Corporate Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-center text-xs text-[#263442]/70">
            Chennai, Tamil Nadu, India • Est. 2019
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

