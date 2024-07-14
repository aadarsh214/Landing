import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './Logo.png';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar glassmorphism ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={Logo} alt="DataSense Logo" />
        <a href="logo">DataSense</a>
      </div>
      <div className="menu-toggle" onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className={`nav-links ${sidebarOpen ? 'active' : ''}`}>
        <a href="dash_b">My Dashboard</a>
        <div className="dropdown">
          <a href="#">Learning Path &#9662;</a>
          <div className="dropdown-content glassmorphism">
            <a href="#">AI LEARNING PATH</a>
            <a href="#">CUSTOMIZED LEARNING PATH</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Explore &#9662;</a>
          <div className="dropdown-content glassmorphism">
            <a href="#">RESOURCES</a>
            <a href="#">SUPPORT</a>
            <a href="#">COMPANY</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Socials &#9662;</a>
          <div className="dropdown-content glassmorphism">
            <a href="https://www.facebook.com/profile.php?id=61550202884240&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
            <a href="https://www.linkedin.com/company/data-sense-lms/?viewAsMember=true&utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_content=profile" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="https://www.youtube.com/@Senseofdata" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
            <a href="https://www.instagram.com/senseofdata/?utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_content=profile" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          </div>
        </div>
        <a href="price">Pricing</a>
        <a href="cont">Contact Us</a>
      </div>
      <div className="right-buttons">
        {isAuthenticated ? (
          <>
            <span className="user-name">{user.name}</span>
            <a className="logout glassmorphism" onClick={() => logout({ returnTo: window.location.origin })}>Log out</a>
          </>
        ) : (
          <>
            <a className="login glassmorphism" onClick={loginWithPopup}>Log in</a>
            <a className="signup glassmorphism" onClick={loginWithPopup}>Sign up</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;