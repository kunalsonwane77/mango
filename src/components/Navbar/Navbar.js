import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (<div>
    <div className="navbar">
     <h1>Mango 🥭</h1>
     <div className="links">

      <Link to="/">Home</Link>

      <Link  to="/about">About</Link>

      <Link to="/contact">Contact</Link>
    </div>
    </div>
   
    </div>
  )
}

export default Navbar