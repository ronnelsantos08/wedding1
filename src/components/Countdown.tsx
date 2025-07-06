import { useState, useEffect } from 'react';
import '../style/Countdown.css'

// Main App component for the Wedding Countdown
const Countdown = () => {
  // Set your target wedding date and time here
  const targetDate = new Date('December 25, 2025 10:00:00').getTime();

  // State to hold the countdown values
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // State for entry animations
  const [contentVisible, setContentVisible] = useState(false);
  const [countdownVisible, setCountdownVisible] = useState(false);

  // Function to calculate the time remaining
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // If the countdown has finished
    if (distance < 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  };

  // useEffect to set up the countdown timer
  useEffect(() => {
    calculateTimeRemaining(); // Initial calculation
    const interval = setInterval(calculateTimeRemaining, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount

  // useEffect for entry animations
  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 200); // Title and subtitle fade in

    const countdownTimer = setTimeout(() => {
      setCountdownVisible(true);
    }, 800); // Countdown numbers slide up and fade in

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(countdownTimer);
    };
  }, []);

  return (
    <div className="countdown-container">
     

      <div className="background-overlay"></div>

      <div className={`content-wrapper ${contentVisible ? 'visible' : ''}`}>
        <h1 className={`main-title ${contentVisible ? 'visible' : ''}`}>Come Join Us!</h1>
        <p className={`sub-title ${contentVisible ? 'visible' : ''}`}>The day we say "I Do" is fast approaching.</p>

        <div className={`countdown-display ${countdownVisible ? 'visible' : ''}`}>
          <div className="countdown-unit">
            <div className="countdown-number">{countdown.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-unit">
            <div className="countdown-number">{countdown.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-unit">
            <div className="countdown-number">{countdown.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-unit">
            <div className="countdown-number">{countdown.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
