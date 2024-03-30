import React, { useState } from 'react'; 
import Footer from '../Footer'
import Navbar from '../Navbar';
import {Link} from 'react-router-dom'

import './index.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://biha7udegc.execute-api.ap-south-1.amazonaws.com/prod/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitStatus('success');
        console.log('Email sent successfully!');
  
        // Clear form fields after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        console.error('Failed to send email');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    }
  };
  

  return (
    <> 
    <Navbar/>
    
    <div className="cont1"> 
      <div className="contact-us-container">
        <div className="contact-info"> 
        <img src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg" alt="contact-us"/>
          <p>
            Feel free to get in touch with us. We are here to assist you with
            any inquiries or concerns you may have.
          </p>
        
          <div className="address-details">
            <h2>Address </h2>
            <img className='address-img' src="https://img.freepik.com/free-vector/destination-concept-international-travel-journey-red-pointer-with-grey-world-map-inside_333792-53.jpg"/>
            <p>We Work, Roshini Tech Hub, Anand Nagar, Aswath Nagar, Chinnapanna Halli, Bengaluru, Karnataka 560037</p> 
            <p>connect@proptelligence.net</p>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Mobile Number</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>

        {submitStatus === 'success' && (
          <p style={{ color: 'green' }}>Message sent successfully!</p>
        )}

        {submitStatus === 'error' && (
          <p style={{ color: 'red' }}>
            Oops! Something went wrong. Please try again later.
          </p>
        )}
        </div>
      </div> 
      
    </div> 
   
    <Footer/>
    </>
  );
};

export default ContactUs;
