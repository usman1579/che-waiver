import * as firebase from 'firebase';
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
// import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBEzsPbT57IzNlyTzlC1WlTl2TU5oDuqX0",
    authDomain: "whim-app-d67d2.firebaseapp.com",
    databaseURL: "https://whim-app-d67d2.firebaseio.com",
    projectId: "whim-app-d67d2",
    storageBucket: "whim-app-d67d2.appspot.com",
    messagingSenderId: "829020429092",
    appId: "1:829020429092:web:c991b3ab2a472d712bf1b1",
    measurementId: "G-YKP2HSTVPH"
  };
  // Initialize Firebase
const Fire =  firebase.initializeApp(firebaseConfig);
export default Fire;