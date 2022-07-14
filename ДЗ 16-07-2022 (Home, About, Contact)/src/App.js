import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Menu from "./Menu";
import PageHome from "./PageHome";
import PageAbout from "./PageAbout";
import PageContact from "./PageContact";

export default function App() {
  return (
    <div className="App">
      <Menu />

      <Routes>
        <Route exact path="/" element={<PageHome />} />
        <Route exact path="/about" element={<PageAbout />} />
        <Route exact path="/contact" element={<PageContact />} />
      </Routes>
    </div>
  );
}

// 1. Создайте отдельный компонет Menu
// в файле Menu.js и подключите его к
// App.js

// 2. Сверстать меню. Добавить две ссылки
// Home(путь /) и About(путь /about)

// 3. Создайте компонент PageHome и PageAbout
// <div>Home Page</div> и <div>About Page</div>

// 4. Добавить роутинг
// - Установили зависимость react-router-dom.
// Открываем командную строку в корне проекта(где файл package.json)
// и выполняем команду npm install react-router-dom
// - В файле src/index.js добавляем BrowserRouter
// - В файле App.js добавляем Routes и Route компоненты
// для Route компонентов прописываем пути и то, что они
// будут отображать.
// - В файле src/Menu.js изменить a элементы на Link
// компонент. Атрибут href поменять на to.
