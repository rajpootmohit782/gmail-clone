import firebase from "firebase/compat/app";
//import getAuth from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5Geu3Fe8XEZ1ws1stsERA9SiC6bYNPkU",
  authDomain: "clone-with-reactjs-7a46e.firebaseapp.com",
  projectId: "clone-with-reactjs-7a46e",
  storageBucket: "clone-with-reactjs-7a46e.appspot.com",
  messagingSenderId: "31449465524",
  appId: "1:31449465524:web:29af34a93a51544a434de1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
//const provider2 = new firebase.auth.signInAnonymously();
console.log(auth, provider);
export { db, auth, provider };
