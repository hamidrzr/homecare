import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-base-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t.title}</h2>
        <form className="max-w-lg mx-auto">
          <div className="form-control mb-4">
            <input type="text" placeholder={t.namePlaceholder} className="input input-bordered w-full" />
          </div>
          <div className="form-control mb-4">
            <input type="email" placeholder={t.emailPlaceholder} className="input input-bordered w-full" />
          </div>
          <div className="form-control mb-4">
            <textarea placeholder={t.messagePlaceholder} rows="4" className="textarea textarea-bordered w-full"></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="btn btn-primary w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.buttonText}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
