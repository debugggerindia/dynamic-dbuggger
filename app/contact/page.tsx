"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectGoals: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectGoals: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen p-24 bg-white pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="heading-lg mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            Have a question or ready to start your project? Reach out to us and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#FF2C2C] mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      IT Park, MIDC, Parsodi, Pratap Nagar,
                      <br />
                      Nagpur, Maharashtra 440022, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#FF2C2C] mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+91 9021271911</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#FF2C2C] mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">contact@dbuggger.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-[#FF2C2C] mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <p className="text-gray-600">+91 9021271911</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg overflow-hidden h-64 relative">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Google+Map"
                alt="Office Location"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                    <h3 className="font-bold text-lg mb-2">Message Sent Successfully!</h3>
                    <p>Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) => handleSelectChange("subject", value)}
                        >
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="development">Shopify Development</SelectItem>
                            <SelectItem value="design">Design Services</SelectItem>
                            <SelectItem value="marketing">Marketing Services</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectGoals">Project Goals</Label>
                      <Textarea
                        id="projectGoals"
                        name="projectGoals"
                        value={formData.projectGoals}
                        onChange={handleChange}
                        placeholder="What are you looking to achieve with your project?"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#FF2C2C] hover:bg-[#e01f1f] transform hover:scale-105 transition-transform"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you start on my project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We typically begin new projects within 1-2 weeks of signing the contract. For urgent requests, we may
                  be able to accommodate a faster timeline depending on our current workload.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with clients outside the US?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we work with clients globally. Our team is experienced in collaborating remotely with businesses
                  from different time zones and countries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What information do you need to provide a quote?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide an accurate quote, we typically need information about your project scope, timeline,
                  specific requirements, and business goals. The more details you can provide, the more precise our
                  estimate will be.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does a typical Shopify project take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Project timelines vary depending on complexity. A basic Shopify store setup typically takes 2-3 weeks,
                  while custom development projects can take 4-8 weeks or more. We'll provide a specific timeline
                  estimate for your project during our initial consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
