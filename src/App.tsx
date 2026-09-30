import React, { useState, useEffect } from 'react';
import { 
  Home, 
  PieChart, 
  SlidersHorizontal, 
  BookOpen, 
  Bookmark, 
  MessageSquareHeart, 
  Settings,
  Scale
} from 'lucide-react';
import { 
  AdherenceType, 
  DailyMealPlan, 
  HouseholdProfile, 
  Language, 
  MealSelection, 
  MealTimes, 
  MealType, 
  Recipe, 
  SavedRecipe, 
  UserAuth 
} from './types';
import { RECIPES_DATA } from './data/recipes';
import { TRANSLATIONS } from './data/translations';
import { 
  getTodayDateString, 
  getDemoMealPlan, 
  DEMO_HOUSEHOLD 
} from './data/demoData';
import { 
  loadLanguage, 
  saveLanguage, 
  loadHouseholdProfile, 
  saveHouseholdProfile, 
  loadMealTimes, 
  saveMealTimes, 
  loadMealPlans, 
  saveMealPlan, 
  loadSavedRecipes, 
  saveCustomRecipe, 
  deleteSavedRecipe, 
  loadUserAuth, 
  saveUserAuth, 
  hasCompletedOnboarding 
} from './services/storage';

// Components
import { Header } from './components/Header';
import { Disclaimer } from './components/Disclaimer';
import { OnboardingModal } from './components/OnboardingModal';
import { AuthModal } from './components/AuthModal';
import { MealEditorModal } from './components/MealEditorModal';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { RecipeModificationModal } from './components/RecipeModificationModal';
import { MealTimeSetupModal } from './components/MealTimeSetupModal';

// Pages
import { HomeDashboard } from './pages/HomeDashboard';
import { VisualPlatePage } from './pages/VisualPlatePage';
import { RecipesPage } from './pages/RecipesPage';
import { MyRecipesPage } from './pages/MyRecipesPage';
import { ProfilePage } from './pages/ProfilePage';
import { RicePortionAdjuster } from './components/RicePortionAdjuster';
import { FoodGuideChat } from './components/FoodGuideChat';

