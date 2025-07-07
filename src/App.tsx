import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page/section components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImgGallery from './components/ImgGallery';
import Countdown from './components/Countdown';
import LoveStory from './components/LoveStory';
import Prenup from './components/Prenup';
import Videos from './components/Videos';
import WeddingLocation from './components/Location';
import Gift from './components/Gifts';
import Footer from './components/Footer';

// The Home component acts as your main landing page, combining all sections
const Home: React.FC = () => {
  const exampleVideoUrl = "/videos/video.mp4"; // Video file in the public folder
  const exampleThumbnailUrl = "/prenup/Prenup1.jpg"; // Thumbnail image

  const leftVenueData = {
    mainImageUrl: "/locations/location1.jpg",
    overlayImageUrl: "https://placehold.co/100x100/FBCFE8/BE185D?text=Ring",
    churchName: "Hillcreek Gardens Tagaytay",
    churchAddress: "134 Tagaytay - Alfonso Road Brgy, Alfonso, 4123 Cavite",
    locationLink: "https://maps.app.goo.gl/rd5fGdTyDByo7hM67",
    title: "Wedding Venue", // <--- Make sure this is present
    description: "Our beautiful ceremony will take place in the elegant Grand Ballroom, known for its stunning architecture and romantic ambiance. Please arrive by 3:00 PM for seating." // <--- Make sure this is present
  };
  
  const rightVenueData = {
    mainImageUrl: "/locations/location2.webp",
    overlayImageUrl: "https://placehold.co/100x100/BFDBFE/1D4ED8?text=Cake",
    churchName: "Hillbarn Tagaytay Events Place",
    churchAddress: "Daang Luma, Tagaytay City, 4120 Cavite",
    locationLink: "https://maps.app.goo.gl/qgaoxMd3QzR8numM8",
    title: "Reception Venue", // <--- Make sure this is present
    description: "The reception will follow at the charming Garden Pavilion, offering an enchanting outdoor setting for dinner, dancing, and celebration. Festivities begin at 6:00 PM." // <--- Make sure this is present
  };


  return (
    <>
    <Navbar />
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
       <WeddingLocation
      leftSection={leftVenueData} // These props are required
      rightSection={rightVenueData} // These props are required
    />
    <Gift />
    <Footer />
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
