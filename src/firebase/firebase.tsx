// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDary34fB851-wJwXP6JgpT4QqdgqIGjUk",
  authDomain: "forum-e15d5.firebaseapp.com",
  projectId: "forum-e15d5",
  storageBucket: "forum-e15d5.appspot.com",
  messagingSenderId: "48698458643",
  appId: "1:48698458643:web:d7c8a8a89d3a6cef7c75e6",
  measurementId: "G-YWYVJ96ET3"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);