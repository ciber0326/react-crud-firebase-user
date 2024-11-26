import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAJS1Og9KplivmBfulYR3axbqcupYGwWCg",
    authDomain: "reactjs-firebase-store.firebaseapp.com",
    projectId: "reactjs-firebase-store",
    storageBucket: "reactjs-firebase-store.firebasestorage.app",
    messagingSenderId: "1066137147595",
    appId: "1:1066137147595:web:f9de3b2a770da67e1da34e",
    measurementId: "G-DES608E38R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
