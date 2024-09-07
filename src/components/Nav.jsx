  import { useState, } from 'react';
  import { Link } from 'react-router-dom';
  import logo from '../assets/images/logo_crop.png';
  import '../styles/Nav.css';
  import SearchPage from './SearchPage';
  import Login from './Login';

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
        <Link to="/"><img src={logo} alt="logo" id='logo'/></Link>
        
        <div className="nav3">
          <button onClick={toggleSearch}>
            <i className="ri-search-2-line"></i>
          </button>
          <Login></Login>
          {/* <i className="ri-login-box-line"></i> */}
        </div>
        {isSearchVisible && <SearchPage onClose={toggleSearch} />}
      </div>
    );
  };

  export default Nav;
