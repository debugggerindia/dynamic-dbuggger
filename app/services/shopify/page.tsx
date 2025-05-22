import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Zap, Code, ShoppingCart, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import ConnectButton from "@/components/connect-button"
import ParallaxSection from "@/components/parallax-section"

// Sample data
const shopifyServices = [
  {
    title: "Shopify Store Setup",
    description:
      "Complete Shopify store setup with custom theme implementation, product setup, and payment gateway integration.",
    icon: <ShoppingCart className="h-10 w-10 text-[#FF2C2C]" />,
    features: [
      "Domain setup & configuration",
      "Payment gateway integration",
      "Product catalog setup",
      "Shipping & tax configuration",
      "Basic SEO setup",
    ],
    price: "Starting at $999",
  },
  {
    title: "Custom Theme Development",
    description: "Tailor-made Shopify themes designed to showcase your brand identity and optimize for conversions.",
    icon: <Layers className="h-10 w-10 text-[#FF2C2C]" />,
    features: [
      "Custom design implementation",
      "Mobile-responsive layouts",
      "Conversion-focused UX",
      "Performance optimization",
      "Cross-browser compatibility",
    ],
    price: "Starting at $2,499",
  },
  {
    title: "App Integration",
    description:
      "Seamless integration of third-party apps and custom functionality to enhance your store's capabilities.",
    icon: <Code className="h-10 w-10 text-[#FF2C2C]" />,
    features: [
      "App selection consultation",
      "Third-party app integration",
      "Custom app development",
      "API integrations",
      "Data migration",
    ],
    price: "Starting at $799",
  },
  {
    title: "Speed Optimization",
    description:
      "Performance optimization to ensure your store loads quickly and provides a smooth shopping experience.",
    icon: <Zap className="h-10 w-10 text-[#FF2C2C]" />,
    features: [
      "Page speed analysis",
      "Image optimization",
      "Code minification",
      "Caching implementation",
      "Performance monitoring",
    ],
    price: "Starting at $599",
  },
]

const caseStudies = [
  {
    title: "Fashion Boutique Redesign",
    client: "Elegance Apparel",
    description:
      "Complete redesign of a fashion boutique's Shopify store, focusing on improved product presentation and streamlined checkout.",
    image: "/placeholder.svg?height=300&width=500&text=Fashion+Boutique",
    results: [
      "35% increase in conversion rate",
      "28% increase in average order value",
      "45% reduction in mobile bounce rate",
    ],
    link: "/case-studies/fashion-boutique",
  },
  {
    title: "Electronics Store Optimization",
    client: "TechGadgets Inc.",
    description:
      "Performance and UX optimization for a high-volume electronics store, focusing on speed and conversion rate optimization.",
    image: "/placeholder.svg?height=300&width=500&text=Electronics+Store",
    results: [
      "65% reduction in page load time",
      "30% decrease in cart abandonment",
      "42% increase in product page conversion",
    ],
    link: "/case-studies/electronics-store",
  },
]

export default function ShopifyServicesPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#FF2C2C]/10 px-4 py-1 rounded-full text-sm font-medium text-[#FF2C2C]">
                Shopify Development
              </div>
              <h1 className="heading-xl">Expert Shopify Development for Growing Brands</h1>
              <p className="text-lg text-gray-700">
                We build high-performance, conversion-focused Shopify stores that help your business grow. Our team of
                certified Shopify experts will transform your vision into a stunning online store.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <ConnectButton />
                <Link href="/store-audit">
                  <Button variant="outline" className="border-[#FF2C2C] text-[#FF2C2C] hover:bg-[#FF2C2C]/10">
                    Free Store Audit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Shopify+Development"
                  alt="Shopify Development"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FF2C2C]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FF2C2C]/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Shopify Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive Shopify development solutions to help your eCommerce business thrive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {shopifyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col border border-gray-100 hover:border-[#FF2C2C]/20 hover:translate-y-[-5px] duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 text-[#FF2C2C]">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#FF2C2C] font-medium">{service.price}</span>
                  <ConnectButton size="sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ParallaxSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Why+Choose+Us"
                  alt="Why Choose Us"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="heading-lg">Why Choose Us for Your Shopify Project?</h2>
              <p className="text-lg text-gray-600">
                Our team of certified Shopify experts has the technical knowledge and experience to tackle even the most
                complex eCommerce challenges.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#FF2C2C] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Certified Shopify Experts</h3>
                    <p className="text-gray-600">
                      Our team is certified by Shopify and has years of experience building successful stores.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#FF2C2C] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Conversion-Focused Design</h3>
                    <p className="text-gray-600">
                      We design with conversions in mind, ensuring your store not only looks great but also sells.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#FF2C2C] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Performance Optimization</h3>
                    <p className="text-gray-600">
                      We optimize your store for speed and performance, ensuring a smooth shopping experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#FF2C2C] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Ongoing Support</h3>
                    <p className="text-gray-600">
                      We provide ongoing support and maintenance to ensure your store continues to perform at its best.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Shopify Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how we've helped businesses like yours achieve eCommerce success with Shopify.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
              >
                <div className="relative h-60">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#FF2C2C] font-medium mb-2">{study.client}</div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="space-y-1 mb-4">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 text-[#FF2C2C]">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={study.link}
                    className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                  >
                    View case study{" "}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies?category=shopify">
              <Button className="bg-[#FF2C2C] hover:bg-[#e01f1f] transform hover:scale-105 transition-transform">
                View All Shopify Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF2C2C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Build Your Dream Shopify Store?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss your project and create a Shopify store that drives results for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ConnectButton className="bg-white text-[#FF2C2C] hover:bg-gray-100" />
              <Link href="/store-audit">
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Get a Free Store Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
