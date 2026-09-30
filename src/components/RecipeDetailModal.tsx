import React from 'react';
import { X, Sparkles, Scale, Check, Clock, Utensils, ShieldCheck } from 'lucide-react';
import { Language, Recipe } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  language: Language;
  onClose: () => void;
  onOpenModification: (recipe: Recipe) => void;
  onNavigateToAdjuster: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  language,
  onClose,
  onOpenModification,
  onNavigateToAdjuster,
}) => {
  if (!recipe) return null;
  const t = TRANSLATIONS[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{recipe.imageEmoji || '🍲'}</span>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-stone-900 font-sans leading-tight">
                {language === 'ta' ? recipe.name_ta : recipe.name_en}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {language === 'ta' ? recipe.name_en : recipe.name_ta} • {recipe.portion}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Quick Nutrition Pill Grid */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-amber-50/60 border border-amber-200/80 rounded-2xl text-center">
            <div>
              <span className="text-[10px] text-stone-500 block uppercase font-bold">
                {t.approxCarbs}
              </span>
              <span className="text-base font-extrabold text-stone-900">
                {recipe.approximateCarbs}g
              </span>
            </div>
            <div className="border-x border-amber-200">
              <span className="text-[10px] text-emerald-700 block uppercase font-bold">
                {t.approxFiber}
              </span>
              <span className="text-base font-extrabold text-emerald-800">
                {recipe.approximateFiber}g
              </span>
            </div>
            <div>
              <span className="text-[10px] text-orange-700 block uppercase font-bold">
                {t.approxProtein}
              </span>
              <span className="text-base font-extrabold text-orange-950">
                {recipe.protein}g
              </span>
            </div>
          </div>

          {/* Rice Adjuster Connector Callout if Rice Based */}
          {recipe.isRiceBased && (
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <Scale className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-950">
                    {language === 'ta' ? 'அரிசி சார்ந்த உணவு - சாத அளவு சரிபார்ப்பு' : 'Rice-Based Dish: Portion Guidance'}
                  </h4>
                  <p className="text-xs text-amber-900/90 mt-0.5">
                    {language === 'ta'
                      ? 'முதியவருக்கு தேவையான துல்லியமான அளவை கணக்கிடுங்கள்.'
                      : 'Calculate culturally calibrated cup & gram portions for your elder.'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToAdjuster();
                }}
                className="py-1.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow-xs"
              >
                {t.connectToAdjuster}
              </button>
            </div>
          )}

          {/* Ingredients Section */}
          <div>
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-600" />
              <span>{t.ingredients}</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {(language === 'ta' ? recipe.ingredients_ta : recipe.ingredients).map((ing, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-stone-50 p-2 rounded-lg border border-stone-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation Steps */}
          <div>
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{t.preparationSteps}</span>
            </h3>
            <ol className="space-y-2 text-xs text-stone-700">
              {(language === 'ta' ? recipe.steps_ta : recipe.steps).map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-2.5 rounded-xl border border-stone-200/80">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-extrabold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Diabetes-Friendly Modification Highlight */}
          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  {t.diabetesModificationAdvice}
                </h4>
              </div>
              <button
                onClick={() => onOpenModification(recipe)}
                className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
              >
                {t.compareOriginalModified} →
              </button>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              {language === 'ta'
                ? recipe.modificationSuggestions.modifiedMethod_ta
                : recipe.modificationSuggestions.modifiedMethod_en}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenModification(recipe)}
            className="py-2 px-4 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-xl text-xs font-bold transition-all"
          >
            {t.compareOriginalModified}
          </button>
          <button
            onClick={onClose}
            className="py-2 px-5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            {language === 'ta' ? 'மூடுக' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
