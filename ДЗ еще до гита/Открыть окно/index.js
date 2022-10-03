const buttonOpen = document.querySelector(".open");
const buttonClose = document.querySelector(".close");

let newWin

buttonOpen.addEventListener("click", function () {
  newWin = window.open("https://ya.ru", "yandex", "width=640,height=480");
  newWin.moveBy(100, 150)
});

buttonClose.addEventListener("click", function () {
  newWin.close();
});
