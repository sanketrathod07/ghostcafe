import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv8npJ9ZfO868DwV61rt2jTmfeTiSwmMQ",
  authDomain: "ghost-cafe-b0cd6.firebaseapp.com",
  databaseURL: "https://ghost-cafe-b0cd6-default-rtdb.firebaseio.com",
  projectId: "ghost-cafe-b0cd6",
  storageBucket: "ghost-cafe-b0cd6.appspot.com",
  messagingSenderId: "1092719766381",
  appId: "1:1092719766381:web:9d664ba2354ea50d92c864",
  measurementId: "G-6K7E2EYD8B"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database } 