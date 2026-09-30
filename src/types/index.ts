export type Language = 'en' | 'ta';

export type AgeBand = '50-59' | '60-69' | '70+';
export type BodyType = 'slim' | 'medium' | 'heavy';
export type ActivityLevel = 'low' | 'moderate' | 'high';
export type MealPattern = '3_meals' | '3_meals_snacks' | '2_meals_snacks';
export type MealType = 'breakfast' | 'lunch' | 'tiffin' | 'dinner';
export type DishType = 'main' | 'side' | 'protein' | 'rasam_curd' | 'snack';
export type AdherenceType = 'followed' | 'extra_rice' | 'skipped_veg' | 'modified';

export interface HouseholdProfile {
  id: string;
  householdName: string;
  memberCount: number;
  elderName: string;
  ageBand: AgeBand;
  bodyType: BodyType;
  activityLevel: ActivityLevel;
  mealPattern: MealPattern;
  doctorPortionOverrideGrams: number | null;
  doctorPortionOverrideCups: string | null;
  hasDoctorOverride: boolean;
  notes?: string;
  updatedAt?: string;
}

export interface MealTimes {
  breakfast: string;
  lunch: string;
  tiffin: string;
  dinner: string;
  remindersEnabled: boolean;
}

export interface RecipeModification {
  title_en: string;
  title_ta: string;
  originalMethod_en: string;
  originalMethod_ta: string;
  modifiedMethod_en: string;
  modifiedMethod_ta: string;
  points_en: string[];
  points_ta: string[];
  modifiedCarbs: number;
  modifiedFiber: number;
  modifiedProtein?: number;
}

export interface Recipe {
  id: string;
  name_en: string;
  name_ta: string;
  mealType: MealType[];
  dishType: DishType;
  ingredients: string[];
  ingredients_ta: string[];
  steps: string[];
  steps_ta: string[];
  tags: string[];
  approximateCarbs: number; // in grams
  approximateFiber: number; // in grams
  protein: number; // in grams
  portion: string; // e.g. "1 katori (~100g)"
  isRiceBased: boolean;
  imageEmoji: string;
  modificationSuggestions: RecipeModification;
}

export interface SavedRecipe {
  id: string;
  originalRecipeId: string;
  customTitle: string;
  customNotes: string;
  savedAt: string;
  modifiedCarbs: number;
  modifiedFiber: number;
  baseRecipeName_en: string;
  baseRecipeName_ta: string;
}

export interface MealSelection {
  mainDishId: string;
  sideDishIds: string[];
  elderRiceAdjustment: 'recommended' | 'smaller' | 'larger';
  customNotes?: string;
}

export interface DailyMealPlan {
  id: string;
  date: string; // YYYY-MM-DD
  householdId: string;
  meals: {
    breakfast: MealSelection;
    lunch: MealSelection;
    tiffin: MealSelection;
    dinner: MealSelection;
  };
  adherence?: {
    breakfast?: AdherenceType;
    lunch?: AdherenceType;
    tiffin?: AdherenceType;
    dinner?: AdherenceType;
  };
}

export interface PortionGuidance {
  approximateGrams: number;
  approximateCups: string;
  householdMeasure_en: string;
  householdMeasure_ta: string;
  portionLabel_en: string;
  portionLabel_ta: string;
  distributionSuggestion_en: string;
  distributionSuggestion_ta: string;
  isDoctorOverridden: boolean;
  carbsEstimate: number;
  recommendedVeggieMultiplier: number;
}

export interface UserAuth {
  isGuest: boolean;
  uid?: string;
  email?: string;
}
