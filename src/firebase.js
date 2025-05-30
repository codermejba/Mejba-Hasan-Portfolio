
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY-GXxuGu8k3YX7WoSSjfWAhDukcZVbEQ",
  authDomain: "myportfolio-f58be.firebaseapp.com",
  projectId: "myportfolio-f58be",
  storageBucket: "myportfolio-f58be.firebasestorage.app",
  messagingSenderId: "179513780050",
  appId: "1:179513780050:web:4622543b1b85b94d983c8b",
  measurementId: "G-SHZVK5PDEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);