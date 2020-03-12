import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAVChPjQw_thRgvzxzBoim-dy9iyuKYHrE",
  authDomain: "glitter-2d758.firebaseapp.com",
  databaseURL: "https://glitter-2d758.firebaseio.com",
  projectId: "glitter-2d758",
  storageBucket: "glitter-2d758.appspot.com",
  messagingSenderId: "1053007118572",
  appId: "1:1053007118572:web:7183877fc88583eea9e5c9",
  measurementId: "G-8ZG4WVZXVP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
