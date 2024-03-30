import React,{useEffect} from 'react';
import './index.css'; 
import Navbar from '../Navbar';

const MSP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
   <Navbar/>
    <div className="msp-container">
      <div className="section welcome-section">
        <h1>Minimum Support Price (MSP)</h1>
        <p>MSP stands for Minimum Support Price. It is the minimum rate at which farmers sell their crops to the government. This price prevents farmers from market fluctuation and offers stability and income security.</p>
      </div>

      <div className="section">
        <h2>What is Minimum Support Price (MSP)?</h2>
        <p>Minimum Support Price (MSP) is a form of market intervention by the Government of India to insure agricultural producers against any sharp fall in farm prices. The minimum support prices are announced by the Government of India at the beginning of the sowing season for certain crops on the basis of the recommendations of the Commission for Agricultural Costs and Prices (CACP). MSP is price fixed by Government of India to protect the producer - farmers - against excessive fall in price during bumper production years. The minimum support prices are a guaranteed price for their produce from the Government.</p>
        <p>The major objectives are to support the farmers from distress sales and to procure food grains for public distribution. In case the market price for the commodity falls below the announced minimum price due to bumper production and glut in the market, government agencies purchase the entire quantity offered by the farmers at the announced minimum price.</p>
      </div>

      <div className="section">
        <h2>Crops under MSP:</h2>
        <p>The 22 mandated crops include 14 Kharif crops viz. paddy, jowar, bajra, maize, ragi, tur (arhar), moong, urad, groundnut, soybean (yellow), sunflower seed, sesamum, Niger seed, cotton and 6 Rabi crops viz. wheat, barley, gram, masur (lentil), rapeseed and mustard, safflower and 2 commercial crops viz. jute and copra.</p>
      </div>

      <div className="section">
        <h2>MSP Rate in India:</h2>
        <p>₹12000.00 per quintal for 2024 season. To realize the objectives of MSP Policy, Government extends price support for paddy and wheat through the Food Corporation of India (FCI) and State Agencies.</p>
      </div>

      <div className="section">
        <h2>Which crop has the highest MSP?</h2>
        <p>The government has increased the MSP of Rabi Crops for Marketing Season 2024-25, to ensure remunerative prices to the growers for their produce. The absolute highest increase in MSP has been approved for lentil (masur) at Rs. 425 per quintal followed by rapeseed & mustard at Rs.</p>
      </div>

      <div className="section">
        <h2>Best Crops for each Season</h2>
        <p>Spring - potato, strawberry (festival on 13th, consider buying some extra for next year), cauliflower (more important once you have a significant number of kegs/jars)</p>
        <p>Summer - blueberry, melon (see cauliflower), hops (put in kegs for big profit)</p>
        <p>Fall - cranberry, pumpkin (see cauliflower)</p>
        <p>Winter - wild seeds (craft 4 items into 10 seeds, repeat u til final week of season, save some to jumpstart next winter - this is also the easiest way to get more leeks for George and horseradish for Krobus)</p>
      </div>

      <div className="section">
        <h2>Types of Crops in India</h2>
        <p>The three major types of crops in India are Kharif, Rabi, and Zaid crops. These are the cropping seasons in India where Kharif crops are sown from July to October, Rabi crops are sown in October and November, and Zaid crops are sown between March and June.</p>
      </div>

      <div className="section">
        <h2>2020–2021 Indian farmers' protest:</h2>
        <p>9 August 2020 – 11 December 2021 (1 year, 4 months, 2 days)</p>
        <p>Major goals for protest:</p>
        <ul>
          <li>Revocation of all the three Farm Bills</li>
          <li>Guaranteed MSPs</li>
          <li>Justice for Lakhimpur Kheri violence</li>
          <li>Bring farmer-trader dispute under judiciary instead of SDM</li>
        </ul>
      </div>

      <div className="section">
        <h2>Problems Faced By Farmers:</h2>
        <ol>
          <li>Climate Change</li>
          <li>Pests and Diseases</li>
          <li>Soil Degradation</li>
          <li>Access to Markets</li>
          <li>Lack of Financial Resources</li>
        </ol>
      </div>

      <div className="section conclusion">
        <h2>Conclusion:</h2>
        <p>Farming is an essential part of our lives but unfortunately it comes with its own set of challenges that make it difficult for many people who rely on it for their livelihoods.</p>
      </div>
    </div>
   </>
  );
};

export default MSP;
