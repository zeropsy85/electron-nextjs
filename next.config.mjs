/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
	trailingSlash: true,
	distDir: 'build',
    assetPrefix: '.',
	images: {
		unoptimized : true
	}
}

export default nextConfig
