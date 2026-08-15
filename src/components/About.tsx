import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="apropos" className="py-24 lg:py-32 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
              À propos de COLISFAST
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b3e] leading-tight mb-7">
              Une entreprise française
              <br />
              <span className="text-[#f97316]">à votre service</span>
            </h2>
            <p className="text-[#0d1b3e]/65 text-lg leading-relaxed mb-6">
              COLISFAST est une société française spécialisée dans le transport routier de marchandises.
              Notre objectif est de proposer à nos clients des solutions de transport simples, fiables
              et adaptées à leurs besoins.
            </p>
            <p className="text-[#0d1b3e]/65 text-base leading-relaxed mb-10">
              Basés à Noisiel, en Seine-et-Marne, nous intervenons pour les professionnels qui ont
              besoin d&apos;un partenaire transport rigoureux, disponible et transparent.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Forme juridique', value: 'SAS' },
                { label: 'Fondée en', value: '2024' },
                { label: 'SIREN', value: '929 521 474' },
                { label: 'Localisation', value: 'Noisiel (77)' },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#e8ecf4] rounded-xl p-4">
                  <p className="text-[#0d1b3e]/50 text-xs font-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#0d1b3e] font-bold text-base">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="rounded-2xl overflow-hidden bg-[#0d1b3e] aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1645736315000-6f788915923b?w=800&h=600&fit=crop&auto=format"
                alt="Entrepôt logistique et transport de marchandises"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 to-[#0d1b3e]/40" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#f97316] rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-white font-black text-2xl leading-none">2024</p>
              <p className="text-white/80 text-xs mt-1">Création de COLISFAST</p>
            </div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#0d1b3e] rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
