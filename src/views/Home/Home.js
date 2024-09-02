import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Homeimg from "./Home-img.png"
import "./Home.css"
import toast, { Toaster } from 'react-hot-toast'

function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className='tagbar'>Home</h1>
      <button className='btntost' type='button' onClick={()=>{
          toast.success("succesfully Loaded")
       }}>
          Load success
       </button>
      <img src={Homeimg} className='img'/>
       
      <div>
        <Toaster/>
      </div>
    </div>
  )
}

export default Home