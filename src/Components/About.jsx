import React from 'react';
import './About.css';
import gloww1 from './gloww1.png';
import shagun from './shagun.jpg';

const About = () => {
  return (
    <div className='cont'>
      <div className='shagun'>
        <img src={shagun} alt="shagun" className='shagunn' />
      </div>
      <p className='text'>Message From CEO</p>
      <div className='sammu' >
        <h1 className='mt'>Vision 
          <span className='tm'>
            <ul>
              <li>Datasense is a vibrant community dedicated to driving innovation in data analytics.</li>
              <li>Our mission is to create a network of professionals shaping the future of these dynamic industries.</li>
              <li> We strive to empower individuals with the skills and knowledge needed to excel in their careers.</li>
            </ul>             
           </span>
        </h1></div>
        <div className='sammu1'>
        <h1 className='vg'>What are offer
          <span className='gv'>
          <ul>
            <li>Expert-led Courses: Comprehensive learning modules in Excel, Power BI, SQL, Python, Machine Learning, NLP, and more.</li>
            <li>Mock Interviews: Realistic interview practice to boost your confidence and readiness.</li>
            <li>Job Support: Assistance with job placements and career guidance.</li>
            <li>Resume Preparation: Professional help to craft a standout resume.</li>
            <li>Timed Coding Practice: Enhance your coding skills with time-bound exercises.</li>
            <li>Community Learning: Engage with our free and premium learning communities for continuous growth and collaboration.</li>
          </ul>
          </span>
        </h1>
      </div>
      <p className='text1'>

</p>
      <button className='btnnn' onClick={About}>
        <div className='ttt'>
          <a href="https://www.linkedin.com/in/shagunnagpal/?utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_content=profile" target="_blank" rel="noopener noreferrer" className='vlcc'></a>
          <h1 className='kyaa'>Linkedin</h1>
        </div>
      </button>
    <img src={gloww1} alt="" className='glowis' />
    </div> 
  );
};

export default About