import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const STEPS = [
  {
    number: '01',
    title: 'Votre demande',
    description: 'Vous nous indiquez votre besoin via notre formulaire ou par téléphone.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 5h18v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M7 9h10M7 13h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Notre proposition',
    description: 'Nous étudions votre demande et vous proposons une solution adaptée à vos contraintes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3a9 9 0 100 18A9 9 0 0012 3z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M12 8v4l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Organisation du transport',
    description: 'Nous planifions la prise en charge avec soin pour respecter vos délais.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14h3M8 18h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Livraison',
    description: 'Votre marchandise est transportée et livrée dans les meilleures conditions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 10h13v8a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M16 13h2.5l2.5 4v3h-5V13z" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="7" cy="20" r="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="18" cy="20" r="2" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
];

export default function Process() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
            Comment ça marche ?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b3e] leading-tight">
            Un processus simple
            <br />
            <span className="text-[#f97316]">en 4 étapes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#e8ecf4] to-transparent" />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              {/* Number + icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-12 h-12 rounded-xl bg-[#0d1b3e] flex items-center justify-center flex-shrink-0 shadow-lg">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#f97316] flex items-center justify-center text-white text-xs font-black leading-none">
                    {i + 1}
                  </span>
                </div>
                <div className="text-5xl font-black text-[#e8ecf4] leading-none select-none">
                  {step.number}
                </div>
              </div>

              <h3 className="text-[#0d1b3e] font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-[#0d1b3e]/55 text-sm leading-relaxed">{step.description}</p>

              {/* Arrow between steps on mobile */}
              {i < STEPS.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6 mb-2 text-[#e8ecf4]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4v12M6 12l4 4 4-4" stroke="#c7d0e0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
