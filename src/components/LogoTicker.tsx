"use client";

import React from "react";

export interface LogoItem {
  name: string;
  src?: string;
  svg?: React.ReactNode;
}

// Row 1 from scottleeseconsulting.com (Top-Tier & Exits)
const ROW_1_LOGOS: LogoItem[] = [
  { name: "Jasper", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685787a1a7ab991510a16969_Jasper.svg" },
  { name: "Outreach", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685788277dfd7227b82850ff_Outreach.svg" },
  { name: "Atmosphere", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857866b01201c61d76311e9_Atmosphere.svg" },
  { name: "Notion", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857861f9f296894710bf5d6_Notion.svg" },
  { name: "HubSpot", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857877ea9c137575bae774f_HubSpot.svg" },
  { name: "Salesforce", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857ae0c3538fc9ed8a4f272_Salesforce.svg" },
  { name: "Gong", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685786ee90cbd2781870a202_Gong.svg" },
  { name: "ZenBusiness", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857ae85a77e8d025cab82bc_ZenBusiness.svg" },
  { name: "SumUp", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857ae3a13760a2f76e63ea3_SumUp.svg" },
  { name: "Heyday", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857874c0c3c0853731fb280_Heyday.svg" },
  { name: "Salesloft", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857adfcceb5eedbba00f2c1_Salesloft.svg" },
  { name: "Google", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685786ff66dec006c81ea9e8_Google.svg" },
  { name: "Qualia", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/68578849faa270cde183a2ea_Qualia.svg" },
  { name: "WorkWise (RigUp)", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857ae7aa7ec7380abdb0880_WorkWise%20(formerly%20RigUp).svg" },
];

// Row 2 from scottleeseconsulting.com (Unicorns & Exits)
const ROW_2_LOGOS: LogoItem[] = [
  { name: "Konnecto", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685f6c030895d64ddc6b8885_konnecto.svg" },
  { name: "Spiff", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685f69a16c0bc9d82d460e39_Spiff.svg" },
  { name: "One Planet Group (Reply)", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857881d5fcf4a168c4ce2d4_One%20Planet%20Group%20(formerly%20Reply).svg" },
  { name: "OutboundEngine", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685f6ad2e56bb648ebe77312_OutboundEngine.svg" },
  { name: "NICE (MindTouch)", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685787f96cb424b978d62e50_NICE%20(formerly%20MindTouch).svg" },
  { name: "Revel Systems", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857adcd629888172912e554_Revel%20Systems.svg" },
  { name: "Pingboard", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/68578836467b66c1a5022997_Pingboard.svg" },
  { name: "Indio", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857878e9974e33b2e9e171a_Indio.svg" },
  { name: "Upstart (Prodigy)", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857ae6bd9a93b3fd08b564a_Upstart%20(formerly%20Prodigy).svg" },
  { name: "Heyday", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857874c0c3c0853731fb280_Heyday.svg" },
  { name: "Salesloft", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857adfcceb5eedbba00f2c1_Salesloft.svg" },
  { name: "Hoopla", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/68578773467b66c1a50206d5_Hoopla.svg" },
  { name: "FiveStars", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685786df00a40d4c5f99fae9_FiveStars.svg" },
];

// Row 3 from scottleeseconsulting.com (On Deck)
const ROW_3_LOGOS: LogoItem[] = [
  { name: "Qued", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/69d3653458e7d22f7e6a8cef_Qued.svg" },
  { name: "Gravy", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857872cd10449795fdce962_Gravy.svg" },
  { name: "StratiFi", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857ae2c68c32eca04f247a1_StratiFi.svg" },
  { name: "Kojo", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685787afd5ba8cd0210d1310_Kojo.svg" },
  { name: "FitGrid", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685786c4cd08c5e1b5d39b9b_FitGrid.svg" },
  { name: "RevGenius", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857addd7bfcad97ada41cf3_RevGenius.svg" },
  { name: "UpEquity", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685f6a22bdb18cff30ceff6d_UpEquity.svg" },
  { name: "Rev", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857886fd10449795fdd2ac0_Rev.svg" },
  { name: "Affinity", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857868689c7f56da210d3a0_Affinity.svg" },
  { name: "LeadGenius", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685787dc00a40d4c5f9a277f_LeadGenius.svg" },
  { name: "Talroo", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857ae4fd5ba8cd021156af5_Talroo.svg" },
  { name: "BeckTech", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685786799974e33b2e9dea4a_BeckTech.svg" },
  { name: "Lavender", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/685787c92a5154ac8831e3dc_Lavender.svg" },
  { name: "Hearth", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857873d84ecb97b86a324b6_Hearth.svg" },
  { name: "ResearchGate", src: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6857885e5786cdd558d0aff7_ResearchGate.svg" },
];

// Custom monochrome vector SVGs for Creator Brand Sponsors not in the consulting Webflow CDN
const SPONSOR_LOGOS: Record<string, LogoItem> = {
  "Apollo.io": {
    name: "Apollo.io",
    svg: (
      <svg className="h-9 md:h-10 w-auto fill-current text-[#111111]" viewBox="0 0 185 44" fill="none">
        <path d="M21 6L6 38H13.5L16.8 30.5H25.2L28.5 38H36L21 6ZM19.2 24.5L21 19.5L22.8 24.5H19.2Z" fill="currentColor" />
        <circle cx="21" cy="22" r="18" stroke="currentColor" strokeWidth="3" fill="none" />
        <text x="48" y="30" fill="currentColor" fontFamily="sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.5">Apollo.io</text>
      </svg>
    ),
  },
  Nooks: {
    name: "Nooks",
    svg: (
      <svg className="h-9 md:h-10 w-auto text-[#111111]" viewBox="0 0 155 44" fill="none">
        <rect x="4" y="8" width="28" height="28" rx="7" stroke="currentColor" strokeWidth="3.5" />
        <path d="M12 28V16L24 28V16" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="42" y="30" fill="currentColor" fontFamily="sans-serif" fontWeight="800" fontSize="25" letterSpacing="-0.5">nooks</text>
      </svg>
    ),
  },
  Rox: {
    name: "Rox",
    svg: (
      <svg className="h-9 md:h-10 w-auto text-[#111111]" viewBox="0 0 125 44" fill="none">
        <polygon points="18,6 32,22 18,38 4,22" fill="currentColor" />
        <text x="40" y="31" fill="currentColor" fontFamily="sans-serif" fontWeight="800" fontSize="26" letterSpacing="1.5">ROX</text>
      </svg>
    ),
  },
  Deel: {
    name: "Deel",
    svg: (
      <svg className="h-9 md:h-10 w-auto text-[#111111]" viewBox="0 0 120 44" fill="none">
        <text x="6" y="32" fill="currentColor" fontFamily="sans-serif" fontWeight="900" fontSize="32" letterSpacing="-1.5">deel.</text>
      </svg>
    ),
  },
  Orum: {
    name: "Orum",
    svg: (
      <svg className="h-9 md:h-10 w-auto text-[#111111]" viewBox="0 0 140 44" fill="none">
        <circle cx="18" cy="22" r="12" stroke="currentColor" strokeWidth="4" />
        <circle cx="18" cy="22" r="4" fill="currentColor" />
        <text x="38" y="30" fill="currentColor" fontFamily="sans-serif" fontWeight="700" fontSize="25" letterSpacing="0.5">ORUM</text>
      </svg>
    ),
  },
  Sendoso: {
    name: "Sendoso",
    svg: (
      <svg className="h-9 md:h-10 w-auto text-[#111111]" viewBox="0 0 165 44" fill="none">
        <path d="M6 22L28 10L20 34L15 24L6 22Z" fill="currentColor" />
        <text x="36" y="30" fill="currentColor" fontFamily="sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.5">Sendoso</text>
      </svg>
    ),
  },
  Scratchpad: {
    name: "Scratchpad",
    svg: (
      <svg className="h-9 md:h-10 w-auto text-[#111111]" viewBox="0 0 190 44" fill="none">
        <rect x="4" y="10" width="22" height="24" rx="4" stroke="currentColor" strokeWidth="3" />
        <line x1="9" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="2.5" />
        <line x1="9" y1="23" x2="17" y2="23" stroke="currentColor" strokeWidth="2.5" />
        <text x="34" y="29" fill="currentColor" fontFamily="sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.5">Scratchpad</text>
      </svg>
    ),
  },
  Clay: {
    name: "Clay",
    svg: (
      <svg className="h-9 md:h-10 w-auto text-[#111111]" viewBox="0 0 125 44" fill="none">
        <circle cx="14" cy="22" r="9" fill="currentColor" />
        <path d="M23 13C28 13 32 17 32 22C32 27 28 31 23 31" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <text x="40" y="30" fill="currentColor" fontFamily="sans-serif" fontWeight="800" fontSize="26" letterSpacing="-0.8">Clay</text>
      </svg>
    ),
  },
};

const ALL_LOGOS_BY_NAME: Record<string, LogoItem> = {};
[...ROW_1_LOGOS, ...ROW_2_LOGOS, ...ROW_3_LOGOS].forEach((item) => {
  ALL_LOGOS_BY_NAME[item.name.toLowerCase()] = item;
  // Also index without parenthetical suffix
  const baseName = item.name.split(" (")[0].trim().toLowerCase();
  ALL_LOGOS_BY_NAME[baseName] = item;
});
Object.entries(SPONSOR_LOGOS).forEach(([key, item]) => {
  ALL_LOGOS_BY_NAME[key.toLowerCase()] = item;
});

function MarqueeRow({
  items,
  reverse = false,
  label,
}: {
  items: LogoItem[];
  reverse?: boolean;
  label?: string;
}) {
  return (
    <div className="relative py-6">
      <div className="w-full overflow-hidden relative flex items-center">
        {/* Left/Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#fcfaf8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#fcfaf8] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex w-fit ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          } hover:[animation-play-state:paused] items-center`}
        >
          {[...Array(3)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex items-center shrink-0">
              {items.map((logo, idx) => (
                <div
                  key={`${arrayIndex}-${idx}-${logo.name}`}
                  className="mx-8 md:mx-12 flex items-center justify-center opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0"
                  title={logo.name}
                >
                  {logo.src ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-9 md:h-11 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  ) : (
                    logo.svg
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {label && (
        <div className="text-center mt-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111]/35 font-medium">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function LogoTicker({
  companies,
  multiRow = true,
}: {
  companies?: string[];
  multiRow?: boolean;
}) {
  // If custom companies array is passed (e.g., on /media), map them to their real SVG logos
  if (companies && companies.length > 0 && multiRow === false) {
    const resolvedLogos: LogoItem[] = companies
      .map((name) => ALL_LOGOS_BY_NAME[name.toLowerCase()])
      .filter(Boolean);

    return (
      <div className="w-full bg-[#fcfaf8] border-y border-black/10 py-6">
        <MarqueeRow items={resolvedLogos} />
      </div>
    );
  }

  // Default: Full 3-row counter-scrolling real SVG logo showcase from scottleeseconsulting.com
  return (
    <div className="w-full bg-[#fcfaf8] border-y border-black/10 divide-y divide-black/5">
      <MarqueeRow items={ROW_1_LOGOS} reverse={false} label="Exits" />
      <MarqueeRow items={ROW_2_LOGOS} reverse={true} label="Unicorns" />
      <MarqueeRow items={ROW_3_LOGOS} reverse={false} label="On Deck" />
    </div>
  );
}
