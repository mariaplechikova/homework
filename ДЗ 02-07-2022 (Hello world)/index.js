// Задание 1
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// const divRoot = document.getElementById('root')
// const root = ReactDOM.createRoot(divRoot)

// root.render(
//   <div>
//     <HelloWorld>
//     </HelloWorld>
//   </div>
// )

// function HelloWorld() {
//   let [username, setUsername] = useState("nik")

//   console.log(username)

//   function clickMe() {
//     // alert('test')
//     setUsername('new nik')
//   }

//   return (
// <div>
//     <div>Привет {username}</div>
//       <button onClick={clickMe}>Нажми меня</button>
//     </div>
//   )
// }

// Задание 2
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const divRoot = document.getElementById('root')
const root = ReactDOM.createRoot(divRoot)

root.render(
  <div>
    <Counter />
  </div>
)

function Counter() {
  const [count, setCount] = useState(0)

  function Inc(i) {
    setCount(count + i)
  }

  function Dec(i) {
    setCount(count - i)
  }

  return (
    <div>
      <div>Значение {count}</div>
      <button onClick={ () => Inc(1) }>+1</button>
      <button onClick={ () => Dec(1) }>-1</button>
      <button onClick={ () => Inc(2) }>+2</button>
      <button onClick={ () => Dec(2) }>-2</button>
    </div>
  )
}