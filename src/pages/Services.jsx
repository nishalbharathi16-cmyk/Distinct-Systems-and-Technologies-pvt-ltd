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
  CheckCircle2, 
  Sparkles
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
  GraduationCap,
};

export const Services = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-10">
          <SectionHeading
            align="left"
            eyebrow="Practice Portfolio"
            title="Enterprise Technology & Consulting Services"
            description="Specialized practice areas delivering applied artificial intelligence, predictive analytics, enterprise architecture, SAP implementations, and digital learning platforms."
          />

          {/* Quick Practice Navigation */}
          <div className="flex flex-wrap gap-2 pt-2">
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

      {/* 2. Detailed Service Sections with Clear, Directly Relevant Visuals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Layers;

          return (
            <div
              key={service.id}
              id={service.id}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0e223b] shadow-card transition-all duration-300 hover:shadow-card-hover group min-h-[500px] flex items-center"
            >
              {/* 1. Full-Bleed High-Resolution Service Visual */}
              <div 
                className={`absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  service.id === 'education-tech' ? 'bg-left' : 'bg-right md:bg-center'
                }`}
                style={{ backgroundImage: `url('${service.bgImage}')` }}
              />

              {/* 2. Frosted Glassmorphism Backdrop Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 md:via-white/80 to-white/30 md:to-transparent backdrop-blur-[2px] md:backdrop-blur-none" />

              {/* 3. Text & Content Layer */}
              <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12 max-w-3xl">
                <div className="space-y-5">
                  {/* Header badge & title */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md text-[#267C78] flex items-center justify-center border border-slate-200 shadow-sm">
                      <IconComponent className="w-5 h-5 text-[#267C78]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#267C78] bg-[#267C78]/10 px-2.5 py-0.5 rounded-md border border-[#267C78]/20 inline-block">
                        Practice 0{index + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17365D] tracking-tight mt-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-[#263442] leading-relaxed max-w-xl font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Business Value Highlight Box */}
                  <div className="bg-white/85 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-sm max-w-xl">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#17365D] block mb-1">
                      Strategic Enterprise Value
                    </span>
                    <p className="text-xs sm:text-sm text-[#263442] leading-relaxed">
                      {service.businessValue}
                    </p>
                  </div>

                  {/* Capabilities checklist */}
                  <div className="space-y-2 pt-1 max-w-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#17365D] block">
                      Core Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-[#263442]">
                          <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar & Tags */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button 
                      to={`/contact?subject=${encodeURIComponent(service.title)}`} 
                      variant="primary" 
                      size="md" 
                      icon={ArrowRight}
                    >
                      {service.cta}
                    </Button>

                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[11px] font-semibold bg-white/80 backdrop-blur-sm text-[#17365D] border border-slate-200/80 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Right Badge */}
              <div className="hidden lg:block absolute bottom-6 right-6 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#17365D]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#267C78]" />
                  <span>{service.title.split('&')[0].trim()} Core Competency</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Engagement Models */}
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
