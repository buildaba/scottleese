import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old Linktree users hitting the lander redirect
      {
        source: "/lander",
        destination: "/links",
        permanent: true,
      },
      // Anyone hitting the old consulting-style paths
      {
        source: "/consulting",
        destination: "/advisory",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/advisory",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/advisory#contact",
        permanent: true,
      },
      {
        source: "/reserve",
        destination: "/events",
        permanent: true,
      },
      {
        source: "/talk-track",
        destination: "/events",
        permanent: true,
      },
      {
        source: "/podcasts",
        destination: "/podcast",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
