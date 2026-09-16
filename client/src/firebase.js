import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your exact configuration keys
const firebaseConfig = {
  apiKey: "AIzaSyANClzqJzKwWqloLGuWKWICUKcxNJ4wrgw",
  authDomain: "tripmate-9314d.firebaseapp.com",
  projectId: "tripmate-9314d",
  storageBucket: "tripmate-9314d.firebasestorage.app",
  messagingSenderId: "117524350344",
  appId: "1:117524350344:web:70138220d0b395dc4b663d",
  measurementId: "G-8QBRYKL8LP"
};

// Initialize Firebase and export the auth tools
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();