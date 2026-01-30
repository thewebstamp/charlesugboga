'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

interface PageInfo {
    title: string
    path: string
    description: string
    image: string
}

export default function PageNavigation() {
    const pathname = usePathname()

    const pages: PageInfo[] = [
        {
            title: 'Home',
            path: '/',
            description: 'Discover my skills and services',
            image: '/images/home.jpeg'
        },
        {
            title: 'Portfolio',
            path: '/portfolio',
            description: 'View my latest projects',
            image: '/images/portfolio.jpg'
        },
        {
            title: 'About',
            path: '/about',
            description: 'Learn about my journey',
            image: '/images/about.jpg'
        },
        {
            title: 'Contact',
            path: '/contact',
            description: 'Get in touch with me',
            image: '/images/image1.jpeg'
        }
    ]

    // Filter out current page
    const otherPages = pages.filter(page => page.path !== pathname)

    return (
        <section className="relative py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
            {/* Modern Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

                {/* Floating Shapes */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-[34px] md:text-5xl font-bold text-gray-100 tracking-wide mb-4 font-heading">
                        Explore More
                    </h2>
                    <p className="text-gray-300 text-xl md:text-2xl font-body max-w-2xl mx-auto">
                        Continue your journey through my portfolio
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {otherPages.map((page, index) => (
                        <motion.div
                            key={page.path}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <Link href={page.path} className="block">
                                {/* Image Container */}
                                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden mb-4">
                                    <div
                                        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                        style={{
                                            backgroundImage: `url(${page.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                                        {/* Page Title Overlay */}
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/10">
                                                {page.title}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-[22px] md:text-2xl font-bold text-white mb-2 font-heading group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                        {page.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 font-body text-[19px] md:text-[21px] font-light">
                                        {page.description}
                                    </p>

                                    {/* Navigation Button */}
                                    <div className="inline-flex items-center gap-2 text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                                        <span className="text-[16px] md:text-lg font-semibold">Explore Page</span>
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Card Glow Effect */}
                                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 -z-10"></div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Navigation Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-gray-300 font-body">
                            Navigate directly:
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {pages.map((page) => (
                                <Link
                                    key={page.path}
                                    href={page.path}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${pathname === page.path
                                        ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white'
                                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}