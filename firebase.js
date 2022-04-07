// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: 1Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmY4l_YkUvYoYMUbQlpVgzGb2s3UbcWDE",
  authDomain: "vibhashu-c0ea3.firebaseapp.com",
  databaseURL: "https://vibhashu-c0ea3-default-rtdb.firebaseio.com",
  projectId: "vibhashu-c0ea3",
  storageBucket: "vibhashu-c0ea3.appspot.com",
  messagingSenderId: "777481585069",
  appId: "1:777481585069:web:985aa60b131e3413c5e124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)