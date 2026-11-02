'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryLinks = [
    { name: 'Advisory', href: '/advisory' },
    { name: 'Talent Bench', href: '/talent' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Events', href: '/events' },
    { name: 'Invest', href: '/invest' },
  ];

  const contentLinks = [
    { name: 'Field Notes (153 Essays)', href: '/blog', sub: 'Tactical GTM & leadership archive' },
    { name: 'The Leese Effect', href: '/newsletter', sub: 'Weekly Thursday newsletter (4.5K+)' },
    { name: 'Podcasts', href: '/podcast', sub: "What's Your Story? & 100+ guest eps" },
    { name: 'Books', href: '/books', sub: '3x Amazon bestselling playbooks' },
    { name: 'Media & Sponsorships', href: '/media', sub: '392.5K B2B creator partnerships' },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#fcfaf8]/95 backdrop-blur-sm border-b border-black/10'
          : 'bg-[#fcfaf8]/80 backdrop-blur-[2px]'
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-serif font-medium tracking-tight text-[#111111] hover:opacity-70 transition-opacity shrink-0"
        >
          Scott Leese
        </Link>

        {/* Desktop Nav — Clean 6-item Architecture + Content Dropdown */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {primaryLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-[#111111]/65 hover:text-[#111111] transition-colors font-medium tracking-tight"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Content & Media Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsContentOpen(true)}
              onMouseLeave={() => setIsContentOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsContentOpen((prev) => !prev)}
                className="text-sm text-[#111111]/65 hover:text-[#111111] transition-colors font-medium tracking-tight flex items-center gap-1.5 py-2 cursor-pointer"
              >
                <span>Content</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isContentOpen ? 'rotate-180 text-[#111111]' : 'text-[#111111]/40'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isContentOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 z-50">
                  <div className="bg-[#fcfaf8] border border-black/15 shadow-xl p-2 divide-y divide-black/5">
                    {contentLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsContentOpen(false)}
                        className="block px-4 py-3 hover:bg-[#f5f4ef] transition-colors group"
                      >
                        <div className="text-sm font-serif text-[#111111] group-hover:text-[#d9534f] transition-colors flex items-center justify-between">
                          <span>{item.name}</span>
                          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </div>
                        <div className="text-[11px] text-[#111111]/55 font-light mt-0.5">
                          {item.sub}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/about"
                className="text-sm text-[#111111]/65 hover:text-[#111111] transition-colors font-medium tracking-tight"
              >
                About
              </Link>
            </li>
          </ul>

          <Link
            href="/advisory#contact"
            className="bg-[#111111] hover:bg-[#333333] text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors shrink-0"
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger */}
        <button
          className="lg:hidden text-[#111111] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Panel — Cleanly Grouped by Work vs. Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full max-h-[calc(100dvh-72px)] overflow-y-auto bg-[#fcfaf8] border-b border-black/15 px-6 py-6 flex flex-col gap-6 shadow-xl">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/40 font-semibold mb-2">
              Work &amp; Ventures
            </div>
            <ul className="grid grid-cols-1 divide-y divide-black/5">
              {[...primaryLinks, { name: 'About Scott & JM', href: '/about' }].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-[#111111]/85 hover:text-[#111111] py-2.5 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/40 font-semibold mb-2">
              Content &amp; Media
            </div>
            <ul className="grid grid-cols-1 divide-y divide-black/5">
              {contentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-[#111111]/85 hover:text-[#111111] py-2.5 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/advisory#contact"
            className="bg-[#111111] text-white px-6 py-3.5 rounded-md font-medium text-center text-xs uppercase tracking-[0.2em]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work With Me
          </Link>
        </div>
      )}
    </div>
  );
}
