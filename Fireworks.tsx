"use client"

import { useEffect, useRef } from "react"

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class Particle {
      x: number
      y: number
      color: string
      velocity: { x: number; y: number }
      alpha: number

      constructor(x: number, y: number, color: string) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = {
          x: Math.random() * 3 - 1.5,
          y: Math.random() * 3 - 1.5,
        }
        this.alpha = 1
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      update() {
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.alpha -= 0.01
      }
    }

    const particles: Particle[] = []

    function createFirework(x: number, y: number) {
      const color = `hsl(${Math.random() * 360}, 50%, 50%)`
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y, color))
      }
    }

    function animate() {
      if (!ctx) return
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
          particles.splice(index, 1)
        } else {
          particle.update()
          particle.draw()
        }
      })
    }

    setInterval(() => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      createFirework(x, y)
    }, 2000)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
  )
}

