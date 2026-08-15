const TRUST_ITEMS = [
  { icon: '✓', label: 'Livraison professionnelle' },
  { icon: '✓', label: 'Transport sécurisé' },
  { icon: '✓', label: 'Réactivité' },
  { icon: '✓', label: 'Service personnalisé' },
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b3e]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop&auto=format"
          alt="Camion de livraison COLISFAST sur route"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e]/80 to-[#0d1b3e]/50" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f97316]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/30 text-[#f97316] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            Transport routier de marchandises · Île-de-France
          </div>

          {/* Heading */}
          <h1
            className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Votre transport.
            <br />
            <span className="text-[#f97316]">Notre engagement.</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            COLISFAST vous accompagne dans le transport et la livraison de vos marchandises
            avec rapidité, fiabilité et professionnalisme.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <button
              onClick={() => scrollTo('#devis')}
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-orange-900/40 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 5h14v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M6 5V4a1 1 0 011-1h4a1 1 0 011 1v1" stroke="white" strokeWidth="1.5" fill="none"/>
              </svg>
              Demander un devis
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 backdrop-blur-sm"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 4.5h12a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 13.5V6A1.5 1.5 0 013 4.5z" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M1.5 6l7.5 4.5L16.5 6" stroke="white" strokeWidth="1.5"/>
              </svg>
              Nous contacter
            </button>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-4 py-2"
              >
                <span className="w-5 h-5 rounded-full bg-[#f97316] flex items-center justify-center text-white text-xs font-bold">
                  {item.icon}
                </span>
                <span className="text-white/80 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Découvrir</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
