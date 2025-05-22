import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ConnectButton from "@/components/connect-button"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Increase Your Shopify Store Conversion Rate",
    excerpt:
      "Learn proven strategies to optimize your Shopify store and boost your conversion rates. From product page optimization to checkout improvements.",
    image: "/placeholder.svg?height=300&width=600&text=Conversion+Rate+Optimization",
    category: "Conversion Optimization",
    author: "John Smith",
    date: "May 15, 2023",
    tags: ["Shopify", "Conversion Rate", "eCommerce"],
    slug: "increase-shopify-conversion-rate",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Shopify SEO in 2023",
    excerpt:
      "Discover the latest SEO techniques to improve your Shopify store's visibility in search engines and drive more organic traffic.",
    image: "/placeholder.svg?height=300&width=600&text=Shopify+SEO",
    category: "SEO",
    author: "Sarah Johnson",
    date: "April 28, 2023",
    tags: ["Shopify", "SEO", "eCommerce"],
    slug: "shopify-seo-guide",
  },
  {
    id: 3,
    title: "How to Choose the Right Shopify Theme for Your Business",
    excerpt:
      "Selecting the right Shopify theme is crucial for your store's success. Learn how to choose a theme that aligns with your brand and business goals.",
    image: "/placeholder.svg?height=300&width=600&text=Shopify+Themes",
    category: "Design",
    author: "Michael Chen",
    date: "April 10, 2023",
    tags: ["Shopify", "Design", "Themes"],
    slug: "choosing-right-shopify-theme",
  },
  {
    id: 4,
    title: "5 Essential Shopify Apps to Boost Sales",
    excerpt:
      "Discover the must-have Shopify apps that can help increase your store's sales and improve customer experience.",
    image: "/placeholder.svg?height=300&width=600&text=Shopify+Apps",
    category: "Apps",
    author: "Emily Rodriguez",
    date: "March 22, 2023",
    tags: ["Shopify", "Apps", "Sales"],
    slug: "essential-shopify-apps",
  },
  {
    id: 5,
    title: "How to Create a Successful Email Marketing Strategy for Your Shopify Store",
    excerpt:
      "Learn how to build an effective email marketing strategy that drives repeat purchases and increases customer lifetime value.",
    image: "/placeholder.svg?height=300&width=600&text=Email+Marketing",
    category: "Marketing",
    author: "David Wilson",
    date: "March 15, 2023",
    tags: ["Email Marketing", "Shopify", "Strategy"],
    slug: "shopify-email-marketing-strategy",
  },
  {
    id: 6,
    title: "The Complete Guide to Shopify Plus for Enterprise Businesses",
    excerpt:
      "Everything you need to know about Shopify Plus, the enterprise-level eCommerce platform for high-volume merchants.",
    image: "/placeholder.svg?height=300&width=600&text=Shopify+Plus",
    category: "Shopify Plus",
    author: "John Smith",
    date: "February 28, 2023",
    tags: ["Shopify Plus", "Enterprise", "eCommerce"],
    slug: "shopify-plus-guide",
  },
]

// Categories
const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Shopify", count: 12 },
  { name: "Design", count: 8 },
  { name: "Marketing", count: 10 },
  { name: "SEO", count: 6 },
  { name: "Development", count: 9 },
]

// Popular tags
const popularTags = [
  { name: "Shopify", count: 15 },
  { name: "eCommerce", count: 12 },
  { name: "Design", count: 8 },
  { name: "SEO", count: 6 },
  { name: "Marketing", count: 10 },
  { name: "Conversion", count: 5 },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Blog</h1>
            <p className="text-xl text-gray-700 mb-8">
              Stay updated with the latest eCommerce trends, tips, and strategies to help your business grow.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-[#FF2C2C] focus:ring focus:ring-[#FF2C2C]/20 focus:outline-none"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:translate-y-[-5px] duration-300"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="inline-block bg-[#FF2C2C]/10 text-[#FF2C2C] text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-[#FF2C2C] transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-[#FF2C2C] font-medium hover:underline group"
                        >
                          Read more{" "}
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button className="bg-[#FF2C2C] hover:bg-[#e01f1f]">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.name.toLowerCase()}`}
                          className="flex items-center justify-between py-2 hover:text-[#FF2C2C] transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Tags */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag.name.toLowerCase()}`}
                        className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-sm hover:bg-[#FF2C2C] hover:text-white hover:border-[#FF2C2C] transition-colors"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag.name} ({tag.count})
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Featured Post */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Featured Post</h3>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=600&text=Featured+Post"
                        alt="Featured Post"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">The Future of eCommerce: Trends to Watch in 2023</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Discover the emerging trends that will shape the future of eCommerce in 2023 and beyond.
                      </p>
                      <Link
                        href="/blog/future-ecommerce-trends"
                        className="inline-flex items-center text-[#FF2C2C] text-sm font-medium hover:underline group"
                      >
                        Read more <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#FF2C2C] text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="opacity-90 mb-4">
                    Get the latest eCommerce tips and strategies delivered directly to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white focus:ring-0"
                    />
                    <Button className="w-full bg-white text-[#FF2C2C] hover:bg-gray-100">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Need Help with Your eCommerce Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts is ready to help you achieve your eCommerce goals. Let's discuss how we can work
              together.
            </p>
            <ConnectButton />
          </div>
        </div>
      </section>
    </div>
  )
}
