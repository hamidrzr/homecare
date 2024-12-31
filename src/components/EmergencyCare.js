import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';

const EmergencyCare = () => {
  const { language } = useLanguage();
  const t = translations[language].emergency;

  return (
    <motion.section 
      id="emergency" 
      className="py-20 bg-error text-error-content"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t.subtitle}</h3>
            <ul className="list-disc list-inside space-y-2">
              {t.symptoms.map((symptom, index) => (
                <motion.li 
                  key={index} 
                  className="text-lg"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {symptom}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t.actionTitle}</h3>
            <ol className="list-decimal list-inside space-y-2">
              {t.actions.map((action, index) => (
                <motion.li 
                  key={index} 
                  className="text-lg"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {action}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EmergencyCare;
