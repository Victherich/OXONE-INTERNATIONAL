// // import React, { useState } from 'react';
// // import styled from 'styled-components';

// // // This is the main container for the header. It's styled to be transparent
// // // and sit on top of the content below it. The z-index ensures it's always
// // // on top of other elements.
// // const HeaderContainer = styled.header`
// //   position: absolute;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   padding: 1rem 2rem;
// //   z-index: 100;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   font-family: 'Inter', sans-serif;
// //   color: #fff;
// // `;

// // // This is the logo container. We'll use this to hold the logo image and text.
// // const Logo = styled.div`
// //   display: flex;
// //   align-items: center;

// //   img {
// //     height: 40px;
// //     margin-right: 10px;
// //   }
// // `;

// // // The main navigation links.
// // const Nav = styled.nav`
// //   display: flex;
// //   align-items: center;

// //   @media (max-width: 768px) {
// //     display: none; // Hide the navigation on mobile screens.
// //   }
// // `;

// // // A single navigation link.
// // const NavLink = styled.a`
// //   color: #fff;
// //   text-decoration: none;
// //   font-weight: 500;
// //   font-size: 1rem;
// //   margin: 0 1rem;
// //   position: relative;
// //   padding-bottom: 5px;

// //   // Lively effect: a subtle underline animation on hover.
// //   &::after {
// //     content: '';
// //     position: absolute;
// //     left: 0;
// //     bottom: 0;
// //     width: 0;
// //     height: 2px;
// //     background-color: #ff5722; // A vibrant color for the underline.
// //     transition: width 0.3s ease-in-out;
// //   }

// //   &:hover::after,
// //   &.active::after {
// //     width: 100%;
// //   }

// //   // The active link styling. This highlights the current page.
// //   &.active {
// //     font-weight: 700;
// //     color: #ff5722;
// //   }
// // `;

// // // The social media icons container.
// // const SocialIcons = styled.div`
// //   display: flex;
// //   align-items: center;

// //   @media (max-width: 768px) {
// //     display: none; // Hide social icons on mobile.
// //   }
// // `;

// // // A single social icon link.
// // const SocialLink = styled.a`
// //   color: #fff;
// //   font-size: 1.25rem;
// //   margin-left: 1rem;
// //   transition: color 0.3s ease-in-out;

// //   &:hover {
// //     color: #ff5722;
// //   }
// // `;

// // // The hamburger menu icon for mobile.
// // const MobileMenuIcon = styled.div`
// //   display: none;
// //   cursor: pointer;
// //   z-index: 101;

// //   @media (max-width: 768px) {
// //     display: block; // Show on mobile.
// //   }
// // `;

// // // The actual mobile menu that slides in.
// // const MobileMenu = styled.div`
// //   position: fixed;
// //   top: 0;
// //   right: 0;
// //   height: 100%;
// //   width: 250px;
// //   background-color: rgba(0, 0, 0, 0.9);
// //   display: flex;
// //   flex-direction: column;
// //   padding-top: 5rem;
// //   align-items: center;
// //   transform: translateX(${props => (props.isOpen ? '0' : '100%')});
// //   transition: transform 0.4s ease-in-out;
// //   z-index: 100;

// //   ${NavLink} {
// //     margin: 1rem 0;
// //     font-size: 1.2rem;
// //   }

// //   ${SocialLink} {
// //     margin-top: 1rem;
// //   }
// // `;

// // // The main Header component.
// // const Header = () => {
// //   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   // The JSX for the component.
// //   return (
// //     <HeaderContainer>
// //       <Logo>
// //         {/* Placeholder for the logo image. Replace with your actual logo. */}
// //         <img src="https://placehold.co/40x40/ff5722/fff?text=L" alt="Logo" />
// //         <span className="font-bold text-xl">JESVALU TRAVEL AND TOUR</span>
// //       </Logo>

// //       {/* Main navigation for desktop */}
// //       <Nav>
// //         <NavLink href="#" className="active">Home</NavLink>
// //         <NavLink href="#">Services</NavLink>
// //         <NavLink href="#">About Us</NavLink>
// //         <NavLink href="#">Blog</NavLink>
// //         <NavLink href="#">Contact Us</NavLink>
// //       </Nav>

