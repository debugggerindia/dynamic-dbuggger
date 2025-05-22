import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ConnectButton from "@/components/connect-button"

// Pricing data
const developmentPlans = [
  {
    name: "Bug Finder",
    description: "Perfect for small businesses just getting started with Shopify.",
    price: "$399",
    features: [
      { name: "Standard Shopify Setup", included: true },
      { name: "Theme Installation & Configuration", included: true },
      { name: "Basic Product Setup (up to 25 products)", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "1 Round of Revisions", included: true },
      { name: "Custom Theme Development", included: false },
      { name: "Advanced App Integrations", included: false },
      { name: "Custom Functionality", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Bug Squasher",
    description: "For growing businesses that need more customization and features.",
    price: "$599",
    features: [
      { name: "Everything in Bug Finder", included: true },
      { name: "Custom Theme Modifications", included: true },
      { name: "Advanced Product Setup (up to 100 products)", included: true },
      { name: "3 App Integrations", included: true },
      { name: "Advanced SEO Optimization", included: true },
      { name: "Speed Optimization", included: true },
      { name: "3 Rounds of Revisions", included: true },
      { name: "Basic Custom Functionality", included: true },
      { name: "Conversion Rate Optimization", included: false },
      { name: "Custom App Development", included: false },
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Bug Exterminator",
    description: "For established businesses that need a fully custom Shopify solution.",
    price: "$799+",
    features: [
      { name: "Everything in Bug Squasher", included: true },
      { name: "Custom Theme Development", included: true },
      { name: "Unlimited Product Setup", included: true },
      { name: "Unlimited App Integrations", included: true },
      { name: "Comprehensive SEO Strategy", included: true },
      { name: "Advanced Speed Optimization", included: true },
      { name: "Unlimited Revisions", included: true },
      { name: "Advanced Custom Functionality", included: true },
      { name: "Conversion Rate Optimization", included: true },
      { name: "Custom App Development", included: true },
    ],
    cta: "Contact Us",
    popular: false,
  },
]

const designPlans = [
  {
    name: "Design Bug Spotter",
    description: "Essential design services for new Shopify stores.",
    price: "$799",
    features: [
      { name: "Logo Refinement", included: true },
      { name: "Color Palette Selection", included: true },
      { name: "Typography Selection", included: true },
      { name: "Basic UI Elements", included: true },
      { name: "Homepage Design", included: true },
      { name: "Product Page Design", included: true },
      { name: "1 Round of Revisions", included: true },
      { name: "Collection Page Design", included: false },
      { name: "Custom Icons & Graphics", included: false },
      { name: "Animation & Micro-interactions", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Design Bug Fixer",
    description: "Comprehensive design services for a unique brand identity.",
    price: "$1,999",
    features: [
      { name: "Everything in Design Bug Spotter", included: true },
      { name: "Logo Design (3 concepts)", included: true },
      { name: "Extended Color Palette", included: true },
      { name: "Custom Typography", included: true },
      { name: "Advanced UI Elements", included: true },
      { name: "Collection Page Design", included: true },
      { name: "Custom Icons & Graphics", included: true },
      { name: "3 Rounds of Revisions", included: true },
      { name: "Animation & Micro-interactions", included: false },
      { name: "Complete Brand Guidelines", included: false },
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Design Bug Eliminator",
    description: "Complete brand identity and design system for your Shopify store.",
    price: "$3,499+",
    features: [
      { name: "Everything in Design Bug Fixer", included: true },
      { name: "Comprehensive Brand Identity", included: true },
      { name: "Complete Design System", included: true },
      { name: "Custom Illustrations", included: true },
      { name: "Advanced Animation & Micro-interactions", included: true },
      { name: "Complete Brand Guidelines", included: true },
      { name: "Marketing Materials Design", included: true },
      { name: "Social Media Templates", included: true },
      { name: "Email Template Design", included: true },
      { name: "Unlimited Revisions", included: true },
    ],
    cta: "Contact Us",
    popular: false,
  },
]

const marketingPlans = [
  {
    name: "Marketing Bug Hunter",
    description: "Essential marketing services to get your Shopify store noticed.",
    price: "$899/mo",
    features: [
      { name: "Basic SEO Optimization", included: true },
      { name: "Google Analytics Setup", included: true },
      { name: "Google Search Console Setup", included: true },
      { name: "Basic Social Media Setup", included: true },
      { name: "Monthly Performance Report", included: true },
      { name: "Google Ads Management (up to $2,500 spend)", included: false },
      { name: "Facebook & Instagram Ads", included: false },
      { name: "Email Marketing Campaigns", included: false },
      { name: "Content Creation", included: false },
      { name: "Conversion Rate Optimization", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Marketing Bug Zapper",
    description: "Comprehensive marketing strategy to grow your Shopify store.",
    price: "$1,999/mo",
    features: [
      { name: "Advanced SEO Optimization", included: true },
      { name: "Google Analytics & Tag Manager Setup", included: true },
      { name: "Google Ads Management (up to $5,000 spend)", included: true },
      { name: "Facebook & Instagram Ads Management", included: true },
      { name: "Basic Email Marketing Campaigns", included: true },
      { name: "Basic Content Creation", included: true },
      { name: "Bi-weekly Performance Reports", included: true },
      { name: "Basic Conversion Rate Optimization", included: true },
      { name: "Influencer Marketing", included: false },
      { name: "Advanced Content Strategy", included: false },
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Marketing Bug Destroyer",
    description: "Advanced marketing strategy to scale your Shopify store to new heights.",
    price: "$3,499+/mo",
    features: [
      { name: "Comprehensive SEO Strategy", included: true },
      { name: "Advanced Analytics & Tracking", included: true },
      { name: "Google Ads Management (unlimited spend)", included: true },
      { name: "Facebook, Instagram & TikTok Ads", included: true },
      { name: "Advanced Email Marketing Automation", included: true },
      { name: "Comprehensive Content Creation", included: true },
      { name: "Weekly Performance Reports", included: true },
      { name: "Advanced Conversion Rate Optimization", included: true },
      { name: "Influencer Marketing Strategy", included: true },
      { name: "Advanced Content Strategy", included: true },
    ],
    cta: "Contact Us",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen p-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="heading-lg mb-4">Transparent Pricing for Your eCommerce Success</h1>
          <p className="text-lg text-gray-600">
            Choose the plan that best fits your business needs. All plans include dedicated support and expert guidance.
          </p>
        </div>

        <Tabs defaultValue="development" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>

          <TabsContent value="development" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {developmentPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`flex flex-col ${
                    plan.popular ? "border-[#FF2C2C] shadow-lg relative overflow-hidden" : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-[#FF2C2C] text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[-10%] shadow-md">
                        POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader className={plan.popular ? "bg-[#FF2C2C]/5" : ""}>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.name !== "Bug Exterminator" && <span className="text-gray-500"> one-time</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3 mt-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "" : "text-gray-400"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {plan.name === "Bug Exterminator" ? (
                      <ConnectButton className={`w-full ${plan.popular ? "bg-[#FF2C2C]" : ""}`} />
                    ) : (
                      <Link href="/contact" className="w-full">
                        <Button
                          className={`w-full ${
                            plan.popular ? "bg-[#FF2C2C] hover:bg-[#e01f1f]" : ""
                          } transform hover:scale-105 transition-transform`}
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600">
                Need something more tailored to your specific requirements? We offer custom development services for
                complex Shopify projects. Contact us for a personalized quote.
              </p>
              <div className="mt-4">
                <ConnectButton />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="design" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {designPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`flex flex-col ${
                    plan.popular ? "border-[#FF2C2C] shadow-lg relative overflow-hidden" : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-[#FF2C2C] text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[-10%] shadow-md">
                        POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader className={plan.popular ? "bg-[#FF2C2C]/5" : ""}>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.name !== "Design Bug Eliminator" && <span className="text-gray-500"> one-time</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3 mt-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "" : "text-gray-400"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {plan.name === "Design Bug Eliminator" ? (
                      <ConnectButton className={`w-full ${plan.popular ? "bg-[#FF2C2C]" : ""}`} />
                    ) : (
                      <Link href="/contact" className="w-full">
                        <Button
                          className={`w-full ${
                            plan.popular ? "bg-[#FF2C2C] hover:bg-[#e01f1f]" : ""
                          } transform hover:scale-105 transition-transform`}
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Custom Design Services</h3>
              <p className="text-gray-600">
                Looking for a completely unique design for your Shopify store? Our team of expert designers can create a
                custom design that perfectly reflects your brand identity. Contact us for a personalized quote.
              </p>
              <div className="mt-4">
                <ConnectButton />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {marketingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`flex flex-col ${
                    plan.popular ? "border-[#FF2C2C] shadow-lg relative overflow-hidden" : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-[#FF2C2C] text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[-10%] shadow-md">
                        POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader className={plan.popular ? "bg-[#FF2C2C]/5" : ""}>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3 mt-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "" : "text-gray-400"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {plan.name === "Marketing Bug Destroyer" ? (
                      <ConnectButton className={`w-full ${plan.popular ? "bg-[#FF2C2C]" : ""}`} />
                    ) : (
                      <Link href="/contact" className="w-full">
                        <Button
                          className={`w-full ${
                            plan.popular ? "bg-[#FF2C2C] hover:bg-[#e01f1f]" : ""
                          } transform hover:scale-105 transition-transform`}
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Custom Marketing Solutions</h3>
              <p className="text-gray-600">
                Need a tailored marketing strategy for your specific industry or target audience? Our marketing experts
                can create a custom plan to help you achieve your business goals. Contact us for a personalized quote.
              </p>
              <div className="mt-4">
                <ConnectButton />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do you offer ongoing support?</h3>
              <p className="text-gray-600">
                Yes, we offer ongoing support and maintenance packages for all our development and design services.
                These can be customized based on your specific needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on complexity. Basic Shopify setups typically take 2-3 weeks, while
                custom development projects can take 4-8 weeks or more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">
                You can upgrade your plan at any time. We'll simply charge the difference between your current plan and
                the new one.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a satisfaction guarantee. If you're not happy with our services, we'll work with you to make it
                right. Please refer to our refund policy for more details.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#FF2C2C] text-white rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg opacity-90 mb-6">
                Book a free consultation with our experts and discover how we can help you achieve your eCommerce goals.
              </p>
              <Button className="bg-white text-[#FF2C2C] hover:bg-gray-100 transform hover:scale-105 transition-transform">
                Schedule a Consultation
              </Button>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                <p className="text-lg font-medium mb-1">Not sure which plan is right for you?</p>
                <p className="opacity-90 mb-4">Our experts can help you choose the perfect solution.</p>
                <Link href="/contact" className="text-white underline hover:text-white/90">
                  Contact us for guidance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
