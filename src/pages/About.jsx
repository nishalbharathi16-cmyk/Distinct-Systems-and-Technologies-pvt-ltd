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
  ArrowRight,
  Award,
  Users2,
  Cpu
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProposedContentBadge from '../components/ProposedContentBadge';
import Button from '../components/Button';
import { COMPANY_INFO } from '../data/company';

export const About = () => {
  return (
    <div className="relative min-h-screen bg-[#061220] text-slate-100 py-12 sm:py-16 space-y-16 overflow-hidden">
      
      {/* 
        Enterprise About Technical Background Canvas:
        1. Deep midnight navy background (#061220)
        2. Cybernetic dot-matrix grid
        3. Subtle architectural blueprint watermark
        4. Atmospheric radial ambient glow orbs
      */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(rgba(77, 208, 201, 0.12) 1px, transparent 1px),
            radial-gradient(rgba(23, 54, 93, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px, 64px 64px',
          backgroundPosition: '0 0, 16px 16px'
        }}
      />

      {/* Subtle Ambient Watermark */}
      <div 
        className="absolute -top-10 left-0 right-0 h-[750px] bg-cover bg-center opacity-10 pointer-events-none mix-blend-luminosity filter blur-[0.5px]"
        style={{ backgroundImage: `url('/about/business-brainstorming-bg.jpg')` }}
      />

      {/* Atmospheric Radial Lighting Orbs */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#267C78]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-20 w-[700px] h-[700px] bg-[#17365D]/30 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[650px] h-[650px] bg-[#0c2e56]/25 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* 1. Page Header with Business Brainstorming & Strategic Ideation Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#0a1829] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-slate-700/60 mb-8 group min-h-[440px] flex items-center">
          {/* Business Brainstorming & Strategic Ideation Background Photo */}
          <div 
            className="absolute inset-0 bg-cover bg-[center_40%] opacity-35 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url('/about/business-brainstorming-bg.jpg')` }}
          />
          {/* Frosted Directional Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1829]/95 via-[#0d2038]/90 md:via-[#0e223b]/70 to-black/30 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1829]/60 via-transparent to-black/20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#4dd0c9] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#4dd0c9]" />
                <span>Corporate Profile • Strategic Technology Consulting</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                About Distinct Systems and Technologies
              </h1>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
                AI/ML digital technology enterprise providing technology consulting, specialized talent augmentation, and enterprise SAP implementations.
              </p>

              {/* Technical Practice Highlights Pills */}
              <div className="pt-2 flex flex-wrap gap-2.5 text-xs">
                <span className="bg-white/10 hover:bg-white/15 text-white font-medium px-3.5 py-1.5 rounded-lg border border-white/15 backdrop-blur-md transition-colors">
                  Strategic Advisory
                </span>
                <span className="bg-white/10 hover:bg-white/15 text-white font-medium px-3.5 py-1.5 rounded-lg border border-white/15 backdrop-blur-md transition-colors">
                  AI & Machine Learning
                </span>
                <span className="bg-white/10 hover:bg-white/15 text-white font-medium px-3.5 py-1.5 rounded-lg border border-white/15 backdrop-blur-md transition-colors">
                  SAP S/4HANA Practice
                </span>
                <span className="bg-white/10 hover:bg-white/15 text-white font-medium px-3.5 py-1.5 rounded-lg border border-white/15 backdrop-blur-md transition-colors">
                  Staff Augmentation
                </span>
              </div>
            </div>

            {/* Right Card: Business Brainstorming & Ideation Showcase */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="group/card relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md transition-all duration-300 hover:border-[#4dd0c9]/50">
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src="/about/brainstorming-ideation.jpg" 
                    alt="Distinct Systems Business Brainstorming & Agile Ideation"
                    className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1829] via-[#0a1829]/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a1829]/90 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow">
                      <Sparkles className="w-3 h-3 text-[#4dd0c9]" />
                      <span>Agile Strategy & Ideation</span>
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4dd0c9] block mb-0.5">
                      Strategic Architecture Mapping
                    </span>
                    <p className="text-xs text-slate-200 leading-snug">
                      Collaborative cross-functional brainstorming for enterprise solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Info Grid - Frosted Glass Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[#0a1829]/90 backdrop-blur-md p-5 rounded-xl border border-slate-700/60 shadow-lg hover:border-[#4dd0c9]/40 transition-colors group">
            <span className="text-xs text-slate-400 block mb-1">Corporate Entity</span>
            <span className="text-base font-bold text-white group-hover:text-[#4dd0c9] transition-colors">Pvt. Ltd.</span>
            <span className="text-xs text-slate-300 block mt-0.5">Incorporated in India</span>
          </div>
          <div className="bg-[#0a1829]/90 backdrop-blur-md p-5 rounded-xl border border-slate-700/60 shadow-lg hover:border-[#4dd0c9]/40 transition-colors group">
            <span className="text-xs text-slate-400 block mb-1">Established</span>
            <span className="text-base font-bold text-white group-hover:text-[#4dd0c9] transition-colors">March 2019</span>
            <span className="text-xs text-slate-300 block mt-0.5">Chennai, Tamil Nadu</span>
          </div>
          <div className="bg-[#0a1829]/90 backdrop-blur-md p-5 rounded-xl border border-slate-700/60 shadow-lg hover:border-[#4dd0c9]/40 transition-colors group">
            <span className="text-xs text-slate-400 block mb-1">Sector</span>
            <span className="text-base font-bold text-white group-hover:text-[#4dd0c9] transition-colors">IT & Consulting</span>
            <span className="text-xs text-slate-300 block mt-0.5">Enterprise Software</span>
          </div>
          <div className="bg-[#0a1829]/90 backdrop-blur-md p-5 rounded-xl border border-slate-700/60 shadow-lg hover:border-[#4dd0c9]/40 transition-colors group">
            <span className="text-xs text-slate-400 block mb-1">Official Portal</span>
            <span className="text-base font-bold text-[#4dd0c9] group-hover:underline">distinctsystems.com</span>
            <span className="text-xs text-slate-300 block mt-0.5">Verified Domain</span>
          </div>
        </div>
      </section>

      {/* 2. Company Background & Practice Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4dd0c9] bg-[#267C78]/25 px-2.5 py-0.5 rounded-md border border-[#267C78]/40 inline-block">
                Company Provenance
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Delivering Dependable Digital & Enterprise Capabilities
              </h2>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {COMPANY_INFO.description}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Founded in 2019 in Chennai, Distinct Systems focuses on high-impact business systems, applied computational intelligence, and specialized engineering talent.
              </p>

              {/* Registered Office Notice Card */}
              <div className="bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#4dd0c9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold">Registered Office:</strong> Chennai, Tamil Nadu, India. Privately held entity registered with the Registrar of Companies (ROC Chennai).
                </div>
              </div>
            </div>

            {/* Right Practice Pillars Cockpit */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0c233f] to-[#081728] rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-base font-bold text-white">
                  Practice Pillars
                </h3>
                <span className="text-xs text-[#4dd0c9] font-semibold px-2 py-0.5 rounded bg-[#267C78]/25 border border-[#267C78]/30">
                  Core Delivery
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/40 transition-all flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#267C78]/30 text-[#4dd0c9] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-[#267C78]/40">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Applied AI & Data Science</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Predictive modeling, cognitive automation, and telemetry analytics.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/40 transition-all flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#17365D]/60 text-[#4dd0c9] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-white/15">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">SAP S/4HANA & ERP</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Implementation, module alignment, and ongoing SLA support.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/40 transition-all flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-white/15">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Advisory & Staff Scaling</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Technology consulting and on-demand specialized engineering pods.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/services" variant="primary" size="sm" icon={ArrowRight} className="w-full justify-center">
                  View Services Directory
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Culture in Action: Collaborative Engineering & Design Thinking */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4dd0c9] bg-[#267C78]/25 px-2.5 py-0.5 rounded-md border border-[#267C78]/40 inline-block">
                Our Culture in Action
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Collaborative Problem-Solving & Design Thinking
              </h2>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                At Distinct Systems, innovation is rooted in hands-on collaboration. Our engineers, business analysts, and solution architects actively engage in structured design thinking workshops, agile sprint planning, and architectural mapping.
              </p>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether blueprinting an enterprise SAP S/4HANA rollout, designing predictive AI data pipelines, or solving complex systems telemetry, our teams build consensus through active ideation, peer review, and disciplined technical strategy.
              </p>

              {/* Two Frosted Highlight Cards */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#4dd0c9] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Design Thinking Ideation</span>
                    <p className="text-slate-300 mt-1 leading-relaxed">Iterative sprint discovery and architecture alignment.</p>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#4dd0c9] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Cross-Functional Pods</span>
                    <p className="text-slate-300 mt-1 leading-relaxed">Engineers and domain leads co-designing client solutions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-5">
              <div className="group relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-white/5 backdrop-blur-md">
                <img
                  src="/about/collaboration-workshops.jpg"
                  alt="Distinct Systems Engineering Team Collaborative Workshop & Strategy Session"
                  className="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1829] via-[#0a1829]/40 to-transparent pointer-events-none" />
                
                {/* Overlay Caption Tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4dd0c9] block mb-0.5">
                    Strategic Workshop Session
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 drop-shadow-sm">
                    Distinct Systems team in interactive sprint planning and architecture ideation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Strategic Orientation (Mission & Vision) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl p-6 sm:p-10 lg:p-12 text-white space-y-8">
          
          <div className="text-center max-w-xl mx-auto">
            <ProposedContentBadge 
              text="Proposed Statements • Pending Formal Approval"
              className="mb-3"
            />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Strategic Orientation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Proposed Mission */}
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#4dd0c9]/40 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#267C78]/25 text-[#4dd0c9] flex items-center justify-center border border-[#267C78]/30">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded-md border border-amber-500/30">
                  Proposed Draft
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#4dd0c9] transition-colors">
                Mission Statement
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic border-l-2 border-[#4dd0c9] pl-3.5">
                "To deliver pragmatic digital technology solutions and enterprise ERP services that bridge the gap between computational intelligence and reliable daily business operations."
              </p>
            </div>

            {/* Proposed Vision */}
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#4dd0c9]/40 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#17365D]/60 text-[#4dd0c9] flex items-center justify-center border border-white/20">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded-md border border-amber-500/30">
                  Proposed Draft
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#4dd0c9] transition-colors">
                Vision Statement
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic border-l-2 border-[#267C78] pl-3.5">
                "To become a trusted, internationally recognized enterprise consulting and intelligent systems partner, known for technical clarity, transparent delivery, and dependable customer relationships."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl p-6 sm:p-10 lg:p-12 text-white space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4dd0c9] bg-[#267C78]/25 px-2.5 py-0.5 rounded-md border border-[#267C78]/40 inline-block">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Principles That Guide Distinct Systems
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We operate on structured business ethics, technical honesty, and engineering precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#267C78]/25 text-[#4dd0c9] flex items-center justify-center mb-3.5 border border-[#267C78]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                Technical Honesty
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                Transparent architecture advice, realistic timelines, and verifiable capabilities.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#267C78]/25 text-[#4dd0c9] flex items-center justify-center mb-3.5 border border-[#267C78]/30">
                <Workflow className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                Enterprise Rigor
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                Disciplined change control, process governance, and strict SLA accountability.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#267C78]/25 text-[#4dd0c9] flex items-center justify-center mb-3.5 border border-[#267C78]/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                Pragmatic Tech
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                Deploying AI, ML, and automation where they generate proven operational return.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#267C78]/25 text-[#4dd0c9] flex items-center justify-center mb-3.5 border border-[#267C78]/30">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                Client Partnership
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                Collaborative commitments focused on long-term operational success.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
