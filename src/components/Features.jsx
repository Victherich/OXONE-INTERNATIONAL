import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';
import p1 from '../Images/p1.jpg'
import p2 from '../Images/p2.jpg'
import p3 from '../Images/p3.png'


// Main container for the services section.
const ServicesContainer = styled.section`
  // New background color from the provided image.
  background-color: #F7F2EF; 
  color: #333333; // A dark color for contrast on the light background.
  font-family: 'Inter', sans-serif;
  padding: 6rem 2rem;
  overflow: hidden;
`;

// A wrapper for the main content to control width.
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Main heading for the section.
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4rem;
  color: #ff5722;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// A container for the individual service items.
const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 6rem;
  text-align: left;
  
  // This will reverse the layout for every other item.
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    &:nth-child(even) {
        flex-direction: column;
    }
  }
`;

// Container for the image.
const ImageContainer = styled.div`
  flex: 1;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Container for the text content.
const TextContainer = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
//   color: #444444; // A dark gray for the titles.
color:purple;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ItemText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #555555; // A slightly lighter dark gray for the body text.
`;

const ItemButton = styled.a`
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

// The main ServicesSection component.
const Features = () => {
  // We'll use multiple refs for each element we want to animate.
  const sectionTitleRef = useRef(null);
  const evsImageRef = useRef(null);
  const evsTextRef = useRef(null);
  const stationsImageRef = useRef(null);
  const stationsTextRef = useRef(null);
  const servicesImageRef = useRef(null);
  const servicesTextRef = useRef(null);
  
  // useEffect to handle the scroll animation with IntersectionObserver.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Applying the animations based on the element.
            if (entry.target === sectionTitleRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === evsImageRef.current || entry.target === servicesImageRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === evsTextRef.current || entry.target === servicesTextRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === stationsImageRef.current) {
              entry.target.classList.add('animate__zoomIn');
            } else if (entry.target === stationsTextRef.current) {
              entry.target.classList.add('animate__zoomIn');
            }
          } else {
            // Remove animation classes when out of view.
            entry.target.classList.remove('animate__animated');
            entry.target.classList.remove('animate__zoomIn');
            entry.target.classList.remove('animate__fadeInLeft');
            entry.target.classList.remove('animate__fadeInRight');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible.
    );
    
    // Observe each element.
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
    if (evsImageRef.current) observer.observe(evsImageRef.current);
    if (evsTextRef.current) observer.observe(evsTextRef.current);
    if (stationsImageRef.current) observer.observe(stationsImageRef.current);
    if (stationsTextRef.current) observer.observe(stationsTextRef.current);
    if (servicesImageRef.current) observer.observe(servicesImageRef.current);
    if (servicesTextRef.current) observer.observe(servicesTextRef.current);

    // Clean up the observer when the component unmounts.
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ServicesContainer>
      <ContentWrapper>
        <SectionTitle ref={sectionTitleRef} style={{ '--animate-duration': '3s' }}>
          Our Innovative Solutions
        </SectionTitle>

        {/* First Service Item: EVs and Mobility */}
        <ServiceItem>
          <ImageContainer ref={evsImageRef} style={{ '--animate-duration': '3s' }}>
            {/* Placeholder image for African skyline with EVs */}
            <img src={p1} alt="Electric vehicles, buses, and motorcycles in an African city." />
          </ImageContainer>
          <TextContainer ref={evsTextRef} style={{ '--animate-duration': '3s' }}>
            <ItemTitle>Africa's Clean Mobility</ItemTitle>
            <ItemText>
              We are revolutionizing urban transport by providing a fleet of eco-friendly electric vehicles, buses, and motorcycles. Our solutions are designed to meet the unique needs of Africa's cities, reducing air pollution and creating a healthier environment for all.
            </ItemText>
            {/* <ItemButton href="#">Learn More</ItemButton> */}
          </TextContainer>
        </ServiceItem>

        {/* Second Service Item: Charging Stations (Layout reversed) */}
        <ServiceItem>
          <ImageContainer ref={stationsImageRef} style={{ '--animate-duration': '3s' }}>
            {/* Placeholder image for charging stations */}
            <img src={p2} alt="Solar-powered and hybrid charging stations." />
          </ImageContainer>
          <TextContainer ref={stationsTextRef} style={{ '--animate-duration': '3s' }}>
            <ItemTitle>Energy Infrastructure</ItemTitle>
            <ItemText>
              Our network of solar-powered and hybrid charging stations ensures that clean energy is always within reach. We are building a robust and reliable infrastructure to support the widespread adoption of electric and alternative fuel vehicles.
            </ItemText>
            {/* <ItemButton href="#">Explore Stations</ItemButton> */}
          </TextContainer>
        </ServiceItem>

        {/* Third Service Item: Interactive Services (Layout normal) */}
        <ServiceItem>
          <ImageContainer ref={servicesImageRef} style={{ '--animate-duration': '3s' }}>
            {/* Placeholder image for interactive services */}
            <img src={p3} alt="An interactive map highlighting various services." />
          </ImageContainer>
          <TextContainer ref={servicesTextRef} style={{ '--animate-duration': '3s' }}>
            <ItemTitle>Interactive Services</ItemTitle>
            <ItemText>
              Our interactive platforms allow you to easily locate charging stations, track vehicle performance, and manage your clean energy usage. Our services are designed to be intuitive and accessible, putting control in your hands.
            </ItemText>
            {/* <ItemButton href="#">View Services</ItemButton> */}
          </TextContainer>
        </ServiceItem>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default Features;
