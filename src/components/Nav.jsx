import { useDispatch, useSelector } from 'react-redux';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_crop.png';
import '../styles/Nav.css';
import SearchPage from './SearchPage';
import { handleLogOut } from '../services/operations/authFire';

  const Nav = () => {
    const auth = useSelector((state)=> state.auth);
    console.log("Autheticated: ", auth.isAuthenticated);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
    };

    const handleLogOutFun = () =>{
      handleLogOut(dispatch, navigate);
    }

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

          {auth.isAuthenticated ? (
            <>
              <Link to={"/dashboard"}>
                    <button className="log-button">
                      Dashboard
                    </button>
              </Link>
              <button onClick={handleLogOutFun} className='log-button'>
                Log Out
              </button>
            </>
          ):(
            <>
            <Link to={"/signup"}>
                  <button className="log-button">
                    Sign Up
                  </button>
            </Link>
            <Link to={"/login"}>
                  <button className="log-button">
                    Login
                  </button>
            </Link>
            </>
          )}

          {/* <button onClick={getUserClaims}>
            Check User
          </button> */}
        </div>
        {isSearchVisible && <SearchPage onClose={toggleSearch} />}
      </div>
    );
  };

  export default Nav;
