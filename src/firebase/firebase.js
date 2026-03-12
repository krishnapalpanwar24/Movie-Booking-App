// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCH3MTcN0QmyIHSezfSXmJ171YAslUkyAY",
//   authDomain: "movie-app-1f892.firebaseapp.com",
//   projectId: "movie-app-1f892",
//   storageBucket: "movie-app-1f892.firebasestorage.app",
//   messagingSenderId: "713822477473",
//   appId: "1:713822477473:web:fc6eef0b72c3597852e4e0",
//   measurementId: "G-1NMXNCXCWQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH3MTcN0QmyIHSezfSXmJ171YAslUkyAY",
  authDomain: "movie-app-1f892.firebaseapp.com",
  projectId: "movie-app-1f892",
  storageBucket: "movie-app-1f892.firebasestorage.app",
  messagingSenderId: "713822477473",
  appId: "1:713822477473:web:fc6eef0b72c3597852e4e0",
  measurementId: "G-1NMXNCXCWQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);