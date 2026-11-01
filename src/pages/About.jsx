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
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-12">
          <SectionHeading
            align="left"
            eyebrow="Corporate Profile"
            title="About Distinct Systems and Technologies"
            description="An AI/ML digital technology startup providing technology consulting, specialized talent augmentation, and enterprise SAP implementations."
          />

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-[#F2F5F7] p-5 rounded-lg border border-slate-200">
              <span className="text-xs text-slate-500 block mb-1">Company Entity</span>
              <span className="text-base font-bold text-[#17365D]">Pvt. Ltd.</span>
              <span className="text-xs text-[#263442]/70 block mt-1">Incorporated in India</span>
            </div>
            <div className="bg-[#F2F5F7] p-5 rounded-lg border border-slate-200">
              <span className="text-xs text-slate-500 block mb-1">Establishment</span>
              <span className="text-base font-bold text-[#17365D]">Founded 2019</span>
              <span className="text-xs text-[#263442]/70 block mt-1">Chennai, Tamil Nadu</span>
            </div>
            <div className="bg-[#F2F5F7] p-5 rounded-lg border border-slate-200">
              <span className="text-xs text-slate-500 block mb-1">Industry Sector</span>
              <span className="text-base font-bold text-[#17365D]">IT Services</span>
              <span className="text-xs text-[#263442]/70 block mt-1">IT Consulting & Software</span>
            </div>
            <div className="bg-[#F2F5F7] p-5 rounded-lg border border-slate-200">
              <span className="text-xs text-slate-500 block mb-1">Official Domain</span>
              <span className="text-base font-bold text-[#267C78]">distinctsystems.in</span>
              <span className="text-xs text-[#263442]/70 block mt-1">Verified Corporate Portal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Background & Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Verified Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
              Built to Deliver Dependable Digital and Enterprise Capability
            </h2>
            
            <p className="text-base text-[#263442] leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <p className="text-sm text-[#263442]/85 leading-relaxed">
              Founded in March 2019 in Chennai, Tamil Nadu, Distinct Systems was formed with a strategic focus on helping modern businesses leverage applied artificial intelligence, machine learning, and enterprise resource planning. Rather than promoting abstract tech buzzwords, the company grounds its practices in high-impact business systems, system integration, and dedicated technical talent augmentation.
            </p>

            <div className="bg-[#F2F5F7] p-6 rounded-lg border-l-4 border-[#267C78] space-y-2">
              <h4 className="text-sm font-bold text-[#17365D]">Headquarters & Registration Notice</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Registered office situated at Anna Nagar West, Chennai, Tamil Nadu, India. Incorporated under the Companies Act as a privately held entity.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F2F5F7] rounded-xl p-8 border border-slate-200 space-y-6">
            <h3 className="text-lg font-bold text-[#17365D] border-b border-slate-200 pb-3">
              Core Practice Pillars
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-[#267C78]/10 text-[#267C78] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">Artificial Intelligence & Data</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Actionable machine learning, statistical modeling, data science, and IoT telematics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-[#17365D]/10 text-[#17365D] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">Enterprise Systems & SAP</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    SAP S/4HANA implementation, process alignment, migration, and ongoing SLA-driven support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-slate-200 text-[#263442] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">Advisory & Talent Scaling</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Objective technology consulting and staff augmentation to support fast-moving delivery cycles.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Button to="/services" variant="navy" size="sm" icon={ArrowRight} className="w-full">
                Explore Full Services Scope
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Proposed Mission & Vision Section */}
      <section className="bg-[#F2F5F7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <ProposedContentBadge 
              text="Proposed Statements • Pending Formal Company Board Approval"
              className="mb-3"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
              Strategic Orientation
            </h2>
            <p className="text-sm text-[#263442]/70 mt-2">
              The statements below represent the company's operating principles and draft charter awaiting final corporate sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proposed Mission */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#267C78]/10 text-[#267C78] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Proposed Draft
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#17365D]">
                Proposed Mission Statement
              </h3>
              <p className="text-sm text-[#263442]/85 leading-relaxed italic">
                "To deliver pragmatic, high-integrity digital technology solutions and enterprise ERP services that bridge the gap between emerging computational intelligence and reliable daily business operations."
              </p>
              <div className="text-xs text-[#263442]/60 pt-2 border-t border-slate-100">
                Awaiting official executive ratification.
              </div>
            </div>

            {/* Proposed Vision */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#17365D]/10 text-[#17365D] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Proposed Draft
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#17365D]">
                Proposed Vision Statement
              </h3>
              <p className="text-sm text-[#263442]/85 leading-relaxed italic">
                "To become a trusted, internationally recognized enterprise consulting and intelligent systems partner, known for technical clarity, transparent delivery, and dependable customer relationships."
              </p>
              <div className="text-xs text-[#263442]/60 pt-2 border-t border-slate-100">
                Awaiting official executive ratification.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Corporate Values"
          title="Principles That Guide Distinct Systems"
          description="We operate on structured business ethics, technical honesty, and engineering precision across every client relationship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#17365D]/40 transition-colors">
            <div className="w-10 h-10 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17365D] mb-2">Technical Honesty</h4>
            <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
              We provide realistic timelines, transparent architecture recommendations, and verifiable capability statements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#17365D]/40 transition-colors">
            <div className="w-10 h-10 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-4">
              <Workflow className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17365D] mb-2">Enterprise Rigor</h4>
            <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
              We apply disciplined configuration control, change governance, and SLA standards to ensure zero business disruption.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#17365D]/40 transition-colors">
            <div className="w-10 h-10 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17365D] mb-2">Pragmatic Innovation</h4>
            <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
              We deploy AI, ML, and automation where they generate proven operational return, avoiding unnecessary technological complexity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#17365D]/40 transition-colors">
            <div className="w-10 h-10 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17365D] mb-2">Client Partnership</h4>
            <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
              We view engagements as collaborative commitments, working closely alongside internal leadership to achieve lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Technology-Driven Business Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17365D] rounded-xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Our Technology-Driven Business Approach
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At Distinct Systems, every engagement begins with deep operational analysis. Whether implementing an enterprise ERP system or deploying an automated machine learning pipeline, we align software architecture directly with quantifiable business KPIs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs text-slate-300 border-t border-white/10">
              <div>
                <span className="text-white font-bold block mb-1">1. Discovery & Architecture</span>
                Rigorous operational mapping, technical stack evaluation, and feasibility assessment.
              </div>
              <div>
                <span className="text-white font-bold block mb-1">2. Disciplined Delivery</span>
                Milestone-based agile execution with continuous client visibility and QA verification.
              </div>
              <div>
                <span className="text-white font-bold block mb-1">3. Long-Term Governance</span>
                Ongoing support SLAs, system health telemetry, and phased capability expansion.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

