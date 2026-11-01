import React from 'react';
import ProposedContentBadge from './ProposedContentBadge';

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  proposedBadge = false,
  badgeText,
  light = false,
  className = '',
}) => {
  const alignClasses = {
    center: 'text-center items-center mx-auto',
    left: 'text-left items-start',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {proposedBadge && (
        <div className="mb-4">
          <ProposedContentBadge text={badgeText} />
        </div>
      )}

      {eyebrow && (
        <span className={`text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 ${
          light ? 'text-[#267C78]' : 'text-[#267C78]'
        }`}>
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
          light ? 'text-white' : 'text-[#17365D]'
        }`}>
          {title}
        </h2>
      )}

      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-[#263442]/80'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

