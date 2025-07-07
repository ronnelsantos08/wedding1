import { useEffect, useRef, useState } from 'react';
import '../style/LoveStory.css';

const splitTextToSpans = (text: string, className = '') =>
  text.split('').map((char, i) => (
    <span
      key={i}
      className={`animated-letter ${className}`}
      style={{ animationDelay: `${i * 0.03}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

const LoveStory = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div className="dm-flip-container">
      <div
        ref={cardRef}
        className={`dm-flip-card fade-in ${visible ? 'visible' : ''} ${flipped ? 'flipped' : ''}`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div className="dm-front-card">
          <div className="pulse-heart-wave"></div>
          <div className="pulse-heart"></div>
        </div>

        <div className="dm-back-card">
          <h1>
            {splitTextToSpans('Our Love Story', 'flip-in')}
          </h1>
          <p>
            {splitTextToSpans(
              `We met not by chance, but by fate. What started as a passing smile soon became our favorite hello.
Through coffee dates, long talks, quiet nights, and spontaneous adventures, we discovered a love that felt both new and familiar — like coming home.
We laughed, we learned, we grew — side by side. Even in silence, our hearts spoke volumes.
This isn’t just a story of how we met. It’s a story of how we chose each other, every single day.
And now, as we take the next step together, we carry with us not just memories, but a promise — to love endlessly, and walk hand in hand, always.`,
              'fade-in'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
