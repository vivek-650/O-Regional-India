import React, { useState } from "react"; // Added useState
import "../styles/CityPages.css";
import { useLocation } from 'react-router-dom';

import DelhiFoodCard from "./DelhiFoodCard";
import TourGuid from "./TourGuid";
import HotelList from "./HotelList";
// import DelhiPlaceCard from "./DelhiPlaceCard";
// import DelhiCraftCard from "./DelhiCraftCard";

import Footer from "./Footer";

function CityPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showHotelList, setHotelList] = useState(false);
  const location = useLocation(); 
  const { cityData } = location.state || {}; 
  console.log("from cityPage", cityData);

  return (
    <div className="main">
      <div className="navbar">
        {cityData ? (
          <div>
            {/* <h1>{cityData.cityName}</h1> */}
          </div>
        ) : (
          <p>No data for the given city</p>
        )}
      </div>

      <div className="video-container">
        <img
          src={cityData?.famousPlaces?.[1]?.images}
          alt="Famous Place"
        />
        <h1>{cityData?.cityName}</h1>
      </div>

      <div className="page2">
        <div className="hidden-text">
          <p>{cityData?.description}</p>
        </div>
        <p className="popular">Best Food For You Only</p>
        <div className="hidden-text">
          <p>
            Delhi street food offers bold, flavorful delights like chaat, kebabs,
            parathas, golgappas, and delicious sweets.
          </p>
        </div>
        <DelhiFoodCard data={cityData.foods}/>
      </div>

      <div className="page3">
        <div className="poster"></div>
        {showPopUp && <TourGuid onclose={() => setShowPopUp(false)} />}
        {showHotelList && <HotelList onclose={() => setHotelList(false)} />}
        <div className="tour-PopUP">
          <h3 onClick={() => setShowPopUp(true)}>Need Tour Guide?</h3>
        </div>
        <div className="Hotels-PopUP">
          <h3 onClick={() => setHotelList(true)}>Need Hotels?</h3>
        </div>

        <p className="popular">Best Places to Visit</p>
        <div className="hidden-text">
          <p>
            Delhi's shines through historic landmarks, vibrant markets, serene
            gardens, and majestic architecture at every turn.
          </p>
        </div>
        <DelhiFoodCard data={cityData.famousPlaces}/> 
        {/* Correct component for places */}
      </div>

      <div className="page4">
        <p className="popular">Shop Authentic Only</p>
        <div className="hidden-text">
          <p>
            Delhi has a wide range of handcrafted treasures including intricate
            jewelry, vibrant textiles, and more.
          </p>
        </div>
        <DelhiFoodCard data={cityData.handicrafts}/> 
        {/* Correct component for crafts */}
      </div>

      <Footer />
    </div>
  );
}

export default CityPage;
