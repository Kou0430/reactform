import React from "react";
import css from "./Member.module.scss";

const Member = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <img className={`${css["img"]}`} src={props.img} alt="" />
      <p className={`${css["name"]}`}>{props.name}</p>
    </div>
  );
};

export default Member;
