"use client";

import { useState } from "react";
import LogoTicker from "@/components/LogoTicker";

export default function MediaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    packageInterest: "",
    budgetRange: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", packageInterest: "", budgetRange: "", message: "" });
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          Media Kit 2026 • Creator &amp; Brand Partnerships
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.08]">
          Let&apos;s Build Something Your Buyers Actually Watch.
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/65 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          392.5K followers and subscribers across six channels. 8.7M views on a single Instagram Reel. Direct reach into founders, CEOs, CROs, VPs of Sales, and the VCs who back them.
        </p>
        <p className="text-sm uppercase tracking-[0.18em] text-[#111111]/50 mb-12">
          6x Sales Leader • 5x Founder • 3x Bestselling Author • 50+ Advisor Equity Positions • Executive Venture Partner at TipTop VC
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium transition-colors text-lg w-full sm:w-auto"
          >
            View 2026 Sponsorship Packages
          </button>
          <a
            href="/Scott_Leese_Media_Kit_2026.pdf"
            download="Scott_Leese_Media_Kit_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-black/20 hover:border-black/50 text-[#111111] font-medium text-lg transition-colors w-full sm:w-auto text-center"
          >
            Download 2026 Media Kit (PDF) ↓
          </a>
        </div>
      </section>

      {/* Audience Section (Exact 2026 Media Kit Numbers) */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-black/10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">Audience Breakdown</div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">392.5K Total Reach</h2>
          </div>
          <p className="text-lg text-[#111111]/60 font-light">
            Founders, CEOs, CROs, VPs of Sales, and the VCs who back them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/thescottleese"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] transition-colors p-10 md:p-12 flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-medium text-[#111111]/50 tracking-[0.2em] uppercase mb-1 flex items-center justify-between">
                <span>Instagram</span>
                <span className="text-[#111111]/30 group-hover:text-[#d9534f] transition-colors">↗</span>
              </div>
              <div className="text-lg font-medium text-[#111111] mb-10">@thescottleese</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-serif tracking-tight text-[#111111] mb-2">213K</div>
              <div className="text-[#111111]/50 font-light">Followers</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/scottleese/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] transition-colors p-10 md:p-12 flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-medium text-[#111111]/50 tracking-[0.2em] uppercase mb-1 flex items-center justify-between">
                <span>LinkedIn</span>
                <span className="text-[#111111]/30 group-hover:text-[#d9534f] transition-colors">↗</span>
              </div>
              <div className="text-lg font-medium text-[#111111] mb-10">linkedin.com/in/scottleese</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-serif tracking-tight text-[#111111] mb-2">134K</div>
              <div className="text-[#111111]/50 font-light">Followers</div>
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@therealscottleese"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] transition-colors p-10 md:p-12 flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-medium text-[#111111]/50 tracking-[0.2em] uppercase mb-1 flex items-center justify-between">
                <span>TikTok</span>
                <span className="text-[#111111]/30 group-hover:text-[#d9534f] transition-colors">↗</span>
              </div>
              <div className="text-lg font-medium text-[#111111] mb-10">@therealscottleese</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-serif tracking-tight text-[#111111] mb-2">31K</div>
              <div className="text-[#111111]/50 font-light">Followers</div>
            </div>
          </a>

          {/* X */}
          <a
            href="https://x.com/thescottleese"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] transition-colors p-10 md:p-12 flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-medium text-[#111111]/50 tracking-[0.2em] uppercase mb-1 flex items-center justify-between">
                <span>X (Twitter)</span>
                <span className="text-[#111111]/30 group-hover:text-[#d9534f] transition-colors">↗</span>
              </div>
              <div className="text-lg font-medium text-[#111111] mb-10">@thescottleese</div>
            </div>
            <div>
              <div className="text-5xl font-serif tracking-tight text-[#111111] mb-2">7.6K</div>
              <div className="text-[#111111]/50 font-light">Followers</div>
            </div>
          </a>

          {/* Newsletter */}
          <a
            href="/newsletter"
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] transition-colors p-10 md:p-12 flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-medium text-[#111111]/50 tracking-[0.2em] uppercase mb-1 flex items-center justify-between">
                <span>Newsletter</span>
                <span className="text-[#111111]/30 group-hover:text-[#d9534f] transition-colors">→</span>
              </div>
              <div className="text-lg font-medium text-[#111111] mb-10">The Leese Effect</div>
            </div>
            <div>
              <div className="text-5xl font-serif tracking-tight text-[#111111] mb-2">4.5K</div>
              <div className="text-[#111111]/50 font-light">Subscribers • 20% Open Rate</div>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@thescottleese"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] transition-colors p-10 md:p-12 flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-medium text-[#111111]/50 tracking-[0.2em] uppercase mb-1 flex items-center justify-between">
                <span>YouTube</span>
                <span className="text-[#111111]/30 group-hover:text-[#d9534f] transition-colors">↗</span>
              </div>
              <div className="text-lg font-medium text-[#111111] mb-10">@thescottleese</div>
            </div>
            <div>
              <div className="text-5xl font-serif tracking-tight text-[#111111] mb-2">2.4K</div>
              <div className="text-[#111111]/50 font-light">Subscribers</div>
            </div>
          </a>
        </div>
      </section>

      {/* Top Performing Content Section */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-black/10">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
            Top Performing Content
          </div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
            Viral Storytelling That Converts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
          <div className="bg-[#111111] text-white p-16 text-center flex flex-col items-center justify-center">
            <div className="text-7xl md:text-8xl font-serif tracking-tight mb-4">8.7M</div>
            <div className="text-lg text-white/70 font-light">Views on Top Instagram Reel</div>
          </div>
          <div className="bg-[#111111] text-white p-16 text-center flex flex-col items-center justify-center">
            <div className="text-7xl md:text-8xl font-serif tracking-tight mb-4">6.8M</div>
            <div className="text-lg text-white/70 font-light">Views on Second Instagram Reel</div>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-20 border-t border-black/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-[0.7rem] font-medium tracking-[0.2em] text-[#111111]/40 uppercase">
            2026 Verified Brand Partners: Apollo • Nooks • Rox &amp; More
          </h2>
          <span className="text-xs text-[#111111]/50 font-light">
            Product integrated into the story—never a dry ad read.
          </span>
        </div>
        <LogoTicker
          multiRow={false}
          companies={[
            "Apollo.io",
            "Nooks",
            "Rox",
            "Lavender",
            "Gong",
            "Deel",
            "Orum",
            "Sendoso",
            "Scratchpad",
            "Clay",
          ]}
        />
      </section>

      {/* Complete 2026 Sponsorship Packages Table + Cards */}
      <section id="packages" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-black/10 scroll-mt-20">
        <div className="mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
            2026 Rate Card
          </div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-4">
            Sponsorship Packages
          </h2>
          <p className="text-xl text-[#111111]/60 font-light">
            Every sponsorship is crafted in Scott&apos;s authentic voice with organic story integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border border-black/10 p-8 flex flex-col">
            <div className="text-xs uppercase tracking-[0.15em] text-[#111111]/40 mb-2">Instagram</div>
            <h3 className="text-2xl font-serif text-[#111111] mb-3">Instagram Reel</h3>
            <p className="text-[#111111]/60 font-light text-sm mb-8 flex-grow">
              One sponsored Reel, product integrated into the story, not a read ad.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#111111]/40 mb-1">Starting at</div>
            <div className="text-4xl font-serif tracking-tight text-[#111111] mb-6">$6,000</div>
            <a
              href="#contact"
              className="block w-full py-3 px-4 border border-black/20 hover:border-black hover:bg-black/5 text-center text-sm font-medium text-[#111111] transition-colors"
            >
              Inquire
            </a>
          </div>

          <div className="bg-[#111111] text-white border border-black p-8 flex flex-col relative shadow-xl">
            <div className="absolute top-0 right-0 bg-white text-[#111111] px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
              Most Popular
            </div>
            <div className="text-xs uppercase tracking-[0.15em] text-white/50 mb-2">Campaign</div>
            <h3 className="text-2xl font-serif text-white mb-3">3 Reel Series</h3>
            <p className="text-white/70 font-light text-sm mb-8 flex-grow">
              Three sponsored Reels across a campaign window for compounding brand recall.
            </p>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-1">Starting at</div>
            <div className="text-4xl font-serif tracking-tight text-white mb-6">$15,000</div>
            <a
              href="#contact"
              className="block w-full py-3 px-4 bg-white text-[#111111] hover:bg-white/90 text-center text-sm font-medium transition-colors"
            >
              Inquire
            </a>
          </div>

          <div className="bg-white border border-black/10 p-8 flex flex-col">
            <div className="text-xs uppercase tracking-[0.15em] text-[#111111]/40 mb-2">LinkedIn (134K)</div>
            <h3 className="text-2xl font-serif text-[#111111] mb-3">LinkedIn Post</h3>
            <p className="text-[#111111]/60 font-light text-sm mb-8 flex-grow">
              One sponsored text or carousel post written in Scott&apos;s voice for B2B buyers.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#111111]/40 mb-1">Starting at</div>
            <div className="text-4xl font-serif tracking-tight text-[#111111] mb-6">$3,000</div>
            <a
              href="#contact"
              className="block w-full py-3 px-4 border border-black/20 hover:border-black hover:bg-black/5 text-center text-sm font-medium text-[#111111] transition-colors"
            >
              Inquire
            </a>
          </div>

          <div className="bg-white border border-black/10 p-8 flex flex-col">
            <div className="text-xs uppercase tracking-[0.15em] text-[#111111]/40 mb-2">TikTok (31K)</div>
            <h3 className="text-2xl font-serif text-[#111111] mb-3">TikTok Video</h3>
            <p className="text-[#111111]/60 font-light text-sm mb-8 flex-grow">
              One sponsored short-form video integrated naturally into Scott&apos;s TikTok feed.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#111111]/40 mb-1">Starting at</div>
            <div className="text-4xl font-serif tracking-tight text-[#111111] mb-6">$1,000</div>
            <a
              href="#contact"
              className="block w-full py-3 px-4 border border-black/20 hover:border-black hover:bg-black/5 text-center text-sm font-medium text-[#111111] transition-colors"
            >
              Inquire
            </a>
          </div>
        </div>

        {/* Add-Ons & Annual Brand Partner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-black/10 bg-white p-8 md:p-12">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-2">
              Multi-Channel Extensions
            </div>
            <h3 className="text-2xl font-serif text-[#111111] mb-6">Package Add-Ons</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-black/10 pb-4">
                <div>
                  <div className="font-medium text-[#111111]">The Leese Effect Newsletter</div>
                  <div className="text-xs text-[#111111]/55 font-light">Add-on to any package: one ad slot in the weekly send (4.5K subs, 20% open)</div>
                </div>
                <span className="font-serif text-2xl text-[#111111] shrink-0 ml-4">$250 / ad</span>
              </div>
              <div className="flex justify-between items-center border-b border-black/10 pb-4">
                <div>
                  <div className="font-medium text-[#111111]">X Thread or YouTube Integration</div>
                  <div className="text-xs text-[#111111]/55 font-light">Add-on distribution across @thescottleese X (7.6K) or YouTube (2.4K)</div>
                </div>
                <span className="font-serif text-2xl text-[#111111] shrink-0 ml-4">$750</span>
              </div>
              <p className="text-xs text-[#111111]/50 italic pt-2">
                * Speaking (SKOs, kickoffs, conferences, workshops) is quoted separately on our Speaking page.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#f5f4ef] border border-black/10 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] mb-4">
                Category Exclusivity Available
              </div>
              <h3 className="text-3xl font-serif text-[#111111] mb-3">Annual Brand Partner</h3>
              <p className="text-[#111111]/70 font-light mb-6 leading-relaxed">
                Year-long omnichannel partnership across Instagram, LinkedIn, TikTok, and The Leese Effect newsletter—just like Apollo, Nooks, and Rox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6 border-t border-black/10">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#111111]/50">Starting at</div>
                <div className="text-4xl font-serif tracking-tight text-[#111111]">
                  $25,000 <span className="text-sm font-sans font-light text-[#111111]/60">annualized</span>
                </div>
              </div>
              <a
                href="#contact"
                className="px-6 py-3.5 bg-[#111111] text-white hover:bg-[#333333] font-medium text-sm transition-colors text-center"
              >
                Become a 2026 Brand Partner →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-3xl mx-auto border-t border-black/10 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">Work With Scott</h2>
          <p className="text-xl text-[#111111]/60 font-light">
            Lock in your campaign window or request a custom Surf &amp; Sales + Creator bundle.
          </p>
        </div>

        <div className="p-8 md:p-12 border border-black/10 bg-white">
          {isSuccess ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-serif mb-4 text-[#111111]">Partnership Inquiry Received</h3>
              <p className="text-[#111111]/60 font-light mb-8">We&apos;ll review your campaign goals and get back to you within 24 hours.</p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-[#111111] underline underline-offset-4 hover:text-[#d9534f]"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/70 mb-2">Name *</label>
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
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/70 mb-2">Email *</label>
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label htmlFor="company" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/70 mb-2">Brand / Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  />
                </div>
                <div>
                  <label htmlFor="packageInterest" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/70 mb-2">Package</label>
                  <select
                    id="packageInterest"
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  >
                    <option value="">Select package...</option>
                    <option value="Annual Brand Partner ($25K)">Annual Brand Partner ($25K)</option>
                    <option value="3 Reel Series ($15K)">3 Reel Series ($15K)</option>
                    <option value="Single IG Reel ($6K)">Single IG Reel ($6K)</option>
                    <option value="LinkedIn Post ($3K)">LinkedIn Post ($3K)</option>
                    <option value="TikTok Video ($1K)">TikTok Video ($1K)</option>
                    <option value="Creator + Surf & Sales Bundle">Creator + Surf &amp; Sales Bundle</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budgetRange" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/70 mb-2">Budget Range</label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  >
                    <option value="">Select budget...</option>
                    <option value="$3K - $6K">$3K – $6K</option>
                    <option value="$10K - $15K">$10K – $15K</option>
                    <option value="$25K Annual Partner">$25K+ Annual Partner</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/70 mb-2">Campaign Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your product, target launch window, and goals..."
                  className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#111111] text-white py-4 font-medium hover:bg-[#333333] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Partnership Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
