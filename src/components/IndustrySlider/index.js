import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './IndustrySlider.css'; // Import your CSS file for styling

const industries = [
  {
    imageUrl: 'https://static.wixstatic.com/media/a3c153_749eb800f1a64c549de4e7acff06d1bb~mv2.jpg/v1/crop/x_936,y_0,w_3744,h_3744/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/alex-mNJ7c7-XCZQ-unsplash.jpg',
    alt: 'Real Estate',
    description: 'Real Estate / Prop Tech'
  },
  {
    imageUrl: 'https://static.wixstatic.com/media/11062b_ddb09609a7b04f8f9a9c7cf1ee5d126c~mv2.jpeg/v1/crop/x_816,y_0,w_3264,h_3264/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Reviewing%20Legal%20Agreement.jpeg',
    alt: 'Legal',
    description: 'Legal Tech'
  },
  {
    imageUrl: 'https://static.wixstatic.com/media/11062b_be6d973aaa1748aca87d52fbd1af37f0~mv2.jpg/v1/crop/x_1216,y_0,w_3126,h_3126/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Building%20Robot.jpg',
    alt: 'Education',
    description: 'Edu Tech'
  },
  {
    imageUrl: 'https://static.wixstatic.com/media/11062b_89d64fe6a4e346ee80847d38a9e4c991~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Agriculture%20Drone.jpg',
    alt: 'Agri Tech',
    description: 'Agri Tech'
  }
];

const IndustrySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'ease-out', // Animation easing
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="industries-slider-container">
      <Slider {...settings}>
        {industries.map((industry, index) => (
          <div key={index} className="industry-item">
            <img src={industry.imageUrl} alt={industry.alt} />
            <p className='indus-des'>{industry.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IndustrySlider;
