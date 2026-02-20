import { Award, Heart, Users } from 'lucide-react'

const values = [
  { icon: Award, label: 'Excellence', desc: 'Produits professionnels de haute qualité' },
  { icon: Heart, label: 'Bienveillance', desc: 'Chaque soin adapté à votre singularité' },
  { icon: Users, label: 'Expertise', desc: 'Une équipe passionnée et formée en continu' },
]

export default function Institut() {
  return (
    <section id="institut" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop"
              alt="L'Institut Leslie Beauté"
              className="w-full h-[500px] object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold opacity-40" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-gold opacity-40" />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Notre Histoire
            </p>
            <h2 className="section-title text-left mx-0 mb-0">L'Institut</h2>
            <div className="w-16 h-px bg-gold my-6" />
            <p className="font-sans text-soft-black/70 leading-relaxed mb-5">
              Niché au cœur de Saint-Jean-de-Luz, le Leslie Beauté Institut est un espace dédié à
              la beauté authentique et au bien-être profond. Leslie a fondé cet institut avec une
              vision simple&nbsp;: offrir des soins de qualité professionnelle dans un environnement
              chaleureux et personnalisé.
            </p>
            <p className="font-sans text-soft-black/70 leading-relaxed mb-8">
              Ici, chaque prestation est pensée comme un rituel unique. Nous sélectionnons
              rigoureusement nos produits pour leur efficacité et leur respect de la peau —
              parce que vous méritez le meilleur.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {values.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-cream rounded-full mb-3">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <p className="font-serif text-sm text-soft-black">{label}</p>
                  <p className="font-sans text-xs text-soft-black/50 mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
