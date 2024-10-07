// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4hjDRh1k-hXhNJ13k-2nFbAPuZ-R7_F4",
  authDomain: "socketio-workshop.firebaseapp.com",
  databaseURL: "https://socketio-workshop-default-rtdb.firebaseio.com",
  projectId: "socketio-workshop",
  storageBucket: "socketio-workshop.appspot.com",
  messagingSenderId: "510077374141",
  appId: "1:510077374141:web:068d101b692e4b242731d4",
  measurementId: "G-STFC23DFKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
