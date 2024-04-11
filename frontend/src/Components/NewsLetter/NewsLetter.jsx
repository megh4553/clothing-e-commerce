import React from 'react'
import './NewsLetter.css'
export default function NewsLetter() {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive offers on your E-mail</h1>
      <p>subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your E-mail id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