// //       {/* Social media icons for desktop */}
// //       <SocialIcons>
// //         <SocialLink href="#"><i className="fab fa-facebook-f"></i></SocialLink>
// //         <SocialLink href="#"><i className="fab fa-instagram"></i></SocialLink>
// //         <SocialLink href="#"><i className="fab fa-whatsapp"></i></SocialLink>
// //         <SocialLink href="#"><i className="fab fa-linkedin-in"></i></SocialLink>
// //       </SocialIcons>

// //       {/* Hamburger menu icon for mobile */}
// //       <MobileMenuIcon onClick={toggleMobileMenu}>
// //         <i className="fas fa-bars fa-2x"></i>
// //       </MobileMenuIcon>

// //       {/* Mobile menu */}
// //       <MobileMenu isOpen={isMobileMenuOpen}>
// //         <NavLink href="#" className="active" onClick={toggleMobileMenu}>Home</NavLink>
// //         <NavLink href="#" onClick={toggleMobileMenu}>Services</NavLink>
// //         <NavLink href="#" onClick={toggleMobileMenu}>About Us</NavLink>
// //         <NavLink href="#" onClick={toggleMobileMenu}>Blog</NavLink>
// //         <NavLink href="#" onClick={toggleMobileMenu}>Contact Us</NavLink>
// //         <SocialIcons>
// //           <SocialLink href="#"><i className="fab fa-facebook-f"></i></SocialLink>
// //           <SocialLink href="#"><i className="fab fa-instagram"></i></SocialLink>
// //           <SocialLink href="#"><i className="fab fa-whatsapp"></i></SocialLink>
// //           <SocialLink href="#"><i className="fab fa-linkedin-in"></i></SocialLink>
// //         </SocialIcons>
// //       </MobileMenu>
// //     </HeaderContainer>
// //   );
// // };

// // export default Header;


// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import 'animate.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import logo from '../Images/logo.png'
// import { useNavigate } from 'react-router-dom';

// // This is the main container for the header. It's styled to be transparent
// // and sit on top of the content below it. The z-index ensures it's always
// // on top of other elements.
// const HeaderContainer = styled.header`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   padding: 1rem 2rem;
//   z-index: 100;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-family: 'Inter', sans-serif;
//   color: #fff;
//   // This is the key fix for the horizontal and vertical scrollbars.
//   overflow: hidden;
// `;

// // This is the logo container. We'll use this to hold the logo image and text.
// const Logo = styled.div`
//   display: flex;
//   align-items: center;

//   img {
//     height: 40px;
//     margin-right: 10px;
//     border-radius:5px;
//   }
// `;

// // The main navigation links.
// const Nav = styled.nav`
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     display: none; // Hide the navigation on mobile screens.
//   }
// `;

// // A single navigation link.
// const NavLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   font-weight: 500;
//   font-size: 1rem;
//   margin: 0 1rem;
//   position: relative;
//   padding-bottom: 5px;
//   cursor:pointer;

//   // Lively effect: a subtle underline animation on hover.
//   &::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 0;
//     height: 2px;
//     background-color: #ff5722; // A vibrant color for the underline.
//     transition: width 0.3s ease-in-out;
//   }

//   &:hover::after,
//   &.active::after {
//     width: 100%;
//   }

//   // The active link styling. This highlights the current page.
//   &.active {
//     font-weight: 700;
//     color: #ff5722;
//   }
// `;

// // The social media icons container.
// const SocialIcons = styled.div`
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     display: none; // Hide social icons on mobile.
//   }
// `;

// // A single social icon link.
// const SocialLink = styled.a`
//   color: #fff;
//   font-size: 1.25rem;
//   margin-left: 1rem;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: #ff5722;
//   }
// `;

// // The hamburger menu icon for mobile.
// const MobileMenuIcon = styled.div`
//   display: none;
//   cursor: pointer;
//   z-index: 101;

//   @media (max-width: 768px) {
//     display: block; // Show on mobile.
//   }
// `;

// // The actual mobile menu that slides in.
// const MobileMenu = styled.div`
//   position: fixed;
//   top: 0;
//   right: 0;
//   height: 100%;
//   width: 250px;
//   background-color: rgba(0, 0, 0, 0.9);
//   display: flex;
//   flex-direction: column;
//   padding-top: 5rem;
//   align-items: center;
//   transform: translateX(${props => (props.isOpen ? '0' : '100%')});
//   transition: transform 0.4s ease-in-out;
//   z-index: 100;
  
