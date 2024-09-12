unction fetchNearbyPlaces(lat, lng) {
//   const radius = 1000; // Search radius in meters
//   const keyword = 'landmark'; // Keyword to search for

//   const placesUrl = `https://api.foursquare.com/v3/places/search?ll=${lat},${lng}`;

//   fetch(placesUrl)
//     .then(response => response.json())
//     .then(data => {
//       if (data.status === 'OK') {
//         console.log('Nearby Places:', data.results);
//       } else {
//         console.error('Error fetching nearby places:', data.status);
//       }
//     })
//     .catch(error => console.error('Error fetching places data:', error));
// }