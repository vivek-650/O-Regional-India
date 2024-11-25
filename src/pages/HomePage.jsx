import React, { useState } from "react";
import "../styles/HomePage.css";
import Footer from "../components/Footer";
import FestiveCards from "../components/FestiveCards";
import video from "../assets/images/heroVideo.mp4";
import SearchPage from "../components/SearchPage";

const HomePage = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev); // Safely toggle state
  };

  return (
    <>
      <div id="page1">
        <video src={video} autoPlay muted loop id="video"></video>
        <p>"Regional India is Original India"</p>
      </div>

      <div className="page">
        <h1 className="page-heading">What is Famous in Your Locality?</h1>
        {/* <FoodCards /> */}
        <FestiveCards />
        <div className="page-button-div">
          <button className="page-button-div-button" onClick={toggleSearch}>
            Seach you place
          </button>
        </div>
      </div>

      {/* <div className="page">
        <h1 className="page-heading">Want a Local Tour Guide?</h1>
      </div> */}

      {/* <div className="page">
        <h1 className="page-heading">Seaching for acccomodation?</h1>
      </div> */}

      {/* <div className="page">
        <h1 className="page-heading">
          Become a local tour guide of your city or village
        </h1>
      </div> */}

      {/* <div className="page">
        <h1 className="page-heading">
          Want to advertise your products in your area?
        </h1>
      </div> */}

      {isSearchVisible && <SearchPage onClose={toggleSearch} />}

      {/* <div id="page2">
                <div className="contain">
                  <div className="hidden-text">
                    <p>
                      One of the oldest civilisations in the world, India is a mosaic of
                      multicultural experiences. With a rich heritage and myriad
                      attractions, the country is among the most popular tourist
                      destinations in the world. It covers an area of 32, 87,263 sq. km,
                      extending from the snow-covered Himalayan heights to the tropical
                      rain forests of the south.
                    </p>
                  </div>
                </div>
              </div> */}

      {/* <div id="page4">
                <div className="contain">
                  <p className="popular">Must Visit Destinations</p>
                  <p className="text">From historical cities to natural splendours, come see the best of India</p>
                  <div className="Destination-cards">
                    <DestinationCards />
                  </div>
                  <p className="popular">Eats With Us</p>
                  <p className="text">Taste our diverse and tasty foods.</p>
                  <div className="Food-cards">
                    <FoodCards />
                  </div>
                </div>
              </div> */}

      {/* <div id="page5">
                <div className="contain">
                  <p className="popular">Immersive Experiences</p>
                  <p className="text">In the land of opulence, let loose and discover yourself.</p>
                </div>
                <CardCollection />
                <p className="popular">Celebrate With Us</p>
                <p className="text">Be a part of our festivals and feasts.</p>
                <FestiveCards />
              </div> */}

      <Footer />
    </>
  );
};

export default HomePage;
