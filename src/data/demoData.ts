import { DailyMealPlan, HouseholdProfile, MealTimes } from '../types';

export const DEMO_HOUSEHOLD: HouseholdProfile = {
  id: 'household-demo-1',
  householdName: "Appa's Home",
  memberCount: 4,
  elderName: 'Appa',
  ageBand: '60-69',
  bodyType: 'medium',
  activityLevel: 'moderate',
  mealPattern: '3_meals_snacks',
  doctorPortionOverrideGrams: null,
  doctorPortionOverrideCups: null,
  hasDoctorOverride: false,
  notes: 'Appa enjoys traditional Tanjore style food. Doctor advised keeping dinner light.',
  updatedAt: new Date().toISOString(),
};

export const DEFAULT_MEAL_TIMES: MealTimes = {
  breakfast: '08:30',
  lunch: '13:00',
  tiffin: '17:00',
  dinner: '20:30',
  remindersEnabled: true,
};

export function getTodayDateString(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

export function getDemoMealPlan(dateStr: string = getTodayDateString()): DailyMealPlan {
  return {
    id: `plan-${dateStr}`,
    date: dateStr,
    householdId: 'household-demo-1',
    meals: {
      breakfast: {
        mainDishId: 'idli',
        sideDishIds: ['murungakkai-sambar', 'kathirikai-gothsu'],
        elderRiceAdjustment: 'recommended',
        customNotes: '2 idlis with generous drumstick sambar',
      },
      lunch: {
        mainDishId: 'white-rice',
        sideDishIds: ['murungakkai-sambar', 'vendakkai-poriyal', 'keerai-kootu', 'mor-buttermilk'],
        elderRiceAdjustment: 'recommended',
        customNotes: '1/2 cup rice + extra vendakkai poriyal & buttermilk',
      },
      tiffin: {
        mainDishId: 'kondakadalai-sundal',
        sideDishIds: ['mor-buttermilk'],
        elderRiceAdjustment: 'recommended',
        customNotes: 'Warm boiled black chickpea sundal with ginger tea/buttermilk',
      },
      dinner: {
        mainDishId: 'dosa',
        sideDishIds: ['murungakkai-sambar', 'cabbage-beans-poriyal'],
        elderRiceAdjustment: 'recommended',
        customNotes: '1 crisp dosa with double cabbage-beans poriyal',
      },
    },
    adherence: {
      breakfast: 'followed',
      lunch: 'followed',
    },
  };
}
