import React, { useState } from 'react';
import { X, Clock, Bell, Check, BellRing } from 'lucide-react';
import { Language, MealTimes } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface MealTimeSetupModalProps {
  mealTimes: MealTimes;
  language: Language;
  onClose: () => void;
  onSave: (updated: MealTimes) => void;
  onTriggerSimulatedAlert?: (meal: string, time: string) => void;
}

export const MealTimeSetupModal: React.FC<MealTimeSetupModalProps> = ({
  mealTimes,
  language,
  onClose,
  onSave,
  onTriggerSimulatedAlert,
}) => {
  const t = TRANSLATIONS[language];

  const [breakfast, setBreakfast] = useState(mealTimes.breakfast);
  const [lunch, setLunch] = useState(mealTimes.lunch);
  const [tiffin, setTiffin] = useState(mealTimes.tiffin);
  const [dinner, setDinner] = useState(mealTimes.dinner);
  const [remindersEnabled, setRemindersEnabled] = useState(mealTimes.remindersEnabled);

  const handleSave = () => {
    onSave({
      breakfast,
      lunch,
      tiffin,
      dinner,
      remindersEnabled,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full border border-stone-200 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="px-5 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-stone-900 font-sans">
                {t.mealTimesTitle}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {language === 'ta' ? 'குடும்ப உணவு நேரங்களை அமைத்துக் கொள்ளுங்கள்' : 'Configure family routine'}
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

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Reminder Toggle */}
          <div className="flex items-center justify-between p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2.5">
              <Bell className="w-5 h-5 text-amber-700" />
              <div>
                <span className="text-xs font-bold text-amber-950 block">
                  {t.enableReminders}
                </span>
                <span className="text-[11px] text-amber-800/80">
                  {language === 'ta' ? 'செயலியில் அறிவிப்பு அட்டைகள் தோன்றும்' : 'Simulated in-app reminder banners'}
                </span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={remindersEnabled}
              onChange={(e) => setRemindersEnabled(e.target.checked)}
              className="w-5 h-5 rounded-md text-amber-600 focus:ring-amber-500 cursor-pointer"
            />
          </div>

          {/* Meal Times Inputs */}
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-stone-700 flex items-center justify-between mb-1">
                <span>{t.breakfastTime}</span>
                <span className="text-stone-400 text-[11px]">8:30 AM</span>
              </label>
              <input
                type="time"
                value={breakfast}
                onChange={(e) => setBreakfast(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 flex items-center justify-between mb-1">
                <span>{t.lunchTime}</span>
                <span className="text-stone-400 text-[11px]">1:00 PM</span>
              </label>
              <input
                type="time"
                value={lunch}
                onChange={(e) => setLunch(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 flex items-center justify-between mb-1">
                <span>{t.tiffinTime}</span>
                <span className="text-stone-400 text-[11px]">5:00 PM</span>
              </label>
              <input
                type="time"
                value={tiffin}
                onChange={(e) => setTiffin(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 flex items-center justify-between mb-1">
                <span>{t.dinnerTime}</span>
                <span className="text-stone-400 text-[11px]">8:30 PM</span>
              </label>
              <input
                type="time"
                value={dinner}
                onChange={(e) => setDinner(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
              />
            </div>
          </div>

          {/* Test Reminder Simulator Button */}
          {onTriggerSimulatedAlert && (
            <button
              type="button"
              onClick={() => onTriggerSimulatedAlert(t.mealLunch, lunch)}
              className="w-full py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-stone-200"
            >
              <BellRing className="w-3.5 h-3.5 text-amber-700" />
              <span>{language === 'ta' ? 'நினைவூட்டல் அட்டையை சோதிக்க' : 'Test Reminder Alert'}</span>
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 rounded-xl text-xs font-bold transition-all"
          >
            {language === 'ta' ? 'ரத்து செய்க' : 'Cancel'}
          </button>

          <button
            onClick={handleSave}
            className="py-2 px-5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>{language === 'ta' ? 'சேமிக்க' : 'Save Timings'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
