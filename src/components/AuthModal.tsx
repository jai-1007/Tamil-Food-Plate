import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Lock, UserCheck, Cloud, Database } from 'lucide-react';
import { Language, UserAuth } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { auth, hasValidConfig } from '../services/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';

interface AuthModalProps {
  userAuth: UserAuth;
  language: Language;
  onClose: () => void;
  onUpdateAuth: (auth: UserAuth) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  userAuth,
  language,
  onClose,
  onUpdateAuth,
}) => {
  const t = TRANSLATIONS[language];

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGuestMode = () => {
    onUpdateAuth({ isGuest: true });
    onClose();
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    if (hasValidConfig && auth) {
      try {
        if (isRegisterMode) {
          const cred = await createUserWithEmailAndPassword(auth, email, password);
          onUpdateAuth({ isGuest: false, uid: cred.user.uid, email: cred.user.email || email });
        } else {
          const cred = await signInWithEmailAndPassword(auth, email, password);
          onUpdateAuth({ isGuest: false, uid: cred.user.uid, email: cred.user.email || email });
        }
        onClose();
      } catch (err: any) {
        setErrorMsg(err?.message || 'Authentication error. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      // Offline simulated authentication for prototype
      setTimeout(() => {
        onUpdateAuth({
          isGuest: false,
          uid: `local-${Date.now()}`,
          email: email.trim(),
        });
        setLoading(false);
        onClose();
      }, 400);
    }
  };

  const handleSignOut = async () => {
    if (auth && !userAuth.isGuest) {
      try {
        await signOut(auth);
      } catch {
        // ignore
      }
    }
    onUpdateAuth({ isGuest: true });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full border border-stone-200 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="px-5 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-stone-900 font-sans">
                {userAuth.isGuest ? t.signIn : 'Account Profile'}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {userAuth.isGuest ? t.guestMode : (userAuth.email || 'Logged In')}
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
        <div className="p-5 sm:p-6 space-y-5">
          {/* Storage / Firebase Connection Status indicator */}
          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
            <Database className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold text-stone-900 block">
                {hasValidConfig ? t.firebaseStatusConnected : t.firebaseStatusLocal}
              </span>
              <span className="text-[11px] text-stone-500">
                {t.firebaseSetupNote}
              </span>
            </div>
          </div>

          {!userAuth.isGuest ? (
            /* Logged in state */
            <div className="space-y-4 text-center py-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-xl font-black">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs text-stone-500 block">Signed in as:</span>
                <span className="text-sm font-extrabold text-stone-900">{userAuth.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold rounded-xl text-xs border border-rose-200 transition-colors"
              >
                {t.signOut}
              </button>
            </div>
          ) : (
            /* Login Form */
            <form onSubmit={handleEmailAuth} className="space-y-4">
              {errorMsg && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="family@example.com"
                    className="w-full text-xs font-semibold pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    className="w-full text-xs font-semibold pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-amber-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 disabled:bg-stone-300 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                {loading
                  ? 'Processing...'
                  : isRegisterMode
                  ? 'Create Household Account'
                  : 'Sign In to Household'}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => setIsRegisterMode(!isRegisterMode)}
                  className="text-xs text-stone-600 hover:text-amber-800 font-semibold underline"
                >
                  {isRegisterMode
                    ? 'Already have an account? Sign In'
                    : 'New family? Create an account'}
                </button>
              </div>

              <div className="relative py-2 flex items-center justify-center">
                <div className="border-t border-stone-200 w-full" />
                <span className="bg-white px-2 text-[11px] text-stone-400 uppercase font-bold shrink-0">
                  OR
                </span>
              </div>

              <button
                type="button"
                onClick={handleGuestMode}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-all text-center border border-stone-200"
              >
                {language === 'ta' ? 'விருந்தினர் முறையில் தொடரவும் (ஆஃப்லைன்)' : 'Continue as Guest (No Login Required)'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
