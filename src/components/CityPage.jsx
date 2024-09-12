import { useState, useEffect } from "react"; 
import axios from "axios";
import "../styles/CityPages.css";
import { useLocation } from 'react-router-dom';
import DelhiFoodCard from "./DelhiFoodCard";
import { WeatherCard } from "./WeatherCard";
import TourGuid from "./TourGuid";
import Footer from "./Footer";
import "./new.css"

function CityPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const location = useLocation(); 
  const { cityData } = location.state || {}; 
  console.log("from cityPage", cityData);

  const [locationData, setLocationData] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [error, setError] = useState(null);

  const locationName = cityData?.cityName;
  const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json`;

  useEffect(() => {
    // Fetch latitude and longitude from Nominatim
    fetch(nominatimUrl)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const lat = data[0].lat;
          const lon = data[0].lon;
          setLocationData({ lat, lon });

          // After getting lat and lon, fetch nearby places
          fetchNearbyPlaces(lat, lon);
        } else {
          setError('Location not found');
        }
      })
      .catch(error => setError('Error fetching data: ' + error.message));
  }, [nominatimUrl]);

  // Function to fetch nearby places
  const fetchNearbyPlaces = (lat, lng) => {
    const placesUrl = `https://api.foursquare.com/v3/places/search?ll=${lat},${lng}&limit=5`;

    fetch(placesUrl, {
      headers: {
        'Authorization': 'fsq3c2uA6T9VXaJS7/q/AbaY5WGqpDkQGy+Be8Nc+VXLGQ8=' // Your Foursquare API key
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setNearbyPlaces(data.results);
        } else {
          setError('No nearby places found or error occurred');
        }
      })
      .catch(error => setError('Error fetching places data: ' + error.message));
  };

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
            <h1>{cityData.cityName}</h1>
          </div>
        ) : (
          <p>No data for the given city</p>
        )}
      </div>
  
      <div className="video-container">
        {cityData && cityData.famousPlaces && cityData.famousPlaces[1] && (
          <img
            src={cityData.famousPlaces[1].images}
            alt="Famous Place"
          />
        )}
        {cityData && <h1>{cityData.cityName}</h1>}
      </div>
  
      {/* Display Weather Information only if cityData exists */}
      {cityData && weatherData && (
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
  
      <div className="app">
        <h1>Location Information</h1>
        {error && <p className="error">{error}</p>}
        {locationData && (
          <div className="location">
            <p><strong>Latitude:</strong> {locationData.lat}</p>
            <p><strong>Longitude:</strong> {locationData.lon}</p>
          </div>
        )}
        <h2>Famous Places</h2>
        {nearbyPlaces.length > 0 ? (
          <ul className="places-list">
            {nearbyPlaces.map(place => (
              <li key={place.id} className="place-item">
                <h3>{place.name}</h3>
                <p>{place.location.address}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No nearby places to display.</p>
        )}
      </div>
  
      {cityData ? (
        <>
          <div className="page2">
            <div className="hidden-text">
              <p>{cityData.description}</p>
            </div>
            <p className="popular">Best Food For You Only</p>
            <div className="hidden-text">
              <p>Indulge in mouthwatering street food, bursting with authentic flavors, local spices, and unforgettable culinary delights.</p>
            </div>
            <DelhiFoodCard data={cityData.foods} />
          </div>
  
          <div className="page3">
            <div className="poster"></div>
            {showPopUp && <TourGuid onclose={() => setShowPopUp(false)} />}
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
            <DelhiFoodCard data={cityData.handicrafts} />
  
            <p className="popular">Local Events</p>
            <div className="hidden-text">
              <p>Explore vibrant festivals, food markets, historical tours, art exhibitions, and live music to attract curious tourists.</p>
            </div>
            <DelhiFoodCard data={cityData.events} />
          </div>
        </>
      ) : (
        <div className="page2">
          <p>Please select a city to see more details.</p>
        </div>
      )}
  
      <Footer />
    </div>
  );
  
}

export default CityPage;