import React from "react";
import Button from "@/comp/Button/index";
import Index from "@/template/Index";
import Head from "@/comp/Head/index";
import Member from "@/comp/Member/index";
import { useState } from "react";
import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const Index_Page = () => {
  const [names, setNames] = useState([]);

  // Firebase Realtime Databaseから名前の一覧を取得
  useEffect(() => {
    const firebaseConfig = {
      // ここにFirebaseの設定を追加
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
    const ref = database.ref("names");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      const nameList = [];
      for (let key in data) {
        nameList.push({ id: key, name: data[key].name });
      }
      setNames(nameList);
    });
  }, []);

  return (
    <div>
      <Index />
      <Button text={"参加する"} a="form.html" />
      <Head head={"場所"} />
      <Member img={"/Kevin.png"} name={"attendance"} />
      <div>
        <h1>出席者一覧</h1>
        <ul>
          {names.map((name) => (
            <li key={name.id}>{name.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index_Page;
