import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { FaHandshake, FaLink, FaQuoteRight, FaGlobe, FaStar } from 'react-icons/fa';
import p14 from '../Images/p14.png'
import { useLocation } from 'react-router-dom';

// --- Styled Components for the Light Theme Section ---
const PartnershipsContainer = styled.section`
  background-color: #f3e9e2ff; // Light gray background
  color: #333; // Dark text color
  font-family: 'Inter', sans-serif;
  padding: 6rem 2rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ContentGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 992px) {
    text-align: center;
    order: 2; // Place the text columns below the image on mobile
  }
`;

const ImageColumn = styled.div`
  padding: 0 1rem;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 992px) {
    order: 1; // Keep the image at the top on mobile
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #7b1fa2; // A deep purple color from the image
  margin-bottom: 0.75rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background-color: #e0e0e0;
  }
`;

const SectionText = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: #555;
  margin-top: 2rem;
`;

const QuoteSection = styled.div`
  max-width: 700px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 500;
  color: #2c3e50;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Main Component
const PartnershipsAndAlliances = () => {
    const location = useLocation();
  const leftColumnRef = useRef(null);
  const imageColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            if (entry.target === leftColumnRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === imageColumnRef.current) {
              entry.target.classList.add('animate__rotateIn');
            } else if (entry.target === rightColumnRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === quoteRef.current) {
              entry.target.classList.add('animate__zoomIn');
            }
          } else {
            entry.target.classList.remove('animate__animated', 'animate__zoomInLeft', 'animate__zoomIn', 'animate__zoomInRight', 'animate__zoomInUp','animate__slideInLeft', 'animate__slideInRight','animate__rotateIn', 'animate__zoomIn' );
          }
        });
      },
      { threshold: 0.3 }
    );

    const allRefs = [leftColumnRef.current, imageColumnRef.current, rightColumnRef.current, quoteRef.current].filter(Boolean);
    allRefs.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      allRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);




    if(location.pathname==='/contactus'){

    return;
  }

  return (
    <PartnershipsContainer>
      <ContentGrid>
        {/* Left Text Column */}
        <TextColumn ref={leftColumnRef} style={{ '--animate-duration': '3s' }}>
          <div>
            <SectionTitle>Partnerships & Alliances</SectionTitle>
            <SectionText>
              We have forged strong partnerships with industry leaders to pioneer innovative solutions in Africa's mobility and energy sectors. Our collaborations with global and local partners ensure we deliver cutting-edge technology and services.
            </SectionText>
          </div>
          <div>
            <SectionTitle>Strategic Alliances</SectionTitle>
            <SectionText>
              Our alliances with NIO, STAR CHARGE, China Energy & China Power, EVESCO, and local partners like FAC Trade Track Ltd are the backbone of our operational excellence and strategic growth.
            </SectionText>
          </div>
        </TextColumn>

        {/* Central Image Column */}
        <ImageColumn ref={imageColumnRef} style={{ '--animate-duration': '3s' }}>
          <img src={p14} alt="A team of professionals collaborating" />
        </ImageColumn>

        {/* Right Text Column */}
        <TextColumn ref={rightColumnRef} style={{ '--animate-duration': '3s' }}>
          <div>
            <SectionTitle>Client Satisfaction</SectionTitle>
            <SectionText>
              We prioritize client satisfaction by delivering tailored and reliable solutions. Our dedicated team works closely with clients to understand their needs and provide seamless, high-quality service from start to finish.
            </SectionText>
          </div>
          <div>
            <SectionTitle>Personalised Service</SectionTitle>
            <SectionText>
              Every client is unique, and so are our solutions. We offer personalized guidance and support to ensure that your specific mobility and energy requirements are met with precision and care.
            </SectionText>
          </div>
        </TextColumn>
      </ContentGrid>
      
      {/* Quote Section below the grid */}
      <QuoteSection ref={quoteRef} style={{ '--animate-duration': '2s' }}>
        <QuoteText>
          "Alone we innovate; together we transform continents."
        </QuoteText>
      </QuoteSection>
    </PartnershipsContainer>
  );
};

export default PartnershipsAndAlliances;
