// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAI0mBU0F5uHWwrR7oBQ_gG4b4l_9kkzDA",
  authDomain: "fir-auth-d40a3.firebaseapp.com",
  projectId: "fir-auth-d40a3",
  storageBucket: "fir-auth-d40a3.appspot.com",
  messagingSenderId: "781026032926",
  appId: "1:781026032926:web:c4a033e35b03db00941d0f",
};
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firestoreDb = getFirestore(firebaseApp);

