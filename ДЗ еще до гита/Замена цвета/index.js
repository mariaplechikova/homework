const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const grey = document.querySelector(".grey");
const colors = document.querySelector(".colors");

colors.addEventListener("mouseover", function (event) {
  if (event.target.className === 'green' || 
      event.target.className === 'yellow' ||
      event.target.className === 'red') {
        grey.classList.remove("grey");
        grey.classList.add(event.target.className);
  }
});

colors.addEventListener("mouseout", function (event) {
  if (event.target.className === 'green' || 
      event.target.className === 'yellow' ||
      event.target.className === 'red') {
        grey.classList.remove(event.target.className);
        grey.classList.add("grey");
      }
});
