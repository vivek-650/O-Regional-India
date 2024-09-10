import { auth, firestoreDb } from '../../services/firebase'; // Import Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export const handleRegister = async (signupData, accountType) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
      const user = userCredential.user;
      console.log("User Registered: ", user);
      // Additional custom data like the user's name can be stored in Firestore or Realtime Database

      // Store additional data in Firestore
        await setDoc(doc(firestoreDb, "users", user.uid), {
            name: signupData.name,
            email: user.email,
            password : signupData.password,
            accountType : accountType,
            gender : signupData.gender,
            city : signupData.city,
            address : signupData.address,
            contact : signupData.contact,
            businessType : signupData.businessType || null,
            aadharNumber : signupData.aadharNumber || null,
        });
    } catch (error) {
      console.error("Error registering: ", error);
    }
  };

export const handleLogin = async (loginData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      const user = userCredential.user;
      console.log("User Logged In: ", user);

      // Redirect based on user role or status
        if (user) {
            // Redirect to dashboard or user profile
            // window.location.href = "/dashboard";
        }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };