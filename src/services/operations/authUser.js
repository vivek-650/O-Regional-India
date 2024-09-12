import { auth, firestoreDb } from '../../services/firebase'; // Import Firebase auth and Firestore
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { setUser } from '../../slices/authSlice';

// Function to get user data by user ID (UID)
export const fetchUserData = async () => {
  try {
    // Get the current user from Firebase Auth
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;

      // Fetch user data from Firestore based on UID
      const userDoc = await getDoc(doc(firestoreDb, "users", userId));

      if (userDoc.exists()) {
        const userData = userDoc.data();

        return userData;
      } else {
        console.log("No such user found!");
        return null;
      }
    } else {
      console.log("User is not logged in.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
    return null;
  }
};

// Function to update user data
export const updateUserData = async (updatedData) => {
  try {
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;

      // Update user data in Firestore
      await updateDoc(doc(firestoreDb, "users", userId), updatedData);

      console.log("User data updated successfully.");
    } else {
      console.log("User is not logged in.");
    }
  } catch (error) {
    console.error("Error updating user data: ", error);
  }
};

// Function to fetch specific field data from Firestore
export const fetchSpecificUserField = async (fieldName) => {
  try {
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      const userDoc = await getDoc(doc(firestoreDb, "users", userId));

      if (userDoc.exists()) {
        const fieldValue = userDoc.data()[fieldName];
        console.log(`Fetched ${fieldName}: `, fieldValue);
        return fieldValue;
      } else {
        console.log("User document not found.");
        return null;
      }
    } else {
      console.log("User is not logged in.");
      return null;
    }
  } catch (error) {
    console.error(`Error fetching ${fieldName}: `, error);
    return null;
  }
};
