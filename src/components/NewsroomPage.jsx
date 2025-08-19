// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import 'animate.css';
// import { FaNewspaper, FaMicrophoneAlt, FaVideo, FaImage, FaHeadphones, FaPlay } from 'react-icons/fa';
// import p5 from '../Images/p5.jpg'
// import p8 from '../Images/p8.jpg'
// import p15 from '../Images/p15.png'
// import p16 from '../Images/p16.png'
// import p17 from '../Images/p17.png'
// import p18 from '../Images/p18.png'
// import p19 from '../Images/p19.png'
// import p20 from '../Images/p20.png'
// import p21 from '../Images/p21.jpg'


// // --- Styled Components for the Full Page ---
// const NewsroomPageContainer = styled.div`
//   background-color: #f0f2f5; // Very light gray background
//   color: #333;
//   font-family: 'Inter', sans-serif;
//   min-height: 100vh;
//   padding: 0;
//   margin: 0;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
//   overflow-x: hidden;
// `;

// // Hero Section
// const HeroSection = styled.div`
//   background-color: #2e1a2bff;
//   padding: 8rem 2rem 6rem;
//   text-align: center;
//   border-bottom: 2px solid #ddd;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
// `;

// const HeroTitle = styled.h1`
//   font-size: 3.5rem;
//   font-weight: 800;
//   color: white;
//   margin-bottom: 1rem;
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1.25rem;
//   font-weight: 400;
//   color: white;
//   max-width: 700px;
//   margin: 0 auto;
// `;

// // Main Content Section
// const MainContent = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 4rem 2rem;
// `;

// // General Section Styling
// const NewsSection = styled.section`
//   margin-bottom: 6rem;
// `;

// const SectionHeader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 3rem;
//   text-align: center;
// `;

// const SectionIcon = styled.div`
//   font-size: 3.5rem;
//   color: #ff5722;
//   margin-right: 1.5rem;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: #2c3e50;
//   border-bottom: 3px solid #ff5722;
//   padding-bottom: 0.5rem;
//   display: inline-block;
// `;

// // Press Releases
// const PressGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2rem;
// `;

// const PressCard = styled.div`
//   background-color: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//   overflow: hidden;
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
//   }
// `;

// const PressImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;

// const PressContent = styled.div`
//   padding: 1.5rem;
// `;

// const PressDate = styled.p`
//   font-size: 0.9rem;
//   color: #999;
//   margin-bottom: 0.5rem;
// `;

// const PressHeadline = styled.h4`
//   font-size: 1.25rem;
//   font-weight: 600;
//   color: #444;
//   line-height: 1.4;
// `;

// // Project Updates
// const ProjectUpdateList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const ProjectUpdateItem = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//   padding: 2rem;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// const UpdateImage = styled.img`
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   border-radius: 8px;
//   margin-right: 2rem;
  
//   @media (max-width: 768px) {
//     margin-right: 0;
//     margin-bottom: 1.5rem;
//   }
// `;

// const UpdateContent = styled.div`
//   flex: 1;
// `;

// const UpdateTitle = styled.h4`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: #2c3e50;
//   margin-bottom: 0.5rem;
// `;

// const UpdateText = styled.p`
//   color: #666;
//   line-height: 1.6;
// `;

// // Videos and Photo Galleries
// const GalleryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 1.5rem;
// `;

// const GalleryItem = styled.div`
//   position: relative;
//   background-color: #ddd;
//   border-radius: 12px;
//   overflow: hidden;
//   cursor: pointer;
//   transition: transform 0.3s ease-in-out;
  
//   &:hover {
//     transform: scale(1.03);
//   }
// `;

// const GalleryImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   display: block;
// `;

// const VideoOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.4);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const PlayButton = styled.div`
//   width: 60px;
//   height: 60px;
//   background-color: #ff5722;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 1.5rem;
//   box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
// `;

