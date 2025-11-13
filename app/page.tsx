"use client"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider>
      <main className="relative">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </ThemeProvider>
  )
}
