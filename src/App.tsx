import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import ImgGallery from './components/ImgGallery';

const Home: React.FC = () => (
  <>
    <Hero />
    <ImgGallery />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes can go here */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
