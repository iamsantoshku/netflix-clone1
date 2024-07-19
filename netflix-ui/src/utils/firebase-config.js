// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMU8zq82VE8UokPYLPlrYGJhptMo0K-7E",
  authDomain: "react-netflix-clone-ad97c.firebaseapp.com",
  projectId: "react-netflix-clone-ad97c",
  storageBucket: "react-netflix-clone-ad97c.appspot.com",
  messagingSenderId: "441375384938",
  appId: "1:441375384938:web:be4a6df0eeb7e5ac02b113",
  measurementId: "G-3Z6XH0XSFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);