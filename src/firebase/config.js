// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRX9ZABL2Cx89tM--oPSejo3TIFimxuDg",
  authDomain: "stuff-ec22e.firebaseapp.com",
  projectId: "stuff-ec22e",
  storageBucket: "stuff-ec22e.appspot.com",
  messagingSenderId: "118309948962",
  appId: "1:118309948962:web:42c9dec80949d93148847b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app