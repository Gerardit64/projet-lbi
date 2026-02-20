import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#soins', label: 'Soins' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#institut', label: 'L\'Institut' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex flex-col leading-tight"
        >
          <span className="font-serif text-xl text-soft-black tracking-wide">Leslie</span>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold">Beauté Institut</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="font-sans text-sm tracking-widest uppercase text-soft-black/70 hover:text-gold transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="hidden md:inline-block btn-outline-gold text-xs"
        >
          Réserver
        </a>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-soft-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-gold/20">
          <ul className="flex flex-col items-center py-6 gap-5">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className="font-sans text-sm tracking-widest uppercase text-soft-black/70 hover:text-gold transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="btn-gold text-xs mt-2"
              >
                Réserver
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
