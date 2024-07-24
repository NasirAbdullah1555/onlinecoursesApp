// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBBDfvphNSxoMgvxzbvgfClLpxXkreDIQ",
  authDomain: "reactproject-e4cf0.firebaseapp.com",
  projectId: "reactproject-e4cf0",
  storageBucket: "reactproject-e4cf0.appspot.com",
  messagingSenderId: "1057484509389",
  appId: "1:1057484509389:web:1d968acabecbbe5975d984",
  measurementId: "G-NEFDT4V60Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
export const auth=getAuth(app);
export const storage=getStorage(app);