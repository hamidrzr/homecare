import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutAsthma from './components/AboutAsthma';
import AsthmaTypes from './components/AsthmaTypes';
import ManagementStrategies from './components/ManagementStrategies';
import HomeCare from './components/HomeCare';
import EmergencyCare from './components/EmergencyCare';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-base-100 min-h-screen">
        <Header>
          <ThemeToggle />
        </Header>
        <Hero />
        <AboutAsthma />
        <AsthmaTypes />
        <ManagementStrategies />
        <HomeCare />
        <EmergencyCare />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
