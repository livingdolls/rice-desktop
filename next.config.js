/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["res.cloudinary.com"],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "res.cloudinary.com",
			},
		],
	},
};

module.exports = nextConfig;
