import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import axios from 'axios';
function Navbar() {
  const [userName, setUserName] = useState(''); 
  const [servicesDropdown, setServicesDropdown,] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false); 
  const [companyDropdown, setcompanyDropdown] = useState(false); 
  // Determine user authentication status
  const [user, loading, error] = useAuthState(auth);
  const isLoggedIn = !!user; // This will be true if a user is logged in, otherwise false
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [click, setClick] = useState(false); // State for menu click

 
  const handleClick = () => setClick(!click); // Function to handle menu click
  const closeMobileMenu = () => setClick(false); // Function to close mobile menu



 

  return (
    <>
      <nav className='navbar'>
         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           <img src="https://res.cloudinary.com/dp4svmdan/image/upload/v1711720734/WhatsApp_Image_2024-03-29_at_19.26.53_5104c860_ecjbrh.jpg" alt="logo" className='website-logo'/>
        </Link> 
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div> 
        <ul className="nav-menu">
          
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

         
          <li
            className='nav-item'
          >
            <Link
              to='/news'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              News 
            </Link>
          </li> 

          <li
            className='nav-item'
           
          >
            <Link
              to='/msp'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             MSP 
            </Link>
          </li> 

          <li
            className='nav-item'
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Contact 
            </Link>
          </li> 

          <li
            className='nav-item'
          >
            <Link
              to='/signup'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Register
            </Link>
          </li>

         
        </ul>
        {isLoggedIn ? (
            <>
              <p className="user-name">Welcome {name} 👋 </p>
              <button type="button" className="logout-desktop-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <nav className='navbar'>
            <div className='menu-icon-nav' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {click && (
              <div className='dropdown-menu-ham'>
                 <p >Welcome {name} 👋 </p>
               <Link to="/login"> <button>Login</button></Link>
                <p>Your Services</p>
              </div>
            )}
          </nav>
          )}
      </nav>
    </>
  );
}

export default Navbar;