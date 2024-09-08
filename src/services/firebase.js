import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// const { getAuth, GoogleAuthProvider } = require("firebase/auth");


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

const initializeFirebaseApp = () =>{
    try {
        app = initializeApp(firebaseConfig);
        firestoreDb = getFirestore();
        return app;
    } catch (error) {
        console.log("Initialize firebase error: ",error);        
    }
}

const getFirebaseApp = () => app;

initializeFirebaseApp();
export { firestoreDb };

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBXCeQ0bSe4gCvOsd_J_WFBcwjpsaoOlrA",
//     authDomain: "restaurant-db2d8.firebaseapp.com",
//     databaseURL: "https://restaurant-db2d8.firebaseio.com",
//     projectId: "restaurant-db2d8",
//     storageBucket: "restaurant-db2d8.appspot.com",
//     messagingSenderId: "702181374693",
//     appId: "1:702181374693:web:8af03eda033043676eb20c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// export const auth = getAuth(app);
// export const firestore = getFirestore(app);
// export const googleProvider = new GoogleAuthProvider();