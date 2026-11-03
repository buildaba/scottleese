"use client";

import { useState } from "react";
import Image from "next/image";

const PORTFOLIO_CHAPTERS = [
  { slide: 1, label: "01 • Cover", title: "Speaker Portfolio Cover" },
  { slide: 3, label: "03 • Introduction", title: "Why Scott Moves a Room" },
  { slide: 4, label: "04 • Track Record", title: "6x VP Sales • 14 Exits • 12 Unicorns" },
  { slide: 5, label: "05 • Signature Talks", title: "Core Keynote Topics & Audiences" },
  { slide: 6, label: "06 • Past Stages", title: "Dreamforce, Google, HubSpot, IBM & SKOs" },
  { slide: 7, label: "07 • Video Testimonial I", title: "Client Video Testimonial #1", isVideo: true },
  { slide: 8, label: "08 • Video Testimonial II", title: "Client Video Testimonial #2", isVideo: true },
  { slide: 9, label: "09 • Video Testimonial III", title: "Client Video Testimonial #3", isVideo: true },
  { slide: 10, label: "10 • Video Testimonial IV", title: "Client Video Testimonial #4", isVideo: true },
  { slide: 12, label: "12 • Booking Info", title: "Formats, Availability & Direct Contact" },
];

const PAST_STAGES = [
  { name: "Salesforce Dreamforce", badge: "2x Keynote Speaker" },
  { name: "Google", badge: "Enterprise GTM" },
  { name: "HubSpot", badge: "Revenue Leadership" },
  { name: "IBM", badge: "Global Sales Org" },
  { name: "Rainmaker", badge: "Featured Speaker" },
  { name: "Surf & Sales Summit", badge: "Founder & Host" },
  { name: "50+ High-Growth SKOs", badge: "Series A to Public" },
];

