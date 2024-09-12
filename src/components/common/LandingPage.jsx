import React from 'react'
import '../../styles/LandingPage.css';
import logo from '../../assets/images/logo_crop.png'

function LandingPage() {
    return (
        <div className='main'>
          {/* Header */}
          <div className="landing-page1">
          {/* <header className="header">
            <div className="landing-logo">
              <img src={logo} alt="" />
            </div>
            <nav>
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </nav>
            <div className="header-right">
              <input type="text" placeholder="Search..." className="search-bar" />
              <button className="login-btn">Log In</button>
            </div>
          </header> */}
    
          {/* Hero Section */}
          <section className="hero">
            <div className="overlay"></div>
            <div className="hero-content">
              <h1>Explore <br /> The Original India</h1>
              <p>Discover amazing places ,Food ,Handicraft around the Indian Villages with our Tour Website.</p>
              <div className="hero-buttons">
                <button className="discover-btn">Discover</button>
                <button className="knowmore-btn">Know More</button>
              </div>
            </div>
          </section>
          </div>
    
          {/* Footer */}
          <div className="landing-page2">
            <div className="left-div-page2">
                <div className="famous-place"><h1>Famous Place</h1></div>
                <div className="famous-food"><h1>Famous Food</h1></div>
                <div className="famous-event"><h1>Famous Event</h1></div>
                <div className="famous-handicraft"><h1>famous handicraft</h1></div>
            </div>
            <div className="right-div-page2">
                <div className="right-div1">
                <div className="right-div-elm" id='div-elm1'>
                        <h1>Real Time Weather Update</h1>
                    </div>
                    <div className="right-div-elm" id='div-elm2'>
                    <h1>Multi Language Support</h1>
                    </div>
                </div>
                    <div className="right-div2">
                    <div className="right-div-elm" id='div-elm3'>
                        <h1></h1>
                    </div>
                    <div className="right-div-elm" id='div-elm4'>
                        <h1>Chat Bot Support</h1>
                    </div>
                    </div>
                    
            </div>
          </div>
          <footer className="footer">
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </footer>
        </div>
      );
    };

export default LandingPage;




  