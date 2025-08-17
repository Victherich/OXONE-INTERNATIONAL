import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'animate.css';

// Styled components for the CTA section
const CTAContainer = styled.section`
  // Dark mode background color from the 'About Us' page
  background-color: #1a1a2e;
    background-color: #2e1a2bff;
  color: #f0f0f0; // Light color for text
  font-family: 'Inter', sans-serif;
  padding: 8rem 2rem;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.4);
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CTAImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 15px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff5722; // Using the consistent orange accent color
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #c0c0c0; // A light gray for body text
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 3rem;
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

// Main CTA Component
const ServicesCTA = () => {
  const ctaTitleRef = useRef(null);
  const ctaTextRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const ctaImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Apply different animations to each element
            if (entry.target === ctaTitleRef.current) {
              entry.target.classList.add('animate__slideInUp');
            } else if (entry.target === ctaTextRef.current || entry.target === ctaButtonRef.current) {
              entry.target.classList.add('animate__slideInDown');
            } else if (entry.target === ctaImageRef.current) {
              entry.target.classList.add('animate__rotateIn');
            }
          } else {
            // Remove animation classes when out of view
            entry.target.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__fadeInUp', 'animate__zoomIn', 'animate__slideInUp','animate__slideInDown','animate__rotateIn' );
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all elements with refs
    const allRefs = [ctaTitleRef.current, ctaTextRef.current, ctaButtonRef.current, ctaImageRef.current].filter(Boolean);
    allRefs.forEach(ref => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <CTAContainer>
      <ContentWrapper>
        {/* The image is currently commented out in the user-provided code, but can be added here if needed */}
        {/* <CTAImage 
          ref={ctaImageRef} 
          src="https://placehold.co/600x400/2B2B45/fff?text=Our+Solutions" 
          alt="A stylized visual of our solutions"
          style={{ '--animate-duration': '4s' }} 
        /> */}
        <CTATitle ref={ctaTitleRef} style={{ '--animate-duration': '4s' }}>
          Explore Our Cutting-Edge Solutions
        </CTATitle>
        <CTAText ref={ctaTextRef} style={{ '--animate-duration': '4s' }}>
          From electric vehicles to renewable energy infrastructure, discover how we're powering a sustainable future for Africa.
        </CTAText>
        <CTAButton ref={ctaButtonRef} style={{ '--animate-duration': '4s' }} href="/services">
          View Our Services
        </CTAButton>
      </ContentWrapper>
    </CTAContainer>
  );
};

export default ServicesCTA;
