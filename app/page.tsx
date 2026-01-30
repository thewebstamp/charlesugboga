import Hero from "./components/Hero"
import PageNavigation from "./components/PageNavigation"
import ServicesSection from "./components/ServicesSection"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full Stack Developer & AI Integration Specialist | Charles Ugboga',
  description: 'Professional Full Stack Developer, SEO Expert, and AI Integration Specialist. Building high-performance web applications, optimizing for search engines, and implementing AI solutions for business growth.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PageNavigation />
    </>
  )
}