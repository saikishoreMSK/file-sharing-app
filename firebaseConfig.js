// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1zfcpeqNKllDXLt0aUBXZ-7Ulgw3Jz0c",
  authDomain: "college-projects-435a2.firebaseapp.com",
  projectId: "college-projects-435a2",
  storageBucket: "college-projects-435a2.appspot.com",
  messagingSenderId: "1089349915934",
  appId: "1:1089349915934:web:d49af00bd4c4f89531a50f",
  measurementId: "G-PSTKDFY7M7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);