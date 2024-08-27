import React from 'react'
import Navbar from './Navbar'
import cantactimg from "./Contact us-img.png"

function Contact() {
  return (
    <div>
      <Navbar/>
      <h1 className='tagbar'>Contact</h1>
      <img src={cantactimg} className='img'/>
      </div>
  )
}

export default Contact