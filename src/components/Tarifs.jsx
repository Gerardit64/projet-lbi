const categories = [
  {
    title: 'Soins du Visage',
    items: [
      { name: 'Soin hydratant express (30 min)', price: '45 €' },
      { name: 'Soin hydratant complet (60 min)', price: '75 €' },
      { name: 'Soin anti-âge (75 min)', price: '95 €' },
      { name: 'Soin éclat du teint (60 min)', price: '80 €' },
      { name: 'Soin purifiant peaux mixtes (60 min)', price: '75 €' },
    ],
  },
  {
    title: 'Massages & Corps',
    items: [
      { name: 'Massage relaxant dos (30 min)', price: '45 €' },
      { name: 'Massage relaxant corps (60 min)', price: '75 €' },
      { name: 'Massage modelant (60 min)', price: '80 €' },
      { name: 'Gommage corps + enveloppement (90 min)', price: '110 €' },
      { name: 'Rituel bien-être (120 min)', price: '140 €' },
    ],
  },
  {
    title: 'Épilations',
    items: [
      { name: 'Demi-jambes', price: '22 €' },
      { name: 'Jambes complètes', price: '35 €' },
      { name: 'Maillot classique', price: '20 €' },
      { name: 'Maillot intégral', price: '35 €' },
      { name: 'Aisselles', price: '16 €' },
      { name: 'Sourcils', price: '14 €' },
      { name: 'Lèvre supérieure', price: '10 €' },
    ],
  },
]

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Nos Tarifs
          </p>
          <h2 className="section-title">Transparence & Simplicité</h2>
          <div className="section-divider" />
          <p className="font-sans text-soft-black/60 max-w-md mx-auto leading-relaxed">
            Des tarifs clairs, sans surprise. Tous nos soins sont réalisés avec des produits professionnels premium.
          </p>
        </div>

        {/* Pricing tables */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map(({ title, items }) => (
            <div key={title} className="bg-white p-8">
              <h3 className="font-serif text-lg text-soft-black mb-1">{title}</h3>
              <div className="w-8 h-px bg-gold mb-6" />
              <ul className="space-y-3">
                {items.map(({ name, price }) => (
                  <li key={name} className="flex items-start justify-between gap-3 text-sm">
                    <span className="font-sans text-soft-black/70 leading-relaxed">{name}</span>
                    <span className="font-sans font-medium text-gold whitespace-nowrap">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center font-sans text-xs text-soft-black/40 mt-8 italic">
          Tarifs indicatifs. Des forfaits et abonnements sont disponibles sur demande.
        </p>
      </div>
    </section>
  )
}
