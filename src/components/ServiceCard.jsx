import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  BarChart3, 
  Compass, 
  Users2, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

const iconMap = {
  BrainCircuit,
  BarChart3,
  Compass,
  Users2,
  Layers,
  ShieldCheck,
};

export const ServiceCard = ({ service, featured = false }) => {
  const IconComponent = iconMap[service.icon] || Layers;

  return (
    <div className={`group flex flex-col justify-between h-full bg-white rounded-lg border transition-all duration-300 p-6 sm:p-8 ${
      featured 
        ? 'border-[#267C78]/40 shadow-card hover:shadow-card-hover' 
        : 'border-slate-200 hover:border-[#17365D]/30 shadow-subtle hover:shadow-card'
    }`}>
      <div>
        {/* Header: Icon & Tags */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-[#F2F5F7] text-[#267C78] flex items-center justify-center group-hover:bg-[#17365D] group-hover:text-white transition-colors duration-200">
            <IconComponent className="w-6 h-6" />
          </div>
          {featured && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#267C78]/10 text-[#267C78]">
              Core Practice
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#17365D] mb-3 group-hover:text-[#267C78] transition-colors duration-200">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#263442]/85 leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Business Value Box */}
        <div className="bg-[#F2F5F7] rounded-md p-3.5 mb-5 border-l-2 border-[#267C78]">
          <span className="block text-xs font-semibold text-[#17365D] uppercase tracking-wide mb-1">
            Enterprise Value
          </span>
          <p className="text-xs sm:text-sm text-[#263442] leading-snug">
            {service.businessValue}
          </p>
        </div>

        {/* Key Features List if present */}
        {service.features && (
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#263442]/80">
                <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-100 mt-2">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#267C78] group-hover:text-[#17365D] transition-colors duration-200"
        >
          <span>{service.cta || "Learn more"}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

