import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
  
const firebaseConfig = {
  apiKey: "AIzaSyDQziUc7wqUyvAsEIuamR9H1_L_NjisLA0",
  authDomain: "a-core-web-app.firebaseapp.com",
  projectId: "a-core-web-app",
  storageBucket: "a-core-web-app.appspot.com",
  messagingSenderId: "719428825537",
  appId: "1:719428825537:web:07a075693a145f270aff40",
  measurementId: "G-B21672Z7D1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);