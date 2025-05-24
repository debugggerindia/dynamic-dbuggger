import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Star, Zap, ShieldCheck, TrendingUp, ShoppingCart, Code, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientLogoSlider from "@/components/client-logo-slider"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ConnectButton from "@/components/connect-button"
import ParallaxSection from "@/components/parallax-section"

// Sample data
const clientLogos = [
  { src: "/images/shopify-logo.png", alt: "Shopify" },
  { src: "/images/shopify-plus.png", alt: "Shopify Plus" },
  { src: "/images/amazon-logo.png", alt: "Amazon" },
  { src: "/images/flipkart-logo.png", alt: "Flipkart" },
  { src: "/images/walmart-logo.png", alt: "Walmart" },
  { src: "/images/myntra-logo.png", alt: "Myntrs" },
   { src: "/images/nykaa-logo.png", alt: "Nykaa" },
  { src: "/images/ajio-logo.png", alt: "Ajio" },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Fashion Brand Co.",
    image: "/placeholder.svg?height=150&width=150",
    quote:
      "Working with dbuggger transformed our online store. Their team's expertise in Shopify development and marketing strategies increased our conversion rate by 45% in just three months.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "TechGadgets Inc.",
    image: "/placeholder.svg?height=150&width=150",
    quote:
      "The CommerceBugs team helped us migrate to Shopify Plus seamlessly. Their technical knowledge and attention to detail made all the difference in scaling our eCommerce operations.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "eCommerce Manager",
    company: "Organic Beauty Co.",
    image: "/placeholder.svg?height=150&width=150",
    quote:
      "MarketingBugs' SEO and PPC strategies delivered incredible ROI. We've seen a 200% increase in organic traffic and our ad campaigns are performing better than ever.",
  },
]

const industries = [
  { name: "Fashion", image: "/images/fashion.png", link: "/case-studies?industry=fashion" },
  { name: "Skincare", image: "/images/skincare.png", link: "/case-studies?industry=skincare" },
  { name: "Electronics", image: "/images/electronics.png", link: "/case-studies?industry=electronics" },
  { name: "Furniture", image: "/images/furniture.png", link: "/case-studies?industry=furniture" },
  { name: "Food & Beverage", image: "/images/food.png", link: "/case-studies?industry=food" },
  { name: "Jewelry", image: "/images/jewelry.png", link: "/case-studies?industry=jewelry" },
]

const services = [
  {
    title: "Shopify Development",
    description: "Custom Shopify store development with optimized performance and conversion-focused design.",
    icon: <ShoppingCart className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/services/shopify",
  },
  {
    title: "Shopify Plus",
    description: "Enterprise-grade solutions for high-volume merchants with complex business requirements.",
    icon: <Star className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/services/shopify-plus",
  },
  {
    title: "Design Services",
    description: "Stunning UI/UX design that enhances brand identity and improves user experience.",
    icon: <PenTool className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/services/design",
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to drive traffic and increase sales.",
    icon: <TrendingUp className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/marketing-bugs",
  },
  {
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to improve visibility and organic rankings.",
    icon: <Zap className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/marketing-bugs#seo",
  },
  {
    title: "Custom Development",
    description: "Tailored solutions for unique business requirements and complex functionality.",
    icon: <Code className="h-12 w-12 text-[#FF2C2C]" />,
    link: "/services/custom-development",
  },
]

