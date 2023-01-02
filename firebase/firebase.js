import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfdr5gbTHkyf79bczDyTnJrhrhyq1xJjA",
  authDomain: "eden-edc00.firebaseapp.com",
  projectId: "eden-edc00",
  storageBucket: "eden-edc00.appspot.com",
  messagingSenderId: "839662910074",
  appId: "1:839662910074:web:1466ab7993c0bca3fc19c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

//Auth config
export const auth = getAuth()

//guest account
export const guestDetails = {
  email: 'devdebroglie@gmail.com', password: 'guest123'
}