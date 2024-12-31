import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';
import asthmaImage from './asthma-illustration.jpg'; // Make sure to add this image to your project

const AboutAsthma = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-base-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t.title}</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg mb-4">{t.description}</p>
            <p className="text-lg">{t.additionalInfo}</p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={asthmaImage} 
              alt="Asthma Illustration" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutAsthma;
