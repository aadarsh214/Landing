import React from 'react';
import './Globe.css';
import Ellipse from './Ellipse.png';
import calendar from './calendar.png';
import simmer from './simmer.png';
import vglobe from './vglobe.mp4';



function Globe() {
  return (
    <div className='dq'>
      <h1 className='ji'>Join Our Community</h1>
      <h1 className='pw'>Participate in events and connect with other data analytics enthusiasts </h1>
     <div className='pk'>
     <video autoPlay loop muted src={vglobe} className='vv'></video>
     <div className='misho'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      </div>
        <img src={Ellipse} alt="ell" className='ell' />
        <h1 className='ne'>Networking Events</h1>
        <span className='cp'>Connect with professionals in the industry</span>
        <img src={calendar} alt="cal" className='cal' />
        <span className='webi'>Webinars</span>
        <span className='mr'>Learn from industry experts</span>
        <img src={simmer} alt="sim" className='sim' />
        <h1 className='meet'>Meetups</h1>
        <span className='with'> Engage with fellow learners </span>
        <button className='join'>
          <div className='baba'>
          <a href="https://whatsapp.com/channel/0029Vagfa03KGGGJmVi53e1w" target="_blank" rel="noopener noreferrer" className='channels'>
          <h1 className='uri'>Join Now</h1>
          </a>    
          </div>
        </button>
     </div>
    </div>
  )
} 

export default Globe