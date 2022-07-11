// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATstBG7ZeA9x6uXEGThYpJuJDtanGCoBY",
  authDomain: "kvadrat-6e1bd.firebaseapp.com",
  projectId: "kvadrat-6e1bd",
  storageBucket: "kvadrat-6e1bd.appspot.com",
  messagingSenderId: "61954216595",
  appId: "1:61954216595:web:cd672736f7ac836853f366",
  measurementId: "G-VSXJHQ01H2"
};

try{
  firebase.initializeApp(firebaseConfig);
} catch(error){
  if(!/already exists/.test(error.message)){
      console.error('Firebase initialization error', error.stack)
  }
}

const app = initializeApp(firebaseConfig);
export const db = firebase.firestore();
export {app}
// const Firebase = firebase.initializeApp(firebaseConfig)
// // // Initialize Firebase
// // export const app = initializeApp(firebaseConfig);
// export const db = firebase.firestore()
// export {Firebase}
