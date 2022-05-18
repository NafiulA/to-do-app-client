// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzsP8CC01gcenjLFCBxfC5T3AkBw79KjA",
    authDomain: "tasktodo-dc503.firebaseapp.com",
    projectId: "tasktodo-dc503",
    storageBucket: "tasktodo-dc503.appspot.com",
    messagingSenderId: "231014440354",
    appId: "1:231014440354:web:31df1436e2c467b198a6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;