import React, { useState } from 'react';
import { 
  Scale, 
  HelpCircle, 
  ShieldAlert, 
  Check, 
  Clock, 
  Flame, 
  Sparkles,
  ArrowRight,
  Stethoscope
} from 'lucide-react';
import { 
  ActivityLevel, 
  AgeBand, 
  BodyType, 
  HouseholdProfile, 
  Language, 
  MealPattern, 
  MealType, 
  PortionGuidance 
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { getRicePortion } from '../utils/portionEngine';

interface RicePortionAdjusterProps {
  language: Language;
  household: HouseholdProfile;
  onUpdateHousehold?: (updated: HouseholdProfile) => void;
  initialMealType?: MealType;
}

export const RicePortionAdjuster: React.FC<RicePortionAdjusterProps> = ({
  language,
  household,
  onUpdateHousehold,
  initialMealType = 'lunch',
}) => {
  const t = TRANSLATIONS[language];

  // Local state for interactive calculation
  const [selectedMeal, setSelectedMeal] = useState<MealType>(initialMealType);
  const [ageBand, setAgeBand] = useState<AgeBand>(household.ageBand);
  const [bodyType, setBodyType] = useState<BodyType>(household.bodyType);
  const [activity, setActivity] = useState<ActivityLevel>(household.activityLevel);
  const [pattern, setPattern] = useState<MealPattern>(household.mealPattern);
  const [manualAdjustment, setManualAdjustment] = useState<'recommended' | 'smaller' | 'larger'>('recommended');

  // Doctor Override State
  const [hasDoctorOverride, setHasDoctorOverride] = useState<boolean>(household.hasDoctorOverride);
  const [doctorGrams, setDoctorGrams] = useState<number>(household.doctorPortionOverrideGrams || 90);
  const [doctorCups, setDoctorCups] = useState<string>(household.doctorPortionOverrideCups || '½ cup');

  // Build transient profile for rules engine
  const calcProfile: HouseholdProfile = {
    ...household,
    ageBand,
    bodyType,
    activityLevel: activity,
    mealPattern: pattern,
    hasDoctorOverride,
    doctorPortionOverrideGrams: hasDoctorOverride ? doctorGrams : null,
    doctorPortionOverrideCups: hasDoctorOverride ? doctorCups : null,
  };

  const guidance: PortionGuidance = getRicePortion(calcProfile, pattern, selectedMeal, manualAdjustment);

  const handleSaveToProfile = () => {
    if (onUpdateHousehold) {
      onUpdateHousehold({
        ...household,
        ageBand,
        bodyType,
        activityLevel: activity,
        mealPattern: pattern,
        hasDoctorOverride,
        doctorPortionOverrideGrams: hasDoctorOverride ? doctorGrams : null,
        doctorPortionOverrideCups: hasDoctorOverride ? doctorCups : null,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 sm:p-6 space-y-6">
      {/* Title & Disclaimer */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-stone-900 font-sans">
              {t.portionAdjusterTitle}
            </h2>
            <p className="text-xs text-stone-500 font-medium">
              {t.portionAdjusterSubtitle}
            </p>
          </div>
        </div>

        {/* Doctor advice callout */}
        <div className="mt-3 p-3 bg-amber-50/90 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold">{t.approxPlanningGuidance}: </span>
            {t.disclaimerFull}
          </p>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Input Parameters */}
        <div className="lg:col-span-7 space-y-5">
          {/* 1. Meal Type Selection */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-2">
              {language === 'ta' ? 'உணவு வேளை' : 'Target Meal'}
            </label>
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {(['breakfast', 'lunch', 'tiffin', 'dinner'] as MealType[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMeal(m)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                    selectedMeal === m
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {m === 'breakfast' && t.mealBreakfast}
                  {m === 'lunch' && t.mealLunch}
                  {m === 'tiffin' && t.mealTiffin}
                  {m === 'dinner' && t.mealDinner}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Elder Parameters (Age, Body, Activity, Pattern) */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
              {language === 'ta' ? 'முதியவரின் உடல் கூறுகள்' : 'Elder Factors'}
            </h4>

            {/* Age Band */}
            <div>
              <span className="text-xs font-semibold text-stone-700 block mb-1.5">
                {t.ageBand}:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(['50-59', '60-69', '70+'] as AgeBand[]).map((a) => (
                  <button
                    key={a}
                    onClick={() => setAgeBand(a)}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      ageBand === a
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Body Type */}
            <div>
              <span className="text-xs font-semibold text-stone-700 block mb-1.5">
                {t.bodyType}:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'slim', label: t.bodyType_slim },
                  { id: 'medium', label: t.bodyType_medium },
                  { id: 'heavy', label: t.bodyType_heavy },
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBodyType(b.id as BodyType)}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      bodyType === b.id
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <span className="text-xs font-semibold text-stone-700 block mb-1.5">
                {t.activityLevel}:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'low', label: t.activity_low.split(' ')[0] },
                  { id: 'moderate', label: t.activity_moderate.split(' ')[0] },
                  { id: 'high', label: t.activity_high.split(' ')[0] },
                ].map((act) => (
                  <button
                    key={act.id}
                    onClick={() => setActivity(act.id as ActivityLevel)}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activity === act.id
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {act.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Doctor Override Section */}
          <div className="border border-emerald-200 bg-emerald-50/60 rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="docOverrideCheck"
                checked={hasDoctorOverride}
                onChange={(e) => setHasDoctorOverride(e.target.checked)}
                className="mt-1 w-4 h-4 rounded-sm text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="docOverrideCheck" className="text-xs font-bold text-emerald-950 cursor-pointer">
                {t.hasDoctorOverride}
              </label>
            </div>

            {hasDoctorOverride && (
              <div className="pl-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    {t.doctorGrams}
                  </label>
                  <input
                    type="number"
                    value={doctorGrams}
                    onChange={(e) => setDoctorGrams(Number(e.target.value) || 0)}
                    min={40}
                    max={250}
                    step={5}
                    className="w-full text-xs font-bold px-3 py-1.5 bg-white border border-emerald-300 rounded-lg focus:outline-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    {t.doctorCups}
                  </label>
                  <input
                    type="text"
                    value={doctorCups}
                    onChange={(e) => setDoctorCups(e.target.value)}
                    placeholder="e.g. 1/2 cup"
                    className="w-full text-xs font-bold px-3 py-1.5 bg-white border border-emerald-300 rounded-lg focus:outline-emerald-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* 4. Manual Fine Tuning */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-2">
              {t.tweakPortion}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setManualAdjustment('smaller')}
                className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                  manualAdjustment === 'smaller'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {t.portionSmaller}
              </button>
              <button
                onClick={() => setManualAdjustment('recommended')}
                className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                  manualAdjustment === 'recommended'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {t.portionRecommended}
              </button>
              <button
                onClick={() => setManualAdjustment('larger')}
                className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                  manualAdjustment === 'larger'
                    ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {t.portionLarger}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Calculated Portion Guidance Result */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-stone-900 to-stone-950 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-stone-800 space-y-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {language === 'ta' ? guidance.portionLabel_ta : guidance.portionLabel_en}
              </span>
              <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full font-medium">
                {household.elderName} • {ageBand}
              </span>
            </div>

            {/* Big Measurement Hero Card */}
            <div className="py-5 text-center">
              <div className="inline-block p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-2">
                <span className="text-3xl sm:text-4xl font-black text-amber-300 font-sans tracking-tight">
                  {guidance.approximateCups}
                </span>
              </div>
              <div className="text-sm font-semibold text-stone-200">
                {guidance.approximateGrams > 0 ? (
                  <>
                    ≈ <span className="text-white font-extrabold">{guidance.approximateGrams}g</span> {language === 'ta' ? 'சமைத்த சாதம்' : 'Cooked Rice'}
                  </>
                ) : (
                  language === 'ta' ? 'சாதம் தவிர்த்து / சுண்டல் சிறந்தது' : 'Zero Rice / Protein Snack'
                )}
              </div>
              <div className="text-xs text-amber-200/90 font-medium mt-1">
                {language === 'ta' ? guidance.householdMeasure_ta : guidance.householdMeasure_en}
              </div>
            </div>

            {/* Carbohydrate & Veggie Multiplier Metrics */}
            <div className="grid grid-cols-2 gap-3 bg-stone-800/80 rounded-xl p-3 border border-stone-700/60 text-center">
              <div>
                <span className="text-[10px] text-stone-400 block font-semibold uppercase">
                  {language === 'ta' ? 'தோராய மாவுச்சத்து' : 'Approx. Carbs'}
                </span>
                <span className="text-sm font-extrabold text-white">
                  ~{guidance.carbsEstimate}g
                </span>
              </div>
              <div>
                <span className="text-[10px] text-emerald-400 block font-semibold uppercase">
                  {language === 'ta' ? 'பரிந்துரைக்கப்படும் காய்கறி' : 'Veggie Balance'}
                </span>
                <span className="text-sm font-extrabold text-emerald-300">
                  {guidance.recommendedVeggieMultiplier}x Poriyal
                </span>
              </div>
            </div>

            {/* Distribution Guideline Note */}
            <div className="mt-4 p-3 bg-stone-800/50 rounded-xl text-xs text-stone-300 border border-stone-700/50 space-y-1">
              <span className="font-bold text-amber-300 block">
                {t.suggestedDistribution}:
              </span>
              <p className="leading-relaxed text-stone-300 text-xs">
                {language === 'ta' ? guidance.distributionSuggestion_ta : guidance.distributionSuggestion_en}
              </p>
            </div>
          </div>

          {/* Save to Profile Button */}
          {onUpdateHousehold && (
            <button
              onClick={handleSaveToProfile}
              className="w-full mt-4 py-2.5 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{t.saveProfile}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
