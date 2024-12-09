import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fakestoreapi.com',
				port: '',
				pathname: '/img/**',
				search: '',
			},
		],
	},
}

// module.exports = {}

export default nextConfig
