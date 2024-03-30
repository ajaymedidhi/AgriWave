import React, { useEffect } from 'react'; 
import './App.css';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import News from './components/News';
import Benefits from './components/Benefits'
import Agri from './components/Agri'
import MSP from './components/MSP'

import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
      <Routes>
      <Route exact path="/" element={<Home />} /> 
     
      <Route exact path="/contact" element={<ContactUs/>}/>  
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path='/login' element={<Login/>} /> 
      <Route exact path="/news" element={<News/>} /> 
      <Route exact path="/benefits" element={<Benefits/>} />
      <Route exact path="/agri" element={<Agri/>} /> 
      <Route exact path="/msp" element={<MSP/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;




