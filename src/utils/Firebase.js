// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU_sa6S9U5R7Y16QvlZ4qflt_DtlStYDk",
  authDomain: "canvas-93.firebaseapp.com",
  projectId: "canvas-93",
  storageBucket: "canvas-93.appspot.com",
  messagingSenderId: "649100303140",
  appId: "1:649100303140:web:a60840f684e102de6431b1",
  measurementId: "G-CJ2M2ZRLMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
