import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyDOUxhfba2TwOoxtFOkvBHn7Az_BpaPLv0",
//   authDomain: "blogdb-a6dbe.firebaseapp.com",
//   projectId: "blogdb-a6dbe",
//   storageBucket: "blogdb-a6dbe.appspot.com",
//   messagingSenderId: "784083064360",
//   appId: "1:784083064360:web:7bc9e75d66d0179dc3c71d"
// };

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
