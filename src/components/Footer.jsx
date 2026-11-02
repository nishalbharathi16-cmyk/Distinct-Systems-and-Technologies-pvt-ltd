import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Globe, ExternalLink, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/company';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17365D] text-white pt-16 pb-12 border-t border-[#17365D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Profile Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white p-2.5 rounded-md inline-block shadow-sm">
              <Logo className="h-10" />
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Company Type:</span>
                <span>{COMPANY_INFO.companyType}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Incorporated:</span>
                <span>{COMPANY_INFO.founded}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Domain:</span>
                <a href={COMPANY_INFO.domain} className="hover:text-[#267C78] underline inline-flex items-center gap-1">
                  distinctsystems.com
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Verified LinkedIn */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-white/10 text-white hover:bg-[#267C78] transition-colors text-xs font-medium"
              >
                <Linkedin className="w-4 h-4 text-[#267C78] group-hover:text-white" />
                <span>Distinct Systems on LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Corporate
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/sap-solutions" className="hover:text-white transition-colors">SAP Practice</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/services#ai-ml" className="hover:text-white transition-colors">Artificial Intelligence & ML</Link></li>
              <li><Link to="/services#data-science" className="hover:text-white transition-colors">Data Science & Analytics</Link></li>
              <li><Link to="/services#tech-consulting" className="hover:text-white transition-colors">Technology Consulting</Link></li>
              <li><Link to="/services#staff-augmentation" className="hover:text-white transition-colors">Staff Augmentation</Link></li>
              <li><Link to="/sap-solutions" className="hover:text-white transition-colors">SAP S/4HANA Implementations</Link></li>
              <li><Link to="/sap-solutions#support" className="hover:text-white transition-colors">SAP Support & Maintenance</Link></li>
            </ul>
          </div>

          {/* Verified Registered Office & Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              Registered Office
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#267C78] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Distinct Systems and Technologies Pvt. Ltd.</p>
                  <p>{COMPANY_INFO.headquarters.addressSummary}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-[#267C78] shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">Corporate Enquiries</p>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-300 hover:text-white text-xs underline">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded border border-white/10 text-xs text-slate-300">
                <span className="block font-medium text-white mb-0.5">Corporate Registration</span>
                <span>Active Indian Private Limited Company (CIN Registered 2019, Chennai ROC).</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {COMPANY_INFO.founded} – {currentYear} {COMPANY_INFO.name} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Corporate Governance</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Enquiry Disclosures</Link>
            <a href={COMPANY_INFO.domain} className="hover:text-white transition-colors">distinctsystems.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

