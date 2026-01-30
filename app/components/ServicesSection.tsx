'use client'

import { motion } from 'framer-motion'
import { Code, Search, Zap } from 'lucide-react'

const services = [
    {
        icon: Code,
        title: "Full Stack Web Development",
        description: "Building high-performance, scalable web applications with Next.js, React, and modern technologies for optimal user experience and business growth.",
        features: [
            "Next.js & React Applications",
            "Responsive & Accessible Design",
            "API Development & Integration",
            "Performance Optimization"
        ],
        gradient: "from-blue-500/10 to-blue-600/10",
        iconGradient: "from-blue-500 to-blue-600"
    },
    {
        icon: Search,
        title: "SEO & Performance Optimization",
        description: "Comprehensive SEO strategies and performance tuning to improve rankings, user experience, and conversion rates across all platforms.",
        features: [
            "Core Web Vitals Optimization",
            "Technical SEO Implementation",
            "Analytics & Performance Tracking",
            "Conversion Rate Optimization"
        ],
        gradient: "from-purple-500/10 to-purple-600/10",
        iconGradient: "from-purple-500 to-purple-600"
    },
    {
        icon: Zap,
        title: "AI Integration for Businesses",
        description: "Implementing custom AI solutions that automate processes, generate insights, and drive revenue growth while saving valuable time.",
        features: [
            "Business Process Automation",
            "AI-Powered Analytics & Insights",
            "Revenue-Generating AI Solutions",
            "Time-Saving Implementations"
        ],
        gradient: "from-emerald-500/10 to-cyan-500/10",
        iconGradient: "from-emerald-500 to-cyan-500"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0">
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[80px_80px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black_30%,transparent_100%)]"></div>

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-64 h-64 bg-linear-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -15, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-10 w-80 h-80 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
                />

                {/* Geometric Shapes */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple-500/20 to-transparent"></div>

                {/* Corner Accents */}
                <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-blue-400/30"></div>
                <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-purple-400/30"></div>
                <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-cyan-400/30"></div>
                <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-pink-400/30"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-[35px] md:text-[42px] lg:text-[55px] font-bold text-white mb-3 font-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        My <span className="text-gradient bg-linear-to-r from-blue-400 to-purple-400">Core Services</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-body"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Three specialized areas where I deliver exceptional results:
                        Modern web development, search engine optimization, and AI business integration.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5
                            }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute -inset-0.5 bg-linear-to-r ${service.iconGradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300`}></div>

                            {/* Main Card */}
                            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-8 group-hover:border-white/20 transition-all duration-300 h-full">
                                {/* Icon Container */}
                                <div className={`relative mb-6 inline-flex items-center justify-center p-3 bg-linear-to-r ${service.iconGradient} rounded-xl text-white shadow-lg`}>
                                    <service.icon size={28} />
                                    {/* Icon Glow */}
                                    <div className={`absolute inset-0 bg-linear-to-r ${service.iconGradient} rounded-xl blur opacity-50`}></div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl lg:text-[26px] font-bold text-white mb-4 font-heading group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-300 text-lg lg:text-xl font-light mb-6 leading-relaxed font-body">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (index * 0.1) + (featureIndex * 0.1) + 0.3 }}
                                            className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                                        >
                                            <div className={`w-2 h-2 bg-linear-to-r ${service.iconGradient} rounded-full mr-3 shrink-0`} />
                                            <span className="font-body text-[16px] lg:text-lg">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Hover Border Animation */}
                                <div className={`absolute inset-0 rounded-xl bg-linear-to-r ${service.iconGradient} opacity-0 group-hover:opacity-100 transition duration-300 -z-10`}>
                                    <div className="absolute inset-0.5 rounded-xl bg-slate-800/95 backdrop-blur-sm"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-20 relative"
                >
                    {/* Stats Background */}
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-white/10"></div>

                    {/* Animated Orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.1, 1, 1.1],
                            opacity: [0.4, 0.2, 0.4],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"
                    />

                    <div className="relative z-10 p-12 text-white text-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                { number: "90+", label: "Lighthouse Score", icon: "⚡" },
                                { number: "100%", label: "Client Satisfaction", icon: "🎯" },
                                { number: "24/7", label: "Support", icon: "🛠️" },
                                { number: "Fast", label: "Delivery", icon: "🚀" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                    className="text-center"
                                >
                                    <div className="text-2xl mb-2">{stat.icon}</div>
                                    <div className="text-3xl md:text-4xl font-bold mb-2 font-heading">
                                        {stat.number}
                                    </div>
                                    <div className="text-blue-100 text-sm md:text-base font-body">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}