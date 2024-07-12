import React from 'react';
import './Strip.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Strip() {
  return (
    <div className='strip'>
      <a href="https://chat.whatsapp.com/DYgDxOA8nBvJp4tPz5J6ox" target="_blank" rel="noopener noreferrer" className='sense-link'>
        <h1 className='sense'>
          JOIN US LIVE TO ENHANCE YOUR 6TH SENSE WITH DATASENSE
          <FontAwesomeIcon className='arrow' icon={faArrowRight} />
        </h1>
      </a>
    </div>
  ); 
}
 
export default Strip;