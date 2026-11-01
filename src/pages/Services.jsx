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
  CheckCircle2, 
  Briefcase,
  ExternalLink
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { SERVICES } from '../data/services';

const iconMap = {
  BrainCircuit,
  BarChart3,
  Compass,
  Users2,
  Layers,
  ShieldCheck,
};

export const Services = () => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-12">
          <SectionHeading
            align="left"
            eyebrow="Practice Portfolio"
            title="Enterprise Technology & Consulting Services"
            description="Distinct Systems and Technologies provides six specialized service lines engineered to modernize enterprise processes, deploy applied computational intelligence, and scale technical capacity."
          />

          {/* Practice Highlights Navigation */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F2F5F7] text-[#17365D] hover:bg-[#17365D] hover:text-white transition-colors border border-slate-200"
              >
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Layers;
          const isAlternate = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`rounded-2xl border p-8 sm:p-12 transition-all duration-200 ${
                isAlternate
                  ? 'bg-[#F2F5F7] border-slate-200'
                  : 'bg-white border-slate-200 shadow-card'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-[#267C78] flex items-center justify-center shadow-subtle">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                        Practice 0{index + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-[#263442] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Business Value Highlight */}
                  <div className="bg-white p-5 rounded-lg border-l-4 border-[#267C78] shadow-subtle">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#17365D] block mb-1">
                      Strategic Business Value
                    </span>
                    <p className="text-sm text-[#263442] leading-relaxed">
                      {service.businessValue}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Button 
                      to={`/contact?subject=${encodeURIComponent(service.title)}`} 
                      variant="primary" 
                      size="md" 
                      icon={ArrowRight}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>

                {/* Right Details Column: Core Deliverables & Tags */}
                <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-subtle">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#17365D] border-b border-slate-100 pb-3">
                    Key Scope & Capabilities
                  </h4>

                  <ul className="space-y-3">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#263442]">
                        <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold text-[#17365D] block mb-2">
                      Key Competency Tags:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[11px] font-medium bg-[#F2F5F7] text-[#263442] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Engagement Models Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17365D] rounded-2xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Engagement Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Flexible, SLA-Governed Service Delivery
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We structure our service engagements to match your corporate governance needs, from dedicated milestone projects to long-term operational support and on-demand staff augmentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs text-slate-300 border-t border-white/10">
              <div className="bg-white/5 p-4 rounded-lg">
                <span className="text-white font-bold block text-sm mb-1">Project-Based Delivery</span>
                Defined scope, fixed milestones, comprehensive architecture documentation, and final handover.
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <span className="text-white font-bold block text-sm mb-1">Dedicated Teams</span>
                Engineers and SAP consultants dedicated to your product roadmap with direct technical leadership.
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <span className="text-white font-bold block text-sm mb-1">SLA-Driven Support</span>
                Guaranteed response and resolution tiers for enterprise SAP ERP maintenance and system health.
              </div>
            </div>

            <div className="pt-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Initiate Service Scoping Discussion
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;

