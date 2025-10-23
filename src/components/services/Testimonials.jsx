"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Homeowner",
      project: "Modern Villa Residence",
      rating: 5,
      comment: "Working with YP Design Studio was an absolute pleasure. They transformed our vision into a stunning reality that exceeded all our expectations. The attention to detail and professionalism throughout the project was remarkable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Priya Patel",
      role: "Business Owner",
      project: "Corporate Office Space",
      rating: 5,
      comment: "The team's innovative approach to our office design created a workspace that truly inspires our employees. Their understanding of both aesthetics and functionality is unmatched. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Amit Desai",
      role: "Developer",
      project: "Boutique Hotel",
      rating: 5,
      comment: "YP Design Studio delivered exceptional results for our boutique hotel project. Their blend of traditional and contemporary design elements created a unique identity that our guests love. Outstanding work!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop"
    },
    {
      name: "Sneha Reddy",
      role: "Homeowner",
      project: "Luxury Penthouse",
      rating: 5,
      comment: "From the initial consultation to the final reveal, the entire process was seamless. The designers listened to our needs and created a space that perfectly reflects our lifestyle. We couldn't be happier!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear what our satisfied clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  ></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium mt-1">{testimonial.project}</p>
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}