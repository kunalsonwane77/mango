import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Homeimg from "./Home-img.png"
import "./Home.css"

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