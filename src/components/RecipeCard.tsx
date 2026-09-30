import React from 'react';
import { Sparkles, Eye, PlusCircle, ArrowRightLeft } from 'lucide-react';
import { Language, Recipe } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface RecipeCardProps {
  recipe: Recipe;
  language: Language;
  onOpenDetails: (recipe: Recipe) => void;
  onOpenModification: (recipe: Recipe) => void;
  onAddToMeal?: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  language,
  onOpenDetails,
  onOpenModification,
  onAddToMeal,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
      {/* Top Banner & Tags */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
            {recipe.imageEmoji || '🍲'}
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {recipe.isRiceBased && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                {language === 'ta' ? 'அரிசி' : 'Rice'}
              </span>
            )}
            {recipe.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Recipe Names (Bilingual) */}
        <div>
          <h3 className="font-extrabold text-stone-900 text-base group-hover:text-amber-700 transition-colors font-sans">
            {language === 'ta' ? recipe.name_ta : recipe.name_en}
          </h3>
          <p className="text-xs text-stone-500 font-medium mt-0.5">
            {language === 'ta' ? recipe.name_en : recipe.name_ta}
          </p>
        </div>

        {/* Nutrition Bar */}
        <div className="grid grid-cols-3 gap-1.5 mt-3 pt-3 border-t border-stone-100 text-center">
          <div className="p-1.5 bg-stone-50 rounded-lg">
            <span className="text-[10px] text-stone-400 block font-medium uppercase">
              {t.approxCarbs}
            </span>
            <span className="text-xs font-bold text-stone-800">
              {recipe.approximateCarbs}g
            </span>
          </div>
          <div className="p-1.5 bg-emerald-50 rounded-lg border border-emerald-100/60">
            <span className="text-[10px] text-emerald-600 block font-medium uppercase">
              {t.approxFiber}
            </span>
            <span className="text-xs font-bold text-emerald-800">
              {recipe.approximateFiber}g
            </span>
          </div>
          <div className="p-1.5 bg-orange-50 rounded-lg">
            <span className="text-[10px] text-orange-600 block font-medium uppercase">
              {t.approxProtein}
            </span>
            <span className="text-xs font-bold text-orange-950">
              {recipe.protein}g
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-4 py-3 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between gap-1.5">
        <button
          onClick={() => onOpenDetails(recipe)}
          className="flex-1 py-1.5 px-2 text-center text-xs font-bold text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-all flex items-center justify-center gap-1"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{t.viewRecipeDetails}</span>
        </button>

        <button
          onClick={() => onOpenModification(recipe)}
          className="py-1.5 px-2.5 text-center text-xs font-bold text-amber-900 bg-amber-100/80 hover:bg-amber-200 border border-amber-300 rounded-lg transition-all flex items-center justify-center gap-1"
          title={t.compareOriginalModified}
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{language === 'ta' ? 'மாற்றம்' : 'Modify'}</span>
        </button>

        {onAddToMeal && (
          <button
            onClick={() => onAddToMeal(recipe)}
            className="py-1.5 px-2 text-center text-xs font-bold text-emerald-900 bg-emerald-100/80 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-all flex items-center justify-center gap-1"
            title={t.addToMealPlan}
          >
            <PlusCircle className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
