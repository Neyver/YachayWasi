import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCV8h60J3i6M4z3r0xdIuwmhaWnm1KBw-I",
    authDomain: "yachay-wasi.firebaseapp.com",
    databaseURL: "https://yachay-wasi.firebaseio.com",
    projectId: "yachay-wasi",
    storageBucket: "yachay-wasi.appspot.com",
    messagingSenderId: "818998573097",
    appId: "1:818998573097:web:c4873edf8d8a31c3f8c438"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);