
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { FaLeaf, FaUsers, FaBalanceScale, FaQuoteRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// --- Styled Components for the Light Theme Section ---
const ESGContainer = styled.section`
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
const ESGCommitment = () => {
    const location = useLocation();
  const envRef = useRef(null);
  const socialRef = useRef(null);
  const govRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Apply different animations based on the element
            if (entry.target === envRef.current) {
              entry.target.classList.add('animate__slideInRight');
            } else if (entry.target === socialRef.current) {
              entry.target.classList.add('animate__slideInLeft');
            } else if (entry.target === govRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === quoteRef.current) {
              entry.target.classList.add('animate__zoomIn');
            }
          } else {
            // Remove all animation classes when out of view
            entry.target.classList.remove(
              'animate__animated',
              'animate__slideInLeft',
              'animate__zoomIn',
              'animate__slideInRight'
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    const allRefs = [envRef.current, socialRef.current, govRef.current, quoteRef.current].filter(Boolean);
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
    <ESGContainer>

        <CTATitle>
             ESG Commitment
        </CTATitle>
      <ContentGrid>
        {/* Environmental Section */}
        <SectionCard ref={envRef} style={{ '--animate-duration': '4s' }}>
          <SectionTitle>
            <FaLeaf /> Environmental
          </SectionTitle>
          <SectionList>
            <li>Carbon reduction</li>
            <li>Emission-free vehicles</li>
            <li>Renewable energy adoption</li>
          </SectionList>
        </SectionCard>

        {/* Social Section */}
        <SectionCard ref={socialRef} style={{ '--animate-duration': '4s' }}>
          <SectionTitle>
            <FaUsers /> Social
          </SectionTitle>
          <SectionList>
            <li>Job creation</li>
            <li>Workforce training</li>
            <li>Community engagement</li>
          </SectionList>
        </SectionCard>
        
        {/* Governance Section */}
        <SectionCard ref={govRef} style={{ '--animate-duration': '4s' }}>
          <SectionTitle>
            <FaBalanceScale /> Governance
          </SectionTitle>
          <SectionList>
            <li>ISO-certified operations</li>
            <li>Transparent reporting</li>
            <li>Ethical business practices</li>
          </SectionList>
        </SectionCard>
      </ContentGrid>

      {/* Quote Section */}
      <QuoteSection ref={quoteRef} style={{ '--animate-duration': '4s' }}>
        <QuoteText>
          <FaQuoteRight />
          "Sustainability is not an option; it is the foundation of our legacy."
        </QuoteText>
      </QuoteSection>
    </ESGContainer>
  );
};

export default ESGCommitment;
