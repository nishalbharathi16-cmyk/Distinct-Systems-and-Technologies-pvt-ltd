import React from 'react';
import { Info } from 'lucide-react';

export const ProposedContentBadge = ({ 
  text = "Proposed Content • Awaiting Formal Company Sign-off", 
  className = "" 
}) => {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F2F5F7] border border-[#267C78]/25 text-[#263442] ${className}`}>
      <Info className="w-3.5 h-3.5 text-[#267C78] shrink-0" />
      <span>{text}</span>
    </div>
  );
};

export default ProposedContentBadge;

