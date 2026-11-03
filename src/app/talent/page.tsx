import type { Metadata } from 'next';
import Link from 'next/link';
import LogoTicker from '@/components/LogoTicker';
import TalentPortalForms from './TalentPortalForms';

export const metadata: Metadata = {
  title: 'The SLC Talent Bench | Curated GTM Recruiting & Talent Network | Scott Leese',
  description:
    'Don’t hire a resume—hire from our network. Curated GTM matchmaking and executive search for Founding AEs, RevOps, and VPs of Sales across Scott Leese’s 406.5K+ operator ecosystem.',
};

const MATCH_STEPS = [
  {
    step: 'Step 01',
    title: 'Role & Stage Alignment',
    desc: 'Most early-stage sales hires fail because founders hire for the wrong ARR stage or deal size. Share your current motion, ACV, and comp range so we align on the exact builder profile you actually need.',
  },
  {
    step: 'Step 02',
    title: 'Bench Matching & Targeted Search',
    desc: 'We tap The SLC Talent Bench—an active, private network fed daily by Scott’s 227K+ Instagram and 134K+ LinkedIn audience, Surf & Sales alumni, and Thursday Night Sales operators—paired with targeted GTM recruiting.',
  },
  {
    step: 'Step 03',
    title: 'Curated Operator Introductions',
    desc: 'Zero resume spam. We introduce you directly to vetted sellers and sales leaders who have already built at your stage and ACV, with optional advisory calibration from Scott before you extend an offer.',
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
            <span>Curated GTM Talent Network &amp; Search</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-[#111111] leading-[1.06] mb-6 md:mb-8 max-w-5xl">
            Don&apos;t hire a resume.{' '}
            <span className="italic font-normal">Hire from the network.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#111111]/65 font-light leading-relaxed max-w-3xl mb-10 md:mb-12">
            Every week, top-performing Founding AEs, RevOps architects, and VPs of Sales across my 406.5K+ social and B2B ecosystem (227K on Instagram &amp; 134K on LinkedIn) reach out looking for their next startup—while founders ask me who to hire. The SLC Talent Bench connects the two.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
            <a
              href="#portal"
              className="shrink-0 whitespace-nowrap px-6 sm:px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.18em] font-medium text-center transition-colors"
            >
              Hire From The Bench (Founders &amp; VCs) &rarr;
            </a>
            <a
              href="#apply-bench"
              className="shrink-0 whitespace-nowrap px-6 sm:px-8 py-4 border border-black/20 hover:border-[#111111] bg-white text-[#111111] text-xs uppercase tracking-[0.18em] font-medium text-center transition-colors"
            >
              Join The Bench (Candidates)
            </a>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-black/10">
            <div>
              <div className="text-3xl md:text-4xl font-serif text-[#111111] mb-1">406.5K+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium">
                Total Operator Ecosystem
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif text-[#111111] mb-1">227K+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium">
                Instagram (@thescottleese)
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif text-[#111111] mb-1">134K+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium">
                LinkedIn GTM Network
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif text-[#111111] mb-1">200+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium">
                Startups &amp; VCs Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Door Interactive Portal Forms — Moved Right Under Hero for Immediate Low-Friction Conversion */}
      <section id="portal" className="py-20 md:py-24 px-6 border-b border-black/10 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              The SLC Talent Portal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-4">
              Hire From The Bench—or Apply to Join It.
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/60 font-light max-w-2xl mx-auto">
              Select your track below. Founders get connected with stage-matched operators; candidates get confidentially matched with high-growth startups in our ecosystem.
            </p>
          </div>

          <TalentPortalForms />
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-20 md:py-24 px-6 border-b border-black/10 bg-[#f5f4ef]/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-4">
              Warm Ecosystem Access, Not Resume Spam.
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/60 font-light max-w-3xl">
              Available as standalone GTM recruiting and talent matchmaking, or integrated alongside our{' '}
              <Link href="/advisory#pricing" className="underline underline-offset-4 text-[#111111]">
                $3K Starter, $5K RevOps, and $10K Complete Advisory retainers
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {MATCH_STEPS.map((item) => (
              <div key={item.step} className="bg-[#fcfaf8] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-medium mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-serif text-[#111111] mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#111111]/65 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
    </div>
  );
}
