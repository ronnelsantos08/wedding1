import React, { useState, useEffect, useRef } from 'react';
import '../style/ImgGallery.css';

const ImgGallery: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [isTitleVisible, setIsTitleVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsTitleVisible(true);
            observer.disconnect(); // Unobserve after first reveal
          }
        },
        { threshold: 0.5 }
      );
  
      if (titleRef.current) observer.observe(titleRef.current);
      return () => observer.disconnect();
    }, []);

  const initialImages = [
    '/ImgGallery/jpg1.jpg',
    '/ImgGallery/jpg2.jpg',
    '/ImgGallery/jpg3.jpg',
    '/ImgGallery/jpg4.jpg',
  ];

  const [images, setImages] = useState(() =>
    initialImages.map((src, index) => ({
      id: index,
      src,
      x: 50 + index * 5,
      y: 50 + index * 5,
      rotation: (Math.random() - 0.5) * 10,
      zIndex: initialImages.length - index,
      isPinned: false,
    }))
  );

  const [draggingImageId, setDraggingImageId] = useState<number | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const startDrag = (
    clientX: number,
    clientY: number,
    target: HTMLDivElement,
    id: number
  ) => {
    const rect = target.getBoundingClientRect();
    offsetRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };

    setDraggingImageId(id);

    setImages((prevImages) => {
      const maxZ = Math.max(...prevImages.map((img) => img.zIndex));
      return prevImages.map((img) =>
        img.id === id ? { ...img, zIndex: maxZ + 1, isPinned: false } : img
      );
    });
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY, e.currentTarget, id);
  };

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>,
    id: number
  ) => {
    const touch = e.touches[0];
    if (touch) startDrag(touch.clientX, touch.clientY, e.currentTarget, id);
  };

  useEffect(() => {
    const move = (x: number, y: number) => {
      const { x: offsetX, y: offsetY } = offsetRef.current;
      setImages((prev) =>
        prev.map((img) =>
          img.id === draggingImageId
            ? { ...img, x: x - offsetX, y: y - offsetY }
            : img
        )
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (draggingImageId !== null) move(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (draggingImageId !== null) {
        e.preventDefault(); // Prevent scroll while dragging
        const touch = e.touches[0];
        if (touch) move(touch.clientX, touch.clientY);
      }
    };

    const handleUp = () => {
      if (draggingImageId !== null) {
        setImages((prev) =>
          prev.map((img) =>
            img.id === draggingImageId ? { ...img, isPinned: true } : img
          )
        );
        setDraggingImageId(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [draggingImageId]);

  return (
    <div className='stack-container'>
          <img src="/decorations/deco1.png" alt="Flower Left" className="flower-decoration left" />
      <img src="/decorations/deco1.png" alt="Flower Right" className="flower-decoration right" />
    <div className="image-stack-container">
      <div className="background-overlay" />
      <h1 className="app-title"></h1>
      <h1 ref={titleRef}
            className={`app-title ${isTitleVisible ? 'visible' : ''}`}
            >Our Love Through the Lens</h1>

      {images.map((image) => (
        <div
          key={image.id}
          className={`draggable-image ${image.isPinned ? 'pinned' : ''}`}
          onMouseDown={(e) => handleMouseDown(e, image.id)}
          onTouchStart={(e) => handleTouchStart(e, image.id)}
          style={{
            left: `${image.x}px`,
            top: `${image.y}px`,
            transform: `rotate(${image.rotation}deg)`,
            zIndex: image.zIndex,
            position: 'absolute',
          }}
        >
          <img
            src={image.src}
            alt={`Image ${image.id + 1}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/200x200/607D8B/FFFFFF?text=Error';
            }}
          />
        </div>
      ))}
      </div>
    </div>
  );
};

export default ImgGallery;
