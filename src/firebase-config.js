import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAaUCKExOzZXNKz6eAU3dhhW2XpyING8pY",
    authDomain: "fir-frontend-671b3.firebaseapp.com",
    projectId: "fir-frontend-671b3",
    storageBucket: "fir-frontend-671b3.appspot.com",
    messagingSenderId: "189678732901",
    appId: "1:189678732901:web:fc282bd4741959f1a9288c"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  