const stats = [
  { value: "250+", label: "Projects Completed", icon: <CheckCircle2 className="h-6 w-6 text-[#FF2C2C]" /> },
  { value: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6 text-[#FF2C2C]" /> },
  { value: "15+", label: "Years Experience", icon: <ShieldCheck className="h-6 w-6 text-[#FF2C2C]" /> },
  { value: "45%", label: "Avg. Conversion Increase", icon: <TrendingUp className="h-6 w-6 text-[#FF2C2C]" /> },
]

const features = [
  {
    title: "Expert Shopify Development",
    description: "Our team of certified Shopify experts builds high-performing, conversion-focused online stores.",
    icon: <Zap className="h-10 w-10 text-[#FF2C2C]" />,
  },
  {
    title: "Strategic Marketing",
    description:
      "Data-driven marketing strategies that drive traffic, engagement, and sales for your eCommerce business.",
    icon: <TrendingUp className="h-10 w-10 text-[#FF2C2C]" />,
  },
  {
    title: "Conversion Optimization",
    description: "We optimize every aspect of your store to maximize conversions and increase your bottom line.",
    icon: <Star className="h-10 w-10 text-[#FF2C2C]" />,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 3D animated background with eCommerce theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
          {/* Animated shopping cart icons */}
          <div className="absolute w-full h-full overflow-hidden opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 15}s`,
                }}
              >
                <ShoppingCart className="text-white/30" size={Math.random() * 20 + 10} />
              </div>
            ))}
          </div>
        </div>

        {/* Glowing accent elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF2C2C]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#4361ee]/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Digital circuit pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Circuit+Pattern')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-ping"></span>
                Premier Shopify eCommerce Agency
              </div>
              <h1 className="heading-xl text-white">
                We <span className="text-[#FF2C2C] font-extrabold">Debug</span> Your eCommerce{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF2C2C] to-[#4361ee]">
                  Growth Challenges
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                We build, optimize, and scale high-converting Shopify stores for brands that want to dominate their
                market. Our team of eCommerce experts will transform your online presence.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <ConnectButton className="bg-[#FF2C2C] hover:bg-[#e01f1f] text-white" />
                <Link href="/store-audit">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Free Store Audit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              {/* 3D Shopify store mockup */}


              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-all hover:scale-[1.02] duration-500 border border-white/10 perspective">
                <div className="relative">
                  {/* Video Embed (Autoplay, Loop, Muted, Inline) */}
                  <video
                    src="./videos/shopify-store.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                  {/* Floating UI elements */}
                  <div
                    className="absolute top-16 right-10 bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 animate-float"
                    style={{ animationDelay: '0.5s' }}
                  >
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className="absolute top-20 left-10 bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 animate-float"
                    style={{ animationDelay: '1s' }}
                  >
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className="absolute bottom-20 right-20 bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 animate-float"
                    style={{ animationDelay: '1.5s' }}
                  >
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm">Live Store Demo</span>
                    </div>
                    <h3 className="text-white text-lg font-bold">Premium eCommerce Experience</h3>
                  </div>
                </div>
              </div>




              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FF2C2C]/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#4361ee]/20 rounded-full blur-3xl -z-10"></div>

              {/* Code snippet decoration */}
              <div className="absolute -right-10 -bottom-10 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700 shadow-xl transform rotate-6 hidden md:block">
                <div className="text-xs font-mono text-green-400">
                  <div>// Optimized Shopify code</div>
                  <div>
                    <span className="text-blue-400">function</span>{" "}
                    <span className="text-yellow-400">boostConversion</span>() &#123;
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-purple-400">return</span>{" "}
                    <span className="text-orange-400">revenue</span> * <span className="text-green-400">2</span>;
                  </div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-8 md:py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-gray-600">Trusted by leading brands and platforms</h2>
          </div>
          <ClientLogoSlider logos={clientLogos} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Why Choose dbuggger?</h2>
            <p className="text-lg text-gray-600">We're not just another agency. We're your eCommerce growth partner.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive eCommerce solutions to help your business grow and succeed online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col border border-gray-100 hover:border-[#FF2C2C]/20 hover:translate-y-[-5px] duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
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

      {/* Industry Showcase */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-lg mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">We have expertise across a wide range of eCommerce industries.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] border border-gray-200"
              >
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio">
              <Button className="bg-[#FF2C2C] hover:bg-[#e01f1f] transform hover:scale-105 transition-transform">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ParallaxSection className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF2C2C] to-[#9C0000]"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Pattern')] bg-repeat opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-white">
              <h2 className="heading-lg">Ready to grow your eCommerce business?</h2>
              <p className="text-lg opacity-90">
                Get a free audit of your Shopify store and discover opportunities for growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Comprehensive SEO analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Performance optimization recommendations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>UX and design evaluation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Conversion rate optimization tips</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/store-audit">
                  <Button className="bg-white text-[#FF2C2C] hover:bg-gray-100 transform hover:scale-105 transition-transform">
                    Get Your Free Store Audit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl border border-white/20">
                {/* Video Embed (Autoplay, Loop, Muted, Inline) */}
                  <video
                    src="./videos/ecommerce-analysis.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900">Detailed Store Analysis</h3>
                  <p className="text-gray-600 mt-2">
                    Our audit provides actionable insights to improve your store's performance and conversion rate.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Latest from Our Blog</h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest eCommerce trends, tips, and strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Blog+Post+${post}`}
                    alt={`Blog Post ${post}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#FF2C2C] font-medium mb-2">eCommerce Tips</div>
                  <h3 className="text-xl font-bold mb-3">How to Increase Your Shopify Store Conversion Rate</h3>
                  <p className="text-gray-600 mb-4">
                    Learn the proven strategies to optimize your Shopify store and boost your conversion rates.
                  </p>
                  <Link
                    href="/blog/post-1"
                    className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" className="border-[#FF2C2C] text-[#FF2C2C] hover:bg-[#FF2C2C]/10">
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
