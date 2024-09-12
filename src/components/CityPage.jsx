import { useState, useEffect } from "react"; 
import axios from "axios";
import "../styles/CityPages.css";
import { useLocation } from 'react-router-dom';
import DelhiFoodCard from "./DelhiFoodCard";
import { WeatherCard } from "./WeatherCard";
import TourGuid from "./TourGuid";
import Footer from "./Footer";

function CityPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const location = useLocation(); 
  const { cityData } = location.state || {}; 
  console.log("from cityPage", cityData);

  const [weatherData, setWeatherData] = useState(null);
  const citylocation = cityData?.cityName; 
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${citylocation},india&APPID=830a6d619ab191faa813389258ac04b0&units=metric`; // Added units=metric for Celsius

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(apiURL);
        setWeatherData(response.data);
        console.log("Weather report: ", response.data); // Check API response
      } catch (err) {
        console.log("Error: ", err);
      }
    };  
    if (citylocation) fetchWeather();
  }, [citylocation]);

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

      {/* Pass weather data to the WeatherCard component */}
      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          temperature={weatherData.main.temp}
          minTemp={weatherData.main.temp_min}
          maxTemp={weatherData.main.temp_max}
          realFeel={weatherData.main.feels_like}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          pressure={weatherData.main.pressure}
          forecast={weatherData.weather[0].description}
        />
      )}

      <div className="page2">
        <div className="hidden-text">
          <p>{cityData?.description}</p>
        </div>
        <p className="popular">Best Food For You Only</p>
        <div className="hidden-text">
          <p>Indulge in mouthwatering street food, bursting with authentic flavors, local spices, and unforgettable culinary delights.</p>
        </div>
        <DelhiFoodCard data={cityData.foods}/>
      </div>

      <div className="page3">
  <div className="poster"></div>

  {/* Popup logic */}
  {showPopUp && (
    <div className="popup-overlay">
      <div className="popup-content">
      {showPopUp && <TourGuid onclose={() => setShowPopUp(false)} />}

      </div>
    </div>
  )}

  <div className="tour-PopUP">
    <h3 onClick={() => setShowPopUp(true)}>Need Tour Guide?</h3>
  </div>

  <div className="Hotels-PopUP">
    <h3>Need Hotels?</h3>
  </div>

  <p className="popular">Best Places to Visit</p>
  <div className="hidden-text">
    <p>A breathtaking landmark, rich in history and beauty, offering unforgettable experiences and stunning architectural marvels.</p>
  </div>
  <DelhiFoodCard data={cityData.famousPlaces} />
</div>


      <div className="page4">
        <p className="popular">Shop Authentic Only</p>
        <div className="hidden-text">
          <p>Discover unique, handmade treasures at local markets, showcasing traditional craftsmanship and authentic cultural artistry.</p>
        </div>
        <DelhiFoodCard data={cityData.handicrafts}/> 

        <p className="popular">Local Events</p>
        <div className="hidden-text">
          <p>Explore vibrant festivals, food markets, historical tours, art exhibitions, and live music to attract curious tourists.</p>
        </div>
        <DelhiFoodCard data={cityData.events}/>
      </div>

      <Footer />
    </div>
  );
}

export default CityPage;