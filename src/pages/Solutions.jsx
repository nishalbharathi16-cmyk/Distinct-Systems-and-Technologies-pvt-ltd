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
  'intelligent-tech': { icon: Cpu, image: '/services/ai-ml.jpg', tag: 'AI & Cognitive Automation' },
  'enterprise-solutions': { icon: Layers, image: '/services/sap-implementation.jpg', tag: 'ERP & Core Architecture' },
  'data-driven': { icon: BarChart3, image: '/services/data-science.jpg', tag: 'Telemetry & Analytics' },
  'digital-transformation': { icon: Workflow, image: '/services/tech-consulting.jpg', tag: 'Cloud & Modernization' },
  'tech-integration': { icon: Network, image: '/services/sap-support.jpg', tag: 'Connected Systems & IoT' },
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
          const visual = solutionVisuals[sol.id] || { icon: Cpu, image: '/services/ai-ml.jpg', tag: 'Architecture' };
          const Icon = visual.icon;
          const isReversed = index % 2 === 1;

          return (
            <div 
              key={sol.id} 
              id={sol.id}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Content */}
                <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="space-y-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold tracking-wider uppercase text-[#267C78] bg-[#267C78]/10 px-2.5 py-1 rounded">
                        {sol.category}
                      </span>
                      <span className="text-xs text-[#263442]/60">Solution Architecture 0{index + 1}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#17365D]">
                      {sol.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#263442] leading-relaxed">
                      {sol.summary}
                    </p>

                    {/* Measurable Business Impact Box */}
                    <div className="bg-[#F2F5F7] p-4 rounded-lg border-l-4 border-[#17365D]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#17365D] block mb-1">
                        Business Outcome & Operational Impact
                      </span>
                      <p className="text-xs sm:text-sm text-[#263442] leading-relaxed">
                        {sol.impact}
                      </p>
                    </div>

                    {/* Core Capabilities */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#17365D] block">
                        Core Capabilities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {sol.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-[#263442]">
                            <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <Button 
                      to={`/contact?solution=${encodeURIComponent(sol.title)}`} 
                      variant="primary" 
                      size="md" 
                      icon={ArrowRight}
                    >
                      Inquire About {sol.title.split('&')[0].trim()}
                    </Button>
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      High Availability Standard
                    </span>
                  </div>
                </div>

                {/* Relevant Themed Visual Panel */}
                <div className={`lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img
                    src={visual.image}
                    alt={`${sol.title} Visual Framework`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/80 via-transparent to-black/20" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#17365D]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#267C78]" />
                      <span>{visual.tag}</span>
                    </div>
                    <p className="text-[11px] text-slate-200 drop-shadow-sm">
                      Distinct Systems Architectural Blueprint
                    </p>
                  </div>
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
