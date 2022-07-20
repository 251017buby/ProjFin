import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyD3FIdxT0Isu3Ud7UlCff1321z8CoDnO3Y",
    authDomain: "finproj-1f440.firebaseapp.com",
    projectId: "finproj-1f440",
    storageBucket: "finproj-1f440.appspot.com",
    messagingSenderId: "267143857581",
    appId: "1:267143857581:web:fbae97101810ed61290d24"
  };


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;