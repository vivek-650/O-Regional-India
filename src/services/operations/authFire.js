import { auth, firestoreDb, googleProvider } from '../../services/firebase'; // Import Firebase auth
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { setUser, logout } from '../../slices/authSlice';

export const handleRegister = async (signupData, accountType, dispatch, navigate) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
      const user = userCredential.user;
      const userId = user.uid;

      console.log("User Registered: ", user);

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

        dispatch(setUser({ userId, accountType }));

        navigate('/login');

    } catch (error) {
      console.error("Error registering: ", error);
    }
  };

export const handleLogin = async (loginData, dispatch, navigate) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      const user = userCredential.user;
      const userId = user.uid;

      // Fetch user data from Firestore based on UID
      const userDoc = await getDoc(doc(firestoreDb, "users", user.uid));
      // const userAccount = userDoc.data().accountType;
      // console.log("User account type: ", userAccount);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.accountType; // Assuming 'role' is stored in Firestore

        // Dispatch user data and role to Redux
        dispatch(setUser({ userId, role }));

        // Redirect based on role
        if (role === 'Tour Guide') {
          navigate('/tour-guide-dashboard');
        } else if (role === 'Business') {
          navigate('/business-dashboard');
        } else {
          navigate('/tourist-dashboard');
        }

      } else {
        setError("User data not found.");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      navigate('/login');
    }
  };

//login with google
export const handleGoogleLogin = async ()=>{
  try{
    const user = await signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("Token: ",token);
      // The signed-in user info.
      const userr = result.user;
      console.log("User: ",userr);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      console.log("Error occurred while google login: ",error);
    });

    console.log("User logged in using google", user);
  }
  catch(error){
    console.log(error);
  }
}

export const handleLogOut = async(dispatch, navigate) =>{
  try{
    await signOut(auth).then(() => {
      console.log("User Logged out Successfully");
      dispatch(logout());
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
    });
  }catch(error){
    console.log(error);
  }
}

export const getUserClaims = async () => {
  const user = await auth.currentUser;
  if (user) {
    const tokenResult = await user.getIdTokenResult();
    const claims = await tokenResult.claims;

    console.log("User's Custom Claims: ", claims);
    return claims;
  }
  return null;
};
