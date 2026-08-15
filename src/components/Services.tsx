import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="9" width="17" height="14" rx="2" stroke="#f97316" strokeWidth="2" fill="none"/>
        <path d="M19 13h4l3 5v4h-7V13z" stroke="#f97316" strokeWidth="2" fill="none"/>
        <circle cx="7" cy="23" r="2.5" stroke="#f97316" strokeWidth="2" fill="none"/>
        <circle cx="22" cy="23" r="2.5" stroke="#f97316" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: 'Transport de marchandises',
    description:
      'Transport fiable de vos marchandises dans les meilleures conditions. Prise en charge soignée, délais respectés.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z" stroke="#f97316" strokeWidth="2" fill="none"/>
        <path d="M14 7v7l5 3" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Livraison de proximité',
    description:
      'Solutions adaptées aux besoins des professionnels et entreprises. Livraison locale et régionale efficace.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8h20v14a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="#f97316" strokeWidth="2" fill="none"/>
        <path d="M9 8V6a2 2 0 012-2h6a2 2 0 012 2v2" stroke="#f97316" strokeWidth="2" fill="none"/>
        <path d="M10 14h8M10 18h5" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Transport professionnel',
    description:
      'Une organisation pensée pour respecter vos délais et vos contraintes. Professionnalisme et rigueur garantis.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l3 8h8l-7 5 3 8-7-5-7 5 3-8-7-5h8l3-8z" stroke="#f97316" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Solutions sur mesure',
    description:
      'Des prestations adaptées à chaque besoin logistique. Nous étudions votre demande et proposons la solution idéale.',
  },
];

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
            Nos services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b3e] leading-tight mb-5">
            Des solutions de transport
            <br />
            <span className="text-[#f97316]">adaptées à vos besoins</span>
          </h2>
          <p className="text-[#0d1b3e]/60 text-lg leading-relaxed">
            COLISFAST propose une gamme complète de services de transport routier pour répondre
            aux exigences des professionnels.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-[#f8f9fc] hover:bg-[#0d1b3e] border border-[#e8ecf4] hover:border-[#0d1b3e] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0d1b3e]/15 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-[#f97316]/20 flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-[#0d1b3e] group-hover:text-white font-bold text-lg mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#0d1b3e]/55 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-[#f97316] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                En savoir plus
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
