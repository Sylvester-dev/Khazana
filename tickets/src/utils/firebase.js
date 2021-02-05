import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDuTW_5KJc9PJxiE-vWZ8NR9zb3P_NbS30",
    authDomain: "khazana-ht.firebaseapp.com",
    projectId: "khazana-ht",
    storageBucket: "khazana-ht.appspot.com",
    messagingSenderId: "981788211252",
    appId: "1:981788211252:web:3e175fb3575ff762b43261",
    measurementId: "G-W7DSJ9Z88B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  export default firebase;