//   // Conditionally hide the menu completely when closed to prevent horizontal scroll.
//   visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
//   opacity: ${props => (props.isOpen ? '1' : '0')};
//   transition: transform 0.4s ease-in-out, visibility 0.4s, opacity 0.4s;

//   ${NavLink} {
//     margin: 1rem 0;
//     font-size: 1.2rem;
//   }

//   ${SocialLink} {
//     margin-top: 1rem;
//   }
// `;

// // The main Header component.
// const Header = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const n = useNavigate();

//   // Refs for the elements we want to animate.
//   const headerRef = useRef(null);
//   const logoRef = useRef(null);
//   const navRef = useRef(null);
//   const socialIconsRef = useRef(null);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // useEffect to handle the scroll animation with IntersectionObserver.
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const target = entry.target;
//           if (entry.isIntersecting) {
//             // Add both the generic and specific animation classes when in view.
//             target.classList.add('animate__animated');
//             // Reverted the animations back to the original zoomIn
//             if (target.tagName === 'HEADER' || (target.tagName === 'DIV' && target.id === 'logo') || target.tagName === 'NAV') {
//                 target.classList.add('animate__zoomIn');
//             } else if (target.tagName === 'DIV' && target.id === 'social-icons') {
//                 target.classList.add('animate__zoomIn');
//             }
//           } else {
//             // Remove all animation classes when out of view.
//             target.classList.remove('animate__animated');
//             target.classList.remove('animate__zoomIn');
//             target.classList.remove('animate__zoomIn');
//           }
//         });
//       },
//       { threshold: 0.5 } // Trigger when 50% of the element is visible.
//     );

//     // Observe each of the elements.
//     if (headerRef.current) observer.observe(headerRef.current);
//     if (logoRef.current) observer.observe(logoRef.current);
//     if (navRef.current) observer.observe(navRef.current);
//     if (socialIconsRef.current) observer.observe(socialIconsRef.current);

//     // Clean up the observer when the component unmounts.
//     return () => {
//       if (headerRef.current) observer.unobserve(headerRef.current);
//       if (logoRef.current) observer.unobserve(logoRef.current);
//       if (navRef.current) observer.unobserve(navRef.current);
//       if (socialIconsRef.current) observer.unobserve(socialIconsRef.current);
//     };
//   }, []);

//   // The JSX for the component.
//   return (
//     <HeaderContainer ref={headerRef}>
//       <Logo ref={logoRef} id="logo" onClick={()=>n('/')}>
//         {/* Placeholder for the logo image. Replace with your actual logo. */}
//         <img src={logo} alt="Logo" />
//         {/* <span className="font-bold text-xl">OXONE INTERNATIONAL LTD</span> */}
//       </Logo>

//       {/* Main navigation for desktop */}
//       <Nav ref={navRef}>
//         {/* We've adjusted the animation duration here to 5 seconds. */}
//         <NavLink onClick={()=>n('/')} className="active" style={{ '--animate-duration': '5s' }}>Home</NavLink>
//         <NavLink onClick={()=>n('/services')} style={{ '--animate-duration': '5s' }}>Solutions & Services</NavLink>
//         <NavLink onClick={()=>n('/aboutus')}  style={{ '--animate-duration': '5s' }}>About Us</NavLink>
       
//         <NavLink onClick={()=>n('/contactus')} style={{ '--animate-duration': '5s' }}>Contact Us</NavLink>
//       </Nav>

//       {/* Social media icons for desktop */}
//       <SocialIcons ref={socialIconsRef} id="social-icons">
//         {/* We've adjusted the animation duration here to 5 seconds. */}
//          <SocialLink href="https://www.youtube.com">
//   <i className="fab fa-youtube"></i>
// </SocialLink>
// <SocialLink href="https://twitter.com">
//   <i className="fab fa-twitter"></i>
// </SocialLink><SocialLink href="#" style={{ '--animate-duration': '5s' }}><i className="fab fa-linkedin-in"></i></SocialLink>
//       </SocialIcons>

//       {/* Hamburger menu icon for mobile */}
//       <MobileMenuIcon onClick={toggleMobileMenu}>
//         <i className="fas fa-bars fa-2x"></i>
//       </MobileMenuIcon>

//       {/* Mobile menu */}
//       <MobileMenu isOpen={isMobileMenuOpen}>
//         <NavLink href="#" className="active" onClick={toggleMobileMenu}>Home</NavLink>
//         <NavLink href="#" onClick={toggleMobileMenu}>Services</NavLink>
//         <NavLink href="#" onClick={toggleMobileMenu}>About Us</NavLink>

