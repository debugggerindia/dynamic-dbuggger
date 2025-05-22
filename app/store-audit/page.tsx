"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  ArrowRight,
  Search,
  Zap,
  MousePointerClick,
  Paintbrush,
  ShoppingCart,
  Globe,
  BarChart3,
  LineChart,
  Smartphone,
  Laptop,
  Gauge,
  FileText,
  Tag,
  LinkIcon,
  ShieldIcon,
} from "lucide-react"
import CalendlyButton from "@/components/calendly-button"

// Sample industries for dropdown
const industries = [
  { value: "fashion", label: "Fashion" },
  { value: "beauty", label: "Beauty & Cosmetics" },
  { value: "electronics", label: "Electronics" },
  { value: "home", label: "Home & Furniture" },
  { value: "food", label: "Food & Beverage" },
  { value: "jewelry", label: "Jewelry & Accessories" },
  { value: "health", label: "Health & Wellness" },
  { value: "sports", label: "Sports & Outdoors" },
  { value: "toys", label: "Toys & Games" },
  { value: "other", label: "Other" },
]

// Status indicators
const StatusIndicator = ({ status }: { status: "good" | "warning" | "bad" }) => {
  if (status === "good") {
    return <CheckCircle2 className="h-5 w-5 text-green-500" />
  } else if (status === "warning") {
    return <AlertTriangle className="h-5 w-5 text-yellow-500" />
  } else {
    return <XCircle className="h-5 w-5 text-red-500" />
  }
}

