"use client"

import { Lightbulb, Compass, Sparkles } from 'lucide-react'

export default function Philosophy() {
  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions that challenge conventional design norms."
    },
    {
      icon: Compass,
      title: "Functionality",
      description: "Merging aesthetics with practicality to create spaces that work as beautifully as they look."
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every detail of our design process."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Our Design <span className="text-primary">Philosophy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe that great design is more than just aesthetics—it's about creating 
            meaningful experiences that inspire, comfort, and elevate everyday living. Our 
            approach combines timeless elegance with contemporary innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
