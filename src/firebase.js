
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRYjGkGQX51LMneT6a9lLm-HWy5i6MZKU",
  authDomain: "react-authentication-f9d1d.firebaseapp.com",
  projectId: "react-authentication-f9d1d",
  storageBucket: "react-authentication-f9d1d.appspot.com",
  messagingSenderId: "593225618196",
  appId: "1:593225618196:web:de42799f9b614275d4e801",
  measurementId: "G-XQ8SZ7RT9S"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;
