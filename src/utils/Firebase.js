import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAU_sa6S9U5R7Y16QvlZ4qflt_DtlStYDk",
  authDomain: "canvas-93.firebaseapp.com",
  projectId: "canvas-93",
  storageBucket: "canvas-93.appspot.com",
  messagingSenderId: "649100303140",
  appId: "1:649100303140:web:a60840f684e102de6431b1",
  measurementId: "G-CJ2M2ZRLMP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
