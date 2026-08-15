import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { COMPANY } from '../config';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0d1b3e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Prenons contact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div
            className={`bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-12 h-12 bg-[#f97316]/20 rounded-xl flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" stroke="#f97316" strokeWidth="1.8" fill="none"/>
                <circle cx="11" cy="9" r="2.5" stroke="#f97316" strokeWidth="1.8" fill="none"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Adresse</h3>
            <address className="not-italic text-white/60 text-sm leading-relaxed mb-4">
              {COMPANY.name}<br />
              {COMPANY.address.street}<br />
              {COMPANY.address.zip} {COMPANY.address.city}<br />
              {COMPANY.address.country}
            </address>
            <a
              href={COMPANY.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f97316] text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Voir sur Google Maps
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Phone */}
          <div
            className={`bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 bg-[#f97316]/20 rounded-xl flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M6 2h4l2 5-2.5 1.5c1 2 3 4 5 5L16 11l5 2v4a2 2 0 01-2 2A17 17 0 012 4a2 2 0 012-2z" stroke="#f97316" strokeWidth="1.8" fill="none"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Téléphone</h3>
            <p className="text-white/60 text-sm mb-4">Disponible pour toute demande</p>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-[#f97316] text-sm font-semibold hover:underline"
            >
              {COMPANY.phone}
            </a>
          </div>

          {/* Email */}
          <div
            className={`bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-12 h-12 bg-[#f97316]/20 rounded-xl flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="5" width="18" height="14" rx="2" stroke="#f97316" strokeWidth="1.8" fill="none"/>
                <path d="M2 7l9 6 9-6" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Email</h3>
            <p className="text-white/60 text-sm mb-4">Réponse dans les meilleurs délais</p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-2 text-[#f97316] text-sm font-semibold hover:underline"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        {/* CTA banner */}
        <div
          className={`mt-10 bg-[#f97316] rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div>
            <h3 className="text-white font-bold text-2xl mb-1">Prêt à nous confier votre transport ?</h3>
            <p className="text-white/75 text-sm">Demandez votre devis gratuit et sans engagement dès maintenant.</p>
          </div>
          <button
            onClick={() => document.querySelector('#devis')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-white text-[#f97316] font-bold px-7 py-3.5 rounded-xl text-sm hover:bg-[#fff8f5] transition-all duration-200 hover:shadow-lg flex-shrink-0"
          >
            Demander un devis
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 5l3 3-3 3" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
