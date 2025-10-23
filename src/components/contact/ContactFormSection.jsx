"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-3xl shadow-xl border-2 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Send Us a <span className="text-primary">Message</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="mt-2 rounded-xl border-2 h-12 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="mt-2 rounded-xl border-2 h-12 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="mt-2 rounded-xl border-2 h-12 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <Label htmlFor="service" className="text-foreground font-medium">Service Interested In</Label>
                <Input
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="e.g., Architecture, Interior Design"
                  className="mt-2 rounded-xl border-2 h-12 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground font-medium">Your Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="mt-2 rounded-xl border-2 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Send Message <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Location</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Visit our studio to discuss your project in person. We'd love to show you our work and share ideas over coffee.
            </p>
            <div className="h-[500px] bg-muted relative overflow-hidden rounded-3xl shadow-xl border-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8826077961855!2d72.8776594!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
