import type { Metadata } from 'next';
import Link from 'next/link';
import LogoTicker from '@/components/LogoTicker';
import TalentPortalForms from './TalentPortalForms';

export const metadata: Metadata = {
  title: 'The SLC Talent Bench | Executive Search & GTM Recruiting | Scott Leese',
  description:
    'Don’t hire a resume—hire from our bench. 30-day GTM hiring sprints for Founding AEs, RevOps, and VPs of Sales, calibrated and final-round vetted by Scott Leese.',
};

const BENCH_PROFILES = [
  {
    code: 'SLC-VP-014',
    role: 'First VP of Sales (0 → $15M ARR)',
    stage: 'Seed / Series A–B',
    acv: '$25K – $75K ACV',
    location: 'Austin, TX / Remote',
    status: 'Active on Bench',
    summary:
      'Built outbound & closing pods from $800K to $14.2M ARR at a vertical AI SaaS startup (acquired). Personally closed first $2M before hiring 11 AEs and 4 SDRs.',
    highlights: ['138% Avg Team Quota', 'Player-Coach Builder', 'HubSpot + Gong Native'],
  },
  {
    code: 'SLC-AE-089',
    role: 'Founding Account Executive (AE #1)',
    stage: 'Seed / Series A',
    acv: '$18K – $50K ACV',
    location: 'San Francisco / Hybrid',
    status: 'Active on Bench',
    summary:
      'Top 1% full-cycle builder who thrives with zero marketing inbound. Self-sourced 72% of pipeline via signal-based outbound and closed $1.9M in new ARR over 14 months.',
    highlights: ['164% Quota Attainment', '72% Self-Sourced Pipe', 'No Playbook Needed'],
  },
  {
    code: 'SLC-VP-027',
    role: 'VP of Sales / Scale CRO ($5M → $30M)',
    stage: 'Series B–C',
    acv: '$60K – $250K Enterprise',
    location: 'New York, NY / Remote',
    status: 'Active on Bench',
    summary:
      'Scaled enterprise cybersecurity and FinTech sales orgs from 8 to 38 reps across 3 regions. Installed MEDDPICC rigor, cut ramp time by 35%, and led through $28M Series C.',
    highlights: ['3x President’s Club Leader', '$5M → $29M ARR Track', 'Board-Ready Forecaster'],
  },
  {
    code: 'SLC-AE-112',
    role: 'Senior Mid-Market / Enterprise AE',
    stage: 'Series A–C',
    acv: '$40K – $120K ACV',
    location: 'Chicago, IL / Remote',
    status: 'Active on Bench',
    summary:
      'Relentless multi-threader selling into CFO, CIO, and VP Eng buyers. Ranked #1 of 22 AEs for 7 consecutive quarters with a 31% win rate on competitive displacements.',
    highlights: ['#1 of 22 Reps (7 Qtrs)', '$1.65M Net-New ARR/Yr', 'CFO/CIO Multi-Threader'],
  },
  {
    code: 'SLC-RO-019',
    role: 'Head of RevOps & GTM Systems',
    stage: 'Series A–C',
    acv: 'PLG + Enterprise Hybrid',
    location: 'Remote (US)',
    status: 'Active on Bench',
    summary:
      'Architected end-to-end Salesforce, HubSpot, Clay, and AI outbound enrichment stacks for 3 high-growth B2B startups. Trained under SLC RevOps frameworks.',
    highlights: ['Clay + AI Signal Architect', 'Full Attribution & Forecast', 'Zero-Bloat Stack'],
  },
  {
    code: 'SLC-SDR-041',
    role: 'Head of Outbound / SDR Manager',
    stage: 'Seed – Series B',
    acv: '$15K – $80K ACV',
    location: 'Denver, CO / Remote',
    status: 'Active on Bench',
    summary:
      'Rebuilt a dead cold-email floor into a signal-led phone + LinkedIn + executive warm-intro machine generating $4.8M in qualified Stage-2 pipeline per quarter.',
    highlights: ['Signal-Based Outbound', 'Hired & Ramped 9 SDRs', 'Cold-Call Floor Coach'],
  },
];