// // Media Coverage
// const MediaList = styled.ul`
//   list-style: none;
//   padding: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const MediaItem = styled.li`
//   background-color: #fff;
//   border-left: 5px solid #ff5722;
//   padding: 1rem 1.5rem;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
//   transition: transform 0.2s ease-in-out;
  
//   &:hover {
//     transform: translateX(5px);
//   }
// `;

// const MediaLink = styled.a`
//   font-size: 1.1rem;
//   font-weight: 500;
//   color: #2c3e50;
//   text-decoration: none;

//   &:hover {
//     color: #ff5722;
//   }
// `;

// const MediaSource = styled.span`
//   font-size: 0.9rem;
//   color: #999;
//   display: block;
//   margin-top: 0.25rem;
// `;

// // Main Component
// const NewsroomPage = () => {
//   const pressTitleRef = useRef(null);
//   const pressCard1Ref = useRef(null);
//   const pressCard2Ref = useRef(null);
//   const pressCard3Ref = useRef(null);
  
//   const projectTitleRef = useRef(null);
//   const project1Ref = useRef(null);
//   const project2Ref = useRef(null);

//   const galleryTitleRef = useRef(null);
//   const gallery1Ref = useRef(null);
//   const gallery2Ref = useRef(null);
//   const gallery3Ref = useRef(null);
//   const gallery4Ref = useRef(null);

//   const mediaTitleRef = useRef(null);
//   const media1Ref = useRef(null);
//   const media2Ref = useRef(null);
//   const media3Ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate__animated');
//             // Set animation duration
//             entry.target.style.setProperty('--animate-duration', '3s');

//             // Use different animations based on the element
//             if (entry.target === pressTitleRef.current || entry.target === projectTitleRef.current || entry.target === galleryTitleRef.current || entry.target === mediaTitleRef.current) {
//               entry.target.classList.add('animate__slideInLeft');
//             } else if (entry.target === project1Ref.current || entry.target === project2Ref.current || entry.target === media1Ref.current || entry.target === media2Ref.current || entry.target === media3Ref.current) {
//               entry.target.classList.add('animate__slideInUp');
//             } else {
//               entry.target.classList.add('animate__slideInRight');
//             }
//           } else {
//             entry.target.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__slideInUp');
//             // Reset animation duration
//             entry.target.style.setProperty('--animate-duration', '');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const allRefs = [
//       pressTitleRef.current, pressCard1Ref.current, pressCard2Ref.current, pressCard3Ref.current,
//       projectTitleRef.current, project1Ref.current, project2Ref.current,
//       galleryTitleRef.current, gallery1Ref.current, gallery2Ref.current, gallery3Ref.current, gallery4Ref.current,
//       mediaTitleRef.current, media1Ref.current, media2Ref.current, media3Ref.current
//     ].filter(Boolean);

//     allRefs.forEach(ref => {
//       observer.observe(ref);
//     });

//     return () => {
//       allRefs.forEach(ref => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <NewsroomPageContainer>
//       <HeroSection>
//         <HeroTitle >Newsroom / Media</HeroTitle>
//         <HeroSubtitle>
//           Stay up-to-date with the latest from OXONE INTERNATIONAL LTD, including press releases, project milestones, and media coverage of our work in clean mobility and energy.
//         </HeroSubtitle>
//       </HeroSection>

