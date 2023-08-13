// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVKwl_sxACWbMXx4I-9wqUCCBUzN19Ukg",
  authDomain: "poster-36e50.firebaseapp.com",
  projectId: "poster-36e50",
  storageBucket: "poster-36e50.appspot.com",
  messagingSenderId: "497890415982",
  appId: "1:497890415982:web:98515f28f080f96d989d7f",
  measurementId: "G-97DRXCVPQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
 