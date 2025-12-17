/** @type {import('next').NextConfig} */
const nextConfig = {allowedDevOrigins: ["https://mandala.oracle.marionetmarin.fr"],
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
