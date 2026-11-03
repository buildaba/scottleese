import Link from 'next/link';
import LogoTicker from '@/components/LogoTicker';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-56 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-serif tracking-tight mb-6 md:mb-8 leading-[1.06] text-[#111111]">
            I take startups from zero to $25M.
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-[#111111]/60 mb-12 md:mb-16 max-w-3xl leading-relaxed font-light tracking-tight">
            Strategic GTM + RevOps Advisor to <span className="text-[#111111] font-medium">200+</span> companies, including <span className="text-[#111111] font-medium">12 unicorns</span> and <span className="text-[#111111] font-medium">15 exits</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24 w-full sm:w-auto items-start">
            <Link 
              href="/advisory" 
              className="shrink-0 whitespace-nowrap px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium text-xs uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center"
            >
              Work With Me &rarr;
            </Link>
            <Link 
              href="/media" 
              className="shrink-0 whitespace-nowrap px-8 py-4 bg-transparent border border-black/20 hover:border-[#111111] text-[#111111] font-medium text-xs uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center"
            >
              View Media Kit
            </Link>
          </div>

          {/* Minimalist Stats Bar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 py-8 md:py-10 border-y border-black/10">
            {[
              { val: "392.5K", label: "Followers" },
              { val: "200+", label: "Companies" },
              { val: "12", label: "Unicorns" },
              { val: "15", label: "Exits" },
              { val: "3", label: "Bestsellers" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
                <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111111] mb-1.5">{stat.val}</span>
                <span className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.15em] text-[#111111]/50 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "My Worlds" Section */}
      <section className="py-16 md:py-24 border-t border-black/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-10 md:mb-16">What I Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {[
              { href: "/advisory", title: "Advisory", desc: "Fractional CRO & GTM strategy for startups scaling to $25M." },
              { href: "/talent", title: "The SLC Talent Bench", desc: "Curated GTM talent network & search for Founding AEs, RevOps & VPs of Sales." },
              { href: "/speaking", title: "Speaking", desc: "Keynotes on sales, resilience, and modern GTM." },
              { href: "/events", title: "Events", desc: "Surf & Sales — executive retreats & corporate cohort buyouts." },
              { href: "/invest", title: "Investing", desc: "Milos Ventures — backing AI, robotics, defense & energy." },
              { href: "/media", title: "Creator & Podcast", desc: "392.5K followers + What's Your Story. B2B brand partnerships." }
            ].map((card, i) => (
              <Link key={i} href={card.href} className="group bg-[#fcfaf8] p-7 sm:p-10 md:p-12 hover:bg-[#f5f4ef] transition-colors flex flex-col h-full">
                <h3 className="text-2xl sm:text-3xl font-serif mb-3 md:mb-4 flex items-center justify-between text-[#111111]">
                  {card.title}
                  <span className="opacity-100 md:opacity-0 md:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out text-[#d9534f]">→</span>
                </h3>
                <p className="text-[#111111]/60 leading-relaxed font-light mt-auto text-base sm:text-lg">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 border-t border-black/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl mb-12">
          <h2 className="text-[0.7rem] font-medium tracking-[0.2em] text-[#111111]/40 uppercase">Trusted By</h2>
        </div>
        
        <LogoTicker />

        <div className="container mx-auto px-6 max-w-7xl mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {/* Testimonial 1 */}
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-[#111111] mb-8 font-light italic">
                "Scott's direct & transparent approach led to a complete transformation within six months. He worked closely with all levels of our team... His contributions were crucial in our $317M sale."
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-[#111111] font-serif">MC</div>
                <div>
                  <div className="font-medium text-[#111111]">Matt Curl</div>
                  <div className="text-sm text-[#111111]/60 font-light">COO, Apollo.io (ex-FiveStars)</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-[#111111] mb-8 font-light italic">
                "Scott has been an advisor for over 4 years now. He is always there when we need him, and his advice has proven to be super valuable. His approach is guided by his many years of super-relevant real-life experience."
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-[#111111] font-serif">DK</div>
                <div>
                  <div className="font-medium text-[#111111]">Dave Kennett</div>
                  <div className="text-sm text-[#111111]/60 font-light">Founder & CEO, Replayz IQ</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-[#111111] mb-8 font-light italic">
                "Scott Leese was pivotal in transforming our approach to sales & marketing. His ability to pinpoint and attract the right customers accelerated our growth and solidified our market position."
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-[#111111] font-serif">MS</div>
                <div>
                  <div className="font-medium text-[#111111]">Mike Smalls</div>
                  <div className="text-sm text-[#111111]/60 font-light">Founder, Hoopla</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-black/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight text-[#111111]">Ready to scale?</h2>
          <p className="text-xl md:text-2xl text-[#111111]/60 mb-16 font-light tracking-tight">
            Stop guessing. Start building a predictable, scalable revenue machine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/advisory#contact" 
              className="shrink-0 whitespace-nowrap px-10 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium text-xs uppercase tracking-[0.2em] transition-colors w-full sm:w-auto"
            >
              Book a Discovery Call &rarr;
            </Link>
            <a 
              href="https://www.instagram.com/thescottleese" 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap text-[#111111]/70 hover:text-[#111111] font-medium transition-colors flex items-center gap-2 text-xs uppercase tracking-[0.2em]"
            >
              DM Me on Instagram
              <span className="text-[#d9534f]">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
