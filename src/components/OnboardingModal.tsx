import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Check, 
  Utensils 
} from 'lucide-react';
import { 
  ActivityLevel, 
  AgeBand, 
  BodyType, 
  HouseholdProfile, 
  Language, 
  MealPattern 
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DEMO_HOUSEHOLD } from '../data/demoData';

interface OnboardingModalProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onComplete: (profile: HouseholdProfile) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  language,
  onLanguageChange,
  onComplete,
}) => {
  const t = TRANSLATIONS[language];

  const [householdName, setHouseholdName] = useState("Appa's Home");
  const [memberCount, setMemberCount] = useState<number>(4);
  const [elderName, setElderName] = useState('Appa');
  const [ageBand, setAgeBand] = useState<AgeBand>('60-69');
  const [bodyType, setBodyType] = useState<BodyType>('medium');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [pattern, setPattern] = useState<MealPattern>('3_meals_snacks');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profile: HouseholdProfile = {
      id: `household-${Date.now()}`,
      householdName: householdName.trim() || "Appa's Home",
      memberCount: memberCount || 4,
      elderName: elderName.trim() || 'Appa',
      ageBand,
      bodyType,
      activityLevel: activity,
      mealPattern: pattern,
      doctorPortionOverrideGrams: null,
      doctorPortionOverrideCups: null,
      hasDoctorOverride: false,
      updatedAt: new Date().toISOString(),
    };
    onComplete(profile);
  };

  const handleSkip = () => {
    onComplete(DEMO_HOUSEHOLD);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Welcome Header */}
        <div className="p-6 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">Tamil Family Plate</span>
            </div>

            {/* Language Selection Toggle */}
            <div className="flex items-center p-0.5 bg-black/20 rounded-xl border border-white/20 text-xs font-bold">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  language === 'en' ? 'bg-white text-stone-900 shadow-xs' : 'text-amber-100 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ta')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  language === 'ta' ? 'bg-white text-stone-900 shadow-xs' : 'text-amber-100 hover:text-white'
                }`}
              >
                தமிழ்
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-black font-sans leading-tight">
            {language === 'ta' ? 'வணக்கம்! குடும்ப தாளி தட்டிற்கு வரவேற்கிறோம்' : 'Vanakkam! Welcome to Tamil Family Plate'}
          </h2>
          <p className="text-xs text-amber-100 font-medium mt-1">
            {t.tagline}
          </p>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
          {/* Health support disclaimer callout */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-bold">{t.approxPlanningGuidance}: </span>
              {language === 'ta'
                ? 'இந்த விவரங்கள் தோராயமான உணவு திட்டமிடல் வழிகாட்டலுக்கு மட்டுமே பயன்படுத்தப்படுகின்றன. மருத்துவ சிகிச்சை அல்ல.'
                : 'Inputs are only used for approximate meal-planning guidance. Not a medical device or diagnosis.'}
            </p>
          </div>

          {/* Household Nickname & Member Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.householdNickname}
              </label>
              <input
                type="text"
                value={householdName}
                onChange={(e) => setHouseholdName(e.target.value)}
                placeholder="e.g. Appa's Home"
                required
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.memberCount}
              </label>
              <input
                type="number"
                min={1}
                max={15}
                value={memberCount}
                onChange={(e) => setMemberCount(Number(e.target.value) || 1)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>
          </div>

          {/* Elder Name */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">
              {t.elderNickname}
            </label>
            <input
              type="text"
              value={elderName}
              onChange={(e) => setElderName(e.target.value)}
              placeholder="e.g. Appa / Amma / Thatha"
              required
              className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
            />
          </div>

          {/* Age Band */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1.5">
              {t.ageBand}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['50-59', '60-69', '70+'] as AgeBand[]).map((a) => (
                <button
                  type="button"
                  key={a}
                  onClick={() => setAgeBand(a)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    ageBand === a
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Body Type */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1.5">
              {t.bodyType}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'slim', label: t.bodyType_slim },
                { id: 'medium', label: t.bodyType_medium },
                { id: 'heavy', label: t.bodyType_heavy },
              ].map((b) => (
                <button
                  type="button"
                  key={b.id}
                  onClick={() => setBodyType(b.id as BodyType)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    bodyType === b.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Physical Activity */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1.5">
              {t.activityLevel}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'low', label: t.activity_low.split(' ')[0] },
                { id: 'moderate', label: t.activity_moderate.split(' ')[0] },
                { id: 'high', label: t.activity_high.split(' ')[0] },
              ].map((act) => (
                <button
                  type="button"
                  key={act.id}
                  onClick={() => setActivity(act.id as ActivityLevel)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    activity === act.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>

          {/* Meal Pattern */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1.5">
              {t.mealPattern}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: '3_meals', label: t.mealPattern_3 },
                { id: '3_meals_snacks', label: t.mealPattern_3_snacks },
                { id: '2_meals_snacks', label: t.mealPattern_2_snacks },
              ].map((mp) => (
                <button
                  type="button"
                  key={mp.id}
                  onClick={() => setPattern(mp.id as MealPattern)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                    pattern === mp.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {mp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-stone-100 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-extrabold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{language === 'ta' ? 'தொடங்குக' : 'Get Started'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleSkip}
              className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl text-xs font-bold transition-all text-center"
            >
              {t.skipOnboarding}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
