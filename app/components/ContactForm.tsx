'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitError('')

        const form = e.currentTarget
        const formData = new FormData(form)

        // Convert FormData to object
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        }

        try {
            // Send to API route
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (response.ok && result.success) {
                setSubmitSuccess(true)
                form.reset()

                // Reset success message
                setTimeout(() => {
                    setSubmitSuccess(false)
                }, 10000)
            } else {
                throw new Error(result.error || 'Failed to send message')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitError('Failed to send message. Please try again or contact me directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">Get In Touch</h3>
                <p className="text-gray-300 mb-8 text-xl md:text-2xl font-light leading-relaxed font-body">
                    I&apos;m always interested in new opportunities, whether it&apos;s a freelance project or
                    contracted projects, I am open to liasing with you.
                </p>

                <div className="space-y-6 mb-8">
                    {[
                        {
                            icon: Mail,
                            text: 'altherion1@gmail.com',
                            href: 'mailto:altherion1@gmail.com',
                            label: 'Email',
                            color: 'bg-blue-500/20'
                        },
                        {
                            icon: Phone,
                            text: '+234 902 834 2177',
                            href: 'tel:+2349028342177',
                            label: 'Phone',
                            color: 'bg-green-500/20'
                        },
                        {
                            icon: MapPin,
                            text: 'Nigeria (Remote Worldwide)',
                            href: '#',
                            label: 'Location',
                            color: 'bg-purple-500/20'
                        },
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-white/5"
                            whileHover={{ x: 5 }}
                        >
                            <div className={`${item.color} p-4 rounded-lg group-hover:bg-white/10 transition-colors`}>
                                <item.icon size={24} className="text-white" />
                            </div>
                            <div>
                                <div className="text-[16px] text-gray-400 font-body">{item.label}</div>
                                <div className="text-[19px] font-medium font-body">{item.text}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">Connect Socially</h3>
                    <div className="flex gap-4">
                        {[
                            { icon: Linkedin, href: 'https://linkedin.com/in/charles-ugboga', label: 'LinkedIn' },
                            { icon: Github, href: 'https://github.com/thewebstamp', label: 'GitHub' },
                        ].map((item) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                            >
                                <item.icon size={24} className="text-white" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div>
                    <label htmlFor="name" className="block text-[18px] font-medium text-gray-300 mb-2 font-body">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="text-lg font-light w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Your Name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-[18px] font-medium text-gray-300 mb-2 font-body">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="text-[19px] md:text-[20px] font-light w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-[18px] font-medium text-gray-300 mb-2 font-body">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="text-[19px] md:text-[20px] font-light w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        placeholder="Tell me about your project, timeline, and budget..."
                    />
                </div>

                {/* Error Message */}
                {submitError && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-linear-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl p-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold text-lg text-white">Error!</div>
                                <div className="text-red-200 text-[16px]">{submitError}</div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Success Message */}
                {submitSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold text-lg text-white">Message Sent!</div>
                                <div className="text-green-200 text-[16px]">I&apos;ll get back to you within 24 hours.</div>
                            </div>
                        </div>
                    </motion.div>
                )}

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-linear-to-r text-xl from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-body shadow-lg hover:shadow-blue-500/25"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            Send Message
                        </>
                    )}
                </motion.button>

                <p className="text-[17px] text-gray-400 font-light text-center font-body">
                    I respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
            </motion.form>
        </div>
    )
}