'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-5 md:px-8 py-5">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className={`text-[21px] lg:text-2xl font-bold font-heading transition-colors duration-300 ${isScrolled ? 'text-gradient bg-linear-to-r from-blue-400 to-purple-400' : 'text-white'
                            }`}
                    >
                        Charles Ugboga
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-xl font-medium transition-all duration-300 hover:text-blue-400 ${pathname === item.href
                                    ? isScrolled
                                        ? 'text-blue-400'
                                        : 'text-white'
                                    : isScrolled
                                        ? 'text-gray-300 hover:text-blue-400'
                                        : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Resume Download Button - Desktop */}
                        <a
                            href="/documents/Charles_Ugboga_CV.pdf"
                            download="Charles-Ugboga-Resume-WebDev-AI-Specialist.pdf"
                            className="flex items-center gap-2 bg-linear-to-r from-emerald-600 to-cyan-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                        >
                            <Download size={18} />
                            <span>Resume</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 transition-colors duration-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X size={24} className={isScrolled ? 'text-gray-300' : 'text-white'} />
                        ) : (
                            <Menu size={24} className={isScrolled ? 'text-gray-300' : 'text-white'} />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`md:hidden mt-4 space-y-4 pb-4 rounded-lg ${isScrolled ? 'bg-slate-800/95' : 'bg-slate-900/95'
                                } backdrop-blur-md border border-white/10 p-4`}
                        >
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block text-lg font-medium transition-all duration-300 py-2 px-4 rounded-lg ${pathname === item.href
                                        ? 'bg-blue-600/20 text-blue-400 border border-blue-400/20'
                                        : isScrolled
                                            ? 'text-gray-300 hover:text-blue-400 hover:bg-white/5'
                                            : 'text-white/80 hover:text-white hover:bg-white/5'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Resume Download Button - Mobile */}
                            <a
                                href="/documents/Charles_Ugboga_CV.pdf"
                                download="Charles-Ugboga-Resume-WebDev-AI-Specialist.pdf"
                                className="flex items-center justify-center gap-2 bg-linear-to-r from-emerald-600 to-cyan-600 text-white px-4 py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Download size={18} />
                                <span>Download Resume</span>
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}