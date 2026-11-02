'use client';

import { useState } from 'react';

const EMPLOYER_ROLES = [
  'First VP of Sales / Head of Sales',
  'Founding Account Executive (AE #1–3)',
  'Enterprise / Mid-Market AE',
  'SDR Leader / Outbound Team Lead',
  'RevOps Manager / HubSpot-Salesforce Architect',
  'Fractional CRO / Interim Sales Leader',
];

const CANDIDATE_ROLES = [
  'VP of Sales / CRO ($0→$10M or $10M→$25M)',
  'Founding AE (0→1 Builder)',
  'Enterprise / Senior Account Executive',
  'Sales Manager / Player-Coach',
  'RevOps / GTM Systems Leader',
  'SDR / Outbound Specialist',
];

export default function TalentPortalForms() {
  const [activeTab, setActiveTab] = useState<'employer' | 'candidate'>('employer');
  const [employerSuccess, setEmployerSuccess] = useState(false);
  const [candidateSuccess, setCandidateSuccess] = useState(false);
  const [selectedEmployerRoles, setSelectedEmployerRoles] = useState<string[]>([]);
  const [selectedCandidateRole, setSelectedCandidateRole] = useState<string>(CANDIDATE_ROLES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleEmployerRole = (role: string) => {
    setSelectedEmployerRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleEmployerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'slc_talent_bench_employer',
          company: formData.get('company'),
          website: formData.get('website'),
          name: formData.get('name'),
          email: formData.get('email'),
          linkedin: formData.get('linkedin'),
          arrStage: formData.get('arrStage'),
          rolesNeeded: selectedEmployerRoles,
          notes: formData.get('notes'),
        }),
      });
    } catch {
      // fallback
    } finally {
      setIsSubmitting(false);
      setEmployerSuccess(true);
    }
  };

  const handleCandidateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'slc_talent_bench_candidate',
          name: formData.get('name'),
          email: formData.get('email'),
          linkedin: formData.get('linkedin'),
          roleTrack: selectedCandidateRole,
          acvRange: formData.get('acvRange'),
          quotaRecord: formData.get('quotaRecord'),
          compExpectation: formData.get('compExpectation'),
          whyBench: formData.get('whyBench'),
        }),
      });
    } catch {
      // fallback
    } finally {
      setIsSubmitting(false);
      setCandidateSuccess(true);
    }
  };

  return (
    <div className="border border-black/15 bg-white">
      {/* Two-Door Selector Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black/15">
        <button
          type="button"
          onClick={() => setActiveTab('employer')}
          className={`p-6 md:p-8 text-left transition-colors cursor-pointer flex flex-col justify-between ${
            activeTab === 'employer'
              ? 'bg-[#111111] text-white'
              : 'bg-[#f5f4ef] text-[#111111] hover:bg-[#efede6]'
          }`}
        >
          <div className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold opacity-70 mb-2">
            Door 01 &bull; For Founders, CEOs &amp; VCs
          </div>
          <div className="text-2xl font-serif">Hire From The SLC Talent Bench</div>
          <div className="text-xs font-light opacity-75 mt-2">
            Launch a 30-day search sprint or request introductions to vetted AEs &amp; VPs of Sales.
          </div>
        </button>

        <button
          type="button"
          id="apply-bench"
          onClick={() => setActiveTab('candidate')}
          className={`p-6 md:p-8 text-left transition-colors cursor-pointer border-t md:border-t-0 md:border-l border-black/15 flex flex-col justify-between ${
            activeTab === 'candidate'
              ? 'bg-[#111111] text-white'
              : 'bg-[#f5f4ef] text-[#111111] hover:bg-[#efede6]'
          }`}
        >
          <div className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold opacity-70 mb-2">
            Door 02 &bull; For Top 5% GTM Operators &amp; Sellers
          </div>
          <div className="text-2xl font-serif">Apply to Join The SLC Talent Bench</div>
          <div className="text-xs font-light opacity-75 mt-2">
            Get vetted once and matched confidentially with Scott&apos;s 200+ startup &amp; VC network.
          </div>
        </button>
      </div>

      {/* Form Body */}
      <div className="p-8 md:p-12">
        {activeTab === 'employer' ? (
          employerSuccess ? (
            <div className="py-12 text-center max-w-xl mx-auto">
              <div className="inline-block px-3 py-1 border border-black/15 text-xs uppercase tracking-[0.2em] text-[#111111]/60 mb-4">
                Hiring Brief Received
              </div>
              <h3 className="text-3xl font-serif text-[#111111] mb-4">
                Your SLC Talent Bench request is in motion.
              </h3>
              <p className="text-[#111111]/65 font-light mb-8">
                Our GTM recruiting team and Scott Leese will review your role profile, check current warm matches on the bench, and reach out within 24 hours to lock in your scorecard calibration call.
              </p>
              <button
                type="button"
                onClick={() => {
                  setEmployerSuccess(false);
                  setSelectedEmployerRoles([]);
                }}
                className="text-xs uppercase tracking-[0.2em] font-medium underline underline-offset-4 text-[#111111]"
              >
                Submit Another Role
              </button>
            </div>
          ) : (
            <form onSubmit={handleEmployerSubmit} className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mb-2">
                  Request a 30-Day Hiring Sprint or Bench Match
                </h3>
                <p className="text-sm text-[#111111]/60 font-light">
                  Tell us who you need to hire. We&apos;ll match you against active candidates on The SLC Talent Bench and launch targeted headhunting calibrated by Scott Leese.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Acme AI"
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                    Company Website *
                  </label>
                  <input
                    type="text"
                    name="website"
                    required
                    placeholder="https://acme.ai"
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                    Your Name &amp; Title *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Alex Rivera, Founder & CEO"
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@acme.ai"
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                    Your LinkedIn URL *
                  </label>
                  <input
                    type="text"
                    name="linkedin"
                    required
                    placeholder="linkedin.com/in/alexrivera"
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                    Current ARR &amp; Average Deal Size (ACV) *
                  </label>
                  <input
                    type="text"
                    name="arrStage"
                    required
                    placeholder="e.g., $2.5M ARR • $35K ACV"
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-3">
                  Which Roles Are You Hiring Next? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EMPLOYER_ROLES.map((role) => {
                    const active = selectedEmployerRoles.includes(role);
                    return (
                      <button
                        type="button"
                        key={role}
                        onClick={() => toggleEmployerRole(role)}
                        className={`p-3.5 text-left border text-sm flex items-center justify-between transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'bg-[#fcfaf8] text-[#111111] border-black/10 hover:border-black/30'
                        }`}
                      >
                        <span>{role}</span>
                        <span className="text-xs">{active ? '✓' : '+'}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                  Target Timeline, Comp Range &amp; Context
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Share target OTE/base range, current sales team structure, and how soon you want this seat filled..."
                  className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                {isSubmitting ? 'Submitting...' : 'Request Vetted Candidates From The SLC Bench →'}
              </button>
            </form>
          )
        ) : candidateSuccess ? (
          <div className="py-12 text-center max-w-xl mx-auto">
            <div className="inline-block px-3 py-1 border border-black/15 text-xs uppercase tracking-[0.2em] text-[#111111]/60 mb-4">
              Profile Logged
            </div>
            <h3 className="text-3xl font-serif text-[#111111] mb-4">
              Welcome to The SLC Talent Bench review queue.
            </h3>
            <p className="text-[#111111]/65 font-light mb-8">
              Our recruiting team reviews every submission against Scott&apos;s stage, ACV, and quota attainment benchmarks. When one of our 200+ advisory clients or partner VCs opens a matching search, we&apos;ll reach out confidentially.
            </p>
            <button
              type="button"
              onClick={() => setCandidateSuccess(false)}
              className="text-xs uppercase tracking-[0.2em] font-medium underline underline-offset-4 text-[#111111]"
            >
              Update or Submit Another Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleCandidateSubmit} className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mb-2">
                Confidential Candidate Application — The SLC Talent Bench
              </h3>
              <p className="text-sm text-[#111111]/60 font-light">
                100% confidential. We never share your profile with any founder or board without your explicit permission first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jordan Taylor"
                  className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                  Personal Email (Confidential) *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jordan@gmail.com"
                  className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                  LinkedIn Profile URL *
                </label>
                <input
                  type="text"
                  name="linkedin"
                  required
                  placeholder="linkedin.com/in/jordantaylor"
                  className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                  Primary Role Track *
                </label>
                <select
                  value={selectedCandidateRole}
                  onChange={(e) => setSelectedCandidateRole(e.target.value)}
                  className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                >
                  {CANDIDATE_ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                  Sweet-Spot ARR Stage &amp; ACV Sold *
                </label>
                <input
                  type="text"
                  name="acvRange"
                  required
                  placeholder="e.g., Seed to Series B ($1M–$12M ARR) • $25K–$80K ACV"
                  className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                  Target Base / OTE Expectation *
                </label>
                <input
                  type="text"
                  name="compExpectation"
                  required
                  placeholder="e.g., $160K Base / $320K OTE + Equity"
                  className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                Hard Numbers: Quota Attainment &amp; Team-Building Track Record *
              </label>
              <textarea
                name="quotaRecord"
                required
                rows={3}
                placeholder="No fluff—share your last 3 years of quota attainment %, self-sourced pipeline %, or revenue scaled ($X to $Y ARR)..."
                className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Profile to The SLC Talent Bench →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
