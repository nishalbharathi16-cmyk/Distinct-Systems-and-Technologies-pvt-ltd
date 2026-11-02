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
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-10">
          <SectionHeading
            align="left"
            eyebrow="Practice Portfolio"
            title="Enterprise Technology & Consulting Services"
            description="Six specialized practice lines delivering applied intelligence, modern enterprise architectures, and agile engineering capacity."
          />

          {/* Practice Highlights Navigation */}
          <div className="flex flex-wrap gap-2 pt-2">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F2F5F7] text-[#17365D] hover:bg-[#17365D] hover:text-white transition-colors border border-slate-200"
              >
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Sections with Individual Background Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Layers;

          return (
            <div
              key={service.id}
              id={service.id}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-card transition-all duration-300 group"
            >
              {/* Individual Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ backgroundImage: `url('${service.bgImage}')` }}
              />
              {/* Deep Corporate Navy Overlay for crystal clear readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#17365D]/95 via-[#17365D]/90 to-[#0e223b]/85 backdrop-blur-[1px]" />

              <div className="relative z-10 p-7 sm:p-10 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Overview Column */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[#267C78] flex items-center justify-center shadow-sm">
                        <IconComponent className="w-5 h-5 text-[#267C78]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                          Practice 0{index + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Business Value Highlight */}
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border-l-4 border-[#267C78] border border-white/10 text-white">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#267C78] block mb-1">
                        Strategic Enterprise Value
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {service.businessValue}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-1">
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
                  <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-xl p-5 sm:p-7 border border-white/20 space-y-4 shadow-xl text-white">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#267C78] border-b border-white/15 pb-2.5">
                      Scope & Capabilities
                    </h4>

                    <ul className="space-y-2.5">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-white/15">
                      <span className="text-[11px] font-semibold text-slate-300 block mb-1.5">
                        Core Competencies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[10px] font-medium bg-white/15 text-white px-2.5 py-0.5 rounded border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
        <div className="bg-[#17365D] rounded-2xl p-7 sm:p-10 text-white shadow-xl">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Engagement Models
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Flexible, SLA-Governed Service Delivery
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We structure our service engagements around your corporate requirements: from milestone projects to dedicated engineering pods and long-term support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-300 border-t border-white/10">
              <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
                <span className="text-white font-bold block mb-1">Project-Based Delivery</span>
                Defined scope, milestones, and architectural documentation.
              </div>
              <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
                <span className="text-white font-bold block mb-1">Dedicated Teams</span>
                Engineers and SAP consultants integrated into your sprints.
              </div>
              <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
                <span className="text-white font-bold block mb-1">SLA-Driven Support</span>
                Guaranteed response tiers for continuous system health.
              </div>
            </div>

            <div className="pt-2">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Initiate Scoping Discussion
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
