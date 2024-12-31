import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';

const ManagementStrategies = () => {
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
         <h2 className="text-3xl font-bold text-center mb-8">{t.title}</h2>

         {/* Accordion for management strategies */}
         {t.strategies.map((strategy, index) => (
           <div key={index} className="collapse collapse-plus border border-base-300 rounded-box mt-4">
             <input type="checkbox" className="peer" />
             <div className="collapse-title text-xl font-medium">{strategy.title}</div>
             <div className="collapse-content">
               <p>{strategy.description}</p>
             </div>
           </div>
         ))}
         
       </div>
     </motion.section>
   );
};

export default ManagementStrategies;