const SPRINT_STEPS = [
  {
    days: 'Days 01 – 05',
    title: 'Scorecard & Comp Calibration With Scott Leese',
    desc: 'Most sales hires fail before the job post goes live because founders hire for the wrong stage or ACV. Scott Leese audits your current motion, locks in your Ideal Candidate Profile, designs the comp plan, and builds the exact interview scorecard.',
  },
  {
    days: 'Days 06 – 14',
    title: 'Instant Bench Matching + Outbound Headhunting',
    desc: 'We immediately tap The SLC Talent Bench—fed daily by Scott’s 134,000+ LinkedIn network, Surf & Sales alumni, and Thursday Night Sales operators—while our dedicated GTM recruiting team runs targeted outbound headhunting into your exact competitors.',
  },
  {
    days: 'Days 15 – 24',
    title: 'Rigorous Pipeline, Call-Tape & Deal Teardowns',
    desc: 'We don’t forward resumes. Our recruiting specialists screen every candidate on real W-2 attainment, self-sourced pipeline math, live discovery roleplays, and deal teardowns before you ever spend 30 minutes on Zoom.',
  },
  {
    days: 'Days 25 – 30',
    title: 'The "Scott Leese Bar-Raiser" Final Round & Offer Close',
    desc: 'Your top 2–3 finalists sit for a 20-minute final-round pressure test directly with Scott Leese. Once Scott gives the green light, we help structure the offer, run backchannel references, and lock in your 90-day onboarding ramp plan.',
  },
];

