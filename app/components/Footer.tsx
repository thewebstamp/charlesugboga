import Link from 'next/link'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-5 md:px-8 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="mb-6 lg:mb-0 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-gradient">Charles Ugboga</h3>
                        <p className="text-gray-400 mt-2">Full Stack Developer, SEO Expert & AI Integration Specialist</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        {/* Resume Button in Footer */}
                        <a
                            href="/documents/Charles_Ugboga_CV.pdf"
                            download="Charles-Ugboga-Resume-WebDev-AI-Specialist.pdf"
                            className="flex items-center gap-2 bg-linear-to-r from-emerald-600 to-cyan-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                        >
                            <Download size={18} />
                            <span>Download Resume</span>
                        </a>

                        <div className="flex space-x-4">
                            {[
                                { icon: Linkedin, href: 'https://linkedin.com/in/charles-ugboga', label: 'LinkedIn' },
                                { icon: Github, href: 'https://github.com/thewebstamp', label: 'GitHub' },
                                { icon: Mail, href: 'mailto:altherion1@gmail.com', label: 'Email' },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                                    aria-label={item.label}
                                >
                                    <item.icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Charles Ugboga. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}