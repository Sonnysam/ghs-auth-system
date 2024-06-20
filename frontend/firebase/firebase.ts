import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEH4_cocXB9JBeb9gwgysTaZWgoKk1jUw",
  authDomain: "luggage-pro.firebaseapp.com",
  projectId: "luggage-pro",
  storageBucket: "luggage-pro.appspot.com",
  messagingSenderId: "673210161055",
  appId: "1:673210161055:web:037e2a89157d4b57a7cfaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { auth, db };