//         <NavLink href="#" onClick={toggleMobileMenu}>Contact Us</NavLink>
//         <SocialIcons>
//         <SocialLink href="https://www.youtube.com">
//   <i className="fab fa-youtube"></i>
// </SocialLink>
// <SocialLink href="https://twitter.com">
//   <i className="fab fa-twitter"></i>
// </SocialLink>

//           {/* <SocialLink href="#"><i className="fab fa-whatsapp"></i></SocialLink> */}
//           <SocialLink href="#"><i className="fab fa-linkedin-in"></i></SocialLink>
//         </SocialIcons>
//       </MobileMenu>
//     </HeaderContainer>
//   );
// };

// export default Header;






import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../Images/logo.png'

// --- Styled Components for the Header ---
const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #fff;
  overflow: hidden;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
    border-radius: 5px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  margin: 0 1rem;
  position: relative;
  padding-bottom: 5px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #ff5722;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    font-weight: 700;
    color: #ff5722;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.25rem;
  margin-left: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff5722;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  transform: translateX(${props => (props.isOpen ? '0' : '100%')});
  transition: transform 0.4s ease-in-out;
  z-index: 100;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transition: transform 0.4s ease-in-out, visibility 0.4s, opacity 0.4s;

  ${NavLink} {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  ${SocialLink} {
    margin-top: 1rem;
  }
`;

// Main Header component with Active Menu logic
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location object

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const socialIconsRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add('animate__animated');
            if (target.tagName === 'HEADER' || (target.tagName === 'DIV' && target.id === 'logo') || target.tagName === 'NAV') {
              target.classList.add('animate__zoomIn');
            } else if (target.tagName === 'DIV' && target.id === 'social-icons') {
              target.classList.add('animate__zoomIn');
            }
          } else {
            target.classList.remove('animate__animated');
            target.classList.remove('animate__zoomIn');
          }
        });
      },
      { threshold: 0.5 }
    );

    const allRefs = [headerRef.current, logoRef.current, navRef.current, socialIconsRef.current].filter(Boolean);
    allRefs.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      allRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Helper function to check if a path is active
  const isActive = (path) => {
    // Check if the current location's pathname matches the link's path
    return location.pathname === path;
  };

  return (
    <HeaderContainer ref={headerRef}>
      <Logo ref={logoRef} id="logo" onClick={()=>navigate('/')}>
         {/* Placeholder for the logo image. Replace with your actual logo. */}
         <img src={logo} alt="Logo" />
         {/* <span className="font-bold text-xl">OXONE INTERNATIONAL LTD</span> */}
      </Logo>

      {/* Main navigation for desktop */}
      <Nav ref={navRef}>
        <NavLink onClick={() => handleNavLinkClick('/')} className={isActive('/') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>Home</NavLink>
        <NavLink onClick={() => handleNavLinkClick('/services')} className={isActive('/services') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>Solutions & Services</NavLink>
        <NavLink onClick={() => handleNavLinkClick('/aboutus')} className={isActive('/aboutus') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>About Us</NavLink>
        <NavLink onClick={() => handleNavLinkClick('/contactus')} className={isActive('/contactus') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>Contact Us</NavLink>
      </Nav>

      {/* Social media icons for desktop */}
      <SocialIcons ref={socialIconsRef} id="social-icons">
        <SocialLink href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></SocialLink>
        <SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></SocialLink>
      </SocialIcons>

      {/* Hamburger menu icon for mobile */}
      <MobileMenuIcon onClick={toggleMobileMenu}>
        <i className="fas fa-bars fa-2x"></i>
      </MobileMenuIcon>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen}>
        <NavLink onClick={() => handleNavLinkClick('/')} className={isActive('/') ? 'active' : ''}>Home</NavLink>
        <NavLink onClick={() => handleNavLinkClick('/services')} className={isActive('/services') ? 'active' : ''}>Solutions & Services</NavLink>
        <NavLink onClick={() => handleNavLinkClick('/aboutus')} className={isActive('/aboutus') ? 'active' : ''}>About Us</NavLink>
        <NavLink onClick={() => handleNavLinkClick('/contactus')} className={isActive('/contactus') ? 'active' : ''}>Contact Us</NavLink>
        <SocialIcons>
          <SocialLink href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></SocialLink>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></SocialLink>
          <SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></SocialLink>
        </SocialIcons>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
