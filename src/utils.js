import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCinHiES4HeXLecoP-yUNsWpmpQRGHHNl8",
  authDomain: "subjects-finder.firebaseapp.com",
  databaseURL:
    "https://subjects-finder-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "subjects-finder",
  storageBucket: "subjects-finder.appspot.com",
  messagingSenderId: "690147203904",
  appId: "1:690147203904:web:f5a02140f2333a53d878a5",
};

const app = initializeApp(firebaseConfig);

export default app;
