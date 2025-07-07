import React, { useEffect, useRef, useState } from 'react';
import '../style/Location.css';

interface LocationSectionProps {
  mainImageUrl: string;
  churchName: string;
  churchAddress: string;
  locationLink: string;
  title: string;
  description: string;
}

interface WeddingLocationProps {
  mainTitle?: string;
  mainDescription?: string;
  leftSection: LocationSectionProps;
  rightSection: LocationSectionProps;
}

const animationClasses = [
  'fade-in-slow',
  'fade-in-slow-left',
  'fade-in-slow-right',
  'fade-in-slow-scale',
];

const getRandomAnimClass = () =>
  animationClasses[Math.floor(Math.random() * animationClasses.length)];

const WeddingLocation: React.FC<WeddingLocationProps> = ({
  mainTitle = 'Our Special Day Locations',
  mainDescription = 'Join us as we celebrate our union at two beautiful venues, each holding a special place in our hearts. We look forward to sharing these moments with you.',
  leftSection,
  rightSection,
}) => {
  // Refs and states for main header items
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const mainDescRef = useRef<HTMLParagraphElement>(null);
  const [mainTitleAnim] = useState(getRandomAnimClass());
  const [mainTitleVisible, setMainTitleVisible] = useState(false);
  const [mainDescAnim] = useState(getRandomAnimClass());
  const [mainDescVisible, setMainDescVisible] = useState(false);

  // Observe function helper
  const observeElement = (
    element: HTMLElement | null,
    onVisible: () => void
  ) => {
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  };

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    cleanups.push(observeElement(mainTitleRef.current, () => setMainTitleVisible(true)) || (() => {}));
    cleanups.push(observeElement(mainDescRef.current, () => setMainDescVisible(true)) || (() => {}));
    return () => cleanups.forEach((c) => c());
  }, []);

  // LocationSection component with animations
  const LocationSection: React.FC<LocationSectionProps> = ({
    mainImageUrl,
    churchName,
    churchAddress,
    locationLink,
    title,
    description,
  }) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const churchNameRef = useRef<HTMLHeadingElement>(null);
    const churchAddrRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const mapLinkRef = useRef<HTMLAnchorElement>(null);

    const [imgAnim] = useState(getRandomAnimClass());
    const [imgVisible, setImgVisible] = useState(false);
    const [churchNameAnim] = useState(getRandomAnimClass());
    const [churchNameVisible, setChurchNameVisible] = useState(false);
    const [churchAddrAnim] = useState(getRandomAnimClass());
    const [churchAddrVisible, setChurchAddrVisible] = useState(false);
    const [titleAnim] = useState(getRandomAnimClass());
    const [titleVisible, setTitleVisible] = useState(false);
    const [descAnim] = useState(getRandomAnimClass());
    const [descVisible, setDescVisible] = useState(false);
    const [mapLinkAnim] = useState(getRandomAnimClass());
    const [mapLinkVisible, setMapLinkVisible] = useState(false);

    useEffect(() => {
      const cleanups: (() => void)[] = [];
      cleanups.push(observeElement(imgRef.current, () => setImgVisible(true)) || (() => {}));
      cleanups.push(observeElement(churchNameRef.current, () => setChurchNameVisible(true)) || (() => {}));
      cleanups.push(observeElement(churchAddrRef.current, () => setChurchAddrVisible(true)) || (() => {}));
      cleanups.push(observeElement(titleRef.current, () => setTitleVisible(true)) || (() => {}));
      cleanups.push(observeElement(descRef.current, () => setDescVisible(true)) || (() => {}));
      cleanups.push(observeElement(mapLinkRef.current, () => setMapLinkVisible(true)) || (() => {}));
      return () => cleanups.forEach((c) => c());
    }, []);

    return (
      <div className="location-section">
        <div className="image-container">
          <img
            ref={imgRef}
            src={mainImageUrl}
            alt={title}
            className={`${imgAnim} ${imgVisible ? 'visible' : ''} main-image`}
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/600x400/A855F7/FFFFFF?text=Venue+Image';
              e.currentTarget.onerror = null;
            }}
          />
          <a
            ref={mapLinkRef}
            href={locationLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${churchName} on Google Maps`}
            className={`${mapLinkAnim} ${mapLinkVisible ? 'visible' : ''} map-icon-link`}
          >
            <svg
              className="map-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
        </div>

        <h1 className={`${churchNameAnim} ${churchNameVisible ? 'visible' : ''} church-name-heading`} ref={churchNameRef}>
          {churchName || 'Church Name Not Provided'}
        </h1>
        <p className={`${churchAddrAnim} ${churchAddrVisible ? 'visible' : ''} church-address-paragraph`} ref={churchAddrRef}>
          {churchAddress || 'Address Not Provided'}
        </p>

        <h2 className={`${titleAnim} ${titleVisible ? 'visible' : ''} section-title-heading`} ref={titleRef}>
          {title}
        </h2>
        <p className={`${descAnim} ${descVisible ? 'visible' : ''} section-description-paragraph`} ref={descRef}>
          {description}
        </p>
      </div>
    );
  };

  return (
    <div className="wedding-location-container">
      <div className="main-header-section">
        <h1 className={`${mainTitleAnim} ${mainTitleVisible ? 'visible' : ''} main-title-heading`} ref={mainTitleRef}>
          {mainTitle}
        </h1>
        <p className={`${mainDescAnim} ${mainDescVisible ? 'visible' : ''} main-description-paragraph`} ref={mainDescRef}>
          {mainDescription}
        </p>
      </div>

      <div className="location-sections-wrapper">
        <LocationSection {...leftSection} />
        <LocationSection {...rightSection} />
      </div>
    </div>
  );
};

export default WeddingLocation;
