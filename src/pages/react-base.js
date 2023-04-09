import React from "@/pages/react-base";
import { useEffect, useState } from "react";

const ReactBase = (props) => {
  const [count, setcount] = useState(0);
  const [isShow, setisShow] = useState(false); // ①

  const handleClick = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    if (count > 5) {
      setisShow(true); // ②
    }
  }, [count]);

  return (
    <div>
      <p style={{ color: count > 10 ? "red" : "black" }}> {isShow && count}</p>
      <button onClick={handleClick}>count up</button>
    </div>
  );
};

export default ReactBase;
