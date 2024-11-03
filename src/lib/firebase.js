// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrs_Z4kOxaush7ZqiokuK-UI7kQ67_syo",
  authDomain: "image-uploader-edadb.firebaseapp.com",
  projectId: "image-uploader-edadb",
  storageBucket: "image-uploader-edadb.appspot.com",
  messagingSenderId: "369544751757",
  appId: "1:369544751757:web:b16d8509d4b0f7221390c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
