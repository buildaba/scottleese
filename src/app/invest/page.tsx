import Link from "next/link";

export const metadata = {
  title: "Milos Ventures | AI & Deep Tech Syndicate | Scott Leese",
  description:
    "Milos Ventures backs category-defining founders in AI, robotics, defense, energy, and cleantech. 44 investments including OpenAI, Anthropic, Groq, Scale AI, Perplexity, and Lambda.",
};

const PUBLIC_PORTFOLIO = [
  { name: "OpenAI", category: "Foundation Models", highlight: "Frontier AI Research & Deployment" },
  { name: "Anthropic", category: "AI Safety & Models", highlight: "Creators of Claude" },
  { name: "Groq", category: "AI Silicon / LPU", highlight: "Ultra-Low Latency AI Inference" },
  { name: "Scale AI", category: "AI Data Infrastructure", highlight: "Data Foundry for Frontier AI" },
  { name: "Perplexity AI", category: "Conversational Answer Engine", highlight: "AI-Native Search & Discovery" },
  { name: "Lambda", category: "AI Compute Cloud", highlight: "GPU Cloud Infrastructure for Training" },
  { name: "Thinking Machines Lab", category: "AI Research Lab", highlight: "Next-Generation AI Systems" },
  { name: "Rescale", category: "High-Performance Computing", highlight: "Cloud HPC for R&D & Engineering" },
];

export default function InvestPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          Milos Ventures • AngelList Syndicate &amp; Venture Advisory
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.08]">
          Milos Ventures
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/65 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Backing exceptional founders building the future of <strong>AI, robotics, defense, energy, and cleantech</strong>—combining deep technical diligence with battle-tested $0→$25M GTM distribution.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="https://venture.angellist.com/v/milosventures/syndicate"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium transition-colors text-xs uppercase tracking-[0.2em] w-full sm:w-auto"
          >
            Back Our Syndicate on AngelList →
          </a>
          <Link
            href="/advisory#contact"
            className="shrink-0 whitespace-nowrap px-8 py-4 bg-transparent border border-black/20 hover:border-[#111111] text-[#111111] font-medium transition-colors text-xs uppercase tracking-[0.2em] w-full sm:w-auto"
          >
            Inquire as an Accredited LP
          </Link>
          <a
            href="https://www.linkedin.com/company/milosventures/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap px-8 py-4 bg-transparent border border-black/20 hover:border-[#111111] text-[#111111] font-medium transition-colors text-xs uppercase tracking-[0.2em] w-full sm:w-auto"
          >
            LinkedIn (SF &amp; Austin) ↗
          </a>
        </div>

        {/* Key Fund Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-black/10 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-serif text-[#111111] mb-2">44</div>
            <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Portfolio Investments</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif text-[#111111] mb-2">50+</div>
            <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Advisor Equity Positions</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif text-[#111111] mb-2">12–24</div>
            <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Deals / Year Pace</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif text-[#111111] mb-2">12</div>
            <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">Unicorns Advised</div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
              Selected Public Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
              44 Investments Across Frontier Tech
            </h2>
          </div>
          <div className="text-sm text-[#111111]/50 font-light">
            8 public highlights + 36 private/stealth investments
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {PUBLIC_PORTFOLIO.map((co) => (
            <div key={co.name} className="bg-[#fcfaf8] p-8 flex flex-col justify-between hover:bg-[#f5f4ef] transition-colors">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
                  {co.category}
                </div>
                <h3 className="text-2xl font-serif text-[#111111] mb-2">{co.name}</h3>
              </div>
              <p className="text-sm text-[#111111]/60 font-light mt-6 pt-4 border-t border-black/10">
                {co.highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* General Partners Section (Taylor Leese + Scott Leese) */}
      <section className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef]/60">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
              The General Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-4">
              Deep Tech Engineering Meets World-Class GTM
            </h2>
            <p className="text-xl text-[#111111]/65 font-light">
              Most funds understand either the technology or how to sell it. Milos Ventures brings both to every cap table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fcfaf8] border border-black/10 p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 mb-2">Co-Founder &amp; GP • Austin, TX</div>
              <h3 className="text-3xl font-serif text-[#111111] mb-4">Scott Leese</h3>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-6">
                6x startup sales leader ($0 to $25M ARR), advisor to 200+ companies including 12 unicorns and 15 exits, and Executive Venture Partner at TipTop VC. Helps portfolio founders build their initial GTM engine, hire sales leadership, and close enterprise customers.
              </p>
            </div>

            <div className="bg-[#fcfaf8] border border-black/10 p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 mb-2">Co-Founder &amp; GP • San Francisco, CA</div>
              <h3 className="text-3xl font-serif text-[#111111] mb-4">Taylor Leese</h3>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-6">
                Deep tech operator and engineering leader (ex-LinkedIn Senior Director, ex-PayPal, MS Computer Science from the University of Chicago). Leads technical diligence and founder network access across San Francisco&apos;s top AI and hard-tech ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA for LPs and Founders */}
      <section className="py-24 px-6 border-t border-black/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-black/10 bg-white p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 mb-2">For Accredited Investors</div>
            <h3 className="text-3xl font-serif text-[#111111] mb-4">Invest Alongside Us</h3>
            <p className="text-[#111111]/65 font-light leading-relaxed mb-8">
              Get deal-by-deal SPV access to oversubscribed AI, robotics, defense, and energy allocations via our AngelList syndicate.
            </p>
            <a
              href="https://venture.angellist.com/v/milosventures/syndicate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3.5 bg-[#111111] text-white hover:bg-[#333333] font-medium text-sm transition-colors"
            >
              Apply to Join Syndicate →
            </a>
          </div>

          <div className="border border-black/10 bg-white p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 mb-2">For Founders</div>
            <h3 className="text-3xl font-serif text-[#111111] mb-4">Raising Capital?</h3>
            <p className="text-[#111111]/65 font-light leading-relaxed mb-8">
              If you&apos;re building category-defining technology and want investors who can actually help you scale distribution and revenue, send us your deck.
            </p>
            <a
              href="mailto:scott@scottleeseconsulting.com?subject=Milos%20Ventures%20Pitch%20Deck"
              className="inline-block px-6 py-3.5 border border-black/20 hover:border-black text-[#111111] font-medium text-sm transition-colors"
            >
              Send Your Deck →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
