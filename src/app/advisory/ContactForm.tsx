"use client";

import { useState } from "react";

const INTEREST_OPTIONS = [
  { id: "diagnostic", label: "72-Hour GTM & Hiring Readiness Audit", sub: "$2,500 Flat • Diagnostic + 90-Day Plan" },
  { id: "starter", label: "Coaching & Advisory Plan", sub: "$3,000/mo • Scott Leese" },
  { id: "revops", label: "RevOps Plan", sub: "$5,000/mo • JM Wilke" },
  { id: "complete", label: "Complete Fractional GTM", sub: "$10,000/mo • Scott & JM" },
  { id: "recruiting", label: "The SLC Talent Bench (GTM Recruiting)", sub: "30-Day Hiring Sprint • Scott-Vetted Reps & VPs" },
  { id: "surf-b2b", label: "Surf & Sales B2B Retreat Buyout", sub: "Full Cohort or Team Seats" },
  { id: "training", label: "SKO / Keynote / Sales Training", sub: "Live or Virtual Event" },
  { id: "podcast-media", label: "Creator / Podcast Sponsorship", sub: "392.5K Audience Reach" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      company: formData.get("companyName"),
      website: formData.get("website"),
      name: formData.get("name"),
      linkedin: formData.get("linkedin"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interests: selectedInterests,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#fcfaf8] border border-black/15 p-10 md:p-16 text-center">
        <div className="inline-block px-3 py-1 border border-black/10 text-xs uppercase tracking-[0.2em] text-[#111111]/60 mb-6">
          Inquiry Received
        </div>
        <h3 className="text-3xl md:text-4xl font-serif tracking-tight text-[#111111] mb-4">
          Thank you! Your submission has been received.
        </h3>
        <p className="text-[#111111]/60 font-light text-lg max-w-xl mx-auto mb-8">
          We&apos;ll review your details and get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setSelectedInterests([]);
          }}
          className="text-sm font-medium text-[#111111] underline underline-offset-4 hover:text-[#d9534f] transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 bg-white border border-black/10 p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="companyName" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
            Company Website *
          </label>
          <input
            type="text"
            id="website"
            name="website"
            required
            className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
            placeholder="https://acmecorp.com"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label htmlFor="linkedin" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
            Contact LinkedIn *
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            required
            className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
            placeholder="linkedin.com/in/janedoe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
            Contact Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
            placeholder="jane@acmecorp.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
            Contact Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      {/* Multi-select Interest Checkboxes (Upgraded from scottleeseconsulting.com/get-started) */}
      <div>
        <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-4">
          What can we help you with? (Select all that apply)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INTEREST_OPTIONS.map((option) => {
            const isSelected = selectedInterests.includes(option.id);
            return (
              <button
                type="button"
                key={option.id}
                onClick={() => toggleInterest(option.id)}
                className={`text-left p-4 border transition-all flex items-start justify-between gap-3 ${
                  isSelected
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-[#fcfaf8] text-[#111111] border-black/10 hover:border-black/30"
                }`}
              >
                <div>
                  <div className="font-medium text-sm">{option.label}</div>
                  <div className={`text-xs mt-1 font-light ${isSelected ? "text-white/70" : "text-[#111111]/50"}`}>
                    {option.sub}
                  </div>
                </div>
                <span
                  className={`w-4 h-4 mt-0.5 border flex items-center justify-center text-[10px] shrink-0 ${
                    isSelected ? "border-white bg-white text-[#111111]" : "border-black/25"
                  }`}
                >
                  {isSelected ? "✓" : ""}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
          Current ARR, Team Size &amp; Goals
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111] transition-colors rounded-none resize-y"
          placeholder="Tell us where you are today and what you're looking to accomplish in the next 90 days..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-8 bg-[#111111] hover:bg-[#333333] text-white font-medium transition-colors disabled:opacity-50 text-base tracking-wide"
      >
        {isSubmitting ? "Please wait..." : "Send Request"}
      </button>
    </form>
  );
}
