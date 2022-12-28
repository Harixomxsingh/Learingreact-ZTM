// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjflgvpheQ4LjXOPU9GYEogz3m6LkgZWk",
  authDomain: "react-learn-ztm-crow-e-commers.firebaseapp.com",
  projectId: "react-learn-ztm-crow-e-commers",
  storageBucket: "react-learn-ztm-crow-e-commers.appspot.com",
  messagingSenderId: "1091644674837",
  appId: "1:1091644674837:web:6cfdee668fdfaeb3654f1c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
