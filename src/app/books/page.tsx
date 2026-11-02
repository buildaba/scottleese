export const metadata = {
  title: 'Books by Scott Leese — 3x Bestselling Author',
  description:
    'Three books on sales and leadership: Addicted to the Process, From Rep to Manager, and More Than a Number: The Modern VP Sales Playbook.',
};

const books = [
  {
    title: 'Addicted to the Process',
    subtitle: 'How to Close Transactional Sales with Confidence and Consistency',
    badge: 'Amazon #1 Bestseller',
    coverUrl:
      'https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/65c520d9f44d1c765879f03f_61hwUtmRVWL._SY466_%5B1%5D.jpg',
    amazonLink:
      'https://www.amazon.com/Addicted-Process-Transactional-Confidence-Consistency-ebook/dp/B071SB4FZN',
    audibleLink:
      'https://www.audible.com/pd/Addicted-to-the-Process-Audiobook/B07PB44181',
    description:
      'In Addicted to the Process, top sales leader Scott Leese injects you with a powerful shot of adrenaline and teaches you how to drill habits that build your confidence, use the addiction model to close deals like an all-star, stick to a proven process, and hit milestones that drive you toward your real goals.',
    bullets: [
      'Drill habits that build your confidence as a salesperson',
      'Use the addiction model to close deals like an all-star',
      'Stick to a proven process to blow up your numbers',
      'Hit milestones that drive you toward your real goals',
    ],
  },
  {
    title: 'From Rep to Manager',
    subtitle: 'A Step by Step Guide for Taking the Leap into Sales Leadership',
    badge: 'Sales Management Playbook',
    coverUrl:
      'https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/65c51e412ac1786798e231fd_71w-R9r5XFL._SY466_%5B1%5D.jpg',
    amazonLink:
      'https://www.amazon.com/Rep-Manager-Guide-Taking-Leadership-ebook/dp/B08R6G19LZ',
    audibleLink: null,
    description:
      'If you’ve ever considered a transition from sales rep to sales manager, this book is for you. It will help you evaluate the move, prepare and position yourself to take on the challenge, nail the interview, and perform at a high level starting on day one.',
    bullets: [
      'Audit your motivations before making the jump into leadership',
      'Position yourself to nail the sales manager interview',
      'Define the exact coaching and operational skills required on day one',
      'Avoid the voluntary turnover traps that sink first-time managers',
    ],
  },
  {
    title: 'More Than a Number',
    subtitle: 'The Modern VP Sales Playbook',
    badge: 'Executive Leadership Playbook',
    coverUrl:
      'https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/65c51db4f944489db5e72182_61SwKehA6dS._SY466_%5B1%5D.jpg',
    amazonLink:
      'https://www.amazon.com/More-Than-Number-Modern-Playbook/dp/0998405493/',
    audibleLink: null,
    description:
      'As a sales leader in your company, you know the high stakes of hitting sales numbers. But how do you go to the next level, thrive in your current position, and lead your team? Scott Leese presents a powerful playbook drawing on decades of experience and interviews with top industry leaders.',
    bullets: [
      'Sales Directors will discover how to prepare for the next coveted role',
      'VPs of Sales will find out how to thrive in this high-pressure position',
      'CEO/Founders will gain strategies to empower their VP of Sales for growth',
      'Insider strategies to catapult both your career and company revenue',
    ],
  },
];

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-black/10 text-[#111111]/70 text-sm font-medium tracking-wide">
          Books by Scott Leese
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.1]">
          Get Tactical Knowledge to Level Up Your Career.
        </h1>
        <p className="text-xl md:text-2xl text-[#111111]/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Three bestselling playbooks for individual contributors, front-line sales managers, VPs of Sales, and startup founders.
        </p>
      </section>

      {/* Books Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-black/10">
        <div className="space-y-12">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-white border border-black/10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Real Book Cover */}
              <div className="lg:col-span-4 flex justify-center bg-[#f5f4ef] p-8 border border-black/10">
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block shadow-xl hover:scale-[1.02] transition-transform"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="max-h-80 w-auto object-contain"
                  />
                </a>
              </div>

              {/* Book Details */}
              <div className="lg:col-span-8">
                <div className="inline-block px-3 py-1 bg-[#f5f4ef] border border-black/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#111111] mb-4">
                  {book.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#111111] mb-2">
                  {book.title}
                </h2>
                <p className="text-sm uppercase tracking-[0.15em] text-[#111111]/55 font-medium mb-6">
                  {book.subtitle}
                </p>

                <p className="text-[#111111]/70 font-light leading-relaxed mb-6">
                  {book.description}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-sm text-[#111111]/80 font-light">
                  {book.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="text-[#111111] font-semibold">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-black/10">
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                  >
                    Buy on Amazon &rarr;
                  </a>
                  {book.audibleLink && (
                    <a
                      href={book.audibleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 border border-black/20 hover:border-[#111111] text-[#111111] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                    >
                      Listen on Audible
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verbatim Jeffrey Gitomer Endorsement from scottleeseconsulting.com/books */}
      <section className="py-28 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif leading-[1.35] text-[#111111] mb-8 italic">
          &ldquo;Buy, read, and implement this book if you&apos;re new to sales, struggling in sales or struggling in life and looking for a success path. Scott has walked the same path he&apos;s writing about. Honest, truthful, and applicable to the real world. Highly recommended.&rdquo;
        </h2>
        <div className="w-12 h-px bg-black/20 mx-auto mb-6"></div>
        <p className="text-[#111111]/60 uppercase tracking-[0.2em] text-xs font-medium">
          &mdash; Jeffrey Gitomer, Author of The Little Red Book of Selling
        </p>
      </section>

      {/* Bulk Orders */}
      <section className="py-24 px-6 border-t border-black/10 bg-[#f5f4ef]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6 text-[#111111]">
            Bulk Orders for Your Sales Team or SKO
          </h2>
          <p className="text-lg text-[#111111]/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Want signed or bulk copies for your sales team, SKO keynote, or leadership offsite? We offer discounted bulk pricing for orders of 25+ copies.
          </p>
          <a
            href="mailto:scott@scottleeseconsulting.com?subject=Bulk%20Book%20Order"
            className="inline-block px-8 py-4 bg-[#111111] text-white hover:bg-[#333333] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Inquire About Bulk Orders
          </a>
        </div>
      </section>
    </div>
  );
}
