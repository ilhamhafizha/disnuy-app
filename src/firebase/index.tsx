import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "disney-plus-clone-24a40.firebaseapp.com",
  projectId: "disney-plus-clone-24a40",
  storageBucket: "disney-plus-clone-24a40.firebasestorage.app",
  messagingSenderId: "330513241658",
  appId: "1:330513241658:web:465727d550981dc796c703",
  measurementId: "G-1QNCLK0QCN",
};

console.log(firebaseConfig);

const firebase = initializeApp(firebaseConfig);

export default firebase;
