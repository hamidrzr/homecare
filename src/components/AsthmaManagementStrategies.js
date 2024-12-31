import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';

const AsthmaManagementStrategies = () => {
  const { language } = useLanguage();
  const t = translations[language].management;

  return (
    <motion.section 
      id="management" 
      className="py-20 bg-base-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.strategies.map((strategy, index) => (
            <motion.div 
              key={index} 
              className="card bg-base-200 shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-body">
                <h3 className="card-title text-primary">{strategy.title}</h3>
                <p>{strategy.description}</p>
                <ul className="list-disc list-inside mt-2">
                  {strategy.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AsthmaManagementStrategies;