// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFbjhAROco8bgfS7qS6aaXw0I3Yu0kX3E",
  authDomain: "netflix-clone-c14ee.firebaseapp.com",
  projectId: "netflix-clone-c14ee",
  storageBucket: "netflix-clone-c14ee.appspot.com",
  messagingSenderId: "867086817822",
  appId: "1:867086817822:web:f72a9cc0ccf0985a8dec0f",
  measurementId: "G-6TMPJS2SET"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }