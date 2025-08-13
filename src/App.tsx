// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImgGallery from './components/ImgGallery';
import Countdown from './components/Countdown';
import LoveStory from './components/LoveStory';
import Prenup from './components/Prenup';
import Videos from './components/Videos';
import WeddingLocation from './components/Location';
import Gift from './components/Gifts';
import RSVP from './components/Rsvp'; // Import RSVP component
import Dresscode from './components/DressCode';
import Entourage from './components/Entourage';
import Faq from './components/Faq';

const exampleVideoUrl = "/videos/video.mp4";
const exampleThumbnailUrl = "/prenup/Prenup14.jpeg";

const leftVenueData = {
  mainImageUrl: "/locations/location1.jpg",
  overlayImageUrl: "https://placehold.co/100x100/FBCFE8/BE185D?text=Ring",
  churchName: "Hacienda Solange Indang ",
  churchAddress: "Sitio Portugal, Brgy. Tambo Malaki",
  locationLink: "https://maps.app.goo.gl/7XvY7hRaj9kdZnCn8",
  title: "Wedding Venue",
  description: "Our beautiful outdoor ceremony will take place in the elegant Grand Ballroom Garden, known for its stunning natural backdrop and romantic ambiance. Please arrive by 4:00 PM for seating. Ceremony will start at 5:00pm",
};

const rightVenueData = {
  mainImageUrl: "/locations/location2.webp",
  overlayImageUrl: "https://placehold.co/100x100/BFDBFE/1D4ED8?text=Cake",
  churchName: "Hacienda Solange Indang ",
  churchAddress: "Sitio Portugal, Brgy. Tambo Malaki",
  locationLink: "https://maps.app.goo.gl/7XvY7hRaj9kdZnCn8",
  title: "Reception Venue",
  description: "The reception will follow in the charming indoor Garden Pavilion, offering a cozy and elegant dining area for dinner, dancing, and celebration. Festivities begin at 7:00 PM.",
};

// Home page sections
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ImgGallery />
      <Countdown />
      <LoveStory />
      <Prenup />
      <Videos videoUrl={exampleVideoUrl} videoTitle="Our Special Video" posterUrl={exampleThumbnailUrl} />
      <WeddingLocation leftSection={leftVenueData} rightSection={rightVenueData} />
      <Gift />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} /> {/* ✅ RSVP route */}
        <Route path="/dresscode" element={<Dresscode />} />
        <Route path="/entourage" element={<Entourage />} />
        <Route path="/faq" element={<Faq />} />
        {/* Add more routes if needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
