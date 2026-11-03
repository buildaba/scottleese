import articlesData from './articles.json';

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  wordCount: number;
  excerpt: string;
  contentHtml: string;
}

export const ALL_ARTICLES: Article[] = articlesData as Article[];

export function getArticleBySlug(slug: string): Article | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, category: string, limit = 3): Article[] {
  const sameCategory = ALL_ARTICLES.filter(
    (a) => a.slug !== currentSlug && a.category === category
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = ALL_ARTICLES.filter(
    (a) => a.slug !== currentSlug && a.category !== category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export interface FunnelRecommendation {
  badge: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  metrics: { label: string; value: string }[];
}

/**
 * Maps each article's topic/title/category to the highest-converting B2B funnel CTA
 * (Advisory, The SLC Talent Bench, Surf & Sales B2B Buyout, or Speaking/SKO).
 */
export function getArticleFunnelRecommendation(article: Article): FunnelRecommendation {
  const text = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();

  // 1. Recruiting / Hiring / VP of Sales / Interviewing -> The SLC Talent Bench + Advisory
  if (
    text.includes('hire') ||
    text.includes('hiring') ||
    text.includes('vp of sales') ||
    text.includes('interview') ||
    text.includes('manager') ||
    text.includes('job') ||
    text.includes('recruiting') ||
    text.includes('team')
  ) {
    return {
      badge: 'The SLC Talent Bench • Curated GTM Talent Network & Search',
      headline: 'Need to hire elite AEs, SDRs, or a VP of Sales without a $200K misfire?',
      description:
        'Don’t hire a resume—hire from the network. Connect directly with stage-matched Founding AEs, RevOps leaders, and VPs of Sales across Scott Leese’s 392.5K+ operator ecosystem.',
      primaryCta: {
        label: 'Hire From The SLC Talent Bench →',
        href: '/talent',
      },
      secondaryCta: {
        label: 'Join the Talent Bench',
        href: '/talent#apply-bench',
      },
      metrics: [
        { label: 'B2B Ecosystem', value: '392.5K+' },
        { label: 'LinkedIn Reach', value: '134K+' },
        { label: 'Startups Served', value: '200+' },
      ],
    };
  }

  // 2. Surf / Retreat / Community / Mindset / Leadership Offsite -> Surf & Sales B2B Buyout
  if (
    text.includes('surf') ||
    text.includes('burnout') ||
    text.includes('time off') ||
    text.includes('community') ||
    text.includes('retreat') ||
    text.includes('culture')
  ) {
    return {
      badge: 'Surf & Sales • Executive Immersions & B2B Cohort Buyouts',
      headline: 'Bring your leadership team—or buy out an entire 15–20 seat cohort.',
      description:
        'Skip the generic hotel ballroom. Send your top performers to Costa Rica or Nosara, or book a private corporate full-cohort buyout for your next President’s Club or CRO leadership offsite.',
      primaryCta: {
        label: 'Explore Surf & Sales B2B Buyouts →',
        href: '/events#b2b-buyouts',
      },
      secondaryCta: {
        label: 'Book Scott for Your SKO Keynote',
        href: '/speaking',
      },
      metrics: [
        { label: 'Cohort Size', value: '15–20 Seats' },
        { label: 'Format', value: 'Morning Tactical + Surf' },
        { label: 'L&D Expensable', value: '100% Turnkey' },
      ],
    };
  }

  // 3. Default -> Core GTM Advisory, RevOps & Fractional CRO ($3K / $5K / $10K plans)
  return {
    badge: 'Scott Leese Consulting • GTM Advisory & RevOps',
    headline: 'Want Scott & JM in your corner building your $0 → $25M revenue engine?',
    description:
      'Stop guessing on ICP, outbound cadences, HubSpot/Salesforce architecture, and sales playbooks. Partner directly with Scott Leese and JM Wilke across our Starter ($3K/mo), RevOps ($5K/mo), or Complete ($10K/mo) retainers.',
    primaryCta: {
      label: 'Apply to Work With Scott →',
      href: '/advisory#get-started',
    },
    secondaryCta: {
      label: 'View $3K / $5K / $10K Plans',
      href: '/advisory#plans',
    },
    metrics: [
      { label: 'Companies Advised', value: '200+' },
      { label: 'Unicorns & Exits', value: '12 Unicorns / 15 Exits' },
      { label: 'Retainer Tiers', value: '$3K – $10K/mo' },
    ],
  };
}