export default function StoreAudit() {
  const [storeUrl, setStoreUrl] = useState("")
  const [industry, setIndustry] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [auditResults, setAuditResults] = useState<any>(null)
  const [urlError, setUrlError] = useState("")
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const validateUrl = (url: string) => {
    // Basic URL validation
    if (!url) {
      setUrlError("Please enter a store URL")
      return false
    }

    // Check if it's a valid URL format
    try {
      new URL(url.startsWith("http") ? url : `https://${url}`)
      setUrlError("")
      return true
    } catch (e) {
      setUrlError("Please enter a valid URL")
      return false
    }
  }

  const handleNextStep = () => {
    if (step === 1) {
      if (!validateUrl(storeUrl) || !industry) {
        return
      }
      setStep(2)
    } else if (step === 2) {
      if (!name || !email) {
        return
      }
      generateAuditReport()
    }
  }

  const generateAuditReport = () => {
    setIsLoading(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // Generate dummy audit data
      const seoScore = Math.floor(Math.random() * 40) + 40 // 40-80
      const performanceScore = Math.floor(Math.random() * 40) + 40 // 40-80
      const uxScore = Math.floor(Math.random() * 40) + 40 // 40-80
      const designScore = Math.floor(Math.random() * 40) + 40 // 40-80

      const auditData = {
        url: storeUrl.startsWith("http") ? storeUrl : `https://${storeUrl}`,
        industry: industry,
        timestamp: new Date().toISOString(),
        overallScore: Math.floor((seoScore + performanceScore + uxScore + designScore) / 4),
        seo: {
          score: seoScore,
          h1TagPresence: {
            value: Math.floor(Math.random() * 3) + 1,
            status: Math.random() > 0.7 ? "warning" : "good",
            ideal: "1",
            description: "Your page should have exactly one H1 tag that clearly describes the page content.",
          },
          metaTitleLength: {
            value: Math.floor(Math.random() * 30) + 40,
            status: Math.random() > 0.6 ? "good" : "warning",
            ideal: "50-60 characters",
            description: "Meta titles should be between 50-60 characters for optimal display in search results.",
          },
          metaDescriptionLength: {
            value: Math.floor(Math.random() * 50) + 120,
            status: Math.random() > 0.6 ? "good" : "warning",
            ideal: "120-160 characters",
            description:
              "Meta descriptions should be between 120-160 characters to properly display in search results.",
          },
          imageAltTexts: {
            value: Math.floor(Math.random() * 10) + 1,
            status: Math.random() > 0.5 ? "warning" : "bad",
            ideal: "0 missing alt texts",
            description: "All images should have descriptive alt text for accessibility and SEO purposes.",
          },
          sitemapPresence: {
            value: Math.random() > 0.7 ? "Present" : "Missing",
            status: Math.random() > 0.7 ? "good" : "bad",
            ideal: "Present",
            description: "A sitemap.xml file helps search engines discover and index your pages more efficiently.",
          },
          robotsTxtValidity: {
            value: Math.random() > 0.6 ? "Valid" : "Invalid",
            status: Math.random() > 0.6 ? "good" : "bad",
            ideal: "Valid",
            description: "A properly configured robots.txt file helps control search engine crawling of your site.",
          },
          brokenInternalLinks: {
            value: Math.floor(Math.random() * 5),
            status: Math.random() > 0.7 ? "good" : "bad",
            ideal: "0",
            description: "Broken links create a poor user experience and can negatively impact SEO.",
          },
        },
        performance: {
          score: performanceScore,
          pageSpeedScore: {
            value: Math.floor(Math.random() * 40) + 40,
            status: Math.random() > 0.6 ? "warning" : "bad",
            ideal: "90+",
            description:
              "Google PageSpeed score indicates how well your site performs. Higher scores correlate with better user experience.",
          },
          largestContentfulPaint: {
            value: (Math.random() * 3 + 1.5).toFixed(1),
            status: Math.random() > 0.6 ? "warning" : "bad",
            ideal: "< 2.5 seconds",
            description:
              "LCP measures when the largest content element becomes visible. It should occur within 2.5 seconds for a good user experience.",
          },
          cumulativeLayoutShift: {
            value: (Math.random() * 0.25).toFixed(2),
            status: Math.random() > 0.7 ? "good" : "warning",
            ideal: "< 0.1",
            description:
              "CLS measures visual stability. A low score indicates minimal unexpected layout shifts during page loading.",
          },
          jsBundleSize: {
            value: Math.floor(Math.random() * 500) + 500,
            status: Math.random() > 0.5 ? "warning" : "bad",
            ideal: "< 500KB",
            description:
              "Large JavaScript bundles increase load time and can negatively impact performance, especially on mobile devices.",
          },
        },
        ux: {
          score: uxScore,
          ctaButtonContrast: {
            value: Math.random() > 0.7 ? "Good" : "Needs Improvement",
            status: Math.random() > 0.7 ? "good" : "warning",
            ideal: "Good",
            description: "CTA buttons should have high contrast to stand out and drive conversions.",
          },
          mobileElementSpacing: {
            value: Math.random() > 0.6 ? "Good" : "Needs Improvement",
            status: Math.random() > 0.6 ? "good" : "warning",
            ideal: "Good",
            description:
              "Touch targets on mobile should be at least 44x44 pixels and have adequate spacing to prevent mis-taps.",
          },
          productBadges: {
            value: Math.random() > 0.5 ? "Present" : "Missing",
            status: Math.random() > 0.5 ? "good" : "warning",
            ideal: "Present",
            description:
              "Product badges (sale, new, bestseller) help highlight special products and can increase conversions.",
          },
        },
        design: {
          score: designScore,
          visualHierarchy: {
            value: Math.random() > 0.6 ? "Clear" : "Needs Improvement",
            status: Math.random() > 0.6 ? "good" : "warning",
            ideal: "Clear",
            description:
              "A clear visual hierarchy guides users through your content and helps them find what they're looking for.",
          },
          productImageQuality: {
            value: Math.random() > 0.7 ? "Good" : "Needs Improvement",
            status: Math.random() > 0.7 ? "good" : "warning",
            ideal: "Good",
            description:
              "High-quality product images are crucial for eCommerce success. They should be clear, consistent, and show products from multiple angles.",
          },
          trustSealsBadges: {
            value: Math.random() > 0.5 ? "Present" : "Missing",
            status: Math.random() > 0.5 ? "good" : "warning",
            ideal: "Present",
            description: "Trust seals and security badges help build credibility and can increase conversion rates.",
          },
        },
      }

      setAuditResults(auditData)
      setIsLoading(false)
      setStep(3)

      // In a real implementation, you would store this data in Firebase
      // firebase.firestore().collection('audits').add(auditData)
    }, 3000)
  }

  return (
    <div className="min-h-screen p-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Free Shopify Store Audit</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a comprehensive analysis of your Shopify store's SEO, performance, UX, and design. Discover
              opportunities to improve your conversion rate and grow your business.
            </p>
          </div>

          {step < 3 && (
            <div className="mb-8">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10"></div>
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      s === step
                        ? "bg-[#FF2C2C] text-white"
                        : s < step
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {s < step ? <CheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span>Store Details</span>
                <span>Your Info</span>
                <span>Results</span>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6">Enter Your Store Details</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="storeUrl">Shopify Store URL</Label>
                        <div className="relative">
                          <Input
                            id="storeUrl"
                            placeholder="yourstorename.myshopify.com"
                            value={storeUrl}
                            onChange={(e) => setStoreUrl(e.target.value)}
                            className={`pl-10 ${urlError ? "border-red-500" : ""}`}
                          />
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        {urlError && <p className="text-sm text-red-500">{urlError}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select value={industry} onValueChange={setIndustry}>
                          <SelectTrigger id="industry" className="pl-10 relative">
                            <ShoppingCart className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {industries.map((industry) => (
                              <SelectItem key={industry.value} value={industry.value}>
                                {industry.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What You'll Get:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="mr-3 mt-1 text-[#FF2C2C]">
                            <Search className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-medium">SEO Analysis</span>
                            <p className="text-sm text-gray-600">Discover how to improve your search rankings</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 mt-1 text-[#FF2C2C]">
                            <Zap className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-medium">Performance Review</span>
                            <p className="text-sm text-gray-600">Get insights on your store's loading speed</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 mt-1 text-[#FF2C2C]">
                            <MousePointerClick className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-medium">UX Evaluation</span>
                            <p className="text-sm text-gray-600">Learn how to improve user experience</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 mt-1 text-[#FF2C2C]">
                            <Paintbrush className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-medium">Design Assessment</span>
                            <p className="text-sm text-gray-600">Get feedback on your visual design</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Button
                        className="w-full bg-[#FF2C2C] hover:bg-[#e01f1f] text-lg py-6"
                        onClick={handleNextStep}
                        disabled={!storeUrl || !industry}
                      >
                        Continue <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 border-t border-gray-100 flex items-center">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Lock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Your information is secure and will never be shared.</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Image
                    src="/placeholder.svg?height=40&width=120&text=Shopify+Partner"
                    alt="Shopify Partner"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                    <p className="text-gray-600 mb-6">
                      We'll send your detailed audit report to your email. Please provide your contact information.
                    </p>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-semibold mb-4">Your Store Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Store URL:</span>
                          <span className="font-medium">{storeUrl}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Industry:</span>
                          <span className="font-medium">{industries.find((i) => i.value === industry)?.label}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button
                        className="w-full bg-[#FF2C2C] hover:bg-[#e01f1f] text-lg py-6"
                        onClick={handleNextStep}
                        disabled={!name || !email}
                      >
                        Generate Audit Report <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Info className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Your audit report will be generated immediately and also sent to your email for future reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-100">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-t-4 border-[#FF2C2C] animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Search className="h-10 w-10 text-[#FF2C2C]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Analyzing Your Store</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're scanning your Shopify store and analyzing multiple aspects to provide a comprehensive audit. This
                will take just a moment...
              </p>
              <div className="mt-8 max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-1/3 text-left text-sm text-gray-600">Checking SEO...</div>
                    <div className="w-2/3">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF2C2C] rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-left text-sm text-gray-600">Analyzing Performance...</div>
                    <div className="w-2/3">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF2C2C] rounded-full w-1/2 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-left text-sm text-gray-600">Evaluating UX...</div>
                    <div className="w-2/3">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF2C2C] rounded-full w-1/4 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-left text-sm text-gray-600">Reviewing Design...</div>
                    <div className="w-2/3">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF2C2C] rounded-full w-1/6 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {auditResults && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"></div>
                <div
                  className="absolute top-0 left-0 h-1 bg-green-500 transition-all duration-1000"
                  style={{ width: `${auditResults.overallScore}%` }}
                ></div>

                <h2 className="text-2xl font-bold mb-2">Audit Results for {auditResults.url}</h2>
                <p className="text-gray-600 mb-6">
                  Industry: {industries.find((i) => i.value === auditResults.industry)?.label} | Generated on{" "}
                  {new Date(auditResults.timestamp).toLocaleDateString()}
                </p>

                <div className="flex justify-center mb-8">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold">{auditResults.overallScore}</div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={`${auditResults.overallScore >= 80 ? "#10b981" : auditResults.overallScore >= 60 ? "#f59e0b" : "#ef4444"}`}
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * auditResults.overallScore) / 100}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border border-red-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center mb-2">
                      <Search className="h-6 w-6 text-[#FF2C2C]" />
                    </div>
                    <div className="text-2xl font-bold">{auditResults.seo.score}</div>
                    <div className="text-sm text-gray-600">SEO Score</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center mb-2">
                      <Gauge className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold">{auditResults.performance.score}</div>
                    <div className="text-sm text-gray-600">Performance Score</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center mb-2">
                      <MousePointerClick className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold">{auditResults.ux.score}</div>
                    <div className="text-sm text-gray-600">UX Score</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center mb-2">
                      <Paintbrush className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold">{auditResults.design.score}</div>
                    <div className="text-sm text-gray-600">Design Score</div>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="seo" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="seo" className="flex items-center gap-2">
                    <Search className="h-4 w-4" /> SEO
                  </TabsTrigger>
                  <TabsTrigger value="performance" className="flex items-center gap-2">
                    <Zap className="h-4 w-4" /> Performance
                  </TabsTrigger>
                  <TabsTrigger value="ux" className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" /> UX
                  </TabsTrigger>
                  <TabsTrigger value="design" className="flex items-center gap-2">
                    <Paintbrush className="h-4 w-4" /> Design
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="seo" className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl mb-6 border border-red-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm">
                        <BarChart3 className="h-6 w-6 text-[#FF2C2C]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">SEO Overview</h3>
                        <p className="text-gray-600">
                          Your SEO score is {auditResults.seo.score}/100. Here are the key issues we found that could be
                          affecting your search rankings.
                        </p>
                      </div>
                    </div>
                  </div>

                  {Object.entries(auditResults.seo)
                    .filter(([key]) => key !== "score")
                    .map(([key, value]: [string, any]) => (
                      <Card
                        key={key}
                        className="border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <CardHeader className="pb-2 bg-gradient-to-r from-gray-50 to-white">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg flex items-center gap-2">
                              {key === "h1TagPresence" && <FileText className="h-4 w-4 text-[#FF2C2C]" />}
                              {key === "metaTitleLength" && <FileText className="h-4 w-4 text-[#FF2C2C]" />}
                              {key === "metaDescriptionLength" && <FileText className="h-4 w-4 text-[#FF2C2C]" />}
                              {key === "imageAltTexts" && <image className="h-4 w-4 text-[#FF2C2C]" />}
                              {key === "sitemapPresence" && <FileText className="h-4 w-4 text-[#FF2C2C]" />}
                              {key === "robotsTxtValidity" && <FileText className="h-4 w-4 text-[#FF2C2C]" />}
                              {key === "brokenInternalLinks" && <LinkIcon className="h-4 w-4 text-[#FF2C2C]" />}
                              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                            </CardTitle>
                            <StatusIndicator status={value.status} />
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">Current Value:</span>
                            <span className="font-medium">{value.value}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-3">
                            <span className="text-gray-500">Ideal Value:</span>
                            <span className="font-medium">{value.ideal}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                            <Info className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                            <p>{value.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent value="performance" className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl mb-6 border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm">
                        <LineChart className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Performance Overview</h3>
                        <p className="text-gray-600">
                          Your performance score is {auditResults.performance.score}/100. Improving these metrics will
                          help your store load faster and provide a better user experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {Object.entries(auditResults.performance)
                    .filter(([key]) => key !== "score")
                    .map(([key, value]: [string, any]) => (
                      <Card
                        key={key}
                        className="border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <CardHeader className="pb-2 bg-gradient-to-r from-gray-50 to-white">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg flex items-center gap-2">
                              {key === "pageSpeedScore" && <Gauge className="h-4 w-4 text-blue-600" />}
                              {key === "largestContentfulPaint" && <Laptop className="h-4 w-4 text-blue-600" />}
                              {key === "cumulativeLayoutShift" && <Smartphone className="h-4 w-4 text-blue-600" />}
                              {key === "jsBundleSize" && <FileText className="h-4 w-4 text-blue-600" />}
                              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                            </CardTitle>
                            <StatusIndicator status={value.status} />
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">Current Value:</span>
                            <span className="font-medium">{value.value}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-3">
                            <span className="text-gray-500">Ideal Value:</span>
                            <span className="font-medium">{value.ideal}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                            <Info className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                            <p>{value.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent value="ux" className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl mb-6 border border-purple-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm">
                        <Smartphone className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">User Experience Overview</h3>
                        <p className="text-gray-600">
                          Your UX score is {auditResults.ux.score}/100. Enhancing these aspects will improve how users
                          interact with your store and increase conversion rates.
                        </p>
                      </div>
                    </div>
                  </div>

                  {Object.entries(auditResults.ux)
                    .filter(([key]) => key !== "score")
                    .map(([key, value]: [string, any]) => (
                      <Card
                        key={key}
                        className="border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <CardHeader className="pb-2 bg-gradient-to-r from-gray-50 to-white">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg flex items-center gap-2">
                              {key === "ctaButtonContrast" && <MousePointerClick className="h-4 w-4 text-purple-600" />}
                              {key === "mobileElementSpacing" && <Smartphone className="h-4 w-4 text-purple-600" />}
                              {key === "productBadges" && <Tag className="h-4 w-4 text-purple-600" />}
                              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                            </CardTitle>
                            <StatusIndicator status={value.status} />
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">Current Value:</span>
                            <span className="font-medium">{value.value}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-3">
                            <span className="text-gray-500">Ideal Value:</span>
                            <span className="font-medium">{value.ideal}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                            <Info className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                            <p>{value.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent value="design" className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl mb-6 border border-green-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm">
                        <Paintbrush className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Design Overview</h3>
                        <p className="text-gray-600">
                          Your design score is {auditResults.design.score}/100. A visually appealing store with clear
                          hierarchy helps build trust and guide customers to purchase.
                        </p>
                      </div>
                    </div>
                  </div>

                  {Object.entries(auditResults.design)
                    .filter(([key]) => key !== "score")
                    .map(([key, value]: [string, any]) => (
                      <Card
                        key={key}
                        className="border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <CardHeader className="pb-2 bg-gradient-to-r from-gray-50 to-white">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg flex items-center gap-2">
                              {key === "visualHierarchy" && <Paintbrush className="h-4 w-4 text-green-600" />}
                              {key === "productImageQuality" && <image className="h-4 w-4 text-green-600" />}
                              {key === "trustSealsBadges" && <ShieldIcon className="h-4 w-4 text-green-600" />}
                              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                            </CardTitle>
                            <StatusIndicator status={value.status} />
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">Current Value:</span>
                            <span className="font-medium">{value.value}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-3">
                            <span className="text-gray-500">Ideal Value:</span>
                            <span className="font-medium">{value.ideal}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                            <Info className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                            <p>{value.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>

              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] opacity-90"></div>
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Pattern')] bg-repeat opacity-10"></div>

                <div className="relative z-10 p-8 md:p-12 text-white">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Fix These Issues?</h3>
                      <p className="text-lg mb-6">
                        Our team of Shopify experts can help you implement these recommendations and improve your
                        store's performance, user experience, and conversion rate.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <CalendlyButton
                          className="bg-[#FF2C2C] hover:bg-[#e01f1f] text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-transform"
                          text="Schedule a Strategy Call"
                        />
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                          View Services
                        </Button>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-xl font-bold mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-[#FF2C2C]" />
                            <span>Personalized improvement plan</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-[#FF2C2C]" />
                            <span>Implementation of critical fixes</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-[#FF2C2C]" />
                            <span>Conversion rate optimization</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-[#FF2C2C]" />
                            <span>30-day support after implementation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Lock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
