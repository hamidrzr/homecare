import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  return (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj && obj[k], translations[language]) || key;
  };
};
