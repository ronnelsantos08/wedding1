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

const exampleVideoUrl = "/videos/video.mp4";
const exampleThumbnailUrl = "/prenup/Prenup1.jpg";

const leftVenueData = {
  mainImageUrl: "/locations/location1.jpg",
  overlayImageUrl: "https://placehold.co/100x100/FBCFE8/BE185D?text=Ring",
  churchName: "Hillcreek Gardens Tagaytay",
  churchAddress: "134 Tagaytay - Alfonso Road Brgy, Alfonso, 4123 Cavite",
  locationLink: "https://maps.app.goo.gl/rd5fGdTyDByo7hM67",
  title: "Wedding Venue",
  description: "Our beautiful ceremony will take place in the elegant Grand Ballroom, known for its stunning architecture and romantic ambiance. Please arrive by 3:00 PM for seating.",
};

const rightVenueData = {
  mainImageUrl: "/locations/location2.webp",
  overlayImageUrl: "https://placehold.co/100x100/BFDBFE/1D4ED8?text=Cake",
  churchName: "Hillbarn Tagaytay Events Place",
  churchAddress: "Daang Luma, Tagaytay City, 4120 Cavite",
  locationLink: "https://maps.app.goo.gl/qgaoxMd3QzR8numM8",
  title: "Reception Venue",
  description: "The reception will follow at the charming Garden Pavilion, offering an enchanting outdoor setting for dinner, dancing, and celebration. Festivities begin at 6:00 PM.",
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
        {/* Add more routes if needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
