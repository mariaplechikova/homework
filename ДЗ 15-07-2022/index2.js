import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
      <FavoriteFood/>
    </div>
);

function FavoriteFood() {
  const foods = [ 'Пицца', 'Суши', 'Пирожки' ]

//Первый способ
// let newFood =[]
// for (let i = 0; i < foods.length; i++) {
//   newFood.push(`<div>${foods[i]}</div>`)
// }

//Второй способ
// let newFood =[]
// for (let value of foods) {
//   value = `<div>${value}</div>`
//   newFood.push(value)
// }

//Третий способ
let newFood = foods.map(value => `<div>${value}</div>`)

console.log(newFood)

return

}
