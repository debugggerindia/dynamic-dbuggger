"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ShoppingCart,
  Package,
  Tag,
  CreditCard,
  BarChart,
  Zap,
  FileText,
  Info,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import CalendlyButton from "@/components/calendly-button"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm py-3",
        scrolled ? "top-0" : "top-[var(--announcement-height)]",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/dbuggger_logo.png"
            alt="dbuggger Logo"
            width={180}
            height={50}
            className="h-12 w-full"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-gray-800 hover:text-[#FF2C2C] font-medium transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 p-3 bg-white">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/services/shopify" className="w-full flex items-center gap-2 py-2">
                    <ShoppingCart className="h-4 w-4 text-[#FF2C2C]" />
                    <div>
                      <div className="font-medium">Shopify Development</div>
                      <div className="text-xs text-gray-500">Custom store development</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/shopify-plus" className="w-full flex items-center gap-2 py-2">
                    <CreditCard className="h-4 w-4 text-[#FF2C2C]" />
                    <div>
                      <div className="font-medium">Shopify Plus</div>
                      <div className="text-xs text-gray-500">Enterprise solutions</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/design" className="w-full flex items-center gap-2 py-2">
                    <Tag className="h-4 w-4 text-[#FF2C2C]" />
                    <div>
                      <div className="font-medium">Design Services</div>
                      <div className="text-xs text-gray-500">UI/UX and branding</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/services" className="w-full text-[#FF2C2C] font-medium">
                  View All Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/commerce-bugs" className="text-gray-800 hover:text-[#FF2C2C] font-medium transition-colors">
            CommerceBugs
          </Link>

          <Link href="/marketing-bugs" className="text-gray-800 hover:text-[#FF2C2C] font-medium transition-colors">
            MarketingBugs
          </Link>

          <Link href="/portfolio" className="text-gray-800 hover:text-[#FF2C2C] font-medium transition-colors">
            Portfolio
          </Link>

          {/* <Link href="/case-studies" className="text-gray-800 hover:text-[#FF2C2C] font-medium transition-colors">
            Case Studies
          </Link> */}

          <Link href="/blog" className="text-gray-800 hover:text-[#FF2C2C] font-medium transition-colors">
            Blog
          </Link>

          <Link href="/pricing" className="text-gray-800 hover:text-[#FF2C2C] font-medium transition-colors">
            Pricing
          </Link>

          <Link href="/about" className="text-gray-800 hover:text-[#FF2C2C] font-medium transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/store-audit">
            <Button variant="outline" size="sm" className="border-[#FF2C2C] text-[#FF2C2C] hover:bg-[#FF2C2C]/10">
              <Search className="h-4 w-4 mr-2" /> Free Audit
            </Button>
          </Link>
          <CalendlyButton variant="default" className="bg-[#FF2C2C] hover:bg-[#e01f1f]" />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-800 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white shadow-lg transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
            <div className="flex items-center">
              <Image
                src="/images/brand-logo-1.png"
                alt="dbuggger Logo"
                width={40}
                height={40}
                className="h-10 w-auto mr-2"
              />
            </div>
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2">Services</h3>
            <div className="space-y-2 pl-2">
              <Link
                href="/services/shopify"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                Shopify Development
              </Link>
              <Link
                href="/services/shopify-plus"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <CreditCard className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                Shopify Plus
              </Link>
              <Link
                href="/services/design"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Tag className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                Design Services
              </Link>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2">Products</h3>
            <div className="space-y-2 pl-2">
              <Link
                href="/commerce-bugs"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Package className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                CommerceBugs
              </Link>
              <Link
                href="/marketing-bugs"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <BarChart className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                MarketingBugs
              </Link>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2">Company</h3>
            <div className="space-y-2 pl-2">
              <Link
                href="/portfolio"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Zap className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                Portfolio
              </Link>
              <Link
                href="/case-studies"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                Blog
              </Link>
              <Link
                href="/pricing"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <CreditCard className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Info className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#FF2C2C] py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4 mr-2 text-[#FF2C2C]" />
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-700 space-y-4">
            <Link
              href="/store-audit"
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-md flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Search className="h-4 w-4 mr-2 text-[#FF2C2C]" />
              Free Store Audit
            </Link>

            <CalendlyButton className="w-full bg-[#FF2C2C] hover:bg-[#e01f1f] py-3" text="Schedule a Call" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
