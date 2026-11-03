import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Links | Scott Leese (@thescottleese)',
  description:
    'Official links for Scott Leese: The SLC Talent Bench, GTM Advisory & RevOps, Surf & Sales Costa Rica, 2026 Media Kit (406.5K+ reach), and The Leese Effect.',
};

const CORE_LINKS = [
  {
    title: 'GTM Advisory & RevOps ($0 → $25M)',
    sub: 'Starter ($3K/mo) • RevOps ($5K/mo) • Complete ($10K/mo)',
    url: '/advisory',
    type: 'internal',
  },
  {
    title: 'Surf & Sales Costa Rica + B2B Buyouts',
    sub: 'Playa Grande Executive Retreat & Full-Cohort Corporate Buyouts',
    url: '/events',
    type: 'internal',
  },
  {
    title: 'Book Me to Speak (SKOs & Keynotes)',
    sub: 'Sales Kickoffs, Leadership Offsites & Conferences',
    url: '/speaking',
    type: 'internal',
  },
  {
    title: '2026 Brand Sponsorships & Media Kit',
    sub: '406.5K+ Reach • 227K Instagram • 134K LinkedIn • 8.7M Top Reel',
    url: '/media',
    type: 'internal',
  },
  {
    title: 'Field Notes Archive (153 Tactical Essays)',
    sub: 'Every edition of The Leese Effect in one searchable library',
    url: '/blog',
    type: 'internal',
  },
  {
    title: 'Podcasts (What’s Your Story? & Surf and Sales)',
    sub: '2 Flagship Shows + 100 Guest Appearances',
    url: '/podcast',
    type: 'internal',
  },
  {
    title: 'Milos Ventures Syndicate',
    sub: '44 Investments in AI, Robotics, Defense & Energy',
    url: '/invest',
    type: 'internal',
  },
];

const BOOKS = [
  {
    title: 'Addicted to the Process (#1 Amazon Bestseller)',
    url: 'https://www.amazon.com/Addicted-Process-Transactional-Confidence-Consistency-ebook/dp/B071SB4FZN',
  },
  {
    title: 'From Rep to Manager: Sales Leadership Guide',
    url: 'https://www.amazon.com/Rep-Manager-Guide-Taking-Leadership-ebook/dp/B08R6G19LZ',
  },
  {
    title: 'More Than a Number: Modern VP Sales Playbook',
    url: 'https://www.amazon.com/More-Than-Number-Modern-Playbook/dp/0998405493/',
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111] pt-28 pb-20 px-5">
      <div className="max-w-xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-black/15 mx-auto mb-4 bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/65e902866ce317053dbcd7c2_ScottLeese.jpg"
              alt="Scott Leese"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          <h1 className="text-3xl font-serif tracking-tight text-[#111111] mb-1">
            Scott Leese
          </h1>
          <p className="text-xs uppercase tracking-[0.18em] text-[#111111]/55 font-medium mb-2">
            @thescottleese &bull; 406.5K+ Followers
          </p>
          <p className="text-sm text-[#111111]/65 font-light max-w-md mx-auto">
            6x Sales Leader ($0→$25M). Strategic Advisor to 200+ Startups, 12 Unicorns &amp; 15 Exits. 3x Bestselling Author.
          </p>
        </div>

        {/* #1 Featured Module: The SLC Talent Bench (Dual-Door for Instagram Traffic) */}
        <div className="border border-[#111111] bg-[#f5f4ef] p-6 mb-8">
          <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#d9534f] mb-1.5 text-center">
            The SLC Talent Bench &bull; GTM Recruiting Network
          </div>
          <h2 className="text-2xl font-serif text-[#111111] text-center mb-2">
            Hiring Sales Talent—or Looking for Your Next Role?
          </h2>
          <p className="text-xs text-[#111111]/65 font-light text-center mb-5 leading-relaxed">
            We connect high-growth founders directly with stage-matched Founding AEs, RevOps leaders, and VPs of Sales from my 406.5K+ network.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/talent#portal"
              className="py-3.5 px-4 bg-[#111111] hover:bg-[#333333] text-white text-center text-xs uppercase tracking-[0.18em] font-medium transition-colors"
            >
              Founders: Hire Talent &rarr;
            </Link>
            <Link
              href="/talent#apply-bench"
              className="py-3.5 px-4 bg-white border border-black/20 hover:border-[#111111] text-[#111111] text-center text-xs uppercase tracking-[0.18em] font-medium transition-colors"
            >
              Sellers: Join The Bench &rarr;
            </Link>
          </div>
        </div>

        {/* Core Links */}
        <div className="space-y-3 mb-10">
          {CORE_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="block w-full p-4 sm:p-5 bg-white border border-black/10 hover:border-[#111111] transition-all group"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-serif text-lg text-[#111111] group-hover:text-[#d9534f] transition-colors">
                    {link.title}
                  </div>
                  <div className="text-xs text-[#111111]/55 font-light mt-0.5">
                    {link.sub}
                  </div>
                </div>
                <span className="text-sm text-[#111111]/40 group-hover:text-[#111111] group-hover:translate-x-0.5 transition-all shrink-0">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Inline Newsletter Capture for Instagram Traffic */}
        <div className="border border-black/10 bg-white p-6 sm:p-8 mb-10">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/45 font-semibold mb-1 text-center">
            Free Weekly Tactical Playbook
          </div>
          <h3 className="text-2xl font-serif text-[#111111] text-center mb-2">
            Join 4,500+ on The Leese Effect
          </h3>
          <p className="text-xs text-[#111111]/60 font-light text-center mb-6">
            Every Thursday morning. Real sales, GTM, and leadership playbooks from 200+ startups.
          </p>
          <NewsletterForm
            variant="compact"
            idPrefix="ig-links"
            placeholder="Enter your email address..."
            buttonText="Join Free →"
          />
        </div>

        {/* Books Section */}
        <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium text-center mb-4">
          3x Amazon Bestselling Books
        </h2>
        <div className="space-y-3 mb-12">
          {BOOKS.map((book) => (
            <a
              key={book.title}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 px-5 bg-[#111111] hover:bg-[#333333] text-center text-xs uppercase tracking-[0.18em] font-medium text-white transition-all"
            >
              {book.title} &nearr;
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-black/10 text-xs uppercase tracking-[0.18em] font-medium">
          <a
            href="https://www.instagram.com/thescottleese"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111]/65 hover:text-[#111111]"
          >
            Instagram (227K)
          </a>
          <a
            href="https://www.linkedin.com/in/scottleese/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111]/65 hover:text-[#111111]"
          >
            LinkedIn (134K)
          </a>
          <a
            href="https://www.tiktok.com/@therealscottleese"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111]/65 hover:text-[#111111]"
          >
            TikTok (31K)
          </a>
          <a
            href="https://www.youtube.com/@thescottleese"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111]/65 hover:text-[#111111]"
          >
            YouTube
          </a>
          <a
            href="https://x.com/thescottleese"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111]/65 hover:text-[#111111]"
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
}
