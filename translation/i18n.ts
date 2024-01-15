import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from 'i18next-react-native-language-detector';
import en from './en';
import ur from './ur';

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ur: {
        translation: ur,
      },
    },
    fallbackLng: 'ur',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;