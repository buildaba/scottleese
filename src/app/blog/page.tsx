import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';
import { ALL_ARTICLES } from '@/data/articles';
import BlogArchiveClient from './BlogArchiveClient';

export const metadata = {
  title: 'Field Notes & Newsletter Archive (153 Dispatches) | Scott Leese',
  description:
    'Read all 153 verbatim editions of The Leese Effect by Scott Leese: tactical sales playbooks, GTM strategy, hiring VPs of Sales, and scaling from $0 to $25M.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          The Complete Leese Effect Archive &bull; {ALL_ARTICLES.length} Published Dispatches
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.1]">
          Field Notes
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/60 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Every tactical essay, cold-calling breakdown, leadership memo, and GTM playbook written by Scott Leese.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/advisory#get-started"
            className="px-6 py-3 bg-[#111111] text-white hover:bg-[#333333] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Work With Scott &rarr;
          </Link>
          <Link
            href="/newsletter"
            className="px-6 py-3 border border-black/15 hover:border-[#111111] text-[#111111] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Subscribe to Weekly Dispatches
          </Link>
        </div>
      </section>

      {/* Interactive Searchable & Filterable Archive of All 153 Real Articles */}
      <BlogArchiveClient articles={ALL_ARTICLES} />

      {/* Newsletter Bottom CTA */}
      <section className="py-32 px-6 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-[#111111]">
            Get articles like these in your inbox.
          </h2>
          <p className="text-xl text-[#111111]/60 mb-12 font-light">
            Join 4,500+ subscribers getting weekly insights on building scalable revenue engines.
          </p>
          <NewsletterForm
            variant="bottom"
            idPrefix="blog"
            placeholder="Enter your work email address..."
            buttonText="Subscribe Now"
          />
        </div>
      </section>
    </div>
  );
}
