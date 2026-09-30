import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Sparkles, 
  Scale, 
  X,
  Salad,
  Fish,
  Utensils
} from 'lucide-react';
import { HouseholdProfile, Language, MealSelection, PortionGuidance } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { getRicePortion } from '../utils/portionEngine';

interface ThaliPlateProps {
  language: Language;
  household: HouseholdProfile;
  activeMeal?: MealSelection;
  mealName?: string;
  defaultView?: 'elder' | 'family';
}

type SectionKey = 'rice' | 'vegetables' | 'protein' | 'sambar' | 'curd';

export const ThaliPlate: React.FC<ThaliPlateProps> = ({
  language,
  household,
  activeMeal,
  mealName = 'Lunch',
  defaultView = 'elder',
}) => {
  const t = TRANSLATIONS[language];
  const [viewMode, setViewMode] = useState<'elder' | 'family'>(defaultView);
  const [selectedSection, setSelectedSection] = useState<SectionKey | null>('rice');

  // Compute calculated portion from rules engine
  const portionGuidance: PortionGuidance = getRicePortion(
    household,
    household.mealPattern,
    'lunch',
    activeMeal?.elderRiceAdjustment || 'recommended'
  );

  // Section details based on viewMode
  const isElder = viewMode === 'elder';

  const sectionDetails: Record<
    SectionKey,
    {
      title_en: string;
      title_ta: string;
      portion_family: string;
      portion_elder: string;
      status: 'green' | 'amber';
      message_en: string;
      message_ta: string;
      colorClass: string;
      borderColor: string;
      textColor: string;
      familyPercentage: number;
      elderPercentage: number;
    }
  > = {
    rice: {
      title_en: 'Rice / Grain',
      title_ta: 'சாதம் / தானியம்',
      portion_family: '1.5 - 2 cups (~220g)',
      portion_elder: `${portionGuidance.approximateCups} (${portionGuidance.approximateGrams}g, ${portionGuidance.householdMeasure_en})`,
      status: isElder ? 'green' : 'amber',
      message_en: isElder
        ? `Recommended Elder Portion: ${portionGuidance.approximateCups} (~${portionGuidance.approximateGrams}g). Measured to keep postprandial glucose safe.`
        : 'Family Portion: Standard household serving (approx. 200g). Elders should reduce this by half.',
      message_ta: isElder
        ? `முதியவருக்கான அளவு: ${portionGuidance.approximateCups} (~${portionGuidance.approximateGrams}g). இரத்த சர்க்கரையை கட்டுப்படுத்த உகந்தது.`
        : 'குடும்ப அளவு: சுமார் 200 கிராம். முதியவர்கள் இதில் பாதியாக குறைப்பது நல்லது.',
      colorClass: isElder ? 'fill-amber-100 hover:fill-amber-200' : 'fill-amber-200 hover:fill-amber-300',
      borderColor: isElder ? 'stroke-emerald-600' : 'stroke-amber-500',
      textColor: 'text-amber-900',
      familyPercentage: 45,
      elderPercentage: 25,
    },
    vegetables: {
      title_en: 'Vegetables (Poriyal & Kootu)',
      title_ta: 'காய்கறிகள் (பொரியல் & கூட்டு)',
      portion_family: '1 small katori (~80g)',
      portion_elder: '2 large katoris (~180g - Doubled)',
      status: 'green',
      message_en: t.vegTip,
      message_ta: t.vegTip,
      colorClass: 'fill-emerald-100 hover:fill-emerald-200',
      borderColor: 'stroke-emerald-600',
      textColor: 'text-emerald-900',
      familyPercentage: 25,
      elderPercentage: 45,
    },
    protein: {
      title_en: 'Protein (Sundal / Dal / Egg / Fish)',
      title_ta: 'புரதம் (சுண்டல் / பருப்பு / முட்டை / மீன்)',
      portion_family: '1 katori (~100g)',
      portion_elder: '1 generous katori (~120g)',
      status: 'green',
      message_en: t.proteinTip,
      message_ta: t.proteinTip,
      colorClass: 'fill-orange-100 hover:fill-orange-200',
      borderColor: 'stroke-orange-500',
      textColor: 'text-orange-950',
      familyPercentage: 15,
      elderPercentage: 15,
    },
    sambar: {
      title_en: 'Sambar & Rasam',
      title_ta: 'சாம்பார் & ரசம்',
      portion_family: '1 katori (~120ml)',
      portion_elder: '1 thick vegetable-rich katori',
      status: 'green',
      message_en: t.sambarTip,
      message_ta: t.sambarTip,
      colorClass: 'fill-amber-50 hover:fill-amber-100',
      borderColor: 'stroke-amber-400',
      textColor: 'text-amber-900',
      familyPercentage: 10,
      elderPercentage: 10,
    },
    curd: {
      title_en: 'Curd / Buttermilk',
      title_ta: 'தயிர் / நீர்மோர்',
      portion_family: '1 katori or 1 glass mor',
      portion_elder: '1 katori set curd / spiced neer mor',
      status: 'green',
      message_en: t.curdTip,
      message_ta: t.curdTip,
      colorClass: 'fill-sky-50 hover:fill-sky-100',
      borderColor: 'stroke-sky-400',
      textColor: 'text-sky-900',
      familyPercentage: 5,
      elderPercentage: 5,
    },
  };

  const activeDetails = selectedSection ? sectionDetails[selectedSection] : null;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden p-4 sm:p-6">
      {/* View Switcher Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-stone-900 font-sans">
              {language === 'ta' ? 'தாளி தட்டு பார்வை' : 'Thali Plate Visualizer'}
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
              {mealName}
            </span>
          </div>
          <p className="text-xs text-stone-500 mt-0.5">
            {isElder ? t.elderPlateDesc : t.familyPlateDesc}
          </p>
        </div>

        {/* Tab Toggle for Family Plate vs Elder's Plate */}
        <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200/80 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('family')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'family'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>{t.familyPlate}</span>
          </button>
          <button
            onClick={() => setViewMode('elder')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'elder'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.elderPlate}</span>
          </button>
        </div>
      </div>

      {/* Main Plate Display & Interactive Section Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6">
        {/* SVG Plate Visual */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square">
            {/* Visual Traditional Thali Rim */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full drop-shadow-md select-none cursor-pointer"
            >
              {/* Outer Brass / Steel Thali Plate */}
              <circle
                cx="200"
                cy="200"
                r="192"
                fill="#f8fafc"
                stroke="#cbd5e1"
                strokeWidth="12"
              />
              <circle
                cx="200"
                cy="200"
                r="184"
                fill="#f1f5f9"
                stroke="#e2e8f0"
                strokeWidth="3"
              />

              {/* Plantain / Banana leaf backing tone */}
              <circle
                cx="200"
                cy="200"
                r="176"
                fill="#ecfdf5"
                opacity="0.8"
              />

              {/* SECTION: RICE (In elder view it is 25%; in family view it is 45%) */}
              {isElder ? (
                /* Elder Plate: Controlled Rice (~25% sector, bottom right) */
                <path
                  d="M 200,200 L 200,360 A 160,160 0 0,1 70,290 Z"
                  className={`${sectionDetails.rice.colorClass} transition-colors cursor-pointer`}
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="4 2"
                  onClick={() => setSelectedSection('rice')}
                />
              ) : (
                /* Family Plate: Large Rice portion (~45% sector) */
                <path
                  d="M 200,200 L 200,365 A 165,165 0 0,1 40,240 L 200,200 Z"
                  className={`${sectionDetails.rice.colorClass} transition-colors cursor-pointer`}
                  stroke="#f59e0b"
                  strokeWidth="3"
                  onClick={() => setSelectedSection('rice')}
                />
              )}

              {/* SECTION: VEGETABLES (In elder view it is large 45%; in family it is ~25%) */}
              {isElder ? (
                /* Elder Plate: Extra Vegetable Poriyal & Kootu (~45% sector, top-left to top-right) */
                <path
                  d="M 200,200 L 70,290 A 160,160 0 0,1 120,55 L 200,200 Z"
                  className={`${sectionDetails.vegetables.colorClass} transition-colors cursor-pointer`}
                  stroke="#059669"
                  strokeWidth="4"
                  onClick={() => setSelectedSection('vegetables')}
                />
              ) : (
                /* Family Plate: Standard veggie section (~25%) */
                <path
                  d="M 200,200 L 40,240 A 165,165 0 0,1 110,65 L 200,200 Z"
                  className={`${sectionDetails.vegetables.colorClass} transition-colors cursor-pointer`}
                  stroke="#059669"
                  strokeWidth="2"
                  onClick={() => setSelectedSection('vegetables')}
                />
              )}

              {/* SECTION: PROTEIN (Sundal, Dal, Egg, Fish) */}
              <path
                d="M 200,200 L 120,55 A 160,160 0 0,1 250,45 L 200,200 Z"
                className={`${sectionDetails.protein.colorClass} transition-colors cursor-pointer`}
                stroke="#f97316"
                strokeWidth="2.5"
                onClick={() => setSelectedSection('protein')}
              />

              {/* SECTION: SAMBAR & RASAM */}
              <path
                d="M 200,200 L 250,45 A 160,160 0 0,1 350,140 L 200,200 Z"
                className={`${sectionDetails.sambar.colorClass} transition-colors cursor-pointer`}
                stroke="#eab308"
                strokeWidth="2.5"
                onClick={() => setSelectedSection('sambar')}
              />

              {/* SECTION: CURD & BUTTERMILK */}
              <path
                d="M 200,200 L 350,140 A 160,160 0 0,1 200,360 L 200,200 Z"
                className={`${sectionDetails.curd.colorClass} transition-colors cursor-pointer`}
                stroke="#38bdf8"
                strokeWidth="2.5"
                onClick={() => setSelectedSection('curd')}
              />

              {/* Central Thali Medallion */}
              <circle
                cx="200"
                cy="200"
                r="38"
                fill="#ffffff"
                stroke="#cbd5e1"
                strokeWidth="3"
                className="drop-shadow-sm"
              />
              <text
                x="200"
                y="196"
                textAnchor="middle"
                fontSize="11"
                fontWeight="bold"
                fill="#475569"
              >
                {isElder ? "Appa's" : 'Family'}
              </text>
              <text
                x="200"
                y="212"
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
                fill="#15803d"
              >
                {isElder ? 'Plate' : 'Thali'}
              </text>

              {/* Text Labels on Plate Segments */}
              {/* Rice Label */}
              <g onClick={() => setSelectedSection('rice')} className="cursor-pointer">
                <text
                  x={isElder ? '145' : '120'}
                  y={isElder ? '290' : '285'}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="bold"
                  fill="#78350f"
                >
                  {language === 'ta' ? 'சாதம்' : 'Rice'}
                </text>
                <text
                  x={isElder ? '145' : '120'}
                  y={isElder ? '304' : '299'}
                  textAnchor="middle"
                  fontSize="9.5"
                  fill="#92400e"
                  fontWeight="600"
                >
                  {isElder ? '½ cup (~90g)' : '1.5-2 cups'}
                </text>
              </g>

              {/* Vegetables Label */}
              <g onClick={() => setSelectedSection('vegetables')} className="cursor-pointer">
                <text
                  x="110"
                  y="160"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="bold"
                  fill="#065f46"
                >
                  {language === 'ta' ? 'காய்கறி' : 'Vegetables'}
                </text>
                <text
                  x="110"
                  y="174"
                  textAnchor="middle"
                  fontSize="9.5"
                  fill="#047857"
                  fontWeight="600"
                >
                  {isElder ? '2x Double Poriyal' : '1 small katori'}
                </text>
              </g>

              {/* Protein Label */}
              <g onClick={() => setSelectedSection('protein')} className="cursor-pointer">
                <text
                  x="185"
                  y="95"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="bold"
                  fill="#9a3412"
                >
                  {language === 'ta' ? 'புரதம்' : 'Protein'}
                </text>
              </g>

              {/* Sambar Label */}
              <g onClick={() => setSelectedSection('sambar')} className="cursor-pointer">
                <text
                  x="280"
                  y="120"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="bold"
                  fill="#854d0e"
                >
                  {language === 'ta' ? 'சாம்பார்' : 'Sambar'}
                </text>
              </g>

              {/* Curd / Mor Label */}
              <g onClick={() => setSelectedSection('curd')} className="cursor-pointer">
                <text
                  x="270"
                  y="260"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="bold"
                  fill="#0369a1"
                >
                  {language === 'ta' ? 'தயிர்/மோர்' : 'Curd/Mor'}
                </text>
              </g>
            </svg>
          </div>

          <p className="text-[11px] text-stone-400 mt-2 text-center">
            {t.clickSectionHint}
          </p>
        </div>

        {/* Interactive Section Inspection Panel */}
        <div className="lg:col-span-5 bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200">
          {activeDetails ? (
            <div className="space-y-4">
              {/* Selected Section Header */}
              <div className="flex items-start justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                    {language === 'ta' ? 'தேர்ந்தெடுக்கப்பட்ட பிரிவு' : 'Selected Plate Section'}
                  </span>
                  <h4 className="text-base font-extrabold text-stone-900 font-sans mt-0.5">
                    {language === 'ta' ? activeDetails.title_ta : activeDetails.title_en}
                  </h4>
                </div>
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                    activeDetails.status === 'green'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}
                >
                  {activeDetails.status === 'green' ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t.greenRecommended}</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.amberCaution}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Portions Comparison Card */}
              <div className="bg-white rounded-lg p-3 border border-stone-200 text-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">{t.currentPortion} ({viewMode === 'elder' ? t.elderPlate : t.familyPlate}):</span>
                  <span className="font-bold text-stone-900">
                    {viewMode === 'elder' ? activeDetails.portion_elder : activeDetails.portion_family}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">{t.recommendedPortion} (Elder):</span>
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    {activeDetails.portion_elder}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                  <span className="text-stone-500 font-medium">{t.difference}:</span>
                  <span className="font-bold text-amber-700">
                    {selectedSection === 'rice'
                      ? isElder ? 'Reduced by 50% for steady glucose' : 'Needs 50% reduction for elder'
                      : selectedSection === 'vegetables'
                      ? 'Doubled volume (+100% Poriyal/Kootu)'
                      : 'Same family dish'}
                  </span>
                </div>
              </div>

              {/* Cultural Plate Guidance Tip */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3 text-xs text-amber-950 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {language === 'ta' ? activeDetails.message_ta : activeDetails.message_en}
                </p>
              </div>

              {/* Quick Section Picker Buttons */}
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-stone-500 block mb-2">
                  {language === 'ta' ? 'தட்டின் பிற பகுதிகள்:' : 'Inspect other sections:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(Object.keys(sectionDetails) as SectionKey[]).map((key) => {
                    const isSelected = selectedSection === key;
                    const item = sectionDetails[key];
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedSection(key)}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-md transition-all ${
                          isSelected
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {language === 'ta' ? item.title_ta.split(' ')[0] : item.title_en.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