export default function App() {
  // State Initialization
  const [language, setLanguage] = useState<Language>(loadLanguage);
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [household, setHousehold] = useState<HouseholdProfile>(loadHouseholdProfile);
  const [mealTimes, setMealTimes] = useState<MealTimes>(loadMealTimes);
  const [mealPlans, setMealPlans] = useState<Record<string, DailyMealPlan>>(loadMealPlans);
  const [savedRecipes, setSavedRecipes] = useState<SavedRecipe[]>(loadSavedRecipes);
  const [userAuth, setUserAuth] = useState<UserAuth>(loadUserAuth);

  // Modals & Navigation Helpers
  const [showOnboarding, setShowOnboarding] = useState<boolean>(!hasCompletedOnboarding());
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showMealTimeModal, setShowMealTimeModal] = useState<boolean>(false);
  const [editingMealType, setEditingMealType] = useState<MealType | null>(null);
  const [viewingPlateMealType, setViewingPlateMealType] = useState<MealType>('lunch');
  const [activeRecipeDetails, setActiveRecipeDetails] = useState<Recipe | null>(null);
  const [activeRecipeModification, setActiveRecipeModification] = useState<Recipe | null>(null);

  // Simulated Alert State
  const [simulatedAlert, setSimulatedAlert] = useState<{ meal: string; time: string } | null>(null);

  const t = TRANSLATIONS[language];
  const todayStr = getTodayDateString();
  const currentPlan = mealPlans[todayStr] || getDemoMealPlan(todayStr);

  // Build recipes lookup map
  const recipesMap: Record<string, Recipe> = React.useMemo(() => {
    const map: Record<string, Recipe> = {};
    for (const r of RECIPES_DATA) {
      map[r.id] = r;
    }
    return map;
  }, []);

  // Sync language changes
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    saveLanguage(lang);
  };

  // Sync household changes
  const handleUpdateHousehold = (updated: HouseholdProfile) => {
    setHousehold(updated);
    saveHouseholdProfile(updated);
  };

  // Sync meal times changes
  const handleUpdateMealTimes = (updated: MealTimes) => {
    setMealTimes(updated);
    saveMealTimes(updated);
  };

  // Sync user auth changes
  const handleUpdateAuth = (auth: UserAuth) => {
    setUserAuth(auth);
    saveUserAuth(auth);
  };

  // Save updated meal plan
  const handleUpdateMealSelection = (updatedSelection: MealSelection) => {
    if (!editingMealType) return;
    const updatedPlan: DailyMealPlan = {
      ...currentPlan,
      meals: {
        ...currentPlan.meals,
        [editingMealType]: updatedSelection,
      },
    };
    saveMealPlan(updatedPlan);
    setMealPlans((prev) => ({ ...prev, [todayStr]: updatedPlan }));
  };

  // Log adherence feedback
  const handleLogAdherence = (mealType: MealType, adherence: AdherenceType) => {
    const updatedPlan: DailyMealPlan = {
      ...currentPlan,
      adherence: {
        ...currentPlan.adherence,
        [mealType]: adherence,
      },
    };
    saveMealPlan(updatedPlan);
    setMealPlans((prev) => ({ ...prev, [todayStr]: updatedPlan }));
  };

  // Copy today's plan to tomorrow
  const handleCopyToTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const copiedPlan: DailyMealPlan = {
      ...currentPlan,
      id: `plan-${tomorrowStr}`,
      date: tomorrowStr,
      adherence: {},
    };

    saveMealPlan(copiedPlan);
    setMealPlans((prev) => ({ ...prev, [tomorrowStr]: copiedPlan }));
    alert(t.planCopiedSuccess);
  };

  // Plan for next 7 days
  const handlePlan7Days = () => {
    const newPlans = { ...mealPlans };
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const dStr = d.toISOString().split('T')[0];
      const p: DailyMealPlan = {
        ...currentPlan,
        id: `plan-${dStr}`,
        date: dStr,
        adherence: {},
      };
      saveMealPlan(p);
      newPlans[dStr] = p;
    }
    setMealPlans(newPlans);
    alert(language === 'ta' ? 'அடுத்த 7 நாட்களுக்கான உணவுத் திட்டம் தயாராக உள்ளது!' : 'Meal plan created for the next 7 days!');
  };

  // Save modified recipe to "My Recipes"
  const handleSaveModifiedRecipe = (saved: SavedRecipe) => {
    saveCustomRecipe(saved);
    setSavedRecipes(loadSavedRecipes());
  };

  // Delete saved recipe
  const handleDeleteSavedRecipe = (id: string) => {
    deleteSavedRecipe(id);
    setSavedRecipes(loadSavedRecipes());
  };

  // Quick add recipe to today's lunch or dinner
  const handleQuickAddRecipeToMeal = (recipe: Recipe) => {
    const targetMeal: MealType = recipe.mealType.includes('lunch') ? 'lunch' : recipe.mealType[0] || 'lunch';
    const currentMealSelection = currentPlan.meals[targetMeal];

    let updatedSelection: MealSelection;
    if (recipe.dishType === 'main') {
      updatedSelection = {
        ...currentMealSelection,
        mainDishId: recipe.id,
      };
    } else {
      updatedSelection = {
        ...currentMealSelection,
        sideDishIds: currentMealSelection.sideDishIds.includes(recipe.id)
          ? currentMealSelection.sideDishIds
          : [...currentMealSelection.sideDishIds, recipe.id],
      };
    }

    const updatedPlan: DailyMealPlan = {
      ...currentPlan,
      meals: {
        ...currentPlan.meals,
        [targetMeal]: updatedSelection,
      },
    };

    saveMealPlan(updatedPlan);
    setMealPlans((prev) => ({ ...prev, [todayStr]: updatedPlan }));
    alert(language === 'ta' ? `${recipe.name_ta} இன்றைய ${targetMeal} மெனுவில் சேர்க்கப்பட்டது!` : `${recipe.name_en} added to today's ${targetMeal}!`);
  };

  return (
    <div className="min-h-screen bg-stone-100/60 text-stone-800 flex flex-col font-sans selection:bg-amber-200">
      {/* Top Banner Disclaimer */}
      <Disclaimer language={language} variant="banner" />

      {/* Main Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        household={household}
        userAuth={userAuth}
        onOpenAuth={() => setShowAuthModal(true)}
        onOpenHouseholdModal={() => setCurrentTab('profile')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 pb-24 md:pb-12">
        {currentTab === 'home' && (
          <HomeDashboard
            language={language}
            household={household}
            mealPlan={currentPlan}
            recipesMap={recipesMap}
            mealTimes={mealTimes}
            onNavigateTab={setCurrentTab}
            onEditMeal={(meal) => setEditingMealType(meal)}
            onViewPlate={(meal) => {
              setViewingPlateMealType(meal);
              setCurrentTab('visual-plate');
            }}
            onLogAdherence={handleLogAdherence}
            onCopyToTomorrow={handleCopyToTomorrow}
            onPlan7Days={handlePlan7Days}
            simulatedAlert={simulatedAlert}
            onDismissAlert={() => setSimulatedAlert(null)}
          />
        )}

        {currentTab === 'visual-plate' && (
          <VisualPlatePage
            language={language}
            household={household}
            mealPlan={currentPlan}
            recipesMap={recipesMap}
            initialMealType={viewingPlateMealType}
            onNavigateToAdjuster={() => setCurrentTab('rice-adjuster')}
          />
        )}

        {currentTab === 'rice-adjuster' && (
          <div className="space-y-6">
            <RicePortionAdjuster
              language={language}
              household={household}
              onUpdateHousehold={handleUpdateHousehold}
              initialMealType="lunch"
            />
            <Disclaimer language={language} variant="card" />
          </div>
        )}

        {currentTab === 'recipes' && (
          <RecipesPage
            recipes={RECIPES_DATA}
            language={language}
            onOpenDetails={(r) => setActiveRecipeDetails(r)}
            onOpenModification={(r) => setActiveRecipeModification(r)}
            onAddToMeal={handleQuickAddRecipeToMeal}
          />
        )}

        {currentTab === 'my-recipes' && (
          <MyRecipesPage
            savedRecipes={savedRecipes}
            allRecipesMap={recipesMap}
            language={language}
            onOpenDetails={(r) => setActiveRecipeDetails(r)}
            onDeleteSavedRecipe={handleDeleteSavedRecipe}
            onBrowseRecipes={() => setCurrentTab('recipes')}
          />
        )}

        {currentTab === 'food-guide' && (
          <div className="space-y-6">
            <FoodGuideChat language={language} recipes={RECIPES_DATA} />
            <Disclaimer language={language} variant="card" />
          </div>
        )}

        {currentTab === 'profile' && (
          <ProfilePage
            language={language}
            household={household}
            mealTimes={mealTimes}
            userAuth={userAuth}
            onSaveHousehold={handleUpdateHousehold}
            onSaveMealTimes={handleUpdateMealTimes}
            onOpenAuth={() => setShowAuthModal(true)}
            onTriggerSimulatedAlert={(meal, time) => {
              setSimulatedAlert({ meal, time });
              setCurrentTab('home');
            }}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200 py-1 px-2 flex justify-around items-center shadow-lg">
        <button
          onClick={() => setCurrentTab('home')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-bold ${
            currentTab === 'home' ? 'text-amber-600' : 'text-stone-500'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span>{t.navHome}</span>
        </button>

        <button
          onClick={() => setCurrentTab('visual-plate')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-bold ${
            currentTab === 'visual-plate' ? 'text-amber-600' : 'text-stone-500'
          }`}
        >
          <PieChart className="w-5 h-5 mb-0.5" />
          <span>{t.familyPlate.split(' ')[0]}</span>
        </button>

        <button
          onClick={() => setCurrentTab('rice-adjuster')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-bold ${
            currentTab === 'rice-adjuster' ? 'text-amber-600' : 'text-stone-500'
          }`}
        >
          <Scale className="w-5 h-5 mb-0.5" />
          <span>{language === 'ta' ? 'அளவு' : 'Portion'}</span>
        </button>

        <button
          onClick={() => setCurrentTab('recipes')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-bold ${
            currentTab === 'recipes' ? 'text-amber-600' : 'text-stone-500'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span>{language === 'ta' ? 'சமையல்' : 'Recipes'}</span>
        </button>

        <button
          onClick={() => setCurrentTab('food-guide')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-bold ${
            currentTab === 'food-guide' ? 'text-amber-600' : 'text-stone-500'
          }`}
        >
          <MessageSquareHeart className="w-5 h-5 mb-0.5" />
          <span>AI Guide</span>
        </button>
      </div>

      {/* Global Modals */}
      {/* 1. Onboarding Modal on First Launch */}
      {showOnboarding && (
        <OnboardingModal
          language={language}
          onLanguageChange={handleLanguageChange}
          onComplete={(profile) => {
            handleUpdateHousehold(profile);
            setShowOnboarding(false);
          }}
        />
      )}

      {/* 2. Authentication Modal */}
      {showAuthModal && (
        <AuthModal
          userAuth={userAuth}
          language={language}
          onClose={() => setShowAuthModal(false)}
          onUpdateAuth={handleUpdateAuth}
        />
      )}

      {/* 3. Meal Time Setup Modal */}
      {showMealTimeModal && (
        <MealTimeSetupModal
          mealTimes={mealTimes}
          language={language}
          onClose={() => setShowMealTimeModal(false)}
          onSave={handleUpdateMealTimes}
          onTriggerSimulatedAlert={(meal, time) => {
            setSimulatedAlert({ meal, time });
            setShowMealTimeModal(false);
            setCurrentTab('home');
          }}
        />
      )}

      {/* 4. Meal Dishes Editor Modal */}
      {editingMealType && (
        <MealEditorModal
          mealType={editingMealType}
          selection={currentPlan.meals[editingMealType]}
          allRecipes={RECIPES_DATA}
          language={language}
          onClose={() => setEditingMealType(null)}
          onSaveSelection={handleUpdateMealSelection}
        />
      )}

      {/* 5. Recipe Details Modal */}
      {activeRecipeDetails && (
        <RecipeDetailModal
          recipe={activeRecipeDetails}
          language={language}
          onClose={() => setActiveRecipeDetails(null)}
          onOpenModification={(r) => {
            setActiveRecipeDetails(null);
            setActiveRecipeModification(r);
          }}
          onNavigateToAdjuster={() => {
            setActiveRecipeDetails(null);
            setCurrentTab('rice-adjuster');
          }}
        />
      )}

      {/* 6. Recipe Modification (Original vs Modified) Modal */}
      {activeRecipeModification && (
        <RecipeModificationModal
          recipe={activeRecipeModification}
          language={language}
          onClose={() => setActiveRecipeModification(null)}
          onSaveModifiedRecipe={handleSaveModifiedRecipe}
        />
      )}
    </div>
  );
}
