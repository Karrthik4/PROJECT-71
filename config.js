import firebase from 'firebase'
require("@firebase/firestore")

  var firebaseConfig = {
    apiKey: "AIzaSyDQL3Di-9kxI32xUBxeig6gzIDrwctaeGI",
    authDomain: "storyhub-a9b5d.firebaseapp.com",
    projectId: "storyhub-a9b5d",
    storageBucket: "storyhub-a9b5d.appspot.com",
    messagingSenderId: "690035805362",
    appId: "1:690035805362:web:f24fa15334b3de8a4b0dab"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default  firebase.firestore()   
