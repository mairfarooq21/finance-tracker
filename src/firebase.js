import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNyjSOP7vef0mJdPzFyjaoU6z-CdzTwl4",
  authDomain: "finance-tracker-88dce.firebaseapp.com",
  projectId: "finance-tracker-88dce",
  storageBucket: "finance-tracker-88dce.firebasestorage.app",
  messagingSenderId: "720353628867",
  appId: "1:720353628867:web:3ac54bb13058b4345a8876",
  measurementId: "G-BSR5KYFTQ5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
