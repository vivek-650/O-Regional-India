// import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access passed data


const CityPage = () => {
  
  
  const location = useLocation(); // Get the passed state from navigation
  const { cityData } = location.state || {}; // Get cityData or default to null
  // console.log("from cityPage",cityData)
  
  return (
    <div className="city-page">
      {cityData ? (
        <div>
          <h1>{cityData.cityName}</h1>
          
          {/* You can add more details here based on the data structure */}
        </div>
      ) : (
        <p>No data for the given city</p> // Show message if no city data is present
      )}
    </div>
  );
};

export default CityPage;
