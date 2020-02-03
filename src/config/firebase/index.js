import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCHJzy-DnbLxVIGePX8TaMQZMQEFcXyu3I",
    authDomain: "hello-simple-note.firebaseapp.com",
    databaseURL: "https://hello-simple-note.firebaseio.com",
    projectId: "hello-simple-note",
    storageBucket: "hello-simple-note.appspot.com",
    messagingSenderId: "878578884286",
    appId: "1:878578884286:web:453cc6aa082893228bc8ef",
    measurementId: "G-QW5DP7FRYJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;