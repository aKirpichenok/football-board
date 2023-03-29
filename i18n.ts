import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // ns: ['content'],
    // whitelist: ['en', 'ru'],
    interpolation: { escapeValue: false },
    debug: process.env.APP_STAND !== 'prod',
    fallbackLng: 'ru',
    defaultNS: 'content',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['queryString', 'cookie'],
    }
  });

export default i18n;
