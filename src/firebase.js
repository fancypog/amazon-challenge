import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_VQU5sxX46VAixgBoJA2tpCzmge8KwSE",
  authDomain: "clone-1fce3.firebaseapp.com",
  projectId: "clone-1fce3",
  storageBucket: "clone-1fce3.appspot.com",
  messagingSenderId: "190165919737",
  appId: "1:190165919737:web:565692ec4890d5a80b7f28",
  measurementId: "G-R39N2J08WP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };