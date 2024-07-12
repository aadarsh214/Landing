import React, { useEffect, useState } from 'react';
import './Dash.css';
import bgimage from './bgimage.png';
import body from './body.png';
import glow from './glow.png';
import gloww1 from './gloww1.png';
import { useAuth0 } from '@auth0/auth0-react';

const jobTitles = ['Data Analyst', 'Data Engineer', 'Data Scientist'];
 

const Dash = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  const [currentTitle, setCurrentTitle] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentJobTitle = jobTitles[index];
      let updatedTitle;

      if (isDeleting) {
        updatedTitle = currentJobTitle.substring(0, charIndex - 1);
      } else {
        updatedTitle = currentJobTitle.substring(0, charIndex + 1);
      }

      setCurrentTitle(updatedTitle);

      if (!isDeleting && updatedTitle === currentJobTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedTitle === '') {
        setIsDeleting(false);
        setIndex((index + 1) % jobTitles.length);
      }

      setCharIndex(prevCharIndex => (isDeleting ? prevCharIndex - 1 : prevCharIndex + 1));
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 150);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, index, isDeleting]);
 
  return (
    <div className="cont">
      <p className='peon text-nowrap'>Elevate Your Career as a 
      <span className="animated-text p-[28px] top-20">{currentTitle}</span> <br />with
      <span className='mainn'> DataSense!</span>
      </p>
      <p className='small text-nowrap'>Empower  yourself with cutting-edge skills, network<br /> with industry experts, and ignite your data career<br /> journey.</p>
      <div className="image-container">
      <img src={bgimage} alt="shape" className="bgimage" />
      <img src={glow} alt="glow"  className='glow'/>
      <img src={gloww1} alt="gloww1" className='gloww1' />
      </div>
      <img src={body} alt="shape" className="body" />
      <div>
        <button className="btn1">Learn More</button>
        <button className="btn2">
       <a href={`https://main--c0derpad.netlify.app/?userID=${isAuthenticated ? user.email : ''}`}>
        Start Quiz
      </a>
</button>
      </div>
    </div>
  );
};

export default Dash;