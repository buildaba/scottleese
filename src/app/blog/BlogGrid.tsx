'use client';

import React, { useState, useMemo } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  category: 'Sales Strategy' | 'Hiring' | 'GTM Strategy' | 'RevOps' | 'AI & Sales' | 'Scaling';
  date: string;
  excerpt: string;
  readTime: string;
  badgeClass: string;
  content: string[];
}

const posts: BlogPost[] = [
  {
    id: 'death-of-cold-outbound',
    title: 'The Death of Cold Outbound — and What Comes Next',
    category: 'Sales Strategy',
    date: 'Sep 30, 2026',
    readTime: '5 min read',
    excerpt: "Cold emails are getting 2% response rates. Here's the network-driven approach that's replacing them.",
    badgeClass: 'bg-[#111111] text-white/10 text-amber-400 border border-amber-500/25',
    content: [
      'The era of blasting thousands of automated cold emails via generic sequences is officially over. With domain reputation penalties, strict mailbox filtering, and buyer fatigue at an all-time peak, response rates have cratered below 2%.',
      'What is replacing it? The Network-Driven Revenue Engine. Top-performing reps in 2026 are not writing clever 150-word cold emails to strangers. They are mapping secondary connections through executive leadership, venture syndicates, and happy customer alumni.',
      'Three actionable shifts to implement immediately:',
      '1. Map Executive Proximity: Before any outbound cadence begins, cross-reference target accounts against your founders’ and advisors’ LinkedIn and investor networks.',
      '2. Signal-Based Triggers: Only trigger outbound when an objective event has happened in the last 10 business days—new round of funding, VP-level change, or tech stack displacement.',
      '3. Peer-to-Peer Warm Entrees: An introduction from a shared investor or peer founder generates an 80%+ meeting acceptance rate compared to cold outreach.',
    ],
  },
  {
    id: 'hire-first-sales-rep',
    title: 'How to Hire Your First Sales Rep (Without Wasting $200K)',
    category: 'Hiring',
    date: 'Sep 23, 2026',
    readTime: '6 min read',
    excerpt: "Most founders get their first sales hire wrong. Here's the exact process I've used 200+ times.",
    badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/25',
    content: [
      'Founders frequently make the mistake of hiring a charismatic "Enterprise AE" from a giant tech incumbent like Salesforce or Oracle. Then, six months and $150,000 later, they discover the rep can’t book meetings without a 50-person SDR team and an established brand behind them.',
      'Your first sales hire is not an Account Executive; they are a Pioneer. They need to relish ambiguity, build their own collateral, and be comfortable when product bugs appear on live demos.',
      'The evaluation scorecard I use across all my portfolio advisory companies:',
      '• Intellectual Curiosity: Can they dissect the buyer’s underlying unit economics within 10 minutes?',
      '• Scrappy Prospecting: Have they ever sourced 60%+ of their own pipeline from scratch?',
      '• Resilience & Feedback Velocity: How do they handle radical candor during real deal teardowns?',
      'Never hire based on résumé logos. Hire for stage-fit and outbound grit.',
    ],
  },
  {
    id: 'fractional-cro-decision-framework',
    title: 'Fractional CRO vs. Full-Time VP Sales: A Decision Framework',
    category: 'GTM Strategy',
    date: 'Sep 16, 2026',
    readTime: '7 min read',
    excerpt: 'When does it make sense to hire fractional? When should you go full-time? The answer is simpler than you think.',
    badgeClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    content: [
      'One of the most consequential decisions an early-stage founder faces between $500K and $5M ARR is leadership timing. Bringing on a full-time VP of Sales too early burns $400K+ in cash and dilutes equity before you have repeatable founder-led sales proof.',
      'Here is the simple heuristic I tell every founder I advise:',
      'Hire a Fractional CRO when: You have not yet closed 20 non-friendly deals, your average deal cycle is erratic, you do not have a defined onboarding curriculum, and you need a seasoned veteran to build the playbook for 6–9 months without taking a full-time executive salary.',
      'Hire a Full-Time VP of Sales when: The sales motion is 100% codified, two or more junior reps are already consistently hitting quota, and you need someone spending 50 hours a week on daily coaching, 1-on-1s, and headcount recruiting.',
      'Fractional builds the engine; full-time scales the horsepower.',
    ],
  },
  {
    id: 'revops-quick-wins',
    title: '5 RevOps Quick Wins That Take Under a Week',
    category: 'RevOps',
    date: 'Sep 9, 2026',
    readTime: '4 min read',
    excerpt: "You don't need a 6-month RevOps overhaul. Here are 5 things you can fix this week.",
    badgeClass: 'bg-purple-500/10 text-purple-400 border border-purple-500/25',
    content: [
      'Founders often view Revenue Operations as an overwhelming, multi-month consulting engagement. In reality, 80% of revenue leakage in early-stage SaaS companies stems from five basic process oversights that can be resolved in five business days.',
      '1. Stage Exit Criteria: Forbid reps from moving deals past Stage 2 without an identified economic buyer and a documented pain event.',
      '2. Stalled Deal Automation: Automatically move deals with zero prospect communication for 30 days to "Closed Lost — Unresponsive". Stop lying to your board with ghost pipeline.',
      '3. Inbound Routing Speed: Reduce inbound lead routing from 4 hours to under 5 minutes. Leads contacted in under 5 minutes are 21x more likely to enter pipeline.',
      '4. Single Source of Truth for Closed-Won: Tie commission payouts strictly to signed contracts and paid invoices in Stripe/QuickBooks, eliminating reconciliation disputes.',
      '5. Discovery Call Rubric: Mandate that reps fill out three specific data fields after demo one: (a) Cost of inaction, (b) Competitors evaluated, (c) Target go-live date.',
    ],
  },
  {
    id: 'ai-wont-replace-sales-team',
    title: "Why AI Won't Replace Your Sales Team (But It Will Replace Your Process)",
    category: 'AI & Sales',
    date: 'Sep 2, 2026',
    readTime: '5 min read',
    excerpt: "Everyone's asking if AI will kill sales. They're asking the wrong question.",
    badgeClass: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/25',
    content: [
      'Every week another sensational headline asks whether AI agents and generative outreach will make human enterprise sellers obsolete. The short answer: no.',
      'High-stakes B2B transactions are inherently emotional and political decisions. When a VP of Engineering or CRO commits $150K to enterprise software, they are putting their internal reputation on the line. A bot cannot navigate office politics, build personal rapport, or instill boardroom confidence.',
      'However, AI will absolutely demolish your legacy sales process:',
      '• Prep & Research: Reps should never spend 45 minutes researching an account. AI summaries do this in 10 seconds.',
      '• Note Taking & CRM Admin: Zero minutes should be spent logging notes into Salesforce; automated call listeners should do this seamlessly.',
      '• Account Signal Monitoring: AI agents should notify reps the moment a champion leaves an account or posts about a relevant initiative.',
      'AI won’t replace sellers. But sellers using AI will replace sellers who do not.',
    ],
  },
  {
    id: 'zero-to-five-million-arr-playbook',
    title: 'From $0 to $5M ARR: The First 18 Months Playbook',
    category: 'Scaling',
    date: 'Aug 26, 2026',
    readTime: '8 min read',
    excerpt: 'The critical moves that separate startups that die at $1M from those that break through to $5M.',
    badgeClass: 'bg-rose-500/10 text-rose-400 border border-rose-500/25',
    content: [
      'Having advised over 200 companies through seed, Series A, and Series B, I have observed a predictable graveyard at the $1M–$2M ARR mark. Startups often reach $1M through founder hustle, network favors, and custom feature promises. But the exact tactics that got you to $1M will kill you on the journey to $5M.',
      'The 3 critical shifts required to reach $5M ARR:',
      '1. Ruthlessly Shrink Your ICP: At $500K ARR, you take any customer with a heartbeat. To scale to $5M, you must fire non-ideal customers and concentrate 100% of sales capacity on the single persona with the shortest sales cycle and highest net revenue retention.',
      '2. Standardize Packaging & Pricing: Stop creating custom contracts on the fly. Build three tiered packages with crystal-clear boundaries and minimum contract values.',
      '3. Decouple Hunting from Farming: As soon as you hit $1.5M ARR, establish a dedicated Customer Success / Account Management function so your top quota-carrying closers aren’t bogged down answering support tickets.',
    ],
  },
];

