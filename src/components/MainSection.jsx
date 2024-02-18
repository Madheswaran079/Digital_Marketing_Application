import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='hero-container'>
      <video className='video' src='/videos/video (2160p) (2).mp4' autoPlay loop muted />
      <h1>Hello!</h1>
      <p>WE ARE INDIA'S BEST</p>
      <p>DIGITAL MARKETING SERVICE PROVIDER</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        <i className='fa-solid fa-phone' />  HIRE US
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
