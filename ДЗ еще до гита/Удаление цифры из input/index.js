const input = document.getElementById("name");

input.addEventListener("keyup", function (event) {
  let num = input.value[input.value.length-1];
  if (
    num === "0" ||
    num === "1" ||
    num === "2" ||
    num === "3" ||
    num === "4" ||
    num === "5" ||
    num === "6" ||
    num === "7" ||
    num === "8" ||
    num === "9"
  ) {
    event.preventDefault();
    let arr = input.value.split("")
    arr.pop();
    input.value = arr.join("");
  }
});

 