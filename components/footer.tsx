import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/brand-logo-1.png"
                alt="dbuggger Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mt-4">
              We build, optimize, and scale high-converting Shopify stores for brands that want to dominate their
              market.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com/dbuggger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF2C2C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/dbuggger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF2C2C] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/dbuggger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF2C2C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/debuggger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF2C2C] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/shopify" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link href="/services/shopify-plus" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  Shopify Plus
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  Design Services
                </Link>
              </li>
              <li>
                <Link href="/commerce-bugs" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  CommerceBugs
                </Link>
              </li>
              <li>
                <Link href="/marketing-bugs" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  MarketingBugs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#FF2C2C] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  IT Park, MIDC, Parsodi, Pratap Nagar, Nagpur, Maharashtra 440022, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#FF2C2C] mr-2 flex-shrink-0" />
                <a href="tel:+919021271911" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  +91 90212 71911
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#FF2C2C] mr-2 flex-shrink-0" />
                <a href="mailto:contact@dbuggger.com" className="text-gray-400 hover:text-[#FF2C2C] transition-colors">
                  contact@dbuggger.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} dbuggger. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-[#FF2C2C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#FF2C2C] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