//       <MainContent>
//         {/* Press Releases Section */}
//         <NewsSection>
//           <SectionHeader>
//             <SectionIcon><FaNewspaper /></SectionIcon>
//             <SectionTitle ref={pressTitleRef}>Press Releases</SectionTitle>
//           </SectionHeader>
//           <PressGrid>
//             <PressCard ref={pressCard1Ref}>
//               <PressImage src={p16} alt="New electric vehicle launch" />
//               <PressContent>
//                 <PressDate>August 1, 2025</PressDate>
//                 <PressHeadline>OXONE to Launch New Line of Commercial Electric Vehicles</PressHeadline>
//               </PressContent>
//             </PressCard>
//             <PressCard ref={pressCard2Ref}>
//               <PressImage src={p15} alt="EV charging station network" />
//               <PressContent>
//                 <PressDate>July 15, 2025</PressDate>
//                 <PressHeadline>Pan-African Charging Network Set to Expand with New Corridors</PressHeadline>
//               </PressContent>
//             </PressCard>
//             <PressCard ref={pressCard3Ref}>
//               <PressImage src={p17} alt="Solar energy project" />
//               <PressContent>
//                 <PressDate>June 20, 2025</PressDate>
//                 <PressHeadline>OXONE's Renewable Microgrid Project Receives International Funding</PressHeadline>
//               </PressContent>
//             </PressCard>
//           </PressGrid>
//         </NewsSection>

//         {/* Project Updates Section */}
//         <NewsSection>
//           <SectionHeader>
//             <SectionIcon><FaMicrophoneAlt /></SectionIcon>
//             <SectionTitle ref={projectTitleRef}>Project Updates</SectionTitle>
//           </SectionHeader>
//           <ProjectUpdateList>
//             <ProjectUpdateItem ref={project1Ref}>
//               <UpdateImage src={p5} alt="Project Update 1" />
//               <UpdateContent>
//                 <UpdateTitle>Milestone: First Battery Swap Station goes Live in Lagos</UpdateTitle>
//                 <UpdateText>
//                   Our pilot battery swap station is now fully operational in a key commercial district of Lagos. This is a significant step towards our goal of creating a seamless EV ecosystem.
//                 </UpdateText>
//               </UpdateContent>
//             </ProjectUpdateItem>
//             <ProjectUpdateItem ref={project2Ref}>
//               <UpdateImage src={p8} alt="Project Update 2" />
//               <UpdateContent>
//                 <UpdateTitle>CNG Corridor Project in Final Design Phase</UpdateTitle>
//                 <UpdateText>
//                   The design and engineering for our Compressed Natural Gas (CNG) corridor connecting major industrial hubs has been finalized, with construction slated to begin next quarter.
//                 </UpdateText>
//               </UpdateContent>
//             </ProjectUpdateItem>
//           </ProjectUpdateList>
//         </NewsSection>

//         {/* Videos and Photo Galleries Section */}
//         <NewsSection>
//           <SectionHeader>
//             <SectionIcon><FaVideo /></SectionIcon>
//             <SectionTitle ref={galleryTitleRef}>Videos & Photo Galleries</SectionTitle>
//           </SectionHeader>
//           <GalleryGrid>
//             <GalleryItem ref={gallery1Ref}>
//               <GalleryImage src={p18} alt="Company video" />
//               <VideoOverlay>
//                 {/* <PlayButton><FaPlay /></PlayButton> */}
//               </VideoOverlay>
//             </GalleryItem>
//             <GalleryItem ref={gallery2Ref}>
//               <GalleryImage src={p19} alt="Event photo gallery" />
//             </GalleryItem>
//             <GalleryItem ref={gallery3Ref}>
//               <GalleryImage src={p20} alt="Facility photo gallery" />
//             </GalleryItem>
//             <GalleryItem ref={gallery4Ref}>
//               <GalleryImage src={p21} alt="Technology photo gallery" />
//             </GalleryItem>
//           </GalleryGrid>
//         </NewsSection>

//         {/* Media Coverage Section */}
//         <NewsSection>
//           <SectionHeader>
//             <SectionIcon><FaHeadphones /></SectionIcon>
//             <SectionTitle ref={mediaTitleRef}>Media Coverage</SectionTitle>
//           </SectionHeader>
//           <MediaList>
//             <MediaItem ref={media1Ref}>
//               <MediaLink href="#">Forbes Africa: "OXONE is Driving the EV Revolution Across Africa"</MediaLink>
//               <MediaSource>Forbes Africa | August 5, 2025</MediaSource>
//             </MediaItem>
//             <MediaItem ref={media2Ref}>
//               <MediaLink href="#">TechCrunch: "Africa's Mobility Sector Gets a Jolt from OXONE's Innovations"</MediaLink>
//               <MediaSource>TechCrunch | July 28, 2025</MediaSource>
//             </MediaItem>
//             <MediaItem ref={media3Ref}>
//               <MediaLink href="#">Local News: "OXONE Opens New Eco-Friendly Office in Abuja"</MediaLink>
//               <MediaSource>Local News Channel | July 10, 2025</MediaSource>
//             </MediaItem>
//           </MediaList>
//         </NewsSection>

