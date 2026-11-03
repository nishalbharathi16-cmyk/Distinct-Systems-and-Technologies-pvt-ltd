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
import CertificationsSection from '../components/CertificationsSection';

export const Home = () => {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION WITH ORIGINAL LEADERSHIP PHOTO */}
      <section className="relative overflow-hidden bg-[#17365D] text-white py-16 sm:py-24 lg:py-32">
        {/* Exact Uploaded Original Photo */}
        <img
          src="/hero-bg.jpg"
          alt="Distinct Systems Executive Leadership & Training Session - Dr. Manimaran"
          className="absolute inset-0 w-full h-full object-cover object-[85%_25%] sm:object-[82%_30%] select-none pointer-events-none"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Gradient strictly over left text; right half is 100% natural, clear, and untouched */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17365D]/95 via-[#17365D]/80 to-transparent lg:w-[50%] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#267C78]" />
              <span>Enterprise IT Consulting & Digital Tech • Est. 2019</span>
            </div>

            {/* Exact Hero Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-sm">
              Engineering Intelligent Solutions for a Connected Future.
            </h1>

            {/* Exact Hero Supporting Text */}
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl">
              Empowering businesses through intelligent technology, enterprise solutions, and digital innovation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/services" variant="primary" size="lg" icon={ArrowRight}>
                Explore Our Services
              </Button>
              <Button to="/contact" variant="outlineWhite" size="lg">
                Contact Us
              </Button>
            </div>

            {/* Trust highlights bar */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-4 text-left max-w-lg">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-white">2019</span>
                <span className="text-xs text-slate-200">Founded in Chennai</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-[#267C78]">SAP S/4HANA</span>
                <span className="text-xs text-slate-200">Core Practice</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-white">AI & ML</span>
                <span className="text-xs text-slate-200">Digital Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Session Caption Tag on the Right */}
        <div className="hidden lg:flex absolute bottom-6 right-8 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17365D]/80 backdrop-blur-md border border-white/20 text-white text-xs shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium tracking-wide">Dr. Manimaran • Distinct Systems Leadership Session</span>
        </div>
      </section>

      {/* Floating Architecture 3-Card Deck (Positioned below Hero, leaving the hero photo completely open & visible) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#267C78]/10 text-[#267C78] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#17365D]">AI & Data Science</h4>
              <p className="text-xs text-[#263442]/80 mt-0.5 leading-relaxed">
                Predictive algorithms, machine learning pipelines, and automated intelligence.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#17365D]/10 text-[#17365D] shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#17365D]">SAP S/4HANA & ERP</h4>
              <p className="text-xs text-[#263442]/80 mt-0.5 leading-relaxed">
                Core implementation, smooth digital migration, and SLA-governed maintenance.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#267C78]/10 text-[#267C78] shrink-0">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#17365D]">Consulting & Staffing</h4>
              <p className="text-xs text-[#263442]/80 mt-0.5 leading-relaxed">
                Strategic technology advisory and specialized on-demand engineering pods.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. COMPANY INTRODUCTION / VERIFIED PROFILE */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                  Company Profile
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
                  Distinct Systems & Technologies Pvt. Ltd.
                </h2>
                <p className="text-base text-[#263442] leading-relaxed">
                  {COMPANY_INFO.description}
                </p>
                <p className="text-sm text-[#263442]/75">
                  Founded in 2019 in Chennai, we bridge the gap between high-level technology strategy and reliable operational execution.
                </p>
              </div>

              <div className="lg:col-span-4 bg-[#F2F5F7] rounded-xl p-5 border border-slate-200 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17365D]">
                  Corporate Details
                </h4>
                <div className="space-y-1.5 text-xs text-[#263442]">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Entity:</span>
                    <span className="font-semibold text-right">Private Limited</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Headquarters:</span>
                    <span className="font-semibold text-right">Chennai, Tamil Nadu</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Founded:</span>
                    <span className="font-semibold text-right">March 2019</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Domain:</span>
                    <span className="font-semibold text-right text-[#267C78]">distinctsystems.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE TECHNOLOGY EXPERTISE */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Comprehensive Technology Capabilities"
            description="Specialized enterprise expertise across next-generation intelligence, ERP backbones, and technical advisory."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {COMPANY_INFO.expertise.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-card hover:border-[#17365D]/40 transition-all group flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F2F5F7] text-[#267C78] group-hover:bg-[#17365D] group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#17365D] group-hover:text-[#267C78] transition-colors leading-snug">
                    {item}
                  </h4>
                  <span className="block text-[10px] text-[#263442]/60 mt-1">Verified Practice</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Engineered for Scalable Enterprise Value"
            description="Explore our specialized services across AI/ML development, modern architecture, and SAP support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                featured={index === 0 || index === 4} 
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/services" variant="navy" size="md" icon={ArrowRight}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SAP S/4HANA HIGHLIGHT */}
      <section className="py-16 bg-[#17365D] text-white relative overflow-hidden">
        {/* Subtle Ambient Background with SAP Architecture & Fiori Launchpad */}
        <div 
          className="absolute inset-0 bg-cover bg-right opacity-25 pointer-events-none"
          style={{ backgroundImage: `url('/services/sap-fiori-graphic.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17365D] via-[#17365D]/95 to-[#17365D]/75 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#267C78] px-3 py-1 rounded bg-white/10 inline-block">
                Enterprise Core Practice
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Enterprise Resource Modernization with SAP S/4HANA
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We deliver end-to-end SAP S/4HANA implementations, smooth ERP migrations, and SLA-governed support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white text-sm mb-1">Implementation & Migration</h4>
                  <p className="text-xs text-slate-300">
                    Phased rollouts with zero business disruption.
                  </p>
                </div>
                <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white text-sm mb-1">L2/L3 Operational Support</h4>
                  <p className="text-xs text-slate-300">
                    SLA-governed incident resolution and routine tuning.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button to="/sap-solutions" variant="primary" size="md" icon={ArrowRight}>
                  Explore SAP Practice
                </Button>
                <Button to="/contact" variant="outlineWhite" size="md">
                  Discuss SAP Support
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white text-[#263442] rounded-xl p-6 shadow-xl border border-white/20 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-[#17365D]">SAP Highlights</h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#267C78]/10 text-[#267C78]">
                    Active Practice
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#17365D]">End-to-End Delivery:</span>
                      <p className="text-slate-600">Scoping, configuration, testing, and go-live.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#17365D]">Talent Augmentation:</span>
                      <p className="text-slate-600">Certified consultants across FICO, MM, SD, and PP.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#17365D]">SLA Governance:</span>
                      <p className="text-slate-600">Clear response tiers and system health monitoring.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F5F7] p-2.5 rounded text-[11px] text-[#263442]/80 border-l-2 border-[#17365D]">
                  Dedicated in-house practice for enterprise SAP implementations.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY SOLUTIONS */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solutions"
            title="Strategic Architecture for Complex Challenges"
            description="Our solutions bring together data engineering, predictive algorithms, and enterprise systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.slice(0, 3).map((sol) => (
              <div 
                key={sol.id} 
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:border-[#17365D]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#267C78] uppercase tracking-wider block mb-1.5">
                    {sol.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#17365D] mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#263442]/85 leading-relaxed mb-4">
                    {sol.summary}
                  </p>
                  
                  <div className="space-y-1.5 mb-5">
                    {sol.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#263442]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#267C78] shrink-0 mt-1.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    to="/solutions"
                    className="text-xs font-bold text-[#17365D] hover:text-[#267C78] inline-flex items-center gap-1"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button to="/solutions" variant="outline" size="md">
              View All 5 Solution Frameworks
            </Button>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE DISTINCT SYSTEMS */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Distinct"
            title="A Pragmatic, Business-First Partner"
            description="We focus on enterprise discipline, technical honesty, and measurable delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-card">
              <div className="w-9 h-9 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#17365D] mb-1.5">Verified Foundation</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Founded in 2019 in Chennai with a proven focus on IT consulting and systems delivery.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-card">
              <div className="w-9 h-9 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#17365D] mb-1.5">Applied AI & ML</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Machine learning models engineered to solve tangible operational bottlenecks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-card">
              <div className="w-9 h-9 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#17365D] mb-1.5">SAP Discipline</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Strict adherence to process governance, business continuity, and SLA standards.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-card">
              <div className="w-9 h-9 rounded bg-[#F2F5F7] text-[#267C78] flex items-center justify-center mb-3">
                <Users2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#17365D] mb-1.5">Talent Augmentation</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Vetted developers, data scientists, and ERP specialists to accelerate delivery sprints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CERTIFICATIONS & RECOGNITIONS */}
      <CertificationsSection />

      {/* 9. CONTACT CTA BANNER */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#17365D] rounded-2xl p-7 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                Get In Touch
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ready to Discuss Your Technology Requirements?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect with our team for consulting, AI/ML development, staffing, or SAP support.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Initiate Corporate Enquiry
              </Button>
              <Button to="/services" variant="outlineWhite" size="md">
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
