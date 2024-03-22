// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3zZk46MY3INDTc10IMECnAqXgKmZZfnI",
  authDomain: "mern-book-inventory-fdd16.firebaseapp.com",
  projectId: "mern-book-inventory-fdd16",
  storageBucket: "mern-book-inventory-fdd16.appspot.com",
  messagingSenderId: "480720997766",
  appId: "1:480720997766:web:0ff12a62341dc1b1e1f007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;