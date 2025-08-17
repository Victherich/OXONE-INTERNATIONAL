import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { FaGlobeAfrica, FaLightbulb, FaQuoteRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// --- Styled Components for the Light Theme Section ---
const InfrastructureContainer = styled.section`
  background-color: #f8f8f8; // Light gray background
  color: #333; // Dark text color
  font-family: 'Inter', sans-serif;
  padding: 6rem 2rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const ContentGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  svg {
    font-size: 2rem;
    margin-right: 0.75rem;
    color: #ff5722; // Orange accent color
  }
`;

const SectionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
    color: #555;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #ff5722;
      font-weight: bold;
    }
  }
`;

const QuoteSection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;

  svg {
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    color: #ff5722;
    opacity: 0.1;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff5722; // Using the consistent orange accent color
  margin-bottom: 1rem;
  text-align:center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Main Component
const InfrastructureTechnology = () => {
    const location = useLocation();
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Apply different animations based on the element
            if (entry.target === card1Ref.current) {
              entry.target.classList.add('animate__slideInRight');
            } else if (entry.target === card2Ref.current) {
              entry.target.classList.add('animate__slideInLeft');
            } else if (entry.target === quoteRef.current) {
              entry.target.classList.add('animate__zoomIn');
            }
          } else {
            // Remove all animation classes when out of view
            entry.target.classList.remove(
              'animate__animated',
              'animate__slideInLeft',
              'animate__slideInRight',
              'animate__zoomIn'
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    const allRefs = [card1Ref.current, card2Ref.current, quoteRef.current].filter(Boolean);
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
    <InfrastructureContainer>
      

         <CTATitle style={{ '--animate-duration': '4s' }}>
           Infrastructure & Technology
        </CTATitle>
      <ContentGrid>
        {/* Pan-African Mobility Network Section */}
        <SectionCard ref={card1Ref} style={{ '--animate-duration': '4s' }}>
          <SectionTitle>
            <FaGlobeAfrica /> Pan-African Mobility Network
          </SectionTitle>
          <SectionList>
            <li>EV, CNG, and hydrogen corridors connecting major cities and industrial hubs</li>
            <li>Battery swap and renewable charging stations</li>
            <li>Mobile and emergency energy solutions</li>
          </SectionList>
        </SectionCard>

        {/* Innovation Highlights Section */}
        <SectionCard ref={card2Ref} style={{ '--animate-duration': '4s' }}>
          <SectionTitle>
            <FaLightbulb /> Innovation Highlights
          </SectionTitle>
          <SectionList>
            <li>Long-range lithium-ion and LFP batteries</li>
            <li>AI-enabled fleet management</li>
            <li>Renewable microgrid integration</li>
          </SectionList>
        </SectionCard>
      </ContentGrid>

      {/* Quote Section */}
      <QuoteSection ref={quoteRef} style={{ '--animate-duration': '4s' }}>
        <QuoteText>
          <FaQuoteRight />
          "Innovation without implementation is merely imagination."
        </QuoteText>
      </QuoteSection>
    </InfrastructureContainer>
  );
};

export default InfrastructureTechnology;
