import '../styles/SearchPage.css';
import PropTypes from 'prop-types';

const SearchPage = ({ onClose }) => {
  if (typeof onClose !== 'function') {
    throw new Error('The onClose prop must be a function.');
  }
  return (
    <div className="search-page">
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
