import Link from "next/link";

export const metadata = {
  title: "Surf & Sales Events & Corporate Buyouts | Scott Leese",
  description:
    "Surf & Sales in Playa Grande, Costa Rica. Individual retreats, corporate team pods, and full-cohort B2B seat buyouts.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          Surf &amp; Sales Summit • Playa Grande, Costa Rica
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.08]">
          The Anti-Conference for Revenue Leaders.
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/65 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Five days of world-class sales leadership training, executive masterminds, and surfing in Costa Rica. Available for individual leaders, corporate team pods, or <strong>full-cohort B2B company buyouts</strong>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#b2b-buyouts"
            className="shrink-0 whitespace-nowrap px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium transition-colors text-xs uppercase tracking-[0.2em] w-full sm:w-auto"
          >
            Explore B2B Full-Cohort Buyouts &rarr;
          </a>
          <a
            href="#individual"
            className="shrink-0 whitespace-nowrap px-8 py-4 bg-transparent border border-black/20 hover:border-[#111111] text-[#111111] font-medium transition-colors text-xs uppercase tracking-[0.2em] w-full sm:w-auto"
          >
            Reserve Individual Seat
          </a>
        </div>
      </section>

      {/* B2B Corporate Buyout Section (Directly addressing Scott's email goal) */}
      <section id="b2b-buyouts" className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] mb-4">
              New for 2026 • Corporate Edition
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#111111]">
              Buy Out the Entire Retreat for Your Team or Top Accounts
            </h2>
            <p className="text-xl text-[#111111]/65 font-light max-w-3xl leading-relaxed">
              Skip the forgettable hotel ballroom SKO or President&apos;s Club. Companies now buy the entire 15–20 seat Surf &amp; Sales allocation for private executive offsites, President&apos;s Club rewards, or high-converting ABM customer retreats hosted by Scott Leese.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Full Cohort Buyout */}
            <div className="bg-[#111111] text-white p-10 flex flex-col justify-between relative shadow-xl">
              <div className="absolute top-0 right-0 bg-white text-[#111111] px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
                100% Exclusive
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">15–20 Seats • Private Week</div>
                <h3 className="text-3xl font-serif mb-4">Full-Cohort Corporate Buyout</h3>
                <p className="text-white/70 font-light text-sm leading-relaxed mb-8">
                  Own the entire resort and curriculum for 5 days in Playa Grande. Ideal for Series B–D Sales Leadership Offsites, President&apos;s Club, or an ultra-VIP ABM prospect retreat.
                </p>
                <ul className="space-y-3 text-sm text-white/85 font-light mb-10">
                  <li>✓ Entire 15–20 seat retreat allocation</li>
                  <li>✓ Custom curriculum led by Scott Leese</li>
                  <li>✓ All-inclusive luxury accommodations &amp; private chef</li>
                  <li>✓ Daily private surf coaching, photo &amp; video crew</li>
                  <li>✓ Pre- &amp; post-retreat GTM workshop with leadership</li>
                </ul>
              </div>
              <Link
                href="/advisory#contact"
                className="block w-full py-4 px-6 bg-white text-[#111111] hover:bg-white/90 text-center font-medium transition-colors"
              >
                Inquire for Full Cohort Buyout →
              </Link>
            </div>

            {/* Leadership Pod (5 Seats) */}
            <div className="bg-[#fcfaf8] border border-black/10 p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 mb-2">4–6 Seats • Team Package</div>
                <h3 className="text-3xl font-serif text-[#111111] mb-4">Executive Team Pod</h3>
                <p className="text-[#111111]/65 font-light text-sm leading-relaxed mb-8">
                  Send your VP of Sales, Directors, and top-performing AEs together to level up leadership skills alongside peers from top B2B startups.
                </p>
                <ul className="space-y-3 text-sm text-[#111111]/80 font-light mb-10">
                  <li>✓ 4 to 6 private rooms reserved for your team</li>
                  <li>✓ Dedicated 1-on-1 breakout session with Scott</li>
                  <li>✓ Corporate invoice &amp; L&amp;D procurement documentation</li>
                  <li>✓ Transferable seats across your revenue org</li>
                </ul>
              </div>
              <Link
                href="/advisory#contact"
                className="block w-full py-4 px-6 border border-black/20 hover:border-black hover:bg-black/5 text-center font-medium text-[#111111] transition-colors"
              >
                Reserve a Team Pod
              </Link>
            </div>

            {/* Category Exclusive Retreat Sponsor */}
            <div className="bg-[#fcfaf8] border border-black/10 p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 mb-2">$15K – $45K • B2B Vendors</div>
                <h3 className="text-3xl font-serif text-[#111111] mb-4">Category-Exclusive Sponsor</h3>
                <p className="text-[#111111]/65 font-light text-sm leading-relaxed mb-8">
                  Put your B2B SaaS brand in the ocean for 5 days with 20 decision-makers (CROs, VPs of Sales, Founders)—combined with Scott&apos;s 406.5K+ social reach.
                </p>
                <ul className="space-y-3 text-sm text-[#111111]/80 font-light mb-10">
                  <li>✓ Big Wave Legend ($45K) / Pipeline Charger ($30K) / Local Shredder ($15K)</li>
                  <li>✓ Attendee seat(s) embedded directly with buyers</li>
                  <li>✓ Co-branded content across Scott&apos;s IG &amp; LinkedIn</li>
                  <li>✓ Curated 1-on-1 introductions to every attendee</li>
                </ul>
              </div>
              <Link
                href="/media#contact"
                className="block w-full py-4 px-6 border border-black/20 hover:border-black hover:bg-black/5 text-center font-medium text-[#111111] transition-colors"
              >
                Request Sponsor Prospectus
              </Link>
            </div>
          </div>
        </div>
      </section>

        {/* Individual Attendance & "How to Get Your Boss to Pay" */}
      <section id="individual" className="py-24 px-6 max-w-6xl mx-auto border-t border-black/10 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
              Individual Tickets • Next Cohort: Nov 18–22, 2026 • Playa Grande, Costa Rica
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-[#111111]">
              Big Is Out. Go Small or Stay Home.
            </h2>
            <p className="text-lg text-[#111111]/70 font-light leading-relaxed mb-6">
              Co-founded and hosted by Scott Leese, Richard Harris, and Jeff Coleman, Surf &amp; Sales takes place at Casa Serena and beachfront bungalows directly on the sand in Playa Grande, Costa Rica—a 4-mile National Park and Sea Turtle sanctuary.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-4 border-t border-black/10">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#111111]/50 mb-1">All-Inclusive Package</div>
                <div className="text-3xl font-serif text-[#111111]">Starting at $3,950</div>
                <div className="text-xs text-[#111111]/60 font-light mt-1">Shared or private beachfront bungalow options</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#111111]/50 mb-1">1-on-1 Coaching Included</div>
                <div className="text-3xl font-serif text-[#111111]">During + Post-Event</div>
                <div className="text-xs text-[#111111]/60 font-light mt-1">Includes follow-up 1:1 coaching session after you return</div>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#111111]/75 font-light mb-8">
              <li>✓ Deluxe beach-front lodging at Casa Serena</li>
              <li>✓ Chef-prepared healthful Tico meals, drinks &amp; bar</li>
              <li>✓ Private ground transport to/from Liberia (LIR) airport</li>
              <li>✓ All sales trainings &amp; executive leadership workshops</li>
              <li>✓ Daily surf lessons or guided surf excursions</li>
              <li>✓ 1-on-1 coaching + post-retreat follow-up session</li>
            </ul>
            <Link
              href="/advisory#contact"
              className="inline-block px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium transition-colors"
            >
              Reserve Your Spot (Direct Checkout / Invoice) →
            </Link>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f5f4ef] border border-black/10 p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-[#d9534f] font-medium mb-2">
                The Talk Track
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-4">
                How to Get Your Company to Pay for Your Seat
              </h3>
              <p className="text-sm text-[#111111]/70 font-light leading-relaxed mb-6">
                Over 75% of Surf &amp; Sales attendees expense their ticket through their company&apos;s L&amp;D, executive coaching, or conference budget. We provide a ready-to-send CFO/CEO justification memo and W-9 invoice package.
              </p>
              <a
                href="mailto:scott@scottleeseconsulting.com?subject=Surf%20%26%20Sales%20Boss%20Approval%20Template%20%26%20Invoice"
                className="block w-full py-3.5 px-4 bg-white border border-black/20 hover:border-black text-center text-sm font-medium text-[#111111] transition-colors"
              >
                Request L&amp;D Invoice &amp; Approval Memo
              </a>
            </div>

            <div className="bg-white border border-black/10 p-8">
              <p className="text-sm font-serif italic text-[#111111]/85 leading-relaxed mb-4">
                &ldquo;There are sales account executives here, there are CEOs, there are founders, and everyone is walking away with something applicable from every single session... I think Surf &amp; Sales has nailed it.&rdquo;
              </p>
              <div className="text-xs uppercase tracking-[0.15em] text-[#111111]/55 font-medium">
                — Claire Morris, VP Operations @ Homeward
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Co-Hosts from surfandsales.com */}
      <section className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef]/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Workshop Topics */}
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
                The &ldquo;Work&rdquo; • Curriculum Highlights
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#111111] mb-4">
                Tailored Workshops for Every Cohort
              </h3>
              <p className="text-sm text-[#111111]/65 font-light leading-relaxed mb-6">
                Every Surf &amp; Sales summit is customized around the exact challenges of the 15–20 leaders in the room, combined with our most requested sessions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Talking Story: Winning Hearts & Minds",
                  "Future-Proofing Your Sales Career",
                  "Mastering Internal Politics & Managing Up",
                  "Nearbound & Go-To-Network Sales 101",
                  "Scaling Without Failing ($0 → $25M)",
                  "LinkedIn & Social Selling Master Class",
                  "Stock Option + Comp De-Mystification",
                  "Mental Health, Resilience & Side Hustles",
                ].map((topic) => (
                  <div
                    key={topic}
                    className="bg-[#fcfaf8] border border-black/10 p-4 text-sm text-[#111111] font-medium"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>

            {/* Co-Hosts */}
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-3">
                The Surf &amp; Sales Team
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#111111] mb-6">
                Your Co-Hosts in Playa Grande
              </h3>
              <div className="space-y-4">
                <div className="bg-[#fcfaf8] border border-black/10 p-6 flex items-start gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5a4c11fa64b05ff55fa03564/ba57272c-26e4-4c5d-b121-a705643c715e/Screenshot+2024-11-21+at+12.36.44%E2%80%AFPM.png"
                    alt="Scott Leese"
                    className="w-16 h-16 object-cover border border-black/10 shrink-0 grayscale"
                  />
                  <div>
                    <h4 className="text-xl font-serif text-[#111111]">Scott Leese</h4>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#111111]/50 mb-2">
                      6x Sales Leader • 5x Founder • 3x Author
                    </div>
                    <p className="text-xs text-[#111111]/65 font-light leading-relaxed">
                      Strategic advisor to 200+ companies (12 unicorns, 15 exits), Founder of Scott Leese Consulting &amp; Milos Ventures. Lives in Austin, TX, with home in the lineup at Playa Grande.
                    </p>
                  </div>
                </div>

                <div className="bg-[#fcfaf8] border border-black/10 p-6 flex items-start gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5a4c11fa64b05ff55fa03564/e8b5f5aa-7799-409f-a536-6209813d2476/2024-09-17+LinkedIn+05190.jpg"
                    alt="Richard Harris"
                    className="w-16 h-16 object-cover border border-black/10 shrink-0 grayscale"
                  />
                  <div>
                    <h4 className="text-xl font-serif text-[#111111]">Richard Harris</h4>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#111111]/50 mb-2">
                      Author of The Seller&apos;s Journey • 4x Salesforce Top Influencer
                    </div>
                    <p className="text-xs text-[#111111]/65 font-light leading-relaxed">
                      20+ years of SaaS sales training experience helping organizations scale repeatable revenue and human-to-human (&ldquo;per-fessional&rdquo;) connection. Co-host of The Surf &amp; Sales Podcast.
                    </p>
                  </div>
                </div>

                <div className="bg-[#fcfaf8] border border-black/10 p-6 flex items-start gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5a4c11fa64b05ff55fa03564/c026d117-4729-4653-8fde-580641be59a6/Jeff_Coleman_Headshot.jpg"
                    alt="Jeff Coleman"
                    className="w-16 h-16 object-cover border border-black/10 shrink-0 grayscale"
                  />
                  <div>
                    <h4 className="text-xl font-serif text-[#111111]">Jeff Coleman</h4>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#111111]/50 mb-2">
                      CEO, Eli Technologies • Former Obama Campaign Deputy Field Director
                    </div>
                    <p className="text-xs text-[#111111]/65 font-light leading-relaxed">
                      Two-decade founder, sales and growth leader, and investor at the intersection of clean energy fintech and purposeful team building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
