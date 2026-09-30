import React, { useState } from 'react';
import { PieChart, Sparkles, Scale, Info, Utensils } from 'lucide-react';
import { DailyMealPlan, HouseholdProfile, Language, MealType, Recipe } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ThaliPlate } from '../components/ThaliPlate';
import { Disclaimer } from '../components/Disclaimer';

interface VisualPlatePageProps {
  language: Language;
  household: HouseholdProfile;
  mealPlan: DailyMealPlan;
  recipesMap: Record<string, Recipe>;
  initialMealType?: MealType;
  onNavigateToAdjuster: () => void;
}

export const VisualPlatePage: React.FC<VisualPlatePageProps> = ({
  language,
  household,
  mealPlan,
  recipesMap,
  initialMealType = 'lunch',
  onNavigateToAdjuster,
}) => {
  const t = TRANSLATIONS[language];
  const [selectedMeal, setSelectedMeal] = useState<MealType>(initialMealType);

  const currentSelection = mealPlan.meals[selectedMeal];
  const mainRecipe = recipesMap[currentSelection.mainDishId];

  const mealLabels: Record<MealType, { name_en: string; name_ta: string }> = {
    breakfast: { name_en: t.mealBreakfast, name_ta: t.mealBreakfast },
    lunch: { name_en: t.mealLunch, name_ta: t.mealLunch },
    tiffin: { name_en: t.mealTiffin, name_ta: t.mealTiffin },
    dinner: { name_en: t.mealDinner, name_ta: t.mealDinner },
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
              <PieChart className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-stone-900 font-sans">
                {t.navVisualPlate}
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                {language === 'ta'
                  ? 'குடும்ப தட்டு மற்றும் முதியவர் தட்டின் காட்சி ஒப்பீடு'
                  : 'Compare Family portions vs. Elder-adjusted portions on the traditional thali'}
              </p>
            </div>
          </div>
        </div>

        {/* Meal Selector Tabs */}
        <div className="flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs font-bold self-start sm:self-auto">
          {(['breakfast', 'lunch', 'tiffin', 'dinner'] as MealType[]).map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMeal(m)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedMeal === m
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {mealLabels[m].name_en}
            </button>
          ))}
        </div>
      </div>

      {/* The Interactive Thali Plate Component */}
      <ThaliPlate
        language={language}
        household={household}
        activeMeal={currentSelection}
        mealName={mealLabels[selectedMeal].name_en}
        defaultView="elder"
      />

      {/* Philosophy Card */}
      <div className="p-5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl border border-amber-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-amber-200/60 rounded-xl text-amber-800 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-amber-950 font-sans">
              {t.tagline}
            </h3>
            <p className="text-xs text-amber-900/90 mt-1 leading-relaxed max-w-2xl">
              {language === 'ta'
                ? 'குடும்பம் அனைவருக்கும் ஒரே சுவையான சாம்பார், பொரியல், கூட்டு சமையல்; முதியவருக்கு சாதம் பாதியாக குறைந்து, காய்கறி இருமடங்காக மாறும்.'
                : 'Everyone in the home eats from the same pot of authentic sambar, kootu, and poriyal; only the elder’s plate reduces rice to ~1/2 cup and doubles the vegetable portion.'}
            </p>
          </div>
        </div>

        <button
          onClick={onNavigateToAdjuster}
          className="py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 shrink-0"
        >
          <Scale className="w-4 h-4" />
          <span>{t.navRiceAdjuster}</span>
        </button>
      </div>

      <Disclaimer language={language} variant="card" />
    </div>
  );
};
