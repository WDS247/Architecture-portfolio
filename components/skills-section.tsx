"use client"

import { useState } from "react"
import { Badge } from "./ui/badge"

const skillCategories = [
  {
    title: "BIM & Technical Tools",
    skills: ["Revit", "Dynamo", "Revizto", "Solibri", "BlenderBIM", "BIM360", "IfcOpenShell", "COBie", "ISO 19650"],
  },
  {
    title: "AI & Computational Design",
    skills: ["Midjourney", "DALL·E", "Veras.ai", "Pyrevit", "MCP CLAUDE", "LookX", "Python for AI"],
  },
  {
    title: "Visualization & Rendering",
    skills: ["3ds Max", "Corona Renderer", "SketchUp", "Lumion", "Photoshop"],
  },
  {
    title: "Architecture & Design",
    skills: ["Residential Projects", "Commercial Design", "Interior Design", "Sustainability", "Turnkey Execution"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Client Communication",
      "Multidisciplinary Coordination",
      "Creative Problem Solving",
      "Workflow Automation",
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">A comprehensive toolkit for modern architectural practice</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                  activeCategory === index
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{category.title}</span>
                  <span className="text-sm opacity-70">{category.skills.length}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-8">
            <div className="bg-card rounded-2xl p-8 border border-border min-h-[400px]">
              <h3 className="text-2xl font-bold mb-6">{skillCategories[activeCategory].title}</h3>

              <div className="flex flex-wrap gap-3">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-base hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
