"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

export function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-bold tracking-wider text-foreground hover:text-accent transition-colors"
          >
            UW
          </button>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Portfolio", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
