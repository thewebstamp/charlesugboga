import { Metadata } from 'next'
import { Download, Code, Search, Zap, Brain, Globe } from 'lucide-react'
import Link from 'next/link'
import PageNavigation from '../components/PageNavigation';

export const metadata: Metadata = {
    title: 'About & Resume | Full Stack Developer & AI Integration Specialist',
    description: 'Learn about my journey in web development, SEO optimization, and AI integration. Download my resume for professional opportunities.',
}

const skills = [
    {
        category: "Full Stack Development",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "API Development", "Responsive Design"],
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        category: "SEO & Performance Optimization",
        items: ["Core Web Vitals", "Technical SEO", "PageSpeed Optimization", "Analytics", "Conversion Optimization", "Structured Data"],
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        category: "AI & Business Integration",
        items: ["AI Process Automation", "Business Intelligence", "AI-Powered Analytics", "Revenue Optimization", "Time-Saving Solutions", "Custom AI Integration"],
        gradient: "from-emerald-500/20 to-cyan-500/20"
    }
];

export default function About() {
    return (
        <>
            <div className="min-h-screen bg-slate-900 relative overflow-hidden py-30">
                <div className="absolute inset-0">
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[70px_70px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black_30%,transparent_100%)]"></div>

                    {/* Floating Gradient Orbs */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-linear-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

                    {/* Diagonal Lines */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple-500/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-[55px] font-bold text-white mb-6 font-heading">
                                About <span className="text-gradient bg-linear-to-r from-blue-400 to-purple-400">Me</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 font-body">
                                Passionate developer dedicated to creating exceptional digital experiences
                            </p>
                        </div>

                        {/* Story Section */}
                        <div className="mb-16">
                            {/* Photo as First Timeline Item */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                <div className="relative group">
                                    <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300 hover:shadow-xl h-full">
                                        <div className="absolute -top-3 -left-3">
                                            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold font-body shadow-lg">
                                                Start
                                            </div>
                                        </div>

                                        {/*Photo Container */}
                                        <div className="flex flex-col items-center justify-center py-8">
                                            <div className="relative mb-6">
                                                {/* Outer Glow */}
                                                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>

                                                {/* Photo Circle */}
                                                <div className="relative w-48 h-48 rounded-full border-2 border-white/10 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm overflow-hidden">
                                                    <div
                                                        className="w-full h-full bg-cover bg-center rounded-full"
                                                        style={{
                                                            backgroundImage: 'url(/images/profile.png)',
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center'
                                                        }}
                                                    />
                                                </div>

                                                {/* Rotating Border */}
                                                <div className="absolute -top-4 -left-4 w-56 h-56 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="text-center">
                                                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                                                    My Journey
                                                </h3>
                                                <p className="text-gray-300 font-body text-lg md:text-xl font-light">
                                                    A timeline of my growth and progress
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow pointing to next section */}
                                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 lg:hidden">
                                            <div className="w-6 h-6 text-blue-400">
                                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Arrow to next card */}
                                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                                        <div className="flex items-center gap-2">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-blue-400">
                                                <path
                                                    d="M10 20 C15 15, 25 15, 30 20"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                                <path
                                                    d="M28 16 L32 20 L28 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* First Story Card (2016) */}
                                <div className="relative group">
                                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-white/10 border-l-4 border-l-blue-500 p-6 md:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-xl h-full">
                                        {/* Year and Icon */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="px-3 py-1 rounded-full text-sm font-bold text-white font-body bg-blue-500">
                                                2016
                                            </div>
                                            <div className="text-2xl">🚀</div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-heading group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                            Beginning (2016)
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed font-body text-lg md:text-xl font-light">
                                            My coding journey began in 2016 when I first discovered HTML, CSS, and JavaScript. I was fascinated by the power to create things that people could interact with on the web. After learning the fundamentals, I took a break to focus on my university education at the University of Nigeria, Nsukka.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Rest of Story Cards Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {[
                                    {
                                        title: "Rediscovery & Growth (2022)",
                                        content: "In 2022, I returned to programming with renewed passion and dedication. I immersed myself in modern technologies like React, Next.js, TypeScript, and SEO optimization. This led me to become a full-stack developer with a special focus on performance and search engine visibility.",
                                        color: "border-l-purple-500",
                                        bg: "bg-purple-500",
                                        year: "2022",
                                        icon: "📈"
                                    },
                                    {
                                        title: "Entrepreneurship (2024)",
                                        content: "In 2024, I founded TheWebStamp, an agency dedicated to helping contractors in the USA and Canada establish their online presence. As a one-man team, I helped multiple clients build websites that attract more business and generate leads effectively.",
                                        color: "border-l-cyan-500",
                                        bg: "bg-cyan-500",
                                        year: "2024",
                                        icon: "🏢"
                                    },
                                    {
                                        title: "Professional Growth",
                                        content: "Now, I'm looking to take my skills to the next level by liasing with a professional team where I can contribute to larger projects, collaborate with other developers, and continue growing as a professional. I'm particularly interested in remote opportunities with agencies or companies in the USA, Europe, or Canada.",
                                        color: "border-l-green-500",
                                        bg: "bg-green-500",
                                        year: "Present",
                                        icon: "🤝"
                                    },
                                    {
                                        title: "AI Integration Specialist",
                                        content: "I specialize in integrating AI solutions for businesses, helping them automate processes, generate actionable insights, and drive revenue growth while saving valuable time through intelligent automation.",
                                        color: "border-l-emerald-500",
                                        bg: "bg-emerald-500",
                                        year: "Present",
                                        icon: "🤖"
                                    }
                                ].map((paragraph, index) => (
                                    <div key={index} className="relative group">
                                        {/* Story Card with Left Border */}
                                        <div className={`bg-slate-800/30 backdrop-blur-sm rounded-r-2xl border border-white/10 border-l-4 ${paragraph.color} p-6 md:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-xl h-full`}>
                                            {/* Year and Icon */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`px-3 py-1 rounded-full text-sm font-bold text-white font-body ${paragraph.bg}`}>
                                                    {paragraph.year}
                                                </div>
                                                <div className="text-2xl">{paragraph.icon}</div>
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-heading group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                                {paragraph.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed font-body text-lg md:text-xl font-light">
                                                {paragraph.content}
                                            </p>
                                        </div>

                                        {/* Arrows for Desktop (pointing left) */}
                                        {index < 3 && index % 2 === 0 && (
                                            <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                                                <div className="flex items-center gap-2">
                                                    {/* Curved Arrow */}
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white/30">
                                                        <path
                                                            d="M10 20 C15 15, 25 15, 30 20"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            fill="none"
                                                        />
                                                        <path
                                                            d="M28 16 L32 20 L28 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}

                                        {/* Arrows for Desktop (pointing right for right column) */}
                                        {index < 3 && index % 2 === 1 && (
                                            <div className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 rotate-180">
                                                <div className="flex items-center gap-2">
                                                    {/* Curved Arrow */}
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white/30">
                                                        <path
                                                            d="M10 20 C15 15, 25 15, 30 20"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            fill="none"
                                                        />
                                                        <path
                                                            d="M28 16 L32 20 L28 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}

                                        {/* Vertical Downward Arrows for Mobile (between rows) */}
                                        {index < 3 && index % 2 === 0 && (
                                            <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-0">
                                                <div className="w-6 h-8 text-white/30">
                                                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Expertise Cards - Modern Design */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-wide mb-8 text-center font-heading">Skills & Expertise</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        icon: Code,
                                        title: "Full Stack Development",
                                        desc: "Modern apps with Next.js & React",
                                        gradient: "from-blue-500/20 to-blue-600/20",
                                        iconColor: "text-blue-400"
                                    },
                                    {
                                        icon: Search,
                                        title: "SEO Optimization",
                                        desc: "Rank higher, attract more traffic",
                                        gradient: "from-purple-500/20 to-purple-600/20",
                                        iconColor: "text-purple-400"
                                    },
                                    {
                                        icon: Zap,
                                        title: "High Performance",
                                        desc: "Fast loading, better conversions",
                                        gradient: "from-cyan-500/20 to-blue-500/20",
                                        iconColor: "text-cyan-400"
                                    },
                                    {
                                        icon: Brain,
                                        title: "AI Business Integration",
                                        desc: "Automate, grow revenue, save time",
                                        gradient: "from-emerald-500/20 to-cyan-500/20",
                                        iconColor: "text-emerald-400"
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`bg-linear-to-br ${item.gradient} backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105`}
                                    >
                                        <div className={`bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors mx-auto`}>
                                            <item.icon className={item.iconColor} size={28} />
                                        </div>
                                        <h3 className="font-semibold text-white mb-2 font-heading text-center text-lg">{item.title}</h3>
                                        <p className="text-gray-300 text-lg font-body text-center font-light">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Skills - Enhanced */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-12">
                            <h2 className="text-3xl font-bold text-gray-100 tracking-wide mb-8 font-heading">Technical Skills</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {skills.map((skillGroup, index) => (
                                    <div key={index} className="group">
                                        <div className={`h-1 w-20 bg-linear-to-r ${skillGroup.gradient} rounded-full mb-4`}></div>
                                        <h3 className="font-semibold text-white mb-4 text-lg font-heading group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                            {skillGroup.category}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className={`bg-linear-to-r ${skillGroup.gradient} text-blue-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default group/skill`}
                                                >
                                                    <span className="group-hover/skill:text-white transition-colors duration-300">{skill}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section - Modern Design */}
                        <div className="text-center">
                            <div className="relative bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 max-w-4xl mx-auto overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

                                {/* Floating Elements */}
                                <div className="absolute top-4 left-4 w-8 h-8 border border-blue-400/30 rounded-full"></div>
                                <div className="absolute bottom-4 right-4 w-8 h-8 border border-purple-400/30 rounded-full"></div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-heading">
                                        Ready to Work Together?
                                    </h3>
                                    <p className="text-gray-300 mb-8 text-xl md:text-2xl font-light font-body max-w-2xl mx-auto">
                                        I&apos;m available for full-time remote positions, freelance projects, and AI integration solutions.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 text-[17px] justify-center items-center">
                                        <Link
                                            href="/contact"
                                            className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-body shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center gap-2 group"
                                        >
                                            <Globe size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                                            Contact Me
                                        </Link>

                                        {/* Resume Download Button */}
                                        <a
                                            href="/documents/Charles_Ugboga_CV.pdf"
                                            download="Charles_Ugboga_CV.pdf"
                                            className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 font-body backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-105 flex items-center justify-center gap-2 group"
                                        >
                                            <Download size={20} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                                            Download Resume
                                        </a>
                                    </div>

                                    {/* Optional: File info */}
                                    <p className="text-gray-400 text-sm mt-4 font-body">
                                        PDF format • Updated regularly • Custom versions available upon request
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PageNavigation />
        </>
    )
}