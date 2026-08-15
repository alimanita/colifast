import { COMPANY } from '../config';

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Nos services', href: '#services' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Pourquoi nous ?', href: '#avantages' },
  { label: 'Contact', href: '#contact' },
  { label: 'Demande de devis', href: '#devis' },
];

const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '#mentions-legales' },
  { label: 'Politique de confidentialité', href: '#confidentialite' },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-[#081022] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="8" width="12" height="10" rx="1.5" fill="white" />
                  <path d="M14 10h2l2 4v2h-4V10z" fill="white" />
                  <circle cx="5" cy="18" r="2" fill="#0d1b3e" />
                  <circle cx="13" cy="18" r="2" fill="#0d1b3e" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
                COLIS<span className="text-[#f97316]">FAST</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Société française spécialisée dans le transport routier de marchandises.
              Fiabilité, réactivité et professionnalisme.
            </p>
            <div className="mt-5 text-white/35 text-xs">
              <p>SIREN : {COMPANY.siren}</p>
              <p>{COMPANY.legalForm} — Fondée en {COMPANY.foundedYear}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/50 hover:text-[#f97316] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <address className="not-italic text-white/50 text-sm leading-relaxed space-y-2">
              <p>{COMPANY.name}</p>
              <p>{COMPANY.address.street}</p>
              <p>{COMPANY.address.zip} {COMPANY.address.city}</p>
              <p>{COMPANY.address.country}</p>
              <p className="mt-3">
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-[#f97316] transition-colors">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-[#f97316] transition-colors">
                  {COMPANY.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © {COMPANY.copyrightYear} {COMPANY.name} — Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/35 hover:text-white/60 text-xs transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
