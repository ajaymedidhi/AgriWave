import React from 'react';
import Carousel from '../Carousel';

const Image = () => {
  const slides = [
    <img className='img-2' src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710510906/MicrosoftTeams-image_3_rtwer2.png" alt="Gallery" />,
    <img className='img-2' src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710510920/MicrosoftTeams-image_4_bxvkxh.png" alt="Gallery" />,
    <img className='img-2' src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710585802/MicrosoftTeams-image_6_rdyaq0.png" alt="Gallery" />,
  ];

  return (
    <div>
      <Carousel slides={slides} interval={3000} />
    </div>
  );
};

export default Image;
