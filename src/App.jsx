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
import TourGuideDashboard from "./components/core/Dashboard/TourGuide/TourGuideDashboard";
import BusinessDashboard from "./components/core/Dashboard/BusinessDashboard";
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
import HomePage from "./pages/HomePage";

function App() {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleOpenSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);

  // Load Google Translate script
  // useEffect(() => {
  //   const existingScript = document.getElementById("google-translate-script");
  //   if (!existingScript) {
  //     const googleTranslateScript = document.createElement("script");
  //     googleTranslateScript.id = "google-translate-script";
  //     googleTranslateScript.type = "text/javascript";
  //     googleTranslateScript.async = true;
  //     googleTranslateScript.src =
  //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     document.body.appendChild(googleTranslateScript);

  //     window.googleTranslateElementInit = () => {
  //       new window.google.translate.TranslateElement(
  //         { pageLanguage: "en", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
  //         "google_translate_element"
  //       );
  //     };
  //   }
  // }, []);

  // Firebase authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userr) => {
      if (userr) {
        try {
          // const tokenResult = await userr.getIdTokenResult();
          // const claims = tokenResult.claims;
          // const user = claims.user_id;

          const userDoc = await getDoc(doc(firestoreDb, "users", userr.uid));
          const role = userDoc.data().accountType;
          dispatch(setUser({ user: userr.uid, role }));
        } catch (error) {
          console.error("Error fetching user claims: ", error);
        }
      } else {
        console.log("No user is currently signed in.");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Display a loading spinner until role is fetched
  if (loading) {
    return <>Loading..............</>;
  }

  return (
    <Router>
      {/* <div id="google_translate_element"></div>  */}
      {/* Google Translate element */}

      <Nav onSearchClick={handleOpenSearch} />

      {showSearch && <SearchPage onClose={handleCloseSearch} />}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="landing" element={<LandingPage></LandingPage>}></Route>

        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/tourist-dashboard"
          element={
            <PrivateRoute role="Tourist">
              <TouristDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/tour-guide-dashboard"
          element={
            <PrivateRoute role="Tour Guide">
              <TourGuideDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/business-dashboard"
          element={
            <PrivateRoute role="Business">
              <BusinessDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/not-authorized" element={<h1>Not Authorized</h1>} />

        <Route path="/:cityName" element={<CityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
