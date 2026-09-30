import React, { useState } from 'react';
import { 
  Settings, 
  Users, 
  Clock, 
  ShieldCheck, 
  Check, 
  Bell, 
  Scale, 
  Flame, 
  AlertCircle,
  Database
} from 'lucide-react';
import { 
  ActivityLevel, 
  AgeBand, 
  BodyType, 
  HouseholdProfile, 
  Language, 
  MealPattern, 
  MealTimes, 
  UserAuth 
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Disclaimer } from '../components/Disclaimer';
import { hasValidConfig } from '../services/firebase';

interface ProfilePageProps {
  language: Language;
  household: HouseholdProfile;
  mealTimes: MealTimes;
  userAuth: UserAuth;
  onSaveHousehold: (updated: HouseholdProfile) => void;
  onSaveMealTimes: (updated: MealTimes) => void;
  onOpenAuth: () => void;
  onTriggerSimulatedAlert?: (meal: string, time: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  language,
  household,
  mealTimes,
  userAuth,
  onSaveHousehold,
  onSaveMealTimes,
  onOpenAuth,
  onTriggerSimulatedAlert,
}) => {
  const t = TRANSLATIONS[language];

  // Household Profile State
  const [householdName, setHouseholdName] = useState(household.householdName);
  const [memberCount, setMemberCount] = useState(household.memberCount);
  const [elderName, setElderName] = useState(household.elderName);
  const [ageBand, setAgeBand] = useState<AgeBand>(household.ageBand);
  const [bodyType, setBodyType] = useState<BodyType>(household.bodyType);
  const [activity, setActivity] = useState<ActivityLevel>(household.activityLevel);
  const [pattern, setPattern] = useState<MealPattern>(household.mealPattern);
  const [hasDoctorOverride, setHasDoctorOverride] = useState(household.hasDoctorOverride);
  const [doctorGrams, setDoctorGrams] = useState(household.doctorPortionOverrideGrams || 90);
  const [doctorCups, setDoctorCups] = useState(household.doctorPortionOverrideCups || '½ cup');

  // Meal Times State
  const [breakfast, setBreakfast] = useState(mealTimes.breakfast);
  const [lunch, setLunch] = useState(mealTimes.lunch);
  const [tiffin, setTiffin] = useState(mealTimes.tiffin);
  const [dinner, setDinner] = useState(mealTimes.dinner);
  const [remindersEnabled, setRemindersEnabled] = useState(mealTimes.remindersEnabled);

  const [savedAlert, setSavedAlert] = useState(false);

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProfile: HouseholdProfile = {
      ...household,
      householdName: householdName.trim() || "Appa's Home",
      memberCount: memberCount || 4,
      elderName: elderName.trim() || 'Appa',
      ageBand,
      bodyType,
      activityLevel: activity,
      mealPattern: pattern,
      hasDoctorOverride,
      doctorPortionOverrideGrams: hasDoctorOverride ? doctorGrams : null,
      doctorPortionOverrideCups: hasDoctorOverride ? doctorCups : null,
      updatedAt: new Date().toISOString(),
    };

    const updatedTimes: MealTimes = {
      breakfast,
      lunch,
      tiffin,
      dinner,
      remindersEnabled,
    };

    onSaveHousehold(updatedProfile);
    onSaveMealTimes(updatedTimes);

    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-stone-900 font-sans">
              {t.navProfile}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              {language === 'ta'
                ? 'குடும்ப உறுப்பினர் தகவல்கள், உணவு நேரங்கள் மற்றும் நினைவூட்டல்'
                : 'Household profile, elder parameters, meal timings, and sync settings'}
            </p>
          </div>
        </div>
      </div>

      {savedAlert && (
        <div className="p-3.5 bg-emerald-500 text-white rounded-2xl text-xs font-bold shadow-md flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4" />
          <span>{t.profileUpdated}</span>
        </div>
      )}

      {/* Main Profile Form */}
      <form onSubmit={handleSaveAll} className="space-y-6">
        {/* 1. Household Information */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
            <Users className="w-5 h-5 text-amber-700" />
            <h2 className="text-base font-extrabold text-stone-900 font-sans">
              {t.householdProfile}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.householdNickname}
              </label>
              <input
                type="text"
                value={householdName}
                onChange={(e) => setHouseholdName(e.target.value)}
                required
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.memberCount}
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={memberCount}
                onChange={(e) => setMemberCount(Number(e.target.value) || 1)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.elderNickname}
              </label>
              <input
                type="text"
                value={elderName}
                onChange={(e) => setElderName(e.target.value)}
                required
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>
          </div>

          {/* Age Band */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1.5">
              {t.ageBand}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['50-59', '60-69', '70+'] as AgeBand[]).map((a) => (
                <button
                  type="button"
                  key={a}
                  onClick={() => setAgeBand(a)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    ageBand === a
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Body Type */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1.5">
              {t.bodyType}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'slim', label: t.bodyType_slim },
                { id: 'medium', label: t.bodyType_medium },
                { id: 'heavy', label: t.bodyType_heavy },
              ].map((b) => (
                <button
                  type="button"
                  key={b.id}
                  onClick={() => setBodyType(b.id as BodyType)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    bodyType === b.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1.5">
              {t.activityLevel}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'low', label: t.activity_low },
                { id: 'moderate', label: t.activity_moderate },
                { id: 'high', label: t.activity_high },
              ].map((act) => (
                <button
                  type="button"
                  key={act.id}
                  onClick={() => setActivity(act.id as ActivityLevel)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                    activity === act.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>

          {/* Meal Pattern */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1.5">
              {t.mealPattern}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: '3_meals', label: t.mealPattern_3 },
                { id: '3_meals_snacks', label: t.mealPattern_3_snacks },
                { id: '2_meals_snacks', label: t.mealPattern_2_snacks },
              ].map((mp) => (
                <button
                  type="button"
                  key={mp.id}
                  onClick={() => setPattern(mp.id as MealPattern)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                    pattern === mp.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {mp.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Doctor Override Section */}
        <div className="bg-white rounded-2xl border border-emerald-200 p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
            <Scale className="w-5 h-5 text-emerald-700" />
            <div>
              <h2 className="text-base font-extrabold text-stone-900 font-sans">
                {t.doctorOverrideTitle}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {t.doctorOverrideDesc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <input
              type="checkbox"
              id="docOverrideProfileCheck"
              checked={hasDoctorOverride}
              onChange={(e) => setHasDoctorOverride(e.target.checked)}
              className="mt-1 w-4 h-4 rounded-sm text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <label htmlFor="docOverrideProfileCheck" className="text-xs font-bold text-emerald-950 cursor-pointer">
              {t.hasDoctorOverride}
            </label>
          </div>

          {hasDoctorOverride && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  {t.doctorGrams}
                </label>
                <input
                  type="number"
                  value={doctorGrams}
                  onChange={(e) => setDoctorGrams(Number(e.target.value) || 0)}
                  min={40}
                  max={250}
                  step={5}
                  className="w-full text-xs font-bold px-3 py-2 bg-stone-50 border border-emerald-300 rounded-xl focus:outline-emerald-600"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  {t.doctorCups}
                </label>
                <input
                  type="text"
                  value={doctorCups}
                  onChange={(e) => setDoctorCups(e.target.value)}
                  placeholder="e.g. 1/2 cup or 1 small katori"
                  className="w-full text-xs font-bold px-3 py-2 bg-stone-50 border border-emerald-300 rounded-xl focus:outline-emerald-600"
                />
              </div>
            </div>
          )}
        </div>

        {/* 3. Meal Timing & Reminders */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-700" />
              <h2 className="text-base font-extrabold text-stone-900 font-sans">
                {t.mealTimesTitle}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="remindersCheck" className="text-xs font-bold text-stone-700 cursor-pointer">
                {t.enableReminders}
              </label>
              <input
                type="checkbox"
                id="remindersCheck"
                checked={remindersEnabled}
                onChange={(e) => setRemindersEnabled(e.target.checked)}
                className="w-4 h-4 rounded-sm text-amber-600 focus:ring-amber-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.breakfastTime}
              </label>
              <input
                type="time"
                value={breakfast}
                onChange={(e) => setBreakfast(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.lunchTime}
              </label>
              <input
                type="time"
                value={lunch}
                onChange={(e) => setLunch(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.tiffinTime}
              </label>
              <input
                type="time"
                value={tiffin}
                onChange={(e) => setTiffin(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {t.dinnerTime}
              </label>
              <input
                type="time"
                value={dinner}
                onChange={(e) => setDinner(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
              />
            </div>
          </div>

          {onTriggerSimulatedAlert && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onTriggerSimulatedAlert(t.mealLunch, lunch)}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-1"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>{language === 'ta' ? 'நினைவூட்டல் அட்டையை சோதிக்க' : 'Test in-app reminder alert card'}</span>
              </button>
            </div>
          )}
        </div>

        {/* 4. Auth & Sync Status */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white rounded-xl border border-stone-200 text-stone-700">
              <Database className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-stone-900 block font-sans">
                {hasValidConfig ? t.firebaseStatusConnected : t.firebaseStatusLocal}
              </span>
              <span className="text-[11px] text-stone-500">
                {userAuth.isGuest ? t.guestMode : `Signed in as ${userAuth.email}`}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenAuth}
            className="py-2 px-4 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-xl text-xs font-bold transition-all self-start sm:self-auto"
          >
            {userAuth.isGuest ? t.signIn : 'Manage Account'}
          </button>
        </div>

        {/* Submit Save Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-extrabold transition-all shadow-md flex items-center justify-center gap-2"
        >
          <Check className="w-5 h-5" />
          <span>{t.saveProfile}</span>
        </button>
      </form>

      {/* Health Disclaimer */}
      <Disclaimer language={language} variant="card" />
    </div>
  );
};
