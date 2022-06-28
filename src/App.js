import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import { ResponsiveNavBar } from './components/navbar';
import { IconContext } from "react-icons";

const Header = () => (
  <header>
    <ResponsiveNavBar />
  </header>
)

function App() {  
  return (
    <Router>
      <IconContext.Provider value={{ color: "white", size: "1em"}}>
        <div className="relative">
          <Header />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/ABOUT" element={<AboutMe />} />
            <Route path="/WORK" element={<Work />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </IconContext.Provider>
    </Router>
  );
}

export default App;
