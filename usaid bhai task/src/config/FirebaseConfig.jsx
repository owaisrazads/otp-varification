// src/config/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDktwNE8GeBl3_TFJ1yTnVAJIZBGZY1V_8",
  authDomain: "owais-pass-generator.firebaseapp.com",
  projectId: "owais-pass-generator",
  storageBucket: "owais-pass-generator.appspot.com",
  messagingSenderId: "399131274507",
  appId: "1:399131274507:web:7a61a7032b4b2fc353860e",
  measurementId: "G-BB1NNEBQDE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