export default function SpeakingPage() {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventType: "",
    audienceSize: "",
    eventDate: "",
    budgetRange: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // fallback
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        eventType: "",
        audienceSize: "",
        eventDate: "",
        budgetRange: "",
        details: "",
      });
    }
  };

  const activeChapter = PORTFOLIO_CHAPTERS.find((c) => c.slide === activeSlide) || PORTFOLIO_CHAPTERS[0];

  return (
    <main className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          Speaking &amp; Keynotes
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.1]">
          Book Scott to Speak
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/65 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Not just a speaker. A 6x VP of Sales who&apos;s walked the walk—and knows how to move a room. Keynotes, SKOs, workshops, and executive offsites.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 whitespace-nowrap px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium transition-colors text-xs uppercase tracking-[0.2em] w-full sm:w-auto cursor-pointer"
          >
            Request Booking →
          </button>
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 whitespace-nowrap px-8 py-4 border border-black/20 hover:border-[#111111] text-[#111111] font-medium transition-colors text-xs uppercase tracking-[0.2em] w-full sm:w-auto cursor-pointer"
          >
            Explore Speaker Portfolio ↓
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">200+</span>
              <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Companies Advised</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">14</span>
              <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Exits &amp; 12 Unicorns</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">3</span>
              <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Bestselling Books</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">406.5K+</span>
              <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Social Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Past Engagements & Stage Credibility (Extracted from Portfolio Slides 3, 4 & 6) */}
      <section className="py-20 px-6 border-b border-black/10 bg-[#f5f4ef]/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
                Past Stages &amp; Engagements
              </div>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#111111] mb-6 leading-[1.15]">
                Tested on the World&apos;s Biggest Revenue Stages.
              </h2>
              <p className="text-lg text-[#111111]/70 font-light leading-relaxed mb-6">
                From <strong>Salesforce Dreamforce (2x)</strong> to <strong>Google, HubSpot, IBM, Rainmaker</strong>, and dozens of high-growth startup SKOs, Scott has been the speaker of choice for sales teams who want more than surface-level inspiration—they want someone who has lived in the trenches.
              </p>
              <p className="text-base text-[#111111]/60 font-light leading-relaxed">
                A 6x VP of Sales, 5x Founder, bestselling author, and creator of the Go-To-Network strategy, Scott has led teams, closed deals, and survived a 4-year illness and 9 surgeries—bringing unmatched depth, candor, and tactical command to every stage.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="border border-black/10 bg-[#fcfaf8] p-3 flex flex-col justify-between">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#191919] mb-3">
                  <Image
                    src="/speaking/slide11-stage1.jpg"
                    alt="Scott Leese delivering a live executive workshop"
                    fill
                    className="object-cover grayscale contrast-110"
                  />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#111111]/60">
                  Live SKO &amp; Workshop Delivery
                </div>
              </div>
              <div className="border border-black/10 bg-[#fcfaf8] p-3 flex flex-col justify-between">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#191919] mb-3">
                  <Image
                    src="/speaking/slide6-salesforce.png"
                    alt="Scott Leese Salesforce Influencer and Dreamforce Speaker"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#111111]/60">
                  2x Dreamforce &amp; Top Influencer
                </div>
              </div>
            </div>
          </div>

          {/* Stage Roster Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-black/10 border border-black/10">
            {PAST_STAGES.map((stage) => (
              <div key={stage.name} className="bg-[#fcfaf8] p-5 flex flex-col justify-between">
                <div className="text-sm font-serif font-medium text-[#111111] mb-1.5 leading-snug">
                  {stage.name}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#111111]/45">
                  {stage.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section (Enriched with Slide 5 Audience Callouts) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              Signature Keynotes &amp; Workshops
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
              Keynote Topics
            </h2>
          </div>
          <p className="text-sm text-[#111111]/55 font-light max-w-md">
            Every keynote and workshop is tailored to your current ARR stage, team composition, and quarterly GTM targets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
          <div className="bg-[#fcfaf8] p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#111111]/45 mb-3">
                Keynote 01 • Scale Architecture
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-4">
                Building Scalable Sales Teams from Scratch
              </h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6">
                For leaders and teams in scale mode: how to go from founder-led chaos to repeatable consistency. Hiring, process, and high-accountability culture—broken down from hard-won experience from hire #1 to #50.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-xs font-mono uppercase tracking-[0.12em] text-[#111111]/60">
              Ideal For: CROs, VPs of Sales &amp; fast-growing orgs
            </div>
          </div>

          <div className="bg-[#fcfaf8] p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#111111]/45 mb-3">
                Keynote 02 • Mindset &amp; Adversity
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-4">
                Resilience &amp; Mental Toughness in Sales
              </h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6">
                From 4 years in hospitals and 9 surgeries to 6x sales leader. A raw, honest talk about pressure, burnout, and pushing through when it feels impossible—turning adversity into your unfair competitive advantage.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-xs font-mono uppercase tracking-[0.12em] text-[#111111]/60">
              Ideal For: Frontline reps &amp; full SKO audiences
            </div>
          </div>

          <div className="bg-[#fcfaf8] p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#111111]/45 mb-3">
                Keynote 03 • Modern Pipeline
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-4">
                Go-To-Network: The Modern Sales Motion That Wins
              </h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6">
                Why cold outbound alone is broken—and how to build trust-based, community-led, and network-driven pipeline that scales in today&apos;s connected B2B landscape.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-xs font-mono uppercase tracking-[0.12em] text-[#111111]/60">
              Ideal For: GTM teams &amp; enterprise sellers
            </div>
          </div>

          <div className="bg-[#fcfaf8] p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#111111]/45 mb-3">
                Keynote 04 • Startup Execution
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-4">
                From Zero to $25M ARR
              </h3>
              <p className="text-[#111111]/65 leading-relaxed font-light mb-6">
                The tactical playbook for scaling early-stage startups through their most critical revenue milestones—graduating from founder-led sales at $3M ARR and installing an operating rhythm that lasts.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-xs font-mono uppercase tracking-[0.12em] text-[#111111]/60">
              Ideal For: Founders, CEOs, Boards &amp; VC Summits
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Embedded Speaker Portfolio & Video Testimonials Section */}
      <section id="portfolio" className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef]/70 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
                Interactive Speaker Kit &amp; Client Proof
              </div>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#111111] leading-tight">
                Speaker Portfolio &amp; Video Testimonials
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveSlide(7)}
                className="shrink-0 whitespace-nowrap px-4 py-2.5 bg-[#111111] text-white text-[11px] font-mono uppercase tracking-[0.16em] hover:bg-[#333333] transition-colors cursor-pointer"
              >
                ▶ Watch 4 Video Testimonials (Slides 7–10)
              </button>
              <a
                href="https://www.canva.com/design/DAGqnG0SYdE/cizSvUCNXW-BMAc5EF1RzA/view"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 whitespace-nowrap px-4 py-2.5 border border-black/20 hover:border-[#111111] text-[#111111] text-[11px] font-mono uppercase tracking-[0.16em] transition-colors"
              >
                Open Fullscreen Deck ↗
              </a>
            </div>
          </div>

          {/* Quick-Jump Chapter Strip */}
          <div className="mb-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#111111]/50 mb-2.5">
              Jump directly to section or video testimonial:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PORTFOLIO_CHAPTERS.map((chap) => {
                const isActive = activeSlide === chap.slide;
                return (
                  <button
                    key={chap.slide}
                    onClick={() => setActiveSlide(chap.slide)}
                    className={`shrink-0 whitespace-nowrap px-3.5 py-2 text-[11px] font-mono uppercase tracking-[0.12em] border transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#111111] text-white border-[#111111]"
                        : chap.isVideo
                        ? "bg-[#fcfaf8] text-[#111111] border-black/25 hover:border-[#111111]"
                        : "bg-[#fcfaf8]/70 text-[#111111]/70 border-black/10 hover:border-black/30 hover:text-[#111111]"
                    }`}
                  >
                    {chap.isVideo ? `▶ ${chap.label}` : chap.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Architectural Frame around Embedded Deck */}
          <div className="border border-black/15 bg-[#191919] shadow-xl overflow-hidden">
            {/* Editorial Frame Top Bar */}
            <div className="px-5 py-3 bg-[#111111] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-white/80">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#ede6d8]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/90">
                  {activeChapter.label} — {activeChapter.title}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.15em] text-white/55">
                <span>12-Slide Interactive Deck</span>
                <button
                  onClick={() => setActiveSlide((prev) => (prev > 1 ? prev - 1 : 12))}
                  className="px-2 py-0.5 border border-white/20 hover:border-white/60 text-white/80 hover:text-white transition-colors cursor-pointer"
                  title="Previous Slide"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev < 12 ? prev + 1 : 1))}
                  className="px-2 py-0.5 border border-white/20 hover:border-white/60 text-white/80 hover:text-white transition-colors cursor-pointer"
                  title="Next Slide"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Responsive 16:9 Canva Embed */}
            <div className="relative w-full aspect-[16/9] bg-[#191919]">
              <iframe
                key={activeSlide}
                src={`https://www.canva.com/design/DAGqnG0SYdE/cizSvUCNXW-BMAc5EF1RzA/view?embed#${activeSlide}`}
                title="Scott Leese Official Speaker Portfolio & Video Testimonials"
                className="absolute inset-0 w-full h-full border-0"
                allow="fullscreen; autoplay"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Editorial Frame Footer Bar */}
            <div className="px-5 py-3 bg-[#fcfaf8] border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#111111]/60">
              <div>
                <strong>Tip:</strong> Click inside the slide viewer to play the unedited client video testimonials on <strong>Slides 07–10</strong>, or use the chapter buttons above.
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111111]/50 shrink-0">
                Direct Speaker Desk: katie@scottleeseconsulting.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 76 GTM Projects Framework (Verbatim from scottleeseconsulting.com/speaking) */}
      <section className="py-24 px-6 border-t border-black/10 bg-[#fcfaf8]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              Why Founders &amp; CROs Bring Scott In
            </div>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#111111] mb-4 leading-tight">
              76 Major Projects Make Up an End-to-End Go-To-Market Engine.
            </h2>
            <p className="text-lg text-[#111111]/65 font-light leading-relaxed">
              Whether you are a Founder or an early-stage Revenue Leader, there are 76 major projects required to build every touchpoint of a complete Go-To-Market strategy. You don&apos;t have to figure them out alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fcfaf8] border border-black/10 p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-semibold mb-3">
                Side 01 • For Startup Founders
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-4">
                Graduating From Founder-Led Sales at $3M ARR
              </h3>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-4">
                Often, early-stage founders get tired of selling and want to hand off the task as soon as possible so they can focus on the product. Going from nothing to something is tough—but studies show that <strong>Founder-Led Sales is the best way to get to your first $3M in revenue</strong>.
              </p>
              <p className="text-[#111111]/70 font-light leading-relaxed">
                Scott teaches founders and boards how to reach the inflection point where you can hand responsibility off to a true VP of Sales—and trust they can actually do the job without you having to micromanage.
              </p>
            </div>

            <div className="bg-[#fcfaf8] border border-black/10 p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-semibold mb-3">
                Side 02 • For Revenue Leaders &amp; SKOs
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-4">
                Winning Your 12-Month Runway as a New VP of Sales
              </h3>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-4">
                Revenue leaders are often saddled with an impossible task: you didn&apos;t create the product you&apos;re selling, yet you have to figure out how it works, build the plan, train the reps, set the quotas, sit on the calls—and you only have <strong>12 months to get it right</strong> before the founder or VCs replace you.
              </p>
              <p className="text-[#111111]/70 font-light leading-relaxed">
                Scott equips your leadership team and sales floor with the exact operating rhythm we&apos;ve installed over 200+ times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-black/10 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">Request a Booking</h2>
          <p className="text-xl text-[#111111]/60 font-light">
            Available for keynotes, SKOs, workshops, virtual events, and team trainings. Let&apos;s talk dates, format, and how to make your next event unforgettable.
          </p>
        </div>

        <div className="p-8 md:p-12 border border-black/10 bg-[#fcfaf8]">
          {isSuccess ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-serif mb-4 text-[#111111]">Request Submitted</h3>
              <p className="text-[#111111]/60 font-light mb-8">We&apos;ll be in touch soon to discuss your event.</p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-[#111111] underline underline-offset-4 hover:text-[#d9534f]"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#111111]/70 mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#111111]/70 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-[#111111]/70 mb-2">Organization Name *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-[#111111]/70 mb-2">Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-[#111111]/70 mb-2">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors appearance-none rounded-none"
                  >
                    <option value=""></option>
                    <option value="SKO">SKO</option>
                    <option value="Conference">Conference</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Corporate Training">Corporate Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="audienceSize" className="block text-sm font-medium text-[#111111]/70 mb-2">Audience Size</label>
                  <select
                    id="audienceSize"
                    name="audienceSize"
                    value={formData.audienceSize}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors appearance-none rounded-none"
                  >
                    <option value=""></option>
                    <option value="Under 50">Under 50</option>
                    <option value="50-200">50-200</option>
                    <option value="200-500">200-500</option>
                    <option value="500+">500+</option>
                    <option value="Virtual">Virtual</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-[#111111]/70 mb-2">Budget Range</label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors appearance-none rounded-none"
                  >
                    <option value=""></option>
                    <option value="Under $10K">Under $10K</option>
                    <option value="$10K - $25K">$10K - $25K</option>
                    <option value="$25K - $50K">$25K - $50K</option>
                    <option value="$50K+">$50K+</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-[#111111]/70 mb-2">Additional Details</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#111111] text-white py-4 font-medium hover:bg-[#333333] transition-colors disabled:opacity-50 text-xs uppercase tracking-[0.2em] cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Submit Booking Request →"}
              </button>
            </form>
          )}
        </div>
        <div className="mt-8 text-center text-[#111111]/60 font-light text-sm space-y-1">
          <div>
            Direct speaker booking inquiries:{" "}
            <a href="mailto:katie@scottleeseconsulting.com" className="text-[#111111] underline underline-offset-4 hover:text-[#111111]/70">
              katie@scottleeseconsulting.com
            </a>{" "}
            or{" "}
            <a href="mailto:scott@scottleeseconsulting.com" className="text-[#111111] underline underline-offset-4 hover:text-[#111111]/70">
              scott@scottleeseconsulting.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
