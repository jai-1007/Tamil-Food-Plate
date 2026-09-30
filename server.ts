import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with User-Agent header as required by Gemini API skill
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// System instruction for Tamil Food Guide
const FOOD_GUIDE_SYSTEM_INSTRUCTION = `You are "Tamil Food Guide" (தமிழ் உணவு வழிகாட்டி), a warm, culturally knowledgeable nutrition companion for the "Tamil Family Plate Planner" application.

CORE MISSION:
Help South Indian Tamil families prepare delicious, traditional meals where the whole family can eat together, while elders or members managing diabetes receive safe, balanced, and culturally realistic portion guidance (extra vegetable poriyal/kootu, controlled rice portions, high fiber, protein like sundal/dal/egg/fish).

SAFETY & SCOPE RULES:
1. You are a health-support and meal-planning guide, NOT a medical doctor.
2. NEVER diagnose disease, prescribe medications, alter medication dosages, or give emergency clinical advice.
3. If the user asks about medical diagnosis or changes to medication, gently advise them to consult their doctor or certified dietitian.
4. All nutrition information and portion suggestions must be presented as approximate guidance.
5. Emphasize the core philosophy: "One Family Menu + Elder-Specific Portion Adjustment" (the family cooks one meal; elder adjusts portions such as 1/2 cup cooked rice + extra poriyal/sambar).

LANGUAGE RULES:
- If the user speaks in Tamil or Tanglish, answer in clear, respectful, warm Tamil (தமிழ்).
- If the user asks in English, answer in English with traditional Tamil dish names (e.g., Keerai Kootu, Vendakkai Poriyal, Rasam).
- Keep advice practical for home kitchens in Tamil Nadu and diaspora families (mention household terms like katori, cup, olakku, தாளிப்பு).`;

// Server endpoint for Gemini Chat
app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { message, language = 'en', recipeContext = [] } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (!ai) {
      // Graceful offline fallback when API key is not configured
      const fallbackResponse = language === 'ta'
        ? 'வணக்கம்! தற்போது AI சேவையகம் தயார் நிலையில் இல்லை. ஆனால் எங்கள் பயன்பாட்டில் உள்ள பாரம்பரிய சமையல் குறிப்புகளையும், சாத அளவு வழிகாட்டியையும் (Rice Portion Adjuster) நீங்கள் தொடர்ந்து பயன்படுத்தலாம். மருத்துவ ஆலோசனைக்கு உங்கள் மருத்துவரை அணுகவும்.'
        : 'Vanakkam! The AI server key is not configured at this moment. You can still explore all authentic Tamil recipes, original-vs-modified dishes, and the Rice Portion Adjuster in the app. For medical advice, please consult your doctor.';
      res.json({ reply: fallbackResponse });
      return;
    }

    const contextPrompt = recipeContext.length > 0
      ? `Application Recipe Database Context available:\n${JSON.stringify(recipeContext.slice(0, 5))}\n\n`
      : '';

    const prompt = `${contextPrompt}User Question: ${message}\nPreferred Response Language: ${language === 'ta' ? 'Tamil (தமிழ்)' : 'English'}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: FOOD_GUIDE_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || (language === 'ta' ? 'மன்னிக்கவும், பதிலை உருவாக்க முடியவில்லை.' : 'Sorry, could not generate a response.');
    res.json({ reply });
  } catch (error: any) {
    console.error('Error generating AI response:', error);
    const lang = req.body?.language || 'en';
    const errorMsg = lang === 'ta'
      ? 'உணவு வழிகாட்டியை தொடர்புகொள்வதில் சிறு சிக்கல் ஏற்பட்டது. தயவுசெய்து சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.'
      : 'Tamil Food Guide encountered an error. Please try again in a moment.';
    res.status(500).json({ reply: errorMsg, details: error?.message });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer();
