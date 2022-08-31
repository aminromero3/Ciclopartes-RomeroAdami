// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhb9ZyY9kblb_JXU-59NP1owMp1tbut8Q",
  authDomain: "ciclopartes-c6fea.firebaseapp.com",
  projectId: "ciclopartes-c6fea",
  storageBucket: "ciclopartes-c6fea.appspot.com",
  messagingSenderId: "788839657295",
  appId: "1:788839657295:web:76fdbca2d6187bbd581f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// obtener la base de datos
export const db = getFirestore(app);

console.log(app);

