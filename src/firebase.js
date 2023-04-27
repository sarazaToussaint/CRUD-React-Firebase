import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "blogdb-a6dbe.firebaseapp.com",
  projectId: "blogdb-a6dbe",
  storageBucket: "blogdb-a6dbe.appspot.com",
  messagingSenderId: "784083064360",
  appId: "1:784083064360:web:7bc9e75d66d0179dc3c71d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
