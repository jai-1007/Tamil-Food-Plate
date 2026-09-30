import React from 'react';
import { 
  Sparkles, 
  Edit3, 
  Eye, 
  Check, 
  AlertCircle, 
  Plus, 
  Scale, 
  UtensilsCrossed,
  Clock
} from 'lucide-react';
import { 
  AdherenceType, 
  HouseholdProfile, 
  Language, 
  MealSelection, 
  MealType, 
  Recipe 
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { getRicePortion } from '../utils/portionEngine';

interface MealCardProps {
  mealType: MealType;
  selection: MealSelection;
  recipesMap: Record<string, Recipe>;
  language: Language;
  household: HouseholdProfile;
  mealTime: string;
  adherence?: AdherenceType;
  onEditMeal: (mealType: MealType) => void;
  onViewPlate: (mealType: MealType) => void;
  onLogAdherence: (mealType: MealType, adherence: AdherenceType) => void;
}

export const MealCard: React.FC<MealCardProps> = ({
  mealType,
  selection,
  recipesMap,
  language,
  household,
  mealTime,
  adherence,
  onEditMeal,
  onViewPlate,
  onLogAdherence,
}) => {
  const t = TRANSLATIONS[language];

  const mainRecipe = recipesMap[selection.mainDishId];
  const sideRecipes = selection.sideDishIds.map((id) => recipesMap[id]).filter(Boolean);

  const portionGuidance = getRicePortion(
    household,
    household.mealPattern,
    mealType,
    selection.elderRiceAdjustment
  );

  const mealLabels: Record<MealType, { name_en: string; name_ta: string; emoji: string }> = {
    breakfast: { name_en: t.mealBreakfast, name_ta: t.mealBreakfast, emoji: '🌅' },
    lunch: { name_en: t.mealLunch, name_ta: t.mealLunch, emoji: '☀️' },
    tiffin: { name_en: t.mealTiffin, name_ta: t.mealTiffin, emoji: '☕' },
    dinner: { name_en: t.mealDinner, name_ta: t.mealDinner, emoji: '🌙' },
  };

  const currentLabel = mealLabels[mealType];

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
      {/* Top Header */}
      <div>
        <div className="p-4 sm:p-5 bg-gradient-to-r from-stone-50 via-white to-amber-50/40 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{currentLabel.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-stone-900 text-base font-sans">
                  {currentLabel.name_en}
                </h3>
                <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full flex items-center gap-1 border border-stone-200">
                  <Clock className="w-3 h-3 text-stone-400" />
                  {mealTime}
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                {currentLabel.name_ta}
              </p>
            </div>
          </div>

          <button
            onClick={() => onEditMeal(mealType)}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 transition-colors flex items-center gap-1 text-xs font-semibold"
            title={t.editMeal}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'ta' ? 'மாற்று' : 'Edit'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Main Dish */}
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              {t.mainItem}
            </span>
            {mainRecipe ? (
              <div className="flex items-center justify-between p-2.5 bg-amber-50/60 rounded-xl border border-amber-200/70">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{mainRecipe.imageEmoji || '🍚'}</span>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-sans">
                      {language === 'ta' ? mainRecipe.name_ta : mainRecipe.name_en}
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      {language === 'ta' ? mainRecipe.name_en : mainRecipe.name_ta}
                    </p>
                  </div>
                </div>

                {/* Elder Portion Badge */}
                <div className="text-right">
                  <span className="text-xs font-extrabold text-amber-900 bg-amber-200/80 px-2 py-1 rounded-lg border border-amber-300">
                    {portionGuidance.approximateCups}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-stone-400 italic">No main dish chosen</p>
            )}
          </div>

          {/* Side Dishes List */}
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              {t.sideDishes} ({sideRecipes.length})
            </span>
            <div className="flex flex-wrap gap-1.5">
              {sideRecipes.length > 0 ? (
                sideRecipes.map((side) => (
                  <span
                    key={side.id}
                    className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 bg-stone-100 hover:bg-stone-200/70 text-stone-800 rounded-lg border border-stone-200 transition-colors"
                  >
                    <span>{side.imageEmoji || '🥗'}</span>
                    <span>{language === 'ta' ? side.name_ta : side.name_en}</span>
                  </span>
                ))
              ) : (
                <span className="text-xs text-stone-400 italic">No side dishes added</span>
              )}
            </div>
          </div>

          {/* Elder's Customized Portion Highlight Card */}
          <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-950 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>{household.elderName}’s Portion:</span>
              </span>
              <span className="font-extrabold text-emerald-900">
                {portionGuidance.approximateGrams > 0
                  ? `~${portionGuidance.approximateGrams}g (${portionGuidance.approximateCups})`
                  : 'Zero Rice'}
              </span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-snug">
              {language === 'ta' ? portionGuidance.householdMeasure_ta : portionGuidance.householdMeasure_en} + {language === 'ta' ? 'இரட்டிப்பு காய்கறி பொரியல்' : 'Double veggie volume'}
            </p>
          </div>

          {/* Custom family note if present */}
          {selection.customNotes && (
            <p className="text-xs text-stone-500 italic bg-stone-50 p-2 rounded-lg border border-stone-200/60">
              "{selection.customNotes}"
            </p>
          )}
        </div>
      </div>

      {/* Footer & Actions */}
      <div className="p-4 sm:p-5 bg-stone-50/80 border-t border-stone-100 space-y-3">
        {/* View Elder's Plate Button */}
        <button
          onClick={() => onViewPlate(mealType)}
          className="w-full py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
        >
          <Eye className="w-4 h-4" />
          <span>{language === 'ta' ? 'முதியவர் தட்டை காண்க' : 'View Elder’s Plate'}</span>
        </button>

        {/* Adherence Feedback Logger */}
        <div className="pt-2 border-t border-stone-200/60">
          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
            {t.logAdherence}:
          </span>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <button
              onClick={() => onLogAdherence(mealType, 'followed')}
              className={`py-1.5 px-2 rounded-lg font-semibold transition-all border ${
                adherence === 'followed'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {language === 'ta' ? 'சரியாக உண்டார் 👍' : 'Followed 👍'}
            </button>
            <button
              onClick={() => onLogAdherence(mealType, 'extra_rice')}
              className={`py-1.5 px-2 rounded-lg font-semibold transition-all border ${
                adherence === 'extra_rice'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {language === 'ta' ? 'கூடுதல் சாதம் 🍚' : 'Extra Rice 🍚'}
            </button>
            <button
              onClick={() => onLogAdherence(mealType, 'skipped_veg')}
              className={`py-1.5 px-2 rounded-lg font-semibold transition-all border ${
                adherence === 'skipped_veg'
                  ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {language === 'ta' ? 'காய்கறி குறைவு 🥗' : 'Skipped Veg 🥗'}
            </button>
            <button
              onClick={() => onLogAdherence(mealType, 'modified')}
              className={`py-1.5 px-2 rounded-lg font-semibold transition-all border ${
                adherence === 'modified'
                  ? 'bg-stone-800 text-white border-stone-800 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {language === 'ta' ? 'வேறு உணவு 🍲' : 'Modified 🍲'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
