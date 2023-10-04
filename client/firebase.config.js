// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6b_z_aMSmsxZ8HNF3orbaOUBD7TrJK2U",
  authDomain: "otp-send-verify.firebaseapp.com",
  projectId: "otp-send-verify",
  storageBucket: "otp-send-verify.appspot.com",
  messagingSenderId: "263711728980",
  appId: "1:263711728980:web:86f7a7c0a67be8aba994c1",
  measurementId: "G-SHJH5YB882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);