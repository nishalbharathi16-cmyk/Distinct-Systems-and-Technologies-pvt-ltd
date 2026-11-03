import React from 'react';
import { 
  Factory, 
  Stethoscope, 
  Landmark, 
  ShoppingBag, 
  Truck, 
  Building2, 
  GraduationCap,
  Info, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProposedContentBadge from '../components/ProposedContentBadge';
import Button from '../components/Button';
import { INDUSTRIES } from '../data/services';

const industryIcons = {
  manufacturing: Factory,
  healthcare: Stethoscope,
  finance: Landmark,
  retail: ShoppingBag,
  logistics: Truck,
  education: GraduationCap,
  enterprise: Building2,
};

export const Industries = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* 1. Header & Governance Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-10">
          <SectionHeading
            align="left"
            eyebrow="Application Domains"
            title="Industry Application Scenarios"
            description="Explore how Distinct Systems' core capabilities in AI/ML, Data Science, and SAP S/4HANA map to critical operational challenges across major economic sectors."
          />

          {/* Industry Application Disclaimer */}
          <div className="bg-[#F2F5F7] rounded-xl p-5 border border-slate-200 mt-6 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-[#267C78] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#263442]/85 space-y-1">
              <span className="font-semibold text-[#17365D] block">
                Domain Mapping & Feasibility Framework Notice
              </span>
              <p>
                The industry sectors presented below represent architectural application models and capability mappings based on Distinct Systems' technology expertise. In alignment with our commitment to transparency, these represent proposed application areas rather than unverified client testimonials or historical case studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Industry Sections with Directly Relevant Domain Visuals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {INDUSTRIES.map((ind, index) => {
          const Icon = industryIcons[ind.id] || Building2;
          const isReversed = index % 2 === 1;

          return (
            <div 
              key={ind.id} 
              id={ind.id}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Content Column */}
                <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="space-y-5">
                    {/* Header badge & title */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#F2F5F7] text-[#267C78] flex items-center justify-center border border-slate-200 shadow-subtle">
                        <Icon className="w-6 h-6 text-[#267C78]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                          Sector 0{index + 1} • Application Model
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#17365D]">
                          {ind.name}
                        </h3>
                      </div>
                    </div>

                    {/* Short Summary */}
                    <p className="text-sm sm:text-base text-[#263442] leading-relaxed">
                      {ind.summary}
                    </p>

                    {/* Targeted Solutions Checklist */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#17365D] block">
                        Targeted Technical Solutions
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {ind.applications.map((app, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-[#263442]">
                            <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Transparent Mapping Notice */}
                    <p className="text-[11px] text-slate-400 italic pt-2">
                      {ind.disclaimer}
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <Button 
                      to={`/contact?industry=${encodeURIComponent(ind.name)}`} 
                      variant="primary" 
                      size="md" 
                      icon={ArrowRight}
                    >
                      Discuss {ind.name.split(' ')[0]} Requirements
                    </Button>

                    <span className="text-xs text-slate-500 font-medium">
                      Enterprise Feasibility Review
                    </span>
                  </div>
                </div>

                {/* Relevant Themed Domain Visual Panel */}
                <div className={`lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {/* Clean, Full-Resolution Relevant Domain Image */}
                  <img
                    src={ind.bgImage}
                    alt={`${ind.name} Domain Visual`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle corporate corner vignette for depth and elegance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/80 via-transparent to-black/20" />

                  {/* Visual Overlay Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#17365D]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#267C78]" />
                      <span>{ind.name.split('&')[0].trim()} Domain Visual</span>
                    </div>
                    <p className="text-[11px] text-slate-200 drop-shadow-sm">
                      Distinct Systems Architectural Application Model
                    </p>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Bottom Consultation Call */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17365D] rounded-2xl p-7 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for Domain-Specific Technical Feasibility?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our consultants can review your industry workflows and provide a realistic feasibility assessment for AI, automation, or ERP modernization.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} className="shrink-0">
            Request Feasibility Study
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Industries;
