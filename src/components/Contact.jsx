import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const hours = [
  { day: 'Lundi', time: 'Fermé' },
  { day: 'Mardi', time: '9h00 – 19h00' },
  { day: 'Mercredi', time: '9h00 – 19h00' },
  { day: 'Jeudi', time: '9h00 – 19h00' },
  { day: 'Vendredi', time: '9h00 – 19h00' },
  { day: 'Samedi', time: '9h00 – 18h00' },
  { day: 'Dimanche', time: 'Fermé' },
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
                  12 rue Gambetta<br />
                  64500 Saint-Jean-de-Luz
                </p>
                <a
                  href="https://maps.google.com/?q=12+rue+Gambetta+64500+Saint-Jean-de-Luz"
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
                  href="tel:+33559000000"
                  className="font-sans text-soft-black/60 text-sm hover:text-gold transition-colors"
                >
                  +33 (0)5 59 00 00 00
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
                  href="mailto:contact@lesliebeateinstitut.fr"
                  className="font-sans text-soft-black/60 text-sm hover:text-gold transition-colors"
                >
                  contact@lesliebeateinstitut.fr
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
                href="tel:+33559000000"
                className="btn-gold inline-block"
              >
                Appeler pour réserver
              </a>
            </div>

            {/* Map */}
            <div className="flex-1 min-h-[240px] overflow-hidden">
              <iframe
                title="Localisation Leslie Beauté Institut"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5!2d-1.6623!3d43.3894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51166e!2sSaint-Jean-de-Luz!5e0!3m2!1sfr!2sfr!4v1"
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
