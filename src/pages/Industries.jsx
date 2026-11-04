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

          return (
            <div 
              key={ind.id} 
              id={ind.id}
              className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl transition-all duration-300 hover:shadow-card-hover group min-h-[500px] flex items-center"
            >
              {/* 1. Full-Bleed High-Resolution Domain Visual */}
              <div 
                className={`absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  ind.id === 'education' ? 'bg-left' : 'bg-right md:bg-center'
                }`}
                style={{ backgroundImage: `url('${ind.bgImage}')` }}
              />

              {/* 2. Dark Ambient Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1829]/95 via-[#0d2038]/90 md:via-[#0e223b]/80 to-black/40 md:to-transparent backdrop-blur-[2px] md:backdrop-blur-none" />

              {/* 3. Text & Content Layer */}
              <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12 max-w-3xl">
                <div className="space-y-5">
                  {/* Header badge & title */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md text-[#4dd0c9] flex items-center justify-center border border-white/15 shadow-sm">
                      <Icon className="w-5 h-5 text-[#4dd0c9]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#4dd0c9] bg-[#267C78]/25 px-2.5 py-0.5 rounded-md border border-[#267C78]/40 inline-block">
                        Sector 0{index + 1} • Application Model
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 drop-shadow-sm">
                        {ind.name}
                      </h3>
                    </div>
                  </div>

                  {/* Short Summary */}
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow-sm">
                    {ind.summary}
                  </p>

                  {/* Targeted Technical Solutions Frosted Box */}
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/15 shadow-sm max-w-xl space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#4dd0c9] block">
                      Targeted Technical Solutions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ind.applications.map((app, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#4dd0c9] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transparent Mapping Notice */}
                  <p className="text-[11px] text-slate-400 italic pt-1 max-w-xl">
                    {ind.disclaimer}
                  </p>

                  {/* Action Bar */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button 
                      to={`/contact?industry=${encodeURIComponent(ind.name)}`} 
                      variant="primary" 
                      size="md" 
                      icon={ArrowRight}
                    >
                      Discuss {ind.name.split(' ')[0]} Requirements
                    </Button>

                    <span className="text-xs text-slate-300 font-semibold">
                      Enterprise Feasibility Review
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Right Badge */}
              <div className="hidden lg:block absolute bottom-6 right-6 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e223b]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#4dd0c9]" />
                  <span>{ind.name.split('&')[0].trim()} Domain Architecture</span>
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
