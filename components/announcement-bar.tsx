"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Set a cookie to remember the user closed the announcement
    document.cookie = "announcementClosed=true; max-age=86400; path=/"
  }

  useEffect(() => {
    // Check if user has previously closed the announcement
    const hasClosed = document.cookie.includes("announcementClosed=true")
    if (hasClosed) {
      setIsVisible(false)
    }

    // Update CSS variable for announcement height
    document.documentElement.style.setProperty("--announcement-height", isVisible ? "40px" : "0px")
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed top-[-5px] left-0 right-0 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white z-50 transition-transform duration-300",
        isScrolled ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center">
          <AlertTriangle className="h-4 w-4 text-[#FF2C2C] mr-2 flex-shrink-0" />
          <p className="text-sm text-center">
            <span className="font-semibold">Limited Time Offer:</span> Get a free Shopify store audit worth ₹15,000.{" "}
            <a href="/store-audit" className="underline hover:text-[#FF2C2C]">
              Claim Now
            </a>
          </p>
          <button
            onClick={handleClose}
            className="ml-4 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
