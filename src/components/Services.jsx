import { Sparkles, Wind, Leaf } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Soins du Visage',
    description:
      'Protocoles personnalisés selon votre type de peau — hydratation, éclat, anti-âge. Des rituels qui allient science et nature pour révéler votre beauté.',
    image:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80&auto=format&fit=crop',
    details: ['Diagnostic de peau', 'Soin hydratant', 'Soin anti-âge', 'Éclat du teint'],
  },
  {
    icon: Wind,
    title: 'Massages & Corps',
    description:
      'Retrouvez l\'équilibre et la détente avec nos massages corps inspirés des traditions du monde. Un moment suspendu pour l\'esprit et la chair.',
    image:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80&auto=format&fit=crop',
    details: ['Massage relaxant', 'Massage modelant', 'Enveloppement corps', 'Gommage'],
  },
  {
    icon: Leaf,
    title: 'Épilations',
    description:
      'Techniques douces et précises pour une peau soyeuse durablement. Cire tiède ou à l\'azulène, adaptée aux peaux les plus sensibles.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop',
    details: ['Cire tiède', 'Cire à l\'azulène', 'Sourcils & visage', 'Jambes & maillot'],
  },
]

export default function Services() {
  return (
    <section id="soins" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Nos Prestations
          </p>
          <h2 className="section-title">Des soins d'exception</h2>
          <div className="section-divider" />
          <p className="font-sans text-soft-black/60 max-w-md mx-auto leading-relaxed">
            Chaque soin est une invitation au voyage intérieur, pensé pour votre peau et votre bien-être.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, image, details }) => (
            <article
              key={title}
              className="group bg-white overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-soft-black/20 group-hover:bg-soft-black/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-cream/90 p-2.5 rounded-full">
                  <Icon size={18} className="text-gold" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-soft-black mb-3">{title}</h3>
                <p className="font-sans text-soft-black/60 text-sm leading-relaxed mb-4">
                  {description}
                </p>
                <ul className="space-y-1">
                  {details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm font-sans text-soft-black/50">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
