import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const STATS = [
  { value: '100%', label: 'Engagement professionnel', desc: 'Chaque mission traitée avec rigueur' },
  { value: '24/7', label: 'Réactivité', desc: 'Disponible pour répondre à vos demandes' },
  { value: 'Sur mesure', label: 'Solutions adaptées', desc: 'Chaque client, chaque besoin' },
  { value: 'France', label: 'Transport national', desc: 'Rayonnement sur tout le territoire' },
];

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#f97316] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
            Notre engagement
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Des valeurs qui font
            <span className="text-[#f97316]"> la différence</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`group text-center bg-white/5 border border-white/10 hover:border-[#f97316]/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-black text-[#f97316] mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-2">{stat.label}</div>
              <div className="text-white/45 text-xs leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
