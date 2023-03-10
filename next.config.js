/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.linkpicture.com",
      "lh3.googleusercontent.com",
      "media.istockphoto.com",
      "i.pinimg.com",
      "www.amzonestep.com",
      "res.cloudinary.com",
      "i.ibb.co",
    ],
  },
  experimental: {
    largePageDataBytes: 800 * 1000,
  },
}

module.exports = nextConfig
