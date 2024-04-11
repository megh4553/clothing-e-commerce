import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import Newcollections from '../Newcollections/Newcollections'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2 className='new'>New Arrivals Only</h2>
        <div>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>For Everyone</p>
        </div>
        <div className='hero-latest-button'>
            <div>Latest Collection</div>
            <img onClick={()=>{<Newcollections />}} src={arrow_icon} alt="" />
        </div>

      </div>
      <div className="hero-right">
        <img className='hand-icon' src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero