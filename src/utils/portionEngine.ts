import { HouseholdProfile, MealPattern, MealType, PortionGuidance } from '../types';

/**
 * JavaScript Rules Engine for Portion Calculation
 * Calculates culturally grounded, approximate cooked rice portions for Tamil elders.
 * 
 * NOTE: This is for approximate meal-planning guidance only, NOT medical prescription.
 */
export function getRicePortion(
  profile: HouseholdProfile,
  mealPattern: MealPattern = profile.mealPattern,
  mealType: MealType = 'lunch',
  manualAdjustment: 'recommended' | 'smaller' | 'larger' = 'recommended'
): PortionGuidance {
  // If elder has a verified doctor-recommended override, give precedence
  if (profile.hasDoctorOverride && profile.doctorPortionOverrideGrams && profile.doctorPortionOverrideGrams > 0) {
    let grams = profile.doctorPortionOverrideGrams;
    if (manualAdjustment === 'smaller') grams = Math.round(grams * 0.8);
    if (manualAdjustment === 'larger') grams = Math.round(grams * 1.2);

    const cups = profile.doctorPortionOverrideCups || `${(grams / 180).toFixed(1)} cup`;
    const katoriCount = (grams / 90).toFixed(1);

    return {
      approximateGrams: grams,
      approximateCups: cups,
      householdMeasure_en: `${katoriCount} katori (${cups}) based on doctor's recommendation`,
      householdMeasure_ta: `மருத்துவர் பரிந்துரைப்படி ${katoriCount} கிண்ணம் (${cups})`,
      portionLabel_en: 'Doctor-Recommended Portion',
      portionLabel_ta: 'மருத்துவர் பரிந்துரைத்த அளவு',
      distributionSuggestion_en: 'Maintain this portion consistently with equal or double volume of fiber-rich vegetable poriyal.',
      distributionSuggestion_ta: 'இந்த அளவை தொடர்ந்து கடைப்பிடித்து, அதே அளவு அல்லது இரண்டு மடங்கு காய்கறி பொரியலுடன் சமன் செய்யவும்.',
      isDoctorOverridden: true,
      carbsEstimate: Math.round((grams * 28) / 100),
      recommendedVeggieMultiplier: 1.5,
    };
  }

  // Baseline cooked rice in grams for a typical Tamil adult meal
  let baseGrams = 95; // ~1/2 cup cooked white rice (approx 90-100g)

  // Meal Type weighting (Lunch is usually prime rice meal; dinner should be lighter)
  if (mealType === 'dinner') {
    baseGrams = 75; // Lighter dinner to prevent overnight glycemic spikes
  } else if (mealType === 'breakfast') {
    baseGrams = 80;
  } else if (mealType === 'tiffin') {
    baseGrams = 0; // Tiffin is typically zero-rice (sundal, ragi, pulses)
  }

  // Age Factor (metabolic rate slows with aging)
  let ageMultiplier = 1.0;
  if (profile.ageBand === '60-69') {
    ageMultiplier = 0.95;
  } else if (profile.ageBand === '70+') {
    ageMultiplier = 0.88;
  }

  // Body Type Factor
  let bodyMultiplier = 1.0;
  if (profile.bodyType === 'slim') {
    bodyMultiplier = 1.05;
  } else if (profile.bodyType === 'heavy') {
    bodyMultiplier = 0.90; // Swap more rice volume for vegetable poriyal
  }

  // Physical Activity Level
  let activityMultiplier = 1.0;
  if (profile.activityLevel === 'low') {
    activityMultiplier = 0.92;
  } else if (profile.activityLevel === 'high') {
    activityMultiplier = 1.12;
  }

  // Meal Pattern Factor
  let patternMultiplier = 1.0;
  if (mealPattern === '3_meals_snacks') {
    patternMultiplier = 0.95; // Snacks buffer energy
  } else if (mealPattern === '2_meals_snacks') {
    patternMultiplier = 1.08; // Slightly larger main meal allocation
  }

  // Calculate final base grams
  let computedGrams = Math.round(baseGrams * ageMultiplier * bodyMultiplier * activityMultiplier * patternMultiplier);

  // Apply manual user tweak
  if (manualAdjustment === 'smaller') {
    computedGrams = Math.round(computedGrams * 0.8);
  } else if (manualAdjustment === 'larger') {
    computedGrams = Math.round(computedGrams * 1.2);
  }

  // If tiffin, return 0 rice with sundal guidance
  if (mealType === 'tiffin') {
    return {
      approximateGrams: 0,
      approximateCups: '0 cup',
      householdMeasure_en: 'No rice for evening tiffin. Choose 1 cup Sundal or roasted chana.',
      householdMeasure_ta: 'மாலை டிபனுக்கு சாதம் இல்லை. 1 கிண்ணம் சுண்டல் அல்லது பொட்டுக்கடலை சிறந்தது.',
      portionLabel_en: 'Zero Rice / Protein Snack',
      portionLabel_ta: 'சாதம் தவிர்த்து / புரத சிற்றுண்டி',
      distributionSuggestion_en: 'Opt for boiled legumes (chana, moong sundal) for slow glycemic release before dinner.',
      distributionSuggestion_ta: 'இரவு உணவுக்கு முன் சர்க்கரை அளவை சீராக வைக்க வேகவைத்த சுண்டல் வகை சிறந்தது.',
      isDoctorOverridden: false,
      carbsEstimate: 0,
      recommendedVeggieMultiplier: 1.0,
    };
  }

  // Format Cup representation
  let cups = '½ cup';
  let katori_en = '1 small katori (approx. 90-100g)';
  let katori_ta = '1 சிறிய கிண்ணம் (சுமார் 90-100 கிராம்)';

  if (computedGrams <= 75) {
    cups = '⅓ cup';
    katori_en = '¾ small katori (approx. 65-75g)';
    katori_ta = '¾ சிறிய கிண்ணம் (சுமார் 65-75 கிராம்)';
  } else if (computedGrams >= 115) {
    cups = '⅔ cup';
    katori_en = '1¼ small katori (approx. 115-125g)';
    katori_ta = '1¼ சிறிய கிண்ணம் (சுமார் 115-125 கிராம்)';
  }

  // Guidance texts
  const distribution_en = mealType === 'lunch'
    ? 'Mid-day lunch allocation: Enjoy with 2 katoris of vegetable poriyal/kootu, 1 katori dal sambar, and 1 katori curd or buttermilk.'
    : 'Dinner allocation: Slightly smaller portion than lunch for smooth digestion and steady nocturnal blood sugars.';

  const distribution_ta = mealType === 'lunch'
    ? 'மதிய உணவுப் பங்கீடு: 2 கிண்ணம் காய்கறி பொரியல்/கூட்டு, 1 கிண்ணம் சாம்பார் மற்றும் 1 கிண்ணம் தயிர் அல்லது மோருடன் உண்ணவும்.'
    : 'இரவு உணவுப் பங்கீடு: சீரான செரிமானத்திற்கும் இரவு நேர சர்க்கரை அளவை கட்டுப்படுத்தவும் மதியத்தை விட சற்று குறைவான அளவு.';

  const carbs = Math.round((computedGrams * 28) / 100);

  return {
    approximateGrams: computedGrams,
    approximateCups: cups,
    householdMeasure_en: katori_en,
    householdMeasure_ta: katori_ta,
    portionLabel_en: 'Approximate planning guidance',
    portionLabel_ta: 'தோராயமான திட்டமிடல் வழிகாட்டல்',
    distributionSuggestion_en: distribution_en,
    distributionSuggestion_ta: distribution_ta,
    isDoctorOverridden: false,
    carbsEstimate: carbs,
    recommendedVeggieMultiplier: 2.0, // Always recommend 2x veggies for elders
  };
}
