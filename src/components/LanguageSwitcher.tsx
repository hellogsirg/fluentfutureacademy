import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'zh', name: 'Mandarin', nativeName: '中文' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px]"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5 text-blue-900" />
        <span className="text-sm font-medium text-blue-900 hidden sm:inline">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown className={`w-4 h-4 text-blue-900 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors ${
                i18n.language === language.code ? 'bg-emerald-50' : ''
              }`}
            >
              <div className="flex flex-col items-start">
                <span className={`font-medium ${
                  i18n.language === language.code ? 'text-emerald-700' : 'text-gray-900'
                }`}>
                  {language.nativeName}
                </span>
                <span className="text-xs text-gray-500">{language.name}</span>
              </div>
              {i18n.language === language.code && (
                <Check className="w-5 h-5 text-emerald-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
