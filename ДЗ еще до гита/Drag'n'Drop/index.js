document.addEventListener("mousedown", function (event) {
  const elem = event.target;
  const moveable = elem.getAttribute("moveable");
  
  if (moveable !== null) {
    document.addEventListener("mousemove", moveBlock);
  }
});

function moveBlock(event) {
  const moveElem = event.target;
  
  moveElem.style.left = event.clientX - 25 + "px";
  moveElem.style.top = event.clientY - 25 + "px";
}

document.addEventListener("mouseup", function (event) {
  document.removeEventListener("mousemove", moveBlock);
});
