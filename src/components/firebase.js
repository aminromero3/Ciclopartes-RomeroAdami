import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhb9ZyY9kblb_JXU-59NP1owMp1tbut8Q",
  authDomain: "ciclopartes-c6fea.firebaseapp.com",
  projectId: "ciclopartes-c6fea",
  storageBucket: "ciclopartes-c6fea.appspot.com",
  messagingSenderId: "788839657295",
  appId: "1:788839657295:web:76fdbca2d6187bbd581f3a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);