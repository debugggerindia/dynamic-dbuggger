import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import ConnectButton from "@/components/connect-button"
import BeforeAfterSlider from "@/components/before-after-slider"

// This would typically come from a CMS or API
// Added additional case studies for generateStaticParams
const caseStudies = [
  {
    slug: "fashion-seo-case-study",
    title: "200% Increase in Organic Traffic for Fashion Retailer",
    client: "Elegance Apparel",
    industry: "Fashion",
    description:
      "How we helped a leading fashion retailer increase their organic traffic by 200% and improve their conversion rate through comprehensive SEO and content marketing strategies.",
    challenge:
      "Elegance Apparel, a premium fashion retailer, was struggling to gain visibility in search engines and attract organic traffic to their Shopify store. Despite having high-quality products and a beautiful website, they were not ranking for key industry terms and were heavily reliant on paid advertising for traffic.",
    solution:
      "We implemented a comprehensive SEO and content marketing strategy that included technical SEO improvements, content optimization, and a strategic content creation plan focused on high-value keywords in the fashion industry.",
    results: [
      "200% increase in organic traffic within 6 months",
      "45% improvement in conversion rate from organic traffic",
      "120% growth in revenue from organic channels",
      "First page rankings for 75+ high-value keywords",
      "35% reduction in customer acquisition cost",
    ],
    testimonial: {
      quote:
        "The team at dbuggger transformed our online presence. Their SEO expertise and strategic approach to content marketing has significantly increased our organic traffic and reduced our reliance on paid advertising. We're now reaching our target audience more effectively and seeing a substantial improvement in our conversion rates.",
      name: "Sarah Johnson",
      position: "Marketing Director, Elegance Apparel",
    },
    image: "/placeholder.svg?height=500&width=1000&text=Fashion+SEO+Case+Study",
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
    metrics: [
      { label: "Organic Traffic Increase", value: "200%" },
      { label: "Conversion Rate Improvement", value: "45%" },
      { label: "Revenue Growth", value: "120%" },
      { label: "Keyword Rankings", value: "75+" },
      { label: "CAC Reduction", value: "35%" },
    ],
    process: [
      {
        title: "Comprehensive SEO Audit",
        description:
          "We conducted a thorough audit of the website's technical SEO, content, and backlink profile to identify opportunities for improvement.",
      },
      {
        title: "Keyword Research & Strategy",
        description:
          "We identified high-value keywords with commercial intent that aligned with the client's product offerings and target audience.",
      },
      {
        title: "Technical SEO Optimization",
        description:
          "We implemented technical improvements to enhance site speed, mobile responsiveness, and crawlability.",
      },
      {
        title: "Content Optimization",
        description:
          "We optimized existing product pages and category pages for target keywords while improving user experience.",
      },
      {
        title: "Content Creation",
        description:
          "We developed a content calendar and created high-quality blog posts, buying guides, and lookbooks to attract and engage the target audience.",
      },
      {
        title: "Link Building",
        description: "We implemented a strategic link building campaign to improve domain authority and rankings.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "15x ROAS with Facebook Ads",
        client: "Skincare Brand",
        image: "/placeholder.svg?height=200&width=300&text=Skincare+Ads",
        slug: "skincare-facebook-ads",
      },
      {
        title: "65% Faster Page Load Speed",
        client: "Electronics Store",
        image: "/placeholder.svg?height=200&width=300&text=Electronics+Speed",
        slug: "electronics-speed-optimization",
      },
    ],
  },
  {
    slug: "skincare-facebook-ads",
    title: "15x ROAS with Facebook Ads for Skincare Brand",
    client: "Skincare Brand",
    industry: "Beauty",
    // Add more details as needed...
    image: "/placeholder.svg?height=200&width=300&text=Skincare+Ads",
    // Simplified for brevity - you would add all the required fields here
  },
  {
    slug: "electronics-speed-optimization",
    title: "65% Faster Page Load Speed for Electronics Store",
    client: "Electronics Store", 
    industry: "Electronics",
    // Add more details as needed...
    image: "/placeholder.svg?height=200&width=300&text=Electronics+Speed",
    // Simplified for brevity - you would add all the required fields here
  }
]

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // Get the case study data based on the slug
  const caseStudy = caseStudies.find(study => study.slug === params.slug) || caseStudies[0]

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Grid+Pattern')] bg-repeat opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF2C2C]/20 to-blue-900/20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/case-studies" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Case Studies
            </Link>
            <div className="flex items-center text-sm text-gray-300 mb-4">
              <span className="inline-block bg-[#FF2C2C]/20 text-[#FF2C2C] text-xs font-medium px-2.5 py-0.5 rounded mr-3">
                {caseStudy.client}
              </span>
              <span className="inline-block bg-white/10 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                {caseStudy.industry}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-gray-300">{caseStudy.description}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {caseStudy.metrics?.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                  <div className="text-2xl font-bold text-[#FF2C2C]">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">The Results</h2>
                    <ul className="space-y-2">
                      {caseStudy.results?.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#FF2C2C] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Our Process</h3>
                  <div className="space-y-4">
                    {caseStudy.process?.map((step, index) => (
                      <div key={index} className="relative pl-8">
                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#FF2C2C]/10 flex items-center justify-center">
                          <span className="text-[#FF2C2C] text-sm font-bold">{index + 1}</span>
                        </div>
                        <h4 className="font-bold mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      {caseStudy.beforeImage && caseStudy.afterImage && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Before & After</h2>
              <BeforeAfterSlider
                beforeImage={caseStudy.beforeImage}
                afterImage={caseStudy.afterImage}
                beforeAlt="Before our work"
                afterAlt="After our work"
              />
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl text-[#FF2C2C] opacity-20 mb-4">"</div>
                  <p className="text-lg text-gray-600 italic mb-6">{caseStudy.testimonial.quote}</p>
                  <div className="flex flex-col items-center">
                    <h4 className="font-bold">{caseStudy.testimonial.name}</h4>
                    <p className="text-gray-500">{caseStudy.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {caseStudy.relatedCaseStudies && caseStudy.relatedCaseStudies.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.relatedCaseStudies.map((relatedStudy, index) => (
                  <Link
                    key={index}
                    href={`/case-studies/${relatedStudy.slug}`}
                    className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="relative h-40">
                      <Image
                        src={relatedStudy.image || "/placeholder.svg"}
                        alt={relatedStudy.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-[#FF2C2C] font-medium mb-1">{relatedStudy.client}</div>
                      <h3 className="font-bold group-hover:text-[#FF2C2C] transition-colors">{relatedStudy.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF2C2C] to-[#9C0000]"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Pattern')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how we can help you achieve your eCommerce goals and create your own success story.
            </p>
            <button className="bg-white text-[#FF2C2C] hover:bg-gray-100 transform hover:scale-105 transition-transform">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}