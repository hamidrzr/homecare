import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <motion.div 
      className="hero min-h-screen bg-base-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <motion.h1 
            className="text-5xl font-bold"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t.title}
          </motion.h1>
          <motion.p 
            className="py-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t.subtitle}
          </motion.p>
          <motion.button 
            className="btn btn-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {t.button}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
