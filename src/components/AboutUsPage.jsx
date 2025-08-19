
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import h1 from '../Images/h1.jpg'
import p4 from '../Images/p4.jpg'

// --- Styled Components for the Page Layout ---
const AboutUsContainer = styled.div`
  background-color: #f3e9e2ff; // A deep, professional blue-purple background.
  color: #222; // A light color for text for good contrast.
  font-family: 'Inter', sans-serif;
  overflow: hidden;
`;

// --- Hero Section ---
const HeroSection = styled.section`
  position: relative;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${h1});
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: multiply;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color:white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color:white;
  
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// --- Content Sections ---
const Section = styled.section`
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #ff5722;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 3rem auto;
//   color: #c0c0c0;
`;

// --- Two-Column Layout for Mission and Values ---
const ColumnsContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  text-align: left;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const ListTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ff5722;
`;

const ListItem = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  padding-left: 1rem;
  border-left: 3px solid #ff5722;
  
  @media (max-width: 992px) {
    padding-left: 0;
    border-left: none;
  }
`;

// --- CEO Quote Section ---
const QuoteSection = styled.section`
  background-color: #2b2b45;
  padding: 8rem 2rem;
  text-align: center;
  margin: 4rem 0;
`;

const QuoteText = styled.p`
  font-size: 2rem;
  font-style: italic;
  max-width: 900px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
  color: #e0e0e0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ff5722;
`;

// --- The main About Us Page Component ---
const AboutUsPage = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const storyTitleRef = useRef(null);
  const storyTextRef = useRef(null);
  const visionTitleRef = useRef(null);
  const visionTextRef = useRef(null);
  const missionTitleRef = useRef(null);
  const missionListRef = useRef(null);
  const valuesTitleRef = useRef(null);
  const valuesListRef = useRef(null);
  const quoteTextRef = useRef(null);
  const quoteAuthorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Applying specific animations to different elements
            if (entry.target === heroTitleRef.current || entry.target === heroSubtitleRef.current) {
                entry.target.classList.add('animate__zoomInDown');
            } else if (entry.target === storyTitleRef.current) {
                entry.target.classList.add('animate__rotateIn');
            } else if (entry.target === storyTextRef.current) {
                entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === visionTitleRef.current || entry.target === missionTitleRef.current || entry.target === valuesTitleRef.current) {
                entry.target.classList.add('animate__rotateIn');
            } else if (entry.target === visionTextRef.current || entry.target === missionListRef.current || entry.target === valuesListRef.current) {
                entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === quoteTextRef.current || entry.target === quoteAuthorRef.current) {
                entry.target.classList.add('animate__zoomIn');
            }
          } else {
            // Remove animation classes when out of view
            entry.target.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__zoomIn', 'animate__fadeInUp', 'animate__fadeIn', 'animate__rotateIn',  'animate__zoomInDown');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    // Observe all elements with refs
    [heroTitleRef, heroSubtitleRef, storyTitleRef, storyTextRef, visionTitleRef, visionTextRef, missionTitleRef, missionListRef, valuesTitleRef, valuesListRef, quoteTextRef, quoteAuthorRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <AboutUsContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle ref={heroTitleRef} style={{ '--animate-duration': '3s' }}>
            About OXONE INTERNATIONAL LTD
          </HeroTitle>
          <HeroSubtitle ref={heroSubtitleRef} style={{ '--animate-duration': '3s' }}>
            Driving Africa’s future through clean mobility and energy solutions.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Our Story Section */}
      <Section>
        <SectionTitle ref={storyTitleRef} style={{ '--animate-duration': '3s' }}>
          Our Story
        </SectionTitle>
        <SectionText ref={storyTextRef} style={{ '--animate-duration': '3s' }}>
          OXONE INTERNATIONAL LTD was founded to transform Africa’s mobility and energy ecosystem. By combining cutting-edge technology, industrial capacity, and strategic partnerships, we provide integrated solutions across vehicles, charging infrastructure, renewable energy, and energy-saving appliances.
        </SectionText>
      </Section>
      
      {/* Vision, Mission, and Core Values Section */}
      <Section>
        <ColumnsContainer>
          {/* Vision and Mission Column */}
          <Column>
            <SectionTitle ref={visionTitleRef} style={{ '--animate-duration': '3s' }}>
              Our Vision
            </SectionTitle>
            <SectionText ref={visionTextRef} style={{ '--animate-duration': '3s' }}>
              “To become Africa’s most trusted and technologically advanced provider of mobility, energy, and industrial solutions.”
            </SectionText>

            <ListTitle ref={missionTitleRef} style={{ '--animate-duration': '3s' }}>
              Our Mission
            </ListTitle>
            <div ref={missionListRef} style={{ '--animate-duration': '3s' }}>
              <ListItem>Deliver innovative EV, CNG, and hydrogen vehicles across Africa.</ListItem>
              <ListItem>Deploy renewable energy-powered charging and refueling stations.</ListItem>
              <ListItem>Advance long-range battery technologies and mobile/emergency charging solutions.</ListItem>
              <ListItem>Create industrial hubs and workforce development programs to support sustainable growth.</ListItem>
            </div>
          </Column>

          {/* Core Values Column */}
          <Column>
            <ListTitle ref={valuesTitleRef} style={{ '--animate-duration': '3s' }}>
              Core Values
            </ListTitle>
            <div ref={valuesListRef} style={{ '--animate-duration': '3s' }}>
              <ListItem><b>Innovation:</b> Advancing technology to meet Africa’s energy and mobility needs.</ListItem>
              <ListItem><b>Sustainability:</b> Embedding ESG principles in every operation.</ListItem>
              <ListItem><b>Reliability:</b> Ensuring uninterrupted mobility and energy solutions.</ListItem>
              <ListItem><b>Collaboration:</b> Partnering with governments, investors, and communities.</ListItem>
              <ListItem><b>Excellence:</b> Maintaining global standards in governance, operations, and customer experience.</ListItem>
            </div>
            {/* Placeholder image for a visual break */}
            <img src={p4} alt="Solar-powered charging station" style={{width: '100%', borderRadius: '15px', marginTop: '3rem', boxShadow: '0 8px 16px rgba(0,0,0,0.2)'}} />
          </Column>
        </ColumnsContainer>
      </Section>

      {/* Quote from CEO Section */}
      <QuoteSection>
        <QuoteText ref={quoteTextRef} style={{ '--animate-duration': '3s' }}>
          "Our mission is not just to provide vehicles or energy — it is to transform Africa’s mobility and energy landscape."
        </QuoteText>
        <QuoteAuthor ref={quoteAuthorRef} style={{ '--animate-duration': '3s' }}>
          — CEO, OXONE INTERNATIONAL LTD
        </QuoteAuthor>
      </QuoteSection>

    </AboutUsContainer>
  );
};

export default AboutUsPage;
