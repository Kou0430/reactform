import React from "react";
import css from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <input>名前</input>
    </div>
  );
};

export default Input;
