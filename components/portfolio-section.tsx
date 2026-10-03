"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import Image from "next/image"
import { ProjectModal } from "./project-modal"

const projects = [
  {
    title: "HIGH RISE TOWERS-API-DUBAI",
    category: "BIM Coordination & Computational BIM",
    cover: "/projects/HIGH RISE TOWERS-API-DUBAI/cover.jpg",
    gallery: [
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-1.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-2.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-3.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-4.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-5.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-6.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-7.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-8.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-9.jpg",
      "/projects/HIGH RISE TOWERS-API-DUBAI/render-10.jpg"
    ],
    description:
      "Corinthia Dubai is a landmark 102-storey supertall development rising over 500 meters in Trade Centre First, Dubai BY API. The luxury development features a dual-tower configuration with a 200-meter cantilevered sky lobby, housing a 5-star Corinthia Hotel, branded serviced residences, and world-class leisure facilities.\n\nAs BIM Coordinator, led information management, model federation, quality assurance, clash coordination, and workflow automation across complex architectural, structural, and MEP packages to support seamless multidisciplinary delivery.\n\nBEP Implementation & Information Standards:\n• BEP Execution & Compliance: Implemented and enforced the project BIM Execution Plan (BEP) across multi-consultant design teams, establishing LOD/LOIN requirements, data drops, and milestone deliverables aligned with ISO 19650 standards.\n• Strict Naming Conventions: Structured and maintained standardized naming protocols across all model containers, sheets, views, worksets, and model elements, eliminating asset discrepancies across all shared and published datasets.\n• Automated Title Block & Sheet Management: Controlled document metadata integrity across hundreds of drawing packages, enforcing parameter synchronization across linked disciplinary files.\n\nModel Linking Strategy & Multi-Tower Federation:\n• High-Rise Linking Hierarchy: Formulated a structured model breakdown and linking strategy (zoning by podium, core, lower/upper tower zones, sky lobby, and plant rooms) to optimize file sizes and sync speeds.\n• Georeferencing & Shared Coordinates: Audited and aligned global coordinate systems and true north orientations, ensuring zero spatial drift across structural, architectural, MEP, and façade sub-models.\n\nMulti-Disciplinary QA/QC & Clash Health:\n• Clash Detection & Health Audits: Led multidisciplinary coordination meetings in Navisworks Manage; configured clash matrix tests, resolved thousands of clashes, and tracked trade ownership with clear SLAs.\n• Model QA/QC Diagnostics: Conducted regular model health checks to monitor file corruption, purge unplaced elements, and resolve warnings before milestone publishing.\n\nCustom Automation & pyRevit Development:\n• Custom pyRevit Extension Suite: Authored in-house Python scripts via pyRevit to automate repetitive tasks—including automated parameter population, batch sheet generation, and geometry audits.\n• BIM Productivity Gains: Reduced weekly documentation turnaround times by building automated tools for title block updates, QA checks, and clash report data extraction.",
  },
  {
    title: "1 Park Gate Residences (wasl1)",
    category: "BIM Coordination & Computational BIM",
    cover: "/projects/BIM-Coordination-&-Computational-BIM/cover.jpg",
    gallery: ["/projects/BIM Coordination & Computational BIM/render-1.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-2.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-3.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-4.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-5.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-6.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-7.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-8.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-9.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-10.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-11.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-12.jpg",
      "/projects/BIM-Coordination-&-Computational-BIM/render-13.jpg"],
    description:
      "1 Park Gate Residences (wasl1) is a prestigious multi-tower luxury residential development overlooking Zabeel Park in Dubai, featuring four curved high-rise towers linked by a podium with top-tier residential and retail amenities.\n\nAs BIM Coordinator, spearheaded multidisciplinary clash management, model health optimization, and automated delivery workflows across architectural, structural, and complex MEP packages, strictly adhering to ISO 19650 standards.\n\nISO 19650 Compliance & Naming Conventions:\n• Information Management Framework: Enforced ISO 19650 standard workflows across all design stages, overseeing CDE information exchanges, status codes, revision metadata, and milestone data verification.\n• Strict Naming Standards: Implemented and audited unified naming protocols across all project containers, Revit central files, worksets, views, sheets, and custom loadable families, guaranteeing zero naming clutter across disciplines.\n\nRevizto Clash Detection & Cloud Issue Tracking:\n• Revizto Issue Tracker Integration: Centralized multidisciplinary coordination inside Revizto, transforming geometric clashes into actionable tasks with assigned trade ownership, priority levels, and turnaround deadlines.\n• Live Coordination & 2D/3D Hybrid Verification: Managed end-to-end clash lifecycles in synchronization with native Revit files; utilized Revizto’s 2D sheet overlays over federated 3D models to eliminate design discrepancies before site execution.\n• Multidisciplinary Coordination Sessions: Chaired regular BIM coordination meetings across trades, resolving complex high-density MEP riser, plant room, and structural interface conflicts in real time.\n\nModel Health Diagnostics & Warning Audits (Ideate Software):\n• In-Depth Warning Resolution: Utilized Ideate Warnings Manager to audit, isolate, and resolve critical and high-priority Revit warnings, stabilizing central model performance across all four towers.\n• Family & Parameter Cleanliness: Leveraged Ideate Explorer and BIMLink to scrub redundant element parameters, purge corrupted or nested families, and preserve peak project health before publication.\n\nWorkflow Automation & Custom Plugin Development:\n• In-House BIM Plugins: Authored custom automation plugins to eliminate repetitive, manual coordination tasks—including automated parameter synchronizations, batch view/sheet setups, and automated file-naming validators.\n• Automated Reporting & Efficiency: Streamlined clash extraction and model audit turnaround times, boosting overall team productivity and ensuring clean, error-free deliverables.",
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
    title: "Neo Classical Interior Design",
    category: "Interior Design",
    cover: "/projects/neo-classical-interior-design/cover.jpeg",
    gallery: [
      "/projects/neo-classical-interior-design/render-1.jpeg",
      "/projects/neo-classical-interior-design/render-2.jpeg",
      "/projects/neo-classical-interior-design/render-3.jpeg",
      "/projects/neo-classical-interior-design/render-4.jpeg",
      "/projects/neo-classical-interior-design/render-5.jpeg",
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
{
  title: "BIM 5D Costing",
  category: "BIM / Cost Management",
  cover: "/projects/bim-5d-costing/cover.jpg",   // OR .png — match your file
  gallery: [
    "/projects/bim-5d-costing/render-1.png",
    "/projects/bim-5d-costing/render-2.jpg",
    "/projects/bim-5d-costing/render-3.jpg",    // example video
    "/projects/bim-5d-costing/render-4.jpg"
  ],
  description:
    "This project involved developing a complete 5D BIM workflow by exporting the architectural and structural model as IFC and performing quantity extraction using BlenderBIM. Instead of relying on built-in QTO tools, a process-driven cost simulation workflow was used. Each construction element was linked to custom resource definitions, activity durations, labor/equipment inputs, and unit pricing. Task sequencing and dependencies were defined to generate a coordinated Gantt schedule, which automatically integrated with cost parameters to produce time-based cost forecasts and cumulative cash-flow analysis. The result was a fully connected 5D environment where quantities, cost, and schedule responded dynamically to model updates."
},
{
  title: "Parametric Pavilion — Dynamo + Energy Analysis",
  category: "Computational Design / Environmental Simulation",
  cover: "/projects/parametric-pavilion/cover.jpg",
  gallery: [
    "/projects/parametric-pavilion/render-1.png",
    "/projects/parametric-pavilion/render-2.png",
    "/projects/parametric-pavilion/render-3.png",
    "/projects/parametric-pavilion/render-4.png",
    "/projects/parametric-pavilion/render-5.png",
    "/projects/parametric-pavilion/render-6.png",
    "/projects/parametric-pavilion/render-7.jpg",
    "/projects/parametric-pavilion/render-8.jpg",
    "/projects/parametric-pavilion/render-9.jpg",
    "/projects/parametric-pavilion/animation.mp4"
  ],
  description:
    "A parametric pavilion generated in Autodesk Dynamo, inspired by Bryan Garcia’s geometric studies. The structure was developed through procedural form-finding with adjustable parameters and automated surface generation. Following the computational modeling, the pavilion was evaluated through full energy and daylight analysis in 3ds Max, assessing solar exposure, thermal performance, and material efficiency. This workflow demonstrates the integration of parametric design with environmental simulation for informed architectural decision-making."
},
{
  title: "Pharmaceutical Company Headquarters",
  category: "Architecture / Interior Planning",
  cover: "/projects/pharmaceutical-company-headquarters/cover.jpeg", // or .png
  gallery: [
    "/projects/pharmaceutical-company-headquarters/render-1.jpeg",
    "/projects/pharmaceutical-company-headquarters/render-2.jpeg",
    "/projects/pharmaceutical-company-headquarters/render-3.jpeg",
    "/projects/pharmaceutical-company-headquarters/render-4.jpeg",
  ],
  description:
    "This project involved the architectural design and spatial planning of a new headquarters facility for a pharmaceutical company. The proposal focused on creating an efficient, high-performance workplace that supports research, administration, and client engagement functions. Select executive and managerial offices were designed in detail with complete interior concepts and material palettes, creating a professional and future-ready workspace."
},
{
  title: "Modern Residential Villa – Pakistan",
  category: "Residential Architecture",
  cover: "/projects/modern-residential-villa/cover.jpg",
  gallery: [
    "/projects/modern-residential-villa/render-1.jpeg",
    "/projects/modern-residential-villa/render-2.jpg",
    "/projects/modern-residential-villa/render-3.jpg",
    "/projects/modern-residential-villa/render-4.jpg",
    "/projects/modern-residential-villa/render-5.jpg",
    "/projects/modern-residential-villa/render-6.jpg",
  ],
  description:
    "A contemporary residential villa designed with clean geometric forms, warm textures, and a balanced interplay of solid and void. The design emphasizes large glazed openings, cantilevered masses, wooden louvers, and a refined material palette to create a modern, elegant family home. The landscape and entry zone were developed to complement the architectural language, enhancing both privacy and visual appeal."
},
{
  title: "Modern Apartment Renovation in Texas",
  category: "Interior Design",
  cover: "/projects/modern-apartment-renovation-in-texas/cover.jpeg",
  gallery: [
    "/projects/modern-apartment-renovation-in-texas/render-1.jpeg",
    "/projects/modern-apartment-renovation-in-texas/render-2.jpeg",
    "/projects/modern-apartment-renovation-in-texas/render-3.jpeg",
    "/projects/modern-apartment-renovation-in-texas/render-4.jpeg",
    "/projects/modern-apartment-renovation-in-texas/render-5.jpeg",
    "/projects/modern-apartment-renovation-in-texas/render-6.jpeg"
  ],
  description:
    "This project involved a contemporary renovation of a Texas apartment, focusing on enhancing spatial efficiency, natural light penetration, and material refinement. The design introduces warm neutral palettes, modern fixtures, and optimized circulation, transforming the existing unit into a functional, visually seamless living environment. Careful attention was given to texture balance and lighting design to achieve a clean, modern aesthetic while maintaining comfort and practicality."
},


]

const categories = ["All", "BIM-Coordination-&-Computational-BIM", "Architecture & Commercial Design", "Interior Design"]

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
