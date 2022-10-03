const language = window.navigator.languages;

const ol = document.querySelector("ol");
for (let i = 0; i < language.length; i++) {
  ol.innerHTML += `<li>${language[i]}</li>`;
}

const liAll = document.querySelectorAll('li')
for (let i = 0; i < liAll.length; i++) {
  if (liAll[i].innerText === "en-US") {
    liAll[i].style.fontWeight = 'bold'
  }
}