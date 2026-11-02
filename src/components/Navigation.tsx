'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Advisory', href: '/advisory' },
    { name: 'Talent Bench', href: '/talent' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Events', href: '/events' },
    { name: 'Invest', href: '/invest' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Writing', href: '/blog' },
    { name: 'Media', href: '/media' },
  ];

  return (
    <div className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#fcfaf8]/90 backdrop-blur-sm border-b border-black/5' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <Link href="/" className="text-xl font-serif font-medium tracking-tight text-[#111111] hover:opacity-70 transition-opacity">
          Scott Leese
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-[#111111]/60 hover:text-[#111111] transition-colors font-medium tracking-tight"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/advisory"
            className="bg-[#111111] hover:bg-[#333333] text-white px-5 py-2 rounded-md font-medium text-sm transition-colors"
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#111111] p-2"
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

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fcfaf8] border-b border-black/5 p-6 flex flex-col gap-4 shadow-xl">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-[#111111]/80 hover:text-[#111111] py-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/advisory"
            className="bg-[#111111] text-white px-6 py-4 rounded-md font-medium text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work With Me
          </Link>
        </div>
      )}
    </div>
  );
}
