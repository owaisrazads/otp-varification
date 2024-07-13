// src/config/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2ddylP3p-wF91By4Qe4RvTXAFEI8fcEc",
  authDomain: "to-do-ffaf0.firebaseapp.com",
  projectId: "to-do-ffaf0",
  storageBucket: "to-do-ffaf0.appspot.com",
  messagingSenderId: "563150972142",
  appId: "1:563150972142:web:ca7c613bf81084dfadbfff",
  measurementId: "G-E2TRLCKXZ1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
