import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import "./styles.css";
import Massege from "./Massege";

root.render(
  <div>
    <Form />
  </div>
);

function Form() {

  const [inputLogin, getinputLogin] = useState(null);
  const [inputPass, getinputPass] = useState(null);
  const [displayTrue, getDisplayTrue] = useState("none");
  const [displayFalse, getDisplayFalse] = useState("none");

  function check() {
    event.preventDefault();
    getDisplayTrue('none')
    getDisplayFalse('none')
   
    inputLogin === "admin" && inputPass === "password"
      ? getDisplayTrue("block")
      : getDisplayFalse("block");
  }

  return (
    <div className={"content"}>

      <form>
       
        Login:
        
        <input
          type="text"
          className="login"
          value={inputLogin}
          onChange={(e) => getinputLogin(e.target.value)}
        ></input>
        
        Password:
        
        <input
          type="password"
          className="password"
          value={inputPass}
          onChange={(e) => getinputPass(e.target.value)}
        ></input>
        
        <button onClick={check}>Войти</button>
      
      </form>

      <Massege displayGreen={displayTrue} displayRed={displayFalse} />

    </div>
  );
}
