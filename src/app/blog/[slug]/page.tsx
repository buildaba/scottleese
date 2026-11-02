import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NewsletterForm from '@/components/NewsletterForm';
import {
  ALL_ARTICLES,
  getArticleBySlug,
  getRelatedArticles,
  getArticleFunnelRecommendation,
} from '@/data/articles';

export function generateStaticParams() {
  return ALL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: 'Article Not Found | Scott Leese',
    };
  }
  return {
    title: `${article.title} | The Leese Effect`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Scott Leese`,
      description: article.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleIndex = ALL_ARTICLES.findIndex((a) => a.slug === article.slug);
  const issueNumber = ALL_ARTICLES.length - articleIndex;
  const prevArticle = articleIndex < ALL_ARTICLES.length - 1 ? ALL_ARTICLES[articleIndex + 1] : null;
  const nextArticle = articleIndex > 0 ? ALL_ARTICLES[articleIndex - 1] : null;
  const relatedArticles = getRelatedArticles(article.slug, article.category, 3);
  const funnel = getArticleFunnelRecommendation(article);

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Top Breadcrumb Bar */}
      <div className="pt-28 pb-6 px-6 border-b border-black/10 bg-[#fcfaf8]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-[#111111]/60">
          <div className="flex items-center gap-3">
            <Link href="/blog" className="hover:text-[#111111] transition-colors font-medium">
              &larr; All Field Notes ({ALL_ARTICLES.length})
            </Link>
            <span className="text-black/20">/</span>
            <span className="text-[#111111] font-medium">{article.category}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>The Leese Effect &bull; Dispatch #{issueNumber}</span>
            <span className="hidden sm:inline text-black/20">|</span>
            <span className="hidden sm:inline">{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-16 md:py-24 px-6 border-b border-black/10 bg-[#f5f4ef]/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold border border-black/15 bg-[#fcfaf8] px-3 py-1 text-[#111111]">
              {article.category}
            </span>
            {article.date && (
              <span className="text-xs uppercase tracking-[0.15em] text-[#111111]/50 font-medium">
                {article.date}
              </span>
            )}
            <span className="text-xs text-[#111111]/40">&bull;</span>
            <span className="text-xs uppercase tracking-[0.15em] text-[#111111]/50 font-medium">
              {article.wordCount} Words ({article.readTime})
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#111111] leading-[1.08] mb-8">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-xl md:text-2xl text-[#111111]/65 font-light leading-relaxed mb-10 max-w-3xl">
              {article.excerpt}
            </p>
          )}

          {/* Author & Quick Action Bar */}
          <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064e05/65f9bb6b3949c9bd93fb73be_Scott.jpg"
                alt="Scott Leese"
                className="w-12 h-12 rounded-full object-cover border border-black/15 grayscale"
              />
              <div>
                <div className="text-sm font-medium text-[#111111]">Scott Leese</div>
                <div className="text-xs text-[#111111]/55 font-light">
                  CEO &amp; Founder, Scott Leese Consulting &bull; 6x Sales Leader &bull; 3x Author
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/newsletter"
                className="px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium border border-black/15 hover:border-[#111111] text-[#111111] transition-colors"
              >
                Subscribe Weekly
              </Link>
              <Link
                href={funnel.primaryCta.href}
                className="px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium bg-[#111111] text-white hover:bg-[#333333] transition-colors"
              >
                Work With Scott &rarr;
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content + Sticky Conversion Sidebar */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Full Original Article Replica */}
          <article className="lg:col-span-8">
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            {/* Contextual Conversion Module at the exact moment of peak reader intent */}
            <div className="mt-16 border border-[#111111] bg-[#f5f4ef] p-8 md:p-12">
              <div className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-[#d9534f] mb-3">
                {funnel.badge}
              </div>
              <h3 className="text-2xl md:text-4xl font-serif tracking-tight text-[#111111] mb-4 leading-tight">
                {funnel.headline}
              </h3>
              <p className="text-[#111111]/70 font-light leading-relaxed mb-8">
                {funnel.description}
              </p>

              <div className="grid grid-cols-3 gap-4 py-6 mb-8 border-y border-black/10">
                {funnel.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-lg md:text-2xl font-serif text-[#111111]">{m.value}</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={funnel.primaryCta.href}
                  className="px-6 py-4 bg-[#111111] text-white hover:bg-[#333333] text-xs uppercase tracking-[0.2em] font-medium text-center transition-colors"
                >
                  {funnel.primaryCta.label}
                </Link>
                <Link
                  href={funnel.secondaryCta.href}
                  className="px-6 py-4 border border-black/20 hover:border-[#111111] text-[#111111] text-xs uppercase tracking-[0.2em] font-medium text-center transition-colors bg-[#fcfaf8]"
                >
                  {funnel.secondaryCta.label}
                </Link>
              </div>
            </div>

            {/* Prev / Next Dispatch Navigation */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10">
              {prevArticle ? (
                <Link
                  href={`/blog/${prevArticle.slug}`}
                  className="bg-[#fcfaf8] p-6 hover:bg-[#f5f4ef] transition-colors flex flex-col justify-between"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/45 mb-2">
                    &larr; Older Dispatch
                  </span>
                  <span className="text-lg font-serif text-[#111111] leading-snug">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : (
                <div className="bg-[#fcfaf8] p-6 opacity-40">
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/45">
                    First Dispatch in Archive
                  </span>
                </div>
              )}

              {nextArticle ? (
                <Link
                  href={`/blog/${nextArticle.slug}`}
                  className="bg-[#fcfaf8] p-6 hover:bg-[#f5f4ef] transition-colors flex flex-col justify-between sm:text-right"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/45 mb-2">
                    Newer Dispatch &rarr;
                  </span>
                  <span className="text-lg font-serif text-[#111111] leading-snug">
                    {nextArticle.title}
                  </span>
                </Link>
              ) : (
                <div className="bg-[#fcfaf8] p-6 sm:text-right opacity-40">
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#111111]/45">
                    Latest Dispatch
                  </span>
                </div>
              )}
            </div>
          </article>

          {/* Right Column: Sticky Executive Conversion Rail */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Primary Advisory Card */}
            <div className="border border-black/10 bg-[#fcfaf8] p-8">
              <div className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-[#111111]/50 mb-3">
                Work With Scott Leese
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-3 leading-snug">
                Scale From $0 to $25M ARR Without the Expensive Mistakes.
              </h3>
              <p className="text-sm text-[#111111]/65 font-light leading-relaxed mb-6">
                Direct 1:1 GTM advisory, RevOps architecture, and The SLC Talent Bench for high-growth founders and CROs.
              </p>

              <div className="space-y-3 mb-6 text-xs border-y border-black/10 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#111111]/70">72-Hr GTM &amp; Hiring Audit</span>
                  <span className="font-medium text-[#111111]">$2,500 Flat</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#111111]/70">Starter Advisory</span>
                  <span className="font-medium text-[#111111]">$3,000/mo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#111111]/70">Advisory + RevOps</span>
                  <span className="font-medium text-[#111111]">$5,000/mo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#111111]/70">Complete Fractional CRO</span>
                  <span className="font-medium text-[#111111]">$10,000/mo</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-black/5">
                  <Link href="/talent" className="text-[#d9534f] font-medium hover:underline">
                    + The SLC Talent Bench
                  </Link>
                  <span className="font-medium text-[#111111]">30-Day Sprint</span>
                </div>
              </div>

              <Link
                href="/advisory#get-started"
                className="block w-full py-3.5 px-4 bg-[#111111] text-white hover:bg-[#333333] text-center text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Book Strategy Call &rarr;
              </Link>
            </div>

            {/* Secondary Card: Surf & Sales + Speaking */}
            <div className="border border-black/10 bg-[#f5f4ef]/70 p-8">
              <div className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-[#111111]/50 mb-2">
                Events &amp; Keynotes
              </div>
              <h4 className="text-xl font-serif text-[#111111] mb-2">
                Surf &amp; Sales B2B Buyouts &amp; SKOs
              </h4>
              <p className="text-xs text-[#111111]/65 font-light leading-relaxed mb-5">
                Buy out all 15–20 seats of a Surf &amp; Sales retreat for your leadership team or President’s Club, or bring Scott to headline your next SKO.
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/events#b2b-buyouts"
                  className="text-xs uppercase tracking-[0.15em] font-medium text-[#111111] hover:text-[#d9534f] transition-colors"
                >
                  &rarr; Corporate Cohort Buyouts
                </Link>
                <Link
                  href="/speaking"
                  className="text-xs uppercase tracking-[0.15em] font-medium text-[#111111] hover:text-[#d9534f] transition-colors"
                >
                  &rarr; Book Scott for Your SKO
                </Link>
                <Link
                  href="/media"
                  className="text-xs uppercase tracking-[0.15em] font-medium text-[#111111] hover:text-[#d9534f] transition-colors"
                >
                  &rarr; Sponsor 392.5K B2B Reach
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Dispatches */}
      <section className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef]/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 font-medium mb-2">
                Keep Reading
              </div>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#111111]">
                Related Dispatches in {article.category}
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#111111] hover:text-[#d9534f] transition-colors"
            >
              Browse All {ALL_ARTICLES.length} Articles &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="bg-[#fcfaf8] p-8 flex flex-col justify-between group hover:bg-[#f5f4ef] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium border border-black/10 px-2.5 py-1 text-[#111111]">
                      {rel.category}
                    </span>
                    <span className="text-xs text-[#111111]/45 font-light">{rel.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#111111] mb-3 leading-snug group-hover:underline underline-offset-4 decoration-black/20">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-[#111111]/60 font-light leading-relaxed mb-6 line-clamp-3">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-xs text-[#111111]/40">{rel.readTime}</span>
                  <span className="text-[0.7rem] uppercase tracking-widest font-medium text-[#111111] group-hover:text-[#d9534f] transition-colors">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Bottom CTA */}
      <section className="py-28 px-6 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-[#111111]">
            Get The Leese Effect every Thursday.
          </h2>
          <p className="text-xl text-[#111111]/60 mb-12 font-light">
            Join 4,500+ founders, VPs of Sales, and operators getting real tactical dispatches like this in their inbox.
          </p>
          <NewsletterForm
            variant="bottom"
            idPrefix={`post-${article.slug}`}
            placeholder="Enter your work email address..."
            buttonText="Subscribe Free"
          />
        </div>
      </section>
    </div>
  );
}
