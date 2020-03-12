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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (userAuth, ...otherData) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snap = await userRef.get();

  if (!snap.exists) {
    let { displayName, email } = userAuth;
    let createdAt = new Date();

    try {
      await userRef.set({
        id: userAuth.uid,
        displayName,
        email,
        createdAt,
        ...otherData
      });
    } catch (error) {
      console.log("Error creating new user: ", error.message);
    }
  }
  return userRef;
};

export default firebase;
