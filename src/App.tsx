import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
