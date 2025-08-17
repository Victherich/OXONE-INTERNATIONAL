
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import p12 from '../Images/p12.png'

// --- Styled Components for the Page Layout ---
const ContactContainer = styled.div`
  background-color: #f3e9e2ff;
  color: #222;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
`;

// --- Hero Section ---
const HeroSection = styled.section`
  position: relative;
  height: 60vh;
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
    background-image: url(${p12});
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

// --- Main Content Section with Two Columns ---
const ContactGridSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoColumn = styled.div`
  text-align: left;
`;

const ContactInfoTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #ff5722;
  margin-bottom: 1.5rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  
  svg {
    color: #ff5722;
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  a {
    color: #f0f0f0;
    font-size: 2rem;
    margin-right: 1.5rem;
    transition: color 0.3s ease-in-out;
    
    &:hover {
      color: #ff5722;
    }
  }
`;

const ContactFormColumn = styled.div`
  text-align: left;
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #ff5722;
  margin-bottom: 1.5rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  background-color: lightgray;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  color: #f0f0f0;
  font-size: 1rem;
  
  &:focus {
    outline: 2px solid #ff5722;
  }
`;

const FormTextarea = styled.textarea`
  background-color: lightgray;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  color: #f0f0f0;
  font-size: 1rem;
  min-height: 150px;
  
  &:focus {
    outline: 2px solid #ff5722;
  }
`;

const FormButton = styled.button`
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  
  &:hover {
    background-color: #e64a19;
    transform: translateY(-2px);
  }
`;

// Main Contact Us Component
const ContactUsPage = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const contactInfoRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Applying animations to each section
            if (entry.target === heroTitleRef.current || entry.target === heroSubtitleRef.current) {
                entry.target.classList.add('animate__rotateIn');
            } else if (entry.target === contactInfoRef.current) {
                entry.target.classList.add('animate__zoomInLeft');
            } else if (entry.target === contactFormRef.current) {
                entry.target.classList.add('animate__zoomInRight');
            }
          } else {
            // Remove animation classes when out of view
            entry.target.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__rotateIn', 'animate__zoomInLeft', 'animate__zoomInRight');
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all elements with refs
    const allRefs = [heroTitleRef.current, heroSubtitleRef.current, contactInfoRef.current, contactFormRef.current].filter(Boolean);
    allRefs.forEach(ref => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <ContactContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle ref={heroTitleRef} style={{ '--animate-duration': '4s' }}>
            Get In Touch
          </HeroTitle>
          <HeroSubtitle ref={heroSubtitleRef} style={{ '--animate-duration': '4s' }}>
            We're here to answer your questions and help you with your mobility and energy needs.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Main Content Grid */}
      <ContactGridSection>
        {/* Contact Information Column */}
        <ContactInfoColumn ref={contactInfoRef} style={{ '--animate-duration': '4s' }}>
          <ContactInfoTitle>Our Details</ContactInfoTitle>
          <ContactInfoItem>
            <FaEnvelope />
            <div>
              <p>General Inquiries</p>
              <p>info@oxoneglobal.com</p>
            </div>
          </ContactInfoItem>
          <ContactInfoItem>
            <FaEnvelope />
            <div>
              <p>Investor Relations</p>
              <p>investors@oxoneglobal.com</p>
            </div>
          </ContactInfoItem>
          <ContactInfoItem>
            <FaPhone />
            <div>
              <p>Phone Number</p>
              <p>123456789</p>
            </div>
          </ContactInfoItem>
          <ContactInfoItem>
            <FaLinkedin />
            <div>
              <p>LinkedIn</p>
              {/* <p><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">@oxoneinternational</a></p> */}
            </div>
          </ContactInfoItem>
          <ContactInfoItem>
            <FaTwitter />
            <div>
              <p>Twitter</p>
              {/* <p><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">@oxoneglobal</a></p> */}
            </div>
          </ContactInfoItem>
          <ContactInfoItem>
            <FaYoutube />
            <div>
              <p>YouTube</p>
              {/* <p><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">@oxoneglobal</a></p> */}
            </div>
          </ContactInfoItem>
        </ContactInfoColumn>

        {/* Contact Form Column */}
        <ContactFormColumn ref={contactFormRef} style={{ '--animate-duration': '4s' }}>
          <FormTitle>Send Us a Message</FormTitle>
          <ContactForm onSubmit={handleSubmit}>
            <FormInput type="text" placeholder="Your Name" required />
            <FormInput type="email" placeholder="Your Email" required />
            <FormInput type="tel" placeholder="Phone Number" />
            <FormTextarea placeholder="Your Message" required />
            <FormButton type="submit">Send Message</FormButton>
          </ContactForm>
        </ContactFormColumn>
      </ContactGridSection>

    </ContactContainer>
  );
};

export default ContactUsPage;
