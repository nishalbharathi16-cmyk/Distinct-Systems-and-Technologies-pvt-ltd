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
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
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
                        <IconComponent className="w-6 h-6 text-[#267C78]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                          Practice 0{index + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#17365D]">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-[#263442] leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Business Value Highlight Box */}
                    <div className="bg-[#F2F5F7] rounded-lg p-4 border-l-4 border-[#267C78]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#17365D] block mb-1">
                        Strategic Enterprise Value
                      </span>
                      <p className="text-xs sm:text-sm text-[#263442] leading-relaxed">
                        {service.businessValue}
                      </p>
                    </div>

                    {/* Capabilities checklist */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#17365D] block">
                        Core Capabilities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#263442]">
                            <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
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
                          className="text-[11px] font-medium bg-[#F2F5F7] text-[#263442] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Relevant Themed Visual Panel */}
                <div className={`lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {/* Clean, Full-Resolution Relevant Image */}
                  <img
                    src={service.bgImage}
                    alt={`${service.title} Enterprise Practice Visual`}
                    className="w-full h-full object-cover object-left transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle corporate corner vignette for depth and elegance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/80 via-transparent to-black/20" />

                  {/* Visual Overlay Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#17365D]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#267C78]" />
                      <span>{service.title.split('&')[0].trim()} Practice Visual</span>
                    </div>
                    <p className="text-[11px] text-slate-200 drop-shadow-sm">
                      Distinct Systems Enterprise Core Competency
                    </p>
                  </div>
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
