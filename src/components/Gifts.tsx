// Gift.tsx
import React, { useRef, useEffect, useState } from 'react';
import '../style/Gifts.css';

interface GiftProps {
  title?: string;
  description?: string;
  decorationImageUrl?: string;
}

const Gift: React.FC<GiftProps> = ({
  title = "Your Presence Is Our Present",
  description = "Your love and support on our special day are the greatest gifts we could ask for. Should you wish to honor us with a gift, a contribution towards our future endeavors would be greatly appreciated.",
  decorationImageUrl = "/decorations/deco3.png"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const [containerVisible, setContainerVisible] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === containerRef.current && entry.isIntersecting) {
            setContainerVisible(true);
          }
          if (entry.target === headingRef.current && entry.isIntersecting) {
            setHeadingVisible(true);
          }
          if (entry.target === paragraphRef.current && entry.isIntersecting) {
            setParagraphVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
    };
  }, []);

  return (
    <div className='gift-wrapper'>
      <div
        ref={containerRef}
        className={`gift-container ${containerVisible ? 'fade-in-container' : 'hidden'}`}
      >
        <h1
          ref={headingRef}
          className={`gift-heading ${headingVisible ? 'fade-in-left' : 'hidden'}`}
        >
          {title}
        </h1>
        <p
          ref={paragraphRef}
          className={`gift-paragraph ${paragraphVisible ? 'fade-in-up' : 'hidden'}`}
        >
          {description}
        </p>
        {decorationImageUrl && (
          <img
            src={decorationImageUrl}
            alt="Decorative element"
            className="decoration-image"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/150x150/FFD1DC/6d28d9?text=Deco";
              e.currentTarget.onerror = null;
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Gift;
