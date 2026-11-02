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
  FileText,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export const SAPSolutions = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* 1. Header & Dedicated Enterprise SAP Hero with Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#17365D] text-white p-8 sm:p-12 shadow-card">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/services/sap-implementation.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17365D]/95 via-[#17365D]/90 to-[#0e223b]/85 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#267C78]" />
              <span>Enterprise Core Competency • SAP S/4HANA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              SAP Solutions & S/4HANA Implementation Services
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Distinct Systems delivers enterprise consulting, phased implementation, and SLA-governed support services for SAP environments.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button to="/contact?subject=SAP%20S/4HANA%20Consulting" variant="primary" size="md" icon={ArrowRight}>
                Schedule SAP Scoping Call
              </Button>
              <Button to="#support" variant="outlineWhite" size="md">
                Review Support SLAs
              </Button>
            </div>
          </div>
        </div>

        {/* Practice Disclaimer Note */}
        <div className="bg-[#F2F5F7] rounded-xl p-4 border border-slate-200 text-xs text-[#263442]/80 mt-6 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
          <p>
            <strong>Notice:</strong> Distinct Systems and Technologies Pvt. Ltd. provides independent enterprise consulting, implementation, and technical maintenance services for organizations utilizing SAP software products. SAP and SAP S/4HANA are registered trademarks of SAP SE. Distinct Systems operates as an independent technical advisory and delivery provider.
          </p>
        </div>
      </section>

      {/* 2. SAP S/4HANA & Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Modernization Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
              Modernizing Enterprise Resource Planning with SAP S/4HANA
            </h2>
            <p className="text-sm sm:text-base text-[#263442] leading-relaxed">
              Migrating or deploying SAP S/4HANA is a critical transformation milestone. Distinct Systems guides organizations through meticulous process scoping, business blueprinting, custom ABAP remediation, data cleansing, and cutover execution.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#267C78] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">Greenfield & Brownfield Transitions</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Whether starting fresh or modernizing existing SAP ECC instances, we design migration roadmaps that safeguard data fidelity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#267C78] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">Business Process Integration</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Unifying sales, finance, inventory, and procurement into an in-memory transactional backbone with sub-second reporting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#267C78] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#17365D]">Custom Enhancement & Clean Core</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Building clean-core extensions and cloud integrations without compromising the upgrade pathway of standard SAP modules.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button to="/contact?subject=SAP%20S/4HANA%20Consulting" variant="primary" size="md" icon={ArrowRight}>
                Schedule Consultation
              </Button>
              <Button to="/services#staff-augmentation" variant="outline" size="md">
                Request SAP Talent
              </Button>
            </div>
          </div>

          {/* Visual Architecture Box */}
          <div className="lg:col-span-5 bg-[#17365D] rounded-2xl p-7 text-white shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
              <h3 className="text-base font-bold text-white">SAP Module Coverage</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#267C78] text-white">
                Enterprise Suite
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP FICO</span>
                <span className="text-slate-300">Financials & Controlling</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP MM</span>
                <span className="text-slate-300">Materials & Procurement</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP SD</span>
                <span className="text-slate-300">Sales & Distribution Logistics</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP PP / QM</span>
                <span className="text-slate-300">Production & Quality</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP ABAP / BTP</span>
                <span className="text-slate-300">Development & Integrations</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP Basis</span>
                <span className="text-slate-300">Administration & Housekeeping</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-300 border-t border-white/10">
              Full lifecycle support spanning discovery, configuration, user training, and post-go-live hypercare.
            </div>
          </div>

        </div>
      </section>

      {/* 3. SAP Implementation Lifecycle */}
      <section className="bg-[#F2F5F7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Implementation Roadmap"
            title="Disciplined Phased Execution"
            description="Our implementation methodology follows a structured, milestone-driven framework to reduce risk and maintain operational continuity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-1.5">Phase 01</span>
              <h4 className="text-sm font-bold text-[#17365D] mb-1">Discover & Scope</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                As-is process mapping, technical audit, and architecture baseline.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-1.5">Phase 02</span>
              <h4 className="text-sm font-bold text-[#17365D] mb-1">Blueprinting</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                To-be process definition and module customization matrix.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-1.5">Phase 03</span>
              <h4 className="text-sm font-bold text-[#17365D] mb-1">Configuration</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Module configuration, custom ABAP, and unit testing.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-1.5">Phase 04</span>
              <h4 className="text-sm font-bold text-[#17365D] mb-1">Cutover & Testing</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                UAT, mock data migration runs, and go-live deployment.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-1.5">Phase 05</span>
              <h4 className="text-sm font-bold text-[#17365D] mb-1">Hypercare & SLA</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Dedicated hypercare, ticket resolution, and stabilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAP Support Services & Maintenance Framework */}
      <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 bg-white rounded-xl p-7 border border-slate-200 shadow-card space-y-4">
            <h3 className="text-base font-bold text-[#17365D] border-b border-slate-100 pb-2.5">
              SAP Support SLA Tiers
            </h3>
            
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded bg-[#F2F5F7] border-l-4 border-red-500">
                <div className="flex justify-between font-bold text-[#17365D] mb-0.5">
                  <span>Priority 1: Critical Outage</span>
                  <span className="text-[#267C78]">Immediate</span>
                </div>
                <p className="text-slate-600">Production blockers resolved with emergency engineering dispatch.</p>
              </div>

              <div className="p-3 rounded bg-[#F2F5F7] border-l-4 border-amber-500">
                <div className="flex justify-between font-bold text-[#17365D] mb-0.5">
                  <span>Priority 2: Major Impairment</span>
                  <span className="text-[#267C78]">4-Hour Target</span>
                </div>
                <p className="text-slate-600">Core operational functions severely degraded without direct workaround.</p>
              </div>

              <div className="p-3 rounded bg-[#F2F5F7] border-l-4 border-[#267C78]">
                <div className="flex justify-between font-bold text-[#17365D] mb-0.5">
                  <span>Priority 3 & 4: Standard Support</span>
                  <span className="text-[#267C78]">Next Business Day</span>
                </div>
                <p className="text-slate-600">Routine configuration questions and scheduled patch updates.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Operational Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
              Continuous SAP Support Services & System Health
            </h2>
            <p className="text-sm sm:text-base text-[#263442] leading-relaxed">
              System downtime directly impacts revenue and regulatory compliance. Distinct Systems provides dependable L2/L3 functional and technical maintenance services to keep your SAP infrastructure resilient, secure, and updated.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#263442]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                <span><strong>Proactive System Audits:</strong> Database size management and background job monitoring.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                <span><strong>Security Patch Application:</strong> Timely implementation of SAP security notes and transports.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                <span><strong>User Role Administration:</strong> Authorization profile maintenance adhering to segregation-of-duties.</span>
              </li>
            </ul>

            <div className="pt-1">
              <Button to="/contact?subject=SAP%20Support%20SLA%20Inquiry" variant="primary" size="md" icon={ArrowRight}>
                Inquire About Custom Support SLAs
              </Button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SAPSolutions;
