import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB96_n8agFgxbdDMQktScEtNUjGxbHo71k",
  authDomain: "docs-clone-6a38a.firebaseapp.com",
  projectId: "docs-clone-6a38a",
  storageBucket: "docs-clone-6a38a.appspot.com",
  messagingSenderId: "179442119034",
  appId: "1:179442119034:web:b0c8e2844419f4eac4e6c3",
  measurementId: "G-B2B8QR51L2"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)