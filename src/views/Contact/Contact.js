import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import cantactimg from "./Contact us-img.png"
import "./Contact.css"

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