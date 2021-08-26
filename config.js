import * as firebase from "firebase";
require ("@firebase/firestore")

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOr3gBgqgHqMoJOJ_H5X5HLtWbBHnSQTk",
    authDomain: "willyapp-3569a.firebaseapp.com",
    projectId: "willyapp-3569a",
    storageBucket: "willyapp-3569a.appspot.com",
    messagingSenderId: "771640608017",
    appId: "1:771640608017:web:c6e23d316c047f62a3b8b0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore;