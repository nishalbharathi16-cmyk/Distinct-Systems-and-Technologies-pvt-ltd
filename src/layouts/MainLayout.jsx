import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';

export const MainLayout = () => {
  const { pathname, hash } = useLocation();
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Scroll to hash anchor or top of the page when route changes
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F5F7] text-[#263442] selection:bg-[#267C78] selection:text-white relative">
      {/* 
        Attractive Global Background System:
        1. Soft, elegant slate canvas (#F2F5F7)
        2. Subtle architectural blueprint dot-grid
        3. Dual atmospheric depth glows (teal & navy)
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(rgba(23, 54, 93, 0.055) 1px, transparent 1px),
            linear-gradient(180deg, #F2F5F7 0%, #e6eef4 50%, #F2F5F7 100%)
          `,
          backgroundSize: '24px 24px, 100% 100%'
        }}
      />
      <div 
        className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-[#267C78]/[0.055] rounded-full blur-3xl pointer-events-none z-0" 
      />
      <div 
        className="fixed top-20 -right-40 w-[700px] h-[700px] bg-[#17365D]/[0.05] rounded-full blur-3xl pointer-events-none z-0" 
      />

      <Navbar />
      <main className="flex-1 w-full relative z-10">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#17365D] text-white shadow-card hover:bg-[#267C78] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#267C78]"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
