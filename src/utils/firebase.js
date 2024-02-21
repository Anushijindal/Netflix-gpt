// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz6AXQPC8s0pxkmzDLWSF1VPffl0xOeO4",
  authDomain: "netflix-d4b44.firebaseapp.com",
  projectId: "netflix-d4b44",
  storageBucket: "netflix-d4b44.appspot.com",
  messagingSenderId: "1010526788012",
  appId: "1:1010526788012:web:eb4389b97efacdeca24209",
  measurementId: "G-MHDZE05521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();