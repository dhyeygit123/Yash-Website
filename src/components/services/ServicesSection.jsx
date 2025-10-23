"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Building2, Home, Box, Map, Check } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Architecture",
      description: "From concept to completion, we create buildings that stand the test of time. Our architectural services blend innovative design with functional excellence.",
      offerings: [
        "Residential Architecture",
        "Commercial Architecture",
        "Sustainable Design",
        "Renovation & Restoration",
        "Building Permits & Approvals"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
    },
    {
      icon: Home,
      title: "Interior Design",
      description: "Transform your spaces into stunning environments that reflect your personality and lifestyle. We curate every detail to perfection.",
      offerings: [
        "Residential Interiors",
        "Commercial Interiors",
        "Space Planning",
        "Furniture Selection",
        "Lighting Design"
      ],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      icon: Box,
      title: "3D Visualisation",
      description: "See your project come to life before construction begins. Our photo-realistic renderings help you visualize every detail of your future space.",
      offerings: [
        "Exterior Renderings",
        "Interior Renderings",
        "Virtual Tours",
        "Animation Walkthroughs",
        "Design Iterations"
      ],
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: Map,
      title: "Planning & Consulting",
      description: "Strategic planning services that ensure your project's success from start to finish. We provide expert guidance at every stage.",
      offerings: [
        "Site Analysis",
        "Master Planning",
        "Feasibility Studies",
        "Project Management",
        "Design Consulting"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to meet your unique needs and exceed your expectations
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index}
                className="overflow-hidden border-border hover:border-primary transition-all duration-300"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div 
                    className={`h-80 md:h-auto bg-cover bg-center ${index % 2 === 1 ? 'md:order-2' : ''}`}
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    
                    <h3 className="font-serif text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.offerings.map((offering, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
