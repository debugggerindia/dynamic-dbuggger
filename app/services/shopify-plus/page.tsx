import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Code,
  Globe,
  Rocket,
  Lock,
  Zap,
  BarChart,
  Layers,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CalendlyButton from "@/components/calendly-button"
import ParallaxSection from "@/components/parallax-section"

export default function ShopifyPlusPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-black from-[#008060] via-[#00937B] to-[#00A699]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Grid+Pattern')] bg-repeat opacity-10"></div>

        {/* Animated elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-white">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium border border-white/20">
                Shopify Plus Experts
              </div>
              <h1 className="heading-xl">
                Enterprise eCommerce <span className="text-yellow-300">Debugged</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 max-w-lg">
                Unlock the full potential of Shopify Plus with our expert development, customization, and optimization
                services tailored for high-volume merchants.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <CalendlyButton className="bg-white text-[#008060] hover:bg-gray-100" />
                <Link href="/store-audit">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Free Store Audit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 border border-white/10">
                <Image
                  src="/images/shopify-plus-features.webp"
                  alt="Shopify Plus Enterprise Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Why Choose Shopify Plus?</h2>
            <p className="text-lg text-gray-600">
              Shopify Plus offers enterprise-grade solutions for high-volume merchants and complex business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-10 w-10 text-[#008060]" />,
                title: "Speed & Power",
                description: "Handle high-volume traffic and sales with unlimited bandwidth and 99.99% uptime.",
              },
              {
                icon: <Code className="h-10 w-10 text-[#008060]" />,
                title: "Shopify Scripts",
                description: "Create custom checkout experiences with personalized discounts and shipping options.",
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-[#008060]" />,
                title: "Advanced Security",
                description: "Level 1 PCI DSS compliant with fraud analysis and dedicated SSL certificate.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#008060]" />,
                title: "Unlimited Staff Accounts",
                description: "Add as many team members as needed with customizable permissions.",
              },
              {
                icon: <Layers className="h-10 w-10 text-[#008060]" />,
                title: "Shopify Plus Flow",
                description: "Automate workflows and business processes without coding.",
              },
              {
                icon: <Globe className="h-10 w-10 text-[#008060]" />,
                title: "Wholesale Channel",
                description: "Create password-protected wholesale stores with custom pricing.",
              },
              {
                icon: <Zap className="h-10 w-10 text-[#008060]" />,
                title: "Launchpad",
                description: "Schedule and automate flash sales, product launches, and campaigns.",
              },
              {
                icon: <BarChart className="h-10 w-10 text-[#008060]" />,
                title: "Enterprise Resource Planning",
                description: "Integrate with ERP systems for streamlined operations.",
              },
              {
                icon: <Lock className="h-10 w-10 text-[#008060]" />,
                title: "Apps & Integrations",
                description: "Connect with third-party services and custom integrations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Shopify Plus Services</h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive Shopify Plus services to help you maximize your enterprise eCommerce potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Shopify Plus Migration",
                description:
                  "Seamless migration from any platform to Shopify Plus with zero downtime and data integrity.",
                features: [
                  "Data migration (products, customers, orders)",
                  "Custom integrations with existing systems",
                  "SEO preservation strategy",
                  "Post-migration support and optimization",
                ],
              },
              {
                title: "Custom Development",
                description: "Tailored development solutions to meet your unique business requirements.",
                features: [
                  "Custom theme development",
                  "App development and integration",
                  "Shopify Scripts for checkout customization",
                  "API integrations with third-party systems",
                ],
              },
              {
                title: "International Expansion",
                description: "Expand your business globally with multi-currency and multi-language support.",
                features: [
                  "Multi-store setup and management",
                  "Currency conversion and localization",
                  "International payment gateway integration",
                  "Compliance with local regulations",
                ],
              },
              {
                title: "Performance Optimization",
                description: "Optimize your store for speed, conversion, and user experience.",
                features: [
                  "Page speed optimization",
                  "Conversion rate optimization",
                  "Mobile experience enhancement",
                  "Server-side rendering implementation",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#008060] font-medium hover:underline group"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <ParallaxSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Shopify Plus Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how we've helped enterprise brands achieve remarkable results with Shopify Plus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fashion Brand Replatforming",
                description:
                  "Migrated a fashion retailer from Magento to Shopify Plus, resulting in 40% faster page load times and 25% increase in conversion rate.",
                image: "/placeholder.svg?height=300&width=400&text=Fashion+Case+Study",
                link: "/case-studies/fashion-replatforming",
              },
              {
                title: "Multi-Channel Beauty Brand",
                description:
                  "Implemented a multi-channel strategy for a beauty brand, increasing sales by 65% and expanding to 12 international markets.",
                image: "/placeholder.svg?height=300&width=400&text=Beauty+Case+Study",
                link: "/case-studies/beauty-multi-channel",
              },
              {
                title: "B2B Manufacturing Company",
                description:
                  "Developed a custom B2B portal for a manufacturing company, streamlining ordering process and reducing order processing time by 70%.",
                image: "/placeholder.svg?height=300&width=400&text=B2B+Case+Study",
                link: "/case-studies/b2b-manufacturing",
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <Link
                    href={caseStudy.link}
                    className="inline-flex items-center text-[#008060] font-medium hover:underline group"
                  >
                    Read case study{" "}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about Shopify Plus and our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What is the difference between Shopify and Shopify Plus?",
                answer:
                  "Shopify Plus is the enterprise version of Shopify, offering additional features like dedicated support, higher API call limits, script editor for checkout customization, multiple store management, and more advanced customization options.",
              },
              {
                question: "How much does Shopify Plus cost?",
                answer:
                  "Shopify Plus pricing starts at $2,000 per month or 0.25% of monthly revenue (whichever is higher), with a cap at $40,000 per month. Our implementation services are quoted separately based on project requirements.",
              },
              {
                question: "How long does it take to migrate to Shopify Plus?",
                answer:
                  "Migration timelines vary depending on the complexity of your store. A basic migration can take 4-6 weeks, while more complex migrations with custom functionality can take 8-12 weeks or more.",
              },
              {
                question: "Can Shopify Plus handle high-volume sales?",
                answer:
                  "Yes, Shopify Plus is specifically designed for high-volume merchants. It can handle up to 10,000+ transactions per minute and offers 99.99% uptime, making it ideal for flash sales, product launches, and high-traffic events.",
              },
              {
                question: "What kind of support do Shopify Plus merchants receive?",
                answer:
                  "Shopify Plus merchants receive priority 24/7 support and a dedicated Merchant Success Manager who helps with strategic guidance, technical support, and optimization recommendations.",
              },
              {
                question: "Can I customize the checkout experience with Shopify Plus?",
                answer:
                  "Yes, Shopify Plus allows for checkout customization through Shopify Scripts, which lets you create personalized experiences, apply custom discounts, and modify shipping and payment options.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#008060] to-[#006C51]"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Pattern')] bg-repeat opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="heading-lg mb-6">Ready to upgrade to Shopify Plus?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our team of Shopify Plus experts help you unlock the full potential of your enterprise eCommerce
              business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CalendlyButton className="bg-white text-[#008060] hover:bg-gray-100 transform hover:scale-105 transition-transform" />
              <Link href="/store-audit">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform"
                >
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
