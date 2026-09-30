import { Recipe } from '../types';

export const RECIPES_DATA: Recipe[] = [
  // 1. Idli
  {
    id: 'idli',
    name_en: 'Steamed Idli',
    name_ta: 'மல்லிகைப் பூ இட்லி',
    mealType: ['breakfast', 'dinner'],
    dishType: 'main',
    ingredients: ['2 cups parboiled idli rice', '1/2 cup whole white urad dal', '1 tsp fenugreek seeds (vendhayam)', 'Salt to taste', 'Water for grinding'],
    ingredients_ta: ['2 கப் புழுங்கல் இட்லி அரிசி', '1/2 கப் உளுந்து', '1 தேக்கரண்டி வெந்தயம்', 'தேவையான அளவு உப்பு', 'அரைக்க தண்ணீர்'],
    steps: [
      'Wash and soak rice and urad dal with fenugreek seeds separately for 4 to 5 hours.',
      'Grind urad dal until light and fluffy; grind rice to a slightly coarse batter.',
      'Mix both with rock salt and ferment overnight in a warm spot for 8-10 hours.',
      'Grease idli plates lightly with sesame oil, pour batter, and steam for 10-12 minutes.',
      'Serve warm with hot vegetable sambar and tomato or coriander chutney.'
    ],
    steps_ta: [
      'அரிசி மற்றும் உளுந்தை வெந்தயத்துடன் தனித்தனியாக 4-5 மணி நேரம் ஊறவைக்கவும்.',
      'உளுந்தை பஞ்சுபோல் ஆட்டவும்; அரிசியை மெல்லிய ரவை பதத்தில் அரைக்கவும்.',
      'இரண்டையும் கல் உப்பு சேர்த்து கலந்து 8-10 மணி நேரம் புளிக்க வைக்கவும்.',
      'இட்லி தட்டில் சிறிதளவு நல்லெண்ணெய் தடவி மாவை ஊற்றி 10-12 நிமிடங்கள் வேகவைக்கவும்.',
      'காய்கறி சாம்பார் மற்றும் தக்காளி அல்லது கொத்தமல்லி சட்னியுடன் பரிமாறவும்.'
    ],
    tags: ['Breakfast', 'Dinner', 'Rice-based', 'Quick', 'Steamed', 'High-protein'],
    approximateCarbs: 34,
    approximateFiber: 2.2,
    protein: 5.5,
    portion: '2 idlis (~120g)',
    isRiceBased: true,
    imageEmoji: '⚪',
    modificationSuggestions: {
      title_en: 'Idli: Traditional vs Diabetes-Friendly Adjustment',
      title_ta: 'இட்லி: பாரம்பரியம் vs நீரிழிவு உகந்த மாற்றம்',
      originalMethod_en: 'Family members typically eat 3-4 idlis with coconut chutney.',
      originalMethod_ta: 'குடும்பத்தினர் வழக்கமாக 3-4 இட்லிகள் தேங்காய் சட்னியுடன் சாப்பிடுவர்.',
      modifiedMethod_en: 'Elder plate: Limit to 2 idlis, pair with generous vegetable-loaded sambar and mint/coriander chutney instead of high-fat coconut chutney.',
      modifiedMethod_ta: 'முதியவர் தட்டு: 2 இட்லிகளாக குறைத்து, அதிக காய்கறி நிறைந்த சாம்பார் மற்றும் புதினா சட்னியுடன் உண்ணவும்.',
      points_en: [
        'Stick to 2 medium idlis to keep carbohydrate intake balanced.',
        'Dip in 1.5 cups of hot sambar loaded with drumstick and shallots for satiety.',
        'Use freshly ground flaxseed powder or mint coriander thuvaiyal instead of pure coconut chutney.'
      ],
      points_ta: [
        'மாவுச்சத்து சமநிலைக்கு 2 நடுத்தர இட்லிகளை மட்டுமே உட்கொள்ளவும்.',
        'முருங்கைக்காய் மற்றும் சின்ன வெங்காயம் நிறைந்த சாம்பாரை தாராளமாக சேர்க்கவும்.',
        'தேங்காய் சட்னிக்கு பதில் புதினா, கொத்தமல்லி அல்லது எள்ளு பொடி பயன்படுத்தவும்.'
      ],
      modifiedCarbs: 30,
      modifiedFiber: 4.8,
      modifiedProtein: 7.2
    }
  },

  // 2. Dosa
  {
    id: 'dosa',
    name_en: 'Crispy Dosa',
    name_ta: 'மொறுமொறு தோசை',
    mealType: ['breakfast', 'dinner'],
    dishType: 'main',
    ingredients: ['3 cups raw/parboiled rice', '3/4 cup urad dal', '1 tsp fenugreek seeds', 'Gingelly/sesame oil for drizzling', 'Salt to taste'],
    ingredients_ta: ['3 கப் அரிசி', '3/4 கப் உளுந்து', '1 தேக்கரண்டி வெந்தயம்', 'நல்லெண்ணெய்', 'உப்பு'],
    steps: [
      'Soak rice, urad dal, and fenugreek for 4-6 hours.',
      'Grind into a smooth pouring batter and ferment overnight.',
      'Heat an iron tawa, pour a ladle of batter, and spread thinly in concentric circles.',
      'Drizzle half teaspoon gingelly oil around the edges and cook until golden brown.',
      'Flip gently for 30 seconds and serve hot with sambar.'
    ],
    steps_ta: [
      'அரிசி, உளுந்து, வெந்தயத்தை 4-6 மணி நேரம் ஊறவைத்து மிருதுவாக அரைக்கவும்.',
      'இரவு முழுவதும் புளிக்க வைக்கவும்.',
      'இரும்பு தோசைக்கல்லை சூடாக்கி மாவை மெலிதாக வட்டமாக பரப்பவும்.',
      'அரைக் கரண்டி நல்லெண்ணெய் விட்டு பொன்னிறமாக வேகவைத்து திருப்பிப் போடவும்.',
      'சாம்பாருடன் சுடச்சுட பரிமாறவும்.'
    ],
    tags: ['Breakfast', 'Dinner', 'Rice-based', 'Quick'],
    approximateCarbs: 38,
    approximateFiber: 1.8,
    protein: 4.8,
    portion: '1 medium dosa (~90g)',
    isRiceBased: true,
    imageEmoji: '🥞',
    modificationSuggestions: {
      title_en: 'Dosa: Oil Control & Vegetable Pairing',
      title_ta: 'தோசை: எண்ணெய் குறைப்பு & காய்கறி இணைப்பு',
      originalMethod_en: 'Cooked with liberal ghee or oil; 2-3 large dosas eaten.',
      originalMethod_ta: 'அதிக நெய் அல்லது எண்ணெயுடன் 2-3 பெரிய தோசைகள் உட்கொள்ளல்.',
      modifiedMethod_en: 'Cook with a light spray/brush of gingelly oil on a well-seasoned cast iron pan. Limit elder to 1 medium dosa paired with extra kootu or sundal.',
      modifiedMethod_ta: 'இரும்பு கல்லில் எண்ணெய் குறைவாக தடவி 1 தோசையாக சுட்டு, கூடுதல் கூட்டு அல்லது சுண்டலுடன் பரிமாறவும்.',
      points_en: [
        'Use a cast-iron tawa to minimize oil requirement to just 1/4 teaspoon.',
        'Pair 1 dosa with 1 cup of Keerai Kootu to slow glucose absorption.',
        'Add finely grated carrots or chopped coriander leaves on top for micro-nutrients.'
      ],
      points_ta: [
        'இரும்பு கல்லை பயன்படுத்தி கால் ஸ்பூன் எண்ணெயில் சுடலாம்.',
        '1 தோசையுடன் 1 கிண்ணம் கீரை கூட்டு சாப்பிடுவது சர்க்கரை உயர்வை தடுக்கும்.',
        'தோசையின் மேல் துருவிய கேரட், கொத்தமல்லி தூவி சுடலாம்.'
      ],
      modifiedCarbs: 32,
      modifiedFiber: 4.5,
      modifiedProtein: 6.8
    }
  },

  // 3. Ragi Dosa
  {
    id: 'ragi-dosa',
    name_en: 'Ragi Dosa (Finger Millet)',
    name_ta: 'கேழ்வரகு தோசை',
    mealType: ['breakfast', 'dinner'],
    dishType: 'main',
    ingredients: ['1 cup ragi flour (finger millet)', '1/4 cup urad dal flour', '1 finely chopped onion', '1 green chili', 'Curry leaves and cumin seeds', 'Water to make pouring consistency'],
    ingredients_ta: ['1 கப் கேழ்வரகு மாவு', '1/4 கப் உளுந்து மாவு', '1 பொடியாக நறுக்கிய வெங்காயம்', '1 பச்சை மிளகாய்', 'கருவேப்பிலை மற்றும் சீரகம்', 'தண்ணீர்'],
    steps: [
      'Whisk ragi flour, urad flour, cumin, onions, green chili, and salt in a bowl with water.',
      'Rest the batter for 15 minutes.',
      'Pour from the outer rim of a hot tawa towards the center like rava dosa.',
      'Cook on medium heat with a drop of sesame oil until crisp and cooked through.',
      'Fold and serve with onion-tomato chutney or vegetable sambar.'
    ],
    steps_ta: [
      'கேழ்வரகு மாவு, உளுந்து மாவு, சீரகம், வெங்காயம், பச்சை மிளகாய், உப்பு கலந்து கரைக்கவும்.',
      '15 நிமிடங்கள் ஊறவைக்கவும்.',
      'சூடான தோசைக்கல்லில் ரவா தோசை போல பரப்பி ஊற்றவும்.',
      'சிறிது நல்லெண்ணெய் விட்டு இருபுறமும் வெந்ததும் எடுக்கவும்.',
      'வெங்காய தக்காளி சட்னி அல்லது சாம்பாருடன் பரிமாறவும்.'
    ],
    tags: ['Breakfast', 'Dinner', 'Millet-based', 'High-fiber', 'Quick'],
    approximateCarbs: 26,
    approximateFiber: 5.6,
    protein: 6.0,
    portion: '1 medium dosa (~90g)',
    isRiceBased: false,
    imageEmoji: '🫓',
    modificationSuggestions: {
      title_en: 'Naturally Low-Glycemic Alternative to Rice Dosa',
      title_ta: 'அரிசி தோசைக்கு மாற்றான குறைந்த குளுக்கோஸ் உணவு',
      originalMethod_en: 'Often mixed with maida or rice flour for crispiness in commercial setups.',
      originalMethod_ta: 'உணவகங்களில் மொறுமொறுப்புக்காக மைதா அல்லது அரிசி மாவு கலக்கப்படுவதுண்டு.',
      modifiedMethod_en: 'Use 100% whole grain finger millet flour mixed with urad flour and lots of chopped drumstick leaves (murungai keerai).',
      modifiedMethod_ta: '100% கேழ்வரகு மாவுடன் உளுந்து மாவு மற்றும் முருங்கைக்கீரை சேர்த்து சமைக்கவும்.',
      points_en: [
        'Ragi is rich in calcium and complex carbohydrates.',
        'Adding drumstick leaves (murungai keerai) triples the dietary fiber.',
        'Excellent dinner choice for elders managing diabetes.'
      ],
      points_ta: [
        'கேழ்வரகு கால்சியம் மற்றும் சிக்கலான நார்ச்சத்தில் சிறந்தது.',
        'முருங்கைக்கீரை சேர்ப்பதால் நார்ச்சத்து மூன்று மடங்கு கூடுகிறது.',
        'முதியவர்களுக்கு மிகச்சிறந்த இரவு உணவு.'
      ],
      modifiedCarbs: 24,
      modifiedFiber: 6.8,
      modifiedProtein: 7.5
    }
  },

  // 4. Vegetable Dosa
  {
    id: 'vegetable-dosa',
    name_en: 'Vegetable Uttapam / Dosa',
    name_ta: 'காய்கறி ஊத்தப்பம் / தோசை',
    mealType: ['breakfast', 'dinner'],
    dishType: 'main',
    ingredients: ['Idli-dosa batter', '1/2 cup grated carrot', '1/2 cup finely chopped capsicum', '1/4 cup chopped shallots', 'Fresh coriander & curry leaves'],
    ingredients_ta: ['இட்லி தோசை மாவு', '1/2 கப் துருவிய கேரட்', '1/2 கப் குடைமிளகாய்', '1/4 கப் சின்ன வெங்காயம்', 'கொத்தமல்லி தழை'],
    steps: [
      'Pour a thick ladle of batter onto a hot tawa without spreading too thin.',
      'Generously press grated carrot, capsicum, shallots, and coriander on the wet surface.',
      'Cover with a lid and cook on gentle flame for 2 minutes.',
      'Flip gently and cook for another minute until the vegetables caramelize slightly.'
    ],
    steps_ta: [
      'சூடான கல்லில் மாவை ஊற்றி தடிமனான ஊத்தப்பமாக விடவும்.',
      'மேலே கேரட், குடைமிளகாய், வெங்காயம், கொத்தமல்லியை பரப்பி லேசாக அழுத்தவும்.',
      'மூடி போட்டு 2 நிமிடங்கள் மிதமான தீயில் வேகவிடவும்.',
      'திருப்பிப் போட்டு 1 நிமிடம் வேகவைத்து எடுக்கவும்.'
    ],
    tags: ['Breakfast', 'Dinner', 'Vegetable', 'High-fiber'],
    approximateCarbs: 31,
    approximateFiber: 4.8,
    protein: 5.2,
    portion: '1 uttapam (~130g)',
    isRiceBased: true,
    imageEmoji: '🫓',
    modificationSuggestions: {
      title_en: 'Veggie-Loaded Plate Ratio',
      title_ta: 'காய்கறி நிறைந்த தட்டு விகிதம்',
      originalMethod_en: 'Carb-dense thick batter with minimal veggie garnish.',
      originalMethod_ta: 'அதிக மாவு, குறைந்த காய்கறி அலங்காரம்.',
      modifiedMethod_en: 'Increase the vegetable topping volume to equal 50% of the pancake weight.',
      modifiedMethod_ta: 'ஊத்தப்பத்தின் எடையில் 50% காய்கறியாக இருக்குமாறு அதிகரிக்கவும்.',
      points_en: [
        'Diced bell peppers and cabbage add crunch without elevating glucose.',
        'Reduces reliance on pure grain batter.',
        'Single portion provides prolonged morning satiety.'
      ],
      points_ta: [
        'குடைமிளகாய் மற்றும் முட்டைகோஸ் சர்க்கரையை உயர்த்தாமல் சுவையை தரும்.',
        'அரிசி மாவின் அளவை பெருமளவு குறைக்கிறது.',
        'நீண்ட நேரம் பசி தாங்கும் காலை உணவு.'
      ],
      modifiedCarbs: 26,
      modifiedFiber: 5.9,
      modifiedProtein: 6.0
    }
  },

  // 5. Ven Pongal
  {
    id: 'ven-pongal',
    name_en: 'Traditional Ven Pongal',
    name_ta: 'பாரம்பரிய வெண் பொங்கல்',
    mealType: ['breakfast'],
    dishType: 'main',
    ingredients: ['1 cup raw rice', '1/2 cup yellow moong dal', '4 cups water', '1 tsp crushed black pepper', '1 tsp cumin seeds', '1 tbsp chopped ginger', 'Curry leaves', '1 tbsp ghee', '10 cashews'],
    ingredients_ta: ['1 கப் பச்சரிசி', '1/2 கப் பாசிப்பருப்பு', '4 கப் தண்ணீர்', '1 தேக்கரண்டி மிளகு', '1 தேக்கரண்டி சீரகம்', '1 மேஜைக்கரண்டி இஞ்சி', 'கருவேப்பிலை', '1 மேஜைக்கரண்டி நெய்', 'முந்திரி'],
    steps: [
      'Dry roast yellow moong dal until fragrant.',
      'Pressure cook rice and moong dal with 4 cups water, salt, and ginger for 4 whistles until mushy.',
      'In a tadka pan, heat ghee, splutter cumin, crushed black pepper, curry leaves, and cashews.',
      'Pour tadka over cooked rice-dal mash and mix gently with a wooden ladle.',
      'Serve warm with hot sambar and chutney.'
    ],
    steps_ta: [
      'பாசிப்பருப்பை பொன்னிற வாசனை வரும்வரை வறுக்கவும்.',
      'அரிசி, பருப்பு, தண்ணீர், உப்பு, இஞ்சி சேர்த்து குக்கரில் 4 விசில் விட்டு குழைய வேகவைக்கவும்.',
      'நெய்யில் சீரகம், மிளகு, கருவேப்பிலை, முந்திரி தாளிக்கவும்.',
      'வெந்த பொங்கலில் தாளிப்பை கொட்டி கிளறி பரிமாறவும்.'
    ],
    tags: ['Breakfast', 'Rice-based', 'Festival-friendly'],
    approximateCarbs: 46,
    approximateFiber: 3.0,
    protein: 7.5,
    portion: '1 katori (~150g)',
    isRiceBased: true,
    imageEmoji: '🍲',
    modificationSuggestions: {
      title_en: 'Pongal: Dal Ratio & Ghee Moderation',
      title_ta: 'பொங்கல்: பருப்பு விகிதம் & நெய் கட்டுப்பாடு',
      originalMethod_en: '2:1 rice to dal ratio cooked with copious ghee and oil.',
      originalMethod_ta: '2:1 அரிசி-பருப்பு விகிதம் மற்றும் அதிக நெய்.',
      modifiedMethod_en: 'Shift ratio to 1:1 rice to moong dal. Limit ghee to 1 teaspoon total. Serve with 2 katoris of Kathirikai Gothsu or vegetable sambar.',
      modifiedMethod_ta: 'அரிசியும் பருப்பும் சம அளவில் (1:1) சேர்க்கவும். நெய்யை 1 ஸ்பூனாக குறைத்து, 2 கிண்ணம் கத்திரிக்காய் கொத்சுடன் பரிமாறவும்.',
      points_en: [
        'Equal moong dal lowers the overall glycemic index significantly.',
        'High black pepper and fresh ginger aid post-meal digestion.',
        'Kathirikai Gothsu adds soluble fiber without adding starch.'
      ],
      points_ta: [
        'சம அளவு பாசிப்பருப்பு சேர்ப்பதால் கிளைசெமிக் குறியீடு குறைகிறது.',
        'மிளகு மற்றும் இஞ்சி செரிமானத்தை துரிதப்படுத்துகிறது.',
        'கத்திரிக்காய் கொத்சு நார்ச்சத்தை கூட்டி சர்க்கரையை சீராக்குகிறது.'
      ],
      modifiedCarbs: 34,
      modifiedFiber: 5.2,
      modifiedProtein: 10.2
    }
  },

  // 6. Millet Pongal
  {
    id: 'millet-pongal',
    name_en: 'Thinai / Foxtail Millet Pongal',
    name_ta: 'தினை வெண் பொங்கல்',
    mealType: ['breakfast'],
    dishType: 'main',
    ingredients: ['1 cup foxtail millet (thinai) or kuthiraivali', '1/2 cup split yellow moong dal', '4.5 cups water', '1 tsp crushed pepper', '1 tsp cumin seeds', 'Grated ginger & hing', 'Curry leaves', '1 tsp cold-pressed sesame oil/ghee'],
    ingredients_ta: ['1 கப் தினை அல்லது குதிரைவாலி', '1/2 கப் பாசிப்பருப்பு', '4.5 கப் தண்ணீர்', '1 தேக்கரண்டி மிளகு', '1 தேக்கரண்டி சீரகம்', 'இஞ்சி, பெருங்காயம்', 'கருவேப்பிலை', '1 தேக்கரண்டி நல்லெண்ணெய்/நெய்'],
    steps: [
      'Wash thinai millet thoroughly and soak for 20 minutes.',
      'Slightly roast moong dal and cook together with millet and water for 4 whistles.',
      'Mash lightly when warm.',
      'Temper cumin, cracked black pepper, curry leaves, and ginger in a teaspoon of ghee or sesame oil.',
      'Stir well and serve hot with sambar.'
    ],
    steps_ta: [
      'தினையை நன்கு கழுவி 20 நிமிடங்கள் ஊறவைக்கவும்.',
      'வறுத்த பாசிப்பருப்புடன் குக்கரில் 4 விசில் விட்டு வேகவைக்கவும்.',
      'சீரகம், மிளகு, இஞ்சி, கருவேப்பிலையை தாளித்து சேர்க்கவும்.',
      'சாம்பாருடன் சூடாக பரிமாறவும்.'
    ],
    tags: ['Breakfast', 'Millet-based', 'High-fiber', 'Quick'],
    approximateCarbs: 32,
    approximateFiber: 7.4,
    protein: 9.0,
    portion: '1 katori (~150g)',
    isRiceBased: false,
    imageEmoji: '🥣',
    modificationSuggestions: {
      title_en: 'Whole-Grain Ancient Millet Superiority',
      title_ta: 'பாரம்பரிய சிறுதானியத்தின் அருமை',
      originalMethod_en: 'Replaces white raw rice completely with whole millet.',
      originalMethod_ta: 'வெள்ளை அரிசிக்கு பதிலாக 100% சிறுதானியம்.',
      modifiedMethod_en: 'Pairs perfectly with elder portioning; provides 2.5x more dietary fiber than regular ven pongal.',
      modifiedMethod_ta: 'வழக்கமான பொங்கலை விட 2.5 மடங்கு அதிக நார்ச்சத்து கொண்டது; சர்க்கரை நோயாளிகளுக்கு உகந்தது.',
      points_en: [
        'Foxtail millet releases sugar into the bloodstream very slowly.',
        'High magnesium content helps cellular insulin utilization.',
        'Family and elders can enjoy the exact same comforting pot.'
      ],
      points_ta: [
        'தினை ரத்தத்தில் சர்க்கரையை மிக மெதுவாகவே சேர்க்கும்.',
        'இதில் உள்ள மக்னீசியம் இன்சுலின் பயன்பாட்டிற்கு உதவுகிறது.',
        'முழு குடும்பமும் ஒரே உணவை மகிழ்ச்சியாக உண்ணலாம்.'
      ],
      modifiedCarbs: 30,
      modifiedFiber: 7.8,
      modifiedProtein: 9.5
    }
  },

  // 7. Vegetable Upma
  {
    id: 'vegetable-upma',
    name_en: 'Samba Wheat / Rava Vegetable Upma',
    name_ta: 'சம்பா கோதுமை ரவை காய்கறி உப்புமா',
    mealType: ['breakfast', 'dinner'],
    dishType: 'main',
    ingredients: ['1 cup broken samba wheat rava', '1 chopped onion', '1/2 cup diced carrots & beans', '1/4 cup green peas', 'Mustard seeds, urad dal, chana dal', 'Ginger, green chili & curry leaves', '2.5 cups water'],
    ingredients_ta: ['1 கப் சம்பா கோதுமை ரவை', '1 வெங்காயம்', '1/2 கப் கேரட் & பீன்ஸ்', '1/4 கப் பட்டாணி', 'கடுகு, உளுந்து, கடலைப்பருப்பு', 'இஞ்சி, பச்சை மிளகாய், கருவேப்பிலை', '2.5 கப் தண்ணீர்'],
    steps: [
      'Dry roast samba wheat rava until warm and aromatic.',
      'Heat 1 tsp oil, splutter mustard, urad dal, chana dal, curry leaves, and ginger.',
      'Sauté onions and chopped vegetables for 3-4 minutes.',
      'Add 2.5 cups water and salt; bring to a rolling boil.',
      'Slowly stream in roasted rava while stirring continuously to prevent lumps.',
      'Cover on low flame for 6-8 minutes until all water is absorbed and grains are fluffy.'
    ],
    steps_ta: [
      'சம்பா கோதுமை ரவையை வாசனை வரும் வரை வறுக்கவும்.',
      'சிறிது எண்ணெயில் கடுகு, பருப்புகள், இஞ்சி, கருவேப்பிலை தாளிக்கவும்.',
      'வெங்காயம் மற்றும் காய்கறிகளை வதக்கவும்.',
      'தண்ணீர், உப்பு சேர்த்து கொதிக்க விடவும்.',
      'வறுத்த ரவையை மெதுவாக தூவி கட்டி தட்டாமல் கிளறவும்.',
      'சிம்மில் மூடி வைத்து 6-8 நிமிடங்கள் வேகவிட்டு இறக்கவும்.'
    ],
    tags: ['Breakfast', 'Dinner', 'Vegetable', 'High-fiber', 'Quick'],
    approximateCarbs: 33,
    approximateFiber: 6.2,
    protein: 6.8,
    portion: '1 katori (~140g)',
    isRiceBased: false,
    imageEmoji: '🍲',
    modificationSuggestions: {
      title_en: 'Samba Wheat vs White Semolina',
      title_ta: 'சம்பா கோதுமை vs வெள்ளை ரவை',
      originalMethod_en: 'Made with refined white rava (semolina) which spikes sugar fast.',
      originalMethod_ta: 'வெள்ளை ரவையில் செய்யப்படும் உப்புமா சர்க்கரையை வேகமாக உயர்த்தும்.',
      modifiedMethod_en: 'Use coarse whole samba wheat rava and equal volume of mixed country vegetables.',
      modifiedMethod_ta: 'உடைத்த சம்பா கோதுமை ரவையுடன் சம அளவு காய்கறிகள் சேர்த்து சமைக்கவும்.',
      points_en: [
        'Samba wheat bran contains insoluble fiber that dampens glycemic peaks.',
        'Double the vegetables (beans, carrots, peas, cluster beans).',
        'Avoid coconut oil or excess ghee; use gingelly oil sparingly.'
      ],
      points_ta: [
        'சம்பா கோதுமை தவிடு ரத்த சர்க்கரை கூர்மையை கட்டுப்படுத்துகிறது.',
        'காய்கறிகளை இருமடங்கு சேர்த்து சமைப்பது சிறந்தது.',
        'எண்ணெய் அளவை குறைத்து சுவையாக சமைக்கவும்.'
      ],
      modifiedCarbs: 29,
      modifiedFiber: 7.1,
      modifiedProtein: 7.2
    }
  },

  // 8. White Rice
  {
    id: 'white-rice',
    name_en: 'Steamed Ponni White Rice',
    name_ta: 'வடித்த பொன்னி சாதம்',
    mealType: ['lunch', 'dinner'],
    dishType: 'main',
    ingredients: ['Ponni parboiled rice', 'Water for boiling', 'Optionally drained starch'],
    ingredients_ta: ['பொன்னி புழுங்கல் அரிசி', 'கொதிக்கும் தண்ணீர்'],
    steps: [
      'Wash Ponni parboiled rice twice in clean water.',
      'Boil ample water in a traditional pot, add rice, and cook until grains are tender with a soft core.',
      'Drain the starchy water (kanji) completely using a slotted lid or colander.',
      'Keep closed for 5 minutes to let the rice fluff up with residual steam.'
    ],
    steps_ta: [
      'பொன்னி புழுங்கல் அரிசியை இருமுறை கழுவவும்.',
      'தண்ணீரை கொதிக்க வைத்து அரிசி சேர்த்து நன்கு வேகவைக்கவும்.',
      'வடித்த கஞ்சியை முழுமையாக வடித்து எடுக்கவும்.',
      '5 நிமிடங்கள் மூடி வைத்து ஆவியில் பூ போல மலர விடவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Rice-based'],
    approximateCarbs: 42,
    approximateFiber: 0.8,
    protein: 3.2,
    portion: '1 normal family cup (~150g)',
    isRiceBased: true,
    imageEmoji: '🍚',
    modificationSuggestions: {
      title_en: 'The Golden Tamil Rule: Portion Control, Not Elimination',
      title_ta: 'பொன்னான விதி: சாதத்தை நிறுத்த வேண்டாம், அளவை கட்டுப்படுத்துங்கள்!',
      originalMethod_en: 'Family members take 1.5 to 2 cups of white rice (200-250g) with small sides.',
      originalMethod_ta: 'குடும்பத்தினர் 1.5 முதல் 2 கப் சாதம் எடுத்துக்கொண்டு குறைந்த காய்கறி உண்பர்.',
      modifiedMethod_en: 'Elder takes exactly 1/2 cup cooked rice (90-100g, 1 small katori), surrounded by 2 large katoris of poriyal and kootu.',
      modifiedMethod_ta: 'முதியவர் சரியாக 1/2 கப் (90-100 கிராம் / 1 சிறிய கிண்ணம்) எடுத்துக்கொண்டு, 2 பெரிய கிண்ணம் காய்கறியுடன் உண்பர்.',
      points_en: [
        'Drain the kanji (open pot boiling) to reduce surface free starches.',
        'Always consume a spoonful of ghee or vegetable poriyal BEFORE the first mouthful of rice.',
        'Use the app Rice Portion Adjuster for exact customized grams.'
      ],
      points_ta: [
        'கஞ்சியை வடித்து சமைப்பது எளிய மாவுச்சத்தை குறைக்கும்.',
        'சாதத்தை தொடங்கும் முன் ஒரு ஸ்பூன் காய்கறி அல்லது பருப்பை உண்ணவும்.',
        'துல்லியமான கிராம்களுக்கு எங்கள் "Rice Portion Adjuster" கருவியை பயன்படுத்தவும்.'
      ],
      modifiedCarbs: 26,
      modifiedFiber: 0.8,
      modifiedProtein: 2.5
    }
  },

  // 9. Brown Rice / Handpound Rice
  {
    id: 'brown-rice',
    name_en: 'Brown / Kaikuthal Rice',
    name_ta: 'கைக்குத்தல் / சிகப்பு அரிசி சாதம்',
    mealType: ['lunch'],
    dishType: 'main',
    ingredients: ['Unpolished brown rice / Sivappu arisi', 'Water (1:3 ratio)'],
    ingredients_ta: ['கைக்குத்தல் சிகப்பு அரிசி', 'தண்ணீர் (1:3 விகிதம்)'],
    steps: [
      'Soak unpolished brown rice for at least 1 hour.',
      'Cook in an open pot or pressure cooker with 3 cups water for 5 whistles.',
      'Let steam release naturally; fluff with a fork.'
    ],
    steps_ta: [
      'கைக்குத்தல் அரிசியை 1 மணி நேரம் ஊறவைக்கவும்.',
      '1:3 அளவு தண்ணீர் வைத்து குக்கரில் 5 விசில் விட்டு வேகவைக்கவும்.',
      'ஆவி அடங்கியதும் முட்கரண்டியால் கிளறவும்.'
    ],
    tags: ['Lunch', 'Rice-based', 'High-fiber'],
    approximateCarbs: 36,
    approximateFiber: 3.5,
    protein: 3.8,
    portion: '1 katori (~130g)',
    isRiceBased: true,
    imageEmoji: '🌾',
    modificationSuggestions: {
      title_en: 'Bran Retention Benefits',
      title_ta: 'தவிட்டு சத்தின் நன்மைகள்',
      originalMethod_en: 'Cooked without soaking, resulting in tough grain texture.',
      originalMethod_ta: 'ஊறவைக்காமல் சமைத்தால் கடினமாக இருக்கும்.',
      modifiedMethod_en: 'Soak well for soft digestible texture. Perfect replacement for lunch white rice.',
      modifiedMethod_ta: 'நன்கு ஊறவைத்து மென்மையாக சமைக்கவும். மதிய உணவுக்கு மிகச்சிறந்தது.',
      points_en: [
        'Intact bran layer slows starch hydrolyzation in the small intestine.',
        'Rich in B vitamins and antioxidants.',
        'Elder portion: 1/2 to 2/3 cup cooked.'
      ],
      points_ta: [
        'அரிசி தவிடு மாவுச்சத்து மெதுவாக ரத்தத்தில் கலக்க உதவுகிறது.',
        'வைட்டமின் பி மற்றும் ஆன்டி-ஆக்ஸிடன்ட்கள் நிறைந்தது.',
        'முதியவருக்கு 1/2 முதல் 2/3 கப் போதுமானது.'
      ],
      modifiedCarbs: 28,
      modifiedFiber: 3.8,
      modifiedProtein: 3.8
    }
  },

  // 10. Samai Millet Rice
  {
    id: 'samai-rice',
    name_en: 'Samai (Little Millet) Rice',
    name_ta: 'சாமை சாதம்',
    mealType: ['lunch'],
    dishType: 'main',
    ingredients: ['1 cup samai millet', '2.5 cups water'],
    ingredients_ta: ['1 கப் சாமை அரிசி', '2.5 கப் தண்ணீர்'],
    steps: [
      'Rinse little millet grains thoroughly.',
      'Boil 2.5 cups water in a pot, add samai and simmer covered on low heat for 12 minutes.',
      'Turn off heat and let rest for 5 minutes.',
      'Serve as an exact 1:1 drop-in replacement for white rice with sambar, rasam, and kootu.'
    ],
    steps_ta: [
      'சாமை அரிசியை நன்கு கழுவி சுத்தம் செய்யவும்.',
      '2.5 கப் கொதிக்கும் தண்ணீரில் சேர்த்து மூடி போட்டு 12 நிமிடங்கள் மிதமான தீயில் வேகவைக்கவும்.',
      'அடுப்பை அணைத்து 5 நிமிடங்கள் கழித்து எடுக்கவும்.',
      'வெள்ளை சாதத்திற்கு மாற்றாக சாம்பார், ரசம், கூட்டுடன் பரிமாறவும்.'
    ],
    tags: ['Lunch', 'Millet-based', 'High-fiber', 'Quick'],
    approximateCarbs: 31,
    approximateFiber: 6.8,
    protein: 4.5,
    portion: '1 katori (~120g)',
    isRiceBased: false,
    imageEmoji: '🍚',
    modificationSuggestions: {
      title_en: 'Seamless Traditional Thali Drop-In',
      title_ta: 'பாரம்பரிய தாளிக்கு ஏற்ற அருமையான மாற்று',
      originalMethod_en: 'Traditional white rice.',
      originalMethod_ta: 'பாரம்பரிய வெள்ளை சாதம்.',
      modifiedMethod_en: 'Substitute Samai for white rice. Texture and appearance closely mirror Ponni rice when mixed with sambar.',
      modifiedMethod_ta: 'சாம்பாருடன் பிசையும்போது வெள்ளை சாதம் போலவே இருக்கும்.',
      points_en: [
        'Virtually identical eating experience with sambar and rasam.',
        'Nearly 6x higher dietary fiber than polished white rice.',
        'Whole family can share without feeling they are on a restrictive diet.'
      ],
      points_ta: [
        'சாம்பார் ரசத்துடன் சாப்பிடும்போது வெள்ளை சாத சுவையை தரும்.',
        'வெள்ளை அரிசியை விட 6 மடங்கு அதிக நார்ச்சத்து.',
        'குடும்பத்தினர் அனைவரும் ஒன்றாக உண்ணலாம்.'
      ],
      modifiedCarbs: 27,
      modifiedFiber: 7.2,
      modifiedProtein: 4.8
    }
  },

  // 11. Lemon Rice
  {
    id: 'lemon-rice',
    name_en: 'Traditional Lemon Rice (Elumichai Sadam)',
    name_ta: 'எலுமிச்சை சாதம்',
    mealType: ['lunch'],
    dishType: 'main',
    ingredients: ['2 cups cooked rice', 'Juice of 2 lemons', '1/4 cup roasted peanuts', '1 tsp mustard seeds', '1 tsp chana dal', '1 tsp urad dal', '2 green chilies & ginger', '1/2 tsp turmeric powder', 'Curry leaves & sesame oil'],
    ingredients_ta: ['2 கப் வடித்த சாதம்', '2 எலுமிச்சம்பழ சாறு', '1/4 கப் வேர்க்கடலை', '1 தேக்கரண்டி கடுகு', '1 தேக்கரண்டி கடலைப்பருப்பு', '1 தேக்கரண்டி உளுந்து', 'பச்சை மிளகாய், இஞ்சி', 'மஞ்சள்தூள்', 'நல்லெண்ணெய், கருவேப்பிலை'],
    steps: [
      'Spread cooked cooled rice in a wide plate with 1 tsp sesame oil and turmeric.',
      'Heat oil, fry peanuts until crisp, then add mustard, dals, curry leaves, and ginger.',
      'Turn off heat, let cool slightly, and stir in strained lemon juice with salt.',
      'Pour over rice and gently fold together without mashing grains.'
    ],
    steps_ta: [
      'வடித்த சாதத்தை அகன்ற தட்டில் பரப்பி நல்லெண்ணெய், மஞ்சள்தூள் சேர்க்கவும்.',
      'எண்ணெயில் வேர்க்கடலை, கடுகு, பருப்புகள், இஞ்சி, மிளகாய் தாளிக்கவும்.',
      'அடுப்பை அணைத்து ஆறிய பின் எலுமிச்சை சாறு, உப்பு கலக்கவும்.',
      'சாதத்துடன் சேர்த்து உடையாமல் மென்மையாக கிளறவும்.'
    ],
    tags: ['Lunch', 'Rice-based', 'Festival-friendly'],
    approximateCarbs: 48,
    approximateFiber: 2.1,
    protein: 5.0,
    portion: '1 cup (~160g)',
    isRiceBased: true,
    imageEmoji: '🍋',
    modificationSuggestions: {
      title_en: 'House Style Lemon Rice: Veggie & Portion Remodel',
      title_ta: 'வீட்டு முறை எலுமிச்சை சாதம்: காய்கறி & அளவு சீரமைப்பு',
      originalMethod_en: 'High white rice volume tempered with heavy oil and fried peanuts.',
      originalMethod_ta: 'அதிக வெள்ளை சாதம், அதிக எண்ணெய் மற்றும் வறுத்த வேர்க்கடலை.',
      modifiedMethod_en: 'Reduce rice to 1/2 cup portion; fold in 1/2 cup lightly steamed grated carrots or finely diced capsicum; maintain tangy lemon spice blend.',
      modifiedMethod_ta: 'சாதத்தை 1/2 கப்பாக குறைத்து, 1/2 கப் ஆவியில் வெந்த துருவிய கேரட்/குடைமிளகாய் சேர்த்து எலுமிச்சை சாறு கலந்து சமைக்கவும்.',
      points_en: [
        'Steamed carrots blend invisibly into the golden turmeric color.',
        'Cuts starch density by 40% while preserving authentic tangy zest.',
        'Always serve with boiled egg or a protein sundal side.'
      ],
      points_ta: [
        'மஞ்சள் நிறத்துடன் கேரட் அருமையாக கலந்துவிடும்.',
        'மாவுச்சத்தை 40% குறைத்து அதே பாரம்பரிய சுவையை தருகிறது.',
        'அவித்த முட்டை அல்லது சுண்டலுடன் சேர்த்து பரிமாறவும்.'
      ],
      modifiedCarbs: 28,
      modifiedFiber: 4.8,
      modifiedProtein: 6.2
    }
  },

  // 12. Curd Rice
  {
    id: 'curd-rice',
    name_en: 'South Indian Curd Rice (Thayir Sadam)',
    name_ta: 'தயிர் சாதம்',
    mealType: ['lunch', 'dinner'],
    dishType: 'main',
    ingredients: ['1.5 cups soft cooked rice', '1 cup fresh homemade curd (dahi)', '1/4 cup milk', '1 tsp mustard seeds', '1 green chili slit', '1 tsp grated ginger', 'Curry leaves', '1/4 cup diced cucumber & pomegranate arils'],
    ingredients_ta: ['1.5 கப் நன்கு வெந்த சாதம்', '1 கப் கெட்டித் தயிர்', '1/4 கப் பால்', 'கடுகு, இஞ்சி, பச்சை மிளகாய்', 'கருவேப்பிலை', 'வெள்ளரிக்காய் துண்டுகள், மாதுளை'],
    steps: [
      'Mash soft cooked rice while warm, then cool to room temperature.',
      'Stir in fresh set curd, milk (to prevent turning sour), and salt.',
      'Temper mustard, ginger, green chili, and curry leaves in minimal oil.',
      'Fold in crunchy diced cucumber for volume and hydration.'
    ],
    steps_ta: [
      'சாதத்தை சூடாக இருக்கும்போதே மசித்து ஆறவிடவும்.',
      'தயிர், சிறிது பால் மற்றும் உப்பு சேர்த்து கலக்கவும்.',
      'கடுகு, இஞ்சி, மிளகாய், கருவேப்பிலை தாளித்து கொட்டவும்.',
      'பொடியாக நறுக்கிய வெள்ளரிக்காய் சேர்த்து பரிமாறவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Rice-based', 'Quick'],
    approximateCarbs: 40,
    approximateFiber: 1.4,
    protein: 6.5,
    portion: '1 katori (~150g)',
    isRiceBased: true,
    imageEmoji: '🥣',
    modificationSuggestions: {
      title_en: 'Cucumber & Sprouted Moong Infusion',
      title_ta: 'வெள்ளரிக்காய் & பாசிப்பயறு கலந்த தயிர் சாதம்',
      originalMethod_en: 'Large bowl of soft carb-heavy mashed rice with full fat curd.',
      originalMethod_ta: 'அதிக குழைந்த சாதத்தில் தயிர் கலந்து உண்பது.',
      modifiedMethod_en: 'Replace 50% of the rice volume with finely grated cooling cucumber and tender sprouted moong dal.',
      modifiedMethod_ta: 'சாதத்தின் அளவில் பாதியை குறைத்து அதற்கு பதிலாக துருவிய வெள்ளரிக்காய் மற்றும் முளைகட்டிய பயறு சேர்க்கவும்.',
      points_en: [
        'Probiotics from live curd support gut microbiomes.',
        'Cucumber multiplies hydration and drops glycemic impact to minimal.',
        'Sprouted moong adds plant protein and chewiness.'
      ],
      points_ta: [
        'தயிரில் உள்ள புரோபயாடிக் குடல் நலனை காக்கிறது.',
        'வெள்ளரிக்காய் நீர்ச்சத்தை தந்து ரத்த சர்க்கரையை கட்டுக்குள் வைக்கிறது.',
        'முளைகட்டிய பயறு கூடுதல் புரதத்தை தருகிறது.'
      ],
      modifiedCarbs: 22,
      modifiedFiber: 3.8,
      modifiedProtein: 8.5
    }
  },

  // 13. Sambar Rice
  {
    id: 'sambar-rice',
    name_en: 'Vegetable Sambar Rice (Bisibele / Sambar Sadam)',
    name_ta: 'காய்கறி சாம்பார் சாதம்',
    mealType: ['lunch'],
    dishType: 'main',
    ingredients: ['1 cup rice', '1/2 cup toor dal', '1 drumstick', '1 carrot', '8 shallots', '1 tomato', '2 tbsp sambar powder', '1 tbsp tamarind pulp', 'Hing and curry leaves'],
    ingredients_ta: ['1 கப் அரிசி', '1/2 கப் துவரம்பருப்பு', '1 முருங்கைக்காய்', '1 கேரட்', '8 சின்ன வெங்காயம்', '1 தக்காளி', 'சாம்பார் பொடி', 'புளிக்கரைசல்', 'பெருங்காயம்'],
    steps: [
      'Cook rice and toor dal together in a pressure cooker until soft.',
      'In a pot, boil vegetables with turmeric, tamarind water, and sambar powder.',
      'Add cooked dal-rice mixture and simmer for 5 minutes with a light tempering of mustard and curry leaves.'
    ],
    steps_ta: [
      'அரிசி மற்றும் துவரம்பருப்பை ஒன்றாக குழைய வேகவைக்கவும்.',
      'காய்கறிகளை புளித்தண்ணீர், சாம்பார் பொடி, உப்பு சேர்த்து வேகவைக்கவும்.',
      'வெந்த சாதம்-பருப்பை காய்கறியுடன் சேர்த்து 5 நிமிடங்கள் கொதிக்க விட்டு தாளிக்கவும்.'
    ],
    tags: ['Lunch', 'Rice-based', 'Vegetable'],
    approximateCarbs: 45,
    approximateFiber: 4.8,
    protein: 7.8,
    portion: '1 bowl (~180g)',
    isRiceBased: true,
    imageEmoji: '🍲',
    modificationSuggestions: {
      title_en: 'Toor Dal & Drumstick Dominance',
      title_ta: 'பருப்பு & முருங்கைக்காய் ஆதிக்கம்',
      originalMethod_en: 'High rice to dal ratio with few vegetables.',
      originalMethod_ta: 'அதிக அரிசி, குறைந்த பருப்பு மற்றும் காய்கறி.',
      modifiedMethod_en: 'Use 1:1 dal to rice ratio. Pack with extra drumstick, shallots, and brinjal.',
      modifiedMethod_ta: 'அரிசியும் பருப்பும் சம அளவில் வைத்து முருங்கைக்காய், சின்ன வெங்காயம் அதிகம் சேர்க்கவும்.',
      points_en: [
        'Drumstick pods are rich in dietary fiber and bioactive compounds.',
        'Dal provides sustained amino acids.',
        'Elder portion: 1 medium katori, paired with raw cucumber salad.'
      ],
      points_ta: [
        'முருங்கைக்காய் நார்ச்சத்து மற்றும் அத்தியாவசிய தாதுக்கள் நிறைந்தது.',
        'பருப்பு நீண்ட நேரம் பசியை தாங்க வைக்கும்.',
        'வெள்ளரி சாலட்டுடன் சேர்த்து சாப்பிடலாம்.'
      ],
      modifiedCarbs: 32,
      modifiedFiber: 6.5,
      modifiedProtein: 10.5
    }
  },

  // 14. Tomato Rice
  {
    id: 'tomato-rice',
    name_en: 'Thakkali Sadam (Tomato Rice)',
    name_ta: 'தக்காளி சாதம்',
    mealType: ['lunch'],
    dishType: 'main',
    ingredients: ['2 cups cooked rice', '4 ripe country tomatoes pureed/chopped', '1 sliced onion', 'Ginger garlic paste', '1 tsp fennel seeds', 'Chili powder, coriander powder, mint leaves'],
    ingredients_ta: ['2 கப் சாதம்', '4 நாட்டு தக்காளி', '1 வெங்காயம்', 'இஞ்சி பூண்டு விழுது', 'சோம்பு', 'மிளகாய்த்தூள், புதினா'],
    steps: [
      'Sauté fennel seeds, sliced onions, and ginger-garlic paste until golden.',
      'Add juicy tomatoes, spices, and mint; cook down into a thick fragrant thokku.',
      'Gently toss cooked Ponni rice with the tomato base on low heat for 2 minutes.'
    ],
    steps_ta: [
      'சோம்பு, வெங்காயம், இஞ்சி பூண்டு வதக்கவும்.',
      'தக்காளி, மசாலா, புதினா சேர்த்து தொக்கு பதத்திற்கு சுருள வதக்கவும்.',
      'சாதத்தை சேர்த்து மிதமான தீயில் 2 நிமிடங்கள் கிளறி இறக்கவும்.'
    ],
    tags: ['Lunch', 'Rice-based', 'Quick'],
    approximateCarbs: 44,
    approximateFiber: 3.2,
    protein: 4.5,
    portion: '1 cup (~150g)',
    isRiceBased: true,
    imageEmoji: '🍅',
    modificationSuggestions: {
      title_en: 'Lycopene Rich with Protein Boost',
      title_ta: 'லைகோபீன் நிறைந்த சத்தான தக்காளி சாதம்',
      originalMethod_en: 'White rice tossed in oily tomato base.',
      originalMethod_ta: 'அதிக எண்ணெயில் செய்த தக்காளி சாதம்.',
      modifiedMethod_en: 'Add diced paneer or meal-maker/boiled soya chunks to the tomato gravy and keep rice portion to 1/2 cup.',
      modifiedMethod_ta: 'தக்காளி மசாலாவில் பன்னீர் அல்லது வேகவைத்த சோயா துண்டுகள் சேர்த்து, சாதத்தை 1/2 கப்பாக குறைக்கவும்.',
      points_en: [
        'Cooked tomatoes provide potent antioxidant lycopene.',
        'Protein integration lowers the glycemic index curve.',
        'Pair with cucumber-onion raita made with low-fat set curd.'
      ],
      points_ta: [
        'நாட்டு தக்காளியில் சக்திவாய்ந்த ஆன்டி-ஆக்ஸிடன்ட்கள் உள்ளன.',
        'புரதம் சேர்ப்பதால் சர்க்கரை உயர்வை கட்டுப்படுத்துகிறது.',
        'வெள்ளரி வெங்காய பச்சடியுடன் பரிமாறவும்.'
      ],
      modifiedCarbs: 28,
      modifiedFiber: 4.5,
      modifiedProtein: 8.8
    }
  },

  // 15. Keerai Kootu (Spinach Stew)
  {
    id: 'keerai-kootu',
    name_en: 'Keerai Kootu (Greens & Lentils)',
    name_ta: 'கீரை கூட்டு (பசலை / அரைக்கீரை)',
    mealType: ['lunch', 'dinner'],
    dishType: 'side',
    ingredients: ['1 bunch fresh araikeerai / spinach washed and chopped', '1/2 cup yellow moong dal', '1/4 tsp turmeric', 'Paste of 2 tbsp grated coconut + 1 tsp cumin seeds + 1 green chili', 'Mustard seeds & urad dal for tempering'],
    ingredients_ta: ['1 கட்டு அரைக்கீரை அல்லது பசலைக்கீரை', '1/2 கப் பாசிப்பருப்பு', 'மஞ்சள்தூள்', 'தேங்காய் + சீரகம் + பச்சை மிளகாய் விழுது', 'கடுகு, உளுந்து தாளிக்க'],
    steps: [
      'Boil moong dal with turmeric until tender.',
      'Add chopped greens and cook for 4-5 minutes until bright green and tender.',
      'Stir in freshly ground cumin-coconut paste and salt; simmer for 2 minutes.',
      'Temper with mustard seeds and curry leaves in half teaspoon ghee.'
    ],
    steps_ta: [
      'பாசிப்பருப்பை மஞ்சள்தூள் சேர்த்து வேகவைக்கவும்.',
      'நறுக்கிய கீரையை சேர்த்து 4-5 நிமிடங்கள் வேகவிடவும்.',
      'தேங்காய் சீரக விழுதை சேர்த்து 2 நிமிடங்கள் கொதிக்க வைக்கவும்.',
      'கடுகு, கருவேப்பிலை தாளித்து இறக்கவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Vegetable', 'Side dish', 'High-fiber', 'Quick'],
    approximateCarbs: 12,
    approximateFiber: 5.5,
    protein: 6.8,
    portion: '1 big katori (~150g)',
    isRiceBased: false,
    imageEmoji: '🥬',
    modificationSuggestions: {
      title_en: 'Core Pillar of the Elder Plate',
      title_ta: 'முதியவர் தட்டின் மிக முக்கிய தூண்',
      originalMethod_en: 'Often consumed in small condiment quantities.',
      originalMethod_ta: 'தொட்டுக்கொள்ளும் சிறிய அளவாக மட்டுமே உண்பது.',
      modifiedMethod_en: 'Serve as a primary volume dish: give the elder a large generous bowl (1.5 cups) to fill half the thali plate before adding rice.',
      modifiedMethod_ta: 'முதியவருக்கு பெரிய கிண்ணத்தில் (1.5 கப்) தட்டின் பாதி பகுதியை கீரை கூட்டால் நிரப்பவும்.',
      points_en: [
        'Super-rich in magnesium, folate, lutein, and soluble plant fiber.',
        'Moong dal adds light, non-flatulent protein.',
        'Directly lowers the glycemic response of the entire meal.'
      ],
      points_ta: [
        'மக்னீசியம், போலேட் மற்றும் நார்ச்சத்து நிறைந்தது.',
        'பாசிப்பருப்பு எளிய செரிமான புரதத்தை தருகிறது.',
        'முழு உணவின் சர்க்கரை அளவையும் தணிக்கிறது.'
      ],
      modifiedCarbs: 10,
      modifiedFiber: 6.2,
      modifiedProtein: 7.2
    }
  },

  // 16. Vendakkai Poriyal (Okra Stir-Fry)
  {
    id: 'vendakkai-poriyal',
    name_en: 'Vendakkai Poriyal (Okra Stir-fry)',
    name_ta: 'வெண்டைக்காய் பொரியல்',
    mealType: ['lunch', 'dinner'],
    dishType: 'side',
    ingredients: ['250g tender ladies finger (okra) finely sliced', '1 finely chopped onion', '1/2 tsp mustard seeds', '1 tsp urad dal', '1/4 tsp turmeric', '1/2 tsp chili powder', '1 tsp cold-pressed sesame oil', '1 tbsp grated fresh coconut'],
    ingredients_ta: ['250 கிராம் வெண்டைக்காய் நறுக்கியது', '1 வெங்காயம்', 'கடுகு, உளுந்து', 'மஞ்சள்தூள், மிளகாய்த்தூள்', 'நல்லெண்ணெய்', '1 மேஜைக்கரண்டி தேங்காய் துருவல்'],
    steps: [
      'Wipe washed okra dry before chopping into small discs to eliminate stickiness.',
      'Heat 1 tsp oil, splutter mustard seeds and urad dal until golden.',
      'Sauté onions and okra on medium-high heat uncovered for 8-10 minutes until tender and crisp.',
      'Sprinkle turmeric, chili powder, and salt. Garnish with a tablespoon of fresh coconut.'
    ],
    steps_ta: [
      'வெண்டைக்காயை கழுவி ஈரம் போக துடைத்து வட்டமாக நறுக்கவும்.',
      'எண்ணெயில் கடுகு, உளுந்து, வெங்காயம் வதக்கி வெண்டைக்காய் சேர்க்கவும்.',
      'பிசுபிசுப்பு போகும் வரை மூடி போடாமல் 8-10 நிமிடங்கள் வதக்கவும்.',
      'மஞ்சள்தூள், மிளகாய்த்தூள், உப்பு சேர்த்து வதக்கி தேங்காய் தூவி இறக்கவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Vegetable', 'Side dish', 'High-fiber'],
    approximateCarbs: 8,
    approximateFiber: 4.2,
    protein: 2.2,
    portion: '1 katori (~100g)',
    isRiceBased: false,
    imageEmoji: '🌱',
    modificationSuggestions: {
      title_en: 'Mucilage Fiber for Glucose Absorption Control',
      title_ta: 'சர்க்கரை தடுப்பிற்கு வெண்டைக்காய் நார்ச்சத்து',
      originalMethod_en: 'Deep-fried with excessive oil in some restaurant variations.',
      originalMethod_ta: 'உணவகங்களில் அதிக எண்ணெயில் பொரிப்பது.',
      modifiedMethod_en: 'Dry-roast on an iron skillet with just 1 tsp sesame oil; double the serving portion for elders.',
      modifiedMethod_ta: 'இரும்பு கடாயில் 1 ஸ்பூன் எண்ணெயில் சுருள வதக்கி முதியவருக்கு இரட்டிப்பு பங்கு கொடுக்கவும்.',
      points_en: [
        'Natural okra mucilage binds sugars and slows digestive release.',
        'High potassium and vitamin C.',
        'Elders can consume 1.5 katoris guilt-free.'
      ],
      points_ta: [
        'வெண்டைக்காயின் வழவழப்பு குடலில் சர்க்கரை உறிஞ்சுதலை மெதுவாக்குகிறது.',
        'பொட்டாசியம் மற்றும் வைட்டமின் சி நிறைந்தது.',
        'முதியவர்கள் தாராளமாக 1.5 கிண்ணம் சாப்பிடலாம்.'
      ],
      modifiedCarbs: 7,
      modifiedFiber: 4.8,
      modifiedProtein: 2.5
    }
  },

  // 17. Cabbage Beans Poriyal
  {
    id: 'cabbage-beans-poriyal',
    name_en: 'Muttaikose Beans Poriyal (Cabbage & Green Beans)',
    name_ta: 'முட்டைகோஸ் பீன்ஸ் பொரியல்',
    mealType: ['lunch', 'dinner'],
    dishType: 'side',
    ingredients: ['1.5 cups shredded cabbage', '1 cup finely chopped french beans', '1/2 tsp mustard seeds', '1 tsp chana dal', '1 slit green chili', 'Curry leaves', '1 tbsp grated coconut'],
    ingredients_ta: ['1.5 கப் முட்டைகோஸ்', '1 கப் நறுக்கிய பீன்ஸ்', 'கடுகு, கடலைப்பருப்பு', 'பச்சை மிளகாய், கருவேப்பிலை', 'தேங்காய் துருவல்'],
    steps: [
      'Steam chopped beans and shredded cabbage with a pinch of salt until tender-crisp.',
      'In a pan, splutter mustard seeds, chana dal, green chili, and curry leaves.',
      'Toss the steamed vegetables for 2 minutes to meld flavors.',
      'Finish with fresh grated coconut.'
    ],
    steps_ta: [
      'பீன்ஸ் மற்றும் முட்டைகோஸை ஆவியில் முக்கால் பதம் வேகவைக்கவும்.',
      'கடாயில் கடுகு, கடலைப்பருப்பு, பச்சை மிளகாய் தாளிக்கவும்.',
      'வேகவைத்த காய்கறிகளை சேர்த்து 2 நிமிடங்கள் வதக்கி தேங்காய் தூவவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Vegetable', 'Side dish', 'High-fiber', 'Quick'],
    approximateCarbs: 9,
    approximateFiber: 4.5,
    protein: 2.8,
    portion: '1 katori (~110g)',
    isRiceBased: false,
    imageEmoji: '🥗',
    modificationSuggestions: {
      title_en: 'Bulk Fiber with Minimal Calories',
      title_ta: 'குறைந்த கலோரி, அதிக நார்ச்சத்து',
      originalMethod_en: 'Small tablespoon serving alongside large mounds of rice.',
      originalMethod_ta: 'அரிசி சாதத்திற்கு அருகில் சிறிய ஸ்பூன் அளவு பரிமாறுவது.',
      modifiedMethod_en: 'Fill 1/3 of the elder plate with this poriyal to create immediate visual fullness and satiety.',
      modifiedMethod_ta: 'முதியவர் தட்டின் மூன்றில் ஒரு பகுதியை இந்த பொரியலால் நிரப்பவும்.',
      points_en: [
        'Cruciferous vegetables support cellular detoxification.',
        'High satiety index prevents post-meal sugar cravings.',
        'Family and elders enjoy the identical mild, sweet coconut crunch.'
      ],
      points_ta: [
        'முட்டைகோஸ் உடலுக்கு சிறந்த நச்சு நீக்கியாக செயல்படுகிறது.',
        'பசியை அடக்கி வயிறு நிறைந்த உணர்வை தரும்.',
        'குடும்பத்தினர் அனைவரும் விரும்பி உண்ணும் எளிய சுவை.'
      ],
      modifiedCarbs: 8,
      modifiedFiber: 5.0,
      modifiedProtein: 3.0
    }
  },

  // 18. Suraikkai Kootu (Bottle Gourd Stew)
  {
    id: 'suraikkai-kootu',
    name_en: 'Suraikkai Kootu (Bottle Gourd Stew)',
    name_ta: 'சுரைக்காய் கூட்டு',
    mealType: ['lunch', 'dinner'],
    dishType: 'side',
    ingredients: ['2 cups peeled diced bottle gourd', '1/3 cup chana dal / moong dal', '1/4 tsp turmeric', 'Ground cumin-coconut-green chili paste', 'Mustard seeds & hing'],
    ingredients_ta: ['2 கப் நறுக்கிய சுரைக்காய்', '1/3 கப் கடலைப்பருப்பு / பாசிப்பருப்பு', 'மஞ்சள்தூள்', 'தேங்காய் சீரக விழுது', 'கடுகு, பெருங்காயம்'],
    steps: [
      'Pressure cook diced bottle gourd and dal with half cup water and turmeric for 2 whistles.',
      'Add ground cumin paste and salt; simmer on low heat for 3 minutes.',
      'Finish with fragrant mustard-curry leaf tempering.'
    ],
    steps_ta: [
      'சுரைக்காய் மற்றும் பருப்பை குக்கரில் 2 விசில் விட்டு வேகவைக்கவும்.',
      'தேங்காய் சீரக விழுது, உப்பு சேர்த்து 3 நிமிடங்கள் கொதிக்க வைக்கவும்.',
      'கடுகு, பெருங்காயம் தாளித்து இறக்கவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Vegetable', 'Side dish', 'High-fiber'],
    approximateCarbs: 11,
    approximateFiber: 3.8,
    protein: 4.5,
    portion: '1 katori (~140g)',
    isRiceBased: false,
    imageEmoji: '🥒',
    modificationSuggestions: {
      title_en: 'Hydrating, Low-Calorie Comfort',
      title_ta: 'நீர்ச்சத்து நிறைந்த அருமருந்து',
      originalMethod_en: 'Cooked with heavy coconut cream in some traditions.',
      originalMethod_ta: 'அதிக தேங்காய் அரைத்து ஊற்றி சமைப்பது.',
      modifiedMethod_en: 'Keep coconut to 1 tablespoon; emphasize cumin and bottle gourd juice.',
      modifiedMethod_ta: 'தேங்காயை 1 ஸ்பூனாக குறைத்து சீரகம் மற்றும் சுரைக்காயின் சத்தை முன்னிறுத்தவும்.',
      points_en: [
        'Bottle gourd is over 90% water, offering exceptional hydration.',
        'Mild on the stomach, ideal for senior digestion.',
        'Can be eaten mixed directly into a smaller portion of rice.'
      ],
      points_ta: [
        'சுரைக்காயில் 90% நீர்ச்சத்து உள்ளது, உடல் சூட்டை தணிக்கும்.',
        'வயதானவர்களுக்கு எளிதில் ஜீரணமாகும் அருமையான உணவு.',
        'குறைவான சாதத்தில் நேரடியாக பிசைந்தும் சாப்பிடலாம்.'
      ],
      modifiedCarbs: 9,
      modifiedFiber: 4.2,
      modifiedProtein: 5.0
    }
  },

  // 19. Murungakkai Sambar
  {
    id: 'murungakkai-sambar',
    name_en: 'Murungakkai Sambar (Drumstick Dal Sambar)',
    name_ta: 'முருங்கைக்காய் சின்ன வெங்காய சாம்பார்',
    mealType: ['lunch', 'dinner'],
    dishType: 'side',
    ingredients: ['3/4 cup toor dal cooked and mashed', '1 drumstick cut into pieces', '10 peeled shallots (chinna vengayam)', '1 tomato', '1 marble sized tamarind soaked', '2 tbsp homemade sambar powder', '1/4 tsp hing (asafoetida)', 'Mustard seeds, fenugreek seeds, curry leaves'],
    ingredients_ta: ['3/4 கப் துவரம்பருப்பு வெந்தது', '1 முருங்கைக்காய்', '10 சின்ன வெங்காயம்', '1 தக்காளி', 'சிறிது புளி', 'சாம்பார் பொடி', 'பெருங்காயம், வெந்தயம், கடுகு'],
    steps: [
      'Boil shallots, tomato, and drumsticks in tamarind water with sambar powder, turmeric, and salt until drumsticks are tender.',
      'Pour in mashed toor dal with water to achieve stew consistency; boil for 5 minutes.',
      'In a tadka spoon, heat half teaspoon oil, pop mustard seeds, a pinch of fenugreek seeds, and curry leaves.',
      'Pour into boiling sambar and turn off heat.'
    ],
    steps_ta: [
      'புளித்தண்ணீரில் சின்ன வெங்காயம், முருங்கைக்காய், சாம்பார் பொடி, உப்பு சேர்த்து வேகவைக்கவும்.',
      'வெந்த துவரம்பருப்பை ஊற்றி 5 நிமிடங்கள் கொதிக்க விடவும்.',
      'தாளிக்கும் கரண்டியில் கடுகு, வெந்தயம், கருவேப்பிலை, பெருங்காயம் தாளித்து சாம்பாரில் கொட்டவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Vegetable', 'Protein', 'Side dish'],
    approximateCarbs: 16,
    approximateFiber: 5.2,
    protein: 6.5,
    portion: '1 big katori (~160g)',
    isRiceBased: false,
    imageEmoji: '🍲',
    modificationSuggestions: {
      title_en: 'More Vegetables, Less Starch Dilution',
      title_ta: 'அதிக காய்கறி, கெட்டியான பருப்பு',
      originalMethod_en: 'Thin, watery sambar with high tamarind and minimal vegetables.',
      originalMethod_ta: 'தண்ணீர் போன்ற சாம்பார், அதிக புளி.',
      modifiedMethod_en: 'Pack with extra drumstick and shallots. Keep tamarind mild and toor dal thick for sustained protein.',
      modifiedMethod_ta: 'அதிக முருங்கைக்காய், சின்ன வெங்காயம் சேர்த்து கெட்டியாக வைக்கவும். புளியை குறைத்து தக்காளி சேர்க்கவும்.',
      points_en: [
        'Fenugreek seeds in tempering improve insulin sensitivity.',
        'Shallots provide quercetin and prebiotics.',
        'Elders can drink a small bowl as warm soup before their meal.'
      ],
      points_ta: [
        'தாளிப்பில் உள்ள வெந்தயம் இன்சுலின் சுரப்பிற்கு நல்லது.',
        'சின்ன வெங்காயம் இதயத்திற்கும் குடலுக்கும் நன்மை பயக்கும்.',
        'உணவுக்கு முன் சூப் போலவும் ஒரு சிறிய கிண்ணம் அருந்தலாம்.'
      ],
      modifiedCarbs: 14,
      modifiedFiber: 5.8,
      modifiedProtein: 7.0
    }
  },

  // 20. Poondu Milagu Rasam
  {
    id: 'poondu-rasam',
    name_en: 'Poondu Milagu Rasam (Garlic Pepper Soup)',
    name_ta: 'பூண்டு மிளகு ரசம்',
    mealType: ['lunch', 'dinner'],
    dishType: 'rasam_curd',
    ingredients: ['8 crushed garlic cloves', '1 tbsp whole black peppercorns', '1 tbsp cumin seeds', '1 ripe tomato crushed', 'Small gooseberry sized tamarind extract', '1/4 tsp turmeric', 'Hing, curry leaves, coriander leaves', 'Mustard seeds'],
    ingredients_ta: ['8 நசுக்கிய பூண்டு பற்கள்', '1 மேஜைக்கரண்டி மிளகு', '1 மேஜைக்கரண்டி சீரகம்', '1 நாட்டு தக்காளி', 'சிறிது புளி', 'மஞ்சள்தூள், பெருங்காயம், கருவேப்பிலை'],
    steps: [
      'Coarsely pound garlic cloves, black pepper, and cumin in a mortar-pestle.',
      'Boil crushed tomato and tamarind water with turmeric, pounded spice mix, and salt for 5 minutes.',
      'Add 1.5 cups water or dal water, bring to a gentle froth (do not rolling boil).',
      'Temper with mustard and curry leaves; garnish with fresh coriander.'
    ],
    steps_ta: [
      'பூண்டு, மிளகு, சீரகத்தை அம்மியில் அல்லது மிக்ஸியில் கொரகொரப்பாக பொடிக்கவும்.',
      'தக்காளி, புளித்தண்ணீர், பொடித்த மசாலா, உப்பு சேர்த்து 5 நிமிடங்கள் கொதிக்க விடவும்.',
      'தண்ணீர் அல்லது பருப்பு தண்ணீர் சேர்த்து நுரை கட்டி வரும்போது இறக்கவும் (கொதிக்க விடக்கூடாது).',
      'கடுகு, கருவேப்பிலை தாளித்து கொத்தமல்லி தூவி பரிமாறவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Side dish', 'Quick'],
    approximateCarbs: 6,
    approximateFiber: 1.5,
    protein: 1.8,
    portion: '1 katori (~150ml)',
    isRiceBased: false,
    imageEmoji: '🥣',
    modificationSuggestions: {
      title_en: 'Metabolic & Digestive Accelerator',
      title_ta: 'செரிமானத்தை தூண்டும் இயற்கை மருந்து',
      originalMethod_en: 'Often mixed with piles of white rice.',
      originalMethod_ta: 'அதிக சாதத்தில் ரசத்தை ஊற்றி குழைத்து உண்பது.',
      modifiedMethod_en: 'Sip directly as a soothing warm broth or mix with just 2-3 spoons of rice at the end of the meal.',
      modifiedMethod_ta: 'உணவின் முடிவில் சூடான சூப் போல அருந்தலாம் அல்லது குறைந்த சாதத்தில் பிசைந்து உண்ணலாம்.',
      points_en: [
        'Piperine from black pepper significantly enhances nutrient bioavailability.',
        'Crushed garlic supports cardiovascular and lipid health.',
        'Zero impact on glycemic load.'
      ],
      points_ta: [
        'மிளகில் உள்ள பைப்பரின் சத்துக்களை உடல் கிரகித்துக் கொள்ள உதவுகிறது.',
        'பூண்டு ரத்த அழுத்தத்தையும் கொழுப்பையும் சீராக வைக்கிறது.',
        'ரத்த சர்க்கரையை துளியும் உயர்த்தாத மிகச்சிறந்த உணவு.'
      ],
      modifiedCarbs: 5,
      modifiedFiber: 1.5,
      modifiedProtein: 1.8
    }
  },

  // 21. Kondakadalai Sundal
  {
    id: 'kondakadalai-sundal',
    name_en: 'Kondakadalai Sundal (Black Chickpeas)',
    name_ta: 'கருப்பு கொண்டைக்கடலை சுண்டல்',
    mealType: ['tiffin', 'lunch'],
    dishType: 'protein',
    ingredients: ['1 cup brown/black chickpeas (karuppu kondakadalai) soaked overnight', 'Mustard seeds, urad dal', '1 green chili slit', 'Ginger finely chopped', 'Hing', 'Curry leaves', '1 tbsp grated fresh coconut'],
    ingredients_ta: ['1 கப் ஊறவைத்த கருப்பு கொண்டைக்கடலை', 'கடுகு, உளுந்து', 'பச்சை மிளகாய், இஞ்சி', 'பெருங்காயம், கருவேப்பிலை', 'தேங்காய் துருவல்'],
    steps: [
      'Pressure cook soaked black chickpeas with salt and water for 5-6 whistles until tender.',
      'Drain excess water (save water for rasam).',
      'In a kadai, heat half tsp oil, splutter mustard, urad dal, green chili, ginger, and hing.',
      'Toss in cooked chickpeas, stir for 2 minutes, and top with grated coconut.'
    ],
    steps_ta: [
      'ஊறவைத்த கொண்டைக்கடலையை உப்பு சேர்த்து குக்கரில் 5-6 விசில் விட்டு வேகவைக்கவும்.',
      'தண்ணீரை வடிக்கவும் (இந்த தண்ணீரில் அருமையான ரசம் வைக்கலாம்).',
      'எண்ணெயில் கடுகு, உளுந்து, இஞ்சி, மிளகாய், பெருங்காயம் தாளிக்கவும்.',
      'வெந்த கடலையை சேர்த்து கிளறி தேங்காய் துருவி இறக்கவும்.'
    ],
    tags: ['Snack', 'Protein', 'High-fiber', 'Festival-friendly', 'Quick'],
    approximateCarbs: 22,
    approximateFiber: 8.5,
    protein: 8.8,
    portion: '1 katori (~120g)',
    isRiceBased: false,
    imageEmoji: '🧆',
    modificationSuggestions: {
      title_en: 'Ideal Diabetic Evening Tiffin / Protein Pillar',
      title_ta: 'நீரிழிவு நோயாளிகளுக்கான அருமையான மாலை டிபன்',
      originalMethod_en: 'Evening snacks like bajjis, bondas, or sweet biscuits.',
      originalMethod_ta: 'மாலையில் பஜ்ஜி, போண்டா அல்லது பிஸ்கட் சாப்பிடுவது.',
      modifiedMethod_en: 'Replace refined evening snacks with 1 cup of boiled black chickpea sundal.',
      modifiedMethod_ta: 'எண்ணெய் தின்பண்டங்களுக்கு பதிலாக 1 கிண்ணம் கருப்பு கொண்டைக்கடலை சுண்டல் சாப்பிடவும்.',
      points_en: [
        'Extremely high in resistant starch and soluble fiber.',
        'Prevents dangerous evening hypoglycemia without spiking glucose.',
        'Keeps dinner rice requirements noticeably smaller.'
      ],
      points_ta: [
        'அதிக நார்ச்சத்து மற்றும் சிறந்த தாவர புரதம் நிறைந்தது.',
        'மாலை நேர சர்க்கரை குறைவு (hypoglycemia) ஏற்படாமல் காக்கிறது.',
        'இரவு உணவின் அளவை தானாகவே கட்டுக்குள் வைக்கும்.'
      ],
      modifiedCarbs: 20,
      modifiedFiber: 9.0,
      modifiedProtein: 9.2
    }
  },

  // 22. Karamani Sundal
  {
    id: 'karamani-sundal',
    name_en: 'Karamani Sundal (Cowpeas / Black-Eyed Peas)',
    name_ta: 'காராமணி சுண்டல்',
    mealType: ['tiffin', 'lunch'],
    dishType: 'protein',
    ingredients: ['1 cup red or white cowpeas (karamani) soaked 3 hours', 'Mustard seeds', 'Dry red chili', 'Hing', 'Curry leaves', 'Grated fresh coconut', 'Salt to taste'],
    ingredients_ta: ['1 கப் காராமணி (தட்டப்பயறு)', 'கடுகு, காய்ந்த மிளகாய்', 'பெருங்காயம், கருவேப்பிலை', 'தேங்காய் துருவல், உப்பு'],
    steps: [
      'Boil soaked cowpeas until soft but not mushy (about 3 whistles in cooker).',
      'Drain water thoroughly.',
      'Heat a drop of oil, temper mustard seeds, dry red chili, curry leaves, and asafoetida.',
      'Add boiled cowpeas and salt, toss gently, and finish with a sprinkle of fresh coconut.'
    ],
    steps_ta: [
      'காராமணியை குக்கரில் 3 விசில் விட்டு மென்மையாக வேகவைக்கவும்.',
      'தண்ணீரை வடிக்கவும்.',
      'சிறிது எண்ணெயில் கடுகு, வரமிளகாய், கருவேப்பிலை, பெருங்காயம் தாளிக்கவும்.',
      'வெந்த காராமணி சேர்த்து கிளறி தேங்காய் தூவி பரிமாறவும்.'
    ],
    tags: ['Snack', 'Protein', 'High-fiber', 'Quick'],
    approximateCarbs: 21,
    approximateFiber: 7.2,
    protein: 8.0,
    portion: '1 katori (~120g)',
    isRiceBased: false,
    imageEmoji: '🫘',
    modificationSuggestions: {
      title_en: 'Quick-Soaking Legume Power',
      title_ta: 'விரைவில் வேகும் பயறு புரதம்',
      originalMethod_en: 'Snacks with tea loaded with refined sugar.',
      originalMethod_ta: 'சர்க்கரை தேநீருடன் வடை சாப்பிடுதல்.',
      modifiedMethod_en: 'Pair with unsweetened cardamom filter coffee or buttermilk as an energizing 5 PM snack.',
      modifiedMethod_ta: 'சர்க்கரை இல்லாத காபி அல்லது மோருடன் மாலை 5 மணிக்கு உண்ணவும்.',
      points_en: [
        'Cooks much faster than chickpeas and very light on digestion.',
        'High in folate and zinc.',
        'Elder portion: 1 cup.'
      ],
      points_ta: [
        'கொண்டைக்கடலையை விட எளிதில் வெந்து ஜீரணமாகும்.',
        'போலேட் மற்றும் துத்தநாக சத்து நிறைந்தது.',
        'முதியவருக்கு 1 கிண்ணம் உகந்தது.'
      ],
      modifiedCarbs: 19,
      modifiedFiber: 7.5,
      modifiedProtein: 8.2
    }
  },

  // 23. Egg Podimas
  {
    id: 'egg-podimas',
    name_en: 'Muttai Podimas (South Indian Egg Scramble)',
    name_ta: 'முட்டை பொடிமாஸ்',
    mealType: ['lunch', 'dinner', 'breakfast'],
    dishType: 'protein',
    ingredients: ['2 country chicken eggs', '1 finely chopped onion', '1 green chili chopped', '1/4 tsp crushed black pepper', '1/4 tsp turmeric powder', 'Curry leaves & coriander', '1 tsp oil'],
    ingredients_ta: ['2 நாட்டுக்கோழி முட்டை', '1 வெங்காயம்', 'பச்சை மிளகாய்', 'மிளகுத்தூள், மஞ்சள்தூள்', 'கருவேப்பிலை, கொத்தமல்லி', '1 தேக்கரண்டி எண்ணெய்'],
    steps: [
      'Whisk eggs in a bowl with a pinch of turmeric and salt.',
      'In a pan, sauté chopped onions, green chilies, and curry leaves in 1 tsp oil until translucent.',
      'Pour in whisked eggs and scramble gently over low heat.',
      'Sprinkle freshly ground black pepper and coriander; take off heat while still moist and soft.'
    ],
    steps_ta: [
      'முட்டையை மஞ்சள்தூள், உப்பு சேர்த்து அடித்து வைக்கவும்.',
      'கடாயில் வெங்காயம், பச்சை மிளகாய், கருவேப்பிலையை வதக்கவும்.',
      'அடித்த முட்டையை ஊற்றி மிதமான தீயில் மென்மையாக கிளறி விடவும்.',
      'மிளகுத்தூள், கொத்தமல்லி தூவி மென்மையாக இருக்கும்போதே இறக்கவும்.'
    ],
    tags: ['Breakfast', 'Lunch', 'Dinner', 'Protein', 'Quick'],
    approximateCarbs: 3,
    approximateFiber: 0.5,
    protein: 13.0,
    portion: '1 plate (2 eggs, ~120g)',
    isRiceBased: false,
    imageEmoji: '🍳',
    modificationSuggestions: {
      title_en: 'Zero-Carb High-Quality Protein Buffer',
      title_ta: 'மாவுச்சத்து இல்லாத உயர்தர புரதம்',
      originalMethod_en: 'Deep-fried omelette or egg curry with potato.',
      originalMethod_ta: 'உருளைக்கிழங்குடன் அதிக எண்ணெயில் சமைத்த முட்டை.',
      modifiedMethod_en: 'Prepare as a soft podimas with lots of shallots, curry leaves, and cracked pepper. Pairs brilliantly with 1/2 cup rice or 1 ragi dosa.',
      modifiedMethod_ta: 'சின்ன வெங்காயம், மிளகு சேர்த்து சாஃப்ட் பொடிமாஸாக செய்து 1/2 கப் சாதம் அல்லது 1 கேழ்வரகு தோசையுடன் உண்ணவும்.',
      points_en: [
        'Complete essential amino acids for muscle preservation in seniors.',
        'Near-zero carbohydrates means zero glycemic impact.',
        'Keeps elders full for 4+ hours.'
      ],
      points_ta: [
        'முதியவர்களின் தசை வலிமைக்கு தேவையான அத்தியாவசிய புரதம்.',
        'மாவுச்சத்து இல்லாததால் சர்க்கரை எகிறாது.',
        '4 மணி நேரத்திற்கு மேல் பசியை கட்டுப்படுத்தும்.'
      ],
      modifiedCarbs: 2.5,
      modifiedFiber: 0.5,
      modifiedProtein: 13.5
    }
  },

  // 24. Meen Kuzhambu (Fish Curry)
  {
    id: 'meen-kuzhambu',
    name_en: 'Village Style Meen Kuzhambu (Fish Curry)',
    name_ta: 'கிராமத்து மீன் குழம்பு',
    mealType: ['lunch'],
    dishType: 'protein',
    ingredients: ['300g sea fish / vanjaram or sankara sliced', '15 shallots', '10 garlic cloves', '2 tomatoes', 'Small lemon sized tamarind extract', '2 tbsp kuzhambu chili powder', '1 tsp fenugreek seeds', 'Curry leaves & sesame oil'],
    ingredients_ta: ['300 கிராம் சங்கரா / வஞ்சிரம் மீன்', '15 சின்ன வெங்காயம்', '10 பூண்டு பற்கள்', '2 தக்காளி', 'புளிக்கரைசல்', 'குழம்பு மிளகாய்த்தூள்', 'வெந்தயம், நல்லெண்ணெய், கருவேப்பிலை'],
    steps: [
      'In a clay pot (manpaanai), heat sesame oil, pop fenugreek seeds, curry leaves, garlic, and shallots.',
      'Sauté tomatoes until soft, then stir in kuzhambu chili powder and tamarind extract.',
      'Simmer gravy for 10 minutes until oil floats on top.',
      'Gently slide in cleaned fish pieces and simmer on low heat for 5 minutes without stirring aggressively.'
    ],
    steps_ta: [
      'மண் சட்டியில் நல்லெண்ணெய் ஊற்றி வெந்தயம், பூண்டு, சின்ன வெங்காயம், கருவேப்பிலை வதக்கவும்.',
      'தக்காளி, குழம்புத்தூள், புளிக்கரைசல் சேர்த்து எண்ணெய் பிரியும் வரை கொதிக்க விடவும்.',
      'மீன் துண்டுகளை மெதுவாக போட்டு 5 நிமிடங்கள் மிதமான தீயில் வேகவைத்து இறக்கவும்.'
    ],
    tags: ['Lunch', 'Protein', 'Side dish'],
    approximateCarbs: 8,
    approximateFiber: 2.0,
    protein: 22.0,
    portion: '1 piece fish + curry (~160g)',
    isRiceBased: false,
    imageEmoji: '🐟',
    modificationSuggestions: {
      title_en: 'Omega-3 Rich Coastal Nutrition',
      title_ta: 'ஒமேகா-3 நிறைந்த கடல் சத்து',
      originalMethod_en: 'Eating excess rice mixed with large quantities of gravy.',
      originalMethod_ta: 'அதிக சாதத்தில் அதிக குழம்பு ஊற்றி பிசைந்து உண்பது.',
      modifiedMethod_en: 'Elder plate: Take 2 generous pieces of fish for protein; use gravy sparingly over 1/2 cup rice; complement with cabbage poriyal.',
      modifiedMethod_ta: 'முதியவருக்கு 2 துண்டு மீன் வழங்கி, குழம்பை மிதமாக சாதத்தில் ஊற்றி முட்டைகோஸ் பொரியலுடன் உண்ணவும்.',
      points_en: [
        'Rich in Omega-3 fatty acids that protect cardiovascular vessels in diabetes.',
        'Fenugreek and garlic in the base regulate glucose and lipids.',
        'Tastes even better the next day!'
      ],
      points_ta: [
        'ஒமேகா-3 கொழுப்பு அமிலங்கள் இதய நாளங்களை பாதுகாக்கின்றன.',
        'குழம்பில் உள்ள வெந்தயமும் பூண்டும் ரத்த சர்க்கரையை கட்டுப்படுத்துகின்றன.',
        'மறுநாள் சாப்பிட்டால் இன்னும் சுவையாக இருக்கும்!'
      ],
      modifiedCarbs: 6,
      modifiedFiber: 2.2,
      modifiedProtein: 23.0
    }
  },

  // 25. Country Chicken Chukka
  {
    id: 'naatu-kozhi-chukka',
    name_en: 'Naatu Kozhi Chukka (Country Chicken Stir-Fry)',
    name_ta: 'நாட்டுக்கோழி சுக்கா',
    mealType: ['lunch', 'dinner'],
    dishType: 'protein',
    ingredients: ['250g country chicken (naatu kozhi) cut small', '15 shallots chopped', '1 tbsp ginger-garlic paste', '1 tsp crushed pepper', '1 tsp fennel seeds', '1/2 tsp turmeric', 'Curry leaves & sesame oil'],
    ingredients_ta: ['250 கிராம் நாட்டுக்கோழி', '15 சின்ன வெங்காயம்', 'இஞ்சி பூண்டு விழுது', 'மிளகுத்தூள், சோம்பு, மஞ்சள்தூள்', 'கருவேப்பிலை, நல்லெண்ணெய்'],
    steps: [
      'Pressure cook country chicken with turmeric, salt, half the ginger-garlic paste, and 1/2 cup water for 4 whistles.',
      'In an iron skillet, heat 1 tsp sesame oil, splutter fennel and curry leaves.',
      'Sauté shallots and remaining ginger-garlic paste until brown.',
      'Add cooked chicken with its broth and roast down until dry and coated in pepper.'
    ],
    steps_ta: [
      'நாட்டுக்கோழியை மஞ்சள்தூள், உப்பு, இஞ்சி பூண்டு சேர்த்து குக்கரில் 4 விசில் விடவும்.',
      'இரும்பு கடாயில் நல்லெண்ணெய், சோம்பு, கருவேப்பிலை, வெங்காயம் வதக்கவும்.',
      'வெந்த கோழியை தண்ணீருடன் சேர்த்து தண்ணீர் வற்றி சுருள வதக்கி மிளகுத்தூள் தூவி இறக்கவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Protein'],
    approximateCarbs: 4,
    approximateFiber: 1.2,
    protein: 24.0,
    portion: '1 katori (~130g)',
    isRiceBased: false,
    imageEmoji: '🍗',
    modificationSuggestions: {
      title_en: 'Lean Protein with Black Pepper Warmth',
      title_ta: 'மிளகு மணக்கும் கொழுப்பில்லா புரதம்',
      originalMethod_en: 'Deep-fried broiler chicken with synthetic colors.',
      originalMethod_ta: 'பிராய்லர் கோழியை செயற்கை நிறமூட்டி எண்ணெயில் பொரிப்பது.',
      modifiedMethod_en: 'Use country chicken cooked in its own natural broth with crushed black pepper and shallots. No deep frying.',
      modifiedMethod_ta: 'நாட்டுக்கோழியை எண்ணெயில் பொரிக்காமல் அதன் சொந்த சாற்றில் மிளகு சேர்த்து சுருள வதக்கவும்.',
      points_en: [
        'Country chicken is leaner with firmer protein texture.',
        'High pepper and turmeric aid anti-inflammatory defense.',
        'Pair with 1/2 cup brown rice and a side of spinach kootu.'
      ],
      points_ta: [
        'நாட்டுக்கோழியில் கெட்ட கொழுப்பு குறைவு, தரமான புரதம் அதிகம்.',
        'மிளகு மற்றும் மஞ்சள் வீக்கத்தை குறைக்கும் மருத்துவ குணம் கொண்டது.',
        'கைக்குத்தல் சாதம் மற்றும் கீரை கூட்டுடன் அருமையாக பொருந்தும்.'
      ],
      modifiedCarbs: 3,
      modifiedFiber: 1.2,
      modifiedProtein: 24.5
    }
  },

  // 26. Kothavarangai Poriyal (Cluster Beans)
  {
    id: 'kothavarangai-poriyal',
    name_en: 'Kothavarangai Poriyal (Cluster Beans Stir-Fry)',
    name_ta: 'கொத்தவரங்காய் பொரியல்',
    mealType: ['lunch', 'dinner'],
    dishType: 'side',
    ingredients: ['200g cluster beans chopped small', '1/2 tsp mustard seeds', '1 dry red chili', '1/4 tsp hing', '1/4 tsp turmeric', '1 tbsp grated coconut', 'Salt to taste'],
    ingredients_ta: ['200 கிராம் நறுக்கிய கொத்தவரங்காய்', 'கடுகு, வரமிளகாய்', 'பெருங்காயம், மஞ்சள்தூள்', 'தேங்காய் துருவல், உப்பு'],
    steps: [
      'Boil chopped cluster beans with turmeric and salt until tender; drain.',
      'Temper mustard, dry chili, and hing in half teaspoon oil.',
      'Add boiled beans, sauté for 2 minutes, and top with fresh coconut.'
    ],
    steps_ta: [
      'கொத்தவரங்காயை உப்பு, மஞ்சள்தூள் சேர்த்து வேகவைத்து வடிக்கவும்.',
      'எண்ணெயில் கடுகு, மிளகாய், பெருங்காயம் தாளிக்கவும்.',
      'காயை சேர்த்து 2 நிமிடங்கள் வதக்கி தேங்காய் தூவி இறக்கவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Vegetable', 'Side dish', 'High-fiber'],
    approximateCarbs: 7,
    approximateFiber: 5.8,
    protein: 2.6,
    portion: '1 katori (~100g)',
    isRiceBased: false,
    imageEmoji: '🌿',
    modificationSuggestions: {
      title_en: 'Celebrated Traditional Diabetes Vegetable',
      title_ta: 'நீரிழிவுக்கு பாரம்பரியமாக போற்றப்படும் காய்',
      originalMethod_en: 'Often skipped by younger family members due to mild bitterness.',
      originalMethod_ta: 'லேசான கசப்பு காரணமாக சிலர் தவிர்ப்பதுண்டு.',
      modifiedMethod_en: 'A cornerstone vegetable for Tamil elders. Boil with a pinch of tamarind or curd to balance bitterness.',
      modifiedMethod_ta: 'முதியவர்களுக்கு மிக உகந்தது. சிறிதளவு புளி சேர்த்து வேகவைத்தால் கசப்பு தெரியாது.',
      points_en: [
        'Contains guar gum, a natural soluble fiber that slows postprandial glucose surges.',
        'Significantly lowers blood cholesterol and improves gut motility.',
        'Encourage elder to consume a full 1.5 katori serving.'
      ],
      points_ta: [
        'இதில் உள்ள குவார் கம் நார்ச்சத்து சர்க்கரை உயர்வை தடுத்து நிறுத்துகிறது.',
        'கொழுப்பை குறைத்து குடல் இயக்கத்தை சீராக்குகிறது.',
        'முதியவர்கள் தாராளமாக 1.5 கிண்ணம் சாப்பிடலாம்.'
      ],
      modifiedCarbs: 6,
      modifiedFiber: 6.2,
      modifiedProtein: 2.8
    }
  },

  // 27. Vazhaipoo Poriyal (Banana Blossom)
  {
    id: 'vazhaipoo-poriyal',
    name_en: 'Vazhaipoo Poriyal (Banana Blossom & Moong Dal)',
    name_ta: 'வாழைப்பூ உசிலி / பொரியல்',
    mealType: ['lunch'],
    dishType: 'side',
    ingredients: ['1 small banana flower cleaned and finely chopped in buttermilk water', '2 tbsp soaked moong dal', '1/2 tsp mustard seeds', '1 green chili', 'Curry leaves & grated coconut'],
    ingredients_ta: ['1 சிறிய வாழைப்பூ நறுக்கியது (மோர் தண்ணீரில் போடவும்)', '2 மேஜைக்கரண்டி பாசிப்பருப்பு', 'கடுகு, பச்சை மிளகாய்', 'கருவேப்பிலை, தேங்காய் துருவல்'],
    steps: [
      'Clean florets, removing central pistil, and chop into thin bits soaking in diluted buttermilk to prevent darkening.',
      'Boil with moong dal, turmeric, and salt until cooked soft.',
      'Temper with mustard, curry leaves, and green chili; stir together with grated coconut.'
    ],
    steps_ta: [
      'வாழைப்பூ நரம்பை நீக்கி பொடியாக நறுக்கி மோர் தண்ணீரில் போடவும்.',
      'பாசிப்பருப்பு, உப்பு, மஞ்சள்தூள் சேர்த்து வேகவைக்கவும்.',
      'கடுகு, கருவேப்பிலை, மிளகாய் தாளித்து தேங்காய் துருவல் சேர்த்து கிளறவும்.'
    ],
    tags: ['Lunch', 'Vegetable', 'Side dish', 'High-fiber'],
    approximateCarbs: 10,
    approximateFiber: 6.5,
    protein: 3.5,
    portion: '1 katori (~110g)',
    isRiceBased: false,
    imageEmoji: '🌺',
    modificationSuggestions: {
      title_en: 'Siddha Medicine Powerhouse for Blood Sugar',
      title_ta: 'சித்த மருத்துவத்தில் போற்றப்படும் வாழைப்பூ',
      originalMethod_en: 'Often made into deep fried vazhaipoo vadai.',
      originalMethod_ta: 'வாழைப்பூவை வடையாக எண்ணெயில் பொரிப்பது.',
      modifiedMethod_en: 'Steam with moong dal as an usili or poriyal without deep-frying.',
      modifiedMethod_ta: 'எண்ணெயில் வடையாக சுடாமல் பாசிப்பருப்புடன் உசிலியாக ஆவியில் வேகவைத்து சமைக்கவும்.',
      points_en: [
        'Helps reduce insulin resistance naturally according to traditional lore.',
        'High astringent property calms digestive inflammation.',
        'Ideal weekly regular on the family thali.'
      ],
      points_ta: [
        'பாரம்பரிய முறைப்படி இன்சுலின் ஏற்புத்தன்மையை அதிகரிக்க உதவுகிறது.',
        'வயிற்று புண்களை ஆற்றும் துவர்ப்பு சுவை கொண்டது.',
        'வாரத்திற்கு ஒரு முறை குடும்ப தாளி தட்டில் இடம்பெற வேண்டும்.'
      ],
      modifiedCarbs: 8.5,
      modifiedFiber: 7.0,
      modifiedProtein: 4.0
    }
  },

  // 28. Pavakkai Varuval (Bitter Gourd Stir-Fry)
  {
    id: 'pavakkai-varuval',
    name_en: 'Pavakkai Poriyal / Varuval (Bitter Gourd)',
    name_ta: 'பாகற்காய் வறுவல் / பொரியல்',
    mealType: ['lunch'],
    dishType: 'side',
    ingredients: ['2 bitter gourds thinly sliced into coins', '1 chopped onion', '1/4 tsp turmeric', '1/2 tsp chili powder', '1/2 tsp coriander powder', '1 tsp gingelly oil', '1 tsp tamarind juice (optional to soften bitterness)'],
    ingredients_ta: ['2 பாகற்காய் வட்டமாக நறுக்கியது', '1 வெங்காயம்', 'மஞ்சள்தூள், மிளகாய்த்தூள், மல்லித்தூள்', 'நல்லெண்ணெய், புளிச்சாறு'],
    steps: [
      'Toss sliced bitter gourd with salt and turmeric; let rest 10 minutes then squeeze out excess bitter water.',
      'Heat gingelly oil in an iron skillet; sauté onions until brown.',
      'Add bitter gourd coins and slow-roast on low flame for 12-15 minutes until dark and crispy-tender.',
      'Add spices and tamarind drop; roast 2 more minutes.'
    ],
    steps_ta: [
      'பாகற்காயை உப்பு, மஞ்சள்தூள் பிசறி 10 நிமிடம் வைத்து தண்ணீரை பிழியவும்.',
      'இரும்பு கடாயில் நல்லெண்ணெய் ஊற்றி வெங்காயம் வதக்கி பாகற்காய் சேர்க்கவும்.',
      'சிம்மில் 12-15 நிமிடங்கள் சுருள வறுக்கவும்.',
      'மசாலா தூள்கள், சிறிது புளிச்சாறு சேர்த்து கிளறி இறக்கவும்.'
    ],
    tags: ['Lunch', 'Vegetable', 'Side dish'],
    approximateCarbs: 6,
    approximateFiber: 3.5,
    protein: 1.8,
    portion: '1 katori (~90g)',
    isRiceBased: false,
    imageEmoji: '🥒',
    modificationSuggestions: {
      title_en: 'Charantin & Polypeptide-p Compounds',
      title_ta: 'இயற்கை இன்சுலின் போன்ற பலன்கள்',
      originalMethod_en: 'Deep-fried chips dipped in cornstarch or maida.',
      originalMethod_ta: 'மைதா, சோள மாவு தடவி எண்ணெயில் பொரிப்பது.',
      modifiedMethod_en: 'Pan-roast in an iron tawa with just 1 tsp gingelly oil and onions; zero refined flour batter.',
      modifiedMethod_ta: 'மைதா கலக்காமல் இரும்பு கடாயில் நல்லெண்ணெய் விட்டு வெங்காயத்துடன் சுருள வதக்கவும்.',
      points_en: [
        'Contains charantin and polypeptide-p, plant compounds with documented insulin-mimetic properties.',
        'Do not peel skin or remove all seeds, as they hold maximum bioactives.',
        'Elder portion: 1 full katori.'
      ],
      points_ta: [
        'இதில் உள்ள தாவர சத்துக்கள் ரத்த சர்க்கரையை குறைக்க உதவுகின்றன.',
        'தோலை முழுமையாக சீவாமல் சமைப்பது அதிக சத்தை தரும்.',
        'முதியவர்களுக்கு 1 கிண்ணம் பரிமாறலாம்.'
      ],
      modifiedCarbs: 5,
      modifiedFiber: 4.0,
      modifiedProtein: 2.0
    }
  },

  // 29. Paruppu Urundai Kuzhambu
  {
    id: 'paruppu-urundai-kuzhambu',
    name_en: 'Paruppu Urundai Kuzhambu (Steamed Lentil Dumpling Curry)',
    name_ta: 'பருப்பு உருண்டை குழம்பு',
    mealType: ['lunch', 'dinner'],
    dishType: 'protein',
    ingredients: ['1/2 cup toor dal + 1/4 cup chana dal soaked', 'Fennel seeds, dry chili, hing, curry leaves', 'Tamarind extract', '15 shallots & 10 garlic cloves', 'Kuzhambu powder'],
    ingredients_ta: ['1/2 கப் துவரம்பருப்பு + 1/4 கப் கடலைப்பருப்பு', 'சோம்பு, வரமிளகாய், பெருங்காயம்', 'புளிக்கரைசல், சின்ன வெங்காயம், பூண்டு', 'குழம்புத்தூள்'],
    steps: [
      'Grind soaked dals coarsely with dry chili, fennel, hing, and salt. Shape into lime-sized balls.',
      'Steam the lentil balls in an idli pot for 8 minutes (healthier than boiling raw in gravy).',
      'Prepare a tangy tamarind-shallot-garlic gravy in a clay pot.',
      'Drop steamed dumplings into the simmering gravy for 3 minutes before taking off flame.'
    ],
    steps_ta: [
      'பருப்புகளை மிளகாய், சோம்பு, பெருங்காயம் சேர்த்து கொரகொரப்பாக அரைத்து உருண்டைகளாக உருட்டவும்.',
      'இட்லி பாத்திரத்தில் 8 நிமிடங்கள் ஆவியில் வேகவைக்கவும் (குழம்பில் நேரே போடுவதை விட இது லேசானது).',
      'மண் சட்டியில் புளி, சின்ன வெங்காயம், பூண்டு சேர்த்து குழம்பு வைக்கவும்.',
      'வெந்த பருப்பு உருண்டைகளை குழம்பில் போட்டு 3 நிமிடங்கள் கொதிக்க வைத்து இறக்கவும்.'
    ],
    tags: ['Lunch', 'Dinner', 'Protein', 'Side dish'],
    approximateCarbs: 24,
    approximateFiber: 6.0,
    protein: 11.5,
    portion: '2 dumplings with gravy (~160g)',
    isRiceBased: false,
    imageEmoji: '🧆',
    modificationSuggestions: {
      title_en: 'Steamed Protein Powerhouse',
      title_ta: 'ஆவியில் வெந்த சத்தான பருப்பு உருண்டை',
      originalMethod_en: 'Deep-frying dumplings before dropping in gravy.',
      originalMethod_ta: 'உருண்டைகளை எண்ணெயில் பொரித்து குழம்பில் போடுவது.',
      modifiedMethod_en: 'Steam the dumplings like idlis. This cuts oil to near zero while retaining fluffy protein texture.',
      modifiedMethod_ta: 'இட்லி போல ஆவியில் வேகவைத்து சேர்க்கும்போது எண்ணெய் இல்லாமல் மிருதுவாக இருக்கும்.',
      points_en: [
        'Delivers 11.5g of plant-based protein from toor and chana dal.',
        'Provides sustained satiety so less rice is needed.',
        'Elder portion: 2 dumplings with 1/2 cup rice.'
      ],
      points_ta: [
        '11.5 கிராம் தாவர புரதத்தை உடலுக்கு அள்ளி தருகிறது.',
        'நீண்ட நேரம் வயிறு நிறைந்திருப்பதால் குறைந்த சாதமே போதுமானது.',
        'முதியவருக்கு 2 உருண்டைகள் மற்றும் 1/2 கப் சாதம் அருமையான உணவு.'
      ],
      modifiedCarbs: 20,
      modifiedFiber: 6.8,
      modifiedProtein: 12.0
    }
  },

  // 30. Kathirikai Gothsu
  {
    id: 'kathirikai-gothsu',
    name_en: 'Chidambaram Kathirikai Gothsu (Mashed Brinjal Stew)',
    name_ta: 'சிதம்பரம் கத்திரிக்காய் கொத்சு',
    mealType: ['breakfast', 'dinner'],
    dishType: 'side',
    ingredients: ['4 country brinjals (purple or green) roasted or boiled', '10 shallots', '2 green chilies slit', 'Small tamarind extract', '1/2 tsp turmeric', 'Mustard seeds, urad dal, curry leaves', 'Fresh coriander'],
    ingredients_ta: ['4 நாட்டு கத்திரிக்காய்', '10 சின்ன வெங்காயம்', 'பச்சை மிளகாய்', 'புளிக்கரைசல், மஞ்சள்தூள்', 'கடுகு, உளுந்து, கருவேப்பிலை, கொத்தமல்லி'],
    steps: [
      'Roast brinjals directly on flame until charred; peel skin and mash thoroughly with a wooden mathu.',
      'Sauté shallots and green chilies in 1 tsp sesame oil; add mashed brinjal, tamarind extract, and turmeric.',
      'Simmer for 5 minutes with water to form a soupy side dish.',
      'Finish with mustard and curry leaf tempering.'
    ],
    steps_ta: [
      'கத்திரிக்காயை தீயில் சுட்டு தோலை உரித்து மத்தினால் நன்கு மசிக்கவும்.',
      'நல்லெண்ணெயில் வெங்காயம், மிளகாய் வதக்கி மசித்த கத்திரிக்காய், புளித்தண்ணீர் சேர்க்கவும்.',
      '5 நிமிடங்கள் கொதிக்க விட்டு கடுகு, கருவேப்பிலை தாளித்து இறக்கவும்.'
    ],
    tags: ['Breakfast', 'Dinner', 'Vegetable', 'Side dish', 'Quick'],
    approximateCarbs: 8,
    approximateFiber: 3.8,
    protein: 2.0,
    portion: '1 katori (~120g)',
    isRiceBased: false,
    imageEmoji: '🍆',
    modificationSuggestions: {
      title_en: 'Perfect Low-Carb Accompaniment for Pongal & Idli',
      title_ta: 'பொங்கல் & இட்லிக்கு உகந்த சர்க்கரை-குறைந்த கூட்டு',
      originalMethod_en: 'Serving carb-rich idlis only with coconut chutney.',
      originalMethod_ta: 'இட்லியை வெறும் தேங்காய் சட்னியுடன் மட்டுமே உண்பது.',
      modifiedMethod_en: 'Pair Pongal or Idli with this generous fiber-dense brinjal gothsu instead of coconut chutney.',
      modifiedMethod_ta: 'தேங்காய் சட்னிக்கு பதிலாக இந்த நார்ச்சத்து நிறைந்த கத்திரிக்காய் கொத்சுடன் பரிமாறவும்.',
      points_en: [
        'Soluble pectin fiber in eggplants curbs rapid carbohydrate digestion.',
        'Fire-roasting imparts deep smoky flavor without added calories.',
        'Elder portion: 1.5 katoris with 2 idlis or 1/2 cup pongal.'
      ],
      points_ta: [
        'கத்திரிக்காயில் உள்ள பெக்டின் நார்ச்சத்து மாவுச்சத்து செரிமானத்தை தாமதப்படுத்துகிறது.',
        'சுட்டு சமைப்பதால் எண்ணெய் இன்றி அருமையான மணம் கிடைக்கும்.',
        'முதியவருக்கு 2 இட்லியுடன் 1.5 கிண்ணம் கொத்சு சிறந்த இணை.'
      ],
      modifiedCarbs: 7,
      modifiedFiber: 4.2,
      modifiedProtein: 2.2
    }
  },

  // 31. Set Curd / Mor (Buttermilk)
  {
    id: 'mor-buttermilk',
    name_en: 'Neer Mor (Spiced Buttermilk)',
    name_ta: 'தாளித்த நீர்மோர்',
    mealType: ['lunch', 'tiffin'],
    dishType: 'rasam_curd',
    ingredients: ['1/2 cup fresh homemade curd', '1.5 cups chilled water', '1/2 inch crushed ginger', '1 green chili slit', '1/4 tsp asafoetida (hing)', 'Curry leaves & finely chopped coriander', 'Salt to taste'],
    ingredients_ta: ['1/2 கப் புளிக்காத தயிர்', '1.5 கப் குளிர்ந்த தண்ணீர்', 'இஞ்சி, பச்சை மிளகாய்', 'பெருங்காயம், கருவேப்பிலை, கொத்தமல்லி', 'உப்பு'],
    steps: [
      'Churn fresh curd with water using a traditional wooden mathu until smooth.',
      'Add crushed ginger, curry leaves, coriander, hing, and sea salt.',
      'Let sit for 10 minutes for flavors to infuse.',
      'Serve chilled at the end of lunch or as a refreshing mid-afternoon cooler.'
    ],
    steps_ta: [
      'தயிரில் தண்ணீர் சேர்த்து மத்தினால் நன்கு கடையவும்.',
      'நசுக்கிய இஞ்சி, கருவேப்பிலை, கொத்தமல்லி, பெருங்காயம், உப்பு சேர்க்கவும்.',
      '10 நிமிடங்கள் ஊறவைத்து மதிய உணவின் முடிவில் அல்லது மாலையில் அருந்தவும்.'
    ],
    tags: ['Lunch', 'Snack', 'Quick', 'Side dish'],
    approximateCarbs: 4,
    approximateFiber: 0.2,
    protein: 3.5,
    portion: '1 large tumbler (~200ml)',
    isRiceBased: false,
    imageEmoji: '🥛',
    modificationSuggestions: {
      title_en: 'Probiotic Post-Meal Blood Sugar Stabilizer',
      title_ta: 'உணவுக்குப் பின் சர்க்கரையை சீராக்கும் மோர்',
      originalMethod_en: 'Drinking sweet lassi or sugary fruit drinks.',
      originalMethod_ta: 'சர்க்கரை கலந்த பழச்சாறுகள் அல்லது குளிர்பானங்கள் குடிப்பது.',
      modifiedMethod_en: 'Spiced neer mor with ginger and hing at the end of lunch.',
      modifiedMethod_ta: 'மதிய உணவின் முடிவில் இஞ்சி, பெருங்காயம் கலந்த நீர்மோர் அருந்துதல்.',
      points_en: [
        'Diluted cultured whey hydrates and supports insulin signaling.',
        'Ginger and asafoetida prevent post-lunch bloating.',
        'Virtually zero glycemic load.'
      ],
      points_ta: [
        'குடலுக்கு நன்மை செய்யும் பாக்டீரியாக்களை பெருக்கி சர்க்கரையை சீராக்குகிறது.',
        'இஞ்சி மற்றும் பெருங்காயம் வாயு மற்றும் வயிறு உப்பசத்தை நீக்குகிறது.',
        'சர்க்கரை அளவை உயர்த்தாத அமிர்தம் போன்ற பானம்.'
      ],
      modifiedCarbs: 3.5,
      modifiedFiber: 0.2,
      modifiedProtein: 3.5
    }
  },

  // 32. Sundakkai Vatha Kuzhambu
  {
    id: 'sundakkai-vatha-kuzhambu',
    name_en: 'Sundakkai Vatha Kuzhambu (Turkey Berry Tangy Stew)',
    name_ta: 'சுண்டைக்காய் வத்தக்குழம்பு',
    mealType: ['lunch'],
    dishType: 'side',
    ingredients: ['2 tbsp sun-dried turkey berry (sundakkai vathal)', '15 shallots', '8 garlic cloves', 'Lemon sized tamarind soaked', '2 tbsp sambar/vatha kuzhambu powder', '1 tsp mustard seeds', '1/4 tsp fenugreek seeds', '2 tbsp gingelly oil'],
    ingredients_ta: ['2 மேஜைக்கரண்டி சுண்டைக்காய் வத்தல்', '15 சின்ன வெங்காயம்', '8 பூண்டு பற்கள்', 'புளிக்கரைசல், வத்தக்குழம்பு பொடி', 'கடுகு, வெந்தயம், நல்லெண்ணெய்'],
    steps: [
      'Fry sundakkai vathal in 1 tbsp gingelly oil until crisp and dark; keep aside.',
      'In the same pan, temper mustard, fenugreek, curry leaves; sauté shallots and garlic.',
      'Add tamarind extract, kuzhambu powder, and salt; simmer until oil floats on top.',
      'Add fried sundakkai vathal in the last 2 minutes and turn off heat.'
    ],
    steps_ta: [
      'சுண்டைக்காய் வத்தலை நல்லெண்ணெயில் வறுத்து தனியே வைக்கவும்.',
      'அதே எண்ணெயில் கடுகு, வெந்தயம், பூண்டு, வெங்காயம் வதக்கவும்.',
      'புளிக்கரைசல், மசாலா பொடி, உப்பு சேர்த்து எண்ணெய் பிரியும் வரை கொதிக்க விடவும்.',
      'வறுத்த சுண்டைக்காயை கடைசியில் சேர்த்து இறக்கவும்.'
    ],
    tags: ['Lunch', 'Side dish', 'Vegetable'],
    approximateCarbs: 10,
    approximateFiber: 4.5,
    protein: 2.2,
    portion: '1 katori (~100g)',
    isRiceBased: false,
    imageEmoji: '🫒',
    modificationSuggestions: {
      title_en: 'Turkey Berry Medicinal Benefits',
      title_ta: 'சுண்டைக்காயின் மருத்துவ மகத்துவம்',
      originalMethod_en: 'Excessive sesame oil and salt.',
      originalMethod_ta: 'அதிக எண்ணெய் மற்றும் உப்பு.',
      modifiedMethod_en: 'Limit oil to 1 tablespoon; pair with generous cabbage poriyal or keerai masiyal.',
      modifiedMethod_ta: 'எண்ணெயை குறைத்து சமைத்து, கீரை மசியல் அல்லது முட்டைகோஸ் பொரியலுடன் சேர்த்து உண்ணவும்.',
      points_en: [
        'Turkey berry (sundakkai) is renowned in Tamil medicine for clearing intestinal parasites and moderating sugars.',
        'High in iron and antioxidant phenolics.',
        'Elder portion: 2 tablespoons over rice, paired with 1 full cup vegetable.'
      ],
      points_ta: [
        'சுண்டைக்காய் குடல் பூச்சிகளை நீக்கி ரத்த சர்க்கரையை கட்டுப்படுத்தும் ஆற்றல் கொண்டது.',
        'இரும்புச்சத்து மற்றும் ஆன்டி-ஆக்ஸிடன்ட்கள் நிறைந்தது.',
        'சிறிதளவு குழம்புடன் ஒரு பெரிய கிண்ணம் காய்கறி பொரியல் சேர்த்து உண்ணவும்.'
      ],
      modifiedCarbs: 8,
      modifiedFiber: 4.8,
      modifiedProtein: 2.5
    }
  }
];
