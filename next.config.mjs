import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import images from 'remark-images'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'],
  },
}

// tailwindui is not configured under images in your next.config.js file

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    mdExtensions: [images],
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },

})

export default withMDX(nextConfig)
