// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import 'animate.css';
// import h1 from '../Images/h1.jpg'
// import h2 from '../Images/h2.jpg'
// import h3 from '../Images/h3.jpg'
// import h4 from '../Images/h4.jpg'

// // This is the main container for the hero section. It is set to 100vh
// // to fill the entire viewport height, and it has a relative position
// // so we can absolutely position the background images inside of it.
// const HeroContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: #fff;
//   font-family: 'Inter', sans-serif;
//   overflow: hidden; // Hides any overflow from the absolute-positioned images.
// `;

// // This component holds each individual background image.
// // It is absolutely positioned to cover the entire container.
// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url(${props => props.imageUrl});
//   background-size: cover;
//   background-position: center;
//   // Updated transition duration for a slower effect.
//   transition: opacity 3s ease-in-out, transform 3s ease-in-out;
//   opacity: ${props => (props.active ? 1 : 0)}; // Controls the fade effect.
//   transform: translateX(${props => (props.active ? '0' : '-100%')}); // Slides the images.
//   z-index: 1; // Ensures images are behind the content.
// `;

// // This is the overlay that adds a subtle gradient and dimming effect
// // to make the text more readable on top of the images.
// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.4); // A semi-transparent dark overlay.
//   z-index: 2;
// `;

// // This is the container for all the hero section's content (title, text, button).
// // It is positioned on top of the images and overlay.
// const HeroContent = styled.div`
//   position: relative;
//   z-index: 3;
//   max-width: 800px;
//   padding: 0 20px;
// `;

// // The main heading.
// const HeroTitle = styled.h1`
//   font-size: 4rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
  
//   @media (max-width: 768px) {
//     font-size: 2.5rem; // Adjust font size for smaller screens.
//   }
// `;

// // The subtitle or descriptive text.
// const HeroSubtitle = styled.p`
//   font-size: 1.25rem;
//   margin-bottom: 2rem;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// // The call-to-action button.
// const HeroButton = styled.a`
//   display: inline-block;
//   padding: 1rem 2.5rem;
//   background-color: #ff5722;
//   color: #fff;
//   text-decoration: none;
//   font-weight: 600;
//   border-radius: 50px;
//   transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   &:hover {
//     background-color: #e64a19;
//     transform: translateY(-3px); // A lively hover effect.
//   }
// `;

// // Array of image URLs for the slider.
// const images = [h1, h2, h3, h4];

// // The main HeroSection component.
// const Hero = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Refs for the elements we want to animate.
//   const heroTitleRef = useRef(null);
//   const heroSubtitleRef = useRef(null);
//   const heroButtonRef = useRef(null);

//   // useEffect to handle the image slider functionality.
//   useEffect(() => {
//     // Set up an interval to change the image every 8 seconds for a slower pace.
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 8000);

//     // Clean up the interval when the component unmounts.
//     return () => clearInterval(intervalId);
//   }, [images.length]);

//   // useEffect to handle the scroll animation with IntersectionObserver.
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Add the animation class when the element is in view.
//             if (entry.target.tagName === 'H1') {
//               entry.target.classList.add('animate__bounceInDown');
//             } else if (entry.target.tagName === 'P') {
//               entry.target.classList.add('animate__slideInLeft');
//             } else if (entry.target.tagName === 'A') {
//               entry.target.classList.add('animate__rotateIn');
//             }
//             // Stop observing after the animation has been added.
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.5 } // Trigger when 50% of the element is visible.
//     );

//     // Observe each of the elements.
//     if (heroTitleRef.current) observer.observe(heroTitleRef.current);
//     if (heroSubtitleRef.current) observer.observe(heroSubtitleRef.current);
//     if (heroButtonRef.current) observer.observe(heroButtonRef.current);

//     // Clean up the observer when the component unmounts.
//     return () => {
//       if (heroTitleRef.current) observer.unobserve(heroTitleRef.current);
//       if (heroSubtitleRef.current) observer.unobserve(heroSubtitleRef.current);
//       if (heroButtonRef.current) observer.unobserve(heroButtonRef.current);
//     };
//   }, []);

//   return (
//     <HeroContainer>
//       {/* Map through the images array to create the background images */}
//       {images.map((imageUrl, index) => (
//         <BackgroundImage
//           key={index}
//           imageUrl={imageUrl}
//           active={index === currentImageIndex} // The active prop controls which image is visible.
//         />
//       ))}
//       <Overlay />
//       <HeroContent>
//         {/* Add 'animate__animated' and a ref for the animation. */}
//         <HeroTitle
//           ref={heroTitleRef}
//           className="animate__animated"
//           style={{ animationDelay: '0.2s', '--animate-duration': '5s' }}
//         >
//           Your Journey Begins Here
//         </HeroTitle>
//         <HeroSubtitle
//           ref={heroSubtitleRef}
//           className="animate__animated"
//           style={{ animationDelay: '0.3s', '--animate-duration': '5s' }}
//         >
//           Explore breathtaking destinations and create unforgettable memories with our
//           exclusive travel and tour packages.
//         </HeroSubtitle>
//         <HeroButton
//           ref={heroButtonRef}
//           className="animate__animated"
//           style={{ animationDelay: '0.6s', '--animate-duration': '5s' }}
//           href="#"
//         >
//           Book Your Trip
//         </HeroButton>
//       </HeroContent>
//     </HeroContainer>
//   );
// };

