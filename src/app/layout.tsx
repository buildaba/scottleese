import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: "Scott Leese — Sales Leader, Advisor, Creator",
    template: "%s | Scott Leese",
  },
  description:
    "Strategic GTM + RevOps Advisor. 406.5K+ followers. 200+ companies. 12 unicorns. 15 exits. 3x bestselling author. Scale better from $0 to $25M.",
  metadataBase: new URL("https://scottleese.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scottleese.com",
    siteName: "Scott Leese",
    title: "Scott Leese — Sales Leader, Advisor, Creator",
    description:
      "Strategic GTM + RevOps Advisor to 200+ companies, including 12 unicorns and 15 exits. 406.5K+ followers. 3x bestselling author.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@thescottleese",
    creator: "@thescottleese",
    title: "Scott Leese — Sales Leader, Advisor, Creator",
    description:
      "Strategic GTM + RevOps Advisor to 200+ companies, including 12 unicorns and 15 exits.",
  },
  keywords: [
    "Scott Leese",
    "GTM advisor",
    "fractional CRO",
    "sales consulting",
    "startup sales",
    "B2B sales",
    "sales leadership",
    "RevOps",
    "go-to-market strategy",
    "Surf and Sales",
    "Milos Ventures",
  ],
  authors: [{ name: "Scott Leese", url: "https://scottleese.com" }],
  creator: "Scott Leese",
  publisher: "Scott Leese Consulting",
  alternates: {
    canonical: "https://scottleese.com",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${newsreader.variable} font-sans bg-[#fbfaf8] text-[#111111] antialiased min-h-screen flex flex-col tracking-tight selection:bg-[#e0dcd0] selection:text-[#111111]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Scott Leese",
              url: "https://scottleese.com",
              jobTitle: "GTM Advisor & Fractional CRO",
              description:
                "Strategic GTM + RevOps Advisor to 200+ companies, including 12 unicorns and 15 exits. 3x bestselling author.",
              email: "scott@scottleeseconsulting.com",
              sameAs: [
                "https://linkedin.com/in/scottleese",
                "https://instagram.com/thescottleese",
                "https://tiktok.com/@therealscottleese",
                "https://youtube.com/@thescottleese",
                "https://x.com/thescottleese",
              ],
              knowsAbout: [
                "Sales Leadership",
                "Go-To-Market Strategy",
                "Revenue Operations",
                "Startup Scaling",
                "B2B SaaS",
              ],
            }),
          }}
        />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
