import React from 'react';
import Navbar from '../Navbar';
import './index.css'; 

const Agriculture = () => {
  return ( 
    <>
    <Navbar/>
    <div className="agriculture-container">
      <div className="section welcome-section">
        <h1>Welcome to the Amazing World of Agriculture!</h1>
        <p>Hey there, young farmers and nature lovers! Today, we're diving into the fantastic world of agriculture. But first, what exactly is agriculture?</p>
      </div>
      <div className="section">
        <h2>What is Agriculture?</h2>
        <p>Agriculture is like a big, green playground where people work with the land to grow plants and raise animals. It's like a giant garden where we grow food, like fruits, vegetables, grains, and even raise animals like cows, chickens, and pigs.</p>
      </div>
      <div className="section">
        <h2>Why is Agriculture Important?</h2>
        <ul>
          <li>Food for Everyone: Agriculture helps us grow the food we eat every day, like the crunchy apples in your lunchbox or the golden wheat that makes your favorite bread.</li>
          <li>Nature's Helpers: Farmers take care of the land and animals, making sure they have enough water, sunlight, and nutrients to grow big and strong.</li>
          <li>Healthy Planet: Plants and trees on farms help clean the air we breathe, and farms provide homes for all sorts of creatures like birds, bees, and butterflies.</li>
          <li>Jobs, Jobs, Jobs: Agriculture creates jobs for lots of people. From farmers who plant seeds and harvest crops to scientists who study how to grow things better, there's something for everyone!</li>
        </ul>
      </div>
      <div className="section">
        <h2>Fun Facts about Agriculture:</h2>
        <ul>
          <li>Plants Have Superpowers: Some plants can talk to each other using their roots to send secret messages underground.</li>
          <li>Busy Bees: Bees buzz around farms, pollinating flowers and helping plants make fruits and seeds.</li>
          <li>Rainbow of Crops: Farms are filled with colors—red tomatoes, orange carrots, yellow corn, and green lettuce. It's like a rainbow on the ground!</li>
          <li>Seasons Change Everything: Farms change with the seasons—Spring brings new growth, summer is time to shine, autumn paints the fields with colors, and winter gives the land a well-deserved rest.</li>
        </ul>
      </div>
      <div className="section">
        <h2>Let's Get Growing!</h2>
        <p>So, are you ready to be a part of the amazing world of agriculture? Whether you're planting seeds in a pot on your windowsill or helping out in a big farm, there's always something exciting happening in the world of agriculture. So, put on your farmer's hat and let's get growing!</p>
      </div>
    </div> 
    </>
  );
};

export default Agriculture;
