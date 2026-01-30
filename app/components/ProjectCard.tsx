'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
    title: string
    description: string
    problem: string
    solution: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    image?: string
}

interface ProjectCardProps {
    project: Project
    index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
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
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

            {/* Main Card */}
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full overflow-hidden">
                {/* Project Image Section - Clickable Link */}
                {project.image ? (
                    project.liveUrl ? (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative h-48 md:h-64 overflow-hidden"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover md:object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index < 2}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* View Website Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                    <motion.div
                                        initial={{ scale: 0.5 }}
                                        animate={{ scale: 1 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20"
                                    >
                                        <ExternalLink className="text-white" size={24} />
                                    </motion.div>
                                </div>

                                {/* Click Hint on Mobile */}
                                <div className="absolute bottom-4 right-4 md:hidden">
                                    <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                                        <ExternalLink className="text-white" size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ) : (
                        <div className="relative h-48 md:h-64 overflow-hidden">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index < 2}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </div>
                    )
                ) : (
                    <div className="h-48 md:h-64 bg-linear-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                        <div className="text-center">
                            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-400 text-sm">Project Preview</p>
                        </div>
                    </div>
                )}

                {/* Card Content */}
                <div className="p-6 md:p-8">
                    {/* Header with Animated Arrow */}
                    <div className="flex items-start justify-between mb-4 md:mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white font-heading group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                            {project.title}
                        </h3>
                        <motion.div
                            whileHover={{ rotate: 45 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArrowUpRight className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300" size={24} />
                        </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base md:text-lg font-light mb-4 md:mb-6 leading-relaxed font-body">
                        {project.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-4 md:mb-6">
                        <div className="relative">
                            <div className="absolute -left-2 top-0 w-1 h-full bg-linear-to-b from-blue-500 to-purple-500 rounded-full"></div>
                            <div className="pl-5 md:pl-6">
                                <h4 className="font-semibold text-base md:text-lg text-white mb-1 md:mb-2 font-heading">Challenge:</h4>
                                <p className="text-gray-300 text-sm md:text-base font-light font-body">{project.problem}</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-2 top-0 w-1 h-full bg-linear-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                            <div className="pl-5 md:pl-6">
                                <h4 className="font-semibold text-base md:text-lg text-white mb-1 md:mb-2 font-heading">Solution:</h4>
                                <p className="text-gray-300 text-sm md:text-base font-light font-body">{project.solution}</p>
                            </div>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                        {project.technologies.map((tech, techIndex) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (index * 0.1) + (techIndex * 0.05) + 0.3 }}
                                className="bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default group/tech"
                            >
                                <span className="group-hover/tech:text-white transition-colors duration-300">{tech}</span>
                            </motion.span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {project.liveUrl && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-35">
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 md:gap-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-body shadow-lg hover:shadow-blue-500/25 group/button text-sm md:text-base"
                                >
                                    <ExternalLink size={16} className="group-hover/button:rotate-12 transition-transform duration-300" />
                                    Live Demo
                                </Link>
                            </motion.div>
                        )}
                        {project.githubUrl && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-35">
                                <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 md:gap-3 border-2 border-white/20 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-300 font-body backdrop-blur-sm bg-white/5 hover:bg-white/10 group/button text-sm md:text-base"
                                >
                                    <Github size={16} className="group-hover/button:scale-110 transition-transform duration-300" />
                                    View Code
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Hover Border Animation */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-500 -z-10">
                    <div className="absolute inset-0.5 rounded-xl bg-slate-900/95 backdrop-blur-sm"></div>
                </div>
            </div>
        </motion.div>
    )
}