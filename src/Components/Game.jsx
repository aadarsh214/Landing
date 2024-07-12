import React from 'react'
import './Game.css';
import env from './env.mp4'



function Game() {
  return (
    <div className='g'>
      <div>
        <h1 className='h'>Game Learn Hub</h1>
        <h1 className='edu'>Experience education like never before with our gamified approach, making learning engaging and fun.</h1>
        <div className='contai'> 
        <video autoPlay loop muted src={env} className='ba'></video>
        </div>
      </div>
      <div className='gaming'>
      <div className="round">
        <h1 className='learns'>Excel learning</h1>
      </div>
      <div className="round">
        <h1 className='learnss'> Test Series </h1>
      </div>
      <div className="round">
        <h1 className='learnsss'>AI Bot</h1>
      </div>
      <div className="round">
        <h1 className='learnssss'>Fun Learning</h1>
      </div>
      <div className="round">
        <h1 className='learnsssss'>Streaks</h1>
      </div>
    </div>
    </div>
  )
}

export default Game
