//Компонент который рассчитывает, сколько дней, часов, минут и секунд осталось до Нового года
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <TimeNewYear />
  </div>
);

function TimeNewYear() {

const [days, getDays] = useState()
const [hours, getHours] = useState()
const [minuts, getMinuts] = useState()
const [seconds, getSeconds] = useState()

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;
const newyear = new Date(2022, 11, 31, 23, 59, 59);

  function getTime() {
    const now = new Date();
    const millisecondsEnd = newyear.getTime() - now.getTime();
  
    const daysEnd = parseInt(millisecondsEnd / ONE_DAY);
    const hoursEnd = parseInt(millisecondsEnd / ONE_HOUR - daysEnd * 24);
    const minutesEnd = parseInt(millisecondsEnd / ONE_MINUTE - (daysEnd * 24 + hoursEnd) * 60);
    const secondsEnd = parseInt(millisecondsEnd / ONE_SECOND -((daysEnd * 24 + hoursEnd) * 60 + minutesEnd) * 60);
  
    getDays(daysEnd)
    getHours(hoursEnd)
    getMinuts(minutesEnd)
    getSeconds(secondsEnd)
  }

  setInterval(getTime, 1000)

  return (
    <div>
      До Нового года осталось:
      <div>Дней - {days}</div>
      <div>Часов - {hours}</div>
      <div>Минут - {minuts}</div>
      <div>Секунд - {seconds}</div>
    </div>
  )
}
