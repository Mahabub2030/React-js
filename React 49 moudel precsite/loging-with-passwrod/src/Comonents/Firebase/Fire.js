// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAYXceBGit7GG0W67gx33xTxo-IKWq64A",
  authDomain: "simple-firebase-75b2d.firebaseapp.com",
  projectId: "simple-firebase-75b2d",
  storageBucket: "simple-firebase-75b2d.firebasestorage.app",
  messagingSenderId: "461327699418",
  appId: "1:461327699418:web:a6ddb90fa9d829646804e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
