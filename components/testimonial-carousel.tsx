"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  quote: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative overflow-hidden bg-white rounded-xl shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 bg-gray-100 p-8 flex justify-center items-center">
          <div className="relative rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={testimonials[currentIndex].image || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 p-8 md:p-12">
          <Quote className="text-[#FF2C2C] h-12 w-12 mb-4 opacity-20" />
          <p className="text-lg md:text-xl italic mb-6">{testimonials[currentIndex].quote}</p>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
            <p className="text-gray-600">
              {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#FF2C2C] w-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
