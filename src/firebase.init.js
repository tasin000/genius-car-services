// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyAyVAz38jdpvoeVX0eKPmlFQfThP_0gScM",
  authDomain: "genius-car-services-9d6b7.firebaseapp.com",
  projectId: "genius-car-services-9d6b7",
  storageBucket: "genius-car-services-9d6b7.appspot.com",
  messagingSenderId: "208830818774",
  appId: "1:208830818774:web:9782c3965c9f3ecd541c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
