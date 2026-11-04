import React from 'react';
import { 
  Cpu, 
  Layers, 
  BarChart3, 
  Workflow, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { SOLUTIONS } from '../data/services';

const solutionVisuals = {
  'intelligent-tech': { icon: Cpu, image: '/solutions/intelligent-tech.jpg', tag: 'AI & Cognitive Automation' },
  'enterprise-solutions': { icon: Layers, image: '/solutions/enterprise-solutions.jpg', tag: 'ERP & Core Architecture' },
  'data-driven': { icon: BarChart3, image: '/solutions/data-driven.jpg', tag: 'Telemetry & Analytics' },
  'digital-transformation': { icon: Workflow, image: '/solutions/digital-transformation.jpg', tag: 'Cloud & Modernization' },
  'tech-integration': { icon: Network, image: '/solutions/tech-integration.jpg', tag: 'Connected Systems & IoT' },
};

export const Solutions = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-10">
          <SectionHeading
            align="left"
            eyebrow="Architectural Blueprints"
            title="Enterprise Technology Solutions"
            description="Purpose-built architectural solution frameworks designed to solve high-stakes business challenges: from automating cognitive workflows to unifying distributed enterprise systems."
          />
        </div>
      </section>

      {/* 2. Solutions Showcase with Relevant Visuals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SOLUTIONS.map((sol, index) => {
          const visual = solutionVisuals[sol.id] || { icon: Cpu, image: '/solutions/intelligent-tech.jpg', tag: 'Architecture' };

          return (
            <div 
              key={sol.id} 
              id={sol.id}
              className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl transition-all duration-300 hover:shadow-card-hover group min-h-[500px] flex items-center"
            >
              {/* 1. Full-Bleed High-Tech Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-right md:bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${visual.image}')` }}
              />

              {/* 2. Dark Ambient Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1829]/95 via-[#0d2038]/90 md:via-[#0e223b]/80 to-black/40 md:to-transparent backdrop-blur-[2px] md:backdrop-blur-none" />

              {/* 3. Text & Content Layer */}
              <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12 max-w-3xl">
                <div className="space-y-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#4dd0c9] bg-[#267C78]/25 px-2.5 py-1 rounded-md border border-[#267C78]/40 backdrop-blur-sm">
                      {sol.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-300">
                      Solution Architecture 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">
                    {sol.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow-sm">
                    {sol.summary}
                  </p>

                  {/* Measurable Business Impact Box */}
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/15 shadow-sm max-w-xl">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#4dd0c9] block mb-1">
                      Business Outcome & Operational Impact
                    </span>
                    <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                      {sol.impact}
                    </p>
                  </div>

                  {/* Core Capabilities */}
                  <div className="space-y-2 pt-1 max-w-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                      Core Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {sol.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#4dd0c9] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button 
                      to={`/contact?solution=${encodeURIComponent(sol.title)}`} 
                      variant="primary" 
                      size="md" 
                      icon={ArrowRight}
                    >
                      Inquire About {sol.title.split('&')[0].trim()}
                    </Button>
                    <span className="text-xs text-slate-300 font-semibold">
                      High Availability Standard
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Right Badge */}
              <div className="hidden lg:block absolute bottom-6 right-6 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e223b]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#4dd0c9]" />
                  <span>{visual.tag}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Advisory Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17365D] rounded-2xl p-7 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-bold">
              Need a Custom Solution Architecture?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Distinct Systems conducts architectural reviews to map your current technology stack and design custom integration blueprints.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} className="shrink-0">
            Request Architectural Consultation
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Solutions;