const categories = [
  'All',
  'Sales Strategy',
  'Hiring',
  'GTM Strategy',
  'RevOps',
  'AI & Sales',
  'Scaling',
] as const;

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Category Tabs & Search Bar */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#111111] text-white text-white shadow-md shadow-amber-500/20'
                  : 'bg-white text-neutral-400 hover:text-[#111111] border border-black/10 hover:border-neutral-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search insights..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-black/10 rounded-full text-[#111111] placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-neutral-500 hover:text-[#111111]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grid: 2 columns on tablet/desktop, 1 column on mobile */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 bg-white border border-black/10 rounded-2xl p-8">
          <p className="text-neutral-400 text-base mb-4">
            No articles found matching your criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#111111] text-white text-white text-xs font-bold rounded-full"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white border border-black/10 hover:border-amber-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header: Badge + Date */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${post.badgeClass}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">
                    {post.date}
                  </span>
                </div>

                {/* Title (links to # and opens full modal reader) */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#111111] transition-colors leading-snug">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveArticle(post);
                    }}
                    className="hover:underline focus:outline-none focus:text-[#111111]"
                  >
                    {post.title}
                  </a>
                </h2>

                {/* Excerpt */}
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom Footer: Read time + Link */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-sm">
                <span className="text-xs text-neutral-500 font-medium">
                  {post.readTime}
                </span>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveArticle(post);
                  }}
                  className="text-[#111111] hover:text-amber-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Article Detail Modal / Reader */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white border border-black/10 rounded-2xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/10">
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${activeArticle.badgeClass}`}
                >
                  {activeArticle.category}
                </span>
                <span className="text-xs text-neutral-400">
                  {activeArticle.date} &bull; {activeArticle.readTime}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="text-neutral-400 hover:text-[#111111] p-1 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close article preview"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Author byline */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#111111] text-white/20 border border-amber-500/40 flex items-center justify-center text-[#111111] font-bold text-xs">
                SL
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111111]">Scott Leese</p>
                <p className="text-[11px] text-neutral-400">
                  6x Sales Leader &bull; 12 Unicorn Advisor
                </p>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif tracking-tight font-black text-[#111111] mb-4 leading-tight">
              {activeArticle.title}
            </h1>

            <div className="bg-[#1a1a1a] border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-neutral-200 italic">
                {activeArticle.excerpt}
              </p>
            </div>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              {activeArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Want direct sales insights in your inbox weekly?
              </span>
              <a
                href="/newsletter"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#111111] text-white hover:bg-[#333333] text-white font-bold text-sm rounded-lg transition-colors text-center"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
