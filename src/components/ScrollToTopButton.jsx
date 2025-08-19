
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

// The styled component for the button itself.
const ScrollToTopButtonContainer = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #2e1a2bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 99;

  // These styles control the button's visibility.
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transform: scale(${props => (props.isVisible ? '1' : '0')});
  pointer-events: ${props => (props.isVisible ? 'auto' : 'none')};
  
  &:hover {
    background-color: #ff5722;
  }
`;

// The main functional component.
const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  // A function to smoothly scroll the window to the top.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // This effect listens for the scroll event and updates the state.
  useEffect(() => {
    const checkScrollTop = () => {
      // The button will appear when the scroll position is more than 300px.
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <ScrollToTopButtonContainer onClick={scrollToTop} isVisible={showScroll}>
      <FaArrowUp />
    </ScrollToTopButtonContainer>
  );
};

export default ScrollToTopButton;
