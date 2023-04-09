import React from "react";
import css from "./Head.module.scss";

const Head = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <p className={`${css["head"]}`}>{props.head}</p>
      <div className={`${css["imgCircle"]}`}>
        {/* publicディレクトリにcheck.pngを入れておく */}
        <img className={`${css["img"]}`} src="/check.png" alt="" />
      </div>
    </div>
  );
};

export default Head;
