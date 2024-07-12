import React from 'react';
import './Adv.css';
import laptop from './laptop.mp4';
import Roadmap from './Roadmap.png';
import { useAuth0 } from '@auth0/auth0-react';


  
const Adv = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
 
  return (
    <div className='title'>
      <p className='big'></p>
      <div className='wrapper'>
        <div className='wow'>
        <p className='cust'>Customized</p>
        <p className='roadmap-text'>Roadmap</p>
        <p className='your'>Your personalized guide to success, providing a tailored roadmap for your unique journey.</p>
        <div className='is'>
          <div className='ew'>
            <div className='scroll-container'>
              <img src={Roadmap} alt='road' className='roadmap-image' />
              <img src={Roadmap} alt='road' className='roadmap-image' />
            </div>
          </div>
        </div>     
        </div>
      
      

        <div className='neww'>
          <p className='code'>Codecraft</p>
          <p className='std'>Studio</p>
          <p className='dive'>Dive into real-time coding challenges in our immersive environment, enhancing your coding skills seamlessly.</p>
          <div>
          <div className='lappy'> 
        <video autoPlay loop muted src={laptop} className='lap'></video>
        </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default Adv;
