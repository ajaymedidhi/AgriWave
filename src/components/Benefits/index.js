import React, { useState } from 'react';
import Navbar from '../Navbar';
import './index.css';

const News = () => {
  const [selectedState, setSelectedState] = useState(null);

  // Function to handle state selection
  const handleStateSelection = (state) => {
    if (selectedState === state) {
      setSelectedState(null); // Toggle off if already selected
    } else {
      setSelectedState(state);
    }
  };

  // Define state containers with small images
  const stateContainers = [
    { name: 'Telangana', imageSrc: 'https://1.bp.blogspot.com/-NkZkGQuXJ4A/U4vnk9iHguI/AAAAAAAAHNA/B_vwlnMWlz8/s1600/logo+of+telengana.jpg' },
    { name: 'Andhra Pradesh', imageSrc: 'https://seeklogo.com/images/A/ap-govt-logo-1AAFDD42D1-seeklogo.com.png' },
    // Add more states as needed
  ];

  // Content for Telangana schemes
  const telanganaSchemes = [
    { name: 'Rythu Bandhu Scheme (AISS)', link: 'https://rythubandhu.telangana.gov.in/' },
    { name: 'Soil Health Card Scheme (SHC)', link: 'https://soilhealth.dac.gov.in/home' },
    // Add more schemes as needed
  ];

  const andhraPradeshSchemes = [
    { name: 'Scheme 1 for Andhra Pradesh', link: 'https://example.com/scheme1' },
    { name: 'Scheme 2 for Andhra Pradesh', link: 'https://example.com/scheme2' },
    // Add more schemes as needed
  ];

  return (
    <>
      <Navbar />
      <div className="cont-1">
        <div className="about-us">
          <div className='about-cont'>
            <h2>State Government Schemes </h2>
          </div>
          <div className="benefits-container">
            {stateContainers.map((state, index) => (
              <div className="state-container" key={index} onClick={() => handleStateSelection(state)}>
                <img src={state.imageSrc} alt={state.name} className='logo-img'/>
                <div className="state-details">
                  <p>{state.name}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedState && (
            <div className="state-schemes">
              <h3>Schemes for {selectedState.name}</h3>
              <ul>
                {selectedState.name === 'Telangana' ? (
                  telanganaSchemes.map((scheme, index) => (
                    <li key={index}>
                      <a href={scheme.link} target="_blank" rel="noopener noreferrer">{scheme.name}</a>
                    </li>
                  ))
                ) : (
                  andhraPradeshSchemes.map((scheme, index) => (
                    <li key={index}>
                      <a href={scheme.link} target="_blank" rel="noopener noreferrer">{scheme.name}</a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default News;
