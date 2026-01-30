import { Metadata } from 'next'
import ContactForm from '../components/ContactForm'
import PageNavigation from '../components/PageNavigation'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with me for your next project. I\'m available for freelance work and contract remote positions.',
}

export default function Contact() {
    return (
        <>
            <div className="min-h-screen bg-slate-900 relative overflow-hidden py-30">
                <div className="absolute inset-0">
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

                    {/* Floating Orbs */}
                    <div className="absolute top-20 left-1/4 w-64 h-64 bg-linear-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

                    {/* Corner Accents */}
                    <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-blue-400/30"></div>
                    <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-purple-400/30"></div>
                    <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-cyan-400/30"></div>
                    <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-pink-400/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-[55px] font-bold text-white mb-6 font-heading">
                                Let&apos;s <span className="text-gradient bg-linear-to-r from-blue-400 to-purple-400">Connect</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-body">
                                Have a project in mind? I&apos;d love to hear about it.
                                Let&apos;s create something amazing together.
                            </p>
                        </div>

                        <ContactForm />

                        {/* Call to Action */}
                        <div className="mt-20 text-center">
                            <div className="relative bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 max-w-4xl mx-auto">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading relative z-10">
                                    Ready to Start Your Project?
                                </h3>
                                <p className="text-gray-300 text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto font-body relative z-10">
                                    I typically respond within 24 hours. For urgent matters, feel free to call or WhatsApp me.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 text-[17px] justify-center relative z-10">
                                    <a
                                        href="tel:+2349028342177"
                                        className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-body shadow-lg hover:shadow-green-500/25 hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        📱 Call Now
                                    </a>
                                    <a
                                        href="https://wa.me/2349028342177"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-300 font-body backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        💬 WhatsApp
                                    </a>
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