import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ConnectButton from "@/components/connect-button"

// Sample portfolio data
const portfolioItems = [
  {
    title: "Elegance Apparel",
    category: "fashion",
    type: "development",
    image: "/placeholder.svg?height=400&width=600&text=Fashion+Store",
    description:
      "Custom Shopify store development for a high-end fashion boutique with advanced filtering and personalization.",
    link: "/case-studies/elegance-apparel",
    tags: ["Shopify", "Custom Theme", "UI/UX Design"],
  },
  {
    title: "Glow Skincare",
    category: "beauty",
    type: "design",
    image: "/placeholder.svg?height=400&width=600&text=Beauty+Store",
    description:
      "Complete brand identity and Shopify store design for a premium skincare brand focused on natural ingredients.",
    link: "/case-studies/glow-skincare",
    tags: ["Brand Identity", "Shopify", "UI/UX Design"],
  },
  {
    title: "TechGadgets",
    category: "electronics",
    type: "development",
    image: "/placeholder.svg?height=400&width=600&text=Electronics+Store",
    description:
      "High-performance Shopify Plus store for a leading electronics retailer with custom product configurator.",
    link: "/case-studies/tech-gadgets",
    tags: ["Shopify Plus", "Custom App", "Performance Optimization"],
  },
  {
    title: "Organic Harvest",
    category: "food",
    type: "marketing",
    image: "/placeholder.svg?height=400&width=600&text=Food+Store",
    description:
      "Comprehensive digital marketing strategy for an organic food brand, resulting in 200% increase in traffic.",
    link: "/case-studies/organic-harvest",
    tags: ["SEO", "PPC", "Content Marketing"],
  },
  {
    title: "Modern Living",
    category: "furniture",
    type: "design",
    image: "/placeholder.svg?height=400&width=600&text=Furniture+Store",
    description: "Minimalist design for a contemporary furniture brand with 3D product visualization and AR features.",
    link: "/case-studies/modern-living",
    tags: ["UI/UX Design", "3D Visualization", "Shopify"],
  },
  {
    title: "Sparkle Jewelry",
    category: "jewelry",
    type: "development",
    image: "/placeholder.svg?height=400&width=600&text=Jewelry+Store",
    description:
      "Custom Shopify development for a luxury jewelry brand with secure checkout and high-resolution imagery.",
    link: "/case-studies/sparkle-jewelry",
    tags: ["Shopify", "Custom Theme", "Security"],
  },
  {
    title: "Active Lifestyle",
    category: "sports",
    type: "marketing",
    image: "/placeholder.svg?height=400&width=600&text=Sports+Store",
    description:
      "Integrated marketing campaign for a sports apparel brand, focusing on social media and influencer marketing.",
    link: "/case-studies/active-lifestyle",
    tags: ["Social Media", "Influencer Marketing", "PPC"],
  },
  {
    title: "Kids Wonder",
    category: "toys",
    type: "design",
    image: "/placeholder.svg?height=400&width=600&text=Toy+Store",
    description:
      "Playful and engaging design for a children's toy store with interactive elements and age-based navigation.",
    link: "/case-studies/kids-wonder",
    tags: ["UI/UX Design", "Shopify", "Interactive Design"],
  },
  {
    title: "Wellness Hub",
    category: "health",
    type: "development",
    image: "/placeholder.svg?height=400&width=600&text=Health+Store",
    description: "Subscription-based Shopify store for a health supplements brand with custom subscription management.",
    link: "/case-studies/wellness-hub",
    tags: ["Shopify", "Subscription", "Custom App"],
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-700 mb-8">
              Explore our collection of successful projects across various industries and services.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 md:grid-cols-5 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="industries" className="hidden md:block">
                  Industries
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
                  >
                    <div className="relative h-60">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                      >
                        View project{" "}
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="development" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.type === "development")
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
                    >
                      <div className="relative h-60">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                        >
                          View project{" "}
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.type === "design")
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
                    >
                      <div className="relative h-60">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                        >
                          View project{" "}
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.type === "marketing")
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
                    >
                      <div className="relative h-60">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                        >
                          View project{" "}
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="industries" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) =>
                    ["fashion", "beauty", "electronics", "furniture", "food", "jewelry"].includes(item.category),
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
                    >
                      <div className="relative h-60">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                        >
                          View project{" "}
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF2C2C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how we can help you achieve your eCommerce goals and create a project worthy of our
              portfolio.
            </p>
            <button className="bg-white text-[#FF2C2C] hover:bg-gray-100 transform hover:scale-105 transition-transform">
              Let's Work Together
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
