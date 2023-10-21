// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9LzkvysBUASissj3jf8hS1nEi1kNmnNs",
  authDomain: "blood-bank-app-9a6c7.firebaseapp.com",
  projectId: "blood-bank-app-9a6c7",
  storageBucket: "blood-bank-app-9a6c7.appspot.com",
  messagingSenderId: "252735497825",
  appId: "1:252735497825:web:3482bfb44f366b49b12c20",
  measurementId: "G-BYXPK2F78V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export default app
