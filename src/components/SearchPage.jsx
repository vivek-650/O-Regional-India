import '../styles/SearchPage.css';
import PropTypes from 'prop-types';
import { getCityData } from '../services/operations/cityAPI';
import {  useState } from 'react';

const SearchPage = ({ onClose }) => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState(''); // State for the input value

  const handleSearch = async () => {
    if (cityName) { // Fetch data only if cityName is not empty
      try {
        const response = await getCityData(cityName);
        const citiesList = response.data.cityData;
        console.log("City is--", citiesList);
        setCities(citiesList);
      } catch (error) {
        console.log("error: ", error);
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
        <i 
          className="ri-search-line" 
          onClick={handleSearch} 
        ></i>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SearchPage;
