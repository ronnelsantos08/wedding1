import React, { useState, useEffect } from 'react';
import '../style/Hero.css';

const Hero = () => {
  const images = [
    '../HeroImg/hero1.jpg',
    '../HeroImg/hero2.jpg',
    '../HeroImg/hero3.jpg',
    '../HeroImg/hero4.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const [textAndButtonVisible, setTextAndButtonVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const contentTimer = setTimeout(() => setContentVisible(true), 200);
    const textTimer = setTimeout(() => setTextAndButtonVisible(true), 800);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(textTimer);
    };
  }, []);

  const handleSaveTheDate = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes("android");

    const title = encodeURIComponent("Jc and Rain Wedding");
    const details = encodeURIComponent("Join us to celebrate the wedding of Jc and Rain!");
    const location = encodeURIComponent("Your Wedding Venue, City, Country");
    const startDate = "20251225T100000Z";
    const endDate = "20251225T170000Z";

    if (isAndroid) {
      // Open Google Calendar for Android
      const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;
      window.open(calendarUrl, '_blank');
    } else {
      // Download .ics file for iOS/Desktop
      const formatDateTime = (date: Date) =>
        date.toISOString().replace(/-|:|\.\d{3}/g, "") + "Z";

      const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Jc and Rain Wedding//EN",
        "BEGIN:VEVENT",
        `UID:${new Date().getTime()}@jc-rain.com`,
        `DTSTAMP:${formatDateTime(new Date())}`,
        `DTSTART:${startDate}`,
        `DTEND:${endDate}`,
        `SUMMARY:Jc and Rain Wedding`,
        `DESCRIPTION:Join us to celebrate the wedding of Jc and Rain!`,
        `LOCATION:Your Wedding Venue, City, Country`,
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\n");

      const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Jc_Rain_Wedding_SaveTheDate.ics";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="wedding-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Wedding Background ${index + 1}`}
          className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = 'https://placehold.co/1920x1080/607D8B/FFFFFF?text=Image+Not+Found';
          }}
        />
      ))}

      <div className="background-overlay1"></div>

      <div className={`content-container ${contentVisible ? 'visible' : ''}`}>
        <h1 className={`wedding-title ${textAndButtonVisible ? 'text-button-entry-visible' : ''}`}>
          Jc and Rain Wedding
        </h1>

        <div className={`music-player-container ${textAndButtonVisible ? 'text-button-entry-visible' : ''}`}>
          <audio controls loop>
            <source src="../audios/Audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <p className={`wedding-date ${textAndButtonVisible ? 'text-button-entry-visible' : ''}`}>
          December 25, 2025
        </p>

        <button
          onClick={handleSaveTheDate}
          className={`save-date-button ${textAndButtonVisible ? 'text-button-entry-visible' : ''}`}
        >
          Save the Date
        </button>
      </div>
    </div>
  );
};

export default Hero;
