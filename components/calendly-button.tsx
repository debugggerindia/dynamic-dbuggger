"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

interface CalendlyButtonProps {
  url?: string
  text?: string
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export default function CalendlyButton({
  url = "https://calendly.com/dbugggerofficial/30min",
  text = "Schedule a Call",
  className,
  variant = "default",
}: CalendlyButtonProps) {
  useEffect(() => {
    if (!document.getElementById("calendly-styles")) {
      const link = document.createElement("link")
      link.id = "calendly-styles"
      link.rel = "stylesheet"
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      document.head.appendChild(link)
    }

    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script")
      script.id = "calendly-script"
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url })
    }
    return false
  }

  return (
    <Button onClick={openCalendly} className={cn("font-medium", className)} variant={variant}>
      <Calendar className="mr-2 h-4 w-4" />
      {text}
    </Button>
  )
}
