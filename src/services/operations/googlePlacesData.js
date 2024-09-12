const locationName = 'Delhi';
const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json`;

// Fetch latitude and longitude from Nominatim
fetch(nominatimUrl)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      const lat = data[0].lat;
      const lon = data[0].lon;
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);
      
      // After getting lat and lon, fetch nearby places
      fetchNearbyPlaces(lat, lon);
    } else {
      console.error('Location not found');
    }
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to fetch nearby places
function fetchNearbyPlaces(lat, lng) {
  console.log("Getting nearby places for", lat, lng);

  const placesUrl = `https://api.foursquare.com/v3/places/search?ll=${lat},${lng}&limit=5`; // Adjust limit as needed

  fetch(placesUrl, {
    headers: {
      'Authorization': 'fsq3c2uA6T9VXaJS7/q/AbaY5WGqpDkQGy+Be8Nc+VXLGQ8=' // Replace with your Foursquare API key
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        console.log('Nearby Places:', data.results);
      } else {
        console.error('No nearby places found or error occurred');
      }
    })
    .catch(error => console.error('Error fetching places data:', error));
}
