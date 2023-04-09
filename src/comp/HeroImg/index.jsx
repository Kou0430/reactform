import React from "react";
import css from "./HeroImg.module.scss";

const HeroImg = () => {
  return <img className={`${css["img"]}`} src="/hero.png" alt="" />; // src属性の先頭の「/」はpublicディレクトリ
};

export default HeroImg;
