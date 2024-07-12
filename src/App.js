import React from 'react';
import './App.css';
import Dash from './Components/Dash';
import Navbar from './Components/Navbar';
import Move from './Components/Move';
import Count from './Components/Count';
import Adv from './Components/Adv';
import Game from './Components/Game';
import Diff from './Components/Diff';
import Sliders from './Components/Sliders'; 
import Comm from './Components/Comm';
import Globe from './Components/Globe';
import People from './Components/People';
import Video from './Components/Video';
import Stick from './Components/Stick';
import Down from './Components/Down';
import Footer from './Components/Footer';
import Strip from './Components/Strip';
import Later from './Components/Later';







function App() {
  return (
    <div className='overflow-y-hidden'>
      <Navbar />
      <Strip /> 
      <Dash />
      <Move />
      <Count />
      <Adv />
      <Later />
      <Game />
      <Diff />
      <Sliders />
      <Comm />
      <Globe />
      <People />
      <Video/>
      <Stick />
      <Down />
      <Footer />
    </div>
  );
}

export default App;
