"use client"

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
          Let's discuss your project and bring your vision to life
        </p>
      </div>
    </section>
  )
}