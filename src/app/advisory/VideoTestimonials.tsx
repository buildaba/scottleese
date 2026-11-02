"use client";

import { useState } from "react";

interface VideoItem {
  name: string;
  company: string;
  plan: "Complete" | "Coaching";
  videoId: string;
  avatarUrl: string;
  thumbUrl: string;
}

const VIDEO_TESTIMONIALS: VideoItem[] = [
  {
    name: "Tom Curee",
    company: "Qued",
    plan: "Complete",
    videoId: "thkSyCtxbWI",
    avatarUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/69d36afa55a35f5c563d360e_1728411660811.jpg",
    thumbUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/69d36f26be4d2c2250bbcc39_thkSyCtxbWI_maxresdefault.jpg",
  },
  {
    name: "Michael Caney",
    company: "Highway",
    plan: "Complete",
    videoId: "TD7YgfmHN0w",
    avatarUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/680e890c66f6511b23b87fcc_1654720445082.jpg",
    thumbUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/68468d698225cafe7ef191ca_hqdefault%5B1%5D.jpg",
  },
  {
    name: "Alan Ismaj",
    company: "Rippling",
    plan: "Coaching",
    videoId: "C5n95aXL2q4",
    avatarUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6865ffddb90f2b3479abb415_1669071616044.jpg",
    thumbUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/68660255c500cefa5ae795f3_maxresdefault.jpg",
  },
  {
    name: "Rob Reyes",
    company: "Mixpanel",
    plan: "Coaching",
    videoId: "OAsMNRxzVtE",
    avatarUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6865ffd290b60d53e3244d15_1652649096401.jpg",
    thumbUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6866030bc0d35bf95902d1f4_0%5B1%5D.jpg",
  },
  {
    name: "Mark Fleming",
    company: "DataFlik",
    plan: "Complete",
    videoId: "jZFGiWE1738",
    avatarUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6a7ba7131dcccecb0262ec24_fleming.jpg",
    thumbUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/68d59634d2abce4a92bcfb17_markfleming.png",
  },
  {
    name: "Michael Worden",
    company: "Right-Sized Inventory",
    plan: "Complete",
    videoId: "Y7dMCxwg4no",
    avatarUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/680e8bbc30829777aee005c2_1744260521433.jpg",
    thumbUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/68468d49f828a1d298a86e5e_hqdefault%5B1%5D.jpg",
  },
  {
    name: "Tony Guarascio",
    company: "Constrafor",
    plan: "Complete",
    videoId: "6cWlGSWhpxI",
    avatarUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/6a7ba70a53902071690d2acf_guarascio.jpg",
    thumbUrl: "https://cdn.prod.website-files.com/65bb46f3cda2eaefd1064ee3/691eca8308be9347aa3ffaaa_hqdefault.jpg",
  },
];

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
      {VIDEO_TESTIMONIALS.map((item) => {
        const isPlaying = activeVideoId === item.videoId;
        return (
          <div key={item.videoId} className="bg-[#fcfaf8] p-6 flex flex-col justify-between">
            <div className="relative aspect-video bg-[#111111] mb-6 overflow-hidden border border-black/10">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                  title={`${item.name} - ${item.company} Testimonial`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveVideoId(item.videoId)}
                  className="group relative w-full h-full block text-left"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbUrl}
                    alt={`${item.name} from ${item.company}`}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#fcfaf8] text-[#111111] flex items-center justify-center shadow-lg group-hover:bg-[#d9534f] group-hover:text-white transition-colors">
                      <span className="ml-1 text-lg">▶</span>
                    </div>
                  </div>
                </button>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover grayscale border border-black/10"
                />
                <div>
                  <div className="font-serif text-lg text-[#111111] leading-tight">{item.name}</div>
                  <div className="text-xs text-[#111111]/60 font-medium uppercase tracking-widest mt-0.5">
                    {item.company}
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] border border-black/15 text-[#111111]/70 font-medium">
                {item.plan}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
