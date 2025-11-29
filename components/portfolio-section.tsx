"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import Image from "next/image"
import { ProjectModal } from "./project-modal"

const projects = [
  {
    title: "Modern Residential Complex",
    category: "Architecture & Commercial Design",
    cover: "/projects/modern-residential-complex/cover.jpg",
    gallery: [
      "/projects/modern-residential-complex/render-1.jpg",
      "/projects/modern-residential-complex/render-2.jpg",
      "/projects/modern-residential-complex/render-3.jpg",
    ],
    description:
      "A sustainable residential project featuring smart building systems and BIM coordination across all disciplines. This development integrates cutting-edge technology with environmentally conscious design principles.",
  },
  {
    title: "BIM Coordination Project",
    category: "BIM Projects",
    cover: "/projects/bim-coordination-project/cover.jpg",
    gallery: ["/projects/bim-coordination-project/render-1.jpg", "/projects/bim-coordination-project/render-2.jpg"],
    description:
      "Complete BIM coordination for a commercial building with clash detection and ISO 19650 compliance. Streamlined collaboration across multiple disciplines ensuring zero conflicts in construction.",
  },
  {
    title: "Contemporary Office Interior",
    category: "Interior Design",
    cover: "/projects/contemporary-office-interior/cover.jpg",
    gallery: [
      "/projects/contemporary-office-interior/render-1.jpg",
      "/projects/contemporary-office-interior/render-2.jpg",
      "/projects/contemporary-office-interior/render-3.jpg",
    ],
    description:
      "Human-centered workspace design with AI-assisted layout optimization and visualization. Creates an inspiring environment that promotes productivity and employee well-being.",
  },
  {
    title: "Gated Community in Texas America",
    category: "Architecture & Commercial Design",
    cover: "/projects/gated-community-in-texas-america/cover.jpg",
    gallery: [
      "/projects/gated-community-in-texas-america/render-1.jpg",
      "/projects/gated-community-in-texas-america/render-2.jpg",
      "/projects/gated-community-in-texas-america/render-3.jpg",
      "/projects/gated-community-in-texas-america/render-4.jpg",
      "/projects/gated-community-in-texas-america/render-5.jpg",
      "/projects/gated-community-in-texas-america/render-6.jpg",
      "/projects/gated-community-in-texas-america/render-7.jpg",
      "/projects/gated-community-in-texas-america/render-8.jpg",
      "/projects/gated-community-in-texas-america/render-9.jpg",
      "/projects/gated-community-in-texas-america/render-10.jpg",
      "/projects/gated-community-in-texas-america/render-11.jpg",
    ],
    description:
      "This project is a purpose-built, gated community in Texas, designed as a sanctuary for our nation's disabled army personnel. The core mission is twofold:to provide a secure, accessible, and supportive living environment, and to foster financial independence.Our innovative model empowers residents by enabling them to leverage their homes for short-term rentals (such as Airbnb). This creates a sustainable income stream and a unique sense of purpose.To support this, the community is also a premier destination for visitors. Guests can enjoy a wide array of leisure and recreational activities, all while staying in a community that honors those who have served. It is a place where gratitude, hospitality, and empowerment meet.",
  },
  {
    title: "Luxury Apartment Renovation",
    category: "Interior Design",
    cover: "/projects/luxury-apartment-renovation/cover.jpg",
    gallery: [
      "/projects/luxury-apartment-renovation/render-1.jpg",
      "/projects/luxury-apartment-renovation/render-2.jpg",
    ],
    description:
      "Complete interior renovation with custom furniture design and high-end finishes. Every detail carefully curated to create a sophisticated and comfortable living space.",
  },
  {
    title: "Commercial Mixed-Use Development",
    category: "Architecture & Commercial Design",
    cover: "/projects/commercial-mixed-use-development/cover.jpg",
    gallery: [
      "/projects/commercial-mixed-use-development/render-1.jpg",
      "/projects/commercial-mixed-use-development/render-2.jpg",
      "/projects/commercial-mixed-use-development/render-3.jpg",
    ],
    description:
      "Large-scale mixed-use development with retail, office, and residential components. Designed to create a vibrant urban environment with seamless integration of multiple functions.",
  },
  {
  title: "Revit Project Setup and Clash Detection",
  category: "BIM / Construction Management",
  cover: "/projects/revit-project-setup-and-clash-detection/cover.png",
  gallery: [
    "/projects/revit-project-setup-and-clash-detection/render-1.png",
    "/projects/revit-project-setup-and-clash-detection/render-2.png",
    "/projects/revit-project-setup-and-clash-detection/render-3.png",
    "/projects/revit-project-setup-and-clash-detection/render-4.png",
    "/projects/revit-project-setup-and-clash-detection/render-5.png",
    "/projects/revit-project-setup-and-clash-detection/render-6.png"
  ],
  description:
    "A comprehensive Revit project setup including linked model coordination, template customization, and clash detection workflows using Revit and Solibri."
},


]

const categories = ["All", "BIM Projects", "Architecture & Commercial Design", "Interior Design"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground">Selected works across architecture, BIM, and design</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer transition-all hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02]"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.cover || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
