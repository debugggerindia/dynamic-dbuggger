import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Zap, Layers, ShoppingCart, Smartphone, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import ConnectButton from "@/components/connect-button"
import ParallaxSection from "@/components/parallax-section"
import BeforeAfterSlider from "@/components/before-after-slider"

// Sample data
const commerceServices = [
  {
    title: "Store Setup & Launch",
    description:
      "Complete eCommerce store setup with custom design, product listings, and payment integration.",
    icon: <ShoppingCart className="h-10 w-10 text-green-600" />,
    link: "/services/ecommerce#setup",
  },
  {
    title: "Custom Theme Development",
    description:
      "Tailor-made themes designed to match your brand and drive customer engagement and conversions.",
    icon: <Layers className="h-10 w-10 text-green-600" />,
    link: "/services/ecommerce#theme-development",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Seamless integration with essential tools, plugins, and APIs to boost store functionality.",
    icon: <Settings className="h-10 w-10 text-green-600" />,
    link: "/services/ecommerce#app-integration",
  },
  {
    title: "Speed Optimization",
    description:
      "Performance enhancements to ensure fast load times and a smooth shopping experience.",
    icon: <Zap className="h-10 w-10 text-green-600" />,
    link: "/services/ecommerce#speed-optimization",
  },
  {
    title: "Mobile Optimization",
    description:
      "Responsive layouts and device-specific tweaks for a seamless experience on all screens.",
    icon: <Smartphone className="h-10 w-10 text-green-600" />,
    link: "/services/ecommerce#mobile-optimization",
  },
  {
    title: "Custom Code Solutions",
    description:
      "Expert coding support to fix issues or build unique store features and enhancements.",
    icon: <Code className="h-10 w-10 text-green-600" />,
    link: "/services/ecommerce#custom-code",
  },
]


