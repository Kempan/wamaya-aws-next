/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s3-inventorymanagement.s3.us-east-2.amazonaws.com",
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
