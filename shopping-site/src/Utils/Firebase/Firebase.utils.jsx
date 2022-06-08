import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrVfXrG1yZvmPl85gXqo-dIX4-tUG06ik",
  authDomain: "jc-crown-shopping-db.firebaseapp.com",
  projectId: "jc-crown-shopping-db",
  storageBucket: "jc-crown-shopping-db.appspot.com",
  messagingSenderId: "969389879327",
  appId: "1:969389879327:web:be706e614775ecbc6f252a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // userSnapshot이 doc에 없다면 create함
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmail = async (email, password) => {
  if (!email || !password) return;

  return await createAuthUserWithEmail(auth, email, password);
};
