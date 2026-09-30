import React, { useState } from 'react';
import { X, Check, Plus, Trash2, Search, Utensils } from 'lucide-react';
import { Language, MealSelection, MealType, Recipe } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface MealEditorModalProps {
  mealType: MealType;
  selection: MealSelection;
  allRecipes: Recipe[];
  language: Language;
  onClose: () => void;
  onSaveSelection: (updated: MealSelection) => void;
}

export const MealEditorModal: React.FC<MealEditorModalProps> = ({
  mealType,
  selection,
  allRecipes,
  language,
  onClose,
  onSaveSelection,
}) => {
  const t = TRANSLATIONS[language];

  const [mainDishId, setMainDishId] = useState(selection.mainDishId);
  const [sideDishIds, setSideDishIds] = useState<string[]>([...selection.sideDishIds]);
  const [elderAdjustment, setElderAdjustment] = useState(selection.elderRiceAdjustment || 'recommended');
  const [customNotes, setCustomNotes] = useState(selection.customNotes || '');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter recipes appropriate for this meal type or general
  const filteredRecipes = allRecipes.filter((r) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      r.name_en.toLowerCase().includes(query) ||
      r.name_ta.includes(query) ||
      r.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  const handleAddSide = (recipeId: string) => {
    if (!sideDishIds.includes(recipeId)) {
      setSideDishIds([...sideDishIds, recipeId]);
    }
  };

  const handleRemoveSide = (recipeId: string) => {
    setSideDishIds(sideDishIds.filter((id) => id !== recipeId));
  };

  const handleSave = () => {
    onSaveSelection({
      mainDishId,
      sideDishIds,
      elderRiceAdjustment: elderAdjustment,
      customNotes,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-lg font-black text-stone-900 font-sans">
              {t.editMeal}: <span className="capitalize text-amber-700">{mealType}</span>
            </h2>
            <p className="text-xs text-stone-500 font-medium">
              {language === 'ta' ? 'குடும்ப மெனுவில் உணவுகளை மாற்றவும்' : 'Update dishes for today’s meal'}
            </p>
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
          {/* Main Dish Selector */}
          <div>
            <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-2">
              {t.mainItem}
            </label>
            <select
              value={mainDishId}
              onChange={(e) => setMainDishId(e.target.value)}
              className="w-full text-sm font-bold p-3 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
            >
              {allRecipes.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.imageEmoji} {language === 'ta' ? r.name_ta : r.name_en} ({language === 'ta' ? r.name_en : r.name_ta})
                </option>
              ))}
            </select>
          </div>

          {/* Current Side Dishes with Remove Buttons */}
          <div>
            <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-2">
              {t.sideDishes} ({sideDishIds.length})
            </label>
            <div className="flex flex-wrap gap-2">
              {sideDishIds.length > 0 ? (
                sideDishIds.map((id) => {
                  const r = allRecipes.find((item) => item.id === id);
                  if (!r) return null;
                  return (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-amber-50 text-amber-950 border border-amber-200 rounded-xl text-xs font-semibold"
                    >
                      <span>{r.imageEmoji}</span>
                      <span>{language === 'ta' ? r.name_ta : r.name_en}</span>
                      <button
                        onClick={() => handleRemoveSide(id)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-0.5 ml-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  );
                })
              ) : (
                <p className="text-xs text-stone-400 italic">No side dishes selected</p>
              )}
            </div>
          </div>

          {/* Add Side Dish Explorer */}
          <div className="border border-stone-200 rounded-2xl p-4 bg-stone-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                {t.addSideDish}
              </span>
              <div className="relative w-48">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'ta' ? 'தேடுக...' : 'Search...'}
                  className="w-full text-xs pl-8 pr-2 py-1.5 bg-white border border-stone-300 rounded-lg focus:outline-amber-600"
                />
              </div>
            </div>

            <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
              {filteredRecipes.map((r) => {
                const isSelected = sideDishIds.includes(r.id) || mainDishId === r.id;
                return (
                  <div
                    key={r.id}
                    className="flex items-center justify-between p-2 bg-white rounded-xl border border-stone-200/80 hover:bg-stone-50 transition-colors text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span>{r.imageEmoji}</span>
                      <div>
                        <span className="font-bold text-stone-900">
                          {language === 'ta' ? r.name_ta : r.name_en}
                        </span>
                        <span className="text-stone-400 text-[11px] ml-1.5">
                          ({r.approximateCarbs}g carbs)
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddSide(r.id)}
                      disabled={isSelected}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {isSelected ? 'Added' : '+ Add'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Elder Portion Tuning */}
          <div>
            <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-2">
              {t.tweakPortion}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setElderAdjustment('smaller')}
                className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                  elderAdjustment === 'smaller'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {t.portionSmaller}
              </button>
              <button
                onClick={() => setElderAdjustment('recommended')}
                className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                  elderAdjustment === 'recommended'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {t.portionRecommended}
              </button>
              <button
                onClick={() => setElderAdjustment('larger')}
                className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                  elderAdjustment === 'larger'
                    ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {t.portionLarger}
              </button>
            </div>
          </div>

          {/* Custom Family Notes */}
          <div>
            <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-1.5">
              {t.customNotes}
            </label>
            <input
              type="text"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder={language === 'ta' ? 'எ.கா: முதியவருக்கு நெய் இன்றி சுடவும்...' : 'e.g. Cook with minimal oil for Appa...'}
              className="w-full text-xs font-medium px-3 py-2.5 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
            />
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
            className="py-2 px-5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>{t.saveMealChanges}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
