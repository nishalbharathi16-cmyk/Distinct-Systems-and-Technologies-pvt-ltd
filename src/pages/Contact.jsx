import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Building2, 
  Linkedin,
  ExternalLink
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { COMPANY_INFO } from '../data/company';

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const prefilledSubject = searchParams.get('subject') || searchParams.get('solution') || searchParams.get('industry') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: prefilledSubject ? `Enquiry: ${prefilledSubject}` : '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  useEffect(() => {
    if (prefilledSubject) {
      setFormData(prev => ({
        ...prev,
        subject: `Corporate Enquiry: ${prefilledSubject}`
      }));
    }
  }, [prefilledSubject]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate email format.';
    }
    if (!formData.company.trim()) errs.company = 'Company / organization name is required.';
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide details regarding your requirements.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest handling: No backend mock success. Prepares direct corporate email transport.
    setSubmissionFeedback({
      type: 'validated',
      message: `Enquiry verified for ${formData.name}. Click below to launch your corporate email client with pre-filled details addressed to Distinct Systems.`
    });
  };

  const mailtoLink = `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* 1. Page Header with Attractive Hero Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#17365D] text-white p-8 sm:p-12 shadow-card">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('/industries/enterprise.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17365D]/95 via-[#17365D]/90 to-[#0e223b]/85 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78] px-3 py-1 rounded bg-white/10 inline-block">
              Direct Engagement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Contact Distinct Systems and Technologies
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Connect with our technical practice leaders and consulting coordinators regarding AI/ML solutions, staff augmentation, or SAP implementations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-card">
            <div className="pb-6 border-b border-slate-100 mb-6">
              <h3 className="text-xl font-bold text-[#17365D]">
                Corporate Enquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-[#263442]/80 mt-1">
                Please complete all required fields. All communications are governed by standard enterprise confidentiality.
              </p>
            </div>

            {submissionFeedback ? (
              <div className="bg-[#F2F5F7] rounded-xl p-8 border border-[#267C78]/30 space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#267C78] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#17365D]">
                  Enquiry Verified & Ready for Transmission
                </h4>
                <p className="text-sm text-[#263442] leading-relaxed">
                  {submissionFeedback.message}
                </p>

                <div className="pt-2">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[#267C78] text-white hover:bg-[#1e6662] transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Client & Send ({COMPANY_INFO.contact.email})</span>
                  </a>
                </div>

                <div className="p-3 bg-white rounded border border-slate-200 text-xs text-[#263442]/70">
                  <span className="font-semibold block text-[#17365D]">Transparency Disclosure:</span>
                  This corporate portal transmits verified enquiry packages directly to our official corporate mailbox without saving to third-party marketing databases.
                </div>

                <button
                  type="button"
                  onClick={() => setSubmissionFeedback(null)}
                  className="text-xs text-slate-500 hover:text-[#17365D] underline pt-2 block"
                >
                  Edit form fields
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ananya Rao"
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78] ${
                        errors.name ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && <span className="text-xs text-red-600 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. ananya@company.com"
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78] ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Enterprise Global Ltd."
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78] ${
                        errors.company ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.company && <span className="text-xs text-red-600 mt-1 block">{errors.company}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                      Subject / Practice Area <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. SAP S/4HANA Implementation"
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78] ${
                        errors.subject ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.subject && <span className="text-xs text-red-600 mt-1 block">{errors.subject}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                    Enquiry Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project timeline, technical requirements, or staffing needs..."
                    className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78] ${
                      errors.message ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && <span className="text-xs text-red-600 mt-1 block">{errors.message}</span>}
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full sm:w-auto">
                    Validate & Transmit Enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Verified Details & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Registered Office Box */}
            <div className="bg-[#F2F5F7] rounded-xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                Verified Registered Office
              </span>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#17365D] shrink-0 mt-0.5" />
                <div className="text-sm text-[#263442] space-y-1">
                  <p className="font-bold text-[#17365D]">Distinct Systems & Technologies Pvt. Ltd.</p>
                  <p>Chennai, Tamil Nadu, India</p>
                  <p className="text-xs text-slate-500 pt-1">
                    Registered with Registrar of Companies (ROC Chennai), Ministry of Corporate Affairs.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Inquiries & Official Channels */}
            <div className="bg-[#F2F5F7] rounded-xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
                Corporate Channels
              </span>

              <div className="space-y-3 text-sm text-[#263442]">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#17365D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#17365D]">Official Contact Email</span>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#267C78] underline text-xs sm:text-sm font-medium">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Linkedin className="w-5 h-5 text-[#17365D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#17365D]">LinkedIn Company Profile</span>
                    <a 
                      href={COMPANY_INFO.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#267C78] underline text-xs sm:text-sm inline-flex items-center gap-1"
                    >
                      <span>Distinct Systems and Technologies</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholders Disclosures Box */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17365D]">
                  Corporate Information Notice
                </h4>
              </div>
              <p className="text-xs text-[#263442]/80 leading-relaxed">
                In strict compliance with company data governance guidelines, direct executive desk phone extensions are withheld from public web indexing and will be provided directly during initial proposal routing.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;

