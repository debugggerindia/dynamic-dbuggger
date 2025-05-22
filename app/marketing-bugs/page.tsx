import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, LineChart, TrendingUp, Target, Mail, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import ConnectButton from "@/components/connect-button"
import ParallaxSection from "@/components/parallax-section"

// Sample data
const marketingServices = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description:
      "Improve your organic visibility and drive targeted traffic to your Shopify store with our data-driven SEO strategies.",
    icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
    features: [
      "Comprehensive SEO audits",
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO improvements",
      "Content strategy and creation",
      "Link building campaigns",
    ],
  },
  {
    id: "ppc",
    title: "PPC & Paid Advertising",
    description:
      "Maximize your ROI with targeted paid advertising campaigns across Google, Facebook, Instagram, and more.",
    icon: <Target className="h-10 w-10 text-blue-600" />,
    features: [
      "Google Ads management",
      "Facebook & Instagram Ads",
      "Shopping campaigns",
      "Remarketing strategies",
      "Ad creative development",
      "Performance tracking and optimization",
    ],
  },
  {
    id: "email",
    title: "Email Marketing",
    description:
      "Build relationships with your customers and drive repeat purchases with strategic email marketing campaigns.",
    icon: <Mail className="h-10 w-10 text-blue-600" />,
    features: [
      "Email automation setup",
      "Abandoned cart recovery",
      "Post-purchase sequences",
      "Newsletter campaigns",
      "Segmentation strategies",
      "A/B testing and optimization",
    ],
  },
  {
    id: "social",
    title: "Social Media Marketing",
    description: "Engage with your audience and build brand awareness through strategic social media marketing.",
    icon: <Users className="h-10 w-10 text-blue-600" />,
    features: [
      "Social media strategy",
      "Content creation and curation",
      "Community management",
      "Influencer marketing",
      "Social commerce integration",
      "Performance analytics",
    ],
  },
]

const caseStudies = [
  {
    title: "200% Increase in Organic Traffic",
    client: "Fashion Retailer",
    description:
      "How we helped a fashion brand increase their organic traffic and improve their conversion rate through SEO and content marketing.",
    image: "/placeholder.svg?height=300&width=500",
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
    description:
      "Our strategic approach to Facebook and Instagram advertising helped this skincare brand achieve exceptional return on ad spend.",
    image: "/placeholder.svg?height=300&width=500",
    metrics: [
      { label: "Return on Ad Spend", value: "15x" },
      { label: "Cost per Acquisition", value: "-40%" },
      { label: "Monthly Revenue", value: "+85%" },
    ],
    link: "/case-studies/skincare-facebook-ads",
  },
]

export default function MarketingBugs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-yellow-400 to-blue-600">
        <div className="absolute inset-0 bg-grid-white/10 bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                MarketingBugs
              </div>
              <h1 className="heading-xl">Grow Your Shopify Store with Data-Driven Marketing</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg">
                Strategic digital marketing solutions designed specifically for eCommerce businesses. Drive traffic,
                increase conversions, and maximize your ROI.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <ConnectButton className="bg-white text-blue-600 hover:bg-gray-100" />
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Marketing for eCommerce"
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

      {/* Key Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">250+</div>
              <p className="text-gray-600">Successful Campaigns</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">12x</div>
              <p className="text-gray-600">Average ROAS</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">180%</div>
              <p className="text-gray-600">Avg. Traffic Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">45%</div>
              <p className="text-gray-600">Conversion Rate Lift</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-lg mb-4">Our Marketing Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive digital marketing solutions tailored specifically for eCommerce businesses.
            </p>
          </div>
          <div className="space-y-16">
            {marketingServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                    {service.icon}
                  </div>
                  <h3 className="heading-md">{service.title}</h3>
                  <p className="text-lg text-gray-600">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 text-blue-600">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <ConnectButton className="bg-blue-600 hover:bg-blue-700 text-white" />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Marketing+Service+${index + 1}`}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRO Tips Section */}
      <ParallaxSection className="section-padding bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Conversion Rate Optimization</h2>
            <p className="text-lg opacity-90">
              Maximize your marketing ROI with our proven CRO techniques for Shopify stores.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors hover:translate-y-[-5px] duration-300">
              <div className="mb-4">
                <BarChart3 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ad Performance Optimization</h3>
              <p className="opacity-90">
                We continuously optimize your ad campaigns based on performance data to maximize ROAS and minimize CPA.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors hover:translate-y-[-5px] duration-300">
              <div className="mb-4">
                <LineChart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Funnel Design & Optimization</h3>
              <p className="opacity-90">
                We design and optimize your marketing funnels to guide customers smoothly from awareness to purchase.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors hover:translate-y-[-5px] duration-300">
              <div className="mb-4">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Persuasive Copywriting</h3>
              <p className="opacity-90">
                Our copywriters create compelling content that resonates with your audience and drives action.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Case Studies Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-lg mb-4">Marketing Case Studies</h2>
            <p className="text-lg text-gray-600">Real results we've achieved for our eCommerce clients.</p>
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
                  <div className="text-sm text-blue-600 font-medium mb-2">{study.client}</div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-sm text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={study.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:underline group"
                  >
                    View case study{" "}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/case-studies?category=marketing">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-transform">
                View All Marketing Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-400 to-blue-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Grow Your eCommerce Business?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a free marketing consultation with our experts and discover how we can help you achieve your growth
              goals.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 transform hover:scale-105 transition-transform">
              Book a Marketing Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
