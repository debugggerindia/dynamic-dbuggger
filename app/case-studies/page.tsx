import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ConnectButton from "@/components/connect-button"

// Sample case studies data
const caseStudies = [
  {
    title: "200% Increase in Organic Traffic",
    client: "Fashion Retailer",
    category: "marketing",
    industry: "fashion",
    description:
      "How we helped a fashion brand increase their organic traffic and improve their conversion rate through SEO and content marketing.",
    image: "/placeholder.svg?height=300&width=500&text=Fashion+SEO",
    metrics: [
      { label: "Organic Traffic Increase", value: "200%" },
      { label: "Conversion Rate Improvement", value: "45%" },
      { label: "Revenue Growth", value: "120%" },
    ],
    link: "/case-studies/fashion-seo",
  },
  {
    title: "15x ROAS with Facebook Ads",
    client: "Skincare Brand",
    category: "marketing",
    industry: "beauty",
    description:
      "Our strategic approach to Facebook and Instagram advertising helped this skincare brand achieve exceptional return on ad spend.",
    image: "/placeholder.svg?height=300&width=500&text=Skincare+Ads",
    metrics: [
      { label: "Return on Ad Spend", value: "15x" },
      { label: "Cost per Acquisition", value: "-40%" },
      { label: "Monthly Revenue", value: "+85%" },
    ],
    link: "/case-studies/skincare-facebook-ads",
  },
  {
    title: "65% Faster Page Load Speed",
    client: "Electronics Store",
    category: "development",
    industry: "electronics",
    description:
      "Performance optimization for a high-traffic electronics store, resulting in significantly improved user experience and conversion rates.",
    image: "/placeholder.svg?height=300&width=500&text=Electronics+Speed",
    metrics: [
      { label: "Page Load Speed Improvement", value: "65%" },
      { label: "Bounce Rate Reduction", value: "35%" },
      { label: "Conversion Rate Increase", value: "28%" },
    ],
    link: "/case-studies/electronics-speed-optimization",
  },
  {
    title: "Custom Shopify Plus Implementation",
    client: "Furniture Retailer",
    category: "development",
    industry: "furniture",
    description:
      "Complete Shopify Plus implementation with custom product configurator and advanced inventory management for a furniture retailer.",
    image: "/placeholder.svg?height=300&width=500&text=Furniture+Store",
    metrics: [
      { label: "Sales Increase", value: "75%" },
      { label: "Average Order Value", value: "+42%" },
      { label: "Customer Satisfaction", value: "98%" },
    ],
    link: "/case-studies/furniture-shopify-plus",
  },
  {
    title: "Brand Identity Redesign",
    client: "Organic Food Brand",
    category: "design",
    industry: "food",
    description:
      "Complete brand identity redesign and Shopify store development for an organic food brand, resulting in improved brand perception and sales.",
    image: "/placeholder.svg?height=300&width=500&text=Food+Brand",
    metrics: [
      { label: "Brand Recognition", value: "+120%" },
      { label: "Website Engagement", value: "+85%" },
      { label: "Conversion Rate", value: "+50%" },
    ],
    link: "/case-studies/food-brand-redesign",
  },
  {
    title: "Luxury Jewelry Store Redesign",
    client: "Luxury Jewelry Brand",
    category: "design",
    industry: "jewelry",
    description:
      "Premium Shopify store design and development for a luxury jewelry brand, focusing on high-end aesthetics and seamless user experience.",
    image: "/placeholder.svg?height=300&width=500&text=Jewelry+Store",
    metrics: [
      { label: "Average Order Value", value: "+65%" },
      { label: "Conversion Rate", value: "+40%" },
      { label: "Time on Site", value: "+120%" },
    ],
    link: "/case-studies/jewelry-store-redesign",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Grid+Pattern')] bg-repeat opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF2C2C]/20 to-blue-900/20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Success Stories</h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore how we've helped businesses like yours achieve remarkable results through our expertise in
              eCommerce development, design, and marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300 border border-gray-100"
                  >
                    <div className="relative h-60">
                      <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-[#FF2C2C] font-medium mb-2">{study.client}</div>
                      <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-[#FF2C2C]">{metric.value}</div>
                            <div className="text-sm text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={study.link}
                        className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                      >
                        Read case study{" "}
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="development" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies
                  .filter((study) => study.category === "development")
                  .map((study, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300 border border-gray-100"
                    >
                      <div className="relative h-60">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-[#FF2C2C] font-medium mb-2">{study.client}</div>
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="text-gray-600 mb-4">{study.description}</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <div className="text-2xl font-bold text-[#FF2C2C]">{metric.value}</div>
                              <div className="text-sm text-gray-500">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={study.link}
                          className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                        >
                          Read case study{" "}
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies
                  .filter((study) => study.category === "design")
                  .map((study, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300 border border-gray-100"
                    >
                      <div className="relative h-60">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-[#FF2C2C] font-medium mb-2">{study.client}</div>
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="text-gray-600 mb-4">{study.description}</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <div className="text-2xl font-bold text-[#FF2C2C]">{metric.value}</div>
                              <div className="text-sm text-gray-500">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={study.link}
                          className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                        >
                          Read case study{" "}
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies
                  .filter((study) => study.category === "marketing")
                  .map((study, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300 border border-gray-100"
                    >
                      <div className="relative h-60">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-[#FF2C2C] font-medium mb-2">{study.client}</div>
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="text-gray-600 mb-4">{study.description}</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <div className="text-2xl font-bold text-[#FF2C2C]">{metric.value}</div>
                              <div className="text-sm text-gray-500">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={study.link}
                          className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                        >
                          Read case study{" "}
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

      {/* Results Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Results That Speak for Themselves</h2>
            <p className="text-lg text-gray-600">
              Our clients consistently see remarkable improvements in key performance metrics after working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF2C2C]/10 mb-6">
                <TrendingUp className="h-8 w-8 text-[#FF2C2C]" />
              </div>
              <h3 className="text-4xl font-bold mb-2">150%</h3>
              <p className="text-xl font-medium mb-2">Average Traffic Increase</p>
              <p className="text-gray-600">
                Our clients see significant improvements in website traffic through our SEO and marketing strategies.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF2C2C]/10 mb-6">
                <Zap className="h-8 w-8 text-[#FF2C2C]" />
              </div>
              <h3 className="text-4xl font-bold mb-2">65%</h3>
              <p className="text-xl font-medium mb-2">Faster Page Load Speed</p>
              <p className="text-gray-600">
                Our performance optimization techniques result in significantly faster page load times.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF2C2C]/10 mb-6">
                <Users className="h-8 w-8 text-[#FF2C2C]" />
              </div>
              <h3 className="text-4xl font-bold mb-2">45%</h3>
              <p className="text-xl font-medium mb-2">Conversion Rate Increase</p>
              <p className="text-gray-600">
                Our conversion-focused design and development strategies lead to higher conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF2C2C] to-[#9C0000]"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Pattern')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="heading-lg mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how we can help you achieve similar results for your eCommerce business.
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
