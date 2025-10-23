"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function ContactTestimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "Vibrant Design Studio transformed our house into a dream home. Their attention to detail and creative approach exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      text: "The team designed our office space beautifully. It's functional, inspiring, and our clients are always impressed when they visit.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Arun Patel",
      role: "Property Developer",
      text: "Professional, creative, and reliable. We've worked with Vibrant Design on multiple projects and they consistently deliver excellence.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-black dark:bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-card hover:scale-105 transition-transform duration-300 rounded-2xl border-2">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
