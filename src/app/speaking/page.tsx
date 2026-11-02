"use client";

import { useState } from "react";
import Link from "next/link";

export default function SpeakingPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", organization: "", eventType: "", audienceSize: "", eventDate: "", budgetRange: "", details: "" });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          Speaking & Keynotes
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.1]">
          Book Scott to Speak
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Keynotes, SKOs, workshops, and corporate training for sales teams that want to win.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium rounded-md transition-colors text-lg w-full sm:w-auto cursor-pointer"
          >
            Request Booking
          </button>
          <a
            href="https://www.canva.com/design/DAGqnG0SYdE/cizSvUCNXW-BMAc5EF1RzA/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-black/20 hover:border-[#111111] text-[#111111] font-medium rounded-md transition-colors text-lg w-full sm:w-auto"
          >
            View Official Speaker Portfolio ↗
          </a>
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
              <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">12</span>
              <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Unicorn Valuations</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">3</span>
              <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Bestselling Books</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-2">392K+</span>
              <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Social Following</span>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">Keynote Topics</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
          <div className="bg-[#fcfaf8] p-12">
            <h3 className="text-2xl font-serif text-[#111111] mb-4">Building Scalable Sales Teams</h3>
            <p className="text-[#111111]/60 leading-relaxed font-light">
              How to go from founder-led sales to a repeatable, scalable sales motion. From your first hire to team #50.
            </p>
          </div>

          <div className="bg-[#fcfaf8] p-12">
            <h3 className="text-2xl font-serif text-[#111111] mb-4">Resilience & Mental Toughness</h3>
            <p className="text-[#111111]/60 leading-relaxed font-light">
              From 4 years in hospitals and 9 surgeries to 6x sales leader. How to turn adversity into your superpower.
            </p>
          </div>

          <div className="bg-[#fcfaf8] p-12">
            <h3 className="text-2xl font-serif text-[#111111] mb-4">Go-To-Network: The Modern Sales Motion</h3>
            <p className="text-[#111111]/60 leading-relaxed font-light">
              Why traditional outbound is dying and how trust-based, network-driven selling is the future.
            </p>
          </div>

          <div className="bg-[#fcfaf8] p-12">
            <h3 className="text-2xl font-serif text-[#111111] mb-4">From Zero to $25M ARR</h3>
            <p className="text-[#111111]/60 leading-relaxed font-light">
              The playbook for scaling early-stage startups through their most critical revenue milestones.
            </p>
          </div>
        </div>
      </section>

      {/* The 76 GTM Projects Framework (Verbatim from scottleeseconsulting.com/speaking) */}
      <section className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef]/50">
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
          <p className="text-xl text-[#111111]/60 font-light">Provide details about your upcoming event.</p>
        </div>

        <div className="p-8 md:p-12 border border-black/10">
          {isSuccess ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-serif mb-4 text-[#111111]">Request Submitted</h3>
              <p className="text-[#111111]/60 font-light mb-8">We'll be in touch soon to discuss your event.</p>
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
                className="w-full bg-[#111111] text-white py-4 font-medium hover:bg-[#333333] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          )}
        </div>
        <div className="mt-8 text-center text-[#111111]/60 font-light text-sm">
          For quick inquiries: <a href="mailto:scott@scottleeseconsulting.com" className="text-[#111111] hover:text-[#d9534f]">scott@scottleeseconsulting.com</a>
        </div>
      </section>
    </main>
  );
}
