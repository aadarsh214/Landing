import React from 'react';
import './Move.css';


import excel from './excel.png';
import tableau from './tableau.png';
import python from './python.png';
import powerbi from './powerbi.png';
import mysql from './mysql.png';
import Glow1 from './Glow1.png';


const Move = () => {
  return (
    <div className='new'> 
    <img src={Glow1} alt="glow" className="Glow1 " />
    <div className='slider'> 
      <img src={excel} alt='image1' />
      <img src={tableau} alt='image2' />
      <img src={python} alt='image3' />
      <img src={powerbi} alt='image4' />
      <img src={mysql} alt='image5' />
      <img src={excel} alt='image1' />
      <img src={tableau} alt='image2' />
      <img src={python} alt='image3' />
      <img src={powerbi} alt='image4' />
      <img src={mysql} alt='image5' />
      <img src={excel} alt='image1' />
      <img src={tableau} alt='image2' />
      <img src={python} alt='image3' />
      <img src={powerbi} alt='image4' />
      <img src={mysql} alt='image5' />
    </div>
  </div>
  );
};

export default Move;