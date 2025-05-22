import Image from "next/image"
import Link from "next/link"
import { ArrowRight, PenTool, Palette, Layout, Monitor, Smartphone, Layers, Search, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import ConnectButton from "@/components/connect-button"
import ParallaxSection from "@/components/parallax-section"

// Sample data
const designServices = [
  {
    title: "Brand Identity Design",
    description: "Comprehensive brand identity design including logo, color palette, typography, and brand guidelines.",
    icon: <Palette className="h-10 w-10 text-[#FF2C2C]" />,
    features: [
      "Logo design (multiple concepts)",
      "Color palette selection",
      "Typography selection",
      "Brand guidelines document",
      "Social media assets",
    ],
    price: "Starting at $1,499",
  },
  {
    title: "Shopify UI/UX Design",
    description: "Custom Shopify store design focused on user experience and conversion optimization.",
    icon: <Layout className="h-10 w-10 text-[#FF2C2C]" />,
    features: [
      "Homepage design",
      "Product page design",
      "Collection page design",
      "Cart & checkout optimization",
      "Mobile-responsive design",
    ],
    price: "Starting at $2,499",
  },
  {
    title: "Custom Graphics & Illustrations",
    description: "Unique graphics and illustrations to enhance your brand and product presentation.",
    icon: <PenTool className="h-10 w-10 text-[#FF2C2C]" />,
    features: [
      "Custom product illustrations",
      "Banner and promotional graphics",
      "Icon design",
      "Infographics",
      "Social media graphics",
    ],
    price: "Starting at $799",
  },
  {
    title: "Responsive Design",
    description: "Ensure your store looks and functions perfectly across all devices and screen sizes.",
    icon: <Smartphone className="h-10 w-10 text-[#FF2C2C]" />,
    features: [
      "Mobile-first design approach",
      "Tablet optimization",
      "Desktop optimization",
      "Cross-browser compatibility",
      "Touch-friendly interface",
    ],
    price: "Starting at $1,299",
  },
]

const designProcess = [
  {
    title: "Discovery",
    description:
      "We start by understanding your brand, target audience, and business goals to create a design strategy.",
    icon: <Search className="h-8 w-8 text-white" />,
  },
  {
    title: "Wireframing",
    description:
      "We create wireframes to establish the layout and structure of your store before adding visual elements.",
    icon: <Layers className="h-8 w-8 text-white" />,
  },
  {
    title: "Visual Design",
    description: "We develop the visual identity of your store, including colors, typography, and imagery.",
    icon: <Palette className="h-8 w-8 text-white" />,
  },
  {
    title: "Prototyping",
    description: "We create interactive prototypes to test the user experience and make refinements.",
    icon: <Monitor className="h-8 w-8 text-white" />,
  },
  {
    title: "Implementation",
    description: "We implement the design on your Shopify store, ensuring it looks and functions perfectly.",
    icon: <Code className="h-8 w-8 text-white" />,
  },
]

export default function DesignServicesPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#FF2C2C]/10 px-4 py-1 rounded-full text-sm font-medium text-[#FF2C2C]">
                Design Services
              </div>
              <h1 className="heading-xl">Stunning Design That Converts</h1>
              <p className="text-lg text-gray-700">
                We create beautiful, conversion-focused designs that enhance your brand identity and improve user
                experience. Our design services are tailored to help your Shopify store stand out and drive results.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <ConnectButton />
                <Link href="/portfolio?category=design">
                  <Button variant="outline" className="border-[#FF2C2C] text-[#FF2C2C] hover:bg-[#FF2C2C]/10">
                    View Design Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Design+Services"
                  alt="Design Services"
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
            <h2 className="heading-lg mb-4">Our Design Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive design solutions to help your eCommerce business stand out and convert.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
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

      {/* Design Process Section */}
      <ParallaxSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Design Process</h2>
            <p className="text-lg text-gray-600">
              We follow a proven methodology to ensure your design project is delivered on time and exceeds your
              expectations.
            </p>
          </div>
          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FF2C2C]/20 hidden md:block"></div>

            {/* Process Steps */}
            <div className="space-y-12 relative z-10">
              {designProcess.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-full md:w-1/2 px-4 md:px-8 ${index % 2 === 0 ? "md:text-right" : "md:order-2"}`}>
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                    <div className="h-12 w-12 rounded-full bg-[#FF2C2C] flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 md:px-8 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Design Portfolio</h2>
            <p className="text-lg text-gray-600">
              Take a look at some of our recent design projects for Shopify stores.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative group overflow-hidden rounded-xl aspect-square hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Design+Project+${item}`}
                  alt={`Design Project ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">Design Project {item}</h3>
                    <Link
                      href={`/portfolio/design-project-${item}`}
                      className="inline-flex items-center text-white font-medium hover:underline group"
                    >
                      View project{" "}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio?category=design">
              <Button className="bg-[#FF2C2C] hover:bg-[#e01f1f] transform hover:scale-105 transition-transform">
                View All Design Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from our clients about their experience working with our design team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The design team at dbuggger completely transformed our brand identity and Shopify store. The new design not only looks amazing but has significantly improved our conversion rate.",
                name: "Sarah Johnson",
                position: "CEO, Fashion Brand Co.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Working with dbuggger's design team was a pleasure from start to finish. They took the time to understand our brand and created a design that perfectly captures our identity.",
                name: "Michael Chen",
                position: "Marketing Director, TechGadgets Inc.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex flex-col">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF2C2C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how our design services can help elevate your brand and improve your Shopify store's
              performance.
            </p>
            <button className="bg-white text-[#FF2C2C] hover:bg-gray-100 transform hover:scale-105 transition-transform">
              Start Your Design Project
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
