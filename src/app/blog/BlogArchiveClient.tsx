'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Article } from '@/data/articles';

const CATEGORIES = [
  'All',
  'Tactical Advice',
  'Personal Growth',
  'Leadership',
  'Strategy',
  'Being an Individual Contributor',
  'Career Paths',
  'News',
];

export default function BlogArchiveClient({ articles }: { articles: Article[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCat =
        selectedCategory === 'All' || article.category === selectedCategory;
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)
      );
    });
  }, [articles, selectedCategory, searchQuery]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const featuredArticle = visibleArticles[0];
  const gridArticles = visibleArticles.slice(1);

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto border-t border-black/10">
      {/* Search + Category Filter Bar */}
      <div className="mb-12 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? articles.length
                  : articles.filter((a) => a.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(24);
                  }}
                  className={`px-3.5 py-2 text-xs uppercase tracking-[0.15em] font-medium border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#fcfaf8] text-[#111111]/70 border-black/10 hover:border-black/30 hover:text-[#111111]'
                  }`}
                >
                  {cat} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(24);
              }}
              placeholder="Search 153 articles..."
              className="w-full px-4 py-2.5 text-sm bg-white border border-black/15 text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:border-[#111111]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#111111]/40 hover:text-[#111111]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#111111]/50">
          <span>
            Showing {visibleArticles.length} of {filteredArticles.length} Published Dispatches
          </span>
          <span>100% Verbatim Archive from The Leese Effect</span>
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="border border-black/10 bg-[#fcfaf8] p-16 text-center">
          <p className="text-2xl font-serif text-[#111111] mb-3">
            No articles matched &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-sm text-[#111111]/60 mb-6 font-light">
            Try searching for another keyword like &ldquo;pipeline&rdquo;, &ldquo;VP of Sales&rdquo;, &ldquo;cold calling&rdquo;, or &ldquo;compensation&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-medium cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Featured Latest Article Banner */}
          {featuredArticle && selectedCategory === 'All' && !searchQuery && (
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="block mb-10 border border-black/15 bg-[#f5f4ef] p-8 md:p-14 group hover:bg-[#efede6] transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold bg-[#111111] text-white px-3 py-1">
                    Featured Dispatch
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium border border-black/15 bg-[#fcfaf8] px-3 py-1 text-[#111111]">
                    {featuredArticle.category}
                  </span>
                </div>
                <span className="text-xs text-[#111111]/55 font-light">
                  {featuredArticle.date} &bull; {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif text-[#111111] mb-4 leading-tight group-hover:underline underline-offset-4 decoration-black/25">
                {featuredArticle.title}
              </h2>
              <p className="text-lg md:text-xl text-[#111111]/65 font-light leading-relaxed max-w-4xl mb-8">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                <span className="text-xs text-[#111111]/50">
                  By Scott Leese &bull; {featuredArticle.wordCount} words
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] group-hover:text-[#d9534f] transition-colors">
                  Read Full Article &rarr;
                </span>
              </div>
            </Link>
          )}

          {/* Hairline Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {(selectedCategory === 'All' && !searchQuery ? gridArticles : visibleArticles).map(
              (post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="bg-[#fcfaf8] p-10 md:p-12 flex flex-col justify-between group hover:bg-[#f5f4ef] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium border border-black/10 px-3 py-1 text-[#111111]">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#111111]/50 font-light">{post.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mb-4 leading-snug group-hover:underline underline-offset-4 decoration-black/20">
                      {post.title}
                    </h3>
                    <p className="text-[#111111]/60 font-light leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                    <span className="text-xs text-[#111111]/40 font-light">
                      {post.readTime}
                    </span>
                    <span className="text-[0.7rem] uppercase tracking-widest font-medium text-[#111111] group-hover:text-[#d9534f] transition-colors">
                      Read Article &rarr;
                    </span>
                  </div>
                </Link>
              )
            )}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredArticles.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 24)}
                className="px-8 py-4 bg-[#111111] text-white hover:bg-[#333333] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                Load More Dispatches ({filteredArticles.length - visibleCount} Remaining)
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
