import React, { useState } from 'react';
import { 
  X, 
  ArrowRightLeft, 
  Bookmark, 
  Check, 
  Sparkles, 
  ShieldAlert, 
  Flame, 
  Salad 
} from 'lucide-react';
import { Language, Recipe, SavedRecipe } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface RecipeModificationModalProps {
  recipe: Recipe | null;
  language: Language;
  onClose: () => void;
  onSaveModifiedRecipe: (saved: SavedRecipe) => void;
}

export const RecipeModificationModal: React.FC<RecipeModificationModalProps> = ({
  recipe,
  language,
  onClose,
  onSaveModifiedRecipe,
}) => {
  if (!recipe) return null;
  const t = TRANSLATIONS[language];
  const mod = recipe.modificationSuggestions;

  const defaultTitle = language === 'ta'
    ? `வீட்டு முறை ${recipe.name_ta}`
    : `House Style ${recipe.name_en}`;

  const [customTitle, setCustomTitle] = useState(defaultTitle);
  const [customNotes, setCustomNotes] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    const saved: SavedRecipe = {
      id: `saved-${Date.now()}`,
      originalRecipeId: recipe.id,
      customTitle: customTitle.trim() || defaultTitle,
      customNotes: customNotes.trim() || (language === 'ta' ? mod.title_ta : mod.title_en),
      savedAt: new Date().toISOString(),
      modifiedCarbs: mod.modifiedCarbs,
      modifiedFiber: mod.modifiedFiber,
      baseRecipeName_en: recipe.name_en,
      baseRecipeName_ta: recipe.name_ta,
    };
    onSaveModifiedRecipe(saved);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-stone-200 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 bg-amber-500/10 border-b border-amber-200 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-600 text-white rounded-xl">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-stone-900 font-sans">
                {t.compareOriginalModified}
              </h2>
              <p className="text-xs text-stone-600 font-medium">
                {language === 'ta' ? recipe.name_ta : recipe.name_en} • {language === 'ta' ? mod.title_ta : mod.title_en}
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

        {/* Comparison Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Disclaimer callout */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-snug">
              {language === 'ta'
                ? 'இந்த மாற்றங்கள் நீரிழிவு சிகிச்சைக்கு மாற்றாகாது. தோராயமான சமையல் முறை வழிகாட்டல் மட்டுமே.'
                : 'These modifications are approximate culinary adjustments and do not claim to medically treat or cure diabetes.'}
            </p>
          </div>

          {/* Side-by-Side Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. ORIGINAL VERSION */}
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-stone-600">
                  {t.originalVersion}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-200 text-stone-700">
                  Family Standard
                </span>
              </div>

              {/* Cooking Method */}
              <div>
                <span className="text-[11px] font-bold text-stone-500 uppercase block mb-1">
                  {t.cookingMethod}
                </span>
                <p className="text-xs text-stone-800 leading-relaxed bg-white p-3 rounded-xl border border-stone-200/80">
                  {language === 'ta' ? mod.originalMethod_ta : mod.originalMethod_en}
                </p>
              </div>

              {/* Nutrition Profile */}
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-400 block font-semibold">
                    {t.approxCarbs}
                  </span>
                  <span className="text-sm font-black text-stone-800">
                    {recipe.approximateCarbs}g
                  </span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-400 block font-semibold">
                    {t.approxFiber}
                  </span>
                  <span className="text-sm font-black text-stone-800">
                    {recipe.approximateFiber}g
                  </span>
                </div>
              </div>
            </div>

            {/* 2. MODIFIED VERSION */}
            <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-300 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-950">
                    {t.modifiedVersion}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-200 text-emerald-900 border border-emerald-300">
                  Elder Friendly
                </span>
              </div>

              {/* Modified Method */}
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase block mb-1">
                  {language === 'ta' ? 'மாற்றிய சமையல் முறை' : 'Modified Method'}
                </span>
                <p className="text-xs text-emerald-950 leading-relaxed bg-white p-3 rounded-xl border border-emerald-200 font-medium">
                  {language === 'ta' ? mod.modifiedMethod_ta : mod.modifiedMethod_en}
                </p>
              </div>

              {/* Modified Nutrition Profile */}
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2.5 bg-white rounded-xl border border-emerald-200">
                  <span className="text-[10px] text-stone-500 block font-semibold">
                    {t.approxCarbs} (-{(recipe.approximateCarbs - mod.modifiedCarbs)}g)
                  </span>
                  <span className="text-sm font-black text-emerald-700">
                    {mod.modifiedCarbs}g
                  </span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-emerald-200">
                  <span className="text-[10px] text-stone-500 block font-semibold">
                    {t.approxFiber} (+{(mod.modifiedFiber - recipe.approximateFiber).toFixed(1)}g)
                  </span>
                  <span className="text-sm font-black text-emerald-800">
                    {mod.modifiedFiber}g
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Modification Action Points */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5">
              {language === 'ta' ? 'முக்கிய குறிப்புகள்' : 'Key Cultural Action Points'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {(language === 'ta' ? mod.points_ta : mod.points_en).map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Save to My Recipes Form */}
          <div className="border border-amber-300 bg-amber-50/60 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-700" />
              <h4 className="text-xs font-extrabold text-amber-950 uppercase tracking-wider">
                {t.saveModifiedRecipe}
              </h4>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-stone-600 block">
                {language === 'ta' ? 'உங்கள் சமையல் பெயர்' : 'Custom Name for My Recipes'}
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder={t.savedRecipeNamePlaceholder}
                className="w-full text-xs font-semibold px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-amber-600"
              />

              <label className="text-[11px] font-semibold text-stone-600 block pt-1">
                {t.customNotes}
              </label>
              <input
                type="text"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder={language === 'ta' ? 'எ.கா: அப்பாவிற்கு எண்ணெய் மிகக் குறைவாக...' : 'e.g. Extra grated carrots and very low oil...'}
                className="w-full text-xs font-medium px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-xl text-xs font-bold transition-all"
          >
            {language === 'ta' ? 'ரத்து செய்க' : 'Cancel'}
          </button>

          <button
            onClick={handleSave}
            disabled={savedSuccess}
            className={`py-2 px-5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs ${
              savedSuccess
                ? 'bg-emerald-600 text-white'
                : 'bg-amber-600 hover:bg-amber-700 text-white'
            }`}
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t.savedRecipeSuccess}</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                <span>{t.saveModifiedRecipe}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
