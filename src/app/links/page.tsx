import Link from "next/link";

export const metadata = {
  title: "Links | Scott Leese",
  description: "All of Scott Leese's active projects, companies, and links.",
};

const links = [
  { title: "Advisory Services ($0 → $25M)", url: "/advisory", type: "internal" },
  { title: "The SLC Talent Bench (GTM Recruiting)", url: "/talent", type: "internal" },
  { title: "Surf & Sales Summit & B2B Buyouts", url: "/events", type: "internal" },
  { title: "Book Me to Speak (SKOs & Keynotes)", url: "/speaking", type: "internal" },
  { title: "The Leese Effect (153 Field Notes)", url: "/blog", type: "internal" },
  { title: "2026 Sponsorship & Media Kit", url: "/media", type: "internal" },
  { title: "Podcasts (What's Your Story? + 100 Guest Eps)", url: "/podcast", type: "internal" },
  { title: "Milos Ventures Syndicate", url: "/invest", type: "internal" },
  { title: "GetBrokerOS", url: "https://getbrokeros.ai", type: "external" },
  { title: "The Good Dog Co", url: "https://the-gooddog.co", type: "external" },
];

const books = [
  { title: "Addicted to the Process", url: "https://www.amazon.com/Addicted-Process-Transactional-Confidence-Consistency-ebook/dp/B071SB4FZN" },
  { title: "From Rep to Manager", url: "https://www.amazon.com/Rep-Manager-Guide-Taking-Leadership-ebook/dp/B08R6G19LZ" },
  { title: "More Than a Number: Modern VP Sales Playbook", url: "https://www.amazon.com/More-Than-Number-Modern-Playbook/dp/0998405493/" },
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
        <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-black/10 text-sm">
          <a href="https://www.linkedin.com/in/scottleese/" target="_blank" rel="noopener noreferrer" className="text-[#111111]/60 hover:text-[#111111]">LinkedIn</a>
          <a href="https://www.instagram.com/thescottleese" target="_blank" rel="noopener noreferrer" className="text-[#111111]/60 hover:text-[#111111]">Instagram</a>
          <a href="https://www.tiktok.com/@therealscottleese" target="_blank" rel="noopener noreferrer" className="text-[#111111]/60 hover:text-[#111111]">TikTok</a>
          <a href="https://www.youtube.com/@thescottleese" target="_blank" rel="noopener noreferrer" className="text-[#111111]/60 hover:text-[#111111]">YouTube</a>
          <a href="https://x.com/thescottleese" target="_blank" rel="noopener noreferrer" className="text-[#111111]/60 hover:text-[#111111]">X</a>
        </div>
      </div>
    </div>
  );
}
