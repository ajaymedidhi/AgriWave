import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import updated styles

function Navbottom() {
  

  return (
    <div className='navbottom-container'> 
      <div className='footer-container'> 
      <div className='footer-section contact'>
          <ul className='ui'>
          <li className='li-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='li-item'>
            <Link to='/aboutus'>About Us</Link>
          </li>
          <li className='li-item'> 
            <Link to='/legalservices'>Services</Link>
          </li> 
          <li className='li-item'> 
            <Link to='/tech'>Solutions</Link>
          </li>
          <li className='li-item'> 
            <Link to='/contact'>Contact Us</Link>
          </li>
          {/* Add more cities as needed */}
        </ul>
        </div> 

        <div className='footer-section follow'>
          <h3>Follow Us</h3>
          <ul className="social-media-cont">
            <li>
              <a href='https://www.facebook.com/ajaymedidhi' >
              <img
                src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" // Replace with the actual image URL
                alt="Facebook" className='social-img'
              />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/ajaymedidhi' >
              <img
                src="https://img.freepik.com/premium-vector/instagram-icon-paper-cut-style-social-media-icons_505135-235.jpg" // Replace with the actual image URL
                alt="Instagram" className='social-img'
              />
              </a>
            </li>

            <li>
              <a href='https://www.youtube.com/ajaymedidhi/' >
              <img
                src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg" // Replace with the actual image URL
                alt="LinkedIn" className='social-img'
              /> 
              </a>
            </li>
           
            <li>
              <a href='https://www.linkedin.com/company/ajaymedidhi/' >
              <img
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg" // Replace with the actual image URL
                alt="LinkedIn" className='social-img'
              /> 
              </a>
            </li> 
           
          </ul>
          <h3>connect@agriwave.net</h3>
        </div>
       
        
        <div className='footer-section contact'>
          <ul className='ui'>
          <li className='li-item'>
            <Link to='/'>Terms & Condition</Link>
          </li>
          <li className='li-item'>
            <Link to='/'>Privacy Policy</Link>
          </li>
          <li className='li-item'> 
            <Link to='/'>Refund & Cancellation Policy</Link>
          </li>
          {/* Add more cities as needed */}
        </ul>
        </div>  
      </div>
      <div className="copyright1">
        &copy; {new Date().getFullYear()} AgriWave. All rights reserved.
      </div>
    </div>
  );
}

export default Navbottom;
