import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'


import '../Style/NavBar.css'

function NavBar() {
    const [isMobile, setIsMobile] = useState(false);
   


  const toggleMobileMenu = () => {

    setIsMobile(!isMobile);

  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={toggleMobileMenu}>
        <li><a >Add+</a></li>
       
      </ul>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  )
}

export default NavBar
