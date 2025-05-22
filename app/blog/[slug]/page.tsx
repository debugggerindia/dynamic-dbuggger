import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag, Facebook, Twitter, Linkedin, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ConnectButton from "@/components/connect-button"

// This would typically come from a CMS or API
// Now using an array of blog posts for generateStaticParams
const blogPosts = [
  {
    title: "10 Ways to Increase Your Shopify Store Conversion Rate",
    excerpt:
      "Learn proven strategies to optimize your Shopify store and boost your conversion rates. From product page optimization to checkout improvements.",
    content: `
      <p>Conversion rate optimization (CRO) is one of the most effective ways to increase revenue from your existing traffic. In this article, we'll explore 10 proven strategies to boost your Shopify store's conversion rate.</p>
      
      <h2>1. Optimize Your Product Pages</h2>
      <p>Your product pages are where the magic happens. Make sure they include:</p>
      <ul>
        <li>High-quality images from multiple angles</li>
        <li>Clear, benefit-focused product descriptions</li>
        <li>Prominent call-to-action buttons</li>
        <li>Customer reviews and social proof</li>
        <li>Clear pricing and shipping information</li>
      </ul>
      
      <h2>2. Streamline Your Checkout Process</h2>
      <p>A complicated checkout process is a conversion killer. Consider these improvements:</p>
      <ul>
        <li>Enable guest checkout</li>
        <li>Minimize form fields</li>
        <li>Show a progress indicator</li>
        <li>Offer multiple payment options</li>
        <li>Display trust badges and security symbols</li>
      </ul>
      
      <h2>3. Implement Abandoned Cart Recovery</h2>
      <p>Cart abandonment is a common issue in eCommerce. Set up automated emails to remind customers about items left in their cart, potentially offering a small discount to encourage completion of the purchase.</p>
      
      <h2>4. Optimize Site Speed</h2>
      <p>Slow-loading pages significantly impact conversion rates. Improve your site speed by:</p>
      <ul>
        <li>Optimizing image sizes</li>
        <li>Minimizing HTTP requests</li>
        <li>Using a content delivery network (CDN)</li>
        <li>Enabling browser caching</li>
        <li>Removing unnecessary apps and plugins</li>
      </ul>
      
      <h2>5. Use High-Quality, Zoomable Product Images</h2>
      <p>Since customers can't physically touch your products, high-quality images are essential. Include multiple angles and enable zoom functionality to give customers a detailed view of what they're buying.</p>
      
      <h2>6. Add Product Videos</h2>
      <p>Product videos can increase conversions by 80% or more. They provide a dynamic view of your products in action and can address common questions or concerns.</p>
      
      <h2>7. Display Clear Shipping Information</h2>
      <p>Unexpected shipping costs are a leading cause of cart abandonment. Be transparent about shipping costs and delivery times early in the shopping process.</p>
      
      <h2>8. Implement Live Chat</h2>
      <p>Live chat allows you to address customer questions and concerns in real-time, removing barriers to purchase and building trust.</p>
      
      <h2>9. Use Urgency and Scarcity Tactics</h2>
      <p>Create a sense of urgency with limited-time offers or highlight low stock levels to encourage immediate purchases.</p>
      
      <h2>10. A/B Test Everything</h2>
      <p>Continuously test different elements of your store to identify what works best for your specific audience. Test one element at a time to clearly understand what's driving improvements.</p>
      
      <h2>Conclusion</h2>
      <p>Improving your Shopify store's conversion rate is an ongoing process. By implementing these strategies and continuously testing and refining your approach, you can significantly increase your revenue without necessarily increasing your traffic.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Conversion+Rate+Optimization",
    category: "Conversion Optimization",
    author: "John Smith",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio: "John is a Shopify expert with over 10 years of experience in eCommerce optimization.",
    date: "May 15, 2023",
    tags: ["Shopify", "Conversion Rate", "eCommerce"],
    slug: "increase-shopify-conversion-rate",
    relatedPosts: [
      {
        title: "The Ultimate Guide to Shopify SEO in 2023",
        excerpt: "Discover the latest SEO techniques to improve your Shopify store's visibility in search engines.",
        image: "/placeholder.svg?height=200&width=300&text=Shopify+SEO",
        slug: "shopify-seo-guide",
      },
      {
        title: "5 Essential Shopify Apps to Boost Sales",
        excerpt: "Discover the must-have Shopify apps that can help increase your store's sales.",
        image: "/placeholder.svg?height=200&width=300&text=Shopify+Apps",
        slug: "essential-shopify-apps",
      },
      {
        title: "How to Create a Successful Email Marketing Strategy",
        excerpt: "Learn how to build an effective email marketing strategy that drives repeat purchases.",
        image: "/placeholder.svg?height=200&width=300&text=Email+Marketing",
        slug: "shopify-email-marketing-strategy",
      },
    ],
  },
  {
    title: "The Ultimate Guide to Shopify SEO in 2023",
    excerpt: "Discover the latest SEO techniques to improve your Shopify store's visibility in search engines.",
    image: "/placeholder.svg?height=200&width=300&text=Shopify+SEO",
    slug: "shopify-seo-guide",
    // Add more details as needed for a complete blog post object
    author: "Jane Doe",
    date: "June 2, 2023",
    category: "SEO",
    tags: ["Shopify", "SEO", "eCommerce"],
    // Simplified for brevity
  },
  {
    title: "5 Essential Shopify Apps to Boost Sales",
    excerpt: "Discover the must-have Shopify apps that can help increase your store's sales.",
    image: "/placeholder.svg?height=200&width=300&text=Shopify+Apps",
    slug: "essential-shopify-apps",
    // Add more details as needed for a complete blog post object
    author: "Mike Johnson",
    date: "July 10, 2023",
    category: "Apps",
    tags: ["Shopify", "Apps", "Sales"],
    // Simplified for brevity
  },
  {
    title: "How to Create a Successful Email Marketing Strategy",
    excerpt: "Learn how to build an effective email marketing strategy that drives repeat purchases.",
    image: "/placeholder.svg?height=200&width=300&text=Email+Marketing",
    slug: "shopify-email-marketing-strategy",
    // Add more details as needed for a complete blog post object
    author: "Sarah Wilson",
    date: "August 5, 2023",
    category: "Email Marketing",
    tags: ["Email", "Marketing", "Strategy"],
    // Simplified for brevity
  }
]

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Get the blog post data based on the slug
  const post = blogPosts.find(post => post.slug === params.slug) || blogPosts[0]

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-[#FF2C2C] mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
            </Link>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="inline-block bg-[#FF2C2C]/10 text-[#FF2C2C] text-xs font-medium px-2.5 py-0.5 rounded mr-3">
                {post.category}
              </span>
              <div className="flex items-center mr-3">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-gray-700">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Social Share Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-2">Share this article</p>
                  <div className="flex flex-col space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="h-4 w-4 mr-2" /> Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="h-4 w-4 mr-2" /> Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
              </article>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm hover:bg-[#FF2C2C]/10 hover:text-[#FF2C2C] transition-colors"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Author Bio */}
              {post.authorBio && (
                <div className="mt-12 bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">{post.authorBio}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="rounded-full" aria-label="Twitter">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Share Buttons */}
              <div className="mt-8 flex justify-center space-x-4 lg:hidden">
                <Button variant="outline" size="sm" className="rounded-full" aria-label="Share on Facebook">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" aria-label="Share on Twitter">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" aria-label="Share on LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedPost, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="relative h-40">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <h3 className="font-bold mb-2 hover:text-[#FF2C2C] transition-colors">{relatedPost.title}</h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt}</p>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-[#FF2C2C] text-sm font-medium hover:underline group"
                      >
                        Read more <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-[#FF2C2C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your Shopify Store?</h2>
            <p className="text-lg opacity-90 mb-8">
              Our team of experts can help you implement these strategies and more to boost your conversion rate and
              grow your business.
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