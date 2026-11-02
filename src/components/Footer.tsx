import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fcfaf8] border-t border-black/10 pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-medium tracking-tight mb-4 inline-block text-[#111111]">
              Scott Leese
            </Link>
            <p className="text-[#111111]/60 text-sm mb-6 max-w-xs font-light leading-relaxed">
              Strategic GTM + RevOps Advisor. 392.5K followers. 200+ companies. 12 unicorns. 15 exits.
            </p>
            <a href="mailto:scott@scottleeseconsulting.com" className="text-[#111111] hover:text-[#d9534f] text-sm font-medium transition-colors">
              scott@scottleeseconsulting.com
            </a>
          </div>

          <div>
            <h3 className="font-medium text-[#111111]/40 mb-6 uppercase tracking-[0.2em] text-[0.7rem]">Work</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/advisory" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Advisory &amp; RevOps</Link></li>
              <li><Link href="/talent" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">The SLC Talent Bench</Link></li>
              <li><Link href="/speaking" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Speaking &amp; SKOs</Link></li>
              <li><Link href="/events" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Surf &amp; Sales Events</Link></li>
              <li><Link href="/invest" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Milos Ventures</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#111111]/40 mb-6 uppercase tracking-[0.2em] text-[0.7rem]">Content &amp; Media</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/blog" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Field Notes (153 Essays)</Link></li>
              <li><Link href="/newsletter" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">The Leese Effect Newsletter</Link></li>
              <li><Link href="/podcast" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Podcasts</Link></li>
              <li><Link href="/books" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Books</Link></li>
              <li><Link href="/media" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Sponsor &amp; Media Kit</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#111111]/40 mb-6 uppercase tracking-[0.2em] text-[0.7rem]">Connect</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="https://www.linkedin.com/in/scottleese/" target="_blank" rel="noopener noreferrer" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/thescottleese" target="_blank" rel="noopener noreferrer" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@therealscottleese" target="_blank" rel="noopener noreferrer" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">TikTok</a></li>
              <li><a href="https://www.youtube.com/@thescottleese" target="_blank" rel="noopener noreferrer" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">YouTube</a></li>
              <li><a href="https://x.com/thescottleese" target="_blank" rel="noopener noreferrer" className="text-[#111111]/70 hover:text-[#111111] transition-colors text-sm">X</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#111111]/40 text-xs">
            &copy; {new Date().getFullYear()} Scott Leese Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
