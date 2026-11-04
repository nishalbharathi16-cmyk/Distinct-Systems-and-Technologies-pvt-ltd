import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  BarChart3, 
  Compass, 
  Users2, 
  Layers, 
  ShieldCheck, 
  GraduationCap,
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
  GraduationCap,
};

export const ServiceCard = ({ service, featured = false }) => {
  const IconComponent = iconMap[service.icon] || Layers;

  return (
    <div className={`group flex flex-col justify-between h-full bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
      featured 
        ? 'border-[#267C78]/40 shadow-card hover:shadow-card-hover' 
        : 'border-slate-200 hover:border-[#17365D]/30 shadow-subtle hover:shadow-card'
    }`}>
      <div>
        {/* Service Top Visual Banner */}
        {service.bgImage && (
          <div className="relative h-32 w-full overflow-hidden bg-slate-100">
            <img 
              src={service.bgImage} 
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/90 via-[#17365D]/40 to-transparent" />
            
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-white/95 text-[#267C78] flex items-center justify-center shadow-md">
                <IconComponent className="w-5 h-5" />
              </div>
              {featured && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#267C78] text-white shadow-sm">
                  Core Practice
                </span>
              )}
            </div>
          </div>
        )}

        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-bold text-[#17365D] mb-2 group-hover:text-[#267C78] transition-colors duration-200">
            {service.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#263442]/85 leading-relaxed mb-4">
            {service.shortDesc}
          </p>

          {/* Business Value Box */}
          <div className="bg-[#F2F5F7] rounded-md p-3 mb-4 border-l-2 border-[#267C78]">
            <span className="block text-[11px] font-bold text-[#17365D] uppercase tracking-wide mb-0.5">
              Enterprise Value
            </span>
            <p className="text-xs text-[#263442] leading-snug">
              {service.businessValue}
            </p>
          </div>

          {/* Key Features List */}
          {service.features && (
            <ul className="space-y-1.5 mb-2">
              {service.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#263442]/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#267C78] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-5 pt-3 border-t border-slate-100">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#267C78] group-hover:text-[#17365D] transition-colors duration-200"
        >
          <span>{service.cta || "Learn more"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
