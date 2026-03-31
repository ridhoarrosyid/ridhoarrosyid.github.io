import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import idTranslation from "./locales/id.json";
import enTranslation from "./locales/en.json";

i18n
  // Mendeteksi bahasa browser pengguna (Otomatis ID atau EN)
  .use(LanguageDetector)
  // Menghubungkan i18n dengan React
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      id: { translation: idTranslation },
    },
    // Jika bahasa browser pengguna bukan 'id', otomatis gunakan 'en'
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React sudah aman dari XSS
    },
  });

export default i18n;
