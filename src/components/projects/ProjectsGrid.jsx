"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { MapPin, Calendar, Ruler } from 'lucide-react'

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'visualization', label: '3D Visualisations' },
    { id: 'planning', label: 'Planning' }
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Villa Residence",
      category: "architecture",
      location: "Mumbai, India",
      year: "2023",
      area: "5,000 sq.ft",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      description: "A contemporary villa that seamlessly blends luxury with sustainable design principles. The project features open living spaces, floor-to-ceiling windows, and a minimalist aesthetic that emphasizes natural light and ventilation.",
      features: ["Sustainable Materials", "Smart Home Integration", "Infinity Pool", "Rooftop Garden"]
    },
    {
      id: 2,
      title: "Urban Loft Interior",
      category: "interiors",
      location: "Bangalore, India",
      year: "2023",
      area: "2,800 sq.ft",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
      description: "Industrial chic meets modern comfort in this stunning urban loft transformation. Exposed brick walls, high ceilings, and carefully curated furnishings create a sophisticated living space.",
      features: ["Open Floor Plan", "Custom Furniture", "Exposed Structural Elements", "Art Gallery Wall"]
    },
    {
      id: 3,
      title: "Corporate Office Space",
      category: "interiors",
      location: "Pune, India",
      year: "2022",
      area: "12,000 sq.ft",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      description: "An innovative workspace design that fosters creativity and collaboration. The project includes flexible workstations, breakout zones, and state-of-the-art meeting facilities.",
      features: ["Flexible Workspaces", "Biophilic Design", "Acoustic Solutions", "Collaborative Zones"]
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      category: "architecture",
      location: "Goa, India",
      year: "2022",
      area: "6,500 sq.ft",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      description: "Panoramic ocean views and sophisticated design define this exclusive penthouse. The architecture maximizes natural light while providing privacy and luxury.",
      features: ["360° Views", "Private Terrace", "Wine Cellar", "Home Theater"]
    },
    {
      id: 5,
      title: "Boutique Hotel",
      category: "architecture",
      location: "Jaipur, India",
      year: "2023",
      area: "25,000 sq.ft",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      description: "A heritage-inspired boutique hotel that celebrates traditional Rajasthani architecture with contemporary amenities. The design incorporates local materials and craftsmanship.",
      features: ["Heritage Design", "Courtyard Gardens", "Local Craftsmanship", "Boutique Spa"]
    },
    {
      id: 6,
      title: "Residential Complex",
      category: "planning",
      location: "Hyderabad, India",
      year: "2022",
      area: "50,000 sq.ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      description: "A master-planned residential community featuring multiple dwelling units, shared amenities, and green spaces. The project emphasizes community living and sustainable development.",
      features: ["Community Planning", "Green Spaces", "Shared Amenities", "Sustainable Infrastructure"]
    },
    {
      id: 7,
      title: "Luxury Residence Interior",
      category: "interiors",
      location: "Delhi, India",
      year: "2023",
      area: "4,200 sq.ft",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      description: "An opulent interior design showcasing timeless elegance and modern luxury. Custom furnishings, rich textures, and curated art pieces create a sophisticated living environment.",
      features: ["Custom Millwork", "Luxury Finishes", "Smart Lighting", "Art Curation"]
    },
    {
      id: 8,
      title: "Commercial Complex",
      category: "visualization",
      location: "Chennai, India",
      year: "2023",
      area: "80,000 sq.ft",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      description: "Photo-realistic 3D visualizations for a mixed-use commercial development. The renders helped clients visualize the final outcome before construction began.",
      features: ["3D Modeling", "Photo-realistic Renders", "Virtual Tours", "Design Iterations"]
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="px-6"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div 
                    className="h-96 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${selectedProject.image})` }}
                  ></div>

                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div className="font-semibold">{selectedProject.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Year</div>
                        <div className="font-semibold">{selectedProject.year}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Area</div>
                        <div className="font-semibold">{selectedProject.area}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-semibold mb-3">Project Description</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}