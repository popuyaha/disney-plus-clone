// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEjLTWa4lXvJpHdZ8B2VHbdHEokAw2v9c",
  authDomain: "disney-react-clone-c618d.firebaseapp.com",
  projectId: "disney-react-clone-c618d",
  storageBucket: "disney-react-clone-c618d.appspot.com",
  messagingSenderId: "298215709292",
  appId: "1:298215709292:web:dfba550dd2a039d14e1649",
  measurementId: "G-ZM5BZGD2NH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage}
export default db;