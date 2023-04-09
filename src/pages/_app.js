import "../css/app.scss";
import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        // Firebaseの設定
        apiKey: "AIzaSyC6szYTu2P-FQCV_X27ukiI3BQq0W-myCM",
        authDomain: "newform-604a7.firebaseapp.com",
        databaseURL: "https://newform-604a7-default-rtdb.firebaseio.com",
        projectId: "newform-604a7",
        storageBucket: "newform-604a7.appspot.com",
        messagingSenderId: "531143662145",
        appId: "1:531143662145:web:cb1acc91ebd407df9d84c0",
        measurementId: "G-NQQ1YDS9E5",
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
