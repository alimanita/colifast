import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  departureCity: string;
  arrivalCity: string;
  goodsType: string;
  desiredDate: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  phone: '',
  email: '',
  departureCity: '',
  arrivalCity: '',
  goodsType: '',
  desiredDate: '',
  message: '',
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = 'Prénom requis';
  if (!data.lastName.trim()) errors.lastName = 'Nom requis';
  if (!data.phone.trim()) errors.phone = 'Téléphone requis';
  if (!data.email.trim()) errors.email = 'Email requis';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Email invalide';
  if (!data.departureCity.trim()) errors.departureCity = 'Ville de départ requise';
  if (!data.arrivalCity.trim()) errors.arrivalCity = "Ville d'arrivée requise";
  if (!data.goodsType.trim()) errors.goodsType = 'Type de marchandise requis';
  return errors;
}

interface FieldProps {
  label: string;
  id: keyof FormData;
  value: string;
  error?: string;
  onChange: (id: keyof FormData, val: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

function Field({ label, id, value, error, onChange, type = 'text', placeholder, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#0d1b3e] mb-1.5">
        {label} {required && <span className="text-[#f97316]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(id, e.target.value)}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0d1b3e] placeholder-[#0d1b3e]/35 bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-[#f97316]/30 ${
          error ? 'border-red-400 bg-red-50/50' : 'border-[#e8ecf4] hover:border-[#c7d0e0] focus:border-[#f97316]'
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-red-500 text-xs flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#ef4444" strokeWidth="1.2"/>
            <path d="M6 3.5v3M6 8v.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm() {
  const { ref, isVisible } = useIntersectionObserver();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: keyof FormData, val: string) => {
    setForm((f) => ({ ...f, [id]: val }));
    if (errors[id]) setErrors((e) => ({ ...e, [id]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="devis" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left panel */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
              Demande de devis
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b3e] leading-tight mb-6">
              Obtenez votre
              <br />
              <span className="text-[#f97316]">devis gratuit</span>
            </h2>
            <p className="text-[#0d1b3e]/60 text-base leading-relaxed mb-8">
              Décrivez votre besoin de transport et nous vous recontacterons rapidement avec
              une proposition adaptée.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📋', text: 'Devis sans engagement' },
                { icon: '⚡', text: 'Réponse rapide garantie' },
                { icon: '🔒', text: 'Informations confidentielles' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[#0d1b3e]/70 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="mt-10 rounded-2xl overflow-hidden bg-[#f8f9fc] aspect-video hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1485575301924-6891ef935dcd?w=600&h=400&fit=crop&auto=format"
                alt="Transport routier COLISFAST"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l7 7 11-11" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#0d1b3e] font-bold text-2xl mb-3">Demande envoyée !</h3>
                <p className="text-[#0d1b3e]/60 mb-6">
                  Merci pour votre demande. Nous vous contacterons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => { setForm(INITIAL); setSubmitted(false); }}
                  className="text-[#f97316] font-semibold text-sm hover:underline"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#f8f9fc] rounded-2xl border border-[#e8ecf4] p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Prénom" id="firstName" value={form.firstName} error={errors.firstName} onChange={handleChange} placeholder="Jean" required />
                  <Field label="Nom" id="lastName" value={form.lastName} error={errors.lastName} onChange={handleChange} placeholder="Dupont" required />
                  <Field label="Société" id="company" value={form.company} error={errors.company} onChange={handleChange} placeholder="Votre société" />
                  <Field label="Téléphone" id="phone" value={form.phone} error={errors.phone} onChange={handleChange} type="tel" placeholder="+33 6 00 00 00 00" required />
                  <div className="sm:col-span-2">
                    <Field label="Email" id="email" value={form.email} error={errors.email} onChange={handleChange} type="email" placeholder="jean.dupont@societe.fr" required />
                  </div>
                  <Field label="Ville de départ" id="departureCity" value={form.departureCity} error={errors.departureCity} onChange={handleChange} placeholder="Paris" required />
                  <Field label="Ville d'arrivée" id="arrivalCity" value={form.arrivalCity} error={errors.arrivalCity} onChange={handleChange} placeholder="Lyon" required />
                  <Field label="Type de marchandise" id="goodsType" value={form.goodsType} error={errors.goodsType} onChange={handleChange} placeholder="Ex : palettes, colis, matériaux…" required />
                  <Field label="Date souhaitée" id="desiredDate" value={form.desiredDate} error={errors.desiredDate} onChange={handleChange} type="date" />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-[#0d1b3e] mb-1.5">
                    Message complémentaire
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    placeholder="Précisez vos contraintes, volumes, délais particuliers…"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8ecf4] hover:border-[#c7d0e0] focus:border-[#f97316] text-sm text-[#0d1b3e] placeholder-[#0d1b3e]/35 bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-[#f97316]/30 resize-none"
                  />
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-[#0d1b3e]/45 text-xs flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M6.5 1.5a5 5 0 100 10 5 5 0 000-10z" stroke="#94a3b8" strokeWidth="1.2"/>
                      <path d="M6.5 5.5v4M6.5 4v.5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    Vos informations sont utilisées uniquement pour répondre à votre demande.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-900/25 hover:-translate-y-0.5 flex-shrink-0"
                  >
                    Demander mon devis
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 5l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
