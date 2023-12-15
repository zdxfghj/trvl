import React from "react"
import "./HeroSection.css"
import VideoBackground from "../videos/video-1.mp4";
import { Button } from "./Button";
function HeroSection(){
    return(
        <div className="hero-container">
            <video src={VideoBackground} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    ButtonSize='btn-large'
                    >
                        GET STARTED
                </Button>
                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    ButtonSize='btn-large'
                    >
                        WATCH TRAILER
                </Button>
            </div>
        </div>
        )
}

export default HeroSection;