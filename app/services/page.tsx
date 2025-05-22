import Link from "next/link"
import { ArrowRight, Code, Zap, ShoppingCart, Settings, PenTool, TrendingUp, BarChart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ConnectButton from "@/components/connect-button"
import ParallaxSection from "@/components/parallax-section"

const services = [
  {
    title: "Shopify Development",
    description: "Custom Shopify store development with optimized performance and conversion-focused design.",
    icon: <ShoppingCart className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/services/shopify",
    features: ["Custom theme development", "Store setup & migration", "App integration", "Speed optimization"],
  },
  {
    title: "Shopify Plus",
    description: "Enterprise-level solutions for high-volume merchants and complex requirements.",
    icon: <Zap className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/services/shopify-plus",
    features: ["Multi-store management", "Custom checkout", "API integrations", "Scalable architecture"],
  },
  {
    title: "Design Services",
    description: "Stunning UI/UX design that enhances brand identity and improves user experience.",
    icon: <PenTool className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/services/design",
    features: ["Brand identity design", "UI/UX design", "Product photography", "Conversion-focused layouts"],
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to drive traffic and increase sales.",
    icon: <TrendingUp className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/marketing-bugs",
    features: ["SEO optimization", "PPC campaigns", "Social media marketing", "Email marketing"],
  },
  {
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to improve visibility and organic rankings.",
    icon: <BarChart className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/marketing-bugs#seo",
    features: ["Technical SEO", "Content strategy", "Link building", "Local SEO"],
  },
  {
    title: "Custom Development",
    description: "Tailored solutions for unique business requirements and complex functionality.",
    icon: <Code className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/services/custom-development",
    features: ["Custom app development", "Third-party integrations", "API development", "Headless commerce"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Expertise, Your Advantage</h1>
            <p className="text-xl text-gray-700 mb-8">
              Full-stack Shopify solutions designed to elevate your brand, enhance user experience, and drive
              conversions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ConnectButton />
              <Link href="/store-audit">
                <Button variant="outline" className="border-[#FF2C2C] text-[#FF2C2C] hover:bg-[#FF2C2C]/10">
                  Free Store Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col border border-gray-100 hover:border-[#FF2C2C]/20 hover:translate-y-[-5px] duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-6">
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
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline mt-2 group"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ParallaxSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">
              We follow a proven methodology to ensure your project is delivered on time, on budget, and exceeds your
              expectations.
            </p>
          </div>
          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FF2C2C]/20 hidden md:block"></div>

            {/* Process Steps */}
            <div className="space-y-12 relative z-10">
              {[
                {
                  title: "Discovery & Strategy",
                  description:
                    "We start by understanding your business goals, target audience, and unique challenges to develop a tailored strategy.",
                  icon: <Search className="h-8 w-8 text-white" />,
                },
                {
                  title: "Design & Development",
                  description:
                    "Our team creates stunning designs and develops robust, scalable solutions that align with your brand and business objectives.",
                  icon: <PenTool className="h-8 w-8 text-white" />,
                },
                {
                  title: "Testing & Optimization",
                  description:
                    "We rigorously test all aspects of your project to ensure quality, performance, and optimal user experience.",
                  icon: <Settings className="h-8 w-8 text-white" />,
                },
                {
                  title: "Launch & Growth",
                  description:
                    "After successful launch, we provide ongoing support and optimization to help your business grow and succeed.",
                  icon: <TrendingUp className="h-8 w-8 text-white" />,
                },
              ].map((step, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-[#FF2C2C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your eCommerce Business?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how our services can help you achieve your business goals and drive growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ConnectButton className="bg-white text-[#FF2C2C] hover:bg-gray-100" />
              <Link href="/portfolio">
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
