"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, FileText, Phone, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const MobileTabBar = () => {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white z-40 transition-transform duration-300 lg:hidden",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex justify-around items-center h-16 px-2">
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center justify-center w-1/5 py-1 text-xs",
            pathname === "/" ? "text-[#FF2C2C]" : "text-gray-300",
          )}
        >
          <Home className="h-5 w-5 mb-1" />
          <span>Home</span>
        </Link>
        <Link
          href="/services"
          className={cn(
            "flex flex-col items-center justify-center w-1/5 py-1 text-xs",
            pathname.startsWith("/services") ? "text-[#FF2C2C]" : "text-gray-300",
          )}
        >
          <ShoppingBag className="h-5 w-5 mb-1" />
          <span>Services</span>
        </Link>
        <Link
          href="/portfolio"
          className={cn(
            "flex flex-col items-center justify-center w-1/5 py-1 text-xs",
            pathname.startsWith("/portfolio") ? "text-[#FF2C2C]" : "text-gray-300",
          )}
        >
          <FileText className="h-5 w-5 mb-1" />
          <span>Portfolio</span>
        </Link>
        <Link
          href="/contact"
          className={cn(
            "flex flex-col items-center justify-center w-1/5 py-1 text-xs",
            pathname === "/contact" ? "text-[#FF2C2C]" : "text-gray-300",
          )}
        >
          <Phone className="h-5 w-5 mb-1" />
          <span>Contact</span>
        </Link>
        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-xs text-gray-300"
          onClick={() => document.querySelector('button[aria-label="Toggle menu"]')?.click()}
        >
          <Menu className="h-5 w-5 mb-1" />
          <span>Menu</span>
        </button>
      </div>
    </div>
  )
}

export default MobileTabBar
