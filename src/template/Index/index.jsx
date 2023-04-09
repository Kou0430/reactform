import HeroImg from "@/comp/HeroImg";
import css from "./Index.module.scss";

const Index = () => {
  return (
    <div className={`${css["comp"]}`}>
      <HeroImg />
      {/* <div className={`${css["p-text"]}`}>test</div> */}
      {/* <div className={`${css["sample"]}`}>test</div> */}
    </div>
  );
};

export default Index;
