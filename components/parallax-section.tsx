"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export default function ParallaxSection({ children, className, speed = 0.3, direction = "up" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(section)

    return () => {
      observer.unobserve(section)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isInView) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY

      // Calculate how far the section is from the center of the viewport
      const sectionCenter = top + height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = sectionCenter - viewportCenter

      // Apply parallax effect based on distance from center
      const parallaxValue = distanceFromCenter * speed * (direction === "up" ? -1 : 1)

      setOffset(parallaxValue)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction, isInView])

  return (
    <div ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div className="relative transition-transform duration-100" style={{ transform: `translateY(${offset}px)` }}>
        {children}
      </div>
    </div>
  )
}