//       </MainContent>
//     </NewsroomPageContainer>
//   );
// };

// export default NewsroomPage;



import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { FaNewspaper, FaMicrophoneAlt, FaVideo, FaImage, FaHeadphones, FaPlay, FaArrowUp } from 'react-icons/fa';

// Restoring your original image imports
import p5 from '../Images/p5.jpg'
import p8 from '../Images/p8.jpg'
import p15 from '../Images/p15.png'
import p16 from '../Images/p16.png'
import p17 from '../Images/p17.png'
import p18 from '../Images/p18.png'
import p19 from '../Images/p19.png'
import p20 from '../Images/p20.png'
import p21 from '../Images/p21.jpg'


// --- Styled Components for the Full Page ---
const NewsroomPageContainer = styled.div`
  background-color: #f0f2f5; // Very light gray background
  color: #333;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
`;

// Hero Section
const HeroSection = styled.div`
  background-color: #2e1a2bff;
  padding: 8rem 2rem 6rem;
  text-align: center;
  border-bottom: 2px solid #ddd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  max-width: 700px;
  margin: 0 auto;
`;

// Main Content Section
const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

// General Section Styling
const NewsSection = styled.section`
  margin-bottom: 6rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  text-align: center;
`;

const SectionIcon = styled.div`
  font-size: 3.5rem;
  color: #ff5722;
  margin-right: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  border-bottom: 3px solid #ff5722;
  padding-bottom: 0.5rem;
  display: inline-block;
`;

// Press Releases
const PressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PressCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const PressImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PressContent = styled.div`
  padding: 1.5rem;
`;

const PressDate = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 0.5rem;
`;

const PressHeadline = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #444;
  line-height: 1.4;
`;

// Project Updates
const ProjectUpdateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProjectUpdateItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const UpdateImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const UpdateContent = styled.div`
  flex: 1;
`;

const UpdateTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const UpdateText = styled.p`
  color: #666;
  line-height: 1.6;
`;

// Videos and Photo Galleries
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const GalleryItem = styled.div`
  position: relative;
  background-color: #ddd;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.03);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff5722;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

// Media Coverage
const MediaList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MediaItem = styled.li`
  background-color: #fff;
  border-left: 5px solid #ff5722;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const MediaLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: #2c3e50;
  text-decoration: none;

  &:hover {
    color: #ff5722;
  }
`;

const MediaSource = styled.span`
  font-size: 0.9rem;
  color: #999;
  display: block;
  margin-top: 0.25rem;
`;

const ScrollToTopButtonContainer = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #2e1a2bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 99;
  
  // These styles control the button's visibility
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transform: scale(${props => (props.isVisible ? '1' : '0')});
  pointer-events: ${props => (props.isVisible ? 'auto' : 'none')};
  
  &:hover {
    background-color: #ff5722;
  }
`;

