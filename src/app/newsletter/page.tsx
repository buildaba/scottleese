import type { Metadata } from 'next';
import NewsletterForm from '@/components/NewsletterForm';
import NewsletterIssues from './NewsletterIssues';

export const metadata: Metadata = {
  title: {
    absolute: 'The Leese Effect Newsletter | Scott Leese',
  },
  description:
    'Weekly sales, GTM, and leadership insights from Scott Leese. Join 4,500+ subscribers. No fluff.',
};

const valueCards = [
  {
    icon: '🎯',
    title: 'GTM Playbooks',
    description: 'Frameworks and strategies for scaling from $0 to $25M',
    details: 'Proven frameworks on ICP positioning, sales motion design, outbound engines, and enterprise deal velocity.',
  },
  {
    icon: '💡',
    title: 'Sales Insights',
    description: "What's working right now in modern B2B sales",
    details: 'Real objection handling, cold outreach breakdowns, multi-threading tactics, and pipeline truth.',
  },
  {
    icon: '🧠',
    title: 'Leadership Lessons',
    description: 'Hard-won wisdom from building and leading teams',
    details: 'Hiring the top 1% reps, managing through missed quotas, performance accountability, and scaling front-line managers.',
  },
  {
    icon: '📊',
    title: 'Market Analysis',
    description: 'Trends and opportunities in AI, SaaS, and deep tech',
    details: 'Macro shifts in venture capital, buyer behavior evolutions, AI tools that actually work, and valuation reality checks.',
  },
];

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          Weekly Sales & GTM Intelligence
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.1]">
          The Leese Effect
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Weekly sales, GTM, and leadership insights. No fluff. Just actionable advice from someone who's done it 200+ times.
        </p>

        {/* Email Signup Form (Hero) */}
        <div className="mb-16">
          <NewsletterForm
            variant="hero"
            idPrefix="hero"
            placeholder="Enter your work email address..."
            buttonText="Join Free"
          />
        </div>

        {/* Stats Bar */}
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8 py-10 border-t border-black/10">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif tracking-tight text-[#111111] mb-2">4,500+</span>
            <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Subscribers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif tracking-tight text-[#111111] mb-2">20%</span>
            <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Open Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif tracking-tight text-[#111111] mb-2">Weekly</span>
            <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Cadence</span>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-24 px-6 border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">What You'll Get</h2>
            <p className="text-xl text-[#111111]/60 font-light">
              Every Thursday morning. Zero sponsored filler. Built from the front lines of 200+ venture-backed tech startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {valueCards.map((card) => (
              <div key={card.title} className="bg-[#fcfaf8] p-12">
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-2xl font-serif text-[#111111] mb-3">{card.title}</h3>
                <p className="text-[#111111]/80 font-medium mb-3">{card.description}</p>
                <p className="text-[#111111]/60 leading-relaxed font-light">{card.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Issues Section */}
      <section className="py-24 px-6 border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">Recent Issues</h2>
            <p className="text-xl text-[#111111]/60 font-light">A sample of what subscribers receive.</p>
          </div>
          <NewsletterIssues />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 px-6 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-[#111111]">Don't miss the next issue.</h2>
          <p className="text-xl text-[#111111]/60 mb-12 font-light">
            Join 4,500+ founders, CROs, and sales leaders reading Scott Leese every week. Always free, delivered every Thursday.
          </p>
          <NewsletterForm
            variant="bottom"
            idPrefix="bottom"
            placeholder="Enter your work email address..."
            buttonText="Subscribe Now"
          />
        </div>
      </section>
    </div>
  );
}
