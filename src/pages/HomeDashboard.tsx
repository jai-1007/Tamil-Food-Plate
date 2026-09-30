import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ChevronRight, 
  Scale, 
  BookOpen, 
  ArrowRightLeft, 
  MessageSquareHeart, 
  PieChart, 
  BellRing, 
  Copy, 
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { 
  AdherenceType, 
  DailyMealPlan, 
  HouseholdProfile, 
  Language, 
  MealSelection, 
  MealTimes, 
  MealType, 
  Recipe 
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MealCard } from '../components/MealCard';
import { Disclaimer } from '../components/Disclaimer';
import { getRicePortion } from '../utils/portionEngine';

interface HomeDashboardProps {
  language: Language;
  household: HouseholdProfile;
  mealPlan: DailyMealPlan;
  recipesMap: Record<string, Recipe>;
  mealTimes: MealTimes;
  onNavigateTab: (tab: string) => void;
  onEditMeal: (mealType: MealType) => void;
  onViewPlate: (mealType: MealType) => void;
  onLogAdherence: (mealType: MealType, adherence: AdherenceType) => void;
  onCopyToTomorrow: () => void;
  onPlan7Days: () => void;
  simulatedAlert: { meal: string; time: string } | null;
  onDismissAlert: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  language,
  household,
  mealPlan,
  recipesMap,
  mealTimes,
  onNavigateTab,
  onEditMeal,
  onViewPlate,
  onLogAdherence,
  onCopyToTomorrow,
  onPlan7Days,
  simulatedAlert,
  onDismissAlert,
}) => {
  const t = TRANSLATIONS[language];

  // Current lunch portion calculation for elder banner
  const lunchGuidance = getRicePortion(
    household,
    household.mealPattern,
    'lunch',
    mealPlan.meals.lunch.elderRiceAdjustment
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Simulated Active Meal Reminder Card (if alert is triggered) */}
      {simulatedAlert && (
        <div className="bg-amber-500 text-white rounded-2xl p-4 shadow-lg flex items-center justify-between gap-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <BellRing className="w-5 h-5 text-white animate-bounce" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-100">
                {t.activeAlert}
              </span>
              <h4 className="text-base font-extrabold font-sans">
                {language === 'ta'
                  ? `${simulatedAlert.meal} நேரம் (${simulatedAlert.time})! ${household.elderName} தட்டு தயாராக உள்ளதா?`
                  : `Time for ${simulatedAlert.meal} (${simulatedAlert.time})! Is ${household.elderName}'s plate balanced?`}
              </h4>
            </div>
          </div>
          <button
            onClick={onDismissAlert}
            className="px-3 py-1.5 bg-white text-amber-900 rounded-xl text-xs font-bold hover:bg-amber-50 transition-colors shrink-0 shadow-xs"
          >
            {language === 'ta' ? 'சரி' : 'Dismiss'}
          </button>
        </div>
      )}

      {/* Hero Greeting & Philosophy Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-semibold backdrop-blur-xs mb-3 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{household.householdName} • {household.memberCount} {language === 'ta' ? 'உறுப்பினர்கள்' : 'Members'}</span>
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sans tracking-tight leading-tight">
            {t.greeting}
          </h1>
          <p className="text-sm sm:text-base text-amber-100 font-medium mt-1.5 max-w-2xl leading-relaxed">
            {t.tagline}
          </p>

          {/* Elder Guidance Callout Pill */}
          <div className="mt-5 p-3.5 sm:p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg font-black shrink-0">
                🍚
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  {household.elderName}’s Lunch Rice Guidance
                </span>
                <p className="text-xs sm:text-sm font-extrabold text-white">
                  {lunchGuidance.approximateCups} (~{lunchGuidance.approximateGrams}g) + {language === 'ta' ? 'இரண்டு கிண்ணம் பொரியல்' : 'Double Veggie Poriyal'}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigateTab('visual-plate')}
              className="py-2 px-4 bg-white hover:bg-amber-50 text-stone-900 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 shrink-0 self-start sm:self-auto"
            >
              <PieChart className="w-4 h-4 text-amber-700" />
              <span>{t.navVisualPlate}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Action Tiles */}
      <div>
        <h2 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
          {language === 'ta' ? 'விரைவு செயல்பாடுகள்' : 'Quick Actions'}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
          <button
            onClick={() => onEditMeal('lunch')}
            className="p-3.5 bg-white hover:bg-amber-50/70 border border-stone-200/90 rounded-2xl text-left transition-all group shadow-2xs hover:shadow-xs"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              🍱
            </div>
            <span className="text-xs font-bold text-stone-900 block font-sans">
              {t.actionPlanMeal}
            </span>
            <span className="text-[11px] text-stone-500">
              {language === 'ta' ? 'இன்றைய மெனு' : "Today's Menu"}
            </span>
          </button>

          <button
            onClick={() => onNavigateTab('rice-adjuster')}
            className="p-3.5 bg-white hover:bg-amber-50/70 border border-stone-200/90 rounded-2xl text-left transition-all group shadow-2xs hover:shadow-xs"
          >
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Scale className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-stone-900 block font-sans">
              {t.actionAdjustRice}
            </span>
            <span className="text-[11px] text-stone-500">
              {language === 'ta' ? 'கிராம் / கப் கணக்கு' : 'Grams & Cups'}
            </span>
          </button>

          <button
            onClick={() => onNavigateTab('recipes')}
            className="p-3.5 bg-white hover:bg-amber-50/70 border border-stone-200/90 rounded-2xl text-left transition-all group shadow-2xs hover:shadow-xs"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-stone-900 block font-sans">
              {t.actionBrowseRecipes}
            </span>
            <span className="text-[11px] text-stone-500">
              32+ Tamil Dishes
            </span>
          </button>

          <button
            onClick={() => onNavigateTab('my-recipes')}
            className="p-3.5 bg-white hover:bg-amber-50/70 border border-stone-200/90 rounded-2xl text-left transition-all group shadow-2xs hover:shadow-xs"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <ArrowRightLeft className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-stone-900 block font-sans">
              {t.actionModifyRecipe}
            </span>
            <span className="text-[11px] text-stone-500">
              Original vs Modified
            </span>
          </button>

          <button
            onClick={() => onNavigateTab('food-guide')}
            className="col-span-2 sm:col-span-1 p-3.5 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl text-left transition-all group shadow-sm hover:scale-[1.02]"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <MessageSquareHeart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-bold text-white block font-sans">
              {t.actionAskFoodGuide}
            </span>
            <span className="text-[11px] text-amber-100">
              Bilingual AI
            </span>
          </button>
        </div>
      </div>

      {/* Today's Meals Section Header & Copy Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-stone-900 font-sans">
              {language === 'ta' ? 'இன்றைய குடும்ப தாளி தட்டு' : 'Today’s Family Thali'}
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
              {mealPlan.date}
            </span>
          </div>
          <p className="text-xs text-stone-500 font-medium">
            {language === 'ta'
              ? 'முதியவருக்கு தனி சமையல் இன்றி ஒரே மெனுவில் அளவுகளை மாற்றியுள்ளோம்.'
              : 'Same pot for everyone with elder-specific portion modifications.'}
          </p>
        </div>

        {/* Copy plan to tomorrow or plan 7 days buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCopyToTomorrow}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold border border-stone-200 transition-colors"
            title="Duplicate today's plan to tomorrow"
          >
            <Copy className="w-3.5 h-3.5 text-stone-500" />
            <span>{t.copyToTomorrow}</span>
          </button>
          <button
            onClick={onPlan7Days}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-xl text-xs font-bold border border-amber-200 transition-colors"
            title="Extend plan for next week"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.plan7Days}</span>
          </button>
        </div>
      </div>

      {/* Today's Meals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <MealCard
          mealType="breakfast"
          selection={mealPlan.meals.breakfast}
          recipesMap={recipesMap}
          language={language}
          household={household}
          mealTime={mealTimes.breakfast}
          adherence={mealPlan.adherence?.breakfast}
          onEditMeal={onEditMeal}
          onViewPlate={onViewPlate}
          onLogAdherence={onLogAdherence}
        />

        <MealCard
          mealType="lunch"
          selection={mealPlan.meals.lunch}
          recipesMap={recipesMap}
          language={language}
          household={household}
          mealTime={mealTimes.lunch}
          adherence={mealPlan.adherence?.lunch}
          onEditMeal={onEditMeal}
          onViewPlate={onViewPlate}
          onLogAdherence={onLogAdherence}
        />

        <MealCard
          mealType="tiffin"
          selection={mealPlan.meals.tiffin}
          recipesMap={recipesMap}
          language={language}
          household={household}
          mealTime={mealTimes.tiffin}
          adherence={mealPlan.adherence?.tiffin}
          onEditMeal={onEditMeal}
          onViewPlate={onViewPlate}
          onLogAdherence={onLogAdherence}
        />

        <MealCard
          mealType="dinner"
          selection={mealPlan.meals.dinner}
          recipesMap={recipesMap}
          language={language}
          household={household}
          mealTime={mealTimes.dinner}
          adherence={mealPlan.adherence?.dinner}
          onEditMeal={onEditMeal}
          onViewPlate={onViewPlate}
          onLogAdherence={onLogAdherence}
        />
      </div>

      {/* Gentle Planning Insight Note */}
      <div className="p-4 bg-stone-100/80 rounded-2xl border border-stone-200 text-xs text-stone-700 flex items-start gap-3">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-stone-900 block mb-0.5">
            {t.adherenceInsightTitle}
          </span>
          <p className="leading-relaxed">
            {t.adherenceGentlePrompt}
          </p>
        </div>
      </div>

      {/* Health Disclaimer Card */}
      <Disclaimer language={language} variant="card" />
    </div>
  );
};
