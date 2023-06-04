import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUaUMNDvzxA6rD9qwCXvxBBJtyxQpniqg",
    authDomain: "vue-bplan.firebaseapp.com",
    databaseURL: "https://vue-bplan.firebaseio.com",
    projectId: "vue-bplan",
    storageBucket: "vue-bplan.appspot.com",
    messagingSenderId: "543047472360",
    appId: "1:543047472360:web:3a05bb12626c9a3eff255d",
    measurementId: "G-W1F6WG2YMB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore();

export {
  analytics,
  auth,
  db,
  doc,
  getDoc,
  setDoc,
}