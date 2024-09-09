  import { useState} from 'react';
  import { useNavigate } from 'react-router-dom';
  import { Link } from 'react-router-dom';
  import logo from '../assets/images/logo_crop.png';
  import '../styles/Nav.css';
  import SearchPage from './SearchPage';

  const Nav = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const navigate = useNavigate();

    const clickHandler = ()=>{
      navigate("/login");
    }

    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
    };

    return (
      <div className="nav-bar">
        <div className="nav1">
          <li>Experiences ▾</li>
          <li>Explore ▾</li>
          <li>Travel ▾</li>
        </div>
        <Link to="/"><img src={logo} alt="logo" id='logo'/></Link>
        
        <div className="nav3">
          <button onClick={toggleSearch}>
            <i className="ri-search-2-line"></i>
          </button>
          {/* <i className="ri-login-box-line"></i> */}
          <Link to={"/signup"}>
                <button className="">
                  Sign Up
                </button>
          </Link>
          <Link to={"/login"}>
                <button className="">
                  Login
                </button>
          </Link>
        </div>
        {isSearchVisible && <SearchPage onClose={toggleSearch} />}
      </div>
    );
  };

  export default Nav;
