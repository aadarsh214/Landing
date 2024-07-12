import React, { useState } from 'react';
import './People.css';
import img1 from './p1.png'; // Update with actual image paths
import img2 from './p2.png';
import img3 from './p3.png';
import img4 from './p4.png';
import img5 from './p5.png';

const peopleData = [
  {description: 'Madhukar Singh PHD holder in Machine Learning 10+ years of experience Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ', image: img1 },
  {description: 'Madhukar Singh PHD holder in Machine Learning 10+ years of experience Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ', image: img2 },
  { description: 'Madhukar Singh PHD holder in Machine Learning 10+ years of experience Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ', image: img3 },
  { description: 'Madhukar Singh PHD holder in Machine Learning 10+ years of experience Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ', image: img4 },
  {description: 'Madhukar Singh PHD holder in Machine Learning 10+ years of experience Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ', image: img5 },
];

const People = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="people-container">
      {peopleData.map((person, index) => (
        <div
          key={index}
          className={`person ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <img src={person.image} alt={person.name} className="person-image" />
          {activeIndex === index && (
            <div className="person-info">
              <h3>{person.name}</h3>
              <p>{person.description}</p>
            </div>
          )}
        </div>
      ))}

    </div>
  );
}; 

export default People;
