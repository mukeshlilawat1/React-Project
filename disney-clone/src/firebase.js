
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeU-VNAqU79qQvQU0HcndZDOrmV5wGunw",
    authDomain: "device-streaming-ca5b1e61.firebaseapp.com",
    projectId: "device-streaming-ca5b1e61",
    storageBucket: "device-streaming-ca5b1e61.firebasestorage.app",
    messagingSenderId: "890865915081",
    appId: "1:890865915081:web:52cc7485149eba5215a918"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;