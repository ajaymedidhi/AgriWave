import React, { useState } from 'react';
import './index.css';

const Technology = () => {
  const initialContent = "Harnessing the power of AI, Proptelligence offers an innovative platform that transforms real estate  decision-making.Our advanced algorithms analyze vast datasets to identify market trends, investment opportunities, and potential risks.With Proptelligence's AI platform, you can make informed decisions confidently,";
  const initialContentAR = "Experience properties like never before with Proptelligence's AR and VR technology. Our augmented   reality enhances property tours, while virtual reality offers immersive virtual tours. From visualizing renovations to exploring every corner, our solutions provide invaluable insights for buyers, sellers, and investors.";
  const initialContentIoT = "Proptelligence leverages the Internet of Things to optimize property management and enhance security. With IoT sensors and smart devices, property owners can remotely monitor key metrics such as temperature, humidity, and security status.Our integrated IoT solutions ensure that properties are operating efficiently and securely, providing clients with peace of mind.";
  
  const [showFullContent, setShowFullContent] = useState(false);
  const [showFullContentAR, setShowFullContentAR] = useState(false);
  const [showFullContentIoT, setShowFullContentIoT] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const toggleContentAR = () => {
    setShowFullContentAR(!showFullContentAR);
  };

  const toggleContentIoT = () => {
    setShowFullContentIoT(!showFullContentIoT);
  };

  return (
    <>
     <h1 className="main-heading">Technologies</h1>
      <div className="technology-container">
        <div className='wrap-cont'>
          <div className='aj'>
          <div className="tech-sections">
            <div className="tech-image">
              <img
                src="https://img.freepik.com/free-photo/ai-human-technology-background_1409-5588.jpg"
                alt="AI in Real Estate"
              />
            </div> 
            <div className="centered-content">
              <h2>Artificial Intelligence</h2> 
              <p className={`prop-text-service-description ${showFullContent ? 'expand' : ''}`}>
                {showFullContent ? initialContent : initialContent.slice(0, 100)}
                <span className='btn-ai' onClick={toggleContent}>{showFullContent ? 'Read Less' : 'Read More'}</span>
              </p>           
            </div>        
          </div>
         
          </div>
          
          <div className='aj'>
          <div className="tech-sections">
            <div className="tech-image">
              <img
                src="https://img.freepik.com/premium-photo/amazed-beautiful-caucasian-woman-using-virtual-reality-goggles-studio-modern-interactive-technology-studio_482257-45580.jpg"
                alt="AR & VR in Real Estate"
              /> 
            </div> 
            <div className="centered-content">
              <h2>AR & VR</h2> 
              <p className={`prop-text-service-description ${showFullContentAR ? 'expand' : ''}`}>
                {showFullContentAR ? initialContentAR : initialContentAR.slice(0, 100)}
                <span className='btn-ai' onClick={toggleContentAR}>{showFullContentAR ? 'Read Less' : 'Read More'}</span>
              </p>
            </div>
          </div> 
          
          </div>
 

          <div className='aj'>
          <div className="tech-sections">
            <div className="tech-image">
              <img
                src="https://img.freepik.com/free-photo/man-clicking-icon-house_1134-149.jpg"
                alt="IoT in Real Estate"
              />
            </div> 
            <div className="centered-content">
              <h2>Internet of Things (IoT)</h2> 
              <p className={`prop-text-service-description ${showFullContentIoT ? 'expand' : ''}`}>
                {showFullContentIoT ? initialContentIoT : initialContentIoT.slice(0, 100)}
                <span className='btn-ai' onClick={toggleContentIoT}>{showFullContentIoT ? 'Read Less' : 'Read More'}</span>
              </p>
            </div>
          </div> 
          
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Technology;
