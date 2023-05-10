// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN1Ohyr2D3dY3xysbzNGESmeyC2vxIJjY",
  authDomain: "fir-test-ec76c.firebaseapp.com",
  projectId: "fir-test-ec76c",
  storageBucket: "fir-test-ec76c.appspot.com",
  messagingSenderId: "75053791793",
  appId: "1:75053791793:web:abba4a5dccbe9c5beeb310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();