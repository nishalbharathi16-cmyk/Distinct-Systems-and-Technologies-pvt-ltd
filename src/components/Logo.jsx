import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Company Logo Component
 * Strictly preserves the proportions, colors, and appearance of the original company logo.
 */
export const Logo = ({ className = "h-11", showLink = true }) => {
  const logoContent = (
    <div className={`flex items-center select-none ${className}`}>
      {/* 
        Using the authentic company logo cropped from the official branding asset
        with high pixel density (@2x) and exact aspect ratio preservation.
      */}
      <img
        src="/logo.png"
        srcSet="/logo.png 1x, /logo@2x.png 2x"
        alt="Distinct Systems and Technologies Pvt. Ltd."
        className="h-full w-auto max-w-[240px] object-contain rounded-sm"
        loading="eager"
      />
    </div>
  );

  if (!showLink) return logoContent;

  return (
    <Link 
      to="/" 
      className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#267C78] rounded"
      aria-label="Distinct Systems and Technologies Homepage"
    >
      {logoContent}
    </Link>
  );
};

export default Logo;
