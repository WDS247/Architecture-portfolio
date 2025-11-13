"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Linkedin, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Let's Collaborate</h2>
          <p className="text-lg text-muted-foreground">On intelligent, purposeful architecture</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:usmanwaheed33@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">usmanwaheed33@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/usman-waheed-9414852a5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Connect with me</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Usman Waheed. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