// export default Hero;



import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import h1 from '../Images/h1.jpg'
import h2 from '../Images/h2.jpg'
import h3 from '../Images/h3.jpg'
import h4 from '../Images/h4.jpg'

// This is the main container for the hero section. It is set to 100vh
// to fill the entire viewport height, and it has a relative position
// so we can absolutely position the background images inside of it.
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-family: 'Inter', sans-serif;
  overflow: hidden; // Hides any overflow from the absolute-positioned images.
`;

// This component holds each individual background image.
// It is absolutely positioned to cover the entire container.
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  // Updated transition duration for a slower effect.
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
  opacity: ${props => (props.active ? 1 : 0)}; // Controls the fade effect.
  transform: translateX(${props => (props.active ? '0' : '-100%')}); // Slides the images.
  z-index: 1; // Ensures images are behind the content.
`;

// This is the overlay that adds a subtle gradient and dimming effect
// to make the text more readable on top of the images.
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
//   background: rgba(0, 0, 0, 0.4); // A semi-transparent dark overlay.
   background: rgba(56, 0, 44, 0.5); // A semi-transparent dark overlay.
  z-index: 2;
`;

// This is the container for all the hero section's content (title, text, button).
// It is positioned on top of the images and overlay.
const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 800px;
  padding: 0 20px;
`;

// The main heading.
const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem; // Adjust font size for smaller screens.
  }
`;

// The subtitle or descriptive text.
const HeroSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// The call-to-action button.
const HeroButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #ff5722;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e64a19;
    transform: translateY(-3px); // A lively hover effect.
  }
`;

// Array of image URLs for the slider.
const images = [h1, h2, h3, h4];

// The main HeroSection component.
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Refs for the elements we want to animate.
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroButtonRef = useRef(null);

  // useEffect to handle the image slider functionality.
  useEffect(() => {
    // Set up an interval to change the image every 8 seconds for a slower pace.
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    // Clean up the interval when the component unmounts.
    return () => clearInterval(intervalId);
  }, [images.length]);

  // useEffect to handle the scroll animation with IntersectionObserver.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            // Add both the generic and specific animation classes when in view.
            target.classList.add('animate__animated');
            if (target.tagName === 'H1') {
              target.classList.add('animate__zoomInDown');
            } else if (target.tagName === 'P') {
              target.classList.add('animate__rotateIn');
            } else if (target.tagName === 'A') {
              target.classList.add('animate__rotateIn');
            }
          } else {
            // Remove all animation classes when out of view.
            target.classList.remove('animate__animated');
            target.classList.remove('animate__zoomInDown');
            target.classList.remove('animate__rotateIn');
            target.classList.remove('animate__rotateIn');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible.
    );

    // Observe each of the elements.
    if (heroTitleRef.current) observer.observe(heroTitleRef.current);
    if (heroSubtitleRef.current) observer.observe(heroSubtitleRef.current);
    if (heroButtonRef.current) observer.observe(heroButtonRef.current);

    // Clean up the observer when the component unmounts.
    return () => {
      if (heroTitleRef.current) observer.unobserve(heroTitleRef.current);
      if (heroSubtitleRef.current) observer.unobserve(heroSubtitleRef.current);
      if (heroButtonRef.current) observer.unobserve(heroButtonRef.current);
    };
  }, []);

  return (
    <HeroContainer>
      {/* Map through the images array to create the background images */}
      {images.map((imageUrl, index) => (
        <BackgroundImage
          key={index}
          imageUrl={imageUrl}
          active={index === currentImageIndex} // The active prop controls which image is visible.
        />
      ))}
      <Overlay />
      <HeroContent>
        {/* The classes will now be added and removed by the IntersectionObserver */}
        <HeroTitle
          ref={heroTitleRef}
          style={{ animationDelay: '0.1s', '--animate-duration': '3s' }}
        >
         Powering Africa’s Clean Mobility & Energy Future
        </HeroTitle>
        <HeroSubtitle
          ref={heroSubtitleRef}
          style={{ animationDelay: '0.1s', '--animate-duration': '3s' }}
        >
         OXONE INTERNATIONAL LTD is Africa’s leading provider of electric, CNG, and hydrogen mobility solutions, renewable energy infrastructure, and advanced energy storage technologies. We are shaping a sustainable, industrially empowered, and technologically advanced Africa.
        </HeroSubtitle>
        {/* <HeroButton
          ref={heroButtonRef}
          style={{ animationDelay: '0.6s', '--animate-duration': '3s' }}
          href="#"
        >
          Book Your Trip
        </HeroButton>
        <HeroButton
          ref={heroButtonRef}
          style={{ animationDelay: '0.6s', '--animate-duration': '3s' }}
          href="#"
        >
          Book Your Trip
        </HeroButton>
          <HeroButton
          ref={heroButtonRef}
          style={{ animationDelay: '0.6s', '--animate-duration': '3s' }}
          href="#"
        >
          Book Your Trip
        </HeroButton> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
