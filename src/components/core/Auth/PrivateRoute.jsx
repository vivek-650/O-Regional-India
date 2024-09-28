// src/components/PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestoreDb } from '../../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function PrivateRoute({children, role}) {
  const [isAllowed, setIsAllowed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(firestoreDb, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists() && docSnap.data().accountType === role) {
            setIsAllowed(true);
          } else {
            navigate('/login');
          }
        } else {
          navigate('/login');
        }
      });
    };

    checkAuth();
  }, [role, navigate]);

  return isAllowed ? children : null;
}

export default PrivateRoute;

