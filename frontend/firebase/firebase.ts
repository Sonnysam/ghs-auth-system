import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPmm0prboCCMFYvSuYLTAoWtRagwTwehs",
  authDomain: "ghs-auth-11047.firebaseapp.com",
  projectId: "ghs-auth-11047",
  storageBucket: "ghs-auth-11047.appspot.com",
  messagingSenderId: "576364255503",
  appId: "1:576364255503:web:ce380ceceb72301904467a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { auth, db };
