//Компонент для генерации случайных чисел
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <RandomNumber />
  </div>
);

function RandomNumber() {

  const [number, getNumber] = useState()

  function generate() {
    getNumber(Math.floor(Math.random() * 101))
  }

  return (
    <div>
      <button onClick = {generate}>Сгенерировать случайное число</button>
      <div>{number}</div>
    </div>
  )
}
