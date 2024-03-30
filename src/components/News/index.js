import React from 'react'; 
import Navbar from '../Navbar';
import  { useEffect } from 'react';
import './index.css'

const News = () => {

  const newsItems = [
    {
      title: "Why India farmers are protesting again",
      imageSrc: "https://video-images.vice.com/_uncategorized/1601292586642-gettyimages-1228585844.jpeg",
      content: "The farmers' protests in India, primarily around the Delhi borders, began in late 2020, with thousands of farmers, mainly from the states of Punjab, Haryana, and Uttar Pradesh, converging on various points along Delhi's borders. "
    },
    {
      title: "Technology in Indian Agriculture",
      imageSrc: "https://tropogo.com/blogs/images/blog/bg_spraying.png",
      content: "Agriculture and allied sectors are central to the Indian economy. Keeping this and a sustainable future in mind, the Indian government, quite rightly, is promoting technology-enabled sustainable farming, including natural, regenerative and organic systems, during its G20 presidency."
    }, 
    {
        title: "Breaking News 1",
        imageSrc: "https://example.com/news1.jpg",
        content: "The farmers' protests in India, primarily around the Delhi borders, began in late 2020, with thousands of farmers, mainly from the states of Punjab, Haryana, and Uttar Pradesh, converging on various points along Delhi's borders. "
      },
      {
        title: "What are the Challenges of Indian Agriculture?",
        imageSrc: "https://thetechpanda.com/wp-content/uploads/2018/07/Agriculture_main.jpg",
        content: "Agriculture in India is largely dependent on monsoon rains, which are often erratic, unreliable, and insufficient.The majority of farmers in India practice subsistence farming, which means they grow crops mainly for their own consumption and have little or no surplus to sell in the market."
      },
      {
        title: "Soil erosion and its causes",
        imageSrc: "https://eartheclipse.com/wp-content/uploads/2016/04/dry-land-muddy-volcanes-dry-land-soil-erosion.jpg",
        content: "Soil erosion is the natural process in which the topsoil of a field is carried away by physical sources such as wind and water.The farming practices are the major cause of soil erosion. The agricultural activities disturb the ground. The trees are cleared and the land is ploughed to sow new seeds. Since most of the crops are grown during the spring season, the land lies fallow during winters."
      },
      {
        title: "Why we all need farmers to have access to better seeds",
        imageSrc: "https://cdn.mos.cms.futurecdn.net/VH2aR5YyvVxLs4QyuXqZUG.jpg",
        content: "We need to incentivize innovation, alleviate market inefficiencies, and protect vital genetic resources to combat global hunger.Too few of the world’s farmers can access improved, quality seeds, which offer higher yields and more resistance to drought.Improved seeds can also help tackle climate change and enable land restoration."
      },
  
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return ( 
    <> 
    <Navbar/>
     <div className="cont-1">
      <div className="about-us">
        <div className='about-cont'>
        <h2>Latest News in Farming</h2>
        </div>
    <div className="news-container">
      {newsItems.map((item, index) => (
        <div className="news-item" key={index}>
          <div className="news-image">
            <img src={item.imageSrc} alt={item.title} />
          </div>
          <div className="news-content">
            <h2>{item.title}</h2>
            <p>{item.content}</p> 
          </div>
        </div>
      ))}
    </div> 
    </div>
    </div>
    </>
  );
};

export default News;
