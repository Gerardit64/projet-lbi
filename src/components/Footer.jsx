
const footerLinks = [
  { href: '#soins', label: 'Soins' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#institut', label: "L'Institut" },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-soft-black text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <span className="font-serif text-xl text-white block">Leslie</span>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold">Beauté Institut</span>
            </div>
            <p className="font-sans text-sm leading-relaxed">
              16 Rue Pierre-Louis Tourasse<br />
              64500 Saint-Jean-de-Luz
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    className="font-sans text-sm hover:text-gold transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Horaires</h4>
            <p className="font-sans text-xs text-white/40">
              Lundi, Mercredi – Vendredi<br />
              9h00 – 18h00
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-sans text-white/30">
          <p>© {new Date().getFullYear()} Leslie Beauté Institut. Tous droits réservés.</p>
          <div className="flex gap-4">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Mentions légales</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
