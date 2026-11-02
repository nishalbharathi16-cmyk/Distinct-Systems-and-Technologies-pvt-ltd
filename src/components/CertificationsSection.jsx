import React from 'react';
import { Award, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const CERTIFICATIONS = [
  {
    id: "udyam-msme",
    name: "Udyam Registration (MSME)",
    subtitle: "Ministry of Micro, Small & Medium Enterprises",
    identifierLabel: "Registration No",
    identifierValue: "UDYAM-TN02-0018821",
    logoSrc: "/certifications/udyam-msme.png",
    logoSrcSet: "/certifications/udyam-msme.png 1x, /certifications/udyam-msme@2x.png 2x",
    description: "Registered Indian enterprise under the Ministry of Micro, Small and Medium Enterprises, Government of India.",
    badge: "Government of India"
  },
  {
    id: "startup-india",
    name: "Startup India Recognition",
    subtitle: "Department for Promotion of Industry and Internal Trade (DPIIT)",
    identifierLabel: "Certificate No",
    identifierValue: "DIPP81715",
    secondaryRef: "DIPP8715",
    logoSrc: "/certifications/startup-india.png",
    logoSrcSet: "/certifications/startup-india.png 1x, /certifications/startup-india@2x.png 2x",
    description: "Officially recognized startup by DPIIT, Ministry of Commerce & Industry, Government of India.",
    badge: "DPIIT Recognized"
  },
  {
    id: "iso-9001",
    name: "ISO 9001 Certified",
    subtitle: "Quality Management Systems (QMS)",
    identifierLabel: "Standard",
    identifierValue: "ISO 9001",
    logoSrc: "/certifications/iso-9001.png",
    logoSrcSet: "/certifications/iso-9001.png 1x, /certifications/iso-9001@2x.png 2x",
    description: "Adherence to international standards for quality management systems, delivery excellence, and process control.",
    badge: "Quality Standard"
  }
];

export const CertificationsSection = ({ className = "" }) => {
  return (
    <section className={`py-14 sm:py-16 ${className}`} id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Exact Copy */}
        <SectionHeading
          eyebrow="Accreditations & Compliance"
          title="Certifications & Recognitions"
          description="Our registrations and certifications reflect our commitment to professional standards and quality."
        />

        {/* 3 Horizontally Aligned Cards on Desktop, Responsive Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CERTIFICATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Logo Container - Preserves exact original proportions without distortion */}
                <div className="h-24 sm:h-28 flex items-center justify-center p-3 bg-[#F2F5F7]/70 rounded-xl border border-slate-200/60 mb-6 group-hover:bg-[#F2F5F7] transition-colors">
                  <img
                    src={item.logoSrc}
                    srcSet={item.logoSrcSet}
                    alt={`${item.name} Official Emblem`}
                    className="max-h-full max-w-full object-contain filter contrast-105"
                    loading="lazy"
                  />
                </div>

                {/* Category Pill */}
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#267C78] bg-[#267C78]/10 px-2.5 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-[#267C78]" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#17365D] mb-1">
                  {item.name}
                </h3>

                {/* Authority / Subtitle */}
                <p className="text-xs text-slate-500 font-medium mb-4">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#263442]/85 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Registration / Certificate Identifier Box */}
              <div className="pt-4 border-t border-slate-100 bg-[#F2F5F7]/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:p-5 rounded-b-2xl mt-2">
                <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  {item.identifierLabel}
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#17365D] tracking-wide select-all">
                    {item.identifierValue}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#267C78] shrink-0" />
                </div>
                {item.secondaryRef && (
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">
                    Ref ID: {item.secondaryRef}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note (No unverified claims) */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Official statutory registration and standard compliance credentials verified under corporate governance records.
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;

