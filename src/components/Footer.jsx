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

          {/* Social + Hours */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Suivez-nous</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/leslie_beaute_institut/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
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
