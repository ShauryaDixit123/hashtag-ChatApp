// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRYTHuKxF9yllFzcPNuCU_ZXaesgfs27o",
  authDomain: "hashtag-chatapp.firebaseapp.com",
  databaseURL: "https://hashtag-chatapp-default-rtdb.firebaseio.com",
  projectId: "hashtag-chatapp",
  storageBucket: "hashtag-chatapp.appspot.com",
  messagingSenderId: "309894133883",
  appId: "1:309894133883:web:c39105e410d281de308ade",
  measurementId: "G-GS7PBFJJH5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
