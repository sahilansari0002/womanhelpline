import { useTranslation } from 'react-i18next';

interface LanguageToggleProps {
  isDarkMode: boolean;
}

export function LanguageToggle({ isDarkMode }: LanguageToggleProps) {
  const { i18n } = useTranslation();

  const isEnglish = i18n.language.startsWith('en');

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'gu' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
        isDarkMode
          ? 'bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-600/30'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
      }`}
      title={isEnglish ? 'Switch to Gujarati' : 'Switch to English'}
    >
      <span className="text-base">
        {isEnglish ? '🇮🇳' : '🇬🇧'}
      </span>
      <span className="font-semibold">
        {isEnglish ? 'ગુ' : 'EN'}
      </span>
    </button>
  );
}
