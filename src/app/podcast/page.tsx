"use client";

import { useState } from "react";
import appearancesData from "@/data/podcast_appearances.json";

interface PodcastAppearance {
  title: string;
  show: string;
  audioUrl: string;
  imageUrl: string;
}

const ALL_APPEARANCES: PodcastAppearance[] = appearancesData as PodcastAppearance[];

export default function PodcastPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [visibleAppearances, setVisibleAppearances] = useState(18);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAppearances = ALL_APPEARANCES.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.show.toLowerCase().includes(q)
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", story: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          Shows Hosted &amp; 100+ Guest Appearances
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.08]">
          One of the Most Prolific Podcasters in Sales.
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Co-host of <strong>What&apos;s Your Story?</strong> (with Mike Lindstrom) and <strong>The Surf &amp; Sales Podcast</strong> (with Richard Harris)—plus 100+ featured guest appearances across the world&apos;s top GTM and leadership shows.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#shows-hosted"
            className="px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors w-full sm:w-auto"
          >
            Listen to Shows Scott Hosts
          </a>
          <a
            href="#guest-appearances"
            className="px-8 py-4 bg-transparent border border-black/20 hover:border-black/50 text-[#111111] text-xs uppercase tracking-[0.2em] font-medium transition-colors w-full sm:w-auto"
          >
            Browse 100 Guest Appearances
          </a>
          <a
            href="#sponsor"
            className="px-8 py-4 bg-transparent border border-black/20 hover:border-black/50 text-[#111111] text-xs uppercase tracking-[0.2em] font-medium transition-colors w-full sm:w-auto"
          >
            Sponsor the Show
          </a>
        </div>
      </section>

      {/* Two Shows Scott Hosts (Live Spotify Embeds from scottleeseconsulting.com/podcasts) */}
      <section id="shows-hosted" className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef]/50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
              Shows Scott Hosts
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
              Two Flagship Shows. Two Distinct Audiences.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Show 1: What's Your Story? */}
            <div className="bg-[#fcfaf8] border border-black/10 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#111111]/50 mb-4">
                  <span>Co-Hosted w/ Mike Lindstrom</span>
                  <span>Fastest-Growing in AZ</span>
                </div>
                <h3 className="text-3xl font-serif text-[#111111] mb-3">
                  What&apos;s Your Story?
                </h3>
                <p className="text-sm text-[#111111]/65 font-light leading-relaxed mb-6">
                  Real conversations with extraordinary people—from Rich Dad Poor Dad co-author Sharon Lechter and UFC legend Mark Kerr to iHeartMedia’s Johnjay &amp; Rich, Hays Europe CEO Chris Dottie, and Not Impossible Labs founder Mick Ebeling.
                </p>
                <div className="mb-6">
                  <iframe
                    title="What's Your Story? on Spotify"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/show/2UoZ6QQ8w2SKImRgoMPzwW"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/10">
                <a
                  href="https://whatsyourstorypod.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:text-[#d9534f] transition-colors"
                >
                  Visit whatsyourstorypod.com &rarr;
                </a>
                <a
                  href="#sponsor"
                  className="text-xs uppercase tracking-[0.2em] font-medium text-[#111111]/60 hover:text-[#111111] transition-colors"
                >
                  Sponsor This Show
                </a>
              </div>
            </div>

            {/* Show 2: Surf and Sales Podcast */}
            <div className="bg-[#fcfaf8] border border-black/10 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#111111]/50 mb-4">
                  <span>Co-Hosted w/ Richard Harris</span>
                  <span>300+ Tactical Episodes</span>
                </div>
                <h3 className="text-3xl font-serif text-[#111111] mb-3">
                  The Surf &amp; Sales Podcast
                </h3>
                <p className="text-sm text-[#111111]/65 font-light leading-relaxed mb-6">
                  No-BS tactical B2B sales, pipeline generation, objection handling, and leadership conversations for SDRs, Account Executives, VPs of Sales, and SaaS Founders.
                </p>
                <div className="mb-6">
                  <iframe
                    title="Surf and Sales Podcast on Spotify"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/show/5oJ9GkVkCiZEQEqCCRpVV4?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/10">
                <a
                  href="/events"
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:text-[#d9534f] transition-colors"
                >
                  Explore Surf &amp; Sales Summit &rarr;
                </a>
                <a
                  href="#sponsor"
                  className="text-xs uppercase tracking-[0.2em] font-medium text-[#111111]/60 hover:text-[#111111] transition-colors"
                >
                  Sponsor This Show
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guests on What's Your Story */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-black/10">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
            What&apos;s Your Story? Highlights
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#111111]">
            Notable Guests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {[
            { name: "Sharon Lechter", desc: "Co-author of Rich Dad Poor Dad & Financial Literacy Pioneer" },
            { name: "Mark Kerr", desc: "2x UFC Heavyweight Champion & Subject of A24's The Smashing Machine" },
            { name: "Johnjay & Rich", desc: "Nationally Syndicated iHeartMedia Morning Show Hosts" },
            { name: "Chris Dottie", desc: "Managing Director & CEO, Hays Europe" },
            { name: "Mick Ebeling", desc: "Founder & CEO, Not Impossible Labs (TIME Top Inventions)" },
            { name: "Billy Gibbons", desc: "Emmy-Winning Journalist & Storyteller" },
          ].map((guest, i) => (
            <div key={i} className="bg-[#fcfaf8] p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-serif text-[#111111] mb-2">{guest.name}</h3>
              <p className="text-[#111111]/60 font-light text-sm">{guest.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 100 Verbatim Guest Appearances Scraped from scottleeseconsulting.com/podcasts */}
      <section id="guest-appearances" className="py-24 px-6 border-t border-black/10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
                Complete Guest Archive ({ALL_APPEARANCES.length} Episodes)
              </div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
                Featured Guest Appearances
              </h2>
            </div>

            <div className="w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleAppearances(18);
                }}
                placeholder="Search 100 episodes..."
                className="w-full px-4 py-2.5 text-sm bg-white border border-black/15 text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:border-[#111111]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {filteredAppearances.slice(0, visibleAppearances).map((ep, idx) => (
              <a
                key={`${ep.show}-${idx}`}
                href={ep.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fcfaf8] p-6 flex items-start gap-4 group hover:bg-[#f5f4ef] transition-colors"
              >
                {ep.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={ep.imageUrl}
                    alt={ep.show}
                    loading="lazy"
                    className="w-16 h-16 object-cover border border-black/10 shrink-0 grayscale group-hover:grayscale-0 transition-all"
                  />
                )}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/50 font-semibold mb-1">
                      {ep.show}
                    </div>
                    <h3 className="text-base font-serif text-[#111111] leading-snug group-hover:underline underline-offset-4 decoration-black/20 mb-2">
                      {ep.title}
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#111111] group-hover:text-[#d9534f] transition-colors">
                    Listen Audio &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>

          {visibleAppearances < filteredAppearances.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleAppearances((prev) => prev + 24)}
                className="px-8 py-4 bg-[#111111] text-white hover:bg-[#333333] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                Load More Episodes ({filteredAppearances.length - visibleAppearances} Remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sponsor Section */}
      <section id="sponsor" className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef] scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">
              Sponsor the Podcasts
            </h2>
            <p className="text-xl text-[#111111]/60 font-light">
              Put your brand in front of founders, CROs, and business leaders across What&apos;s Your Story? and Surf &amp; Sales.
            </p>
          </div>

          <div className="bg-[#fcfaf8] border border-black/10 p-12 mb-12">
            <h3 className="text-lg font-medium text-[#111111] mb-6 uppercase tracking-widest text-[0.8rem]">
              What Sponsors Get
            </h3>
            <ul className="space-y-4">
              {[
                "Host-read pre-roll and mid-roll integrations per episode",
                "Logo placement and backlinks on podcast & main hubs",
                "Short-form video clips distributed across 392.5K combined social followers",
                "Executive guest interview or live roundtable opportunity",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[#111111]/80 font-light text-lg">
                  <span className="text-[#111111]/40 mt-1">&rarr;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-[#111111]/40 mb-6 font-medium">
              Proudly supported by e3 Wealth, NectarFlow, and B2B SaaS Partners
            </p>
            <a
              href="mailto:scott@scottleeseconsulting.com?subject=Podcast%20Sponsorship%20Inquiry"
              className="inline-block px-8 py-4 bg-[#111111] text-white hover:bg-[#333333] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Request Sponsor Media Kit
            </a>
          </div>
        </div>
      </section>

      {/* Guest Pitch Section */}
      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto border-t border-black/10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">
            Book Scott as a Guest—or Pitch Your Story
          </h2>
          <p className="text-xl text-[#111111]/60 font-light leading-relaxed">
            Want Scott on your podcast, or have a remarkable story of resilience and leadership for What&apos;s Your Story? Reach out below.
          </p>
        </div>

        <div className="p-8 md:p-12 border border-black/10 bg-white">
          {isSuccess ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-serif mb-4 text-[#111111]">Pitch Submitted</h3>
              <p className="text-[#111111]/60 font-light mb-8">
                We&apos;ll review your note and reach out if it&apos;s a fit.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-[#111111] underline underline-offset-4 hover:text-[#d9534f]"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#111111]/70 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#111111]/70 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                />
              </div>
              <div>
                <label htmlFor="story" className="block text-sm font-medium text-[#111111]/70 mb-2">
                  Your Podcast / Your Story *
                </label>
                <textarea
                  id="story"
                  rows={4}
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#111111] text-white py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#333333] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Podcast Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
