import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const divRoot = document.getElementById("root");
const root = ReactDOM.createRoot(divRoot);

root.render(
  <div>
    <FavoriyeList />
  </div>
);

function FavoriyeList() {
  const [foods, setFoods] = useState(["Пицца", "Суши", "Пирожки"]);

  function addFood() {
    setFoods(foods.concat(["Хлеб"]));
  }

  function removeFood() {
    const newFoods = foods.filter((food, index) => index !== (foods.length - 1))
    setFoods(newFoods)
  }

  return (
    <div>
      <ul>
        {foods.map(function (food) {
          return <li>{food}</li>;
        })}
      </ul>
      <button onClick={addFood}>Добавить продукт</button>
      <button onClick={removeFood}>Удалить продукт</button>
    </div>
  );
}
