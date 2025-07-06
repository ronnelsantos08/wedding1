import React, { useEffect } from 'react';
import '../style/Prenup.css'; // Import the CSS file

const imgURLs = [
    '/prenup/Prenup1.jpg',
    '/prenup/Prenup2.jpg',
    '/prenup/Prenup3.jpg',
    '/prenup/Prenup4.jpg',
    '/prenup/Prenup5.jpg',
    '/prenup/Prenup6.jpg',
    '/prenup/Prenup7.jpg',
    '/prenup/Prenup8.jpg',
    '/prenup/Prenup9.jpg',
    '/prenup/Prenup10.jpg',
    '/prenup/Prenup11.jpg',
    '/prenup/Prenup12.jpg',
    '/prenup/Prenup13.jpg',
    '/prenup/Prenup14.jpg',
    '/prenup/Prenup15.jpg',
    '/prenup/Prenup16.jpg',
    '/prenup/Prenup17.jpg',
    '/prenup/Prenup18.jpg',
    '/prenup/Prenup19.jpg',
    '/prenup/Prenup20.jpg',
];

const Prenup: React.FC = () => {
  useEffect(() => {
    // This useEffect is used to apply the animation delay dynamically,
    // similar to your original JavaScript.
    // In a more complex scenario, you might pass `delay` as a prop or
    // use CSS variables if the delays are more static.
    const images = document.querySelectorAll('.image-box img');
    images.forEach((img, i) => {
      const delay = ((i + 1) * 2) / 10;
      (img as HTMLElement).style.animationDuration = `${delay}s`;
    });
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <>
    
    <div className='prenup-container'>
    <div className="page-mast__border">
    <div className="svg-background-wrapper2"></div>
  </div>
      <h1 className="title">Chapter One</h1>
      <p className="prenup-description">A timeless capture of love and memories before the big day.</p>
    <div className='img-wrapper'>
      <div id="imgBox" className="image-box">
        {imgURLs.map((url, i) => (
          <img key={i} src={url} alt={`Prenup image ${i + 1}`} />
        ))}
      </div>
      </div>
      </div>
      <section className="page-mast">
  <div className="page-mast__border">
  <div className="svg-background-wrapper"></div>
  </div>
</section>
    </>
  );
};

export default Prenup;