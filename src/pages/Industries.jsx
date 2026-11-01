import React from 'react';
import { 
  Factory, 
  Stethoscope, 
  Landmark, 
  ShoppingBag, 
  Truck, 
  Building2, 
  Info, 
  ArrowRight,
  CheckCircle2
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
  enterprise: Building2,
};

export const Industries = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-12">
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

      {/* 2. Industries Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.id] || Building2;

            return (
              <div 
                key={ind.id} 
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 hover:border-[#17365D]/30 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#F2F5F7] text-[#267C78] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-[#F2F5F7] px-2.5 py-1 rounded">
                      Application Model
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#17365D] mb-3">
                    {ind.name}
                  </h3>

                  <p className="text-sm text-[#263442]/85 leading-relaxed mb-6">
                    {ind.summary}
                  </p>

                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#17365D] block">
                      Targeted Solutions:
                    </span>
                    <ul className="space-y-2">
                      {ind.applications.map((app, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-[#263442]">
                          <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-400 italic mb-4">
                    {ind.disclaimer}
                  </p>
                  <Button 
                    to={`/contact?industry=${encodeURIComponent(ind.name)}`} 
                    variant="outline" 
                    size="sm" 
                    icon={ArrowRight}
                    className="w-full text-xs"
                  >
                    Discuss {ind.name.split(' ')[0]} Requirements
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Consultation Call */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17365D] rounded-xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for Domain-Specific Technical Feasibility?
            </h3>
            <p className="text-sm text-slate-300">
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

