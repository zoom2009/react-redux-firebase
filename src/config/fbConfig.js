import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCH74EO0R-ogi6f8xMCHziv7zO_1sUMgoY",
    authDomain: "react-redux-firebase-9eabb.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-9eabb.firebaseio.com",
    projectId: "react-redux-firebase-9eabb",
    storageBucket: "",
    messagingSenderId: "837266302055",
    appId: "1:837266302055:web:37bcc03a9d5edea7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
