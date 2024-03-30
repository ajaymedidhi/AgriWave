import {Link} from 'react-router-dom'
import React, { useEffect } from 'react';
import Navbottom from '../Navbottom'
import Navbar from '../Navbar'
import './index.css'
const Home = () => { 
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/ns.html?id=GTM-WH9TSZ5B';
    script.dataset.useServiceCore = true;
    script.defer = true;

    // Append script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); 
  useEffect(() => {
    // Google Tag Manager (gtag.js)
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MPNXW889Q5';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-MPNXW889Q5');

    // Cleanup function
    return () => {
      // Remove the script when unmounting the component
      document.head.removeChild(script);
    };
  }, []);


  

    return(
      <>
    <Navbar />  
    
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
        Welcome to AgriWave - Your Farming Oasis🌾
        </h1>
        <img
          src="https://nepalesevoice.com/wp-content/uploads/2020/11/5fa3ae1c907da_chiya-bagan-1-818x450-1.jpg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />  
      
        <p className="home-description">
        Discover a world of agricultural marvels at AgriWave! Stay updated with
         the latest farming trends, including insider insights on Minimum Support Prices. Whether 
         you're a seasoned farmer or a novice, we're here to support you with practical tips and captivating 
         stories. Join us on a journey to uncover the secrets of modern agriculture, from cutting-edge technology to
          sustainable farming practices.
        </p> 
       <Link to="/agri">
       <button className='button-sign'>Discover Farming Delights</button>
       </Link>
      </div>
      <img
        src="https://nepalesevoice.com/wp-content/uploads/2020/11/5fa3ae1c907da_chiya-bagan-1-818x450-1.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div> 
    <div> 
    <h1 className='heading-service'>Our Mission</h1> 
        <div className="mission-container">
      <img src="https://cdn.downtoearth.org.in/library/large/2017-01-20/0.68426300_1484913690_55-20170131.jpg" alt="" className="mission-image" />
      <div className="mission-content">
        <h2> Empowering Farmers Across India</h2>
        <p>We empower farmers across India with knowledge, resources, and market access, ensuring they receive fair prices for their produce and are equipped with the latest farming techniques and information.</p>
      </div> 
      
 
    
      </div>  

       <div className="mission-container">
      <div className="mission-content">
        <h2>Empowering Farmers and Strengthening Communities</h2>
        <p>
        We strive to bridge the gap between farmers and government schemes, fostering a <br/>
        thriving agricultural ecosystem that sustains livelihoods and enriches communities.
        </p>
      </div> 
      <img src="https://www.indiancooperative.com/wp-content/uploads/2018/08/group-of-farmers-1054x570.jpg" alt="" className="mission-image-2" />
      
 
    
      </div>
    </div> 
    <div className="service-section">    
      <div className="service-section">
          <h1>Our Services</h1>
          <div className="services-container">
            <div className="service-item">
            <Link to="/news">
            <img
                src="https://img.freepik.com/free-photo/farmer-standing-rice-field-with-tablet_1150-6062.jpg"
                alt="Service 1"
                className="service-image"
              />
            </Link>
              <h3>News</h3>
              <p>Stay Informed with AgriWave: Access the Latest Updates on Farmers and Market Prices</p>
            </div>
            <div className="service-item">
             <Link to="/msp">
              <img
                src="https://i.ytimg.com/vi/-tc6n_hVlDA/maxresdefault.jpg"
                alt="Service 2"
                className="service-image"
              />
              </Link>
             
              <h3>Minimum Support Price</h3>
              <p>Ensuring Stability with AgriWave: Learn About Minimum Support Prices and Agricultural Sustainability</p>
            </div>
            <div className="service-item">
            <Link to="/benefits">
              <img
                src="https://tractorguru.in/upload/tractor/Blogs/For%20Mobile%20Blogs/GOVERNMENT%20SCHEMES%20M%20hindi.jpg"
                alt="Service 3"
                className="service-image"
              />
               </Link>
              <h3>Benefits from Government</h3>
              <p>nlocking Opportunities: Explore the Government's Agricultural Initiatives and Support Programs with AgriWave</p>
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