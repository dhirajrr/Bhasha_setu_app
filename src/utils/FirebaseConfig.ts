// // firebaseConfig.ts
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyAiEVF8NJi-n86aDfkIhJA7i5OGtzxj8z8",
//   authDomain: "bhasha-setu.firebaseapp.com",
//   projectId: "bhasha-setu",
//   storageBucket: "bhasha-setu.appspot.com",
//   messagingSenderId: "531832564032",
//   appId: "1:531832564032:web:5001890fb2ff8babf4b2a5",
//   measurementId: "G-S1Y685C8PQ",
// };

// const app = initializeApp(firebaseConfig);

// export default app;



import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage'; // Storage import

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAiEVF8NJi-n86aDfkIhJA7i5OGtzxj8z8",
  authDomain: "bhasha-setu.firebaseapp.com",
  projectId: "bhasha-setu",
  storageBucket: "bhasha-setu.appspot.com",
  messagingSenderId: "531832564032",
  appId: "1:531832564032:web:5001890fb2ff8babf4b2a5",
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