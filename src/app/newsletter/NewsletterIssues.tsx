import Link from 'next/link';
import { ALL_ARTICLES } from '@/data/articles';

export default function NewsletterIssues() {
  const recentIssues = ALL_ARTICLES.slice(0, 6);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
        {recentIssues.map((issue, idx) => {
          const issueNumber = ALL_ARTICLES.length - idx;
          return (
            <Link
              key={issue.slug}
              href={`/blog/${issue.slug}`}
              className="bg-[#fcfaf8] p-8 flex flex-col justify-between group hover:bg-[#f5f4ef] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#111111]/50 mb-6">
                  <span className="font-medium uppercase tracking-[0.2em] text-[#111111]">
                    Dispatch #{issueNumber} &bull; {issue.category}
                  </span>
                </div>
                <div className="text-xs text-[#111111]/45 font-light mb-3">{issue.date}</div>
                <h3 className="text-2xl font-serif text-[#111111] mb-4 leading-snug group-hover:underline underline-offset-4 decoration-black/20">
                  {issue.title}
                </h3>
                <p className="text-sm text-[#111111]/60 font-light leading-relaxed mb-8 line-clamp-3">
                  {issue.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-black/10 flex items-center justify-between text-sm">
                <span className="text-[#111111]/40 font-medium text-xs">{issue.readTime}</span>
                <span className="text-[#111111] group-hover:text-[#d9534f] font-medium transition-colors uppercase tracking-widest text-[0.7rem]">
                  Read Full Issue &rarr;
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-block px-8 py-4 border border-black/20 hover:border-[#111111] text-[#111111] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
        >
          Browse All {ALL_ARTICLES.length} Published Issues &rarr;
        </Link>
      </div>
    </div>
  );
}
