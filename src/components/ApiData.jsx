import React, { useEffect, useState } from 'react';
import './App.css'; // Import CSS for styling

const ApiData = () => {
  const [locationData, setLocationData] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [error, setError] = useState(null);

  const locationName = 'Delhi';
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

  return (
    <div className="app">
      <h1>Location Information</h1>
      {error && <p className="error">{error}</p>}
      {locationData && (
        <div className="location">
          <p><strong>Latitude:</strong> {locationData.lat}</p>
          <p><strong>Longitude:</strong> {locationData.lon}</p>
        </div>
      )}
      <h2>Nearby Places</h2>
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
  );
};

export default ApiData;
