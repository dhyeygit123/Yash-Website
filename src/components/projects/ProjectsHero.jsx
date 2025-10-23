"use client"

export default function ProjectsHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Our <span className="text-primary">Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
          Explore our diverse collection of architectural masterpieces and interior design excellence
        </p>
      </div>
    </section>
  )
}
