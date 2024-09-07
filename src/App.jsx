import "./App.css";
import Nav from "./components/Nav";
import video from "./assets/images/heroVideo.mp4";
import DestinationCards from "./components/DesitnationCards";
import FestiveCards from "./components/FestiveCards";
import CardCollection from "./components/CardCollection";
import Footer from "./components/Footer";
import FoodCards from "./components/FoodCards";
import SearchPage from "./components/SearchPage"; // Import the SearchPage component
import CityPage from "./components/CityPage"; // Import a CityPage to show city-specific details

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components

import { useState } from "react";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  const handleOpenSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);

  return (
    <Router>
      <Nav onSearchClick={handleOpenSearch} /> {/* Pass a prop to open search */}
      
      {showSearch && <SearchPage onClose={handleCloseSearch} />} {/* Render SearchPage based on state */}
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={
          <>
            <div id="page1">
                <video src={video} autoPlay muted loop id="video"></video>
            </div>
            <div id="page2">
              <div className="container">
                <div className="hidden-text">
                  <p>
                    One of the oldest civilisations in the world, India is a mosaic of
                    multicultural experiences. With a rich heritage and myriad
                    attractions, the country is among the most popular tourist
                    destinations in the world. It covers an area of 32, 87,263 sq. km,
                    extending from the snow-covered Himalayan heights to the tropical
                    rain forests of the south. As the 7th largest country in the
                    world, India stands apart from the rest of Asia, marked off as it
                    is by mountains and the sea, which give the country a distinct
                    geographical entity.
                  </p>
                </div>
              </div>
            </div>
            <div id="page4">
              <div className="container">
                <div className="poster">
                  <img
                    src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/banner/Dekho-Apna-Desh-website-banner-1.png"
                    alt=""
                  />
                </div>
                <p className="popular">Must Visit Destinations</p>
                <p className="text">
                  From historical cities to natural splendours, come see the best of
                  India
                </p>
                <div className="Destination-cards">
                  <DestinationCards />
                </div>
                <div className="poster">
                  <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/banner/wedinindia.png" />
                </div>
                <p className="popular">Eats With Us</p>
                <p className="text">
                  As you travel through the country, Taste our diverse and tasty foods.
                </p>
                <div className="Food-cards">
                  <FoodCards />
                </div>
              </div>
            </div>
            <div id="page5">
              <div className="container">
                <p className="popular">Immersive Experiences</p>
                <p className="text">
                  In the land of opulence, let loose and discover yourself
                </p>
              </div>
              <CardCollection />
              <p className="popular">Celebrate With Us</p>
              <p className="text">
                As you travel through the country, be a part of our festivals and
                feasts
              </p>
              <FestiveCards />
            </div>
            <Footer />
          </>
        }/>

        {/* Dynamic City Page */}
        <Route path="/:cityName" element={<CityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
