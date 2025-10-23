"use client"

import { Target, Eye, Heart } from 'lucide-react'

export default function VisionMission() {
  const values = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be recognized globally as pioneers in innovative architectural and interior design, creating spaces that inspire generations and set new standards of excellence in the industry."
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To transform client aspirations into reality through thoughtful design, sustainable practices, and unwavering commitment to quality. We strive to create spaces that enhance lives and communities."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, creativity, and client-centricity form the foundation of everything we do. We believe in building lasting relationships through transparency, innovation, and exceptional service."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}