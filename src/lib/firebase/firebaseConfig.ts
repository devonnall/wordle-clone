// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "word-games-505ee.firebaseapp.com",
  projectId: "word-games-505ee",
  storageBucket: "word-games-505ee.firebasestorage.app",
  messagingSenderId: "329213579400",
  appId: "1:329213579400:web:b0ca8be6f26e4bb9134f3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);