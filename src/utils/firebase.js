// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firebase,
  authDomain: "hnblog-404621.firebaseapp.com",
  projectId: "hnblog-404621",
  storageBucket: "hnblog-404621.appspot.com",
  messagingSenderId: "553320956448",
  appId: "1:553320956448:web:cde29e6033a3ba743fb245",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
