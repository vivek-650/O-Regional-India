import React from "react";
import "../styles/CityPages.css";
import { useLocation } from 'react-router-dom'; // Import useLocation to access passed data

import DelhiFoodCard from "./DelhiFoodCard";
import DelhiPlaceCard from "./DelhiPlaceCard";
import DelhiCraftCard from "./DelhiCraftCard";
import Footer from "./Footer";

function CityPage() {

  const location = useLocation(); // Get the passed state from navigation
  const { cityData } = location.state || {}; // Get cityData or default to null
  // console.log("from cityPage",cityData)

  return (
    <div className="main">
      <div className="navbar">
        <div className="logo">Logo</div>
        {cityData ? (
        <div>
          <h1>{cityData.cityName}</h1>
          
          {/* You can add more details here based on the data structure */}
        </div>
      ) : (
        <p>No data for the given city</p> // Show message if no city data is present
      )}
        <h1 className="Header">I love Delhi</h1>
        <div className="search">search</div>
      </div>

      <div className="video-container">
        <img
          src="https://images.pexels.com/photos/13759774/pexels-photo-13759774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="page2">
        <div className="hidden-text">
          <p>
            Delhi, a captivating fusion of history and modernity, offers iconic
            landmarks, vibrant bazaars, and mouth-watering street food. Its
            majestic forts, serene gardens, and colorful festivals create a rich
            cultural tapestry. From ancient heritage to contemporary charm,
            Delhi promises an unforgettable and enriching journey for every
            traveler.
          </p>
        </div>
        {/* //famous place in Delhi */}
        <p className="popular">Best Food For You Only</p>
        <div className="hidden-text">
          <p>
          Delhi street food offers bold, flavorful delights like chaat, kebabs, parathas, golgappas, and delicious sweets.
          </p>
        </div>
        <DelhiFoodCard />
      </div>

      <div className="page3">
        {/* there be a promotion banner of delhi best resturant for tourist */}
        <div className="poster">
                  <img
                    src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/banner/Dekho-Apna-Desh-website-banner-1.png"
                    alt=""
                  />
                </div>

        <p className="popular">Best Place to Visit</p>
        <div className="hidden-text">
          <p>
          Delhi's shines through historic landmarks, vibrant markets, serene gardens, and majestic architecture at every turn.
          </p>
        </div>
        {/* There gonna be a cards component for best places */}
        <DelhiPlaceCard />
      </div>
      <div className="page4">

        <p className="popular">Delhi Wali Shopping</p>
        <div className="hidden-text">
          <p>
          Delhi's has wide range of handcrafted treasures include intricate jewelry, vibrant textiles and many more.
          </p>
        </div>
        {/* There gonna be a cards component for Delhi authentic merchendise */}
        <DelhiCraftCard />
      </div>
      <Footer />
    </div>
  );
}

export default CityPage;
