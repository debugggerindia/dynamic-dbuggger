"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ConnectButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectGoals: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formData)
    // Reset form and close dialog
    setFormData({ name: "", email: "", message: "", projectGoals: "" })
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={`bg-[#FF2C2C] hover:bg-[#e01f1f] text-white ${className}`}>Connect</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Let's Connect</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you as soon as possible.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4 bg-white">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
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
          <div className="space-y-2">
            <Label htmlFor="projectGoals">Project Goals</Label>
            <Textarea
              id="projectGoals"
              name="projectGoals"
              value={formData.projectGoals}
              onChange={handleChange}
              placeholder="What are you looking to achieve?"
              rows={2}
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
              rows={3}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#FF2C2C] hover:bg-[#e01f1f] text-white">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
