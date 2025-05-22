"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Hello, I need assistance with my Shopify store.",
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasNotification, setHasNotification] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    setHasNotification(false)
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
        "right-4 bottom-20 lg:bottom-8",
      )}
    >
      <button
        onClick={handleClick}
        className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        style={{ animationDuration: "2s" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        {hasNotification && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
            1
          </span>
        )}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></div>
      </button>
    </div>
  )
}

export default WhatsAppButton
