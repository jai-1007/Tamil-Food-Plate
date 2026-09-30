import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  ShieldAlert, 
  RefreshCw, 
  Lightbulb,
  MessageSquare
} from 'lucide-react';
import { Language, Recipe } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface FoodGuideChatProps {
  language: Language;
  recipes: Recipe[];
}

export const FoodGuideChat: React.FC<FoodGuideChatProps> = ({ language, recipes }) => {
  const t = TRANSLATIONS[language];

  const initialWelcome = language === 'ta'
    ? 'வணக்கம்! நான் உங்கள் தமிழ் உணவு வழிகாட்டி (Tamil Food Guide). தமிழ் சமையல், காய்கறி கலவைகள், அல்லது முதியவர்களுக்கான சத்தான உணவு மாற்றங்கள் பற்றி எதை வேண்டுமானாலும் கேளுங்கள்! (மருத்துவ ஆலோசனைக்கு உங்கள் மருத்துவரை அணுகவும்).'
    : 'Vanakkam! I am your Tamil Food Guide. Ask me anything about traditional Tamil recipes, balanced thali combinations, or diabetes-friendly portion adjustments! (Always follow your doctor’s direct advice).';

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: initialWelcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Send message to server-side endpoint with recipe context
      const sampleRecipes = recipes.slice(0, 8).map((r) => ({
        name_en: r.name_en,
        name_ta: r.name_ta,
        carbs: r.approximateCarbs,
        fiber: r.approximateFiber,
        dishType: r.dishType,
        modification: r.modificationSuggestions.modifiedMethod_en,
      }));

      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          language,
          recipeContext: sampleRecipes,
        }),
      });

      const data = await res.json();
      const replyText = data.reply || (language === 'ta' ? 'மன்னிக்கவும், பதில் கிடைக்கவில்லை.' : 'Sorry, I could not generate an answer.');

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('AI chat failed:', err);
      const fallbackReply = language === 'ta'
        ? 'மன்னிக்கவும்! AI சேவையகத்தை தொடர்புகொள்ள முடியவில்லை. இருப்பினும், எங்கள் செயலியில் உள்ள 30+ பாரம்பரிய சமையல் குறிப்புகளையும் சாத அளவு வழிகாட்டியையும் நீங்கள் தடையின்றி பயன்படுத்தலாம்.'
        : 'Sorry, could not connect to Tamil Food Guide right now. You can continue browsing the 30+ authentic Tamil recipes and the Rice Portion Adjuster in the app!';

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: 'assistant',
          text: fallbackReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const samplePrompts = [
    { label: t.q1, text: t.q1 },
    { label: t.q2, text: t.q2 },
    { label: t.q3, text: t.q3 },
    { label: t.q4, text: t.q4 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col h-[650px] max-h-[80vh]">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white font-bold">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="font-extrabold text-base font-sans">
                {t.foodGuideTitle}
              </h2>
              <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full border border-white/25">
                AI Guide
              </span>
            </div>
            <p className="text-xs text-amber-100 font-medium">
              {t.foodGuideSubtitle}
            </p>
          </div>
        </div>

        {/* Safety badge */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] bg-white/15 px-2.5 py-1 rounded-lg border border-white/20">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-200" />
          <span>General Guidance Only</span>
        </div>
      </div>

      {/* Safety Notice Strip */}
      <div className="px-4 py-2 bg-amber-50 border-b border-amber-200 text-[11px] text-amber-950 flex items-center justify-between">
        <span className="truncate">{t.disclaimerShort}</span>
        <button
          onClick={() => setMessages([{
            id: 'welcome-reset',
            sender: 'assistant',
            text: initialWelcome,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          }])}
          className="text-amber-800 hover:text-amber-950 font-bold shrink-0 ml-2 flex items-center gap-1"
          title="Reset chat"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-stone-50/50">
        {messages.map((m) => {
          const isBot = m.sender === 'assistant';
          return (
            <div
              key={m.id}
              className={`flex gap-2.5 max-w-[85%] sm:max-w-[78%] ${
                isBot ? 'self-start' : 'self-end ml-auto flex-row-reverse'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  isBot
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-stone-800 text-white'
                }`}
              >
                {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>

              <div
                className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap shadow-xs ${
                  isBot
                    ? 'bg-white text-stone-900 border border-stone-200/90 rounded-tl-xs'
                    : 'bg-amber-600 text-white rounded-tr-xs font-medium'
                }`}
              >
                {m.text}
                <span
                  className={`block text-[10px] mt-1 text-right ${
                    isBot ? 'text-stone-400' : 'text-amber-100'
                  }`}
                >
                  {m.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 self-start bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-xs text-xs text-stone-500 shadow-xs">
            <Bot className="w-4 h-4 text-amber-600 animate-pulse" />
            <span className="font-medium animate-pulse">
              {language === 'ta' ? 'உணவு வழிகாட்டி யோசிக்கிறது...' : 'Tamil Food Guide is thinking...'}
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-2.5 bg-stone-100 border-t border-stone-200/80 overflow-x-auto scrollbar-none flex items-center gap-1.5">
        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider shrink-0 flex items-center gap-1 pl-1">
          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
        </span>
        {samplePrompts.map((sp, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(sp.text)}
            className="text-[11px] font-semibold px-2.5 py-1 bg-white hover:bg-stone-50 text-stone-700 hover:text-amber-800 border border-stone-300/80 rounded-full whitespace-nowrap transition-colors shadow-2xs"
          >
            {sp.label}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t.askFoodGuidePrompt}
          disabled={isLoading}
          className="flex-1 text-xs sm:text-sm font-medium px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="py-2.5 px-4 bg-amber-600 hover:bg-amber-700 disabled:bg-stone-300 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">{t.sendQuestion}</span>
        </button>
      </form>
    </div>
  );
};
