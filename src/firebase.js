import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2hkl5wY45nzRQ13SZ-qy4xky8nXukY4k",
  authDomain: "to-do-challenge-example.firebaseapp.com",
  databaseURL: "https://to-do-challenge-example.firebaseio.com",
  projectId: "to-do-challenge-example",
  storageBucket: "to-do-challenge-example.appspot.com",
  messagingSenderId: "481005458181",
  appId: "1:481005458181:web:b35dd7f62ab9e95165dd6c"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
