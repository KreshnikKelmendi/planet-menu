import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'sq', // ✅ Set Albanian as default language
    fallbackLng: 'sq', // ✅ Fallback to Albanian if missing translation
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;