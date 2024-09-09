import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCrWL_RL6nZHJWupHVLvildJFt7gFbb9J8",
  authDomain: "oregional-india.firebaseapp.com",
  databaseURL: "https://oregional-india-default-rtdb.firebaseio.com",
  projectId: "oregional-india",
  storageBucket: "oregional-india.appspot.com",
  messagingSenderId: "316616132528",
  appId: "1:316616132528:web:b599ed97bd56e6440a3875",
  measurementId: "G-XTC9WSMY32"
};

let app;
let firestoreDb;
let auth;
let googleProvider;

const initializeFirebaseApp = () =>{
    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        firestoreDb = getFirestore();
        googleProvider = new GoogleAuthProvider();
        return app;
    } catch (error) {
        console.log("Initialize firebase error: ",error);        
    }
}

const getFirebaseApp = () => app;

initializeFirebaseApp();
export { firestoreDb, auth, googleProvider };