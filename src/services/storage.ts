import { DailyMealPlan, HouseholdProfile, Language, MealTimes, SavedRecipe, UserAuth } from '../types';
import { DEMO_HOUSEHOLD, DEFAULT_MEAL_TIMES, getDemoMealPlan, getTodayDateString } from '../data/demoData';
import { db, auth, hasValidConfig } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const KEYS = {
  LANGUAGE: 'tamil_plate_lang',
  HOUSEHOLD: 'tamil_plate_household',
  MEAL_TIMES: 'tamil_plate_mealtimes',
  MEAL_PLANS: 'tamil_plate_mealplans',
  SAVED_RECIPES: 'tamil_plate_saved_recipes',
  AUTH: 'tamil_plate_auth',
  ONBOARDED: 'tamil_plate_onboarded',
};

// Initial state helpers
export function loadLanguage(): Language {
  const saved = localStorage.getItem(KEYS.LANGUAGE);
  return (saved === 'ta' || saved === 'en') ? saved : 'en';
}

export function saveLanguage(lang: Language): void {
  localStorage.setItem(KEYS.LANGUAGE, lang);
}

export function loadHouseholdProfile(): HouseholdProfile {
  const saved = localStorage.getItem(KEYS.HOUSEHOLD);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Fallback
    }
  }
  return DEMO_HOUSEHOLD;
}

export async function saveHouseholdProfile(profile: HouseholdProfile): Promise<void> {
  localStorage.setItem(KEYS.HOUSEHOLD, JSON.stringify(profile));
  localStorage.setItem(KEYS.ONBOARDED, 'true');

  // Sync to Firestore if user is authenticated and Firebase is configured
  if (hasValidConfig && db && auth?.currentUser) {
    try {
      const ref = doc(db, 'households', auth.currentUser.uid);
      await setDoc(ref, profile, { merge: true });
    } catch (err) {
      console.warn('Could not sync household to Firestore:', err);
    }
  }
}

export function loadMealTimes(): MealTimes {
  const saved = localStorage.getItem(KEYS.MEAL_TIMES);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Fallback
    }
  }
  return DEFAULT_MEAL_TIMES;
}

export function saveMealTimes(times: MealTimes): void {
  localStorage.setItem(KEYS.MEAL_TIMES, JSON.stringify(times));
}

export function loadMealPlans(): Record<string, DailyMealPlan> {
  const saved = localStorage.getItem(KEYS.MEAL_PLANS);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Object.keys(parsed).length > 0) return parsed;
    } catch {
      // Fallback
    }
  }
  // Initialize with today's demo plan
  const today = getTodayDateString();
  const initial: Record<string, DailyMealPlan> = {
    [today]: getDemoMealPlan(today),
  };
  localStorage.setItem(KEYS.MEAL_PLANS, JSON.stringify(initial));
  return initial;
}

export async function saveMealPlan(plan: DailyMealPlan): Promise<void> {
  const allPlans = loadMealPlans();
  allPlans[plan.date] = plan;
  localStorage.setItem(KEYS.MEAL_PLANS, JSON.stringify(allPlans));

  // Sync to Firestore if user logged in
  if (hasValidConfig && db && auth?.currentUser) {
    try {
      const ref = doc(db, 'mealPlans', `${auth.currentUser.uid}_${plan.date}`);
      await setDoc(ref, plan, { merge: true });
    } catch (err) {
      console.warn('Could not sync meal plan to Firestore:', err);
    }
  }
}

export function loadSavedRecipes(): SavedRecipe[] {
  const saved = localStorage.getItem(KEYS.SAVED_RECIPES);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }
  // Default sample saved recipe
  const sampleSaved: SavedRecipe[] = [
    {
      id: 'saved-1',
      originalRecipeId: 'lemon-rice',
      customTitle: 'House Style Lemon Rice',
      customNotes: 'Made with half Ponni rice, half steamed grated carrot and minimal tempering oil for Appa.',
      savedAt: new Date().toISOString(),
      modifiedCarbs: 28,
      modifiedFiber: 4.8,
      baseRecipeName_en: 'Traditional Lemon Rice',
      baseRecipeName_ta: 'எலுமிச்சை சாதம்',
    },
    {
      id: 'saved-2',
      originalRecipeId: 'ven-pongal',
      customTitle: 'Equal Dal Diabetic Ven Pongal',
      customNotes: '1:1 rice to moong dal ratio with generous cracked pepper and curry leaves.',
      savedAt: new Date().toISOString(),
      modifiedCarbs: 34,
      modifiedFiber: 5.2,
      baseRecipeName_en: 'Traditional Ven Pongal',
      baseRecipeName_ta: 'பாரம்பரிய வெண் பொங்கல்',
    },
  ];
  localStorage.setItem(KEYS.SAVED_RECIPES, JSON.stringify(sampleSaved));
  return sampleSaved;
}

export async function saveCustomRecipe(recipe: SavedRecipe): Promise<void> {
  const all = loadSavedRecipes();
  // Check if exists
  const existingIdx = all.findIndex((r) => r.id === recipe.id);
  if (existingIdx >= 0) {
    all[existingIdx] = recipe;
  } else {
    all.unshift(recipe);
  }
  localStorage.setItem(KEYS.SAVED_RECIPES, JSON.stringify(all));

  if (hasValidConfig && db && auth?.currentUser) {
    try {
      const ref = doc(db, 'savedRecipes', `${auth.currentUser.uid}_${recipe.id}`);
      await setDoc(ref, recipe, { merge: true });
    } catch (err) {
      console.warn('Could not sync custom recipe to Firestore:', err);
    }
  }
}

export function deleteSavedRecipe(id: string): void {
  const all = loadSavedRecipes().filter((r) => r.id !== id);
  localStorage.setItem(KEYS.SAVED_RECIPES, JSON.stringify(all));
}

export function loadUserAuth(): UserAuth {
  const saved = localStorage.getItem(KEYS.AUTH);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Fallback
    }
  }
  return { isGuest: true };
}

export function saveUserAuth(userAuth: UserAuth): void {
  localStorage.setItem(KEYS.AUTH, JSON.stringify(userAuth));
}

export function hasCompletedOnboarding(): boolean {
  return localStorage.getItem(KEYS.ONBOARDED) === 'true';
}
