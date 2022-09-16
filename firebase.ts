// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnCejvF0_Eo1tl5DH0NFhTGOQSHO6X_FI",
    authDomain: "netflix-clone-yt-6aeee.firebaseapp.com",
    projectId: "netflix-clone-yt-6aeee",
    storageBucket: "netflix-clone-yt-6aeee.appspot.com",
    messagingSenderId: "1071618822921",
    appId: "1:1071618822921:web:a809fd7898d65c9430b9d8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }