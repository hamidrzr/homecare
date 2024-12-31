import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <p>{t.copyright}</p>
        <p>{t.creators}</p>
      </div>
    </footer>
  );
};

export default Footer;
