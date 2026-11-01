import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import Button from '../components/Button';

export const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#267C78] block">
          Error 404 • Resource Not Found
        </span>
        <h1 className="text-3xl font-extrabold text-[#17365D]">
          Page Not Located
        </h1>
        <p className="text-sm text-[#263442]/80 leading-relaxed">
          The requested corporate portal destination is not available or has been reorganized. Please return to the homepage or explore our active service areas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
            Return to Homepage
          </Button>
          <Button to="/services" variant="outline" size="md">
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

