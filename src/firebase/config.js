import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAmZZB8F6nw_Z9fJxaakr9MN2vc61-Rqko",
  authDomain: "evergreen-fitness.firebaseapp.com",
  projectId: "evergreen-fitness",
  storageBucket: "evergreen-fitness.appspot.com",
  messagingSenderId: "1077117133490",
  appId: "1:1077117133490:web:4be652a8db50acd4361fab"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fitnessStorage = firebase.storage();
const fitnessFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default { fitnessStorage, fitnessFirestore, timestamp, app, auth };


