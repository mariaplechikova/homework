import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import "./styles.css";

root.render(
  <div>
    <Form />
  </div>
);

function Form() {
  const [hideTrue, getHideTrue] = useState(false);
  const [hideFalse, getHideFalse] = useState(false);

  function check() {
    event.preventDefault();
    const login = document.querySelector(".login").value;
    const password = document.querySelector(".password").value;
    
    getHideTrue(false)
    getHideFalse(false)

    login === "admin" && password === "password" ? getHideTrue(true) : getHideFalse(true)
  }

  return (
    <div className={"content"}>
      <form>
        Login: <input type="text" className="login"></input>
        Password: <input type="password" className="password"></input>
        <button onClick={check}>Войти</button>
      </form>

      <div className="true" style={{ display: hideTrue ? 'block' : 'none' }}>
        Логин и пароль верные
      </div>
      <div className={"false"} style={{ display: hideFalse ? 'block' : 'none'}}>
        Логин и пароль неверные
      </div>
    </div>
  );
}
