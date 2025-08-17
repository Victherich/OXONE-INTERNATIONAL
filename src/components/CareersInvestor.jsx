
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { FaBriefcase, FaChartLine, FaQuoteRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// --- Styled Components for the Light Theme Section ---
const CareersInvestorContainer = styled.section`
  background-color: #f8f8f8; // Light gray background
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
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const SectionBlock = styled.div`
  background-color: transparent;
  padding: 2rem;
  width: 100%;
  
  @media (min-width: 768px) {
    width: calc(50% - 2rem);
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }

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
  text-align: left;

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

// Main Component
const CareersInvestor = () => {
    const location = useLocation();
  const careersRef = useRef(null);
  const investorRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Apply different animations based on the element
            if (entry.target === careersRef.current) {
              entry.target.classList.add('animate__slideInRight');
            } else if (entry.target === investorRef.current) {
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

    const allRefs = [careersRef.current, investorRef.current, quoteRef.current].filter(Boolean);
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
    <CareersInvestorContainer>
      <ContentGrid>
        {/* Careers Section */}
        <SectionBlock ref={careersRef} style={{ '--animate-duration': '4s' }}>
          <SectionTitle>
            <FaBriefcase /> Careers
          </SectionTitle>
          <SectionList>
            <li>Current vacancies for engineers, technicians, operations, and management</li>
            <li>Internship and skills development programs</li>
            <li>Corporate culture and employee value proposition</li>
          </SectionList>
        </SectionBlock>

        {/* Investor Relations Section */}
        <SectionBlock ref={investorRef} style={{ '--animate-duration': '4s' }}>
          <SectionTitle>
            <FaChartLine /> Investor Relations
          </SectionTitle>
          <SectionList>
            <li>Financial highlights, investment models, ROI projections</li>
            <li>ESG-linked investment opportunities</li>
            <li>Investor contacts and downloadable reports</li>
          </SectionList>
        </SectionBlock>
      </ContentGrid>

      {/* Quote Section */}
      <QuoteSection ref={quoteRef} style={{ '--animate-duration': '4s' }}>
        <QuoteText>
          <FaQuoteRight />
          "Sustainability is not an option; it is the foundation of our legacy."
        </QuoteText>
      </QuoteSection>
    </CareersInvestorContainer>
  );
};

export default CareersInvestor;
