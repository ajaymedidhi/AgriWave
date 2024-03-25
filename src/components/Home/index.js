import {Link} from 'react-router-dom'
import React, { useEffect } from 'react';
import Navbottom from '../Navbottom'
import YouTubeEmbed from '../YouTubeEmbed';
import Navbar from '../Navbar'
import Image from '../Image'
import IndustrySlider from '../IndustrySlider' 
import Tech2 from '../Tech2'
import './index.css'
const Home = () => { 
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.dataset.useServiceCore = true;
    script.defer = true;

    // Append script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  

    return(
      <>
    <Navbar /> 
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
        Unlock Our Free Property Service
        </h1>
        <img
          src="https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />  
      
        <p className="home-description">
        Experience effortless property management with Proptelligence. 
        With our free services,
         managing your properties has never been easier.
        </p> 
       <Link to="/signup">
       <button className='button-sign'>Sign up For Free</button>
       </Link>
      </div>
      <img
        src="https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div> 
    <div>
    <h2 className="service-heading">Industries</h2> 
    <div className="home-page">
     
     <div className="industries-row">
       <div className="industry-item">
         <img src="https://static.wixstatic.com/media/a3c153_749eb800f1a64c549de4e7acff06d1bb~mv2.jpg/v1/crop/x_936,y_0,w_3744,h_3744/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/alex-mNJ7c7-XCZQ-unsplash.jpg" alt="Real Estate" />
         <p id='indus-des'>Real Estate / Prop Tech</p>
       </div>
       <div className="industry-item">
         <img src="https://static.wixstatic.com/media/11062b_ddb09609a7b04f8f9a9c7cf1ee5d126c~mv2.jpeg/v1/crop/x_816,y_0,w_3264,h_3264/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Reviewing%20Legal%20Agreement.jpeg" alt="Legal" />
         <p id='indus-des'>Legal Tech</p>
       </div>
       <div className="industry-item">
         <img src="https://static.wixstatic.com/media/11062b_be6d973aaa1748aca87d52fbd1af37f0~mv2.jpg/v1/crop/x_1216,y_0,w_3126,h_3126/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Building%20Robot.jpg" alt="Education" />
         <p id='indus-des'>Edu Tech</p>
       </div>
       <div className="industry-item">
         <img src="https://static.wixstatic.com/media/11062b_89d64fe6a4e346ee80847d38a9e4c991~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Agriculture%20Drone.jpg" alt="Agri Tech" />
         <p id='indus-des'>Agri Tech</p>
       </div>
     </div>
   </div>
    </div> 
     <Tech2/>
    <div className="service-section">
      <h2 className="service-heading">Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <Link to="/prop">
            <img
              src="https://img.freepik.com/premium-vector/security-infests-house-agrees-isometric-illustration_18660-608.jpg"
              alt="Service 1"
              className="service-image"
            />
          </Link>
          <h1 className='heading-2'>Property Services</h1>
          <p className="prop-text-service-description">
        At Proptelligence, we recognize the challenges faced by property owners and strive to provide innovative solutions tailored 
        to their needs. 

        </p>
        </div>
        <div className="service-item">
          <Link to="/legalservices">
            <img
              src="https://img.freepik.com/premium-photo/consultation-male-lawyer-business-woman-customer_28283-887.jpg"
              alt="Service 2"
              className="service-image"
            />
            </Link>
          
          <h1 className='heading-2'>Legal Services</h1>
          <p className="prop-text-service-description">
          Navigating the legal complexities of real estate transactions can be daunting.
        </p>
        </div>
      </div>


     
  <div class="gallery-container">
  <div class="container-photo">
    <div class="header-photo">
      <h1 className='main-heading-view'>Photo Gallery</h1>
      <h2 className='heading-view'>View All</h2>
    </div>
    <div class="photo-container">
    
      <Image/>
    
    </div>
       
  </div>
  <div class="container-video">
    <div class="header-video">
      <h1 className='main-heading-view'>Video Gallery</h1>
      <h2 className='heading-view'>View All</h2>
    </div>
    <div class="video-container">
      <YouTubeEmbed embedId="sA5wHmkAQB8" />
    </div>
  </div>
      </div>


    </div> 
    <footer>
      
      <Navbottom/>
  </footer>
  </>
    )
}
export default Home