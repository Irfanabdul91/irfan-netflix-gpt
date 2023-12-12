// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTTYEBCRUNFADgigD_4ypoT2kUHMPF0OM",
  authDomain: "irfan-netflix-gpt.firebaseapp.com",
  projectId: "irfan-netflix-gpt",
  storageBucket: "irfan-netflix-gpt.appspot.com",
  messagingSenderId: "758056463325",
  appId: "1:758056463325:web:734f4da363bacde033a434",
  measurementId: "G-YZT8EDX5R3"

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();