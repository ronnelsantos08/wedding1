import React, { useEffect } from 'react';
import '../style/Prenup.css'; // Import the CSS file

const imgURLs = [
    '/prenup/Prenup1.jpeg',
    '/prenup/Prenup2.jpeg',
    '/prenup/Prenup3.jpeg',
    '/prenup/Prenup4.jpeg',
    '/prenup/Prenup5.jpeg',
    '/prenup/Prenup6.jpeg',
    '/prenup/Prenup7.jpeg',
    '/prenup/Prenup8.jpeg',
    '/prenup/Prenup9.jpeg',
    '/prenup/Prenup10.jpeg',
    '/prenup/Prenup11.jpeg',
    '/prenup/Prenup12.jpeg',
    '/prenup/Prenup13.jpeg',
    '/prenup/Prenup14.jpeg',
    '/prenup/Prenup15.jpeg',
    '/prenup/Prenup16.jpeg',
    '/prenup/Prenup17.jpeg',
    '/prenup/Prenup18.jpeg',
    '/prenup/Prenup19.jpeg',
    '/prenup/Prenup20.jpeg',
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