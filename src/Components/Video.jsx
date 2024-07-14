import React, { useState } from 'react';
import './Video.css';
import playbtn from './playbtn.png';

const Video = () => {
  const [video1Visible, setVideo1Visible] = useState(false);
  const [video2Visible, setVideo2Visible] = useState(false);

  const handlePlayClick = (video) => {
    if (video === 1) {
      setVideo1Visible(true);
    } else if (video === 2) {
      setVideo2Visible(true);
    }
  };

  return (
    <div className='dupli'>
      <div className='hell'>
        <div className='con'>
          <h1 className='kl'>Latest Updates</h1>
          <span className='vi'>Stay updated with our latest social media posts</span>
          <button className='bh'>Follow Us</button>
          
          {/* Video 1 */}
          <div className='copy'>
            <div className='gol'></div>
            <h1 className='daw'>DataAnalytics101 
              <span className='mki'>2 hours ago</span>
              <span className='bai'>...</span>
            </h1>
            <div className='middle' onClick={() => handlePlayClick(1)}>
              {!video1Visible ? (
                <div className='thumbnail-container'>
                  <img src={`https://img.youtube.com/vi/8W5DgDvyalc/0.jpg`} alt="Thumbnail" className='thumbnail' />
                  <img src={playbtn} alt="Play" className='play-btn' />
                </div>
              ) : (
                <iframe width="500" height="400" src="https://www.youtube.com/embed/0O0jrTUg3UM?si=kmDACQGifhjq3D2H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              )}
              <h1 className='exc'>Exciting announcement: We are launching a new course on Machine learning!
                <span className='emo'>❤️ 📢</span>
              </h1>
            </div>
          </div> 
            </div>
          </div>
        </div>   
  );
};

export default Video;
