import firebase from "firebase/app";

const firebaseConfig = {
    
    apiKey: "AIzaSyC1uJYz4wm-Z1wcZ-HG6u0kyGjnkUUFbXc",
    authDomain: "yachaywasialfa.firebaseapp.com",
    projectId: "yachaywasialfa",
    storageBucket: "yachaywasialfa.appspot.com",
    messagingSenderId: "188852041007",
    appId: "1:188852041007:web:6ca6561888fad2c85c5dda",
    measurementId: "G-2R131E41CB"
    //apiKey: "AIzaSyDmq9Tk5IpYzBeM5OSwqZECYckLMjU8kTo",
    //authDomain: "yachaywasibeta.firebaseapp.com",
    //databaseURL: "https://yachaywasibeta.firebaseio.com",
    //projectId: "yachaywasibeta",
    //storageBucket: "yachaywasibeta.appspot.com",
    //messagingSenderId: "422577457060",
    //appId: "1:422577457060:web:8402f3e656fce4f772e331",
    //measurementId: "G-9J9JHRS4LE"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);