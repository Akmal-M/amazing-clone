import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBzh4-oCghlq3gWagOHrWSqmBAXSrKsul4",
    authDomain: "amazing-app-3e7d9.firebaseapp.com",
    projectId: "amazing-app-3e7d9",
    storageBucket: "amazing-app-3e7d9.appspot.com",
    messagingSenderId: "842065456422",
    appId: "1:842065456422:web:23054e36e3c9baff14e5e7",
    measurementId: "G-V6EJ2W73YB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};