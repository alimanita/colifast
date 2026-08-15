import { useState, useEffect } from 'react';
import { COMPANY } from '../config';

const NAV = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Nos services', href: '#services' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Pourquoi nous ?', href: '#avantages' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{ fontFamily: 'Outfit, sans-serif' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d1b3e] shadow-lg' : 'bg-[#0d1b3e]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => { e.preventDefault(); handleNav('#accueil'); }}
            className="flex items-center gap-2 group"
            aria-label="COLISFAST - Accueil"
          >
            <div className="w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="8" width="12" height="10" rx="1.5" fill="white" />
                <path d="M14 10h2l2 4v2h-4V10z" fill="white" />
                <circle cx="5" cy="18" r="2" fill="#0d1b3e" />
                <circle cx="13" cy="18" r="2" fill="#0d1b3e" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-wide">
              COLIS<span className="text-[#f97316]">FAST</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-[#f97316]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://tms.mkmr.pro/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#f97316] font-medium text-sm transition-colors duration-200"
            >
              Se connecter
            </a>
            <a
              href="#devis"
              onClick={(e) => { e.preventDefault(); handleNav('#devis'); }}
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-900/30 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1" stroke="white" strokeWidth="1.5" fill="none"/>
              </svg>
              Demander un devis
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-sm font-medium transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://tms.mkmr.pro/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-all"
            >
              Se connecter
            </a>
            <a
              href="#devis"
              onClick={(e) => { e.preventDefault(); handleNav('#devis'); setMenuOpen(false); }}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-5 py-3 rounded-lg text-sm transition-all"
            >
              Demander un devis
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
