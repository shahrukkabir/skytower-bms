import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVSTtivCfuyGWU05Rqj0XInpIgA3krTp4",
  authDomain: "building-management-48de1.firebaseapp.com",
  projectId: "building-management-48de1",
  storageBucket: "building-management-48de1.firebasestorage.app",
  messagingSenderId: "384034246459",
  appId: "1:384034246459:web:78338594b95b73b758f11e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
