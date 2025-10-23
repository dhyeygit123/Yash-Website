"use client"

import { Award, Users, Building2, Trophy } from 'lucide-react'

export default function Achievements() {
  const stats = [
    {
      icon: Building2,
      number: "150+",
      label: "Projects Completed"
    },
    {
      icon: Users,
      number: "200+",
      label: "Happy Clients"
    },
    {
      icon: Award,
      number: "25+",
      label: "Design Awards"
    },
    {
      icon: Trophy,
      number: "10+",
      label: "Years Experience"
    }
  ]

  const awards = [
    {
      year: "2023",
      title: "Best Residential Design",
      organization: "National Architecture Excellence Awards"
    },
    {
      year: "2022",
      title: "Sustainable Design Innovation",
      organization: "Green Building Council India"
    },
    {
      year: "2022",
      title: "Interior Designer of the Year",
      organization: "Indian Interior Design Awards"
    },
    {
      year: "2021",
      title: "Excellence in Commercial Architecture",
      organization: "Asia Pacific Design Awards"
    }
  ]

  const collaborations = [
    "Indian Institute of Architects",
    "Council of Architecture, India",
    "Indian Institute of Interior Designers",
    "Green Building Council of India",
    "Urban Design Collective"
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="font-serif text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Awards & Collaborations */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Awards */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-8">
              Awards & <span className="text-primary">Recognition</span>
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-2">
                  <div className="text-sm text-primary font-semibold mb-1">{award.year}</div>
                  <h4 className="font-semibold text-lg mb-1">{award.title}</h4>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborations */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-8">
              Professional <span className="text-primary">Affiliations</span>
            </h3>
            <div className="space-y-4">
              {collaborations.map((collab, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <p className="font-medium">{collab}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}