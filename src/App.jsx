import "./App.css";
import Nav from "./components/Nav";
import video from "./assets/images/heroVideo.mp4";
import DestinationCards from "./components/DesitnationCards";
import FestiveCards from "./components/FestiveCards";
import CardCollection from "./components/CardCollection";
import Footer from "./components/Footer";
import FoodCards from "./components/FoodCards";
import SearchPage from "./components/SearchPage"; // Import the SearchPage component
import CityPage from "./components/CityPage"; // Import a CityPage to show city-specific details
import Dashboard from "./components/core/Dashboard/Dashboard";

import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components

import { useState, useEffect } from "react";

import { auth, firestoreDb } from "./services/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/authSlice";

function App() {
  const dispatch = useDispatch()

  const [showSearch, setShowSearch] = useState(false);

  const handleOpenSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userr) => {
      if (userr) {
        try {
          const tokenResult = await userr.getIdTokenResult();
          const claims = tokenResult.claims;
          const user = claims.user_id;

          // console.log("User's Custom Claims: ", claims);

          const userDoc = await getDoc(doc(firestoreDb, "users", userr.uid));
          const role = userDoc.data().accountType;
          // console.log("User account type: ", role);
          dispatch(setUser({user, role}));

        } catch (error) {
          console.error("Error fetching user claims: ", error);
        }
      } else {
        console.log("No user is currently signed in.");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Nav onSearchClick={handleOpenSearch} /> {/* Pass a prop to open search */}
      
      {showSearch && <SearchPage onClose={handleCloseSearch} />} {/* Render SearchPage based on state */}
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={
          <>
            <div id="page1">
                <video src={video} autoPlay muted loop id="video"></video>
                  <p>"Regional India is Original India"</p>
            </div>
            <div id="page2">
              <div className="contain">
                <div className="hidden-text">
                  <p>
                    One of the oldest civilisations in the world, India is a mosaic of
                    multicultural experiences. With a rich heritage and myriad
                    attractions, the country is among the most popular tourist
                    destinations in the world. It covers an area of 32, 87,263 sq. km,
                    extending from the snow-covered Himalayan heights to the tropical
                    rain forests of the south. As the 7th largest country in the
                    world, India stands apart from the rest of Asia, marked off as it
                    is by mountains and the sea, which give the country a distinct
                    geographical entity.
                  </p>
                </div>
              </div>
            </div>
            <div id="page4">
              <div className="contain">
                {/* <div className="poster">
                  <img
                    src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/banner/Dekho-Apna-Desh-website-banner-1.png"
                    alt=""
                  />
                </div> */}
                <p className="popular">Must Visit Destinations</p>
                <p className="text">
                  From historical cities to natural splendours, come see the best of
                  India
                </p>
                <div className="Destination-cards">
                  <DestinationCards />
                </div>
                {/* <div className="poster">
                  <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/banner/wedinindia.png" />
                </div> */}
                <p className="popular">Eats With Us</p>
                <p className="text">
                  As you travel through the country, Taste our diverse and tasty foods.
                </p>
                <div className="Food-cards">
                  <FoodCards />
                </div>
              </div>
            </div>
            <div id="page5">
              <div className="contain">
                <p className="popular">Immersive Experiences</p>
                <p className="text">
                  In the land of opulence, let loose and discover yourself
                </p>
              </div>
              <CardCollection />
              <p className="popular">Celebrate With Us</p>
              <p className="text">
                As you travel through the country, be a part of our festivals and
                feasts
              </p>
              <FestiveCards />
            </div>
            <Footer />
          </>
        }/>

        <Route path="signup" element={
          <OpenRoute>
            <Signup/>
          </OpenRoute>
        }
        />

        <Route path="login" element={
            <OpenRoute>
              <Login/>
            </OpenRoute>
          }
        />

        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

        {/* Private routes: accessible only if user is authenticated with the correct role */}
        <Route path="/tour-guide-dashboard" element={<PrivateRoute allowedRoles={['Tour Guide']}>
          {/* <TourGuideDashboard /> */}
          </PrivateRoute>} />
        <Route path="/business-dashboard" element={<PrivateRoute allowedRoles={['Business']}>
          {/* <BusinessDashboard /> */}
          </PrivateRoute>} />
        <Route path="/tourist-dashboard" element={<PrivateRoute allowedRoles={['Tourist']}>
          {/* <TouristDashboard /> */}
          </PrivateRoute>} />

        {/* Not authorized route */}
        <Route path="/not-authorized" element={
          <>
          <h1>Not Authorized</h1>
          </>
        } />

        {/* Dynamic City Page */}
        <Route path="/:cityName" element={<CityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
