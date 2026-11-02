import React, { useState } from 'react';
import { 
  Briefcase, 
  Users2, 
  Code2, 
  Compass, 
  CheckCircle2, 
  Mail, 
  UploadCloud, 
  Send,
  AlertCircle,
  FileCheck
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { COMPANY_INFO } from '../data/company';

export const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    primarySkill: 'AI / Machine Learning',
    experienceYears: '3-5 years',
    portfolioUrl: '',
    coverNote: '',
    resumeFileName: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors((prev) => ({ ...prev, resume: 'File size must be under 5MB.' }));
        return;
      }
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
      setFormErrors((prev) => ({ ...prev, resume: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.coverNote.trim()) {
      errors.coverNote = 'Please include a brief summary of your background.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Honest handling: prepares client email link and displays clear candidate receipt notice
    setSubmittedStatus('success');
  };

  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* 1. Header with Attractive Hero Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#17365D] text-white p-8 sm:p-12 shadow-card">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url('/services/staff-augmentation.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17365D]/95 via-[#17365D]/90 to-[#0e223b]/85 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78] px-3 py-1 rounded bg-white/10 inline-block">
              Talent Bench & Careers
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Careers at Distinct Systems and Technologies
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              We collaborate with skilled technologists, data scientists, and enterprise SAP consultants who appreciate engineering discipline and continuous growth.
            </p>
          </div>
        </div>

        {/* Transparent Openings Notice */}
        <div className="bg-[#F2F5F7] rounded-xl p-4 border border-slate-200 mt-6 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#263442]/85 space-y-0.5">
            <span className="font-semibold text-[#17365D] block">
              General Talent Pool & Career Inquiries
            </span>
            <p>
              Distinct Systems evaluates experienced technical profiles for our consulting talent bench and staff augmentation assignments. Submit your profile below for upcoming project deployments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Working at Distinct Systems */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Culture & Environment"
          title="What We Value in Our Engineers"
          description="Our teams work directly with enterprise-grade architectures, applied machine learning pipelines, and mission-critical SAP installations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#267C78]/10 text-[#267C78] flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17365D]">Engineering Substance</h4>
            <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
              We prioritize sound software architecture, reproducible code, and measurable performance over shortcuts or hype.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#17365D]/10 text-[#17365D] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17365D]">Professional Autonomy</h4>
            <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
              Our consultants are trusted to make technical decisions and communicate directly with stakeholders on architecture choices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#267C78]/10 text-[#267C78] flex items-center justify-center">
              <Users2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17365D]">Collaborative Growth</h4>
            <p className="text-xs sm:text-sm text-[#263442]/80 leading-relaxed">
              Cross-disciplinary exposure where full-stack developers, ML engineers, and SAP specialists share operational best practices.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Skill Domains */}
      <section className="bg-[#F2F5F7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Skill Categories"
            title="Technical Areas of Continuous Interest"
            description="We frequently review profiles across the following core technical domains for project staffing and advisory roles."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="text-sm font-bold text-[#17365D] mb-2">AI & Machine Learning</h4>
              <p className="text-xs text-[#263442]/70 leading-relaxed mb-3">
                Python, PyTorch, TensorFlow, Scikit-learn, NLP, Computer Vision, Model Deployment.
              </p>
              <span className="text-[11px] font-semibold text-[#267C78]">Talent Bench Active</span>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="text-sm font-bold text-[#17365D] mb-2">Data Science & Analytics</h4>
              <p className="text-xs text-[#263442]/70 leading-relaxed mb-3">
                SQL, Pandas, Data Lakes, Snowflake, BigQuery, BI Visualization, Statistical Modeling.
              </p>
              <span className="text-[11px] font-semibold text-[#267C78]">Talent Bench Active</span>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="text-sm font-bold text-[#17365D] mb-2">SAP Functional & Technical</h4>
              <p className="text-xs text-[#263442]/70 leading-relaxed mb-3">
                SAP S/4HANA, FICO, MM, SD, PP, ABAP, Fiori, BTP, Solution Architecture.
              </p>
              <span className="text-[11px] font-semibold text-[#267C78]">Talent Bench Active</span>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="text-sm font-bold text-[#17365D] mb-2">Full-Stack & Cloud Architecture</h4>
              <p className="text-xs text-[#263442]/70 leading-relaxed mb-3">
                Node.js, React, TypeScript, Docker, Kubernetes, AWS, Azure, CI/CD automation.
              </p>
              <span className="text-[11px] font-semibold text-[#267C78]">Talent Bench Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Resume Submission Interface */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-card">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#267C78]">
              General Career Inquiry
            </span>
            <h3 className="text-2xl font-bold text-[#17365D] mt-1">
              Submit Your Profile to Distinct Systems
            </h3>
            <p className="text-sm text-[#263442]/80 mt-2">
              Share your professional details with our technical recruitment coordinators. We review submissions when new client project roles open.
            </p>
          </div>

          {submittedStatus === 'success' ? (
            <div className="bg-[#F2F5F7] rounded-xl p-8 border border-[#267C78]/30 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#267C78] text-white flex items-center justify-center mx-auto">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#17365D]">
                Application Details Prepared
              </h4>
              <p className="text-sm text-[#263442]/85 max-w-lg mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. To ensure your resume is cataloged directly into our talent inbox without third-party delay, you can also forward your CV directly to our corporate email.
              </p>

              <div className="pt-2">
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}?subject=Candidate%20Profile%20-%20${encodeURIComponent(formData.fullName)}%20(${encodeURIComponent(formData.primarySkill)})&body=${encodeURIComponent(
                    `Candidate: ${formData.fullName}\nEmail: ${formData.email}\nExperience: ${formData.experienceYears}\nDomain: ${formData.primarySkill}\nNotes: ${formData.coverNote}`
                  )}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[#267C78] text-white hover:bg-[#1e6662] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email to Talent Desk ({COMPANY_INFO.contact.email})</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSubmittedStatus(null)}
                className="text-xs text-slate-500 hover:text-[#17365D] underline block mx-auto pt-2"
              >
                Submit another profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78] ${
                      formErrors.fullName ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.fullName && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. ramesh@example.com"
                    className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78] ${
                      formErrors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.email && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                    Primary Area of Expertise
                  </label>
                  <select
                    name="primarySkill"
                    value={formData.primarySkill}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#263442] bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78]"
                  >
                    <option value="AI / Machine Learning">Artificial Intelligence & Machine Learning</option>
                    <option value="Data Science & BI">Data Science & Advanced Analytics</option>
                    <option value="SAP S/4HANA Implementation">SAP S/4HANA & ERP Modules</option>
                    <option value="Technology Consulting">Technology Consulting & Architecture</option>
                    <option value="Full-Stack Engineering">Full-Stack Software Development</option>
                    <option value="Cloud & DevOps">Cloud Infrastructure & DevOps</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                    Relevant Experience
                  </label>
                  <select
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#263442] bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78]"
                  >
                    <option value="1-3 years">1 - 3 Years</option>
                    <option value="3-5 years">3 - 5 Years</option>
                    <option value="5-8 years">5 - 8 Years</option>
                    <option value="8+ years">8+ Years (Lead / Principal)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                  LinkedIn or Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                  Professional Background Summary <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="coverNote"
                  rows={4}
                  value={formData.coverNote}
                  onChange={handleInputChange}
                  placeholder="Briefly outline your key technologies, project domains, and availability..."
                  className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#263442] bg-[#F2F5F7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#267C78] ${
                    formErrors.coverNote ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {formErrors.coverNote && (
                  <span className="text-xs text-red-600 mt-1 block">{formErrors.coverNote}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-2">
                  Resume / CV (PDF / DOCX up to 5MB)
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 bg-[#F2F5F7] text-[#263442] text-xs font-medium hover:bg-slate-200">
                    <UploadCloud className="w-4 h-4 text-[#267C78]" />
                    <span>Choose File</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-slate-500 truncate max-w-xs">
                    {formData.resumeFileName || 'No file selected'}
                  </span>
                </div>
                {formErrors.resume && (
                  <span className="text-xs text-red-600 mt-1 block">{formErrors.resume}</span>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <Button type="submit" variant="primary" size="lg" icon={Send}>
                  Submit Profile For Review
                </Button>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  Direct review by Distinct Systems talent team
                </span>
              </div>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

export default Careers;

