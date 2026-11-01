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
  AlertCircle
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export const SAPSolutions = () => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* 1. Header & Dedicated Enterprise SAP Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-12">
          <SectionHeading
            align="left"
            eyebrow="Enterprise Practice"
            title="SAP Solutions & S/4HANA Implementation Services"
            description="Distinct Systems and Technologies provides enterprise consulting, phased implementation, and rigorous SLA-driven support services for SAP environments."
          />

          {/* Practice Disclaimer Note */}
          <div className="bg-[#F2F5F7] rounded-lg p-4 border border-slate-200 text-xs text-[#263442]/80 mt-6 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> Distinct Systems and Technologies Pvt. Ltd. provides independent enterprise consulting, implementation, and technical maintenance services for organizations utilizing SAP software products. SAP and SAP S/4HANA are registered trademarks of SAP SE. Distinct Systems operates as an independent technical advisory and delivery provider.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SAP S/4HANA & Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Core Competency
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
              Modernizing Enterprise Resource Planning with SAP S/4HANA
            </h2>
            <p className="text-base text-[#263442] leading-relaxed">
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
                  <h4 className="text-sm font-bold text-[#17365D]">Custom Enhancement & Extension</h4>
                  <p className="text-xs text-[#263442]/80 mt-0.5">
                    Building clean-core extensions and cloud integrations without compromising the upgrade pathway of standard SAP modules.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button to="/contact?subject=SAP%20S/4HANA%20Consulting" variant="primary" size="md" icon={ArrowRight}>
                Schedule SAP Scoping Call
              </Button>
              <Button to="/services#staff-augmentation" variant="outline" size="md">
                Request SAP Talent Augmentation
              </Button>
            </div>
          </div>

          {/* Visual Architecture Box */}
          <div className="lg:col-span-5 bg-[#17365D] rounded-2xl p-8 text-white shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-base font-bold text-white">SAP Module Coverage</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#267C78] text-white">
                Enterprise Suite
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white/10 p-3.5 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP FICO</span>
                <span className="text-slate-300">Financial Accounting & Controlling</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP MM</span>
                <span className="text-slate-300">Materials & Procurement</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP SD</span>
                <span className="text-slate-300">Sales & Distribution Logistics</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP PP / QM</span>
                <span className="text-slate-300">Production Planning & Quality</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP ABAP / BTP</span>
                <span className="text-slate-300">Development & Integrations</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-lg border border-white/10">
                <span className="font-bold text-white block mb-0.5">SAP Basis</span>
                <span className="text-slate-300">System Admin & Housekeeping</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-300 border-t border-white/10">
              Full lifecycle support spanning discovery, configuration, user training, and post-go-live hypercare.
            </div>
          </div>

        </div>
      </section>

      {/* 3. SAP Implementation Lifecycle */}
      <section className="bg-[#F2F5F7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Implementation Roadmap"
            title="Disciplined Phased Execution"
            description="Our implementation methodology follows a structured, milestone-driven framework to reduce risk and maintain operational continuity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-2">Phase 01</span>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Discover & Scope</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                As-is process mapping, technical audit, data readiness evaluation, and architecture baseline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-2">Phase 02</span>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Blueprinting</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                To-be process definition, module customization matrix, and enterprise security schema design.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-2">Phase 03</span>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Realization & Config</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Module configuration, custom ABAP development, middleware APIs, and end-to-end unit testing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-2">Phase 04</span>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Testing & Cutover</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                User acceptance testing (UAT), mock data migration runs, final cutover rehearsal, and go-live.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-[#267C78] block mb-2">Phase 05</span>
              <h4 className="text-base font-bold text-[#17365D] mb-2">Hypercare & SLA</h4>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                Dedicated on-site and remote hypercare, ticket resolution, process stabilization, and steady-state support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAP Support Services & Maintenance Framework */}
      <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 bg-white rounded-xl p-8 border border-slate-200 shadow-card space-y-4">
            <h3 className="text-lg font-bold text-[#17365D] border-b border-slate-100 pb-3">
              SAP Support SLA Tiers
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded bg-[#F2F5F7] border-l-4 border-red-500">
                <div className="flex justify-between font-bold text-[#17365D] mb-1">
                  <span>Priority 1: Critical Outage</span>
                  <span className="text-[#267C78]">Immediate Escalation</span>
                </div>
                <p className="text-slate-600">Production-halting blockers resolved with emergency engineering dispatch.</p>
              </div>

              <div className="p-3 rounded bg-[#F2F5F7] border-l-4 border-amber-500">
                <div className="flex justify-between font-bold text-[#17365D] mb-1">
                  <span>Priority 2: Major Impairment</span>
                  <span className="text-[#267C78]">4-Hour Response</span>
                </div>
                <p className="text-slate-600">Core operational functions severely degraded without direct workaround.</p>
              </div>

              <div className="p-3 rounded bg-[#F2F5F7] border-l-4 border-[#267C78]">
                <div className="flex justify-between font-bold text-[#17365D] mb-1">
                  <span>Priority 3 & 4: Standard / Advisory</span>
                  <span className="text-[#267C78]">Next Business Day</span>
                </div>
                <p className="text-slate-600">Routine configuration questions, minor user queries, and scheduled patch updates.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Operational Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
              Continuous SAP Support Services & System Health
            </h2>
            <p className="text-base text-[#263442] leading-relaxed">
              System downtime directly impacts revenue and regulatory compliance. Distinct Systems provides dependable L2/L3 functional and technical maintenance services to keep your SAP infrastructure resilient, secure, and updated.
            </p>

            <ul className="space-y-3 text-sm text-[#263442]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-1" />
                <span><strong>Proactive System Audits:</strong> Database size management, background job monitoring, and spool cleanup.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-1" />
                <span><strong>Security Patch Application:</strong> Timely implementation of SAP security notes and transport requests.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0 mt-1" />
                <span><strong>User Role Administration:</strong> Authorization profile maintenance adhering to segregation-of-duties (SoD).</span>
              </li>
            </ul>

            <div className="pt-2">
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

