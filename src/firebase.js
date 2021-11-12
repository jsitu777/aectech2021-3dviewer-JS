import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
var firebaseui = require('firebaseui');
import "firebaseui/dist/firebaseui.css";


// firebase init
// TODO replace with your own credential
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHTn06Iy4pOB5oJ-aVQ-aRjHEQwmoCTBY",
  authDomain: "dviewer-r2.firebaseapp.com",
  projectId: "dviewer-r2",
  storageBucket: "dviewer-r2.appspot.com",
  messagingSenderId: "65008096937",
  appId: "1:65008096937:web:5fe0847a1084ab16163bb8",
  measurementId: "G-SV76BGK3GZ"
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var storage = firebase.storage().ref();

// export utils/refs
export {
  db,
  auth,
  storage,
  ui,
  firebase
}