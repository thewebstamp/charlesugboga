import { Metadata } from 'next'
import ProjectCard from '../components/ProjectCard'
import PageNavigation from '../components/PageNavigation'

export const metadata: Metadata = {
    title: 'Portfolio | Web Development, SEO & AI Solutions',
    description: 'Explore my projects showcasing Next.js development, SEO optimization, and AI integration solutions that drive business growth and efficiency.',
}

const projects = [
    {
        title: "Taylor's Lawn Care",
        description: "A professional lawn care business website built to attract customers with comprehensive SEO, tracking, and monitoring capabilities.",
        problem: "Many lawn care businesses lack professional online presence and struggle to reach potential customers in their local area.",
        solution: "Built a modern, SEO-optimized website with service showcases, contact forms, and integrated analytics for performance and user activity tracking.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Google Analytics", "GTmetrix", "SEO Optimization"],
        liveUrl: "https://www.taylorslawncare21.com/",
        githubUrl: "https://github.com/thewebstamp/taylors-lawn",
        image: "/images/TLC.png"
    },
    {
        title: "Hair Stop - E-commerce Platform",
        description: "A complete hair products e-commerce platform with admin dashboard for managing inventory, orders, and business analytics.",
        problem: "Hair businesses need a robust online store with real-time inventory management and sales tracking capabilities.",
        solution: "Developed a full-featured e-commerce solution with admin dashboard, CRUD operations, revenue tracking, and product performance analytics.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Postgresql", "Admin Dashboard", "Analytics"],
        liveUrl: "https://hairstop.shop/",
        githubUrl: "https://github.com/thewebstamp/hairstop",
        image: "/images/HSW.png"
    },
    {
        title: "Palm Port - Palm Oil Store",
        description: "An e-commerce platform for premium palm oil products with comprehensive admin features and business insights.",
        problem: "Traditional palm oil sellers lack digital presence and struggle with inventory management and customer acquisition.",
        solution: "Created a branded e-commerce store with admin panel for product management, sales tracking, and customer insights.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Backend API", "Inventory Management"],
        liveUrl: "https://palmport.vercel.app/",
        githubUrl: "https://github.com/thewebstamp/palmport",
        image: "/images/PPW.png"
    },
    {
        title: "Simple Contractor Website",
        description: "A professional single-page website for a construction contractor with optimized contact forms and service showcases.",
        problem: "Some businesses need an effective online presence to showcase services and generate leads but with little budget.",
        solution: "Designed a budget-friendly responsive single-page website with service highlights, project gallery, and contact form integration.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Contact Forms", "Responsive Design"],
        liveUrl: "https://first-choice-construction.vercel.app/",
        githubUrl: "https://github.com/thewebstamp/first-choice-construction",
        image: "/images/OPW.png"
    }
]

export default function Portfolio() {
    return (
        <>
            <div className="min-h-screen bg-slate-900 relative overflow-hidden py-30">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

                    {/* Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-linear-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

                    {/* Geometric Lines */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-[55px] font-bold text-white mb-6 font-heading">
                            My <span className="text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text">Portfolio</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-body">
                            Featured projects showcasing expertise in Full Stack Development,
                            SEO Optimization, and AI Integration for business growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                            <div className="text-3xl font-bold text-transparent bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text">20+</div>
                            <div className="text-gray-300 mt-2">Projects Delivered</div>
                        </div>
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                            <div className="text-3xl font-bold text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">↑ Revenue</div>
                            <div className="text-gray-300 mt-2">AI Impact Focus</div>
                        </div>
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                            <div className="text-3xl font-bold text-transparent bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text">&gt;90</div>
                            <div className="text-gray-300 mt-2">Performance Score</div>
                        </div>
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                            <div className="text-3xl font-bold text-transparent bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text">3-in-1</div>
                            <div className="text-gray-300 mt-2">Service Expertise</div>
                        </div>
                    </div>

                    {/* Call to Action Section */}
                    <div className="mt-20 text-center">
                        <div className="relative bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 max-w-4xl mx-auto">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-heading relative z-10">
                                Ready to Build Something Amazing?
                            </h3>
                            <p className="text-gray-300 text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto font-body relative z-10">
                                Let&apos;s collaborate on your next project - whether it&apos;s a website,
                                SEO optimization, or AI integration solution.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <a
                                    href="/contact"
                                    className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-body shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                                >
                                    Start a Project
                                </a>
                                <a
                                    href="https://github.com/thewebstamp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 font-body backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-105"
                                >
                                    View More on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PageNavigation />
        </>
    )
}