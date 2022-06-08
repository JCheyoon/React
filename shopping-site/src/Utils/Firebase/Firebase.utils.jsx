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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

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
/*0. authentication 에서 받아온 데이터 를 firestorm 에 넣어야함
1. document reference 가 exist 하는지 봐야함. reference 는 document model의 instance임
  2. doc 에서 (데이터베이스,콜렉션,identification (unique id)를 불러와야함. 그래서 unique id가 뭐냐면
  구글 로그인한거 로그했을때 uid 라는게 있음 ->userAuth.uid
  3.그후 signIn.js 에서 createUserDocumentFromAuth 를 import해준다
  4.const userSnapShot = await getDoc(userDocRef) 로 data가 존재하는지 확인함
   */
