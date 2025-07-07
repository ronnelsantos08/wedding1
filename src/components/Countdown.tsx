import { useState, useEffect, useRef } from 'react';
import '../style/Countdown.css';

const Countdown = () => {
  const targetDate = new Date('December 25, 2025 10:00:00').getTime();

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Use refs for observing when content and countdown come into view
  const contentRef = useRef<HTMLDivElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);

  // Visible states triggered by intersection observer
  const [contentVisible, setContentVisible] = useState(false);
  const [countdownVisible, setCountdownVisible] = useState(false);

  // Calculate time remaining
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    setCountdown({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    });
  };

  useEffect(() => {
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  // Intersection observer for content fade in
  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true);
          contentObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => contentObserver.disconnect();
  }, []);

  // Intersection observer for countdown numbers fade in
  useEffect(() => {
    const countdownObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountdownVisible(true);
          countdownObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (countdownRef.current) countdownObserver.observe(countdownRef.current);

    return () => countdownObserver.disconnect();
  }, []);

  return (
    <div className="countdown-container">
      <div className="background-overlay"></div>

      <div
        className={`content-wrapper ${contentVisible ? 'visible' : ''}`}
        ref={contentRef}
      >
        <h1 className={`main-title ${contentVisible ? 'visible' : ''}`}>
          Come Join Us!
        </h1>
        <p className={`sub-title ${contentVisible ? 'visible' : ''}`}>
          The day we say "I Do" is fast approaching.
        </p>

        <div
          className={`countdown-display ${countdownVisible ? 'visible' : ''}`}
          ref={countdownRef}
        >
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
