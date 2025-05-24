import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users, Target, Zap } from "lucide-react"
import ConnectButton from "@/components/connect-button"
import ParallaxSection from "@/components/parallax-section"

// Sample team data
const teamMembers = [
  {
    name: "John Smith",
    position: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years of experience in eCommerce, John founded dbuggger to help brands succeed in the digital marketplace.",
  },
  {
    name: "Sarah Johnson",
    position: "Head of Development",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah leads our development team with expertise in Shopify Plus and custom theme development.",
  },
  {
    name: "Michael Chen",
    position: "Marketing Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael brings 10+ years of digital marketing experience, specializing in eCommerce growth strategies.",
  },
  {
    name: "Emily Rodriguez",
    position: "Lead Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Emily creates stunning designs that not only look beautiful but drive conversions for our clients.",
  },
]

// Timeline data
const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description: "dbuggger was founded with a mission to help eCommerce brands succeed on Shopify.",
  },
  {
    year: "2017",
    title: "Shopify Partner",
    description: "Became an official Shopify Partner, expanding our expertise and capabilities.",
  },
  {
    year: "2018",
    title: "MarketingBugs Launch",
    description: "Launched our specialized marketing division to provide comprehensive digital marketing services.",
  },
  {
    year: "2019",
    title: "Shopify Plus Partner",
    description: "Achieved Shopify Plus Partner status, enabling us to serve enterprise-level clients.",
  },
  {
    year: "2020",
    title: "CommerceBugs Launch",
    description: "Expanded our development services with the launch of CommerceBugs, focused on technical excellence.",
  },
  {
    year: "2022",
    title: "100th Client Milestone",
    description: "Celebrated our 100th successful client project, with stores generating over $50M in revenue.",
  },
  {
    year: "2023",
    title: "International Expansion",
    description: "Expanded our services globally, serving clients across North America, Europe, and Asia.",
  },
]

// Values data
const values = [
  {
    icon: <Target className="h-10 w-10 text-[#FF2C2C]" />,
    title: "Results-Driven",
    description: "We focus on delivering measurable results that impact your bottom line. Your success is our success.",
  },
  {
    icon: <Zap className="h-10 w-10 text-[#FF2C2C]" />,
    title: "Innovation",
    description: "We stay at the forefront of eCommerce technology and trends to provide cutting-edge solutions.",
  },
  {
    icon: <Users className="h-10 w-10 text-[#FF2C2C]" />,
    title: "Collaboration",
    description:
      "We work closely with our clients, treating your business as our own and becoming an extension of your team.",
  },
  {
    icon: <CheckCircle2 className="h-10 w-10 text-[#FF2C2C]" />,
    title: "Excellence",
    description: "We're committed to delivering excellence in everything we do, from code quality to customer service.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-xl text-gray-900">
                Our Story: Building <span className="text-gradient-red">eCommerce Success</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                dbuggger was founded with a simple mission: to help brands build, market, and scale successful eCommerce
                businesses. We're passionate about solving complex problems and delivering exceptional results.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <ConnectButton />
                <Link href="#team">
                  <Button variant="outline" className="border-[#FF2C2C] text-[#FF2C2C] hover:bg-[#FF2C2C]/10">
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=About+dbuggger"
                  alt="About dbuggger"
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

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Our Mission</h2>
            <p className="text-2xl font-medium text-gray-700 mb-8">
              "Build, Market, Scale: Empowering brands to achieve eCommerce success through innovative solutions and
              data-driven strategies."
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 text-[#FF2C2C] font-medium">
                <span className="h-1 w-8 bg-[#FF2C2C] rounded-full"></span>
                <span>dbuggger Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do and define how we work with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <ParallaxSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Bedbug+Mascot"
                  alt="Bedbug Mascot"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="heading-lg">Meet Our Mascot</h2>
              <p className="text-lg text-gray-700">
                Our "Bedbug" mascot represents our commitment to finding and fixing the bugs in your eCommerce business.
                Just like a real debugger in programming, we identify issues, solve problems, and optimize your Shopify
                store for maximum performance.
              </p>
              <p className="text-lg text-gray-700">
                The name "dbuggger" (with three g's) symbolizes our three core services: development, design, and
                marketing - the three pillars of eCommerce success.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              From our humble beginnings to becoming a leading Shopify agency, here's how we've grown.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="relative z-10">
              {timeline.map((item, index) => (
                <div key={index} className="mb-12">
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row md:flex-row-reverse" : "flex-row"}`}>
                    <div className="w-full md:w-1/2 px-4 md:px-8">
                      <div
                        className={`bg-white rounded-xl shadow-md p-6 ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <div className="inline-block bg-[#FF2C2C]/10 px-3 py-1 rounded-full text-sm font-medium text-[#FF2C2C] mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-[#FF2C2C] border-4 border-white"></div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-8 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Our talented team of experts is passionate about helping businesses succeed in the digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-[#FF2C2C] font-medium mb-3">{member.position}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for talented individuals to join our team.
            </p>
            <Link href="/careers">
              <Button className="bg-[#FF2C2C] hover:bg-[#e01f1f] transform hover:scale-105 transition-transform">
                View Career Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#FF2C2C] text-white rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to work with us?</h2>
                <p className="text-lg opacity-90 mb-6">
                  Let's discuss how we can help your eCommerce business grow and succeed.
                </p>
                <ConnectButton className="bg-white text-[#FF2C2C] hover:bg-gray-100" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0" />
                  <p>Expert team with years of Shopify experience</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0" />
                  <p>Data-driven approach to maximize ROI</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0" />
                  <p>Comprehensive services under one roof</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0" />
                  <p>Proven track record of client success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
