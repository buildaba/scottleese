import { Fragment } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import VideoTestimonials from "./VideoTestimonials";
import LogoTicker from "@/components/LogoTicker";

export const metadata = {
  title: "Advisory, RevOps & GTM Recruiting | Scott Leese Consulting",
  description:
    "GTM strategy, fractional RevOps, coaching, playbooks, and Scott-vetted sales recruiting for founders and early-stage revenue leaders. 12 unicorns, 15 exits, 200+ companies accelerated.",
};

const COMPARISON_SECTIONS = [
  {
    category: "Advisory",
    rows: [
      {
        title: "Strategic Discussions",
        desc: "Identify weaknesses in GTM strategy and provide a sounding board to work out ideas.",
        starter: true,
        revops: false,
        complete: true,
        recruiting: false,
      },
      {
        title: "Motivation & Cadence",
        desc: "Help build patterns & practices for stacking wins consistently while being a positive force for you.",
        starter: true,
        revops: false,
        complete: true,
        recruiting: false,
      },
      {
        title: "Network & Outreach",
        desc: "Assist in planning your personal networking strategy and making key introductions.",
        starter: true,
        revops: false,
        complete: true,
        recruiting: false,
      },
    ],
  },
  {
    category: "Coaching",
    rows: [
      {
        title: "Call Reviews & Roleplaying",
        desc: "Help your reps put in the reps they need to have consistently successful sales conversations.",
        starter: true,
        revops: false,
        complete: true,
        recruiting: false,
      },
      {
        title: "One-on-Ones",
        desc: "Help your individual contributors align personal & professional goals in a neutral setting.",
        starter: true,
        revops: false,
        complete: true,
        recruiting: false,
      },
      {
        title: "Leadership Training",
        desc: "Tools to help manage up, across, and down, no matter where you sit on your team.",
        starter: true,
        revops: false,
        complete: true,
        recruiting: false,
      },
    ],
  },
  {
    category: "RevOps",
    rows: [
      {
        title: "Tool Review & Recommendations",
        desc: "We'll dig into your current sales stack and independently assess its effectiveness.",
        starter: false,
        revops: true,
        complete: true,
        recruiting: false,
      },
      {
        title: "CRM Process Design",
        desc: "From sales process tracking to enrichment to account distribution, we've got you covered.",
        starter: false,
        revops: true,
        complete: true,
        recruiting: false,
      },
      {
        title: "Change Management",
        desc: "Making changes to the CRM can be a time-suck, so let us handle your fields, stages, and steps.",
        starter: false,
        revops: true,
        complete: true,
        recruiting: false,
      },
      {
        title: "Reporting & Forecasting",
        desc: "We'll make sure you have all the metrics, pipeline, and forecasts you need to support your team and investors.",
        starter: false,
        revops: true,
        complete: true,
        recruiting: false,
      },
    ],
  },
  {
    category: "Playbooks",
    rows: [
      {
        title: "Defining Your Market",
        desc: "Detailed Ideal Customer Profiles, Buyer Personas, and Competitive Landscape analyses that form the core of your messaging.",
        starter: false,
        revops: false,
        complete: true,
        recruiting: false,
      },
      {
        title: "Meeting & Closing Scripts",
        desc: "Steps to handle every conversation from first call to customer onboarding and beyond.",
        starter: false,
        revops: false,
        complete: true,
        recruiting: false,
      },
      {
        title: "Expectation Alignment",
        desc: "Documents to help make sure teammates are on the same page through every customer handoff.",
        starter: false,
        revops: false,
        complete: true,
        recruiting: false,
      },
    ],
  },
  {
    category: "Recruiting",
    rows: [
      {
        title: "Define Roles",
        desc: "We create all the documentation, Ideal Candidate Profiles, and job descriptions to support every GTM role.",
        starter: false,
        revops: false,
        complete: true,
        recruiting: true,
      },
      {
        title: "Define Success & Scorecards",
        desc: "We set reasonable expectations, comp structures, and interview scorecards for every GTM role.",
        starter: false,
        revops: false,
        complete: true,
        recruiting: true,
      },
      {
        title: "Get It Done (The SLC Talent Bench)",
        desc: "Full-cycle headhunting via the SLC Talent Bench: outbound candidate sourcing, screening, Scott Leese final-round vetting, and placement guarantee.",
        starter: "Add-on",
        revops: "Add-on",
        complete: true,
        recruiting: true,
      },
    ],
  },
];

