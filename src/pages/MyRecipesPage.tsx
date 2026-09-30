import React from 'react';
import { Bookmark, Sparkles, Trash2, ArrowRight, Eye, BookOpen } from 'lucide-react';
import { Language, Recipe, SavedRecipe } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface MyRecipesPageProps {
  savedRecipes: SavedRecipe[];
  allRecipesMap: Record<string, Recipe>;
  language: Language;
  onOpenDetails: (recipe: Recipe) => void;
  onDeleteSavedRecipe: (id: string) => void;
  onBrowseRecipes: () => void;
}

export const MyRecipesPage: React.FC<MyRecipesPageProps> = ({
  savedRecipes,
  allRecipesMap,
  language,
  onOpenDetails,
  onDeleteSavedRecipe,
  onBrowseRecipes,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-stone-900 font-sans">
                {t.mySavedRecipesTitle}
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                {language === 'ta'
                  ? 'உங்கள் குடும்பத்திற்கென சேமிக்கப்பட்ட நீரிழிவு உகந்த சமையல் மாற்றங்கள்'
                  : 'Custom household recipe adjustments saved for your family'}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onBrowseRecipes}
          className="flex items-center gap-1.5 py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs self-start sm:self-auto"
        >
          <BookOpen className="w-4 h-4" />
          <span>{t.actionBrowseRecipes}</span>
        </button>
      </div>

      {/* Saved Recipes List */}
      {savedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {savedRecipes.map((item) => {
            const baseRecipe = allRecipesMap[item.originalRecipeId];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{baseRecipe?.imageEmoji || '🍲'}</span>
                      <div>
                        <h3 className="font-extrabold text-stone-900 text-base font-sans leading-tight">
                          {item.customTitle}
                        </h3>
                        <p className="text-xs text-amber-800 font-semibold mt-0.5">
                          {language === 'ta' ? item.baseRecipeName_ta : item.baseRecipeName_en}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onDeleteSavedRecipe(item.id)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title={language === 'ta' ? 'நீக்குக' : 'Delete'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Custom Notes */}
                  {item.customNotes && (
                    <p className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200/70 mt-3 leading-relaxed">
                      "{item.customNotes}"
                    </p>
                  )}

                  {/* Nutrition Highlights */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                    <div className="p-2 bg-amber-50 rounded-xl border border-amber-200/60">
                      <span className="text-[10px] text-amber-800 uppercase font-semibold block">
                        {t.approxCarbs}
                      </span>
                      <span className="text-xs font-black text-amber-950">
                        {item.modifiedCarbs}g
                      </span>
                    </div>
                    <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200/60">
                      <span className="text-[10px] text-emerald-800 uppercase font-semibold block">
                        {t.approxFiber}
                      </span>
                      <span className="text-xs font-black text-emerald-950">
                        {item.modifiedFiber}g
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">
                    Saved: {new Date(item.savedAt).toLocaleDateString()}
                  </span>
                  {baseRecipe && (
                    <button
                      onClick={() => onOpenDetails(baseRecipe)}
                      className="py-1 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.viewRecipeDetails}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 space-y-4">
          <div className="text-5xl">📖</div>
          <h3 className="text-base font-bold text-stone-800 font-sans">
            {t.noSavedRecipes}
          </h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            {language === 'ta'
              ? 'தமிழ் சமையல் பக்கத்திற்கு சென்று எந்த ஒரு உணவின் மீதும் "பாரம்பரியம் vs மாற்றம்" என்பதை தொட்டு உங்கள் விருப்பத்திற்கேற்ப சேமிக்கலாம்.'
              : 'Browse any recipe and tap "Original vs Modified" to save custom recipes like "House Style Lemon Rice" or "Equal Dal Pongal".'}
          </p>
          <button
            onClick={onBrowseRecipes}
            className="py-2 px-5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            {t.actionBrowseRecipes}
          </button>
        </div>
      )}
    </div>
  );
};
