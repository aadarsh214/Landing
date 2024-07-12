import React from 'react';
import './Footer.css';
import footer from './footer.png';
import fb from './fb.png';
import twitter from './twitter.png';
import insta from './insta.png';
import linkedin from './linkedin.png';




function Footer() {
  return (
    <div className='whole'>
      <img src={footer} alt="" className='footer' />
    <div className='golli'>
      <h1 className='down'>Datasense</h1>
      <div className='icons'>
        <a href="https://www.facebook.com/profile.php?id=61550202884240&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
       <img src={fb} alt="Facebook" className='fb' />
        </a>

        <a href="https://www.linkedin.com/company/data-sense-lms/?viewAsMember=true&utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_content=profile" target="_blank" rel="noopener noreferrer" >
         <img src={linkedin} alt="LinkedIn" className='linkedin' />
        </a>

        <a href="https://www.youtube.com/@Senseofdata" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className='twitter' />
        </a>
        
        <a href="https://www.instagram.com/senseofdata/?utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_content=profile" target="_blank" rel="noopener noreferrer">
        <img src={insta} alt="Instagram" className='insta' />
        </a>
  
 
</div>

    </div>
    <div className='wsx'>
    <nav className="header-nav">
                    <a href="#about">About Us</a>
                    <a href="#courses">Courses</a>
                    <a href="#blog">Blog</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#contact">Contact Us</a>
                    <div class="last-two">
                    <a href="#terms">Terms and Conditions</a>
                    <a href="#privacy">Privacy Policy</a>
                    </div>
                </nav>
    </div>
    </div>
  )
}

export default Footer
