'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Search, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden py-30">
            <div className="absolute inset-0">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

                {/* Floating Shapes */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                />

                {/* Geometric Lines */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-linear-to-b from-transparent via-blue-500/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-500/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-linear-to-t from-transparent via-purple-500/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
                    {/* Text Content - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.h1
                            className="text-[35px] leading-12 md:text-5xl md:leading-14 lg:text-[62px] lg:leading-18 font-bold mb-6 font-heading"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <span className="text-white">Full Stack </span>
                            <span className="text-gradient bg-linear-to-r from-blue-400 to-purple-400">
                                Developer
                            </span>
                            <br />
                            <span className="text-white">AI & SEO </span>
                            <span className="text-gradient bg-linear-to-r from-emerald-400 to-cyan-400">
                                Specialist
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-body max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Building high-performance websites, optimizing for search engines,
                            and integrating AI to drive business growth and efficiency.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center text-[17px] mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Link
                                href="/portfolio"
                                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 group font-body shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                            >
                                View My Work
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                            <Link
                                href="/contact"
                                className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 font-body backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-105"
                            >
                                Contact Me
                            </Link>
                        </motion.div>

                        {/* Feature Cards */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            {[
                                {
                                    icon: Zap,
                                    title: 'AI Integration',
                                    desc: 'Business Automation & Efficiency',
                                    gradient: 'from-emerald-500/20 to-cyan-500/20'
                                },
                                {
                                    icon: Code,
                                    title: 'Modern Dev',
                                    desc: 'Next.js, React, TypeScript',
                                    gradient: 'from-blue-500/20 to-blue-600/20'
                                },
                                {
                                    icon: Search,
                                    title: 'SEO Expert',
                                    desc: 'Core Web Vitals Optimization',
                                    gradient: 'from-purple-500/20 to-purple-600/20'
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className={`bg-linear-to-br ${item.gradient} backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group`}
                                >
                                    <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors mx-auto">
                                        <item.icon className="text-white" size={20} />
                                    </div>
                                    <h3 className="font-semibold text-white mb-1 font-heading text-[15px">{item.title}</h3>
                                    <p className="text-gray-300 text-[13px] font-body">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Profile Picture - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex-1 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Outer Glow */}
                            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>

                            {/* Main Profile Container */}
                            <div className="relative w-64 h-64 md:w-88 md:h-88 rounded-full border-2 border-white/10 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm overflow-hidden">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src="/images/profile.png"
                                        alt="Your Name - AI Integration & Web Development Expert"
                                        fill
                                        sizes="(max-width: 768px) 256px, 352px"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Elements Around Profile */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -top-4 -left-4 w-72 h-72 md:w-96 md:h-96 border border-blue-400/30 rounded-full"
                            />
                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -top-8 -left-8 w-80 h-80 md:w-104 md:h-104 border border-purple-400/20 rounded-full"
                            />

                            {/* Tech Badges */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                className="absolute -top-2 -right-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border border-white/10"
                            >
                                Next.js
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.7, duration: 0.5 }}
                                className="absolute -bottom-2 -left-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border border-white/10"
                            >
                                SEO Expert
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.9, duration: 0.5 }}
                                className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-linear-to-r from-emerald-600 to-cyan-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border border-white/10"
                            >
                                AI Integration
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-white/50 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}