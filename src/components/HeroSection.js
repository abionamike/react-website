import React from 'react'
import Button from './Button'

const HeroSection = () => {
    return (
        <div class="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn-outline" buttonSize="btn-large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn-primary" buttonSize="btn-large">WATCH TRAILER <i className="far fa-play-circle"></i></Button>
            </div>
        </div>
    )
}

export default HeroSection;
