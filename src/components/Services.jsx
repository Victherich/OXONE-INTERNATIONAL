import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import p5 from '../Images/p5.jpg'
import p6 from '../Images/p6.jpg'
import p7 from '../Images/p7.jpg'
import p8 from '../Images/p8.jpg'
import p9 from '../Images/p9.jpg'
import p10 from '../Images/p10.png'
import p11 from '../Images/p11.png'

// --- Styled Components for the Page Layout ---
const SolutionsContainer = styled.div`
  background-color: #f3e9e2ff; // A deep, professional blue-gray background.
  color: #222; // Light text for good contrast.
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
    background-image: url(${p5});
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
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// --- Solutions Grid Section ---
const SolutionsGridSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  justify-items: center;
`;

const SolutionCard = styled.div`
//   background-color: #263649; // A slightly lighter shade for the cards.
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ff5722;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #ff5722;
      font-weight: bold;
    }
  }
`;

// --- The main Solutions Page Component ---
const SolutionsPage = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const cardRefs = useRef([]);
  
  const addToRefs = (el) => {
    if (el) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Applying specific animations to different elements
            if (entry.target === heroTitleRef.current || entry.target === heroSubtitleRef.current) {
                entry.target.classList.add('animate__rotateIn');
            } else {
                entry.target.classList.add('animate__zoomIn');
            }
          } else {
            // Remove animation classes when out of view
            entry.target.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__zoomIn');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    // Filter out any null values before observing
    const allRefs = [heroTitleRef.current, heroSubtitleRef.current, ...cardRefs.current].filter(Boolean);
    
    allRefs.forEach(ref => {
      observer.observe(ref);
    });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <SolutionsContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle ref={heroTitleRef} style={{ '--animate-duration': '3s' }}>
            Our Integrated Solutions
          </HeroTitle>
          <HeroSubtitle ref={heroSubtitleRef} style={{ '--animate-duration': '3s' }}>
            A comprehensive suite of mobility, energy, and digital platforms to power a cleaner Africa.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Solutions Grid */}
      <SolutionsGridSection>
        <GridContainer>
          {/* Card 1: Electric & CNG Vehicles */}
          <SolutionCard ref={addToRefs} style={{ '--animate-duration': '3s' }}>
            <CardImage src={p6} alt="A variety of electric and CNG vehicles" />
            <CardTitle>Electric & CNG Vehicles</CardTitle>
            <CardList>
              <li>Cars, buses, trucks, motorcycles</li>
              <li>Long-range battery technology</li>
              <li>Battery-as-a-Service (BaaS) networks</li>
            </CardList>
          </SolutionCard>

          {/* Card 2: Battery & Charging Solutions */}
          <SolutionCard ref={addToRefs} style={{ '--animate-duration': '3s' }}>
            <CardImage src={p7} alt="An electric vehicle charging at a station" />
            <CardTitle>Battery & Charging Solutions</CardTitle>
            <CardList>
              <li>Battery swap stations</li>
              <li>Mobile and emergency charging appliances</li>
              <li>AI-enabled energy management</li>
            </CardList>
          </SolutionCard>

          {/* Card 3: Renewable Energy Infrastructure */}
          <SolutionCard ref={addToRefs} style={{ '--animate-duration': '3s' }}>
            <CardImage src={p8} alt="Solar panels providing power for a charging station" />
            <CardTitle>Renewable Energy Infrastructure</CardTitle>
            <CardList>
              <li>Solar-powered charging stations</li>
              <li>Hybrid energy microgrids</li>
              <li>Vehicle-to-Grid (V2G) integration</li>
            </CardList>
          </SolutionCard>
          
          {/* Card 4: CNG & Hydrogen Refueling Stations */}
          <SolutionCard ref={addToRefs} style={{ '--animate-duration': '3s' }}>
            <CardImage src={p9} alt="A CNG and hydrogen refueling station" />
            <CardTitle>CNG & Hydrogen Refueling Stations</CardTitle>
            <CardList>
              <li>Urban and industrial mobility solutions</li>
              <li>Logistics and fleet support</li>
            </CardList>
          </SolutionCard>

          {/* Card 5: Energy-Saving Appliances */}
          <SolutionCard ref={addToRefs} style={{ '--animate-duration': '3s' }}>
            <CardImage src={p10} alt="Energy-efficient appliances in a modern home" />
            <CardTitle>Energy-Saving Appliances</CardTitle>
            <CardList>
              <li>Residential, industrial, and commercial applications</li>
              <li>Integration with renewable energy systems</li>
            </CardList>
          </SolutionCard>
          
          {/* Card 6: Digital Platforms */}
          <SolutionCard ref={addToRefs} style={{ '--animate-duration': '3s' }}>
            <CardImage src={p11} alt="A dashboard showing data on a digital platform" />
            <CardTitle>Digital Platforms</CardTitle>
            <CardList>
              <li>Mobility-as-a-Service (MaaS)</li>
              <li>Energy-as-a-Service (EaaS)</li>
              <li>Predictive maintenance and fleet optimization</li>
            </CardList>
          </SolutionCard>
        </GridContainer>
      </SolutionsGridSection>

    </SolutionsContainer>
  );
};

export default SolutionsPage;
