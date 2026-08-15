import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ADVANTAGES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2a9 9 0 100 18A9 9 0 0011 2z" stroke="#f97316" strokeWidth="2" fill="none"/>
        <path d="M7 11l3 3 5-5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Fiabilité',
    description: "Nous respectons nos engagements. Chaque mission est traitée avec le même niveau d'exigence.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2v4M11 16v4M4.22 4.22l2.83 2.83M14.95 14.95l2.83 2.83M2 11h4M16 11h4M4.22 17.78l2.83-2.83M14.95 7.05l2.83-2.83" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Réactivité',
    description: 'Une réponse rapide à vos demandes. Nous savons que dans le transport, chaque heure compte.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l2.5 5 5.5.8-4 3.9.9 5.5L11 15.5l-4.9 2.7.9-5.5L3 8.8l5.5-.8L11 3z" stroke="#f97316" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Sécurité',
    description: 'Vos marchandises sont transportées avec le plus grand soin. La protection de vos biens est notre priorité.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h14M11 4l7 7-7 7" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Flexibilité',
    description: 'Des solutions adaptées à vos besoins spécifiques. Nous nous ajustons à vos contraintes.',
  },
];

export default function Advantages() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="avantages" className="py-24 lg:py-32 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0d1b3e] aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=800&h=600&fit=crop&auto=format"
                alt="Professionnel COLISFAST en mission de transport"
                className="w-full h-full object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/60 to-transparent" />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1l2 5.5h5.5l-4.5 3.3 1.7 5.5L9 12.5l-4.7 2.8 1.7-5.5L1.5 6.5H7L9 1z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#0d1b3e] text-sm">COLISFAST</p>
                    <p className="text-[#0d1b3e]/60 text-xs">Transporteur de confiance depuis 2024</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Accent square */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f97316] rounded-2xl -z-10 opacity-30" />
          </div>

          {/* Content side */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
              Pourquoi nous choisir ?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Votre partenaire
              <br />
              transport de <span className="text-[#f97316]">confiance</span>
            </h2>
            <p className="text-[#0d1b3e]/60 text-base leading-relaxed mb-10">
              Chez COLISFAST, chaque livraison est une mission. Nous mettons tout en œuvre
              pour vous offrir un service qui dépasse vos attentes.
            </p>

            <div className="space-y-5">
              {ADVANTAGES.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b3e] text-base mb-1">{item.title}</h3>
                    <p className="text-[#0d1b3e]/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#devis')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 inline-flex items-center gap-2 bg-[#0d1b3e] hover:bg-[#162552] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Parlons de votre besoin
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 5l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
