import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface DisclaimerProps {
  language: Language;
  variant?: 'banner' | 'card' | 'compact';
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ language, variant = 'card' }) => {
  const t = TRANSLATIONS[language];

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200/80 rounded-lg text-xs text-amber-900 leading-snug">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
        <span>{t.disclaimerShort}</span>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-amber-100/90 via-orange-50 to-amber-100/90 border-y border-amber-200 px-4 py-2.5 text-xs text-amber-950 flex items-center justify-center gap-2 text-center font-medium">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
        <span>{t.doctorDisclaimerBanner}</span>
      </div>
    );
  }

  return (
    <aside
      aria-label="Medical Disclaimer"
      className="p-4 bg-amber-50/90 border border-amber-200 rounded-xl shadow-xs text-xs text-amber-950 leading-relaxed"
    >
      <div className="flex items-start gap-3">
        <div className="p-1.5 bg-amber-200/60 rounded-lg text-amber-800 shrink-0 mt-0.5">
          <ShieldAlert className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-semibold text-amber-900 mb-1">
            {language === 'ta' ? 'மருத்துவ ஆலோசனை அறிவிப்பு (Disclaimer)' : 'Health & Guidance Disclaimer'}
          </h4>
          <p className="text-amber-900/90">{t.disclaimerFull}</p>
        </div>
      </div>
    </aside>
  );
};
