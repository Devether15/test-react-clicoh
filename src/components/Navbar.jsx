import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Nav() {


 return (
  <nav>
   <h3 className="logo">Info Today</h3>
   <ul className="nav-links">
    <Link className="link"  to="/home/crypto">
    <li>Crypto</li>
    </Link>
    <Link className="link" to="/landingpage/register">
    <li>Log in</li>
    </Link>
   </ul> 
  </nav>
 )
}

export default Nav