const WRITTEN_TESTIMONIALS = [
  {
    quote:
      "Scott's direct & transparent approach led to a complete transformation within six months. He worked closely with all levels of our team, providing critical feedback & tangible steps, even getting on the phones to identify gaps. His contributions were crucial in our $317M sale of FiveStars to SumUp.",
    name: "Matt Curl",
    role: "COO",
    company: "Apollo.io (ex-FiveStars)",
  },
  {
    quote:
      "Scott Leese's impact on Fundbox's growth trajectory cannot be overstated. As an early go-to-market consultant, Scott played a pivotal role in shaping our sales strategy during a critical phase of our development.",
    name: "Basile Senesi",
    role: "Chief Revenue Officer",
    company: "Arc (ex-Fundbox)",
  },
  {
    quote:
      "Scott helped me define our GTM strategy, messaging, and really improve our operational rigor. There are few people in the early-stage startup game that I can confidently say make such a positive impact consistently.",
    name: "Mike Furlong",
    role: "Founder",
    company: "Fractal",
  },
  {
    quote:
      "Scott has been an advisor for Replayz for over 4 years now. He is always there when we need him, and his advice has proven to be super valuable. His approach is thoughtful and guided by his many years of super-relevant real-life experience.",
    name: "Dave Kennett",
    role: "Founder & CEO",
    company: "Replayz IQ",
  },
  {
    quote:
      "Scott Leese was pivotal in transforming our approach to sales & marketing. His ability to pinpoint and attract the right customers accelerated our growth and solidified our market position. I can confidently recommend Scott for any company looking to thrive.",
    name: "Mike Smalls",
    role: "Founder",
    company: "Hoopla",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111] font-sans">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
            Scott Leese Consulting
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.08] text-[#111111]">
            12 Unicorns &amp; 15 Exits.
            <br />
            <span className="text-[#111111]/60 italic font-light">Can your GTM advisor say that?</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#111111]/65 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Helping founding teams and early-stage revenue leaders scale from $0 to $25M ARR through better distribution, bulletproof RevOps, and Scott-vetted sales talent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#pricing"
              className="px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium transition-colors text-lg w-full sm:w-auto"
            >
              View Plans &amp; Pricing
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent border border-black/20 hover:border-black/50 text-[#111111] font-medium transition-colors text-lg w-full sm:w-auto"
            >
              Get Started Today
            </Link>
          </div>

          <div className="mt-24 pt-12 border-t border-black/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">200+</span>
                <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Companies Accelerated</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">12</span>
                <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">$1B+ Unicorns</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">15</span>
                <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Exits</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">50+</span>
                <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Advisor Equity Positions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorized Logo Tickers from scottleeseconsulting.com */}
      <section className="py-12 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 mb-4 flex items-center justify-between">
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#111111]/40 font-medium">
            Top-Tier Clients, Unicorns &amp; Exits
          </span>
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#111111]/40 font-medium">
            200+ Accelerated
          </span>
        </div>
        <LogoTicker />
      </section>

      {/* Founders vs Revenue Leaders Narrative (From scottleeseconsulting.com/what-we-do) */}
      <section className="py-24 border-t border-black/10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
              Setting the Stage for Success
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
              Two Sides of the Same Coin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 mb-12">
            <div className="bg-[#fcfaf8] p-10 md:p-14">
              <div className="text-xs uppercase tracking-[0.2em] text-[#d9534f] font-medium mb-3">For Founders</div>
              <h3 className="text-3xl font-serif text-[#111111] mb-6">Graduation from Founder-Led Sales</h3>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-4">
                Too many early-stage founders get tired of selling and want to hand off the task as soon as possible so they can focus on the product.
              </p>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-4">
                Going from nothing to something is tough. Studies show Founder-Led Sales is the best way to get to your first $3M in revenue.
              </p>
              <p className="text-[#111111] font-normal leading-relaxed">
                So how do you get to the point where you can hand responsibility off to a true VP of Sales—or your first Founding AEs—and trust they can actually do the job without you having to micro-manage?
              </p>
            </div>

            <div className="bg-[#fcfaf8] p-10 md:p-14">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 font-medium mb-3">For Revenue Leaders</div>
              <h3 className="text-3xl font-serif text-[#111111] mb-6">Building the Plane While Flying It</h3>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-4">
                You are often saddled with an impossible task. You didn&apos;t create this thing you&apos;re selling, but you&apos;ve got to figure out how it works, build the plan, train the reps, set the quotas, and sit on the calls...
              </p>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-4">
                ...and you only have a few short months to get it right, or else!
              </p>
              <p className="text-[#111111] font-normal leading-relaxed">
                Whether you&apos;ve done this before and want to move faster, or just got that big promotion and want to get it right—you don&apos;t have to do it alone. We&apos;ve done it over 200 times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars Section */}
      <section className="py-24 border-t border-black/10 px-6 bg-[#f5f4ef]/60">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">Five Pillars of GTM Execution</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            <div className="bg-[#fcfaf8] p-10 md:p-12 lg:col-span-2">
              <h3 className="text-3xl font-serif text-[#111111] mb-4">1. Advisory</h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6 max-w-2xl">
                A strategic sounding board to work out ideas, identify weaknesses in your GTM motion, build patterns for stacking wins consistently, and unlock critical network introductions.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#111111]/75 font-light">
                <li>• GTM bottleneck diagnosis</li>
                <li>• Pricing &amp; packaging strategy</li>
                <li>• Executive &amp; VC network intros</li>
                <li>• Board &amp; investor prep</li>
              </ul>
            </div>

            <div className="bg-[#fcfaf8] p-10 md:p-12">
              <h3 className="text-2xl font-serif text-[#111111] mb-4">2. Coaching</h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6">
                Hands-on tactical elevation for founders, sales leaders, and individual contributors.
              </p>
              <ul className="space-y-2 text-sm text-[#111111]/75 font-light">
                <li>• Live roleplaying &amp; call reviews</li>
                <li>• 1-on-1 rep &amp; leader coaching</li>
                <li>• Outbound sequence creation</li>
                <li>• Teaching founders to lead leaders</li>
              </ul>
            </div>

            <div className="bg-[#fcfaf8] p-10 md:p-12">
              <h3 className="text-2xl font-serif text-[#111111] mb-4">3. Playbooks</h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6">
                Codified, repeatable processes so every rep knows exactly how to win deals.
              </p>
              <ul className="space-y-2 text-sm text-[#111111]/75 font-light">
                <li>• ICP &amp; buyer persona definition</li>
                <li>• Competitive battlecards &amp; objections</li>
                <li>• Outbound, demo &amp; closing scripts</li>
                <li>• Rules of engagement &amp; CS handoffs</li>
              </ul>
            </div>

            <div className="bg-[#fcfaf8] p-10 md:p-12">
              <h3 className="text-2xl font-serif text-[#111111] mb-4">4. RevOps</h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6">
                End-to-end CRM architecture, automation, and reporting led by VP of Operations JM Wilke.
              </p>
              <ul className="space-y-2 text-sm text-[#111111]/75 font-light">
                <li>• CRM process design &amp; lead routing</li>
                <li>• Territory &amp; account distribution</li>
                <li>• Tech stack audit &amp; enrichment</li>
                <li>• Pipeline efficiency &amp; forecast reporting</li>
              </ul>
            </div>

            <div className="bg-[#fcfaf8] p-10 md:p-12 border-t lg:border-t-0 border-black/10">
              <div className="inline-block px-2.5 py-0.5 bg-[#111111] text-white text-[10px] uppercase tracking-[0.15em] mb-3">
                The SLC Talent Bench
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-4">5. Recruiting</h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6">
                Role design, comp plans, and full-cycle sourcing for AEs, SDRs, CS, and Revenue Leaders.
              </p>
              <ul className="space-y-2 text-sm text-[#111111]/75 font-light">
                <li>• Ideal Candidate Profiles &amp; scorecards</li>
                <li>• Outbound sourcing &amp; candidate screening</li>
                <li>• Final-round candidate vetting with Scott</li>
                <li>• Onboarding &amp; 90-day ramp playbooks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section + The SLC Talent Bench & Diagnostic Wedge */}
      <section id="pricing" className="py-24 border-t border-black/10 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">Working With Us</div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">Plans &amp; Pricing</h2>
            <p className="text-xl text-[#111111]/60 font-light">
              Transparent monthly retainers. Start with a 72-hour diagnostic, pick the advisory tier that fits your stage, or hire directly from The SLC Talent Bench.
            </p>
          </div>

          {/* Low-Friction Wedge: $2,500 72-Hour GTM & Hiring Readiness Diagnostic */}
          <div className="mb-10 border border-black/15 bg-white p-8 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f5f4ef] border border-black/10 text-[#111111] text-[11px] uppercase tracking-[0.18em] font-medium mb-3">
                <span>Fast-Track Entry Wedge</span>
                <span className="text-black/30">•</span>
                <span>No Multi-Month Commitment Required</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mb-2">
                72-Hour GTM &amp; VP of Sales Readiness Diagnostic
              </h3>
              <p className="text-[#111111]/65 font-light leading-relaxed text-sm md:text-base">
                Not sure if you&apos;re ready to hire a VP of Sales, need 2 Founding AEs first, or need to fix your outbound and CRM pipeline before adding headcount? We audit your ICP, call recordings, comp plan, and conversion funnel and deliver a written <strong>90-Day GTM &amp; Hiring Blueprint + 1:1 Readout Call</strong>. (100% credited toward any retainer or search within 30 days.)
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-black/10">
              <div className="lg:text-right">
                <div className="text-3xl md:text-4xl font-serif text-[#111111]">$2,500</div>
                <div className="text-xs text-[#111111]/50 font-light">One-time flat fee • 72-hr turnaround</div>
              </div>
              <Link
                href="#contact"
                className="px-6 py-3 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Book 72-Hr Audit →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Starter */}
            <div className="bg-white border border-black/10 p-10 flex flex-col">
              <div className="mb-8 border-b border-black/10 pb-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-2">Plan 01 • 3 Months</div>
                <h3 className="text-3xl font-serif text-[#111111] mb-4">Starter</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-[#111111]/50 font-light">Starting at</span>
                  <span className="text-4xl font-serif tracking-tight text-[#111111]">$3,000</span>
                  <span className="text-[#111111]/50 text-sm">/month</span>
                </div>
                <p className="text-sm text-[#111111]/60 mt-3 font-light">
                  For founders &amp; sales leaders that need strategic support for growth.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "One (1) call per week w/ Scott",
                  "Unlimited async work hours",
                  "Focus on Coaching & Advisory",
                  "Call reviews, roleplaying & 1-on-1s",
                  "Strategic sounding board & intros",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#111111]/75 font-light">
                    <span className="text-[#111111] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="block w-full py-3.5 px-4 border border-black/20 hover:border-black hover:bg-black/5 text-center font-medium text-[#111111] transition-colors"
              >
                Hire Us Today
              </Link>
            </div>

            {/* RevOps */}
            <div className="bg-white border border-black/10 p-10 flex flex-col">
              <div className="mb-8 border-b border-black/10 pb-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-2">Plan 02 • 3 Months</div>
                <h3 className="text-3xl font-serif text-[#111111] mb-4">RevOps</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-[#111111]/50 font-light">Starting at</span>
                  <span className="text-4xl font-serif tracking-tight text-[#111111]">$5,000</span>
                  <span className="text-[#111111]/50 text-sm">/month</span>
                </div>
                <p className="text-sm text-[#111111]/60 mt-3 font-light">
                  For companies that need help enforcing process with tools &amp; clean CRM data.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Two (2) calls per week w/ JM Wilke",
                  "Unlimited async work hours",
                  "Dedicated RevOps support",
                  "CRM process design & lead routing",
                  "Sales stack audit & change management",
                  "Pipeline & board forecast reporting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#111111]/75 font-light">
                    <span className="text-[#111111] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="block w-full py-3.5 px-4 border border-black/20 hover:border-black hover:bg-black/5 text-center font-medium text-[#111111] transition-colors"
              >
                Hire Us Today
              </Link>
            </div>

            {/* Complete */}
            <div className="bg-[#111111] text-white border border-black p-10 flex flex-col relative shadow-xl">
              <div className="absolute top-0 right-0 bg-white text-[#111111] px-4 py-1 text-xs uppercase tracking-widest font-medium">
                Full Fractional GTM
              </div>
              <div className="mb-8 border-b border-white/10 pb-8">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium mb-2">Plan 03 • 6 Months</div>
                <h3 className="text-3xl font-serif text-white mb-4">Complete</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-white/50 font-light">Starting at</span>
                  <span className="text-4xl font-serif tracking-tight text-white">$10,000</span>
                  <span className="text-white/60 text-sm">/month</span>
                </div>
                <p className="text-sm text-white/70 mt-3 font-light">
                  For companies that need complete fractional revenue leadership across all 5 pillars.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Up to three (3) calls/week w/ Scott & JM",
                  "Unlimited async work hours",
                  "Advisory + Coaching + Dedicated RevOps",
                  "Custom GTM Playbooks & scripts",
                  "Recruiting role design, scorecards & hiring",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/85 font-light">
                    <span className="text-white mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="block w-full py-3.5 px-4 bg-white text-[#111111] hover:bg-white/90 text-center font-medium transition-colors"
              >
                Hire Us Today
              </Link>
            </div>
          </div>

          {/* Dedicated SLC Talent Bench Module (Zero Cannibalization, High Conversion) */}
          <div id="recruiting" className="border border-black/15 bg-[#f5f4ef] p-8 md:p-12 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-white text-[11px] uppercase tracking-[0.18em] mb-4">
                  <span>Standalone 30-Day Hiring Sprint or Plan Add-On</span>
                  <span className="text-white/40">•</span>
                  <span>The SLC Talent Bench</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif tracking-tight text-[#111111] mb-4">
                  Don&apos;t Hire a Resume. Hire From The SLC Talent Bench.
                </h3>
                <p className="text-[#111111]/70 font-light leading-relaxed mb-6 text-lg">
                  Most recruiters don&apos;t know how to vet quota-carrying salespeople. Through <strong>The SLC Talent Bench</strong>—our dedicated GTM recruiting and executive search division—we handle 100% of the headhunting (outbound sourcing, rigorous screening, and warm bench matching from Scott&apos;s 134K+ LinkedIn network) while <strong>Scott Leese defines your role scorecard and personally conducts the final-round Bar-Raiser interview</strong> before you extend an offer.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-black/10 text-sm">
                  <div>
                    <div className="font-medium text-[#111111]">Roles We Place</div>
                    <div className="text-[#111111]/60 font-light">Founding AEs, Enterprise AEs, SDR Leaders, RevOps &amp; First VPs of Sales</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#111111]">How It Works</div>
                    <div className="text-[#111111]/60 font-light">SLC Talent Bench sources &amp; screens → Scott vets finalists → You hire</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#111111]">For Starter &amp; RevOps Clients</div>
                    <div className="text-[#111111]/60 font-light">Plug-and-play hiring execution without upgrading to a 6-month plan</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-center bg-white border border-black/10 p-8 text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 font-medium mb-2">
                  The SLC Talent Bench
                </div>
                <div className="text-2xl font-serif text-[#111111] mb-2">
                  30-Day Hiring Sprint
                </div>
                <p className="text-xs text-[#111111]/60 font-light mb-6">
                  Includes role scorecard calibration, vetted candidate shortlist in 14 days, final-round Scott Leese assessment &amp; replacement guarantee.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/talent"
                    className="block w-full py-3.5 px-6 bg-[#111111] hover:bg-[#333333] text-white font-medium text-sm transition-colors"
                  >
                    Explore The SLC Talent Bench →
                  </Link>
                  <Link
                    href="/talent#apply-bench"
                    className="block w-full py-2.5 px-4 border border-black/15 hover:border-[#111111] text-[#111111] font-medium text-xs uppercase tracking-[0.15em] transition-colors"
                  >
                    Candidate? Join the Bench
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Feature Comparison Matrix (Ported from scottleeseconsulting.com/working-with-us) */}
      <section id="plans" className="py-24 border-t border-black/10 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
              Compare All Features
            </div>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#111111]">
              What You Get in Every Plan
            </h2>
          </div>

          <div className="overflow-x-auto border border-black/10 bg-white">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-black/10 bg-[#fcfaf8]">
                  <th className="p-6 text-xs uppercase tracking-[0.15em] text-[#111111]/50 font-medium w-[42%]">
                    Deliverable / Workstream
                  </th>
                  <th className="p-6 text-center w-[14%] border-l border-black/10">
                    <div className="font-serif text-lg text-[#111111]">Starter</div>
                    <div className="text-xs text-[#111111]/50 font-light">$3K/mo</div>
                  </th>
                  <th className="p-6 text-center w-[14%] border-l border-black/10">
                    <div className="font-serif text-lg text-[#111111]">RevOps</div>
                    <div className="text-xs text-[#111111]/50 font-light">$5K/mo</div>
                  </th>
                  <th className="p-6 text-center w-[15%] border-l border-black/10 bg-[#111111] text-white">
                    <div className="font-serif text-lg">Complete</div>
                    <div className="text-xs text-white/60 font-light">$10K/mo</div>
                  </th>
                  <th className="p-6 text-center w-[15%] border-l border-black/10 bg-[#f5f4ef]">
                    <div className="font-serif text-base text-[#111111]">SLC Talent Bench</div>
                    <div className="text-[11px] text-[#111111]/60 font-light">Hiring Sprint</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_SECTIONS.map((section) => (
                  <Fragment key={section.category}>
                    <tr className="bg-[#f5f4ef]/70 border-b border-black/10">
                      <td colSpan={5} className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#111111]">
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.title} className="border-b border-black/10 hover:bg-[#fcfaf8]/60 transition-colors">
                        <td className="p-6">
                          <div className="font-medium text-[#111111] mb-1">{row.title}</div>
                          <div className="text-sm text-[#111111]/60 font-light leading-relaxed">{row.desc}</div>
                        </td>
                        <td className="p-6 text-center border-l border-black/10">
                          {row.starter === true ? (
                            <span className="text-lg font-medium text-[#111111]">✓</span>
                          ) : row.starter === "Add-on" ? (
                            <span className="text-[11px] uppercase tracking-wider px-2 py-0.5 border border-black/20 text-[#111111]/70">
                              Add-On
                            </span>
                          ) : (
                            <span className="text-[#111111]/20">—</span>
                          )}
                        </td>
                        <td className="p-6 text-center border-l border-black/10">
                          {row.revops === true ? (
                            <span className="text-lg font-medium text-[#111111]">✓</span>
                          ) : row.revops === "Add-on" ? (
                            <span className="text-[11px] uppercase tracking-wider px-2 py-0.5 border border-black/20 text-[#111111]/70">
                              Add-On
                            </span>
                          ) : (
                            <span className="text-[#111111]/20">—</span>
                          )}
                        </td>
                        <td className="p-6 text-center border-l border-black/10 bg-[#111111]/[0.02]">
                          {row.complete ? (
                            <span className="text-lg font-semibold text-[#111111]">✓</span>
                          ) : (
                            <span className="text-[#111111]/20">—</span>
                          )}
                        </td>
                        <td className="p-6 text-center border-l border-black/10 bg-[#f5f4ef]/40">
                          {row.recruiting ? (
                            <span className="text-lg font-semibold text-[#111111]">✓</span>
                          ) : (
                            <span className="text-[#111111]/20">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section (7 Real Customers from scottleeseconsulting.com) */}
      <section className="py-24 border-t border-black/10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
              Don&apos;t Just Take Our Word For It
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">
              Real Talk From Real Customers
            </h2>
            <p className="text-xl text-[#111111]/60 font-light">
              Hear directly from founders, CROs, and sales leaders at Qued, Highway, Rippling, Mixpanel, DataFlik, Right-Sized Inventory, and Constrafor.
            </p>
          </div>

          <VideoTestimonials />

          {/* Written Endorsements Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {WRITTEN_TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`bg-[#fcfaf8] p-10 flex flex-col justify-between ${
                  i === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <p className="text-lg md:text-xl font-serif italic text-[#111111]/85 leading-relaxed mb-8 font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-black/10 pt-4">
                  <div>
                    <div className="font-medium text-[#111111]">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-[#111111]/50 mt-0.5">
                      {t.role}, {t.company}
                    </div>
                  </div>
                  <div className="text-[#111111]/30 text-sm tracking-widest">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Real Photos from scottleeseconsulting.com/who-we-are */}
      <section className="py-24 border-t border-black/10 px-6 bg-[#f5f4ef]/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">Who We Are</div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">Meet the Leadership Team</h2>
            </div>
            <Link
              href="/about"
              className="text-sm font-medium text-[#111111] underline underline-offset-4 hover:text-[#d9534f]"
            >
              Read Scott &amp; JM&apos;s full origin stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#fcfaf8] border border-black/10 p-8 md:p-10 flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden mb-8 border border-black/10 bg-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/65e902866ce317053dbcd7c2_ScottLeese.jpg"
                  alt="Scott Leese"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-3xl font-serif tracking-tight text-[#111111] mb-1">Scott Leese</h3>
              <p className="text-[#111111]/50 font-medium text-xs mb-6 uppercase tracking-[0.2em]">Founder &amp; CEO</p>
              <p className="text-[#111111]/70 leading-relaxed font-light mb-6">
                6x early-stage sales leader who scaled startups from $0 to $25M ARR in under three years, repeatedly. Part of 15 exits and 12 unicorn valuations across 200+ companies advised. 3x bestselling author and Executive Venture Partner at TipTop VC.
              </p>
            </div>

            <div className="bg-[#fcfaf8] border border-black/10 p-8 md:p-10 flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden mb-8 border border-black/10 bg-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/65e8a588771af6062b0a2e10_JM%20Wilke.jpg"
                  alt="JM Wilke"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-3xl font-serif tracking-tight text-[#111111] mb-1">JM Wilke</h3>
              <p className="text-[#111111]/50 font-medium text-xs mb-6 uppercase tracking-[0.2em]">VP of Operations</p>
              <p className="text-[#111111]/70 leading-relaxed font-light mb-6">
                RevOps architect who turns chaotic startup sales processes into high-velocity revenue machines. Expert in CRM process design, lead routing, territory planning, stack consolidation, and investor-grade pipeline reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-black/10 px-6 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">Get Started</div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">
              Want to Work With Us? Let&apos;s Talk.
            </h2>
            <p className="text-xl text-[#111111]/60 font-light">
              Give us a few quick details and we&apos;ll get back to you within one business day.
            </p>
          </div>

          <ContactForm />

          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#111111]/60 font-light">
            <div>
              Direct Email:{" "}
              <a
                href="mailto:scott@scottleeseconsulting.com"
                className="text-[#111111] font-medium hover:text-[#d9534f] transition-colors"
              >
                scott@scottleeseconsulting.com
              </a>
            </div>
            <div>Austin, TX • Serving Founders Worldwide</div>
          </div>
        </div>
      </section>
    </div>
  );
}
