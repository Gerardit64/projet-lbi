import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const hours = [
  { day: 'Lundi', time: '9h00 – 18h00' },
  { day: 'Mardi', time: 'Fermé' },
  { day: 'Mercredi', time: '9h00 – 18h00' },
  { day: 'Jeudi', time: '9h00 – 18h00' },
  { day: 'Vendredi', time: '9h00 – 18h00' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Nous Trouver
          </p>
          <h2 className="section-title">Contact & Accès</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                <MapPin size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-base text-soft-black mb-1">Adresse</h3>
                <p className="font-sans text-soft-black/60 text-sm leading-relaxed">
                  16 Rue Pierre-Louis Tourasse<br />
                  64500 Saint-Jean-de-Luz
                </p>
                <a
                  href="https://maps.google.com/?q=16+Rue+Pierre-Louis+Tourasse+64500+Saint-Jean-de-Luz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors border-b border-gold/40 hover:border-gold-dark"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                <Phone size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-base text-soft-black mb-1">Téléphone</h3>
                <a
                  href="tel:+33559546007"
                  className="font-sans text-soft-black/60 text-sm hover:text-gold transition-colors"
                >
                  05 59 54 60 07
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                <Mail size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-base text-soft-black mb-1">Email</h3>
                <a
                  href="mailto:contact@leslie-beaute.fr"
                  className="font-sans text-soft-black/60 text-sm hover:text-gold transition-colors"
                >
                  contact@leslie-beaute.fr
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                <Clock size={18} className="text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-base text-soft-black mb-3">Horaires</h3>
                <dl className="space-y-1.5">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between text-sm font-sans">
                      <dt className={time === 'Fermé' ? 'text-soft-black/30' : 'text-soft-black/60'}>{day}</dt>
                      <dd className={time === 'Fermé' ? 'text-soft-black/30 italic' : 'text-soft-black/70'}>{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Right: CTA + map placeholder */}
          <div className="flex flex-col gap-6">
            {/* CTA card */}
            <div className="bg-cream p-8 text-center">
              <h3 className="font-serif text-2xl text-soft-black mb-3">
                Prenez soin de vous
              </h3>
              <p className="font-sans text-soft-black/60 text-sm mb-6 leading-relaxed">
                Réservez votre soin en ligne ou par téléphone. Nous vous répondons dans les 24h.
              </p>
              <a
                href="tel:+33559546007"
                className="btn-gold inline-block"
              >
                Appeler pour réserver
              </a>
            </div>

            {/* Map */}
            <div className="flex-1 min-h-[240px] overflow-hidden">
              <iframe
                title="Localisation Leslie Beauté Institut"
                src="https://maps.google.com/maps?q=16+Rue+Pierre-Louis+Tourasse,+64500+Saint-Jean-de-Luz,+France&output=embed"
                className="w-full h-full"
                style={{ border: 0, minHeight: '240px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
