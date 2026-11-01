import React from 'react';
import { 
  Cpu, 
  Layers, 
  BarChart3, 
  Workflow, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert,
  Server,
  Zap
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { SOLUTIONS } from '../data/services';

const solutionIcons = {
  'intelligent-tech': Cpu,
  'enterprise-solutions': Layers,
  'data-driven': BarChart3,
  'digital-transformation': Workflow,
  'tech-integration': Network,
};

export const Solutions = () => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-12">
          <SectionHeading
            align="left"
            eyebrow="Architectural Blueprints"
            title="Enterprise Technology Solutions"
            description="Purpose-built architectural solution frameworks designed to solve high-stakes business challenges: from automating cognitive workflows to unifying distributed enterprise systems."
          />
        </div>
      </section>

      {/* 2. Solutions Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SOLUTIONS.map((sol, index) => {
          const Icon = solutionIcons[sol.id] || Cpu;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={sol.id} 
              id={sol.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Content */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#267C78] bg-[#267C78]/10 px-2.5 py-1 rounded">
                      {sol.category}
                    </span>
                    <span className="text-xs text-[#263442]/60">Solution Architecture 0{index + 1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
                    {sol.title}
                  </h3>

                  <p className="text-base text-[#263442] leading-relaxed">
                    {sol.summary}
                  </p>

                  {/* Measurable Business Impact Box */}
                  <div className="bg-[#F2F5F7] p-5 rounded-lg border-l-4 border-[#17365D]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#17365D] block mb-1">
                      Business Outcome & Operational Impact
                    </span>
                    <p className="text-sm text-[#263442] leading-relaxed">
                      {sol.impact}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button 
                      to={`/contact?solution=${encodeURIComponent(sol.title)}`} 
                      variant="primary" 
                      size="md" 
                      icon={ArrowRight}
                    >
                      Inquire About {sol.title}
                    </Button>
                  </div>
                </div>

                {/* Capabilities Card */}
                <div className="lg:col-span-5 bg-[#F2F5F7] rounded-xl p-6 sm:p-8 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#267C78] flex items-center justify-center shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#17365D]">
                      Core Capabilities
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {sol.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#263442]">
                        <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-200 text-xs text-[#263442]/70">
                    Engineered according to enterprise security and high-availability benchmarks.
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Advisory Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2F5F7] rounded-xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-[#17365D]">
              Need a Custom Solution Architecture?
            </h4>
            <p className="text-sm text-[#263442]/80 max-w-2xl">
              Distinct Systems conducts architectural reviews to map your current technology stack and design custom integration blueprints.
            </p>
          </div>
          <Button to="/contact" variant="navy" size="md" icon={ArrowRight} className="shrink-0">
            Request Architectural Consultation
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Solutions;

