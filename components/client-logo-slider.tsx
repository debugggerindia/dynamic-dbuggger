"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ClientLogoSliderProps {
  logos: {
    src: string
    alt: string
  }[]
}

export default function ClientLogoGridSlider({ logos }: ClientLogoSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollPos = 0
    const speed = 0.5
    let animationId: number

    const scrollLogos = () => {
      if (!container) return

      scrollPos += speed
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0
      }

      container.scrollLeft = scrollPos
      animationId = requestAnimationFrame(scrollLogos)
    }

    animationId = requestAnimationFrame(scrollLogos)

    return () => cancelAnimationFrame(animationId)
  }, [])

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos]

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div
        ref={containerRef}
        className="grid grid-flow-col auto-cols-[25%] gap-8 overflow-hidden whitespace-nowrap"
      >
        {allLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={70}
              className="max-h-12 w-auto  duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
