"use client"

import { useEffect, useState, useRef } from "react"

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

const stats: Stat[] = [
  { value: 500, label: "Weddings Planned", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 25, label: "Countries Served", suffix: "+" },
  { value: 1000, label: "Verified Vendors", suffix: "+" },
]

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const frameRate = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameRate)

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      setCounts(
        stats.map((stat) => {
          const easeOutQuad = 1 - Math.pow(1 - progress, 3)
          return Math.floor(stat.value * easeOutQuad)
        })
      )

      if (frame === totalFrames) {
        clearInterval(counter)
        setCounts(stats.map((stat) => stat.value))
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [isVisible])

  return (
    <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl lg:text-5xl font-serif font-light text-primary mb-2">
            {stat.prefix}
            {counts[index].toLocaleString()}
            {stat.suffix}
          </div>
          <div className="text-sm lg:text-base text-charcoal/70 font-sans">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
