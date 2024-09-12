import "./App.css";
import Nav from "./components/Nav";
import video from "./assets/images/heroVideo.mp4";
import DestinationCards from "./components/DesitnationCards";
import FestiveCards from "./components/FestiveCards";
import CardCollection from "./components/CardCollection";
import Footer from "./components/Footer";
import FoodCards from "./components/FoodCards";
import SearchPage from "./components/SearchPage";
import CityPage from "./components/CityPage";
import TouristDashboard from "./components/core/Dashboard/TouristDashboard";
import TourGuideDashboard from "./components/core/Dashboard/TourGuideDashboard";
import BusinessDashboard from "./components/core/Dashboard/BusinessDashboard";
import Dashboard from "./components/core/Dashboard/Dashboard";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, firestoreDb } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/authSlice";
import LandingPage from "./components/common/LandingPage";

function App() {

  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);

  const handleOpenSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);

  // Load Google Translate script
  useEffect(() => {
    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.id = "google-translate-script";
      googleTranslateScript.type = "text/javascript";
      googleTranslateScript.async = true;
      googleTranslateScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(googleTranslateScript);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          "google_translate_element"
        );
      };
    }
  }, []);

  // Firebase authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userr) => {
      if (userr) {
        try {
          const tokenResult = await userr.getIdTokenResult();
          const claims = tokenResult.claims;
          const user = claims.user_id;

          const userDoc = await getDoc(doc(firestoreDb, "users", userr.uid));
          const role = userDoc.data().accountType;
          dispatch(setUser({ user, role }));
        } catch (error) {
          console.error("Error fetching user claims: ", error);
        }
      } else {
        console.log("No user is currently signed in.");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div id="google_translate_element"></div> {/* Google Translate element */}

      <Nav onSearchClick={handleOpenSearch} />

      {showSearch && <SearchPage onClose={handleCloseSearch} />}

      <Routes>
        <Route
          path="/"
          element={
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
                      rain forests of the south.
                    </p>
                  </div>
                </div>
              </div>
              <div id="page4">
                <div className="contain">
                  <p className="popular">Must Visit Destinations</p>
                  <p className="text">From historical cities to natural splendours, come see the best of India</p>
                  <div className="Destination-cards">
                    <DestinationCards />
                  </div>
                  <p className="popular">Eats With Us</p>
                  <p className="text">Taste our diverse and tasty foods.</p>
                  <div className="Food-cards">
                    <FoodCards />
                  </div>
                </div>
              </div>
              <div id="page5">
                <div className="contain">
                  <p className="popular">Immersive Experiences</p>
                  <p className="text">In the land of opulence, let loose and discover yourself.</p>
                </div>
                <CardCollection />
                <p className="popular">Celebrate With Us</p>
                <p className="text">Be a part of our festivals and feasts.</p>
                <FestiveCards />
              </div>
              <Footer />
            </>
          }
        />

        <Route path="landing" element={<LandingPage></LandingPage>}></Route>

        <Route path="signup" element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path="login" element={<OpenRoute><Login /></OpenRoute>} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/tour-guide-dashboard" element={<PrivateRoute allowedRoles={['Tour Guide']} />} />
        <Route path="/business-dashboard" element={<PrivateRoute allowedRoles={['Business']} />} />
        <Route path="/tourist-dashboard" element={<PrivateRoute allowedRoles={['Tourist']} />} /> */}
        <Route path="/not-authorized" element={<h1>Not Authorized</h1>} />

        <Route path="/:cityName" element={<PrivateRoute><CityPage /></PrivateRoute>} />
        <Route path="/dashboard/tourist" element={<TouristDashboard />} />
        <Route path="/dashboard/tour-guide" element={<TourGuideDashboard />} />
        <Route path="/dashboard/business-owner" element={<BusinessDashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
