import { useEffect } from 'react';
import '../style/DressCode.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Dresscode() {
  const items = [
    "https://lottie.host/486f6bb1-6020-4c8b-ad26-c90de7064a42/iBsLU2dJlC.lottie",
    "https://lottie.host/33da132f-a2fc-47d9-a64a-0be1c048ac89/pjEJz9IKrn.lottie",
    "https://lottie.host/489b06f6-5706-43d4-87bb-8d5911d7af6a/5QyCcre5A4.lottie",
    "https://lottie.host/a1dc7d98-f09f-4990-9fed-f574c7bde249/x6s5CCaynH.lottie",
    "https://lottie.host/298c0d42-6b55-4661-abe9-366e10d50493/9YSRoR8W4j.lottie",
  ];

  const pinkPalette = ["#5745a5", "#4aa0e3", "#5be7cf", "#ffb645", "#f48898"];


  const animationVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        ease: [0.42, 0, 0.58, 1], // smooth easing cubic-bezier
      },
    },
  };

  // Hook for scroll animation with intersection observer
  const useScrollAnimation = (delay: number = 0) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [inView, controls]);

    return { ref, controls, delay };
  };

  // Title and description animations with fixed delays
  const titleAnim = useScrollAnimation(0);
  const descAnim = useScrollAnimation(0.15);

  return (
    <div className="dress-container">
      <div className="dresscode-card">

        {/* Title */}
        <motion.h1
          className="dresscode-title"
          ref={titleAnim.ref}
          initial="hidden"
          animate={titleAnim.controls}
          variants={animationVariants}
          style={{ transitionDelay: `${titleAnim.delay}s` }}
        >
          Dresscode
        </motion.h1>

        {/* Description */}
        <motion.p
          className="dresscode-description"
          ref={descAnim.ref}
          initial="hidden"
          animate={descAnim.controls}
          variants={animationVariants}
          style={{ transitionDelay: `${descAnim.delay}s` }}
        >
        Formal dresses in pastel colors and black tuxedo suit for principal sponsors and entourage
For guests semiformal attire in pastel colors
        </motion.p>

        {/* Lottie animations */}
        <div className="images-container">
          {items.map((url, index) => {
            const anim = useScrollAnimation(index * 0.15);
            return (
              <motion.div
                key={index}
                className="image-wrapper"
                ref={anim.ref}
                initial="hidden"
                animate={anim.controls}
                variants={animationVariants}
                style={{ transitionDelay: `${anim.delay}s` }}
              >
                <DotLottieReact
                  src={url}
                  loop
                  autoplay
                  style={{ width: '200px', height: '300px' }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Color Palette */}
        <div className="color-palette-section">
          <motion.h2
            className="color-palette-title"
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            style={{ transitionDelay: '0.1s' }}
          >
            Whimsical Garden Color Palette
          </motion.h2>

          <div className="color-swatches-container">
  {pinkPalette.map((colorHex, index) => {
    const anim = useScrollAnimation((index + items.length) * 0.15);
    return (
      <motion.div
        key={index}
        className="color-swatch"
        ref={anim.ref}
        initial="hidden"
        animate={anim.controls}
        variants={animationVariants}
        style={{
          backgroundColor: colorHex,
          transitionDelay: `${anim.delay}s`,
        }}
      />
    );
  })}
</div>
        </div>

      </div>
    </div>
  );
}

export default Dresscode;
