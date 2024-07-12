import React from 'react';
import './Comm.css';
import G1 from './G1.png';


function Comm() {
  return (
    <div className='wh'>
       <div className='image-container'>
        <img src={G1} alt="G1" className='G1' />
      </div>
      <div className='gola'></div>
      <div className='nc'>
        <h1 className='bada'>Data Analytics Community</h1>
        <button className="read">Join Now</button>
        <h1 className='co'>Connect with like-minded data analytics professionals and expand your network.</h1>
      </div>
      <div className='ll'>
          <button className="r" >Learn More</button>
          <button className="d" >Join Community</button>
        </div>
     </div>
  )
}

export default Comm;
