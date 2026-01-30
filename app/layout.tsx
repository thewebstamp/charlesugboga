import type { Metadata } from 'next'
import { Poetsen_One, Josefin_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

const poetsenOne = Poetsen_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    default: 'Charles Ugboga - Full Stack Developer & AI Integration Specialist',
    template: '%s | Charles Ugboga'
  },
  description: 'Full Stack Developer, SEO Expert & AI Integration Specialist. Building high-performance web applications, optimizing for search engines, and implementing AI solutions for business growth.',
  keywords: [
    'Full Stack Developer',
    'Next.js Developer',
    'SEO Expert',
    'AI Integration Specialist',
    'Web Development',
    'SEO Optimization',
    'AI Business Automation',
    'React Developer',
    'TypeScript Developer',
    'Business Growth',
    'Charles Ugboga'
  ],
  authors: [{ name: 'Charles Ugboga' }],
  creator: 'Charles Ugboga',
  publisher: 'Charles Ugboga',
  metadataBase: new URL('https://charlesugboga.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://charlesugboga.vercel.app',
    title: 'Charles Ugboga - Full Stack Developer & AI Integration Specialist',
    description: 'Professional Full Stack Developer, SEO Expert, and AI Integration Specialist helping businesses grow online.',
    siteName: 'Charles Ugboga Portfolio',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'Charles Ugboga Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charles Ugboga - Full Stack Developer & AI Integration Specialist',
    description: 'Building web applications, optimizing SEO, and implementing AI solutions for business growth.',
    creator: '@altherion5738',
    images: ['/images/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://charlesugboga.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poetsenOne.variable} ${josefinSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-body">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}