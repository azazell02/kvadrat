// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwsed79AtMXIrqtJZMWc2C-ANoksTbk7I",
  authDomain: "solid-b83e9.firebaseapp.com",
  projectId: "solid-b83e9",
  storageBucket: "solid-b83e9.appspot.com",
  messagingSenderId: "520223087142",
  appId: "1:520223087142:web:2aa18107ae4779fed5a4e7",
  measurementId: "G-7RE8ZEP9YP"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

