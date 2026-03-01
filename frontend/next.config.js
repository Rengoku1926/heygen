/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public-heygen-bucket-1926.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default config;