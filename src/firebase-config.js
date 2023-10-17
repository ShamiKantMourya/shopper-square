// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnsMinGPT-_3HZpOOYnwUURx9T6FAKbMw",
  authDomain: "shopper-square-2968b.firebaseapp.com",
  projectId: "shopper-square-2968b",
  storageBucket: "shopper-square-2968b.appspot.com",
  messagingSenderId: "885538671697",
  appId: "1:885538671697:web:fcd0e512d7006ce2eabc70",
  measurementId: "G-FJ1S0GT5EY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);