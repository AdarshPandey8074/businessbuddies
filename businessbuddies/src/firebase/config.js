// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqFCAbRLrRPWfZXJVxHeoC2lbZriFGyTY",
    authDomain: "business-buddies-8cd8c.firebaseapp.com",
    projectId: "business-buddies-8cd8c",
    storageBucket: "business-buddies-8cd8c.appspot.com",
    messagingSenderId: "334236164082",
    appId: "1:334236164082:web:b461093fcefcb32732956b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);