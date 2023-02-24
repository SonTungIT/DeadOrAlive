import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP6EzQU0w9mDDWbhFuShI7W9qc0jBKI2Q",
  authDomain: "web-game-b67e8.firebaseapp.com",
  projectId: "web-game-b67e8",
  storageBucket: "web-game-b67e8.appspot.com",
  messagingSenderId: "195041851151",
  appId: "1:195041851151:web:a4363691eccb687080b07a",
  measurementId: "G-M8BG7Y2KHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export{auth,provider};