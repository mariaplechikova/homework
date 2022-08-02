//Кнопка "Показать/Скрыть"
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import './styles1.css'

const divRoot = document.getElementById('root')
const root = ReactDOM.createRoot(divRoot)

root.render(
  <div>
    <HelloWorldShow />
  </div>
)

function HelloWorldShow() {
  const [hide, setHide] = useState(true)

    function show() {
    console.log('show')
    setHide(!hide)
  }

  return (
    <div>
      <button onClick={show}>{hide ? 'Показать' : 'Скрыть'}</button>
      <div style={{display: hide ? 'none' : 'block'}}>Hello World</div>
    </div>
  )

}
