export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80&auto=format&fit=crop"
          alt="Institut de beauté zen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-soft-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-light mb-6">
          Institut de Beauté — Saint-Jean-de-Luz
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          L'Art du Soin,<br />
          <em>Revisité</em>
        </h1>
        <p className="font-sans font-light text-lg text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
          Un cocon dédié à votre bien-être, au cœur du Pays Basque.
          Soins visage, massages, épilations — une expérience sur-mesure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll('#soins')}
            className="btn-gold"
          >
            Découvrir nos soins
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="inline-block px-8 py-3 border border-white/60 text-white font-sans font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:bg-white/10"
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  )
}
