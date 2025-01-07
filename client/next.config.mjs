/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s3-wamaya.s3.eu-north-1.amazonaws.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "wamaya.se",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
