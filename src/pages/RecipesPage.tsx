import React, { useState } from 'react';
import { Search, Filter, BookOpen, Plus, Sparkles } from 'lucide-react';
import { Language, Recipe } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { RecipeCard } from '../components/RecipeCard';

interface RecipesPageProps {
  recipes: Recipe[];
  language: Language;
  onOpenDetails: (recipe: Recipe) => void;
  onOpenModification: (recipe: Recipe) => void;
  onAddToMeal?: (recipe: Recipe) => void;
}

export const RecipesPage: React.FC<RecipesPageProps> = ({
  recipes,
  language,
  onOpenDetails,
  onOpenModification,
  onAddToMeal,
}) => {
  const t = TRANSLATIONS[language];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: t.allCategories },
    { id: 'Rice-based', label: t.filterRiceBased },
    { id: 'Millet-based', label: t.filterMilletBased },
    { id: 'Vegetable', label: t.filterVegetable },
    { id: 'Protein', label: t.filterProtein },
    { id: 'Side dish', label: t.filterSideDish },
    { id: 'High-fiber', label: t.filterHighFiber },
    { id: 'Quick', label: t.filterQuick },
    { id: 'Breakfast', label: 'Breakfast' },
    { id: 'Lunch', label: 'Lunch' },
    { id: 'Dinner', label: 'Dinner' },
  ];

  const filteredRecipes = recipes.filter((r) => {
    // 1. Tag filter
    if (selectedTag !== 'all' && !r.tags.includes(selectedTag)) {
      return false;
    }

    // 2. Bilingual search
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    return (
      r.name_en.toLowerCase().includes(query) ||
      r.name_ta.toLowerCase().includes(query) ||
      r.ingredients.some((ing) => ing.toLowerCase().includes(query)) ||
      r.ingredients_ta.some((ing) => ing.includes(query)) ||
      r.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-stone-900 font-sans">
              {t.recipeDatabase}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              {language === 'ta'
                ? '32+ பாரம்பரிய தமிழ் உணவுகள் & நீரிழிவு உகந்த சமையல் மாற்றங்கள்'
                : '32+ authentic Tamil dishes with elder-friendly modifications'}
            </p>
          </div>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          {/* Bilingual Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchRecipePlaceholder}
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl focus:outline-amber-600 shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-3">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedTag(f.id)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                selectedTag === f.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Count result */}
        <div className="text-xs text-stone-500 font-medium flex items-center justify-between">
          <span>
            {filteredRecipes.length} {t.recipesFound}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-amber-800 underline font-semibold"
            >
              {language === 'ta' ? 'தேடலை அழிக்க' : 'Clear search'}
            </button>
          )}
        </div>
      </div>

      {/* Recipe Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              language={language}
              onOpenDetails={onOpenDetails}
              onOpenModification={onOpenModification}
              onAddToMeal={onAddToMeal}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 space-y-3">
          <div className="text-4xl">🍲</div>
          <h3 className="text-base font-bold text-stone-800 font-sans">
            {t.noRecipesFound}
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            {language === 'ta'
              ? 'வேறு பெயரையோ அல்லது "இட்லி", "சாம்பார்", "பொரியல்" போன்ற சொற்களையோ தேடுங்கள்.'
              : 'Try searching for dishes like Idli, Sambar, Kootu, or Sundal in English or Tamil.'}
          </p>
        </div>
      )}
    </div>
  );
};
