import React from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Target, 
  Eye, 
  HeartHandshake, 
  CheckCircle2,
  Workflow,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProposedContentBadge from '../components/ProposedContentBadge';
import Button from '../components/Button';
import { COMPANY_INFO } from '../data/company';

export const About = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* 1. Page Header with Attractive Hero Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#17365D] text-white p-8 sm:p-12 shadow-card mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('/hero-bg.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17365D]/95 via-[#17365D]/90 to-[#0e223b]/85 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78] px-3 py-1 rounded bg-white/10 inline-block">
              Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About Distinct Systems and Technologies
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              AI/ML digital technology startup providing technology consulting, specialized talent augmentation, and enterprise SAP implementations.
            </p>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[#F2F5F7] p-4 rounded-lg border border-slate-200">
            <span className="text-xs text-slate-500 block mb-1">Entity</span>
            <span className="text-sm font-bold text-[#17365D]">Pvt. Ltd.</span>
            <span className="text-xs text-[#263442]/70 block mt-0.5">Incorporated in India</span>
          </div>
          <div className="bg-[#F2F5F7] p-4 rounded-lg border border-slate-200">
            <span className="text-xs text-slate-500 block mb-1">Established</span>
            <span className="text-sm font-bold text-[#17365D]">March 2019</span>
            <span className="text-xs text-[#263442]/70 block mt-0.5">Chennai, Tamil Nadu</span>
          </div>
          <div className="bg-[#F2F5F7] p-4 rounded-lg border border-slate-200">
            <span className="text-xs text-slate-500 block mb-1">Sector</span>
            <span className="text-sm font-bold text-[#17365D]">IT Services</span>
            <span className="text-xs text-[#263442]/70 block mt-0.5">Consulting & Software</span>
          </div>
          <div className="bg-[#F2F5F7] p-4 rounded-lg border border-slate-200">
            <span className="text-xs text-slate-500 block mb-1">Portal</span>
            <span className="text-sm font-bold text-[#267C78]">distinctsystems.in</span>
            <span className="text-xs text-[#263442]/70 block mt-0.5">Verified Domain</span>
          </div>
        </div>
      </section>

      {/* 2. Company Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
              Delivering Dependable Digital & Enterprise Capabilities
            </h2>
            
            <p className="text-base text-[#263442] leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <p className="text-sm text-[#263442]/80 leading-relaxed">
              Founded in 2019 in Chennai, Distinct Systems focuses on high-impact business systems, applied computational intelligence, and specialized engineering talent.
            </p>

            <div className="bg-[#F2F5F7] p-4 rounded-lg border-l-4 border-[#267C78] text-xs text-[#263442]/80">
              <strong>Registered Office:</strong> Anna Nagar West, Chennai, Tamil Nadu, India. Privately held entity registered with Registrar of Companies (ROC Chennai).
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F2F5F7] rounded-xl p-6 border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-[#17365D] border-b border-slate-200 pb-2.5">
              Practice Pillars
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-[#267C78]/10 text-[#267C78] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">Applied AI & Data Science</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Predictive modeling, cognitive automation, and telemetry analytics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-[#17365D]/10 text-[#17365D] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">SAP S/4HANA & ERP</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Implementation, module alignment, and ongoing SLA support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-slate-200 text-[#263442] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">Advisory & Staff Scaling</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Technology consulting and on-demand specialized engineering pods.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/services" variant="navy" size="sm" icon={ArrowRight} className="w-full">
                View Services Directory
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Proposed Mission & Vision */}
      <section className="bg-[#F2F5F7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <ProposedContentBadge 
              text="Proposed Statements • Pending Formal Approval"
              className="mb-2.5"
            />
            <h2 className="text-2xl font-bold text-[#17365D]">
              Strategic Orientation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Proposed Mission */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-subtle space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#267C78]/10 text-[#267C78] flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Proposed Draft
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#17365D]">
                Mission Statement
              </h3>
              <p className="text-xs sm:text-sm text-[#263442]/85 leading-relaxed italic">
                "To deliver pragmatic digital technology solutions and enterprise ERP services that bridge the gap between computational intelligence and reliable daily business operations."
              </p>
            </div>

            {/* Proposed Vision */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-subtle space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#17365D]/10 text-[#17365D] flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Proposed Draft
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#17365D]">
                Vision Statement
              </h3>
              <p className="text-xs sm:text-sm text-[#263442]/85 leading-relaxed italic">
                "To become a trusted, internationally recognized enterprise consulting and intelligent systems partner, known for technical clarity, transparent delivery, and dependable customer relationships."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Values"
          title="Principles That Guide Distinct Systems"
          description="We operate on structured business ethics, technical honesty, and engineering precision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-lg border border-slate-200">
            <div className="w-9 h-9 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-[#17365D] mb-1">Technical Honesty</h4>
            <p className="text-xs text-[#263442]/80 leading-relaxed">
              Transparent architecture advice, realistic timelines, and verifiable capabilities.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200">
            <div className="w-9 h-9 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-3">
              <Workflow className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-[#17365D] mb-1">Enterprise Rigor</h4>
            <p className="text-xs text-[#263442]/80 leading-relaxed">
              Disciplined change control, process governance, and strict SLA accountability.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200">
            <div className="w-9 h-9 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-[#17365D] mb-1">Pragmatic Tech</h4>
            <p className="text-xs text-[#263442]/80 leading-relaxed">
              Deploying AI, ML, and automation where they generate proven operational return.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200">
            <div className="w-9 h-9 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-3">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-[#17365D] mb-1">Client Partnership</h4>
            <p className="text-xs text-[#263442]/80 leading-relaxed">
              Collaborative commitments focused on long-term operational success.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
