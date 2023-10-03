// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtlY0pgWQWfCsR9_TO6aq5SDgQsWDPHuQ",
  authDomain: "login-with-email-pass-ca373.firebaseapp.com",
  projectId: "login-with-email-pass-ca373",
  storageBucket: "login-with-email-pass-ca373.appspot.com",
  messagingSenderId: "102584816761",
  appId: "1:102584816761:web:34f86e2b95fc5f175470a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;