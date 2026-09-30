import React from 'react';
import { 
  Utensils, 
  Globe, 
  Home, 
  PieChart, 
  SlidersHorizontal, 
  BookOpen, 
  Bookmark, 
  Settings, 
  MessageSquareHeart, 
  Users,
  ShieldCheck
} from 'lucide-react';
import { HouseholdProfile, Language, UserAuth } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currentTab: string;
  onSelectTab: (tab: string) => void;
  household: HouseholdProfile;
  userAuth: UserAuth;
  onOpenAuth: () => void;
  onOpenHouseholdModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  currentTab,
  onSelectTab,
  household,
  userAuth,
  onOpenAuth,
  onOpenHouseholdModal,
}) => {
  const t = TRANSLATIONS[language];

  const navItems = [
    { id: 'home', label: t.navHome, icon: Home },
    { id: 'visual-plate', label: t.navVisualPlate, icon: PieChart },
    { id: 'rice-adjuster', label: t.navRiceAdjuster, icon: SlidersHorizontal },
    { id: 'recipes', label: t.navRecipes, icon: BookOpen },
    { id: 'my-recipes', label: t.navMyRecipes, icon: Bookmark },
    { id: 'food-guide', label: t.navFoodGuide, icon: MessageSquareHeart },
    { id: 'profile', label: t.navProfile, icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-hidden"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 flex items-center justify-center text-white shadow-sm shadow-amber-900/10 group-hover:scale-105 transition-transform">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-stone-900 text-base sm:text-lg tracking-tight leading-none font-sans">
                Tamil Family Plate
              </span>
              <span className="hidden sm:inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                Thali
              </span>
            </div>
            <p className="text-xs text-stone-500 font-medium font-sans">
              தமிழ் குடும்ப தட்டு திட்டம்
            </p>
          </div>
        </button>

        {/* Right Tools: Household info, Auth & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Household Quick Badge */}
          <button
            onClick={onOpenHouseholdModal}
            title={household.householdName}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium border border-stone-200 transition-colors"
          >
            <Users className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-semibold">{household.householdName || "Appa's Home"}</span>
            <span className="text-stone-400">•</span>
            <span className="text-stone-600">{household.elderName} ({household.ageBand})</span>
          </button>

          {/* Auth Button */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden sm:inline">
              {userAuth.isGuest ? t.guestMode : (userAuth.email || 'Account')}
            </span>
            <span className="sm:hidden">
              {userAuth.isGuest ? 'Guest' : 'User'}
            </span>
          </button>

          {/* Language Toggle */}
          <div className="flex items-center p-0.5 bg-stone-100 rounded-lg border border-stone-200 text-xs font-semibold">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                language === 'en'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('ta')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                language === 'ta'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              தமிழ்
            </button>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar (Desktop & Tablet) */}
      <nav className="border-t border-stone-100 overflow-x-auto scrollbar-none bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex gap-1 py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
