



import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage'; // Storage import

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "",
  authDomain: "bhasha-setu.firebaseapp.com",
  projectId: "bhasha-setu",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-S1Y685C8PQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app); // Add this for Firebase Storage

// Export Firebase services
export {
  auth,
  db,
  database,
  storage, // Export Storage
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