export default function TalentBenchPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex flex-wrap items-center gap-2 mb-6 md:mb-8 px-4 py-1.5 rounded-full border border-black/15 bg-[#f5f4ef] text-[#111111] text-[10px] sm:text-xs uppercase tracking-[0.18em] font-medium">
            <span>The SLC Talent Bench</span>
            <span className="text-black/30">&bull;</span>
            <span>Executive Search &amp; GTM Recruiting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-[#111111] leading-[1.06] mb-6 md:mb-8 max-w-5xl">
            Don&apos;t hire a resume.{' '}
            <span className="italic font-normal">Hire from my bench.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#111111]/65 font-light leading-relaxed max-w-3xl mb-10 md:mb-12">
            A bad VP of Sales or Founding AE costs you $250,000 and 9 months of runway. We combine our dedicated full-cycle GTM recruiting team with my 392.5K B2B network—and I personally vet your finalists before you make the hire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
            <a
              href="#portal"
              className="px-6 sm:px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.18em] font-medium text-center transition-colors"
            >
              Hire From The Bench (Founders &amp; VCs) &rarr;
            </a>
            <a
              href="#apply-bench"
              className="px-6 sm:px-8 py-4 border border-black/20 hover:border-[#111111] bg-white text-[#111111] text-xs uppercase tracking-[0.18em] font-medium text-center transition-colors"
            >
              Apply to Join The Bench (Candidates)
            </a>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-black/10">
            <div>
              <div className="text-3xl md:text-4xl font-serif text-[#111111] mb-1">134K+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium">
                LinkedIn GTM Network
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif text-[#111111] mb-1">14 Days</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium">
                To Vetted Shortlist
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif text-[#111111] mb-1">100%</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium">
                Finalists Vetted by Scott
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif text-[#111111] mb-1">90-Day</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium">
                Replacement Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker */}
      <section className="py-12 border-b border-black/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-6">
          <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/45 font-medium">
            Trusted by Founders &amp; Revenue Leaders Across 200+ Startups, 12 Unicorns &amp; 15 Exits
          </div>
        </div>
        <LogoTicker />
      </section>

      {/* Why Generic Recruiters Fail vs. The SLC Talent Bench */}
      <section className="py-24 px-6 border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              Why We Built This
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-6 leading-tight">
              Traditional headhunters have never carried a quota—or scaled from $0 to $25M.
            </h2>
            <p className="text-lg text-[#111111]/65 font-light leading-relaxed">
              Every week on LinkedIn, hundreds of Founding AEs, SDR leaders, and VPs of Sales reach out to me looking for their next startup, while founders ask me who to hire. Instead of sending you to a generic agency that forwards keyword-matched PDFs, we built <strong>The SLC Talent Bench</strong>—combining a dedicated full-cycle recruiting engine with my personal final-round Bar-Raiser calibration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            <div className="bg-[#fcfaf8] p-10 md:p-12">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-semibold mb-4">
                The Old Way (Generic Recruiting Agencies)
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-6">
                Why 50%+ of Early-Stage Sales Hires Fail in 6 Months
              </h3>
              <ul className="space-y-4 text-sm text-[#111111]/70 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#d9534f] font-bold">✕</span>
                  <span>
                    <strong>Stage Mismatch:</strong> Placing a big-logo enterprise VP of Sales into a $1.5M ARR startup where they expect an army of SDRs and RevOps that doesn&apos;t exist.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d9534f] font-bold">✕</span>
                  <span>
                    <strong>Interview Charisma Traps:</strong> Great salespeople are professional interviewers. Recruiters who haven&apos;t run a sales floor get seduced by smooth talkers who can&apos;t prospect cold.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d9534f] font-bold">✕</span>
                  <span>
                    <strong>Zero Onboarding Infrastructure:</strong> Handing you a hire with no comp plan calibration, no 30-60-90 ramp playbook, and no accountability cadence.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f4ef] p-10 md:p-12">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111] font-semibold mb-4">
                The SLC Talent Bench Standard
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-6">
                Operator-Calibrated Search + Warm Network Access
              </h3>
              <ul className="space-y-4 text-sm text-[#111111]/85 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#111111] font-bold">✓</span>
                  <span>
                    <strong>Exact Stage &amp; ACV Calibration:</strong> We match candidates who have already built at your exact ARR ($0→$1M, $1M→$5M, or $5M→$25M), deal size, and sales cycle.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#111111] font-bold">✓</span>
                  <span>
                    <strong>Live Discovery &amp; Pipeline Stress-Testing:</strong> Our recruiting team audits W-2 quota attainment, self-sourced pipeline ratios, and live objection handling before you meet them.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#111111] font-bold">✓</span>
                  <span>
                    <strong>Final-Round Vetting by Scott Leese:</strong> Scott personally interviews your finalists to pressure-test their grit, leadership ceiling, and tactical execution.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 30-Day Hiring Sprint Process */}
      <section className="py-24 px-6 border-b border-black/10 bg-[#f5f4ef]/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-4">
              The 30-Day SLC Hiring Sprint
            </h2>
            <p className="text-lg text-[#111111]/60 font-light max-w-3xl">
              Available as a standalone search sprint for any B2B company, or bundled seamlessly alongside our $3K Starter, $5K RevOps, or $10K Complete Advisory retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {SPRINT_STEPS.map((step) => (
              <div key={step.days} className="bg-[#fcfaf8] p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-medium mb-6">
                    {step.days}
                  </div>
                  <h3 className="text-xl font-serif text-[#111111] mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#111111]/65 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Anonymized Profiles Currently on The SLC Talent Bench */}
      <section className="py-24 px-6 border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
                Live Bench Snapshot
              </div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
                Sample Operators Currently on The Bench
              </h2>
            </div>
            <p className="text-sm text-[#111111]/60 font-light max-w-md">
              To protect candidate confidentiality, names and current employers are redacted. Request an introduction below to review full scorecards and call recordings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {BENCH_PROFILES.map((profile) => (
              <div
                key={profile.code}
                className="bg-[#fcfaf8] p-8 flex flex-col justify-between hover:bg-[#f5f4ef] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-mono uppercase tracking-wider text-[#111111]/50">
                      {profile.code}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#f5f4ef] border border-black/15 text-[10px] uppercase tracking-[0.15em] font-medium text-[#111111]">
                      &bull; {profile.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#111111] mb-2 leading-snug">
                    {profile.role}
                  </h3>

                  <div className="text-xs text-[#111111]/55 font-medium mb-5">
                    {profile.stage} &bull; {profile.acv} &bull; {profile.location}
                  </div>

                  <p className="text-sm text-[#111111]/70 font-light leading-relaxed mb-6">
                    {profile.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-black/10">
                    {profile.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] bg-white border border-black/10 px-2.5 py-1 text-[#111111]/80 font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#portal"
                    className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:text-[#d9534f] transition-colors"
                  >
                    Request Candidate Packet ({profile.code}) &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-6 border-b border-black/10 bg-[#f5f4ef]/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              Ways to Engage
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
              Flexible Search &amp; Bench Access
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-black/10 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-2">
                  Option 01 &bull; Single Role Search
                </div>
                <h3 className="text-2xl font-serif text-[#111111] mb-3">
                  Founding AE / RevOps Sprint
                </h3>
                <div className="text-3xl font-serif text-[#111111] mb-4">IC &amp; Operator Roles</div>
                <p className="text-sm text-[#111111]/65 font-light leading-relaxed mb-6">
                  Need your first 1–3 Founding AEs, Senior Enterprise AEs, SDR Manager, or Head of RevOps? We define the role scorecard with Scott, source and screen quota-verified builders, and deliver a vetted shortlist in 14 days.
                </p>
              </div>
              <a
                href="#portal"
                className="block w-full py-3.5 px-4 border border-black/20 hover:border-[#111111] text-center text-xs uppercase tracking-[0.2em] font-medium text-[#111111] transition-colors"
              >
                Hire AEs / RevOps &rarr;
              </a>
            </div>

            <div className="bg-[#111111] text-white border border-[#111111] p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium mb-2">
                  Option 02 &bull; Executive Search
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">
                  First VP of Sales / CRO Sprint
                </h3>
                <div className="text-3xl font-serif text-white mb-4">Leadership Search</div>
                <p className="text-sm text-white/75 font-light leading-relaxed mb-6">
                  Graduating from founder-led sales? We run full-cycle headhunting and warm bench matching for your First VP of Sales or Scale CRO—complete with Scott Leese scorecard calibration, final-round Bar-Raiser assessment, and 90-day replacement guarantee.
                </p>
              </div>
              <a
                href="#portal"
                className="block w-full py-3.5 px-4 bg-white text-[#111111] hover:bg-white/90 text-center text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Launch Executive Search &rarr;
              </a>
            </div>

            <div className="bg-white border border-black/10 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-2">
                  Option 03 &bull; All-In Turnkey
                </div>
                <h3 className="text-2xl font-serif text-[#111111] mb-3">
                  Complete Advisory + Recruiting
                </h3>
                <div className="text-3xl font-serif text-[#111111] mb-4">Starting at $10,000/mo</div>
                <p className="text-sm text-[#111111]/65 font-light leading-relaxed mb-6">
                  Included inside our Complete Plan ($10K/mo) or added onto our Starter ($3K/mo) and RevOps ($5K/mo) retainers. We build your playbooks and CRM architecture while hiring, onboarding, and coaching the reps who execute it.
                </p>
              </div>
              <Link
                href="/advisory#pricing"
                className="block w-full py-3.5 px-4 border border-black/20 hover:border-[#111111] text-center text-xs uppercase tracking-[0.2em] font-medium text-[#111111] transition-colors"
              >
                Compare Advisory Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Door Interactive Portal Forms */}
      <section id="portal" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              The SLC Talent Portal
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-4">
              Hire From The Bench—or Apply to Join It.
            </h2>
            <p className="text-lg text-[#111111]/60 font-light max-w-2xl mx-auto">
              Select your track below. Every submission goes directly to our GTM recruiting desk and Scott Leese.
            </p>
          </div>

          <TalentPortalForms />
        </div>
      </section>
    </div>
  );
}
