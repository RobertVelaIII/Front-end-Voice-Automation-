import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration.
const firebaseConfig = {
  apiKey: "AIzaSyBFDe_dCIOPT_FBzNTM2nUPRJzbGV-kkwU",
  authDomain: "callify-backend.firebaseapp.com",
  projectId: "callify-backend",
  storageBucket: "callify-backend.appspot.com",
  messagingSenderId: "383133649093",
  appId: "1:383133649093:web:0e4d381348d38246df48ac"
};

// Initialize Firebase for client-side usage
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
