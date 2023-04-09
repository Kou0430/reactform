import { useState } from "react";
import firebase from "firebase/app";
import "firebase/database";
import Button from "@/comp/Button";

const Form = () => {
  const [name, setName] = useState("");

  // Firebaseの初期化
  const firebaseConfig = {
    // Firebaseの設定を追加
    apiKey: "AIzaSyC6szYTu2P-FQCV_X27ukiI3BQq0W-myCM",
    authDomain: "newform-604a7.firebaseapp.com",
    databaseURL: "https://newform-604a7-default-rtdb.firebaseio.com",
    projectId: "newform-604a7",
    storageBucket: "newform-604a7.appspot.com",
    messagingSenderId: "531143662145",
    appId: "1:531143662145:web:cb1acc91ebd407df9d84c0",
    measurementId: "G-NQQ1YDS9E5",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const database = firebase.database();
  // フォームが送信されたときに実行される関数
  const handleSubmit = (event) => {
    event.preventDefault();

    // Firebase Realtime Databaseに名前を追加
    const newAttendeeRef = database.ref("names").push();
    newAttendeeRef.set({
      name: name,
    });

    // 入力をリセット
    setName("");
  };

  // 名前の入力が変更されたときに実行される関数
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <Button text={"参加する"} a="/" />
      </form>
    </>
  );
};

export default Form;
