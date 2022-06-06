// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhnbGyxHtv8v3hV6J1Z5Za6PM-Umvu5vM",
    authDomain: "doctors-protal-3359b.firebaseapp.com",
    projectId: "doctors-protal-3359b",
    storageBucket: "doctors-protal-3359b.appspot.com",
    messagingSenderId: "309119284269",
    appId: "1:309119284269:web:ea507a9956d3066c1d74a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;