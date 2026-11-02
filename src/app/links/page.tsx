import Link from "next/link";

export const metadata = {
  title: "Links | Scott Leese",
  description: "All of Scott Leese's active projects, companies, and links.",
};

const links = [
  { title: "Advisory Services", url: "/advisory", type: "internal" },
  { title: "Sponsorship & Media Kit", url: "/media", type: "internal" },
  { title: "Book Me to Speak", url: "/speaking", type: "internal" },
  { title: "The Leese Effect Newsletter", url: "/newsletter", type: "internal" },
  { title: "Surf & Sales Event", url: "https://surfandsales.com", type: "external" },
  { title: "GetBrokerOS", url: "https://getbrokeros.ai", type: "external" },
  { title: "The Good Dog Co", url: "https://the-gooddog.co", type: "external" },
  { title: "What's Your Story Podcast", url: "https://whatsyourstorypod.com", type: "external" },
  { title: "Milos Ventures Syndicate", url: "https://venture.angellist.com/v/milosventures/syndicate", type: "external" },
];

const books = [
  { title: "Addicted to the Process", url: "https://www.amazon.com/dp/B07DKFNPRX" },
  { title: "From Rep to Manager", url: "https://www.amazon.com/dp/B09TZZN1N7" },
  { title: "More Than a Number", url: "https://www.amazon.com/dp/B0D1J9GPN4" },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111] py-20 px-6">
      <div className="max-w-xl mx-auto mt-12">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 rounded-full bg-white border border-black/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-serif text-[#111111]/40">SL</span>
          </div>
          <h1 className="text-3xl font-serif tracking-tight text-[#111111] mb-2">Scott Leese</h1>
          <p className="text-[#111111]/60 font-light">6x Sales Leader. 3x Bestselling Author.</p>
        </div>

        {/* Core Links */}
        <div className="space-y-4 mb-12">
          {links.map((link, idx) => (
            link.type === "internal" ? (
              <Link 
                key={idx} 
                href={link.url}
                className="block w-full py-4 px-6 bg-white border border-black/10 hover:border-black/30 hover:shadow-sm text-center font-medium text-[#111111] transition-all"
              >
                {link.title}
              </Link>
            ) : (
              <a 
                key={idx} 
                href={link.url}
                target="_blank" rel="noopener noreferrer"
                className="block w-full py-4 px-6 bg-white border border-black/10 hover:border-black/30 hover:shadow-sm text-center font-medium text-[#111111] transition-all"
              >
                {link.title}
              </a>
            )
          ))}
        </div>

        {/* Books Section */}
        <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-[#111111]/50 font-medium text-center mb-6">
          Bestselling Books
        </h2>
        <div className="space-y-4 mb-12">
          {books.map((book, idx) => (
            <a 
              key={idx} 
              href={book.url}
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-[#111111] hover:bg-[#333333] text-center font-medium text-white transition-all"
            >
              {book.title}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 pt-8 border-t border-black/10">
          <a href="https://linkedin.com/in/scottleese" className="text-[#111111]/50 hover:text-[#111111]">LinkedIn</a>
          <a href="https://instagram.com/thescottleese" className="text-[#111111]/50 hover:text-[#111111]">Instagram</a>
          <a href="https://tiktok.com/@therealscottleese" className="text-[#111111]/50 hover:text-[#111111]">TikTok</a>
          <a href="https://twitter.com/thescottleese" className="text-[#111111]/50 hover:text-[#111111]">X</a>
        </div>
      </div>
    </div>
  );
}
