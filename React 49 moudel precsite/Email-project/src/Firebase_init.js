// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqAC_a1YQak_nEHBJPdTwetrA3Lk5iam4",
  authDomain: "email-password-auth-da0e7.firebaseapp.com",
  projectId: "email-password-auth-da0e7",
  storageBucket: "email-password-auth-da0e7.firebasestorage.app",
  messagingSenderId: "42017593542",
  appId: "1:42017593542:web:35f50da9f1f212316f9fc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);