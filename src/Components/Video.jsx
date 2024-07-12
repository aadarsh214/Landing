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
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/8W5DgDvyalc?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video 1"
                  className='datavideo'
                ></iframe>
              )}
              <h1 className='exc'>Exciting announcement: We are launching a new course on Machine learning!
                <span className='emo'>❤️ 📢</span>
              </h1>
            </div>
          </div> 

          {/* Video 2 */}
          <div className='dimag'>
            <div className='gol'></div>
            <h1 className='daw'>DataAnalytics101 
              <span className='mki'>2 hours ago</span>
              <span className='bai'>...</span>
            </h1>
            <div className='middle' onClick={() => handlePlayClick(2)}>
              {!video2Visible ? (
                <div className='thumbnail-container'>
                  <img src={`https://img.youtube.com/vi/Wm0xGZO-7kM/0.jpg`} alt="Thumbnail" className='thumbnail' />
                  <img src={playbtn} alt="Play" className='play-btn' />
                </div>
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/Wm0xGZO-7kM?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video 2"
                  className='datavideo'
                ></iframe>
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
