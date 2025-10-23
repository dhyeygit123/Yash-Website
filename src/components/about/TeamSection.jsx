"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Mail, Linkedin } from 'lucide-react'

export default function TeamSection() {
  const team = [
    {
      name: "Ar. Yash Chauhan",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop",
      bio: "With over a decade of experience in architectural design, Yash brings visionary thinking and technical excellence to every project. His expertise in sustainable architecture and contemporary design has earned numerous accolades.",
      specialties: ["Sustainable Architecture", "Urban Planning", "Residential Design"],
      email: "yash@ypdesignstudio.com",
      linkedin: "#"
    },
    {
      name: "Ar. Priyanshi Tanna",
      role: "Principal Interior Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop",
      bio: "Priyanshi's artistic vision and meticulous attention to detail have transformed countless interiors into stunning works of art. Her approach combines timeless elegance with modern sensibilities, creating spaces that resonate with their inhabitants.",
      specialties: ["Luxury Interiors", "Space Planning", "3D Visualization"],
      email: "priyanshi@ypdesignstudio.com",
      linkedin: "#"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The creative minds behind our exceptional designs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden border-border hover:border-primary transition-all duration-300">
              <div className="relative h-96">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-3xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">{member.bio}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}