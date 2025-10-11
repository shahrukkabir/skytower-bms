import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbAlWnpYNjM0-LIAx3VUgNvbLgVql4HPQ",
  authDomain: "srk-skytower.firebaseapp.com",
  projectId: "srk-skytower",
  storageBucket: "srk-skytower.appspot.com",
  messagingSenderId: "595426215427",
  appId: "1:595426215427:web:91c33000fb706a5a2cf036"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;   


