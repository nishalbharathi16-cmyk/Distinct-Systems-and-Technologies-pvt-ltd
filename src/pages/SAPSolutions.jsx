import React from 'react';
import {
  Layers,
  ShieldCheck,
  Database,
  RefreshCw,
  Workflow,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Server,
  Activity,
  Cpu
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export const SAPSolutions = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">

      {/* 1. Header & Dedicated Enterprise SAP Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#0a1829] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-700/60 min-h-[480px] flex items-center group">
          {/* High-Resolution SAP Architecture Visual Background */}
          <div
            className="absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url('/services/sap-hero-clean-bg.jpg')` }}
          />
          {/* Dark Frosted Glass Directional Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1829]/95 via-[#0d2038]/90 md:via-[#0e223b]/70 to-black/30 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1829]/60 via-transparent to-black/30" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#4dd0c9] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#4dd0c9]" />
              <span>Enterprise Core Competency • SAP S/4HANA</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] drop-shadow-md">
              SAP Solutions & S/4HANA Implementation Services
            </h1>
            
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-sm">
              Distinct Systems delivers enterprise consulting, phased implementation, and SLA-governed support services for SAP environments.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button to="/contact?subject=SAP%20S/4HANA%20Consulting" variant="primary" size="lg" icon={ArrowRight}>
                Schedule SAP Scoping Call
              </Button>
              <Button to="#support" variant="outlineWhite" size="lg">
                Review Support SLAs
              </Button>
            </div>
          </div>
        </div>

        {/* Practice Disclaimer Note - Dark Glass Panel */}
        <div className="bg-[#0a1829]/90 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-slate-700/60 text-xs text-slate-300 mt-6 flex items-start gap-3 shadow-lg">
          <AlertCircle className="w-4 h-4 text-[#4dd0c9] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white font-semibold">Notice:</strong> Distinct Systems and Technologies Pvt. Ltd. provides independent enterprise consulting, implementation, and technical maintenance services for organizations utilizing SAP software products. SAP and SAP S/4HANA are registered trademarks of SAP SE. Distinct Systems operates as an independent technical advisory and delivery provider.
          </p>
        </div>
      </section>

      {/* 2. SAP S/4HANA Modernization & Module Coverage Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
          {/* Subtle Ambient Blueprint Graphic */}
          <div 
            className="absolute inset-0 bg-cover bg-right opacity-15 pointer-events-none"
            style={{ backgroundImage: `url('/services/sap-fiori-graphic.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1829] via-[#0a1829]/90 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Modernization Roadmap Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4dd0c9] bg-[#267C78]/25 px-2.5 py-0.5 rounded-md border border-[#267C78]/40 inline-block">
                Modernization Roadmap
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                Modernizing Enterprise Resource Planning with SAP S/4HANA
              </h2>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Migrating or deploying SAP S/4HANA is a critical transformation milestone. Distinct Systems guides organizations through meticulous process scoping, business blueprinting, custom ABAP remediation, data cleansing, and cutover execution.
              </p>

              {/* Three Modernization Pillars */}
              <div className="space-y-3.5 pt-2">
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-[#4dd0c9]/40 transition-colors flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#267C78]/30 text-[#4dd0c9] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4dd0c9]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Greenfield & Brownfield Transitions</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Whether starting fresh or modernizing existing SAP ECC instances, we design migration roadmaps that safeguard data fidelity and zero operational downtime.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-[#4dd0c9]/40 transition-colors flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#267C78]/30 text-[#4dd0c9] shrink-0 mt-0.5">
                    <Workflow className="w-4 h-4 text-[#4dd0c9]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Business Process Integration</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Unifying sales, finance, inventory, and procurement into an in-memory transactional backbone with real-time sub-second analytics reporting.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-[#4dd0c9]/40 transition-colors flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#267C78]/30 text-[#4dd0c9] shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4 text-[#4dd0c9]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Custom Enhancement & Clean Core</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Building clean-core extensions and cloud integrations via SAP BTP without compromising the seamless upgrade pathway of standard modules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3.5">
                <Button to="/contact?subject=SAP%20S/4HANA%20Consulting" variant="primary" size="md" icon={ArrowRight}>
                  Schedule Consultation
                </Button>
                <Button to="/services#staff-augmentation" variant="outlineWhite" size="md">
                  Request SAP Talent
                </Button>
              </div>
            </div>

            {/* Right Column: SAP Module Matrix Cockpit */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0c233f] to-[#081728] rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-slate-700/80 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-base font-bold text-white">SAP Module Coverage</h3>
                  <span className="text-[11px] text-slate-300">Certified Functional & Technical Depth</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#267C78] text-white shadow-sm">
                  Enterprise Suite
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all group">
                  <span className="font-bold text-white block mb-0.5 group-hover:text-[#4dd0c9] transition-colors">SAP FICO</span>
                  <span className="text-slate-300 text-[11px] leading-tight block">Financials, Controlling & Treasury</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all group">
                  <span className="font-bold text-white block mb-0.5 group-hover:text-[#4dd0c9] transition-colors">SAP MM</span>
                  <span className="text-slate-300 text-[11px] leading-tight block">Materials & Sourcing Procurement</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all group">
                  <span className="font-bold text-white block mb-0.5 group-hover:text-[#4dd0c9] transition-colors">SAP SD</span>
                  <span className="text-slate-300 text-[11px] leading-tight block">Sales, Billing & Order Logistics</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all group">
                  <span className="font-bold text-white block mb-0.5 group-hover:text-[#4dd0c9] transition-colors">SAP PP / QM</span>
                  <span className="text-slate-300 text-[11px] leading-tight block">Production Planning & Quality</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all group">
                  <span className="font-bold text-white block mb-0.5 group-hover:text-[#4dd0c9] transition-colors">SAP ABAP / BTP</span>
                  <span className="text-slate-300 text-[11px] leading-tight block">Cloud Development & APIs</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all group">
                  <span className="font-bold text-white block mb-0.5 group-hover:text-[#4dd0c9] transition-colors">SAP Basis</span>
                  <span className="text-slate-300 text-[11px] leading-tight block">System Admin, DB & Housekeeping</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-300 border-t border-white/10 flex items-center justify-between">
                <span>Full lifecycle advisory to post-go-live hypercare.</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SAP Implementation Lifecycle (5 Phases) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl p-6 sm:p-10 lg:p-12 text-white space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4dd0c9] bg-[#267C78]/25 px-2.5 py-0.5 rounded-md border border-[#267C78]/40 inline-block">
              Implementation Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Disciplined Phased Execution Framework
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Our implementation methodology follows a structured, milestone-driven framework to reduce delivery risk and maintain uninterrupted operational continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Phase 01 */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#4dd0c9] uppercase tracking-wider block mb-2 px-2 py-0.5 rounded bg-[#267C78]/25 border border-[#267C78]/40 w-fit">
                  Phase 01
                </span>
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                  Discover & Scope
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  As-is process mapping, technical audit, custom ABAP inspection, and architectural baseline definition.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-slate-400">
                Scope & Risk Matrix
              </div>
            </div>

            {/* Phase 02 */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#4dd0c9] uppercase tracking-wider block mb-2 px-2 py-0.5 rounded bg-[#267C78]/25 border border-[#267C78]/40 w-fit">
                  Phase 02
                </span>
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                  Blueprinting
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  To-be target process definition, business blueprint sign-off, and module customization matrix.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-slate-400">
                Process Sign-Off Document
              </div>
            </div>

            {/* Phase 03 */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#4dd0c9] uppercase tracking-wider block mb-2 px-2 py-0.5 rounded bg-[#267C78]/25 border border-[#267C78]/40 w-fit">
                  Phase 03
                </span>
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                  Configuration
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Module configuration, custom ABAP remediation, data extraction scripts, and unit testing validation.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-slate-400">
                Configured Sandbox Build
              </div>
            </div>

            {/* Phase 04 */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#4dd0c9] uppercase tracking-wider block mb-2 px-2 py-0.5 rounded bg-[#267C78]/25 border border-[#267C78]/40 w-fit">
                  Phase 04
                </span>
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                  Cutover & Testing
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  User Acceptance Testing (UAT), end-user workshops, mock cutovers, and production go-live execution.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-slate-400">
                Production Cutover Run
              </div>
            </div>

            {/* Phase 05 */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#4dd0c9]/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#4dd0c9] uppercase tracking-wider block mb-2 px-2 py-0.5 rounded bg-[#267C78]/25 border border-[#267C78]/40 w-fit">
                  Phase 05
                </span>
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#4dd0c9] transition-colors">
                  Hypercare & SLA
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Dedicated hypercare engineering team, rapid ticket escalation, and steady-state maintenance transition.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-slate-400">
                24/7 SLA Handover
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SAP Support Services & Maintenance Framework */}
      <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1829] shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
          {/* Subtle Ambient Visual Background */}
          <div 
            className="absolute inset-0 bg-cover bg-right opacity-15 pointer-events-none"
            style={{ backgroundImage: `url('/services/sap-support.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1829] via-[#0a1829]/95 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: SLA Tier Cockpit */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0c233f] to-[#081728] rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-base font-bold text-white">SAP Support SLA Tiers</h3>
                  <span className="text-[11px] text-slate-300">Contractual Performance Guarantees</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Response
                </span>
              </div>

              <div className="space-y-3 text-xs">
                {/* P1 */}
                <div className="p-3.5 rounded-xl bg-red-950/20 border-l-4 border-red-500 border-y border-r border-red-500/20 space-y-1">
                  <div className="flex justify-between items-center font-bold text-white">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Priority 1: Critical Outage
                    </span>
                    <span className="text-red-400 font-semibold px-2 py-0.5 rounded bg-red-500/10">Immediate</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Production blockers resolved with emergency engineering dispatch and round-the-clock focus.
                  </p>
                </div>

                {/* P2 */}
                <div className="p-3.5 rounded-xl bg-amber-950/20 border-l-4 border-amber-500 border-y border-r border-amber-500/20 space-y-1">
                  <div className="flex justify-between items-center font-bold text-white">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Priority 2: Major Impairment
                    </span>
                    <span className="text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10">4-Hour Target</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Core operational functions degraded without direct workaround; fast-track senior consultant response.
                  </p>
                </div>

                {/* P3 & P4 */}
                <div className="p-3.5 rounded-xl bg-teal-950/20 border-l-4 border-[#4dd0c9] border-y border-r border-[#4dd0c9]/20 space-y-1">
                  <div className="flex justify-between items-center font-bold text-white">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#4dd0c9]" />
                      Priority 3 & 4: Standard Support
                    </span>
                    <span className="text-[#4dd0c9] font-semibold px-2 py-0.5 rounded bg-[#267C78]/20">Next Business Day</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Routine configuration questions, master data changes, and scheduled patch updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Continuous SAP Support Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4dd0c9] bg-[#267C78]/25 px-2.5 py-0.5 rounded-md border border-[#267C78]/40 inline-block">
                Operational Support
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Continuous SAP Support Services & System Health
              </h2>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                System downtime directly impacts revenue and regulatory compliance. Distinct Systems provides dependable L2/L3 functional and technical maintenance services to keep your SAP infrastructure resilient, secure, and updated.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#4dd0c9] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Proactive System Audits:</strong> Database size management, background job monitoring, and dump analysis.</span>
                </div>
                
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#4dd0c9] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Security Patch Application:</strong> Timely implementation of SAP security notes, kernel upgrades, and transport management.</span>
                </div>
                
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#4dd0c9] shrink-0 mt-0.5" />
                  <span><strong className="text-white">User Role Administration:</strong> Authorization profile maintenance strictly adhering to segregation-of-duties (SoD).</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Button to="/contact?subject=SAP%20Support%20SLA%20Inquiry" variant="primary" size="md" icon={ArrowRight}>
                  Inquire About Custom Support SLAs
                </Button>
                <Button to="/services#staff-augmentation" variant="outlineWhite" size="md">
                  Request SAP Engineers
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SAPSolutions;
