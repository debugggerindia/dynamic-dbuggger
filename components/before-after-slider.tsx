"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const containerWidth = containerRect.width
    const mouseX = e.clientX - containerRect.left

    // Calculate percentage
    let percentage = (mouseX / containerWidth) * 100

    // Clamp between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage))

    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const containerWidth = containerRect.width
    const touchX = e.touches[0].clientX - containerRect.left

    // Calculate percentage
    let percentage = (touchX / containerWidth) * 100

    // Clamp between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage))

    setSliderPosition(percentage)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-lg cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeAlt} fill className="object-cover" />
      </div>

      {/* After Image (Partial width based on slider) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image src={afterImage || "/placeholder.svg"} alt={afterAlt} fill className="object-cover" />
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#FF2C2C] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">Before</div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">After</div>
    </div>
  )
}
