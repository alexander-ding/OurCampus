import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';

/**
 * Configuration object for Firebase to link to the right project
 */
const firebaseConfig = {
  apiKey: "AIzaSyBIfyGOAh7Qj6ZAOqeSqHVWPn1OKgrVKNU",
  authDomain: "hackatbrown2021.firebaseapp.com",
  projectId: "hackatbrown2021",
  storageBucket: "hackatbrown2021.appspot.com",
  messagingSenderId: "93204659820",
  appId: "1:93204659820:web:6f69cd321512067acc6249",
  measurementId: "G-VCHS2CBKZ8"
};

/**
 * React-Redux-Firebase config
 */
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, 
  // enableClaims: true,
};

/**
 * Redux-Firestore config
 */
const rfConfig = {};

firebase.initializeApp(firebaseConfig);
firebase.functions();
firebase.firestore();
if (process.env.NODE_ENV === 'production') {
  firebase.performance();
} else {
  firebase.auth().useEmulator('http://localhost:9099/');
  firebase.functions().useEmulator('localhost', 5001);
  firebase.firestore().useEmulator('localhost', 8080);
}

export const enhanceStore = reduxFirestore(firebase, rfConfig);

export const setupFB = (store) => ({
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
});