// Main Component
const NewsroomPage = () => {
  const pressTitleRef = useRef(null);
  const pressCard1Ref = useRef(null);
  const pressCard2Ref = useRef(null);
  const pressCard3Ref = useRef(null);
  
  const projectTitleRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);

  const galleryTitleRef = useRef(null);
  const gallery1Ref = useRef(null);
  const gallery2Ref = useRef(null);
  const gallery3Ref = useRef(null);
  const gallery4Ref = useRef(null);

  const mediaTitleRef = useRef(null);
  const media1Ref = useRef(null);
  const media2Ref = useRef(null);
  const media3Ref = useRef(null);

  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);

  const [showScroll, setShowScroll] = useState(false);

  // A function to smoothly scroll the window to the top.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // This effect listens for the scroll event and updates the state.
  useEffect(() => {
    const checkScrollTop = () => {
      // The button will appear when the scroll position is more than 300px.
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  // Effect to handle the hero text animations
  useEffect(() => {
    if (heroTitleRef.current) {
      heroTitleRef.current.classList.add('animate__animated', 'animate__slideInDown');
      heroTitleRef.current.style.setProperty('--animate-duration', '3s');
    }
    if (heroSubtitleRef.current) {
      heroSubtitleRef.current.classList.add('animate__animated', 'animate__slideInUp');
      heroSubtitleRef.current.style.setProperty('--animate-duration', '3s');
      heroSubtitleRef.current.style.setProperty('--animate-delay', '0.5s');
    }
  }, []);

  // Effect to handle the section animations based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Set animation duration
            entry.target.style.setProperty('--animate-duration', '3s');

            // Use different animations based on the element
            if (entry.target === pressTitleRef.current || entry.target === projectTitleRef.current || entry.target === galleryTitleRef.current || entry.target === mediaTitleRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === project1Ref.current || entry.target === project2Ref.current || entry.target === media1Ref.current || entry.target === media2Ref.current || entry.target === media3Ref.current) {
              entry.target.classList.add('animate__zoomIn');
            } else {
              entry.target.classList.add('animate__zoomIn');
            }
          } else {
            entry.target.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__slideInUp', 'animate__slideInDown', 'animate__zoomIn');
            // Reset animation duration
            entry.target.style.setProperty('--animate-duration', '');
          }
        });
      },
      { threshold: 0.2 }
    );

    const allRefs = [
      pressTitleRef.current, pressCard1Ref.current, pressCard2Ref.current, pressCard3Ref.current,
      projectTitleRef.current, project1Ref.current, project2Ref.current,
      galleryTitleRef.current, gallery1Ref.current, gallery2Ref.current, gallery3Ref.current, gallery4Ref.current,
      mediaTitleRef.current, media1Ref.current, media2Ref.current, media3Ref.current
    ].filter(Boolean);

    allRefs.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      allRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <NewsroomPageContainer>
      <HeroSection>
        <HeroTitle ref={heroTitleRef}>Newsroom / Media</HeroTitle>
        <HeroSubtitle ref={heroSubtitleRef}>
          Stay up-to-date with the latest from OXONE INTERNATIONAL LTD, including press releases, project milestones, and media coverage of our work in clean mobility and energy.
        </HeroSubtitle>
      </HeroSection>

      <MainContent>
        {/* Press Releases Section */}
        <NewsSection>
          <SectionHeader>
            <SectionIcon><FaNewspaper /></SectionIcon>
            <SectionTitle ref={pressTitleRef}>Press Releases</SectionTitle>
          </SectionHeader>
          <PressGrid>
            <PressCard ref={pressCard1Ref}>
              <PressImage src={p16} alt="New electric vehicle launch" />
              <PressContent>
                <PressDate>August 1, 2025</PressDate>
                <PressHeadline>OXONE to Launch New Line of Commercial Electric Vehicles</PressHeadline>
              </PressContent>
            </PressCard>
            <PressCard ref={pressCard2Ref}>
              <PressImage src={p15} alt="EV charging station network" />
              <PressContent>
                <PressDate>July 15, 2025</PressDate>
                <PressHeadline>Pan-African Charging Network Set to Expand with New Corridors</PressHeadline>
              </PressContent>
            </PressCard>
            <PressCard ref={pressCard3Ref}>
              <PressImage src={p17} alt="Solar energy project" />
              <PressContent>
                <PressDate>June 20, 2025</PressDate>
                <PressHeadline>OXONE's Renewable Microgrid Project Receives International Funding</PressHeadline>
              </PressContent>
            </PressCard>
          </PressGrid>
        </NewsSection>

        {/* Project Updates Section */}
        <NewsSection>
          <SectionHeader>
            <SectionIcon><FaMicrophoneAlt /></SectionIcon>
            <SectionTitle ref={projectTitleRef}>Project Updates</SectionTitle>
          </SectionHeader>
          <ProjectUpdateList>
            <ProjectUpdateItem ref={project1Ref}>
              <UpdateImage src={p5} alt="Project Update 1" />
              <UpdateContent>
                <UpdateTitle>Milestone: First Battery Swap Station goes Live in Lagos</UpdateTitle>
                <UpdateText>
                  Our pilot battery swap station is now fully operational in a key commercial district of Lagos. This is a significant step towards our goal of creating a seamless EV ecosystem.
                </UpdateText>
              </UpdateContent>
            </ProjectUpdateItem>
            <ProjectUpdateItem ref={project2Ref}>
              <UpdateImage src={p8} alt="Project Update 2" />
              <UpdateContent>
                <UpdateTitle>CNG Corridor Project in Final Design Phase</UpdateTitle>
                <UpdateText>
                  The design and engineering for our Compressed Natural Gas (CNG) corridor connecting major industrial hubs has been finalized, with construction slated to begin next quarter.
                </UpdateText>
              </UpdateContent>
            </ProjectUpdateItem>
          </ProjectUpdateList>
        </NewsSection>

        {/* Videos and Photo Galleries Section */}
        <NewsSection>
          <SectionHeader>
            <SectionIcon><FaVideo /></SectionIcon>
            <SectionTitle ref={galleryTitleRef}>Videos & Photo Galleries</SectionTitle>
          </SectionHeader>
          <GalleryGrid>
            <GalleryItem ref={gallery1Ref}>
              <GalleryImage src={p18} alt="Company video" />
              <VideoOverlay>
                <PlayButton><FaPlay /></PlayButton>
              </VideoOverlay>
            </GalleryItem>
            <GalleryItem ref={gallery2Ref}>
              <GalleryImage src={p19} alt="Event photo gallery" />
            </GalleryItem>
            <GalleryItem ref={gallery3Ref}>
              <GalleryImage src={p20} alt="Facility photo gallery" />
            </GalleryItem>
            <GalleryItem ref={gallery4Ref}>
              <GalleryImage src={p21} alt="Technology photo gallery" />
            </GalleryItem>
          </GalleryGrid>
        </NewsSection>

        {/* Media Coverage Section */}
        <NewsSection>
          <SectionHeader>
            <SectionIcon><FaHeadphones /></SectionIcon>
            <SectionTitle ref={mediaTitleRef}>Media Coverage</SectionTitle>
          </SectionHeader>
          <MediaList>
            <MediaItem ref={media1Ref}>
              <MediaLink href="#">Forbes Africa: "OXONE is Driving the EV Revolution Across Africa"</MediaLink>
              <MediaSource>Forbes Africa | August 5, 2025</MediaSource>
            </MediaItem>
            <MediaItem ref={media2Ref}>
              <MediaLink href="#">TechCrunch: "Africa's Mobility Sector Gets a Jolt from OXONE's Innovations"</MediaLink>
              <MediaSource>TechCrunch | July 28, 2025</MediaSource>
            </MediaItem>
            <MediaItem ref={media3Ref}>
              <MediaLink href="#">Local News: "OXONE Opens New Eco-Friendly Office in Abuja"</MediaLink>
              <MediaSource>Local News Channel | July 10, 2025</MediaSource>
            </MediaItem>
          </MediaList>
        </NewsSection>

      </MainContent>
      <ScrollToTopButtonContainer onClick={scrollToTop} isVisible={showScroll}>
        <FaArrowUp />
      </ScrollToTopButtonContainer>
    </NewsroomPageContainer>
  );
};

export default NewsroomPage;
