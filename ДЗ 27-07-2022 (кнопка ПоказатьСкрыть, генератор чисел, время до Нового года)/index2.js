//Цветные квадраты + серый квадрат, меняющий цвет при клике на цветные
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles2.css";

const divRoot = document.getElementById("root");
const root = ReactDOM.createRoot(divRoot);

root.render(
  <div>
    <Blocks />
  </div>
);

function Blocks() {
  let [colorBlock, setColor] = useState("grey");

  function colorOfBlock(color) {
    colorBlock === color ? setColor("grey") : setColor(color);
  }

  return (
    <div className="colors">
      <div className="green" onClick={() => colorOfBlock("green")}></div>
      <div className="yellow" onClick={() => colorOfBlock("yellow")}></div>
      <div className="red" onClick={() => colorOfBlock("red")}></div>
      <div className={`${colorBlock}`} onClick={() => colorOfBlock("grey")}></div>
    </div>
  );
}
