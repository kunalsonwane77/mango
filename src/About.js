import React from 'react'
import Navbar from './Navbar'
import Abautimg from "./About us-img.png"

function About() {
  return (

    <div>
      <Navbar/>
      <h1 className='tagbar'>About</h1>
      <img src={Abautimg} className='img'/>
    </div>
  )
}

export default About