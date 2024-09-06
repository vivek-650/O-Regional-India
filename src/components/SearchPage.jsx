import '../styles/SearchPage.css';
import PropTypes from 'prop-types';
import { getCityData } from '../services/operations/cityAPI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SearchPage = ({ onClose }) => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState(''); // State for the input value
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleSearch = async () => {
    if (cityName) { // Fetch data only if cityName is not empty
      setIsLoading(true); // Start loading
      try {
        const response = await getCityData(cityName);
        const citiesList = response.data.cityData;

        // Check if city data exists, and navigate accordingly
        if (citiesList) {
          setCities(citiesList);
          // Navigate to the city route and pass the city data
          navigate(`/${cityName}`, { state: { cityData: citiesList } });
        } else {
          // Navigate to the city route but without data (will show "No data")
          navigate(`/${cityName}`, { state: { cityData: null } });
        }

        // Close the search page after navigating
        onClose();
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setIsLoading(false); // Stop loading after search completes
      }
    }
  };

  if (typeof onClose !== 'function') {
    throw new Error('The onClose prop must be a function.');
  }

  return (
    <div className="search-page">
      <button onClick={onClose}><i className="ri-close-large-line"></i></button>
      <div className="search-box">
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)} 
          placeholder="Search city..."
        />
        {isLoading ? (
          // Show loading spinner when searching
          <div className="spinner"></div>
        ) : (
          <i 
            className="ri-search-line" 
            onClick={handleSearch} 
          ></i>
        )}
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SearchPage;
