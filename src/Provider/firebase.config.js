// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkXsBDk_0Y8jePATvHSc9_h7is9GJ0llc",
  authDomain: "dargon-news-b312c.firebaseapp.com",
  projectId: "dargon-news-b312c",
  storageBucket: "dargon-news-b312c.appspot.com",
  messagingSenderId: "442828713071",
  appId: "1:442828713071:web:a8718ec92f12f63fc3b19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
