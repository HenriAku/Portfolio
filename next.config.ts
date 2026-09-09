import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 AJOUTEZ CETTE LIGNE ABSOLUMENT
  images: {
    unoptimized: true, // 👈 AJOUTEZ CELA AUSSI (évite les erreurs avec les images sur Netlify)
  },
};

export default nextConfig;