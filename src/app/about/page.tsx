import Link from "next/link";

export const metadata = {
  title: "About Us | Scott Leese & JM Wilke",
  description:
    "Meet Scott Leese and JM Wilke, the team behind Scott Leese Consulting. 12 unicorns, 15 exits, and 200+ companies accelerated out of Austin, Texas.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 border-b border-black/10">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-[4.5rem] font-serif tracking-tight mb-8 leading-[1.08] text-[#111111]">
            &ldquo;I learned very early in life that you have to make every minute count.&rdquo;
          </h1>
          <p className="text-xl md:text-2xl text-[#111111]/60 leading-relaxed font-light tracking-tight">
            Meet the team behind the playbook that has accelerated over 200 companies, including 12 unicorns and 15 exits.
          </p>
        </div>
      </section>

      {/* Scott's Story */}
      <section className="py-24 px-6 border-b border-black/10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-[4/5] bg-black/5 border border-black/10 mb-6 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/65e902866ce317053dbcd7c2_ScottLeese.jpg"
                  alt="Scott Leese"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h2 className="text-3xl font-serif text-[#111111] mb-1">Scott Leese</h2>
              <p className="text-[#111111]/60 font-medium tracking-[0.18em] uppercase text-xs mb-6">
                Founder &amp; CEO
              </p>
              <div className="flex flex-wrap gap-4 text-sm border-t border-black/10 pt-4">
                <a
                  href="https://www.linkedin.com/in/scottleese/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#111111]/60 hover:text-[#111111] transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://www.instagram.com/thescottleese"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#111111]/60 hover:text-[#111111] transition-colors"
                >
                  Instagram ↗
                </a>
                <a
                  href="https://x.com/thescottleese"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#111111]/60 hover:text-[#111111] transition-colors"
                >
                  X ↗
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
                Scott&apos;s Story
              </div>
              <h3 className="text-3xl font-serif text-[#111111] mb-6">
                From 4 Years in a Hospital Bed to 6x Startup Sales Leader
              </h3>

              <div className="space-y-6 text-[#111111]/80 font-light leading-relaxed text-lg">
                <p>
                  I grew up in the small Northern California town of Chico, where I had no interest or family involvement in business or sales of any kind. My dad taught at Chico State and my mom was a nurse. I played every sport you can think of growing up and ended up getting a two-sport scholarship to Dominican University to play both soccer &amp; tennis.
                </p>

                <p>
                  After school, I did what any sensible young person did whenever they didn&apos;t want to get a real job—I went to grad school. However, upon finishing grad school I grew deathly ill and spent the better part of 4 years in the hospital fighting for my life.
                </p>

                <p className="font-normal text-[#111111] border-l-2 border-[#111111] pl-6 py-1">
                  I&apos;ve had 9 surgeries, lost a major organ, kicked opioid addiction, and lost everything. It was then that sales came into my life.
                </p>

                <p>
                  At 27 years old I was a late entry into the field of sales. I liked the idea of being able to out-work and outperform others and getting paid more if I did so. I picked an early-stage startup because I thought I could learn faster and advance my career easier than at a large corporation.
                </p>

                <p>
                  Six times I was a sales leader at very early-stage companies, taking them from roughly $0 revenue to roughly $25M in ARR—doing so in under 3 years time. I got in, figured out how to sell something, then taught others the process and scaled the business. Then I got out so I could go back to the beginning and do it again.
                </p>

                <p>
                  Of the 200+ companies I&apos;ve worked for or with, I&apos;ve now been a part of 15 exits as an operator and sales advisor, developed a dozen unicorn companies, and hold advisor equity in 50+ startups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JM's Story */}
      <section className="py-24 px-6 border-b border-black/10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-[4/5] bg-black/5 border border-black/10 mb-6 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/65e8a588771af6062b0a2e10_JM%20Wilke.jpg"
                  alt="JM Wilke"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h2 className="text-3xl font-serif text-[#111111] mb-1">JM Wilke</h2>
              <p className="text-[#111111]/60 font-medium tracking-[0.18em] uppercase text-xs mb-6">
                VP of Operations
              </p>
              <div className="flex gap-4 text-sm border-t border-black/10 pt-4">
                <a
                  href="https://www.linkedin.com/in/jmwilke"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#111111]/60 hover:text-[#111111] transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/40 font-medium mb-3">
                Jeanne Marie&apos;s Story
              </div>
              <h3 className="text-3xl font-serif text-[#111111] mb-6">
                From Pre-Med to Revenue Operations Master
              </h3>

              <div className="space-y-6 text-[#111111]/80 font-light leading-relaxed text-lg">
                <p>
                  In the heart of Sacramento, amidst the towering redwoods of Northern California, there lived a girl with 4 names. She grew up wanting to be a doctor, eager to solve problems and help others. But after a disastrous chemistry class, she knew medicine wasn&apos;t her path.
                </p>

                <p>
                  Despite being the smallest kid, JM was known for her fiery determination. This drive led her to Santa Clara University, where she switched gears to business and marketing. Her thirst for adventure and understanding people took her camping across Europe solo, and later to Costa Rica, where she had to hustle for every dollar.
                </p>

                <p>
                  Back home, she found her groove in sales. Talking to people came naturally, fueled by that same red-faced determination of her youth. Yet, it wasn&apos;t just closing deals that excited her—it was the thrill of solving problems and making things more efficient.
                </p>

                <p>
                  Juggling her full-time job and building systems in her free time, she found her niche in Revenue Operations. Now, she&apos;s living her passion, tackling challenges head-on, and crafting the operational engines that power high-growth startups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HTU Soccer Community & Philanthropy Callout */}
      <section className="py-24 px-6 border-b border-black/10 bg-[#f5f4ef]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.2em] text-[#d9534f] font-medium mb-3">
                Community &amp; Philanthropy • Austin, TX
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#111111] mb-4">
                Backing Huston-Tillotson University (HTU) Soccer
              </h2>
              <p className="text-[#111111]/70 font-light leading-relaxed text-lg">
                Beyond building revenue engines, Scott is deeply committed to fundraising and partnering with local Austin businesses to support the Huston-Tillotson University soccer program—providing kits, travel support, and resources for student-athletes.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="mailto:scott@scottleeseconsulting.com?subject=HTU%20Soccer%20Sponsorship%20%26%20Fundraising"
                className="px-8 py-4 bg-[#111111] hover:bg-[#333333] text-white font-medium text-sm transition-colors text-center w-full md:w-auto"
              >
                Partner on HTU Soccer →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#111111] text-[#fcfaf8] text-center px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">Ready to work with us?</h2>
          <p className="text-xl text-white/70 font-light mb-12">
            We partner with growth-minded early-stage companies looking to accelerate revenue.
          </p>
          <Link
            href="/advisory"
            className="px-10 py-4 bg-white hover:bg-white/90 text-[#111111] font-medium text-lg transition-colors inline-block"
          >
            Explore Plans &amp; Pricing →
          </Link>
        </div>
      </section>
    </div>
  );
}
