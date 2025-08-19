import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// --- Styled Components for the Footer ---
const FooterContainer = styled.footer`
  background-color: #1a1a2e;
  color: #f0f0f0;
  font-family: 'Inter', sans-serif;
  padding: 4rem 2rem;
  border-top: 1px solid #2b2b45;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #ff5722;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    color: #c0c0c0;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ff5722;
    }
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #c0c0c0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #c0c0c0;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #ff5722;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #2b2b45;
  
  p {
    font-size: 0.9rem;
    color: #888;
  }
`;

// Main Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        {/* Company Info Section */}
        <FooterSection>
          <h4>OXONE INTERNATIONAL LTD</h4>
          <p>Transforming Africa's mobility and energy ecosystem with cutting-edge technology and sustainable solutions.</p>
          <SocialLinks>
            <SocialIcon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
            <SocialIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIcon>
            <SocialIcon href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></SocialIcon>
          </SocialLinks>
        </FooterSection>

        {/* Quick Links Section */}
        <FooterSection>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/services">Solutions & Services</a></li>
            <li><a href="/newsroom">News Room / Media</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </FooterSection>
        
        {/* Contact Info Section */}
        <FooterSection>
          <h4>Contact Info</h4>
          <ul>
            <li>
              <FaMapMarkerAlt /> 34/36 IKORODU ROAD, Lagos
            </li>
            <li>
              <FaEnvelope /> info@oxoneglobal.com
            </li>
            <li>
              <FaPhone /> 123456789
            </li>
          </ul>
        </FooterSection>
      </FooterGrid>
      
      <CopyrightSection>
        <p>&copy; {new Date().getFullYear()} OXONE INTERNATIONAL LTD. All rights reserved.</p>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
