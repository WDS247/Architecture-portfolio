"use client"

import { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const gridSize = 40
    let animationFrame: number

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "rgba(0, 240, 255, 0.1)"
      ctx.lineWidth = 1

      const offsetX = (time * 0.02) % gridSize
      const offsetY = (time * 0.02) % gridSize

      // Vertical lines
      for (let x = -offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = -offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      animationFrame = requestAnimationFrame(draw)
    }

    draw(0)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToWork = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">USMAN WAHEED</h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light tracking-wide">
            Architect | BIM & AI Designer
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-4">
            Bridging design, data, and digital intelligence.
          </p>

          <div className="pt-8">
            <Button
              onClick={scrollToWork}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 shadow-lg shadow-accent/20"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
