import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import p13 from '../Images/p13.png'

// Styled components for the brief about section
const BriefAboutContainer = styled.section`
  background-color: #2e1a2bff; // Dark background color
  color: #f0f0f0;
  font-family: 'Inter', sans-serif;
  padding: 6rem 2rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
`;

const ContentGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;

  // Responsive layout for mobile
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }

  // Responsive styling for mobile
  @media (max-width: 992px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff5722; // Orange accent color
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #c0c0c0; // Light gray for body text
`;

const AboutButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2.5rem;
  background-color: #ff5722;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #e64a19;
    transform: translateY(-3px);
  }
`;

// Main Brief About Component
const BriefAbout = () => {
  const imageRef = useRef(null);
  const textContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Apply different animations
            if (entry.target === imageRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === textContentRef.current) {
              entry.target.classList.add('animate__zoomIn');
            }
          } else {
            // Remove animation classes when out of view
            entry.target.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__zoomInLeft', 'animate__zoomInRight', 'animate__slideInRight', 'animate__slideInLeft',  'animate__zoomIn');
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all elements with refs
    const allRefs = [imageRef.current, textContentRef.current].filter(Boolean);
    allRefs.forEach(ref => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <BriefAboutContainer>
      <ContentGrid>
        <ImageContainer ref={imageRef} style={{ '--animate-duration': '3s' }}>
          <img src={p13} alt="Our team at OXONE INTERNATIONAL LTD" />
        </ImageContainer>
        <TextContent ref={textContentRef} style={{ '--animate-duration': '3s' }}>
          <AboutTitle>
            Who We Are
          </AboutTitle>
          <AboutText>
            OXONE INTERNATIONAL LTD is a leader in transforming Africa’s mobility and energy sectors. We deliver innovative solutions in electric vehicles, charging infrastructure, and sustainable energy, driven by our core values of innovation, sustainability, and reliability.
          </AboutText>
          <AboutButton href="/aboutus">
            Learn More About Us
          </AboutButton>
        </TextContent>
      </ContentGrid>
    </BriefAboutContainer>
  );
};

export default BriefAbout;
