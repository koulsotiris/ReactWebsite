import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted /> 
        <h1>Unleash the true power</h1>
        <p>Download FitBro from Google Playstore to unlock your potential.</p>

        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Download
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Watch Preview
            </Button>
        </div>

    </div>
  )
}

export default HeroSection
