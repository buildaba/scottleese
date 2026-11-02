import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-serif tracking-tight font-extrabold tracking-tight text-[#111111]">
        404
      </h1>
      <p className="mt-4 text-xl text-[#a1a1aa]">
        This page doesn&apos;t exist. But here&apos;s what does:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {[
          { label: "Home", href: "/" },
          { label: "Advisory", href: "/advisory" },
          { label: "Speaking", href: "/speaking" },
          { label: "Events", href: "/events" },
          { label: "Podcast", href: "/podcast" },
          { label: "Invest", href: "/invest" },
          { label: "Media", href: "/media" },
          { label: "Books", href: "/books" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#111111] transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#d97706]"
      >
        Go Home
      </Link>
    </main>
  );
}
