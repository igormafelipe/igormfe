import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import { ResponsiveNavBar } from './components/navbar';
import { IconContext } from "react-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Header = () => (
  <header>
    <ResponsiveNavBar />
  </header>
)

function App() { 
  return (
    <HelmetProvider>
      <Helmet>
        <title>IMF</title>
      </Helmet>
      <Router hashType="hashbang">
        <IconContext.Provider value={{ color: "white", size: "1em"}}>
          <div className="relative">
            <Header />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/ABOUT" element={<AboutMe />} />
              <Route path="/WORK" element={<Work />} />
              <Route path="*" element={<AboutMe />} />
            </Routes>
          </div>
        </IconContext.Provider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
