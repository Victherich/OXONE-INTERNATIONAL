import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';

// This is the main container for the entire solutions section.
const SolutionsContainer = styled.section`
  // The new background color from your image.
  background-color: #f3e9e2ff;
  color: #222; // Light text for contrast.
  padding: 6rem 2rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
  overflow: hidden; // Prevents any horizontal scrollbar issues.
`;

// Container for the main content to control its width.
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Main heading for the section.
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #ff5722; // A vibrant color to match the header.
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Subtitle for the section.
const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Container for the three solution cards.
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// A single card for each solution.
const SolutionCard = styled.div`
  background-color: rgba(255,255,255,0.1); // A slightly lighter dark color for the cards.
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: left;
  transition: transform 0.3s ease-in-out;
  border: 1px solid #30363d;

  &:hover {
    transform: translateY(-5px); // Lively hover effect.
  }
`;

// Heading for each card.
const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color:purple;
`;

// Description text for each card.
const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #222;
`;

// Call-to-action button for each card.
const CardButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #ff5722;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e64a19;
  }
`;

// The main SolutionsSection component.
const SolutionsSection = () => {
  // Refs for the elements we want to animate.
  const sectionTitleRef = useRef(null);
  const sectionSubtitleRef = useRef(null);
  const card1TitleRef = useRef(null);
  const card1TextRef = useRef(null);
  const card1ButtonRef = useRef(null);
  const card2TitleRef = useRef(null);
  const card2TextRef = useRef(null);
  const card2ButtonRef = useRef(null);
  const card3TitleRef = useRef(null);
  const card3TextRef = useRef(null);
  const card3ButtonRef = useRef(null);

  // useEffect to handle the scroll animation with IntersectionObserver.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add('animate__animated');
            // Applying the animations based on the element type.
            if (target === sectionTitleRef.current) {
                target.classList.add('animate__zoomIn');
            } else if (target === sectionSubtitleRef.current) {
                target.classList.add('animate__zoomIn');
            } 
         
            else {
                // Animate the text and buttons within the cards.
                target.classList.add('animate__zoomIn');
            }
          } else {
            // Remove all animation classes when out of view.
            target.classList.remove('animate__animated');
            target.classList.remove('animate__zoomIn');
            target.classList.remove('animate__rotateIn');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible.
    );

    // Observe each of the elements.
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
    if (sectionSubtitleRef.current) observer.observe(sectionSubtitleRef.current);
    if (card1TitleRef.current) observer.observe(card1TitleRef.current);
    if (card1TextRef.current) observer.observe(card1TextRef.current);
    if (card1ButtonRef.current) observer.observe(card1ButtonRef.current);
    if (card2TitleRef.current) observer.observe(card2TitleRef.current);
    if (card2TextRef.current) observer.observe(card2TextRef.current);
    if (card2ButtonRef.current) observer.observe(card2ButtonRef.current);
    if (card3TitleRef.current) observer.observe(card3TitleRef.current);
    if (card3TextRef.current) observer.observe(card3TextRef.current);
    if (card3ButtonRef.current) observer.observe(card3ButtonRef.current);

    // Clean up the observer when the component unmounts.
    return () => {
      if (sectionTitleRef.current) observer.unobserve(sectionTitleRef.current);
      if (sectionSubtitleRef.current) observer.unobserve(sectionSubtitleRef.current);
      if (card1TitleRef.current) observer.unobserve(card1TitleRef.current);
      if (card1TextRef.current) observer.unobserve(card1TextRef.current);
      if (card1ButtonRef.current) observer.unobserve(card1ButtonRef.current);
      if (card2TitleRef.current) observer.unobserve(card2TitleRef.current);
      if (card2TextRef.current) observer.unobserve(card2TextRef.current);
      if (card2ButtonRef.current) observer.unobserve(card2ButtonRef.current);
      if (card3TitleRef.current) observer.unobserve(card3TitleRef.current);
      if (card3TextRef.current) observer.unobserve(card3TextRef.current);
      if (card3ButtonRef.current) observer.unobserve(card3ButtonRef.current);
    };
  }, []);

  return (
    <SolutionsContainer>
      <ContentWrapper>
        {/* Main section title and subtitle with animation speed set to 5s */}
        <SectionTitle 
          ref={sectionTitleRef} 
          style={{ '--animate-duration': '5s' }}
        >
          Our Solutions for a Sustainable Future
        </SectionTitle>
        <SectionSubtitle 
          ref={sectionSubtitleRef} 
          style={{ '--animate-duration': '5s' }}
        >
          At OXONE INTERNATIONAL LTD, we are committed to building a cleaner, more efficient Africa through our innovative solutions in mobility, energy infrastructure, and storage.
        </SectionSubtitle>

        {/* The three solution cards */}
        <CardsContainer>
          {/* Card 1: Explore Solutions */}
          <SolutionCard>
            <CardTitle ref={card1TitleRef} style={{ '--animate-duration': '5s' }}>Explore Solutions</CardTitle>
            <CardText ref={card1TextRef} style={{ '--animate-duration': '5s' }}>
              Discover our comprehensive range of electric, CNG, and hydrogen-powered mobility solutions. From personal vehicles to public transport fleets, we provide sustainable options that reduce emissions and power Africa’s clean future.
            </CardText>
            <CardButton ref={card1ButtonRef} style={{ '--animate-duration': '5s' }} href="#">Explore Solutions</CardButton>
          </SolutionCard>

          {/* Card 2: Partner with Us */}
          <SolutionCard>
            <CardTitle ref={card2TitleRef} style={{ '--animate-duration': '5s' }}>Partner with Us</CardTitle>
            <CardText ref={card2TextRef} style={{ '--animate-duration': '5s' }}>
              Join us in our mission to transform Africa. We are seeking collaborations with government agencies, private companies, and communities to develop and implement clean energy projects and infrastructure across the continent.
            </CardText>
            <CardButton ref={card2ButtonRef} style={{ '--animate-duration': '5s' }} href="#">Partner with Us</CardButton>
          </SolutionCard>

          {/* Card 3: Invest in Africa’s Clean Mobility */}
          <SolutionCard>
            <CardTitle ref={card3TitleRef} style={{ '--animate-duration': '5s' }}>Invest in Our Vision</CardTitle>
            <CardText ref={card3TextRef} style={{ '--animate-duration': '5s' }}>
              Be a part of Africa’s energy revolution. Your investment in our renewable energy infrastructure and advanced energy storage technologies will help drive economic growth and create a more sustainable and prosperous future for all.
            </CardText>
            <CardButton ref={card3ButtonRef} style={{ '--animate-duration': '5s' }} href="#">Invest in Africa’s Clean Mobility</CardButton>
          </SolutionCard>
        </CardsContainer>
      </ContentWrapper>
    </SolutionsContainer>
  );
};

export default SolutionsSection;
