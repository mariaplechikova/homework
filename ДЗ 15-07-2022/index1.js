import React, { useState } from 'react';
  import ReactDOM from 'react-dom/client';

  const divRoot = document.getElementById('root')
  const root = ReactDOM.createRoot(divRoot)

  root.render(
    <div>
      <HelloWorld name="nik" lang="en"/>
      <HelloWorld name="ник" lang="ru"/>
    </div>
  )

  function HelloWorld(props) {

    if (props.lang === "en") {
      return (
        <div>Привет, {props.name}</div>
      )
    }
    if (props.lang === "ru") {
      return (
        <div>Привет, {props.name}</div>
      )
    }
  }