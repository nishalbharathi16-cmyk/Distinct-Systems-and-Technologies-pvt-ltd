import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  BarChart3, 
  Users2, 
  Network, 
  Database, 
  Compass, 
  Building2, 
  Sparkles,
  Server,
  Workflow
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES, SOLUTIONS } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export const Home = () => {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 sm:py-24 lg:py-28">
        {/* Subtle corporate grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#17365D 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5F7] border border-slate-200 text-xs sm:text-sm font-medium text-[#17365D]">
                <span className="w-2 h-2 rounded-full bg-[#267C78]" />
                <span>Enterprise IT Consulting & Digital Technology • Founded 2019</span>
              </div>

              {/* Exact Hero Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight leading-[1.15]">
                Engineering Intelligent Solutions for a Connected Future.
              </h1>

              {/* Exact Hero Supporting Text */}
              <p className="text-lg sm:text-xl text-[#263442]/85 leading-relaxed max-w-2xl">
                Empowering businesses through intelligent technology, enterprise solutions, and digital innovation.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button to="/services" variant="primary" size="lg" icon={ArrowRight}>
                  Explore Our Services
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>

              {/* Trust highlights bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-[#17365D]">2019</span>
                  <span className="text-xs sm:text-sm text-[#263442]/70">Founded in Chennai</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-[#267C78]">SAP S/4HANA</span>
                  <span className="text-xs sm:text-sm text-[#263442]/70">Core Practice</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-[#17365D]">AI & ML</span>
                  <span className="text-xs sm:text-sm text-[#263442]/70">Digital Solutions</span>
                </div>
              </div>
            </div>

            {/* Right Graphic: Enterprise Systems Architecture Visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-[#F2F5F7] rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-card">
                
                {/* Header card pill */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#17365D]" />
                    <span className="text-xs font-bold text-[#17365D] uppercase tracking-wider">
                      Enterprise Technology Architecture
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#267C78] bg-[#267C78]/10 px-2 py-0.5 rounded">
                    Unified Framework
                  </span>
                </div>

                {/* Layered architectural representation */}
                <div className="space-y-3.5 my-6">
                  {/* Layer 1: Intelligence */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-subtle flex items-start gap-3.5">
                    <div className="p-2 rounded bg-[#267C78]/10 text-[#267C78] shrink-0 mt-0.5">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17365D]">Applied AI & Data Science Layer</h4>
                      <p className="text-xs text-[#263442]/80 mt-0.5">
                        Predictive algorithms, intelligent process automation, and statistical telemetry models.
                      </p>
                    </div>
                  </div>

                  {/* Layer 2: ERP Backbone */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-subtle flex items-start gap-3.5">
                    <div className="p-2 rounded bg-[#17365D]/10 text-[#17365D] shrink-0 mt-0.5">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17365D]">SAP S/4HANA & Enterprise ERP</h4>
                      <p className="text-xs text-[#263442]/80 mt-0.5">
                        End-to-end implementation, financial consolidation, materials management, and SLA support.
                      </p>
                    </div>
                  </div>

                  {/* Layer 3: Integration & Talent */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-subtle flex items-start gap-3.5">
                    <div className="p-2 rounded bg-slate-100 text-[#263442] shrink-0 mt-0.5">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17365D]">Technology Consulting & Specialized Staffing</h4>
                      <p className="text-xs text-[#263442]/80 mt-0.5">
                        Strategic architectural guidance and on-demand engineering pods to accelerate project velocity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer status notice */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#263442]/70">
                  <span>Architecture Standard: High Availability</span>
                  <span className="font-medium text-[#17365D]">Chennai, TN, India</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION / VERIFIED PROFILE */}
      <section className="py-16 bg-[#F2F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200/80 p-8 sm:p-10 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                  Corporate Introduction
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
                  Distinct Systems & Technologies Pvt. Ltd.
                </h2>
                <p className="text-base sm:text-lg text-[#263442] leading-relaxed">
                  {COMPANY_INFO.description}
                </p>
                <p className="text-sm text-[#263442]/80 leading-relaxed">
                  Founded in 2019 in Chennai, Tamil Nadu, Distinct Systems was established to help enterprise organizations bridge the gap between strategic technology vision and dependable on-the-ground operational execution.
                </p>
              </div>

              <div className="lg:col-span-4 bg-[#F2F5F7] rounded-lg p-6 border border-slate-200 space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17365D]">
                  Verified Corporate Details
                </h4>
                <div className="space-y-2 text-xs text-[#263442]">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Legal Entity:</span>
                    <span className="font-semibold text-right">Private Limited</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Headquarters:</span>
                    <span className="font-semibold text-right">Chennai, Tamil Nadu</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Incorporation:</span>
                    <span className="font-semibold text-right">March 2019</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Official Portal:</span>
                    <span className="font-semibold text-right text-[#267C78]">distinctsystems.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE TECHNOLOGY EXPERTISE (All 10 Areas) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Comprehensive Technology Capabilities"
            description="Our specialized expertise spans next-generation intelligent algorithms, robust enterprise systems, and scalable technical advisory."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPANY_INFO.expertise.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#F2F5F7] rounded-lg p-5 border border-slate-200/80 hover:border-[#17365D]/40 hover:bg-white hover:shadow-card transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded bg-white text-[#267C78] group-hover:bg-[#17365D] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#17365D] group-hover:text-[#267C78] transition-colors leading-snug">
                    {item}
                  </h4>
                  <span className="block text-[11px] text-[#263442]/60 mt-1">Verified Practice</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-20 bg-[#F2F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialized Services"
            title="Engineered for Scalable Enterprise Value"
            description="Discover how our structured technology services deliver strategic outcomes across development, modernization, and business operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                featured={index === 0 || index === 4} 
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="navy" size="lg" icon={ArrowRight}>
              View Comprehensive Services Directory
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SAP S/4HANA HIGHLIGHT */}
      <section className="py-20 bg-[#17365D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#267C78] px-3 py-1 rounded bg-white/10 inline-block">
                Enterprise Core Competency
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Enterprise Resource Modernization with SAP S/4HANA
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Distinct Systems provides enterprise-grade SAP S/4HANA implementation and functional support services designed to integrate core business operations with absolute transparency, data integrity, and compliance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white text-sm mb-1">Implementation & Migration</h4>
                  <p className="text-xs text-slate-300">
                    Phased rollout, legacy migration, architecture validation, and zero-business-disruption cutover protocols.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white text-sm mb-1">L2/L3 Operational Support</h4>
                  <p className="text-xs text-slate-300">
                    SLA-governed incident resolution, performance tuning, routine patch application, and user enablement.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button to="/sap-solutions" variant="primary" size="md" icon={ArrowRight}>
                  Explore SAP Practice
                </Button>
                <Button to="/contact" variant="outlineWhite" size="md">
                  Discuss SAP Support SLAs
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white text-[#263442] rounded-xl p-8 shadow-2xl border border-white/20 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h4 className="text-base font-bold text-[#17365D]">SAP Engagement Highlights</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#267C78]/10 text-[#267C78]">
                    Active Practice
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#267C78] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#17365D]">End-to-End Delivery:</span>
                      <p className="text-xs text-slate-600 mt-0.5">Scoping, blueprinting, configuration, testing, and go-live.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#267C78] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#17365D]">Specialized Augmentation:</span>
                      <p className="text-xs text-slate-600 mt-0.5">Subject-matter experts across core ERP and analytical modules.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#267C78] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#17365D]">Rigorous SLA Governance:</span>
                      <p className="text-xs text-slate-600 mt-0.5">Measurable uptime standards and transparent ticket handling.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F5F7] p-3 rounded text-xs text-[#263442]/80 border-l-2 border-[#17365D]">
                  <span className="font-semibold text-[#17365D] block mb-0.5">Verified Corporate Capability</span>
                  Distinct Systems maintains dedicated expertise across SAP implementation and technical support services.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Enterprise Solutions"
            title="Strategic Architecture for Complex Challenges"
            description="Our solutions bring together data engineering, algorithm development, and enterprise resource governance into cohesive systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.slice(0, 3).map((sol) => (
              <div 
                key={sol.id} 
                className="bg-[#F2F5F7] rounded-lg p-6 sm:p-8 border border-slate-200/80 hover:border-[#17365D]/30 transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#267C78] uppercase tracking-wider block mb-2">
                    {sol.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#17365D] mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-[#263442]/85 leading-relaxed mb-6">
                    {sol.summary}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {sol.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#263442]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#267C78] shrink-0 mt-1.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    to="/solutions"
                    className="text-xs font-bold text-[#17365D] hover:text-[#267C78] inline-flex items-center gap-1"
                  >
                    <span>Explore Solution Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/solutions" variant="outline" size="md">
              View All Five Solution Portfolios
            </Button>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE DISTINCT SYSTEMS */}
      <section className="py-20 bg-[#F2F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Distinct Systems"
            title="A Pragmatic, Business-First Technology Partner"
            description="We focus on enterprise clarity, engineering rigor, and dependable delivery over hype or unverified claims."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-subtle">
              <div className="w-10 h-10 rounded bg-[#F2F5F7] text-[#17365D] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-[#267C78]" />
              </div>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Verified Experience</h4>
              <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
                Incorporated in 2019 in Chennai, offering an established foundation in enterprise IT consulting and digital solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-subtle">
              <div className="w-10 h-10 rounded bg-[#F2F5F7] text-[#17365D] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-[#267C78]" />
              </div>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Pragmatic AI & ML</h4>
              <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
                Applied machine learning grounded in measurable business processes rather than generic theoretical models.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-subtle">
              <div className="w-10 h-10 rounded bg-[#F2F5F7] text-[#17365D] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#267C78]" />
              </div>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Enterprise SAP Discipline</h4>
              <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
                Rigorous adherence to enterprise resource governance, business process continuity, and SLA accountability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-subtle">
              <div className="w-10 h-10 rounded bg-[#F2F5F7] text-[#17365D] flex items-center justify-center mb-4">
                <Users2 className="w-5 h-5 text-[#267C78]" />
              </div>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Elastic Staff Augmentation</h4>
              <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
                Immediate access to vetted engineers, architects, and ERP professionals to rapidly bolster development velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT CTA BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#17365D] rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to Discuss Your Enterprise Technology Needs?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with Distinct Systems to explore technology consulting, AI/ML development, staff augmentation, or SAP implementations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Initiate Corporate Enquiry
              </Button>
              <Button to="/services" variant="outlineWhite" size="lg">
                Review Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

