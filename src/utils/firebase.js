// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMuv6nA2UXHJMf78e0Anv7H0oK6tGA4Lo",
  authDomain: "gdscbloodbank.firebaseapp.com",
  projectId: "gdscbloodbank",
  storageBucket: "gdscbloodbank.appspot.com",
  messagingSenderId: "640043252981",
  appId: "1:640043252981:web:119f5c7f1b84024911d9bc",
  measurementId: "G-RQJBZFH6QW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

const storage = getStorage();

export { app, auth, db, storage };