const beforeAfterExamples = [
  {
    title: "Fashion & Apparel Store Redesign",
    description:
      "Complete redesign of a fashion store featuring clothes, shoes, and accessories for improved shopping flow.",
    improvements: [
      "Conversion rate increased by 35%",
      "Average order value up by 28%",
      "Mobile bounce rate reduced by 45%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Beauty & Personal Care Upgrade",
    description:
      "UX and performance boost for a skincare and cosmetics store to enhance customer trust and ease of use.",
    improvements: [
      "Engagement time boosted by 32%",
      "Cart value increased by 24%",
      "Mobile conversion up by 38%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Electronics & Gadgets Optimization",
    description:
      "Speed and UX improvements for a store selling smartphones, laptops, and smartwatches to increase sales.",
    improvements: [
      "Page load time reduced by 65%",
      "Cart abandonment rate down by 30%",
      "Product page conversion up by 42%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Home & Kitchen Experience Upgrade",
    description:
      "Visual refresh and navigation enhancements for a furniture and cookware store to boost customer retention.",
    improvements: [
      "Bounce rate reduced by 36%",
      "Page speed improved by 48%",
      "Repeat purchases up by 41%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Health & Wellness Store Redesign",
    description:
      "Optimized UX and product presentation for a supplements and fitness gear brand focused on wellness.",
    improvements: [
      "Mobile bounce rate dropped 40%",
      "Sales funnel efficiency up 30%",
      "Checkout speed improved by 44%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Baby & Kids Shop Upgrade",
    description:
      "Enhanced product layout and mobile optimization for a store selling toys, clothes, and baby care products.",
    improvements: [
      "Product views increased by 52%",
      "Cart additions up by 29%",
      "Time on site grew by 34%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Food & Beverages Store Refresh",
    description:
      "Faster checkout and improved visuals for an organic groceries and snacks store to boost order volume.",
    improvements: [
      "Checkout time reduced 55%",
      "Order volume rose by 38%",
      "User satisfaction rate up 44%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Books & Stationery Shop Redesign",
    description:
      "Streamlined navigation and updated UI for a bookstore featuring journals, books, and art supplies.",
    improvements: [
      "Page speed improved by 60%",
      "Cart drop-offs reduced by 27%",
      "Mobile sales increased by 46%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Pet Supplies Store Optimization",
    description:
      "UX enhancements and faster load times for a pet food and grooming accessories store to increase conversions.",
    improvements: [
      "Conversion rate up 33%",
      "Promo sales increased by 40%",
      "Mobile traffic grew by 37%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Hobby & DIY Store Upgrade",
    description:
      "Improved product discovery and checkout process for a craft kits and musical instrument online store.",
    improvements: [
      "Subscription signups up 53%",
      "Page load speed doubled",
      "Bounce rate fell by 42%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Eco-friendly Product Store Redesign",
    description:
      "Optimized layout and product highlights for a store offering reusable items and biodegradable packaging.",
    improvements: [
      "Engagement time boosted by 32%",
      "Cart value increased by 24%",
      "Mobile conversion up by 38%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Tech Accessories Shop Optimization",
    description:
      "Speed and UX improvements for a store selling phone cases, chargers, and earbuds to increase sales.",
    improvements: [
      "Page load time reduced by 65%",
      "Cart abandonment rate down by 30%",
      "Product page conversion up by 42%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Fitness & Sports Store Redesign",
    description:
      "Optimized product filtering and mobile experience for home gym equipment and resistance bands store.",
    improvements: [
      "Bounce rate reduced by 36%",
      "Page speed improved by 48%",
      "Repeat purchases up by 41%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Digital Products Store Upgrade",
    description:
      "UX improvements and fast download options for a store offering ebooks, courses, and printables.",
    improvements: [
      "Mobile bounce rate dropped 40%",
      "Sales funnel efficiency up 30%",
      "Checkout speed improved by 44%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
  {
    title: "Customized Products Store Refresh",
    description:
      "Enhanced personalization options and checkout flow for a store offering t-shirts, mugs, and gifts.",
    improvements: [
      "Product views increased by 52%",
      "Cart additions up by 29%",
      "Time on site grew by 34%",
    ],
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
  },
]



const croImprovements = [
  {
    title: "Product Page Optimization",
    description:
      "Strategic product page updates to boost conversions and increase order values.",
    features: [
      "High-quality product images",
      "Customer reviews and ratings",
      "Clear and concise descriptions",
      "Effective upsell modules",
    ],
  },
  {
    title: "Call-to-Action Optimization",
    description:
      "Smart CTA placement and design to guide visitors toward making a purchase.",
    features: [
      "Bold and clear button design",
      "Ideal button placements",
      "Conversion-friendly copywriting",
      "Touch-friendly for mobile users",
    ],
  },
  {
    title: "Checkout Process Refinement",
    description:
      "Frictionless checkout experiences that reduce drop-offs and improve sales.",
    features: [
      "Single-page checkout flows",
      "Progress steps and indicators",
      "Fast payment integrations",
      "Cart recovery and reminders",
    ],
  },
]

export default function CommerceBugs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-green-500 to-emerald-700">
        <div className="absolute inset-0 bg-grid-white/10 bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                CommerceBugs
              </div>
              <h1 className="heading-xl">Expert eCommerce Development for Growing Brands</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg">
                Custom eCommerce development solutions that focus on performance, user experience, and conversion optimization.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <ConnectButton className="bg-white text-green-600 hover:bg-gray-100" />
                <Link href="#services">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Shopify+Development"
                  alt="Shopify Development"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-lg mb-4">Our Development Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive eCommerce development solutions to help your eCommerce business thrive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commerceServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col border border-gray-100 hover:translate-y-[-5px] duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-green-600 font-medium hover:underline mt-2 group"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-lg mb-4">Before & After</h2>
            <p className="text-lg text-gray-600">
              See the transformation we've created for our clients' Shopify stores.
            </p>
          </div>
          <div className="space-y-16">
            {beforeAfterExamples.map((example, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <BeforeAfterSlider
                    beforeImage={example.beforeImage}
                    afterImage={example.afterImage}
                    beforeAlt="Before redesign"
                    afterAlt="After redesign"
                  />
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="heading-md">{example.title}</h3>
                  <p className="text-lg text-gray-600">{example.description}</p>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Improvements:</h4>
                    <ul className="space-y-2">
                      {example.improvements.map((improvement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 text-green-600">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <ConnectButton className="bg-green-600 hover:bg-green-700 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRO Section */}
      <ParallaxSection className="section-padding bg-green-600 text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Conversion Rate Optimization</h2>
            <p className="text-lg opacity-90">
              Strategic improvements to your eCommerce store that drive higher conversion rates and revenue.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {croImprovements.map((improvement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors hover:translate-y-[-5px] duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{improvement.title}</h3>
                <p className="opacity-90 mb-4">{improvement.description}</p>
                <ul className="space-y-2">
                  {improvement.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Technical Expertise Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Technical+Expertise"
                  alt="Technical Expertise"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="heading-lg">Technical Expertise</h2>
              <p className="text-lg text-gray-600">
                Our team of eCommerce experts has the technical knowledge and experience to tackle even the most complex
                eCommerce challenges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Commerce Template</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">JavaScript</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">eCommerce API</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Apps Integrations</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/services/shopify">
                  <Button className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-transform">
                    Learn More About Our Expertise
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-500 to-emerald-700 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Fix and Improve Your Online Store?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a consultation with our Shopify experts and discover how we can help you optimize your store for
              better performance and higher conversions.
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 transform hover:scale-105 transition-transform">
              Get Your Store Fixed
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
