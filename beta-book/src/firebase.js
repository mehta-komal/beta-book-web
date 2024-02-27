import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDpMcLJVZZieaW9-kJQPTrFbL2F3uRWyHM",
  authDomain: "shopper-app-7497d.firebaseapp.com",
  projectId: "shopper-app-7497d",
  storageBucket: "shopper-app-7497d.appspot.com",
  messagingSenderId: "312473458195",
  appId: "1:312473458195:web:ad13effe10239ccd5791e6"
};

const app = firebase.initializeApp(firebaseConfig);
export const myDatabase = firebase.firestore();