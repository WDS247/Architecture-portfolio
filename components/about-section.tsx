"use client"

import { MapPin, Mail, Linkedin, Download } from "lucide-react"
import { Button } from "./ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">About Me</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a detail-oriented architect with 5+ years of experience in architectural design, BIM coordination, and
              AI-assisted workflows. My work explores how technology, data, and human-centered design can co-create
              purposeful, intelligent architecture.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Porto, Portugal</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:usmanwaheed33@gmail.com" className="hover:text-foreground transition-colors">
                  usmanwaheed33@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Linkedin className="h-5 w-5 text-accent" />
                <a
                  href="https://www.linkedin.com/in/usman-waheed-9414852a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

           <div className="pt-4">
  <a
    href="/cv/usman-waheed-cv.pdf"
    download
    className="inline-block"
  >
    <Button
      variant="outline"
      className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
    >
      <Download className="mr-2 h-4 w-4" />
      Download CV
    </Button>
  </a>
</div>

<div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-muted/20 backdrop-blur-sm border border-border/50 mt-6">
  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
  
  <Image
    src="/professional-architect-portrait-with-modern-archit.jpg"
    alt="Usman Waheed"
    fill
    className="object-cover rounded-xl"
  />
</div>
