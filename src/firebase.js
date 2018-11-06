import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDL5IIvHEwu92ZZoVr9QVM8qfetUJhvN-g",
  authDomain: "lunch-rush-85a03.firebaseapp.com",
  databaseURL: "https://lunch-rush-85a03.firebaseio.com",
  storageBucket: "lunch-rush-85a03.appspot.com",
  messagingSenderId: "643236770566"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
