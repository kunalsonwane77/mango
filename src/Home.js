import React from 'react'
import Navbar from './Navbar'
import Homeimg from "./Home-img.png"

function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className='tagbar'>Home</h1>
      <img src={Homeimg} className='img'/>
    </div>
  )
}

export default Home