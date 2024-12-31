import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].header;
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed top-0 z-50">
      <div className="flex-1">
        <h1 className="text-xl font-bold">{t.title}</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {t.navItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button 
          onClick={toggleLanguage} 
          className="btn btn-primary ml-2"
        >
          {language === 'en' ? 'فارسی' : 'English'}
        </button>
      </div>
    </header>
  );
};

export default Header;
