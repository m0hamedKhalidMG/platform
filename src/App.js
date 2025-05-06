// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Manuals from './pages/Manuals';
import Podcasts from './pages/Podcasts';
import Maps from './pages/Maps';
import Surveys from './pages/Surveys';
import Interviews from './pages/Interviews';
import Infographics from './pages/Infographics';
import Reports from './pages/Reports';
import Statistics from './pages/Statistics';
import OtherContent from './pages/OtherContent';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Videos from './pages/Videos.js';
import About from './pages/About.js';
import Manualsc from './pages/Manuals copy.js';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manuals" element={<Manuals />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/infographics" element={<Infographics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/other" element={<OtherContent />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/Manualsc" element={<Manualsc />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
