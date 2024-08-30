import '../styles/SearchPage.css';
import PropTypes from 'prop-types';
import { getAllCities } from '../services/operations/cityAPI';
import { useEffect, useState } from 'react';

const SearchPage = ({ onClose }) => {

  const [cities, setCities] = useState([]);

  useEffect(()=>{
    (async ()=>{
      try {
        const response = await getAllCities();

        console.log("response is--", response);
      } catch (error) {
        console.log("error: ", error);
      }
    })()
  }, [])

  if (typeof onClose !== 'function') {
    throw new Error('The onClose prop must be a function.');
  }

  return (
    <div className="search-page">
      <button>getCity</button>
      <button onClick={onClose}><i className="ri-close-large-line"></i></button>
      <div className="search-box">
          <input type="text" />
          <i className="ri-search-line"></i>
      </div>
    </div>
  );
};
SearchPage.propTypes = {
  onClose: PropTypes.func.isRequired,
}
export default SearchPage;
