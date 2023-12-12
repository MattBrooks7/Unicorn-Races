// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnbBVgMRoJHLnh0g6B1MTMj0nPiZ2v7i4",
  authDomain: "unicorn-race.firebaseapp.com",
  projectId: "unicorn-race",
  storageBucket: "unicorn-race.appspot.com",
  messagingSenderId: "559156190284",
  appId: "1:559156190284:web:4c3c99cb1bc429836ca8e9",
  measurementId: "G-4BLCRTJJFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
