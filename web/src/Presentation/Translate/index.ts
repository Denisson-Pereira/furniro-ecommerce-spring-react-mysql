import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './Locales/En/translation.json';
import ptTranslation from './Locales/Pt/translation.json';
import esTranslation from './Locales/Es/translation.json';
import frTranslation from './Locales/Fr/translation.json';
import deTranslation from './Locales/De/translation.json';
import jaTranslation from './Locales/Ja/translation.json';
import zhTranslation from './Locales/Zh/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
  es: {
    translation: esTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  de: {
    translation: deTranslation,
  },
  ja: {
    translation: jaTranslation,
  },
  zh: {
    translation: zhTranslation,
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources, 
    debug: true,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, 
    },
  });

export default i18n;