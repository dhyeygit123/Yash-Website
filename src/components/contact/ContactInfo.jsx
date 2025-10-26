"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["10 Patel Market", "Sardar Gunj", "Anand 388001, India"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-7990545840", "+91-7990618068"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["vibrantdstudio3125@gmail.com"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM","Sunday: 10:00 AM - 4:00PM"]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 rounded-2xl">
              <CardContent className="p-6">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}