// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA86aF2MZFmoXG2xK4jc5j742CoB6Iz6t0",
  authDomain: "dsi-constructora.firebaseapp.com",
  projectId: "dsi-constructora",
  storageBucket: "dsi-constructora.appspot.com",
  messagingSenderId: "262785508897",
  appId: "1:262785508897:web:f398fae176d6b4f1446560",
  measurementId: "G-J6Z89BRHD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const storageRef = ref(storage);

const imageRef= ref (storage, 'images');
const sparkyRef= ref (storage, 'images/sparky.jpg');