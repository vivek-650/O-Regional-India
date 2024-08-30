  import { useState } from 'react';
  import logo from '../assets/images/logo_crop.png';
  import '../styles/Nav.css';
  import SearchPage from './SearchPage';

  const Nav = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
    };

    return (
      <div className="nav-bar">
        <div className="nav1">
          <li>Nav-link-1 ▾</li>
          <li>Nav-link-2 ▾</li>
          <li>Nav-link-3 ▾</li>
        </div>
        <img src={logo} alt="logo" id='logo'/>
        <div className="nav3">
          <button onClick={toggleSearch}>
            <i className="ri-search-2-line"></i>
          </button>
          <i className="ri-login-box-line"></i>
        </div>
        {isSearchVisible && <SearchPage onClose={toggleSearch} />}
      </div>
    );
  };

  export default Nav;
