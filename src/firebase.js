import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDR4AjmMpWVWkfDi5LPW0K21lUyeufhOMU",
    authDomain: "ecommers-cce5e.firebaseapp.com",
    projectId: "ecommers-cce5e",
    storageBucket: "ecommers-cce5e.appspot.com",
    messagingSenderId: "263509263512",
    appId: "1:263509263512:web:c4cc8b25a0ebe0b129bced"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();