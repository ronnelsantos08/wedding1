import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page/section components
import Hero from './components/Hero';
import ImgGallery from './components/ImgGallery';
import Countdown from './components/Countdown';
import LoveStory from './components/LoveStory';
import Prenup from './components/Prenup';
import Videos from './components/Videos';

// The Home component acts as your main landing page, combining all sections
const Home: React.FC = () => {
  const exampleVideoUrl = "/videos/video.mp4"; // Video file in the public folder
  const exampleThumbnailUrl = "/prenup/Prenup1.jpg"; // Thumbnail image

  return (
    <>
      <Hero />
      <ImgGallery />
      <Countdown />
      <LoveStory />
      <Prenup />
      <Videos
        videoUrl={exampleVideoUrl}
        videoTitle="Our Special Video"
        posterUrl={exampleThumbnailUrl}
      />
    </>
  );
};

// The main App component handles the routing configuration
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
